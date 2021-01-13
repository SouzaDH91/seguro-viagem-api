const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();

const uri = 'mongodb+srv://admin:10minutos@cluster0.tbyea.mongodb.net/<dbname>?retryWrites=true&w=majority';

//const uri = 'mongodb://localhost:27017/db_seguro';


mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('MongoDB conectado com sucesso!');
    }
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());


app.use(routes);

app.listen(process.env.PORT || '3000', () => {

    console.log('Servidor funcionando no caminho: http://localhost:3000')
})