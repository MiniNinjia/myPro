/**
 * Created by Administrator on 2017/9/21.
 */
/**
 * Created by Administrator on 2017/9/20.
 */
exports.sql = {
    getAllItemsSqlSortByLikeCount: 'SELECT dl.uid as isCollect,userinfo.nickname,adoptinfo.adoptID,diary.diaryID,diary.titile,diary.content,diary.img,headimg.headimg,count(diarylike.diaryID) AS likecount FROM(((((diary LEFT JOIN adoptinfo ON diary.adoptID = adoptinfo.adoptID) LEFT JOIN userinfo ON adoptinfo.uid = userinfo.uid)LEFT JOIN headimg ON userinfo.uid = headimg.uid)LEFT JOIN diarylike ON diarylike.diaryID = diary.diaryID ) LEFT JOIN diarylike AS dl ON dl.diaryID = diary.diaryID AND dl.uid = ? ) where diary.status =0 GROUP BY diary.diaryID ORDER BY likecount DESC LIMIT ?,?',
    getAllItemsSqlSortByTime: 'SELECT dl.uid as isCollect,userinfo.nickname,adoptinfo.adoptID,diary.diaryID,diary.titile,diary.content,diary.img,headimg.headimg,count(diarylike.diaryID) AS likecount FROM(((((diary LEFT JOIN adoptinfo ON diary.adoptID = adoptinfo.adoptID) LEFT JOIN userinfo ON adoptinfo.uid = userinfo.uid)LEFT JOIN headimg ON userinfo.uid = headimg.uid)LEFT JOIN diarylike ON diarylike.diaryID = diary.diaryID ) LEFT JOIN diarylike AS dl ON dl.diaryID = diary.diaryID AND dl.uid = ? ) where diary.status =0 GROUP BY diary.diaryID ORDER BY diary.time DESC LIMIT ?,?',
    getdiaryPageCountSql:'select count(1) as count from diary where status =0',
    getdiaryBanner:'SELECT userinfo.nickname,headimg.headimg,diary.img,diary.content,diary.diaryID FROM (((diarybanner LEFT JOIN diary ON diary.diaryID=diarybanner.diaryID) LEFT JOIN adoptinfo on diary.adoptID=adoptinfo.adoptID) LEFT JOIN userinfo on userinfo.uid=adoptinfo.uId ) LEFT JOIN headimg on headimg.uid=userinfo.uid ORDER BY diarybanner.diaryOrder limit 5',
    getDiaryDetailByDiaryID:''
}