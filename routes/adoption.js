/**
 * Created by Administrator on 2017/9/20.
 */
var express = require('express');
var router = express.Router();
var dao = require('../dao/adoptiondao/adoptiondao');
router.get('/indexlist', function (req, res, next) {
    dao.adoption.getindexlist(function (result) {
        if (result !== 'err') {
            res.send(result)
        } else {
            res.send('err')
        }
    })
});
router.get('/getpetbanner', function (req, res, next) {
    dao.adoption.getpetbanner(function (result) {
        if (result !== 'err') {
            res.send(result)
        } else {
            res.send('err')
        }
    })
});
router.post('/getpetdetail', function (req, res, next) {
    var uid = req.body.uid || null;
    var petid = req.body.petid;
    dao.adoption.getpetdetail(uid, petid, function (result) {
        if (result !== 'err') {
            res.send(result)
        } else {
            res.send('err')
        }
    })
});
router.post('/checkadopt', function (req, res, next) {
    var petid = req.body.petid;
    dao.adoption.checkadopt( petid, function (result) {
        if (result !== 'err') {
            res.send(result)
        } else {
            res.send('err')
        }
    })
});
router.post('/collect', function (req, res, next) {
    var uid = req.body.uid;
    var state = req.body.state;
    var petid = req.body.petid;
    dao.adoption.collect(uid, state, petid, function (result) {
        if (result !== 'err') {
            res.send(result)
        } else {
            res.send('err')
        }
    })
});
router.post('/getreview', function (req, res, next) {
    var petid = req.body.petid;
    dao.adoption.getreview(petid, function (result) {
        if (result !== 'err') {
            res.send(result)
        } else {
            res.send('err')
        }
    })
});
router.post('/getlist', function (req, res, next) {
    var uid = req.body.uid;
    dao.adoption.getlist(uid, function (result) {
        if (result !== 'err') {
            res.send(result)
        } else {
            res.send('err')
        }
    })
});
router.get('/getcity', function (req, res, next) {
    dao.adoption.getcity(function (result) {
        if (result !== 'err') {
            res.send(result)
        } else {
            res.send('err')
        }
    })
});
module.exports = router;