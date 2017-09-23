var express = require('express');
var dao = require('../dao/userdao/userDAO');
var router = express.Router();
var util = require('../util/util');
var jquery = require('jquery');
var content = '';
/* GET users listing. */
//产生令牌
var jwt = require('jwt-simple');
var moment = require('moment');
var ct = require('./../util/checkToken');


//请求登陆页面
router.get('/login', function (req, res, next) {
    res.render('user/login')
});
//请求登陆接口
router.post('/getPasswordByTelPhone', function (req, res, next) {
    var user = req.body;
    console.log(user)
    if (user) {
        var telphone = user.telphone;
        var password = util.MD5(user.password);
        dao.user.getPasswordByTelPhone(telphone, function (result) {
            if (result === 'err') {
                //数据库连接出错
                res.json({stateCode: '9999'});
            } else if (result.length) {
                //查询到该用户的密码
                if (password === result[0].password) {
                    var expires = moment().add(30, 'days').valueOf();
                    var token = jwt.encode({
                        iss: user.telphone,
                        exp: expires
                    }, util.secret);
                    var userInfo = {
                        uid: result[0].uid,
                        telphone: telphone,
                        token: token,
                        nickname: result[0].nickname
                    };
                    res.cookie('user', JSON.stringify(userInfo));
                    res.json({stateCode: '0'});

                } else {
                    res.json({stateCode: '0001'});
                }
            } else {
                //不存在该用户
                res.json({stateCode: '0002'});
            }
        });
    }
});
//请求注册页面
router.get('/regist', function (req, res, next) {
    res.render('user/regist')
});
//请求注册接口
router.post('/regist', function (req, res, next) {
    console.log(req.body);
    var telphone = req.body.telphone;
    var password = req.body.password;
    var code = req.body.mesauth;
    var expires = moment().add(7, 'days').valueOf();
    var token = jwt.encode({
        iss: telphone,
        exp: expires
    }, util.secret);
    dao.user.regist_add(telphone, password, code, token, function (result) {
        if (result === 'err') {
            //数据库连接出错
            res.send('数据库连接出错');
        } else if (result === 'false') {
            res.send('手机验证码错误')
        } else if (result === 'timeOver') {
            res.send('手机验证码超时')
        } else {
            var userInfo = {
                uid: result,
                telphone: telphone,
                token: token,
                nickname: telphone
            };
            res.cookie('user', JSON.stringify(userInfo));
            res.send('true');
        }
    });
});
//请求搜索手机号码页面
router.get('/regist_searchTelPhone', function (req, res, next) {
    dao.user.regist_searchTelPhone(req.query.telphone, function (result) {
        res.send(result + '');
    })
});
//请求手机验证码页面
router.get('/sendMessageAuth', function (req, res, next) {
    var phone = req.query.telphone;
    var _http = require('http');
    content = '';
    while (content.length < 4) {
        content += randomNum();
    }
    var content1 = '您的验证码是' + content + '。如非本人操作，请忽略本短信。该验证码将在30分钟后失效。';
    dao.user.virefy_add(phone, content, function (result) {
        var options = {
            hostname: 'api.smsbao.com',
            path: '/sms?u=q975541113&p=a6d43a253ff8c21267b8200cdb2ae90c&m=' + phone + '&c=' + encodeURI(content1),
            // path: '/sms?u=&p=a6d43a253ff8c21267b8200cdb2ae90c&m=' + phone + '&c=' + encodeURI(content1),
            method: 'GET'
        };
        var _req = _http.request(options, function (_res) {
            _res.setEncoding('utf8');
            _res.on('data', function (chunk) {
                console.log('BODY: ' + chunk);
            });
            _res.on('end', function (chunk) {
                res.send('ok');
            });
        });
        _req.on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });
        _req.end();
    })
});
//请求退出接口
router.get('/loginout', function (req, res, next) {
    delete req.session.user;
    res.clearCookie('user');
    res.redirect('login');
});
//请求
// router.post('/check', function (req, res, next) {
//     var userInfo = req.body;
//     if (userInfo) {
//         dao.user.check_token(userInfo.uid, function (result) {
//             if (result === 'err') {
//                 res.send('err');
//             } else if (result.length) {
//                 if (userInfo.token === result[0].token) {
//                     res.send('true');
//                 } else {
//                     res.send('false');
//                 }
//             } else {
//                 res.send('false');
//             }
//         })
//     }
// });
router.get('/', function (req, res, next) {
    res.send('i am usersindex');
});


function randomNum() {
    return Math.floor(Math.random() * 9);
}
module.exports = router;
