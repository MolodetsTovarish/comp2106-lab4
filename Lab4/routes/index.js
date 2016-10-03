var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 4 - Family Members', 
    message: 'This is a webpage about my family members' });
});

/* GET mikhail page*/
router.get('/mikhail', function(req, res, next) {
  res.render('mikhail', {
    title: 'Mikhail',
    message: 'I am Mikhail, 19 years old. I am the first born, currently in college.'
  });
});

/* GET boris page*/
router.get('/boris', function(req, res, next) {
  res.render('boris', {
    title: 'Boris',
    message: 'Boris is my dad, 53 years old. He works as a programmer.'
  });
});

/* GET rita page*/
router.get('/rita', function(req, res, next) {
  res.render('rita', {
    title: 'Rita',
    message: 'Rita is my mom, 42 years old. She provides food, clothing and '
  });
});

/* GET rachel page*/
router.get('/rachel', function(req, res, next) {
  res.render('rachel', {
    title: 'Rachel',
    message: 'Rachel is my younger sister, 15 years old. She is a high school student.'
  });
});

/* GET evelyn page*/
router.get('/evelyn', function(req, res, next) {
  res.render('evelyn', {
    title: 'Evelyn',
    message: 'Evelyn is my younger sister, 11 years old. She is an elementary school student.'
  });
});

module.exports = router;
