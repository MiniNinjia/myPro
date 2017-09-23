/**
 * Created by Administrator on 2017/9/20.
 */
/**
 * Created by Administrator on 2017/9/20.
 */
var mysql = require('mysql');
var dbconfig = require('../../dbconfig');
var client=require('../../mysql');
var _mySql=require('./adoptionSql').sql;

exports.adoption={
    getindexlist:function (callback) {
        client.query(_mySql.getindexlist, function (error, result) {
                if (error) {
                    callback(error);//错误返回err
                }else{
                    callback(result);
                }
            })
    }
}