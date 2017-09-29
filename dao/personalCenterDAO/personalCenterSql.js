/**
 * Created by Administrator on 2017/9/20.
 */
exports.sql={
    getheadimg:'SELECT headimg FROM `headimg` where uid = ? ORDER BY id DESC limit 1',
    getinfo:'SELECT userinfo.uid,userinfo.nickname,userinfo.telphone,userinfo.introduce,userinfo.mygrade,userinfo.sex,city.city FROM `userinfo` LEFT JOIN city on userinfo.cityID=city.cityID where uid=?',
    getAdoptionlist:'SELECT * FROM `getadoptionlist` WHERE adoptuid=?',
    getPublishList:'SELECT * FROM `getpublish` WHERE uid=?',
    getDiaryList:'select * from getDiaryList3 where uid=? ORDER BY time desc ',
    getpersonalCollect:'select petcollect.collectID,petcollect.petId,petinfo.title from petcollect LEFT JOIN petinfo ON petcollect.petId=petinfo.petId WHERE petcollect.uId=?;select communitycollect.collectID,communitycollect.conmunityID,community.title from communitycollect LEFT JOIN community ON communitycollect.conmunityid=community.communityid WHERE communitycollect.uId=?;select diarycollect.collectID,diarycollect.diaryId,diary.titile as title from diary LEFT JOIN diarycollect on diary.diaryID=diarycollect.diaryId WHERE diarycollect.uid=?;',
    getCommunitylist:'select * from getcommunitylist3 where uid= ? ORDER BY time DESC',
    edit:'UPDATE userinfo SET nickname = ?, sex = ?,telphone=? WHERE uid = ?'

};