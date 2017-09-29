/**
 * Created by Administrator on 2017/9/28.
 */
var express = require('express');
var router = express.Router();
var upload = require('../fileupload/fileupload');

//文件上传服务
router.post('/', upload.any('logo'), function (req, res, next) {
    if (req.files) {
        var data = {"link": "http://localhost:3000/upload/"+req.files[0].filename}
        res.send(data);
    }
});

module.exports = router;