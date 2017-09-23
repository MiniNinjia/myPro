/**
 * Created by Administrator on 2017/9/20.
 */
var mysql = require('mysql');
var dbconfig = require('../../dbconfig');
var client=require('../../mysql');
exports.adv={
    getadv:function (position,callback) {
        client.query('select * from adv where position= ? and state = 1 order by adorder desc', [position],
            function (error, result) {
            if (error) {
                callback('err');//错误返回err
            }else{
                callback(result);
            }
        })
    }
}