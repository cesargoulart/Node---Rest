const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

//Midleware
app.use(cors());

app.use(bodyParser.json());

//Importar Routes
const postRoute = require('./routes/post');

app.use('/post', postRoute)


app.get('/', (req, res) => {
    res.send ('We are on home')
})

mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('conectado')
);

//

//() => console.log('esta conectado caralho');
    


app.listen(3000);
