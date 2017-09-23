/**
 * Created by Administrator on 2017/8/25.
 */
/**生成一个随机数**/
var code='';
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
/**生成一个随机色**/
function randomColor(min, max) {
    var r = randomNum(min, max);
    var g = randomNum(min, max);
    var b = randomNum(min, max);
    return "rgb(" + r + "," + g + "," + b + ")";
}
drawPic();
document.getElementById("authimg").onclick = function (e) {
    e.preventDefault();
    drawPic();
};

/**绘制验证码图片**/
function drawPic() {
    var canvas = document.getElementById("myCanvas");
    var width = canvas.width;
    var height = canvas.height;
    var ctx = canvas.getContext('2d');
    ctx.textBaseline = 'bottom';
    code='';
    /**绘制背景色**/
    ctx.fillStyle = randomColor(180, 240); //颜色若太深可能导致看不清
    ctx.fillRect(0, 0, width, height);
    /**绘制文字**/
    var str = 'ABCEFGHJKLMNPQRSTWXYqwertyuiopasdfghjklzxcvbnm123456789';
    for (var i = 0; i < 4; i++) {
        var txt = str[randomNum(0, str.length)];
        code+=txt+'';
        ctx.fillStyle = randomColor(50, 160);  //随机生成字体颜色
        ctx.font = randomNum(130, 130) + 'px SimHei'; //随机生成字体大小
        var x = 10 + i * 70;
        var y = randomNum(25, 45);
        var deg = randomNum(-20, 20);
        //修改坐标原点和旋转角度
        ctx.translate(x, y);
        ctx.rotate(deg * Math.PI / 180);
        ctx.fillText(txt, 0, 100);
        //恢复坐标原点和旋转角度
        ctx.rotate(-deg * Math.PI / 180);
        ctx.translate(-x, -y);
    }
    /**绘制干扰线**/
    for (var i = 0; i < 20; i++) {
        ctx.strokeStyle = randomColor(40, 180);
        ctx.beginPath();
        ctx.moveTo(randomNum(0, width), randomNum(0, height));
        ctx.lineTo(randomNum(0, width), randomNum(0, height));
        ctx.stroke();
    }
    /**绘制干扰点**/
    for (var i = 0; i < 100; i++) {
        ctx.fillStyle = randomColor(0, 255);
        ctx.beginPath();
        ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);
        ctx.fill();
    }
}