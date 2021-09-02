const { validate } = require('../../config/validate')
const {checkSchema} = require('express-validator');
const {providerSchema} = require('../schemas/provider.schema');
const providerService = require("./../services/provider.service");
const router = require("express").Router();

module.exports = app => {
    router.post('/providers', validate(checkSchema(providerSchema)), async (req,
                                                                        res) => {
        const body = req.body;
        return await providerService.getAll(body, res);
    });
    app.use('/api/', router);
};
