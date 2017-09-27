var express = require('express');
var router = express.Router();
/* index */
router.get('/dashboard/index', function(req, res) {
    res.render('dashboard/dashboard', { title: 'Dashboard' });
});

/* category */
router.get('/dashboard/category', function(req, res) {
    //res.send('respond with a resource');
    res.render('dashboard/category', { title: 'Category' });
});

/* product */
router.get('/dashboard/product', function(req, res) {
    res.render('dashboard/product', { title: 'Product' });
});

/* customer */
router.get('/dashboard/customer', function(req, res) {
    res.render('dashboard/customer', { title: 'Customer' });
});

/* user */
router.get('/dashboard/user', function(req, res) {
    res.render('dashboard/user', { title: 'User' });
});

/* Login */
router.get('/dashboard/login', function(req, res) {
    res.render('dashboard/login', { title: 'Login' });
});

/* Register */
router.get('/dashboard/register', function(req, res) {
    res.render('dashboard/register', { title: 'Register' });
});

/* Forgot Password */
router.get('/dashboard/forgot-password', function(req, res) {
    res.render('dashboard/forgot-password', { title: 'Forgot Password' });
});


module.exports = router;

