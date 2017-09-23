/**
 * Created by Administrator on 2017/9/21.
 */
/**
 * Created by Administrator on 2017/9/20.
 */
var express = require('express');
var router = express.Router();
var dao = require('../dao/personalCenterDAO/personalCenterDAO');
router.get('/getheadimg', function (req, res, next) {
    var uid=req.query.uid;
    dao.personalCenter.getheadimg(uid,function (result) {
        if(result!=='err'){
            res.send(result)
        }else{
            res.send('err')
        }
    })
});
router.get('/getinfo', function (req, res, next) {
    var uid=req.query.uid;
    dao.personalCenter.getinfo(uid,function (result) {
        if(result!=='err'){
            res.send(result)
        }else{
            res.send('err')
        }
    })
});
router.get('/getAdoptionList', function (req, res, next) {
    var uid=req.query.uid;
    dao.personalCenter.getAdoptionlist(uid,function (result) {
        if(result!=='err'){
            res.send(result);
        }else{
            res.send('err')
        }
    })
});
router.get('/getPublishList', function (req, res, next) {
    var uid=req.query.uid;
    dao.personalCenter.getPublishList(uid,function (result) {
        if(result!=='err'){
            res.send(result);
        }else{
            res.send('err')
        }
    })
});
router.get('/getDiaryList', function (req, res, next) {
    var uid=req.query.uid;
    dao.personalCenter.getDiaryList(uid,function (result) {
        if(result!=='err'){
            res.send(result);
        }else{
            res.send('err')
        }
    })
});
module.exports=router;