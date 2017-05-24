const express = require('express');
const app = express();
const routes = require('./routes');
const errorHandlers = require('./middleware/errorhandlers');
const log = require('./middleware/log');
const partials = require('express-partials');
const cookieParser = require('cookie-parser');

const port = 3000;

app.set('view engine', 'ejs');
app.set('view options', {defaultLayout: 'layout'});
app.use(partials());
app.use(log.logger);
app.use(express.static(__dirname + '/static'));
app.use(cookieParser());
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
