/**
 * Created by Administrator on 2017/8/24.
 */
var mysql = require('mysql');
var dbconfig = require('../../dbconfig');
var _mySql=require('./userSql').sql;
var util =require('./../../util/util');
var client=require('../../mysql');
exports.user = {
    //登陆，获取密码
    getPasswordByTelPhone: function (telphone, callback) {
       // var sql = 'select password from userInfo where telphone=?';
        client.query(_mySql.getPasswordByTelPhone, [telphone], function (error, result) {
            if (error) {
                callback('err');//错误返回err
            }else{
                callback(result);
            }
            //client.end();
        })
    },
    //验证手机号码是否已经注册过了
    regist_searchTelPhone:function (telphone,callback) {
       // var sql = 'select count(1) count from userInfo where telphone=?';
        client.query(_mySql.regist_searchTelPhone, [telphone], function (error, result) {
            if (error) {
                callback('err');//错误返回err
            }else{
                callback(result[0].count);
            }
           // client.end();
        })
    },
    regist_add:function (telphone,password,code,token,callback) {
        this.virefy_search(telphone,function (result) {
            if(result==='err'){
                callback('err');
            }else if(result.length){
                var timestamp=new Date().getTime();
                if(timestamp-result[0].time>30*60*1000){
                    callback('timeOver')//验证码超时
                }
                if(result[0].code!=code){
                    callback('false')//验证码错误
                }
                if((timestamp-result[0].time<=30*60*1000)&&(result[0].code==code)){
                   // var sql='insert into userInfo(telphone,password) value(?,?)';
                    client.query(_mySql.addUser,[telphone,util.MD5(password),telphone,token,0,timestamp,110100,60],function (error,result) {
                        if (error) {
                            callback('err');//错误返回err
                        }else{
                            callback(result.insertId);//注册成功
                        }
                      //  client.end();
                    })
                }
            }else {
                callback('false');//未知错误
            }
        });

    },
    virefy_search:function (telphone,callback) {
       // var sql='select code,time from verifycode where phone= ? order by time desc';
        client.query(_mySql.virefy_search,[telphone],function (error,result) {
            if (error) {
                callback('err');//错误返回err
            }else{
                callback(result);
            }
           // client.end();
        })
    },
    virefy_add:function (telphone,code,callback) {
        var timestamp=new Date().getTime();
       // var sql='insert into verifycode(phone,code,time) value(?,?,?)';
        client.query(_mySql.virefy_add,[telphone,code,timestamp],function (error,result) {
            if (error) {
                callback('err');//错误返回err
            }else{
                callback(result);
            }
            //client.end();
        })
    },
    update_token:function (uid,token,callback) {
        client.query(_mySql.update_token,[token,uid],function (error,result) {
            if(error){
                callback('err')
            }else{
                callback(result);
            }
        })
    },
    check_token:function (uid,callback) {
        client.query(_mySql.check_token,[uid],function (error,result) {
            if(error){
                callback('err')
            }else{
                callback(result);
            }
        })
    }
};