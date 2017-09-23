/**
 * Created by Administrator on 2017/8/28.
 */
exports.sql={
    getPasswordByTelPhone:'select * from userInfo where telphone=?',
    regist_searchTelPhone:'select count(1) count from userInfo where telphone=?',
    addUser:'insert into userInfo(telphone,password,nickname,token,sex,regist_date,cityID,mygrade) value(?,?,?,?,?,?,?,?)',
    virefy_search:'select code,time from verifycode where phone= ? order by time desc',
    virefy_add:'insert into verifycode(phone,code,time) value(?,?,?)',
    update_token:'update userinfo set token = ? where uid= ?',
    check_token:'select token from userinfo where uid =?'
}