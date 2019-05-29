var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res, next) {
  axios.get('http://linkmepractice.com/users')
    .then(result => {
      res.status(200).json(result.data);
    }).catch(ex => {
      res.status(200).json(ex);
    })
});

router.get('/items', function(req, res, next) {
  axios.get('http://linkmepractice.com/items')
    .then(result => {
      res.status(200).json(result.data);
    }).catch(ex => {
      res.status(200).json(ex);
    })});

module.exports = router;
