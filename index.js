const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/user', (req, res) => res.send('{"user_id" : 1, "username" : "john", "password" : "123456"}'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));