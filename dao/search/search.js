/**
 * Created by Administrator on 2017/9/20.
 */
/**
 * Created by Administrator on 2017/9/20.
 */
var mysql = require('mysql');
var dbconfig = require('../../dbconfig');
var client = require('../../mysql');
//var _mySql=require('./adoptionSql').sql;

exports.search = {
    search: function (data, callback) {
        var petInfoSql = '';
        var diarySql = '';
        var communitySql = '';
        data.forEach(function (item, p2, p3) {
            if (p2 === 0) {
                petInfoSql = 'SELECT petid as id,title,`describe` as content,img FROM petinfo where ' + 'title like \'%' + item + '%\' or `describe` like \'%' + item + '%\'';
                diarySql = 'SELECT diaryid as id,titile as title,content,img FROM diary where ' + 'titile like \'%' + item + '%\' or content like \'%' + item + '%\'';
                communitySql = 'SELECT communityid as id ,title,content FROM community where ' + 'title like \'%' + item + '%\' or content like \'%' + item + '%\'';
            } else {
                petInfoSql += ' or title like \'%' + item + '%\' or `describe` like \'%' + item + '%\'';
                diarySql += ' or titile like \'%' + item + '%\' or content like \'%' + item + '%\'';
                communitySql += ' or title like \'%' + item + '%\' or content like \'%' + item + '%\'';
            }
        });
        petInfoSql += ';';
        diarySql += ';';
        communitySql += ';';
        var ___mysql=petInfoSql + diarySql + communitySql
        console.log(___mysql);
        client.query(___mysql, function (error, result) {
            console.log(error)
            if (error) {
                callback(error);//错误返回err
            } else {
                callback(result);
            }
        })
    }
}