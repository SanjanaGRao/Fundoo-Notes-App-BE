const mongoose = require('mongoose');
const dbConfig = require('./database.config');
const logger = require('../winston_logger');

const dbConnect = () => {
    mongoose.connect(dbConfig.url, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database");
        logger.info("Connected to Database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });
}

module.exports = dbConnect();