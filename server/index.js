const express = require("express");
const config = require('config');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');

const PORT = config.get("port") || 5000;

const app = express();

app.use(cors());
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
// app.use(express.static(path.resolve(__dirname, '/static')));
app.use("/", express.static(path.resolve(__dirname, 'static')));
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

