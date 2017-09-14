const express = require('express'), router = express.Router(), zn = require('./zinc.config'), log = require('./zinc.logger')
const mongoose = require('mongoose')

const Password = require('./models/password')
const User = require('./models/user')
const Version = require('./models/version')

// routes to API [ //localhost/api ]
router.get('/', function (req, res) {
    res.send("[ ZinCRM - v0.0.3 API Works! ]")
    console.log(log.cnGet[0])
})

// routes to PASSWORDS [ //localhost/password ]
router.get('/password/:id', function (req, res, next) {
    Password.findById({ _id: req.params.id }, req.body).then(function (password) {
        res.send("Password Found " + password.lable)
        console.log(log.cnGet[1] + password.lable)
    }).catch(next)
})
router.post('/password', function (req, res, next) {
    Password.create(req.body).then(function (password) {
        res.send(password)
        console.log(log.cnPut[0] + password.id)
    }).catch(next)
})
router.put('/password/:id', function (req, res, next) {
    Password.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (password) {
        Password.findOne({ _id: req.params.id }).then(function (password) {
            res.send("Updated: " + password)
            console.log(log.cnPut[1] + password.id)
        })
    }).catch(next)
})
router.delete('/password/:id', function (req, res, next) {
    Password.findByIdAndRemove({ _id: req.params.id }).then(function (password) {
        res.send("ID Has Been Deleted: \n" + password)
        console.log(cnDel + password.id)
    }).catch(next)
})

// routes to Users [ //localhost/user ]
router.get('/user/:id', function (req, res, next) {
    User.findById({ _id: req.params.id }, req.body).then(function (user) {
        res.send("User Found " + user.username)
        console.log(log.cnGet[1] + user.username)
    }).catch(next)
})
router.post('/user', function (req, res, next) {
    User.create(req.body).then(function (user) {
        res.send(user)
        console.log(log.cnPut[0] + User.id)
    }).catch(next)
})
router.put('/user/:id', function (req, res, next) {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (user) {
        User.findOne({ _id: req.params.id }).then(function (user) {
            res.send("Updated: " + user)
            console.log(log.cnPut[1] + User.id)
        })
    }).catch(next)
})
router.delete('/user/:id', function (req, res, next) {
    User.findByIdAndRemove({ _id: req.params.id }).then(function (user) {
        res.send("ID Has Been Deleted: \n" + user)
        console.log(cnDel + User.id)
    }).catch(next)
})

module.exports = router //exports everything we're doing