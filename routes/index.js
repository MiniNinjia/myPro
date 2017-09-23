var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.redirect('http://localhost:4200/index');
});

module.exports=router;
