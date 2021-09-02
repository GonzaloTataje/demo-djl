const axios = require("axios");
exports.url = axios.create({
    baseURL: "https://ace-auna-qa-https-app-connect.npos.auna.pe/billingProvider/v1/",
    headers: {
        "Content-type": "application/json",
    },
});

