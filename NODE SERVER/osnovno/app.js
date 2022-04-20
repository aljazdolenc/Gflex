const mongoose = require('mongoose');
const http = require('http');
const express = require('express');
const { string } = require('joi');
const pug = require('pug');
const app = express;

mongoose.connect('mongodb://localhost')
    .then(()=> console.log('Connected to the Database'))
    .catch(err=>console.error('Could not connect to db', err));

let User = new mongoose.model("User", new mongoose.Schema({ 
        firstName: { type: String, required: true},
        lastName: { type: String, required: true},
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true}
}));

app.get('/', (req, res) =>{
 res.render();
});

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/'){
       res.write('Hello Wolrld');
        res.end();
    };
});


app.listen(3000, ()=> {
    console.log('Listening on port: ' + port);
});


console.log('Listening on port 3000...');
