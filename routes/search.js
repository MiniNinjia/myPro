/**
 * Created by Administrator on 2017/9/26.
 */
var express = require('express');
var dao = require('../dao/search/search');
var router = express.Router();
var _http = require('http');

var assert = require('assert');
var showapiSdk = require('showapi-sdk');
var appId = '46930';
var secret = '8319dc9520d54d5194fbe553494fd5d9';
var img = '';


router.post('/', function (req, res, next) {
    func1(req.body.str, function (result) {
        if (result !== 'err') {
            if (JSON.parse(result).showapi_res_code === 0) {
                var list;
                if (JSON.parse(result).showapi_res_body.list.length === 0) {
                    list = [req.body.str]
                } else {
                    list = JSON.parse(result).showapi_res_body.list;
                }
                dao.search.search(list, function (result1) {
                    if (result1 !== 'err') {
                        var info = [];
                        var diary = [];
                        var community = [];
                        result1[0].forEach(function (p1, p2, p3) {
                            info[p2] = p1;
                            info[p2].url = '/adoption/detail/' + p1.id;
                            info[p2].type = 'info';
                        })
                        result1[1].forEach(function (p1, p2, p3) {
                            diary[p2] = p1;
                            diary[p2].url = '/diary/detail/' + p1.id;
                            diary[p2].type = 'diary';
                        })
                        result1[2].forEach(function (p1, p2, p3) {
                            community[p2] = p1;
                            community[p2].url = '/community/detail/' + p1.id;
                            community[p2].type = 'community';
                        })
                        var data = {
                            all: [],
                            info: info,
                            diary: diary,
                            community: community
                        };
                        data.all = data.all.concat(info, diary, community);
                        res.send(data)
                    } else {
                        res.send('err')
                    }
                })
            } else {
                res.send('err');
            }
        } else {
            res.send('err');
        }
    })

});
var func1 = function (str, callback) {
    var http = require('http');
    var querystring = require('querystring');
//发送 http Post 请求
    var postData = querystring.stringify({
        text: str
    });
    var options = {
        hostname: 'route.showapi.com',
        path: '/269-1?showapi_appid=46930&showapi_sign=' + secret,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': postData.length,
            'enctype': 'application/x-www-form-urlencoded'
        }
    };
    var req = http.request(options, function (res) {
        res.setEncoding('utf-8');
        res.on('data', function (chun) {
            callback(chun);
        });
        res.on('end', function () {
        });
    });
    req.write(postData);
    req.on('error', function (err) {
        callback('err')
    });

    req.end();
}
module.exports = router;