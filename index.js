const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/product', (req, res) => res.send('Product 1'));
app.get('/sale', (req, res) => res.send('Sale product 1'));
app.get('/user', (req, res) => res.send('{"user_id" : 1, "username" : "john", "password" : "123456"}'));

app.get('/discount-rate', (req, res) => res.send(10));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));