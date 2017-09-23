/**
 * Created by Administrator on 2017/9/21.
 */
var mysql = require('mysql');
var dbconfig = require('../../dbconfig');
var client = require('../../mysql');
var _mySql = require('./diarySql').sql;

exports.diary = {
    getAllItems: function (start, pagesize, sort,uid, callback) {
        var __mysql = sort === 'default' ? _mySql.getAllItemsSqlSortByTime : _mySql.getAllItemsSqlSortByLikeCount;
        client.query(__mysql, [uid,start - 1, pagesize], function (error, result) {
            if (error) {
                callback('err');//错误返回err
            } else {
                callback(result);
            }
        })
    },
    getdiaryPageCount:function (callback) {
        client.query(_mySql.getdiaryPageCountSql, function (error, result) {
            if (error) {
                callback('err');//错误返回err
            } else {
                callback(result);
            }
        })
    },
    getdiaryBanner:function (callback) {
        client.query(_mySql.getdiaryBanner, function (error, result) {
            if (error) {
                callback('err');//错误返回err
            } else {
                callback(result);
            }
        })
    },
    getDiaryDetailByDiaryID:function (callback) {
    client.query(_mySql.getDiaryDetailByDiaryID, function (error, result) {
        if (error) {
            callback('err');//错误返回err
        } else {
            callback(result);
        }
    })
}
};