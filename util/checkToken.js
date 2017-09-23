/**
 * Created by Administrator on 2017/9/18.
 */
var jwt=require('jwt-simple');
var util=require('./util');
exports.checkToken=function (req,res,next) {
    var token=req.header('token') || req.query.token || req.body.token;
    try {
        var decoded = jwt.decode(token, util.secret);
        if(decoded.exp>= new Date().valueOf()){
            next();
        }else {
            res.json({stateCode:'0003'});
        }
    }catch (e){
        res.json({stateCode:'0003'});
    }
};