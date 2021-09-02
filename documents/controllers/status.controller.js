const { validate } = require('../../config/validate')
const {checkSchema} = require('express-validator');
const {statusSchema} = require('./../schemas/status.schema');
const statusService = require("./../services/status.service");
const router = require("express").Router();

module.exports = app => {
    router.get('/status/', validate(checkSchema(statusSchema)), async (req,
                                                                       res) => {
        const body = req.body;
        return await statusService.getAll(body, res);
    });
    app.use('/api/', router);
};

// http://127.0.0.1:4040/api/status
//{
//     "pageNumber": "1",
//     "pageSize": "1",
//     "type": "1"
// }
