const express = require('express');
const app = express();
const routes = require('./routes');
const errorHandlers = require('./middleware/errorhandlers');
const log = require('./middleware/log');

const port = 3000;

app.use(log.logger);
app.use(express.static(__dirname + '/static'));
app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/login', routes.loginProcess);
app.get('/chat', routes.chat);
app.get('/error', function(req, res, next) {
  next(new Error('A contrived error'));
});

app.use(errorHandlers.error);
app.use(errorHandlers.notFound);

app.listen(process.env.PORT || port);
console.log(`App server running on port ${port}`);
