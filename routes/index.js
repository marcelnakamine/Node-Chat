module.exports.index = index;
module.exports.login = login;
module.exports.loginProcess = loginProcess;
module.exports.chat = chat;

function index(req, res){
  res.cookie('IndexCookie', 'This was set from Index');
  // res.clearCookie('IndexCookie'); // To clear a specific cookie
  res.render('index', {title: 'Index Dynamic', cookie: JSON.stringify(req.cookies)});
};

function login(req, res){
  res.render('login', {title: 'Login'})
};

function loginProcess(req, res){
  res.redirect('/');
};

function chat(req, res){
  res.render('chat', {title: 'Chat'});
};
