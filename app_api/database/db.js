const mongoose = require('mongoose');


const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_CLUSTER,
    DB_AUTHSOURCE,
    DB_AUTHMECH
} = process.env;

//function to connect to DB
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.${DB_AUTHSOURCE}/?${DB_AUTHMECH}`, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("Database connected");
    } catch (err) {
        console.error(err);
    }
}

require('./models/lists');
require('./models/users');

module.exports = connectDB;