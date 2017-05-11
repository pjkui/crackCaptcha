document.body.onload = function(evt) {
    console.log('evt from crack.js');
    console.log(evt);
    alert(1243);
}
var slideBlock = null;
var infoShowDiv = document.createElement('div');
var canvas = document.createElement('canvas');

var slideBlockSize = 0;
var totalBlockSize = null;
var linePixels1 = [];
var linePixels2 = [];
var linePixels3 = [];

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
        width: totalBlock.clientWidth
    };
}

function getSlideBlockSize() {
    var slideBlock = document.getElementById('slideBlock');
    if (slideBlock == null) {
        console.warn('totalBlock is null');
        return null;
    }

    return {
        height: slideBlock.clientHeight,
        width: slideBlock.clientWidth,
        top: parseInt(slideBlock.style.top, 10)
    }
}

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

    canvas.style.height = '320px';
    canvas.style.width = '560px';

    var ctx = canvas.getContext('2d');
    ctx.drawImage(bigImg, 0, 0, bigImg.naturalWidth, bigImg.naturalHeight, 0, 0, totalBlockSize.width, totalBlockSize.height);
    linePixels1.length = 0;
    linePixels2.length = 0;
    linePixels3.length = 0;
    var naturalTop = slideBlockSize.top * 2
    var processedTop1 = slideBlockSize.top + slideBlockSize.height * (2 / 7);
    var processedTop2 = slideBlockSize.top + slideBlockSize.height / 2;
    var processedTop3 = slideBlockSize.top + slideBlockSize.height * (5 / 7);
    for (var x = 0; x < totalBlockSize.width; ++x) {
        var imgPixel1 = ctx.getImageData(x, processedTop1, 1, 1);
        var imgPixel2 = ctx.getImageData(x, processedTop2, 1, 1);
        var imgPixel3 = ctx.getImageData(x, processedTop3, 1, 1);

        linePixels1.push(imgPixel1);
        linePixels2.push(imgPixel2);
        linePixels3.push(imgPixel3);
    }
    console.log(linePixels1);
    console.log(linePixels2);
    console.log(linePixels3);

    ctx.beginPath();
    ctx.moveTo(0, slideBlockSize.top);
    ctx.lineTo(280, slideBlockSize.top);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, processedTop1);
    ctx.lineTo(280, processedTop1);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, processedTop2);
    ctx.lineTo(280, processedTop2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, processedTop3);
    ctx.lineTo(280, processedTop3);
    ctx.stroke();

    slideBlock = document.getElementById('slideBlock');

    console.log('slideTop' + slideBlockSize.top);


});