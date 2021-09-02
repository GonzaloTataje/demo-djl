const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send({ message: "Welcome to test api." });
});

require("./documents/controllers/status.controller")(app);
require("./documents/controllers/provider.controller")(app);
const PORT = 4040;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


module.exports.handler = serverless(app)
