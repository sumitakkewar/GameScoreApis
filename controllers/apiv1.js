var express = require('express');

var apiv1 = express.Router();

apiv1.get('/', function(req, res) {
  res.send('Hello from APIv1 root route.');
});

apiv1.use('/users', require('./../services/userscore')) 
apiv1.use('/leaderboard', require('./../services/leaderboard')) 

module.exports = apiv1;