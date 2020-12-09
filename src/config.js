import { config } from 'dotenv';
config();

module.exports = {

    PORT: process.env.PORT || 3000,
    HOST: process.env.HOST,
    MONGO_DB: process.env.MONGO_DB,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASS: process.env.MONGO_PASS

}