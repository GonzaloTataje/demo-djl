const { validate } = require('../../config/validate')
const {checkSchema} = require('express-validator');
const {templateSchema} = require('./../schemas/template.schema');
const templateService = require("./../services/template.service");
const router = require("express").Router();

module.exports = app => {
    router.get('/template/', validate(checkSchema(templateSchema)), async (req,
                                                                       res) => {
        const body = req.body;
        return await templateService.getTemplate(body, res);
    });
    app.use('/api/', router);
};

// http://127.0.0.1:4040/api/template
// {
//     "userMail": "ONTPED",
//     "sendType": "0",
//     "attachedFlag": "0",
//     "templateCode": "24"
// }
