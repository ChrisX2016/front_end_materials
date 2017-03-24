var digit = [
    [
        [0, 0, 1, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 0, 1, 1, 0],
        [0, 0, 1, 1, 1, 0, 0]
    ], //0
    [
        [0, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1, 1]
    ], //1
    [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1]
    ], //2
    [
        [1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
    ], //3
    [
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 1, 1, 0],
        [1, 1, 0, 0, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 1]
    ], //4
    [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
    ], //5
    [
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
    ], //6
    [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0]
    ], //7
    [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
    ], //8
    [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 0]
    ], //9
    [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ] //:
];
var window_width = 1024;
var window_height = 768;
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var Radius = 8;
var margin_top = 60;
var margin_left = 30;
const endTime = new Date(2017, 1, 18, 19, 00, 00)
var curShowTimeSeconds = 0;
//小球
var ball = [];
const colors = ['#33B5E5', '#0099CC', '#AA66CC', '#9933CC', '#99CC00', '#669900', '#FFBB33', '#FF8800', '#FF4444', '#CC0000'];
canvas.width = window_width;
canvas.height = window_height;
setInterval(function() {
    render(context);
    update();
}, 50)
curShowTimeSeconds = getCurrentShowTimeSeconds()
render(context)

function getCurrentShowTimeSeconds() {
    var curTime = new Date()
    var ret = endTime.getTime() - curTime.getTime()
    ret = Math.round(ret / 1000)

    return ret >= 0 ? ret : 0;
}

function update() {
    var nextShowTimeSeconds = getCurrentShowTimeSeconds();
    var nextHours = parseInt(curShowTimeSeconds / 3600)
    var nextMin = parseInt((curShowTimeSeconds - nextHours * 3600) / 60)
    var nextSec = nextShowTimeSeconds % 60

    var curHours = parseInt(curShowTimeSeconds / 3600)
    var curMin = parseInt((curShowTimeSeconds - curHours * 3600) / 60)
    var curSec = curShowTimeSeconds % 60
    if (nextSec != curSec) {
        if (parseInt(curHours / 10) != parseInt(nextHours / 10)) {
            addBalls(margin_left, margin_top, parseInt(curHours / 10))
        }
        if (parseInt(curHours % 10) != parseInt(nextHours % 10)) {
            addBalls(margin_left + 15 * (Radius + 1), margin_top, parseInt(curHours % 10))
        }
        if (parseInt(curMin / 10) != parseInt(nextMin / 10)) {
            addBalls(margin_left + 39 * (Radius + 1), margin_top, parseInt(curMin / 10))
        }
        if (parseInt(curMin % 10) != parseInt(nextMin % 10)) {
            addBalls(margin_left + 54 * (Radius + 1), margin_top, parseInt(curMin % 10))
        }
        if (parseInt(curSec / 10) != parseInt(nextSec / 10)) {
            addBalls(margin_left + 78 * (Radius + 1), margin_top, parseInt(curSec / 10))
        }
        if (parseInt(curSec % 10) != parseInt(nextSec % 10)) {
            addBalls(margin_left + 93 * (Radius + 1), margin_top, parseInt(curSec % 10))
        }
        curShowTimeSeconds = nextShowTimeSeconds

    }
    updateBalls()
}

function addBalls(x, y, num) {
    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] == 1) {
                var aBall = {
                    x: x + j * 2 * (Radius + 1) + (Radius + 1),
                    y: y + i * 2 * (Radius + 1) + (Radius + 1),
                    g: 1.5 + Math.random(),
                    vx: Math.pow(-1, Math.ceil(Math.random() * 10000)) * 4,
                    vy: -5,
                    color: colors[Math.floor(Math.random() * colors.length)]
                }
                ball.push(aBall)
            }
        }
    }
}

function updateBalls() {
    for (var i = 0; i < ball.length; i++) {
        ball[i].x += ball[i].vx
        ball[i].y += ball[i].vy
        ball[i].vy += ball[i].g
        if (ball[i].y >= window_height - Radius) {
            ball[i].y = window_height - Radius
            ball[i].vy = -ball[i].vy * 0.3
        }
    }
    var cnt = 0
    for(var i = 0 ;i<ball.length ; i++){
        if(ball[i].x +Radius >0 && ball[i].x - Radius<window_width){
            ball[cnt++] = ball[i]
        }
    }
    while(ball.length>Math.min(300,cnt)){
        ball.pop()
    }
}

function render(ctx) {
    ctx.clearRect(0, 0, window_width, window_height)
    var hours = parseInt(curShowTimeSeconds / 3600)
    var min = parseInt((curShowTimeSeconds - hours * 3600) / 60)
    var sec = curShowTimeSeconds % 60

    renderDigit(margin_left, margin_top, parseInt(hours / 10), ctx)
    renderDigit(margin_left + 15 * (Radius + 1), margin_top, parseInt(hours % 10), ctx)
    renderDigit(margin_left + 30 * (Radius + 1), margin_top, 10, ctx)
    renderDigit(margin_left + 39 * (Radius + 1), margin_top, parseInt(min / 10), ctx)
    renderDigit(margin_left + 54 * (Radius + 1), margin_top, parseInt(min % 10), ctx)
    renderDigit(margin_left + 69 * (Radius + 1), margin_top, 10, ctx)
    renderDigit(margin_left + 78 * (Radius + 1), margin_top, parseInt(sec / 10), ctx)
    renderDigit(margin_left + 93 * (Radius + 1), margin_top, parseInt(sec % 10), ctx)

    for (var i = 0; i < ball.length; i++) {
        ctx.fillStyle = ball[i].color
        ctx.beginPath()
        ctx.arc(ball[i].x, ball[i].y, Radius, 0, 2 * Math.PI, true)
        ctx.closePath()
        ctx.fill()
    }

}

function renderDigit(x, y, num, ctx) {

    ctx.fillStyle = 'rgb(0,102,153)';
    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] == 1) {
                ctx.beginPath();
                ctx.arc(x + j * 2 * (Radius + 1) + (Radius + 1), y + i * 2 * (Radius + 1) + (Radius + 1), Radius, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }
    }
}
