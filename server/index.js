const express = require("express");
const config = require('config');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');

const PORT = config.get("port") || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.get('/', (req, res) => {
    res.status(200).json({message: 'test'})
})


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

