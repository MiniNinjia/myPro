/**
 * Created by Administrator on 2017/9/20.
 */
/**
 * Created by Administrator on 2017/9/20.
 */
var mysql = require('mysql');
var dbconfig = require('../../dbconfig');
var client = require('../../mysql');
var _mySql = require('./adoptionSql').sql;

exports.adoption = {
    getindexlist: function (callback) {
        client.query(_mySql.getindexlist, function (error, result) {
            if (error) {
                callback(error);//错误返回err
            } else {
                callback(result);
            }
        })
    },
    getpetbanner: function (callback) {
        client.query(_mySql.getpetbanner, function (error, result) {
            if (error) {
                callback(error);//错误返回err
            } else {
                callback(result);
            }
        })
    },
    getpetdetail: function (uid, petid, callback) {
        client.query(_mySql.getpetdetail, [uid, petid], function (error, result) {
            if (error) {
                callback(error);//错误返回err
            } else {
                callback(result);
            }
        })
    },
    checkadopt: function (petid, callback) {
        client.query(_mySql.checkadopt, [petid], function (error, result) {
            if (error) {
                callback(error);//错误返回err
            } else {
                callback(result);
            }
        })
    },
    getreview: function (petid, callback) {
        client.query(_mySql.getreview, [petid], function (error, result) {
            if (error) {
                callback(error);//错误返回err
            } else {
                callback(result);
            }
        })
    },
    getlist: function (uid, callback) {
        client.query(_mySql.getlist, [uid], function (error, result) {
            if (error) {
                callback(error);//错误返回err
            } else {
                callback(result);
            }
        })
    },
    getcity: function (callback) {
        client.query(_mySql.getcity, function (error, result) {
            if (error) {
                callback(error);//错误返回err
            } else {
                var _city = result[0];
                var _province = result[1];
                var data = [];
                _province.forEach(function (p1, p2, p3) {
                    var _data = {
                        provice: p1,
                        city: []
                    };
                    _city.forEach(function (item, index) {
                        if(item.provinceID===p1.provinceID){
                            _data.city.push(item)
                        }
                    })
                    data.push(_data);
                });
                callback(data);
            }
        })
    },
    collect: function (uid, state, communityID, callback) {
        if (!!state) {
            console.log('del');
            client.query(_mySql.delcollect, [communityID, uid], function (error, result) {
                if (error) {
                    callback('err');//错误返回err
                } else {
                    callback(result);
                }
            })
        } else {
            console.log('add');
            client.query(_mySql.addcollect, [communityID, uid, new Date().getTime()], function (error, result) {
                if (error) {
                    callback('err');//错误返回err
                } else {
                    callback(result);
                }
            })
        }
    },
};
var ppp = function test(result, fatherid) {
    if (!result) {
        return;
    }
    var rtn = [];
    for (var i in result) {
        if (result[i].fatherid === fatherid) {
            result[i]._city = test(result, result[i].cityID);
            rtn.push(result[i]);
        }
    }
    return rtn;
};