document.body.onload = function (evt) {
    console.log('evt from crack.js');
    console.log(evt);
    alert(1243);
}
var slideBlock = null;
var infoShowDiv = document.createElement('div');
var canvas = document.createElement('canvas');

var slideBlockSize = 0;
var totalBlockSize = null;

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

document.body.addEventListener('dblclick', function (evt) {
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

    canvas.style.height = '160px';
    canvas.style.width = '280px';

    var ctx = canvas.getContext('2d');
    ctx.drawImage(bigImg, 0, 0, bigImg.naturalWidth, bigImg.naturalHeight, 0, 0, totalBlockSize.width, totalBlockSize.height);
    var imgPixel = ctx.getImageData(2, 2, 1, 1);
    console.log(imgPixel);

    ctx.beginPath();
    ctx.moveTo(0,slideBlockSize.top);
    ctx.lineTo(280,60);
    ctx.stroke();

    slideBlock = document.getElementById('slideBlock');

    console.log('slideTop' + slideBlockSize.top);


});