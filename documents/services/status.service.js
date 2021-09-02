const {url} = require('../../config/http-common');

exports.getAll = async(req, res)=>{
    try {
        const response = await url.get(
            'digitalFilesStatus', {
                    params:{
                        'pageNumber': req.pageNumber,
                        'pageSize': req.pageSize,
                        'type': req.type
                    }
            });
        res.status(200).send(response.data);
    } catch (err) {
        res.status(500).send({ message: err });
    }
}
