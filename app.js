const express = require('express');
const app = express();
const routes = require('./routes');

const port = 3000;

app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/login', routes.loginProcess);
app.get('/chat', routes.chat);

app.listen(process.env.PORT || port);
console.log(`App server running on port ${port}`);
