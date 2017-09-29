/**
 * Created by Administrator on 2017/9/20.
 */
/**
 * Created by Administrator on 2017/9/20.
 */
var mysql = require('mysql');
var dbconfig = require('../../dbconfig');
var client = require('../../mysql');
var _mySql = require('./communitySql').sql;

exports.community = {
    getAllItems: function (start, pagesize, sort, uid, callback) {
        var __mysql = sort === 'default' ? _mySql.getAllItemsSqlSortByTime : _mySql.getAllItemsSqlSortByLikeCount;
        client.query(__mysql, [uid, start - 1, pagesize], function (error, result) {
            if (error) {
                callback('err');//错误返回err
            } else {
                callback(result);
            }
        })
    },
    getPageCount: function (callback) {
        client.query(_mySql.getPageCount, function (error, result) {
            if (error) {
                callback('err');//错误返回err
            } else {
                callback(result[0]);
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
    communityDetail: function (uid, communityid, callback) {
        client.query(_mySql.communityDetail, [communityid], function (error, result) {
            if (error) {
                callback('err');//错误返回err
            } else {
                var data = result[0];
                client.query(_mySql.collectstate, [uid, communityid], function (error, result) {
                    if (error) {
                        callback('err');//错误返回err
                    } else {
                        data.colloctstate = result[0].state;
                        client.query(_mySql.communityAuthorDetail, [communityid], function (error, result) {
                            if (error) {
                                callback('err');//错误返回err
                            } else {
                                data.Author = {
                                    nickname: result[0].nickname,
                                    uid: result[0].uid,
                                    headimg: result[0].headimg,
                                    introduce: result[0].introduce
                                };
                                client.query(_mySql.communityAuthorCount, [data.Author.uid, data.Author.uid, data.Author.uid], function (error, result) {
                                    if (error) {
                                        callback('err');//错误返回err
                                    } else {
                                        data.Author.adoptcount = result[0][0].adoptcount;
                                        data.Author.diarycount = result[1][0].diarycount;
                                        data.Author.communitycount = result[2][0].communitycount;
                                        callback(data);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        })
    },
    getCommunityReviewCount: function (communityID, callback) {
        client.query(_mySql.getCommunityReviewCount, [communityID], function (error, result) {
            if (error) {
                callback('err');//错误返回err
            } else {
                callback(result[0]);
            }
        })
    },
    addcommunity: function (title,content,uid,time, callback) {
        client.query(_mySql.addcommunity, [uid,time,title,content], function (error, result) {
            if (error) {
                callback('err');//错误返回err
            } else {
                callback(result[0]);
            }
        })
    },
    getCommunityReview: function (communityID, uid, callback) {
        client.query(_mySql.getCommunityReview, [uid, communityID], function (error, result) {
            if (error) {
                callback('err');//错误返回err
            } else {
                var data = ppp(result, 0);
                data.forEach(function (item, index) {
                    mmm = [];
                    item.childReview.forEach(function (item1, index1) {
                        qqq(item1);
                    })
                    data[index].childReview = mmm;
                });
                callback(data);
            }
        })
    },
    CommunityReviewLike: function (reviewID, uid, likestate, callback) {
        var __mysql = likestate ? _mySql.CommunityReviewLikeInsert : _mySql.CommunityReviewLikeDelete;
        client.query(__mysql, [reviewID, uid], function (error, result) {
            if (error) {
                callback('err');//错误返回err
            } else {
                console.log(result)
                callback(result[0]);
            }
        })
    },
    CommunityReviewAdd: function (data, callback) {
        client.query(_mySql.CommunityReviewAdd, [data.communityId, data.uid, data.content, data.time, data.fatherid], function (error, result) {
            if (error) {
                callback('err');//错误返回err
            } else {
                console.log(result)
                callback(result[0]);
            }
        })
    },
};
var ppp = function test(result, fatherID) {
    if (!result) {
        return;
    }
    var rtn = [];
    for (var i in result) {
        if (result[i].fatherID === fatherID) {
            result[i].childReview = test(result, result[i].reviewID);
            rtn.push(result[i]);
        }
    }
    return rtn;
};
var qqq = function test1(data) {
    if (!data) {
        return;
    }
    mmm.push(data);
    if (data.childReview && data.childReview.length > 0) {
        var i = 0;
        for (i = 0; i < data.childReview.length; i++) {
            qqq(data.childReview[i]);
        }
    }
};
var mmm = [];
