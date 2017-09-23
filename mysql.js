/**
 * Created by Administrator on 2017/8/28.
 */
var mysql=require('mysql');
var config=require('./dbconfig');
var pool=mysql.createPool(config.options);

exports.query=function (sql,value,callback) {
    if (!sql) {
        callback();
        return;
    }
    pool.query(sql,value,function (err,rows,fields) {
        if(err){
            console.log(err);
            callback(err,null);
            return;
        }
        callback(null,rows,fields);
    })
};