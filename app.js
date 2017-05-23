const express = require('express');
const app = express();
const routes = require('./routes');
const errorHandlers = require('./middleware/errorhandlers');

const port = 3000;

app.use(errorHandlers.notFound);
app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/login', routes.loginProcess);
app.get('/chat', routes.chat);

app.listen(process.env.PORT || port);
console.log(`App server running on port ${port}`);
