const express = require('express');
const { UserScore } = require('./../models');
const user = express.Router();

user.get('/', function (req, res) {
    res.send('List of APIv1 users.');
});

user.post('/', validatePostRequest, async function (req, res) {
    try{
        await new UserScore({
            userid: req.body.userid,
            age: req.body.age,
            duos_point: req.body.duos_point,
            duos_kills: req.body.duos_kills,
            duos_wins: req.body.duos_wins,
            solo_pont: req.body.solo_pont,
            solo_kills: req.body.solo_kills,
            solo_wins: req.body.solo_wins
        }).save();
        res.status(200).json({
            status: true,
            message: "User Score created succesfully"
        })
    } catch (e){
        res.status(500).json({
            status: false,
            error: e.message
        })
    }
});

function validatePostRequest(req, res, next){
    let checkArray = [
        "userid",
        "age",
        "duos_point",
        "duos_kills",
        "duos_wins",
        "solo_pont",
        "solo_kills",
        "solo_wins",
    ];

    let validated = checkArray.filter(bodyVar => req.body[bodyVar] === undefined);

    if(validated.length > 0){
        res.status(500).json({
            status: false,
            error: {
                data: validated,
                message: "Params missing"
            }
        })
    } else {
        next()
    }
}

module.exports = user;