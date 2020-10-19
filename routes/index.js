var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
var csrfProtection = csrf();
router.use(csrfProtection);

var mainController = require('../controller/main.controller');
var main = new mainController();

/* GET home page. */
// router.get('/', main.index);
// router.get('/:pagenum', main.index);
router.get('/', (req, res) => {
  let username = req.user ? req.user.username : '';
  res.render('index', { username: username });
});

router.get('/member', main.getusers);

router.get('/user/add', (req, res) => {
  var messages = req.flash('error');
  res.render('signup', {
    csrfToken: req.csrfToken(),
    messages: messages,
    hasErrors: messages.length > 0,
    username: req.user ? req.user.username : ''
  });
});

router.get('/login', (req, res) => {
  var messages = req.flash('error');
  let username = req.user ? req.user.username : '';
  res.render('login', {
    csrfToken: req.csrfToken(),
    messages: messages,
    hasErrors: messages.length > 0,
    username: username
  });
});

router.post(
  '/user/add',
  passport.authenticate('local.signup', {
    successRedirect: '/member',
    failureRedirect: '/user/add',
    failureFlash: true
  })
);

router.post(
  '/login',
  passport.authenticate('local.signin', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
);

router.get('/logout', isLoggedIn, function(req, res, next) {
  req.logout();
  res.redirect('/');
});

router.get('/getFilms', main.getFilms);
router.get('/userPermission/:userID', main.userPermission);
router.get('/permission/:userID', main.getPermissions);
router.post('/updatePermission', main.updatePermission);

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

function notLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}
