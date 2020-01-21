const express = require('express');

const app = express();
const mongoose = require('mongoose');
require('dotenv/config');



app.get('/', (req, res) => {
    res.send ('We are on home')
})
app.get('/posts', (req, res) => {
    res.send ('We are on POsts')
})

mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('conectado')
);

//

//() => console.log('esta conectado caralho');
    


app.listen(3000);
