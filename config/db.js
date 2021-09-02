const oracledb = require('oracledb');

exports.dbConfig = async()=>{
    try{
        oracledb.initOracleClient({libDir: 'C:\\Users\\Lenovo\\instantclient_19_11'});
        return await oracledb.getConnection({
            user: "ONTPPA",
            password: "ONTPPA2019$",
            connectString: "10.41.190.226:1521/AMZDBQAS"
        });
    }
    catch(err){
        console.log(err)
        throw err
    }
}
