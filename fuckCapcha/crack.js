document.body.onload = function (evt) {
    console.log('evt from crack.js');
    console.log(evt);
    alert(123);
}
document.body.addEventListener('dblclick', function (evt) {
    //  console.log('evt from crack.js');
    // console.log(evt);
    // alert(1233432);
    console.log(bigImg);
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    var bigImg = document.getElementsByClassName('big img')[0];
    var ctx = canvas.getContext('2d');
    ctx.drawImage(bigImg, 0, 0,bigImg.clientWidth,bigImg.clientHeight);
    var imgPixel = ctx.getImageData(2,2,1,1);
    console.log(imgPixel);
    
});