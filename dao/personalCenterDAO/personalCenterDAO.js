/**
 * Created by Administrator on 2017/9/20.
 */
/**
 * Created by Administrator on 2017/9/20.
 */
var mysql = require('mysql');
var dbconfig = require('../../dbconfig');
var client = require('../../mysql');
var _mySql = require('./personalCenterSql').sql;

exports.personalCenter = {
    getheadimg: function (uid, callback) {
        client.query(_mySql.getheadimg,[uid], function (error, result) {
            if (error) {
                callback('err');//错误返回err
            } else {
                callback(result);
            }
        })
    },

    getinfo:function (uid,callback) {
        client.query(_mySql.getinfo,[uid], function (error, result) {
            if (error) {
                callback('err');//错误返回err
            } else {
                callback(result);
            }
        })
    },

    getAdoptionlist:function (uid,callback) {
        client.query(_mySql.getAdoptionlist,[uid], function (error, result) {
            if (error) {
                callback('err');//错误返回err
            } else {
                callback(result);
            }
        })
    },
    getPublishList:function (uid,callback) {
        client.query(_mySql.getPublishList,[uid], function (error, result) {
            if (error) {
                callback('err');//错误返回err
            } else {
                callback(result);
            }
        })
    },
    getDiaryList:function (uid,callback) {
        client.query(_mySql.getDiaryList,[uid], function (error, result) {
            if (error) {
                callback('err');//错误返回err
            } else {
                callback(result);
            }
        })
    },
}