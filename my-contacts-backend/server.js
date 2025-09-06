const express = require('express');
const { errorHandler } = require('./middleware/errorHandler');
const { constants } = require('./constants');
const { connectDB } = require('./config/dbConnection');
const dotenv = require('dotenv').config();

connectDB();
const app = express();
const port = constants.PORT;

app.use(express.json());
app.use(constants.CONTACTS_API_BASE, require("./routes/contactsRoutes"));
app.use(constants.USERS_API_BASE, require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
