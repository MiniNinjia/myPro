/**
 * Created by Administrator on 2017/9/20.
 */
exports.sql = {
    getAllItemsSqlSortByTime: 'select gc.*,COUNT(communitycollect.collectid) AS collectstate from getcommunityitem2 AS gc LEFT JOIN communitycollect ON gc.communityid=communitycollect.conmunityid AND communitycollect.uid=? GROUP BY gc.communityid order BY time desc LIMIT ?,?',
    getAllItemsSqlSortByLikeCount: 'select gc.*,COUNT(communitycollect.collectid) AS collectstate from getcommunityitem2 AS gc LEFT JOIN communitycollect ON gc.communityid=communitycollect.conmunityid AND communitycollect.uid=? GROUP BY gc.communityid order BY likecount desc LIMIT ?,?',
    getPageCount: 'select count(1) as count from community where states =1',
    addcollect: 'insert INTO communitycollect (conmunityID,uid,time) VALUE (?,?,?)',
    delcollect: 'delete from communitycollect where conmunityID=? and uid=?',
    communityDetail: 'SELECT cd.* from communityDetail as cd WHERE cd.communityID =? ',
    collectstate: 'select COUNT(1) AS state from communitycollect where uid= ? AND conmunityID= ? ',
    communityAuthorDetail: 'select DISTINCT userinfo.nickname,userinfo.uid,userinfo.introduce,headimg.headimg from community LEFT JOIN userinfo ON community.uid=userinfo.uid LEFT JOIN headimg ON userinfo.uid=headimg.uid WHERE community.communityID=?',
    communityAuthorCount: 'select COUNT(1) AS adoptcount from adoptinfo WHERE uId =?;select COUNT(diary.adoptID) AS diarycount from adoptinfo LEFT JOIN diary ON adoptinfo.adoptID=diary.adoptID WHERE uid=? GROUP BY adoptinfo.uid;select COUNT(1) AS communitycount from  community WHERE uid=?;',
    getCommunityReviewCount: 'SELECT COUNT(1) AS reviewcount FROM `communityreview` WHERE communityID=? and fatherid=0',
    getCommunityReview: 'SELECT gc.*,COUNT(crk.uid) as likestate,gc2.uid as fatherUid,userinfo.nickname AS fathernickname,headimg.headimg AS fatherheadimg from getcommunityreview3 AS gc LEFT JOIN communityreviewlike AS crk ON crk.reviewID=gc.reviewID AND crk.uid=?   left join getcommunityreview3 as gc2 on gc.fatherid=gc2.reviewID  LEFT JOIN userinfo ON gc2.uid=userinfo.uid LEFT JOIN headimg ON headimg.uid=userinfo.uid where gc.state=1 and gc.communityid=? GROUP BY gc.reviewID order by gc.time',
    CommunityReviewLikeInsert: 'insert INTO communityreviewlike (reviewID,uid) VALUE (?,?)',
    CommunityReviewLikeDelete: 'delete from communityreviewlike where reviewID=? and uid=?',
    CommunityReviewAdd:'insert INTO communityreview (communityid,uid,content,time,state,fatherID) VALUE (?,?,?,?,1,?)',
    addcommunity:'insert INTO community (uid,time,title,content,states,viewcount) VALUE (?,?,?,?,1,0)'
}