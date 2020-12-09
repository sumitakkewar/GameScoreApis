const express = require('express');
const { UserScore } = require('./../models');
const leaderboard = express.Router();

leaderboard.get('/', function (req, res) {
    //logic resides hers
    res.json(req.query);
});

module.exports = leaderboard;
