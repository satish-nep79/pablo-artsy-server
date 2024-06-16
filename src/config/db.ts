import logger from "./logger";

require("dotenv").config();
const mongoose = require("mongoose");

const db = async () => {
    try {
        logger.info("Connecting to DB");

        mongoose.set("strictQuery", true);
        await mongoose.connect(process.env.MONGO_URL);

        logger.info("Connected to DB");
        return mongoose;
    } catch (e) {
        logger.error(`Db connection error ==> ${e}`);
    }
}



export default db;
