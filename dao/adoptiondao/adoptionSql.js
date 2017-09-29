/**
 * Created by Administrator on 2017/9/20.
 */
exports.sql={
    getindexlist:'SELECT count(petlike.petId) as likecount,petinfo.petid,petinfo.uid,petinfo.title,petinfo.img,userinfo.nickname,headimg.headimg,userinfo.sex FROM ((petlike right JOIN petinfo ON petlike.petId=petinfo.petId)LEFT JOIN userinfo ON userinfo.uid=petinfo.uid )LEFT JOIN headimg ON userinfo.uid=headimg.uid GROUP BY petinfo.petId ORDER BY likecount DESC LIMIT 8',
    getpetbanner:'select *from getpetinfo RIGHT JOIN petbanner ON getpetinfo.petid=petbanner.petid ORDER BY petorder limit 9',


    getpetdetail:'select petinfo.age,petinfo.sex,petinfo.tel,getpetdetail.*,COUNT(petcollect.petId) AS collectstate from getpetdetail LEFT JOIN petinfo ON petinfo.petId=getpetdetail.petId LEFT JOIN petcollect ON getpetdetail.petid=petcollect.petId and petcollect.uid=? where getpetdetail.petid=? group BY getpetdetail.petid',
    checkadopt:'select petinfo.*,count(adoptinfo.adoptID) AS adoptstate from petinfo LEFT JOIN adoptinfo ON petinfo.petId=adoptinfo.petId WHERE petinfo.petId=? GROUP BY petinfo.petId',
    delcollect:'delete from petcollect where petid=? and uid=?',
    addcollect:'insert INTO petcollect (petid,uid,time) VALUE (?,?,?)',
    getreview:'SELECT petinforeview.*,userinfo.nickname,headimg.headimg FROM `petinforeview` LEFT JOIN  userinfo ON petinforeview.uId=userinfo.uid LEFT JOIN headimg ON headimg.uid=userinfo.uid WHERE petId=? ORDER BY time DESC;',
    getcity:'SELECT * FROM city ;select * from province',
    getlist:'select headimg.headimg,userinfo.nickname, getlist1.*,COUNT(petcollect.petId) AS collectstate from getlist1 LEFT JOIN userinfo ON getlist1.uid=userinfo.uid LEFT JOIN headimg on headimg.uid=getlist1.uid LEFT JOIN petcollect ON getlist1.petid=petcollect.petId AND petcollect.uid=? GROUP BY getlist1.petid ORDER BY getlist1.time desc',

}