import db from "./config/db";

const bodyParser = require("body-parser");
const express = require("express");
const logger = require("./config/logger").default;

const app = express();

const PORT = process.env.PORT || 3000;


const run = async () => {

    app.use(bodyParser.json());

    await db();
    app.listen(PORT, () => {
        logger.info(`Pablo artsy running on PORT ${PORT} INFO`);
        logger.error(`Pablo artsy running on PORT ${PORT} error`);
    })
}

run();