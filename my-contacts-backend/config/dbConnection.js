const mongoose = require('mongoose');
const { constants } = require('../constants');
const dotenv = require('dotenv').config();

const connectionString = constants.CONNECTION_STRING;

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(connectionString);
        console.log(
            "MongoDB connected successfully",
            connect.connection.host,
            connect.connection.name
        );
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = { connectDB };