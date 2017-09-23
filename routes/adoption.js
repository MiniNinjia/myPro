/**
 * Created by Administrator on 2017/9/20.
 */
var express = require('express');
var router = express.Router();
var dao = require('../dao/adoptiondao/adoptiondao');
router.get('/indexlist', function (req, res, next) {
    dao.adoption.getindexlist(function (result) {
        if(result!=='err'){
            res.send(result)
        }else{
            res.send('err')
        }
    })
});

module.exports=router;