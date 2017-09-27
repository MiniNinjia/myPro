/**
 * Created by Administrator on 2017/9/23.
 */
var express = require('express');
var router = express.Router();
var dao = require('../dao/communitydao/communitydao');


router.post('/', function (req, res, next) {
    var pagesize = +req.body.pageSize;
    var sort = req.body.sort;
    var uid = req.body.uid;
    var start = (req.body.pageNumber - 1) * pagesize + 1;
    dao.community.getAllItems(start, pagesize, sort, uid, function (result) {
        if (result !== 'err') {
            res.send(result)
        } else {
            res.send('err')
        }
    })
});
router.get('/getPageCount', function (req, res, next) {
    dao.community.getPageCount(function (result) {
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
    var communityID = req.body.cid;
    dao.community.collect(uid, state, communityID, function (result) {
        if (result !== 'err') {
            res.send(result)
        } else {
            res.send('err')
        }
    })
});
router.post('/communityDetail', function (req, res, next) {
    var uid = req.body.uid;
    var state = req.body.state;
    var communityID = req.body.cid;
    dao.community.communityDetail(uid, communityID, function (result) {
        if (result !== 'err') {
            res.send(result)
        } else {
            res.send('err')
        }
    })
});
router.post('/getCommunityReviewCount', function (req, res, next) {
    var communityID = req.body.cid;
    dao.community.getCommunityReviewCount(communityID, function (result) {
        if (result !== 'err') {
            res.send(result)
        } else {
            res.send('err')
        }
    })
});
router.post('/getCommunityReview', function (req, res, next) {
    var communityID = req.body.cid;
    var uid = req.body.uid;
    var pagesize = +req.body.pageSize;
    var start = (req.body.pageNumber - 1) * pagesize + 1;
    dao.community.getCommunityReview(communityID, uid, function (result) {
        if (result !== 'err') {
            res.send(result.slice(start - 1, start + 1 + pagesize))
        } else {
            res.send('err')
        }
    })
});
router.post('/CommunityReviewLike', function (req, res, next) {
    var reviewID = req.body.reviewID;
    var uid = req.body.uid;
    var likestate = req.body.likestate;
    dao.community.CommunityReviewLike(reviewID, uid, likestate, function (result) {
        if (result !== 'err') {
            res.send(result)
        } else {
            res.send('err')
        }
    })
});
router.post('/CommunityReviewAdd', function (req, res, next) {
    var data = {
        fatherid: req.body.fatherID,
        uid: req.body.uid,
        communityId: req.body.communityID,
        time: req.body.time,
        content: req.body.content
    }
    console.log(data)
    dao.community.CommunityReviewAdd(data, function (result) {
        if (result !== 'err') {
            res.send(result)
        } else {
            res.send('err')
        }
    })
});
module.exports = router;