import mongoose from 'mongoose';
import config from './config';

(async() => {
    try {
        const connectionOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
                // user : config.MONGO_USER,
                // pass : config.MONGO_PASS
        };
        const db = await mongoose.connect(`mongodb://${config.HOST}/${config.MONGO_DB}`, connectionOptions);
        console.log(db.connection.name);
    } catch (error) {
        console.log(error);
    }
})();