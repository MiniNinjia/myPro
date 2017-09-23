/**
 * Created by Administrator on 2017/9/20.
 */
exports.sql={
    getindexlist:'SELECT count(petlike.petId) as likecount,petinfo.petid,petinfo.uid,petinfo.title,petinfo.img,userinfo.nickname,headimg.headimg,userinfo.sex FROM ((petlike right JOIN petinfo ON petlike.petId=petinfo.petId)LEFT JOIN userinfo ON userinfo.uid=petinfo.uid )LEFT JOIN headimg ON userinfo.uid=headimg.uid GROUP BY petinfo.petId ORDER BY likecount DESC LIMIT 8'
}