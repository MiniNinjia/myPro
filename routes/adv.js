/**
 * Created by Administrator on 2017/9/20.
 */
var express = require('express');
var router = express.Router();
var dao = require('../dao/advdao/advdao');
router.post('/', function (req, res, next) {
    dao.adv.getadv(req.body.position,function (result) {
        if(result!=='err'){
            console.log(result);
            res.send(result)
        }else{
            res.send('err')
        }
    })
});

module.exports=router;