const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');


const jsonParser = bodyParser.json()


const app = express();

app.use('/api/auth',jsonParser, require('./routes/auth.routes'))
app.use('/api/product',jsonParser,  require('./routes/product.routes')) 

const PORT = config.get('port') || 5000;

async function start(){
    try{
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        })
    } catch(e){
        console.log("Server Error", e.message);
        process.exit(1);
    }
}


app.listen(PORT, () => console.log('App startet on PORT ' + PORT));

app.post("/someRoute", function(req, res) {
    console.log(req.body);
    res.send({ status: 'SUCCESS' });
  });

start();