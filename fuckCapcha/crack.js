document.body.onload = function(evt) {
    console.log('evt from crack.js');
    console.log(evt);
    console.log('Inject Success!');
}
var slideBlock = null;
var infoShowDiv = document.createElement('div');
var canvas = document.createElement('canvas');

var slideBlockSize = 0;
var totalBlockSize = null;
var linePixels1 = [];
var linePixels2 = [];
var linePixels3 = [];

var positionX = 0;
var positionY = 0;

document.body.appendChild(infoShowDiv);
document.body.appendChild(canvas);


function getTotalBlockSize() {
    var totalBlock = document.getElementById('totalBlock');
    if (totalBlock == null) {
        console.warn('totalBlock is null');
        return null;
    }

    return {
        height: totalBlock.clientHeight,
        width: totalBlock.clientWidth,
        naturalHeight: totalBlock.naturalHeight,
        naturalWidth: totalBlock.naturalWidth
    };
}

function getSlideBlockSize() {
    var slideBlock = document.getElementById('slideBlock');
    if (slideBlock == null) {
        console.warn('totalBlock is null');
        return null;
    }
    return {
        naturalHeight: slideBlock.naturalHeight,
        naturalWidth: slideBlock.naturalWidth,
        height: slideBlock.clientHeight,
        width: slideBlock.clientWidth,
        top: parseInt(slideBlock.style.top, 10)
    }
}
//两个黄色边框的宽度
var sliderDistance = 84;
var templateColor = [255, 255, 160];

function compareTwoWeightValue(a, b) {
    if (a.value < b.value) {
        return -1;
    }
    if (a.value > b.value) {
        return 1;
    }
    return 0;
}

function compareTwoArray(a, b) {
    if (a[0] < b[0]) {
        return -1;
    }
    if (a[0] > b[0]) {
        return 1;
    }
    return 0;
}

function findPosition(data) {
    var start = 0;
    var end = 0;
    var records = [];
    endPosition = data.length - sliderDistance;
    for (var index = 0; index < endPosition; ++index) {
        item = data[index];
        itemOtherSide = data[index + sliderDistance];
        var value = (item[0] - templateColor[0]) * (item[0] - templateColor[0]) + (item[1] - templateColor[1]) * (item[1] - templateColor[1]) +
            (item[2] - templateColor[2]) * (item[2] - templateColor[2]);
        value += (itemOtherSide[0] - templateColor[0]) * (itemOtherSide[0] - templateColor[0]) + (itemOtherSide[1] - templateColor[1]) * (itemOtherSide[1] - templateColor[1]) +
            (itemOtherSide[2] - templateColor[2]) * (itemOtherSide[2] - templateColor[2]);
        records.push({ pos: index, value: value });
    }
    records.sort(compareTwoWeightValue);
    start = records[0].pos;
    end = start + sliderDistance;
    return [start, end];
};
document.body.addEventListener('dblclick', function(evt) {
    //  console.log('evt from crack.js');
    // console.log(evt);
    // alert(1233432);
    console.log(bigImg);

    totalBlockSize = getTotalBlockSize();
    slideBlockSize = getSlideBlockSize();

    console.log(totalBlockSize);

    var bigImg = document.getElementsByClassName('big img')[0];
    console.log('big Img：');
    console.log(bigImg);

    canvas.height = 320;
    canvas.width = 560;

    var ctx = canvas.getContext('2d');
    ctx.drawImage(bigImg, 0, 0, bigImg.naturalWidth, bigImg.naturalHeight, 0, 0, bigImg.naturalWidth, bigImg.naturalHeight);
    // ctx.drawImage(bigImg, 0, 0, 280, 160, 0, 0, 280, 160);
    linePixels1.length = 0;
    linePixels2.length = 0;
    linePixels3.length = 0;
    var naturalTop = slideBlockSize.top * 2
    positionY = naturalTop;
    var processedTop1 = naturalTop + slideBlockSize.naturalHeight * (2 / 7);
    var processedTop2 = naturalTop + slideBlockSize.naturalHeight / 2;
    var processedTop3 = naturalTop + slideBlockSize.naturalHeight * (5 / 7);
    for (var x = 0; x < totalBlockSize.naturalWidth; ++x) {
        var imgPixel1 = ctx.getImageData(x, processedTop1, 1, 1);
        var imgPixel2 = ctx.getImageData(x, processedTop2, 1, 1);
        var imgPixel3 = ctx.getImageData(x, processedTop3, 1, 1);

        if (imgPixel1.height == 2) {

        }
        linePixels1.push([imgPixel1.data[0], imgPixel1.data[1], imgPixel1.data[2], imgPixel1.data[3]]);
        linePixels2.push([imgPixel2.data[0], imgPixel2.data[1], imgPixel2.data[2], imgPixel2.data[3]]);
        linePixels3.push([imgPixel3.data[0], imgPixel3.data[1], imgPixel3.data[2], imgPixel3.data[3]]);
        // linePixels2.push(imgPixel2);
        // linePixels3.push(imgPixel3);
    }

    var pos1 = findPosition(linePixels1);
    var pos2 = findPosition(linePixels2);
    var pos3 = findPosition(linePixels3);
    console.log('-----------position-----------------');
    console.log(pos1);
    console.log(pos2);
    console.log(pos3);
    console.log('------------------------------------');

    var positions = [pos1, pos2, pos3];
    positions = positions.sort(compareTwoArray);
    console.log('------------排序---------------------');
    console.log(positions);
    console.log('------------------------------------');

    if (Math.abs(positions[1][0] - positions[0][0]) > Math.abs(positions[2][0] - positions[1][0])) {
        positionX = parseInt((positions[2][0] + positions[1][0]) / 2, 10);
    } else {
        positionX = parseInt((positions[1][0] + positions[0][0]) / 2, 10);
    }

    console.log('--------get the last position------');
    console.log('X:' + positionX + ', Y:' + positionY);
    console.log('------------------------------------');

    // linePixels1 = ctx.getImageData(0, processedTop1, 560, 1);
    // linePixels2 = ctx.getImageData(0, processedTop2, 560, 1);
    // linePixels3 = ctx.getImageData(0, processedTop3, 560, 1);

    // console.log(linePixels1);
    // console.log(linePixels2);
    // console.log(linePixels3);

    ctx.beginPath();
    ctx.moveTo(0, naturalTop);
    ctx.lineTo(560, naturalTop);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, processedTop1);
    ctx.lineTo(560, processedTop1);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, processedTop2);
    ctx.lineTo(560, processedTop2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, processedTop3);
    ctx.lineTo(560, processedTop3);
    ctx.stroke();

    slideBlock = document.getElementById('slideBlock');

    console.log('slideTop' + slideBlockSize.top);

    doOne(positionX);

});
var srcPosition = {};
var desPosition = {};

function foolServer() {

    var data = {
        "mousemove": [{ "t": 1, "x": 28, "y": 192 }], //multiple 
        "mouseclick": [{ "t": 665, "x": 143, "y": 203 }],
        "begintime": 1494692176,
        "endtime": 1494692853,
        "keyUpCnt": 0,
        "keyUpValue": [],
        "mouseUpValue": [{ "t": 30, "x": 181, "y": 195 }],
        "mouseUpCnt": 1,
        "mouseDownValue": [{ "t": 1, "x": 35, "y": 189 }],
        "mouseDownCnt": 1,
        "orientation": [{ "x": 0, "y": 0, "z": 0 }],
        "bSimutor": 0,
        "coordinate": [10, 9, 0.5],
        "clientType": "2",
        "slideValue": [
            [47, 193, 1], //multiple
        ],
        "trycnt": 1,
        "refreshcnt": 0
    };
    var time1 = parseInt(new Date().getTime() / 1000);
    data.begintime = time1;
    data.endtime = time1 + 1;
    for (var i = 0; i < positionX; i += 20) {
        data.slideValue.push(20, 0, 20);
        data.mousemove.push({ t: i, "x": i, "y": 195 });
    }
    data.mouseUpValue[0].x = positionX;
    TDC.setData(data);
}

function doOne(xPos) {
    // var evt = document.createEvent("MouseEvents");
    // evt.initEvent("mouseup", true, true);
    // document.getElementById("x").dispatchEvent(evt);
    xPos = xPos || 140;
    document.xPos = xPos;
    var strX = xPos + 'px';
    $('#slide_bar_head').trigger('mousedown')
    $('#slide_bar_head').css('left', strX)
    $('#slideBlock').css('left', strX)
    $('#slide_bar_head').trigger('mouseup')
}

function receiveMessage(event) {
    // Do we trust the sender of this message?  (might be
    // different from what we originally opened, for example).
    if (event.origin !== "http://example.org")
        return;

    // event.source is popup
    // event.data is "hi there yourself!  the secret response is: rheeeeet!"
}
window.addEventListener("message", receiveMessage, false);

//window.parent.window.postMessage('hee','http://game.captcha.qq.com/hslj/html/hslj/game_vcode.html?session_id=2190970180023677415&uin=510124997')
setTimeout(function() {
    // Handler for .ready() called.

    if (document.ajaxInj == null) {
        console.log('-----------ajax------------------');
        console.log($.ajax);
        console.log('------------------------------------');
        document.ajaxInj = $.ajax;
        $.ajax = function(a, b) {
                console.log('ajax');
                console.log(a);
                console.log(b);
                foolServer();

                if (document.xPos != -1) {
                    if (a && a.data && a.data.ans) {
                        a.data.bbbbbd = TDC.getData(!0);
                        a.data.ans = document.xPos + ',' + a.data.ans.split(',')[1];
                        document.xPos = -1;
                    }
                }
                document.ajaxInj(a, b);
            }
            //     monitorEvents(document);
    }
}, 100);

document.xPos = -1;