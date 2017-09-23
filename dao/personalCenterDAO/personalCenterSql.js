/**
 * Created by Administrator on 2017/9/20.
 */
exports.sql={
    getheadimg:'SELECT headimg FROM `headimg` where uid = ? ORDER BY id DESC limit 1',
    getinfo:'SELECT userinfo.introduce,userinfo.mygrade,userinfo.sex,city.city FROM `userinfo` LEFT JOIN city on userinfo.cityID=city.cityID where uid=?',
    getAdoptionlist:'SELECT * FROM `getadoptionlist` WHERE adoptuid=?',
    getPublishList:'SELECT * FROM `getpublish` WHERE uid=?',
    getDiaryList:''
};