/**
 * Created by Administrator on 2017/9/21.
 */
var express = require('express');
var router = express.Router();
var dao = require('../dao/diarydao/diaryDAO');

router.post('/', function (req, res, next) {
    var pagesize = +req.body.pageSize;
    var sort = req.body.sort;
    var uid = req.body.uid;
    var start = (req.body.pageNumber - 1) * pagesize + 1;
    dao.diary.getAllItems(start, pagesize, sort, uid, function (result) {
        if (result !== 'err') {
            res.send(result)
        } else {
            res.send('err')
        }
    })
});

router.get('/getdiaryPageCount', function (req, res, next) {
    dao.diary.getdiaryPageCount(function (result) {
        if (result !== 'err') {
            res.send(result[0])
        } else {
            res.send('err')
        }
    })
})

router.get('/getdiaryBanner', function (req, res, next) {
    dao.diary.getdiaryBanner(function (result) {
        if (result !== 'err') {
            res.send(result)
        } else {
            res.send('err')
        }
    })
})

router.get('/getDiaryDetailByDiaryID', function (req, res, next) {
    dao.diary.getDiaryDetailByDiaryID(function (result) {
        if (result !== 'err') {
            res.send(result)
        } else {
            res.send('err')
        }
    })
})
module.exports = router;