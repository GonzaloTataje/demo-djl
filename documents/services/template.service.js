const {dbConfig} = require('../../config/db');
const oracle = require('oracledb');
const {getTime} = require('../../config/util');
const {templateRow} = require('../mapper/template.mapper');

exports.getTemplate = async(req, res)=>{
    const connection = await dbConfig();
    let query;
    let bind= {}
    try{
        query = 'BEGIN PCK_PPA_CORREO.SP_ONTPPA_S_OBTENER_PLANTILLA(:pv_usrapp, :pv_tipo_envio, :pv_flag_adjunto, :pt_fecha_programada, :pn_cod_plantilla, :k_cursor, :pn_codigo, :pv_mensaje, :pn_codigo_envio); if(:k_cursor IS NULL) then OPEN :k_cursor FOR SELECT * FROM dual WHERE 1 = 0; end if; END;';
        bind.pv_usrapp = req.userMail;
        bind.pv_tipo_envio = req.sendType;
        bind.pv_flag_adjunto = req.attachedFlag;
        bind.pt_fecha_programada = await getTime();
        bind.pn_cod_plantilla = req.templateCode;
        bind.k_cursor = {type: oracle.CURSOR, dir:oracle.BIND_OUT};
        bind.pn_codigo = {type: oracle.NUMBER, dir:oracle.BIND_OUT};
        bind.pv_mensaje = {type: oracle.STRING, dir:oracle.BIND_OUT};
        bind.pn_codigo_envio = {type: oracle.NUMBER, dir:oracle.BIND_OUT};
        const result = await connection.execute(query, bind);
        let k_cursor = 'k_cursor';
        const template = await templateRow(result.outBinds[k_cursor])
        res.status(200).send(template);
    }catch (err){
        res.status(500).send({'message': String(err)});
    }
}
