const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/product', (req, res) => res.send('Product 1'));

app.get('/sale', (req, res) => res.send('Sale product 1'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));