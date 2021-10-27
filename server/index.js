const express = require("express");
const config = require('config');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = config.get("port") || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router);

app.use(errorHandler);


const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log('Server Started on ' + PORT));
    } catch (error) {
        console.log(error);
    }
}
start();

