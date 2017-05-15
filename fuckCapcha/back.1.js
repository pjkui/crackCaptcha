// ==UserScript==
// @name         crackCaptcha
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://captcha.guard.qcloud.com/*
// @match        https://ssl.captcha.qq.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    document.body.onload = function (evt) {
        console.log('evt from crack.js');
        console.log(evt);
        console.log('Inject Success!');
    };
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
    var endPosition = null;

    window.startPosX = 45;
    window.startPosY = 195;

    document.body.appendChild(infoShowDiv);

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
        };
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
            var item = data[index];
            var itemOtherSide = data[index + sliderDistance];
            var value = (item[0] - templateColor[0]) * (item[0] - templateColor[0]) + (item[1] - templateColor[1]) * (item[1] - templateColor[1]) +
                (item[2] - templateColor[2]) * (item[2] - templateColor[2]);
            value += (itemOtherSide[0] - templateColor[0]) * (itemOtherSide[0] - templateColor[0]) + (itemOtherSide[1] - templateColor[1]) * (itemOtherSide[1] - templateColor[1]) +
                (itemOtherSide[2] - templateColor[2]) * (itemOtherSide[2] - templateColor[2]);
            records.push({
                pos: index,
                value: value
            });
        }
        records.sort(compareTwoWeightValue);
        start = records[0].pos;
        end = start + sliderDistance;
        return [start, end];
    };
    document.body.addEventListener('dblclick', crackIt);

    function process(evt) {

        totalBlockSize = getTotalBlockSize();
        slideBlockSize = getSlideBlockSize();

        // console.log(totalBlockSize);

        var bigImg = document.getElementsByClassName('big img')[0];
        if (bigImg == null) {
            setTimeout(process, 50);
            return;
        }

        canvas.height = 320;
        canvas.width = 560;
        document.body.appendChild(canvas);


        var ctx = canvas.getContext('2d');
        ctx.drawImage(bigImg, 0, 0, bigImg.naturalWidth, bigImg.naturalHeight, 0, 0, bigImg.naturalWidth, bigImg.naturalHeight);
        // ctx.drawImage(bigImg, 0, 0, 280, 160, 0, 0, 280, 160);
        linePixels1.length = 0;
        linePixels2.length = 0;
        linePixels3.length = 0;
        var naturalTop = slideBlockSize.top * 2;
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

        window.positionX = positionX;
        document.body.removeChild(canvas);        
        return positionX;
    };
    window.processImg = process;
    var srcPosition = {};
    var desPosition = {};

    function move(posX, posY) {
        posY = posY || 195;
        var mousemoveevent4 = jQuery.Event("mousemove", {
            which: 1,
            pageX: posX,
            pageY: posY
        });
        $('#slide_bar_head').trigger(mousemoveevent4);
        return 1;
    }

    function keydown(posX, posY) {
        posX = posX || 45;

        posY = posY || 195;

        var mousedownevent = jQuery.Event("mousedown", {
            which: 1,
            pageX: posX,
            pageY: posY
        });
        $('#slide_bar_head').trigger(mousedownevent);
        return 1;
    }

    function keyup(posX, posY) {
        posX = posX || 200;
        posY = posY || 195;
        var mouseupevent = jQuery.Event("mouseup", {
            which: 1,
            pageX: posX,
            pageY: posY
        });
        $('#slide_bar_head').trigger(mouseupevent);
        return 1;
    }


    //process Image
    function step1() {
        var rt = 0;
        try {
            rt = process();
        } catch (e) {
            rt = 0;
        }
        return rt;
    }


    //start : keydown
    function step2() {
        var ret = 0;
        startPosX = parseInt(40 + 10 * Math.random());
        startPosY = parseInt(190 + 10 * Math.random());
        try {
            ret = keydown(startPosX, startPosY);
        } catch (e) {
            console.error('keydown error:' + e);
        }
        return ret;
    }

    //first move slider
    function step3() {
        var ret = 0;
        try {
            ret = move(startPosX, startPosY);
        } catch (e) {
            console.error('move45 error:' + e);
        }
        return ret;
    }
    //end move slider
    function step4() {
        var ret = 0;
        try {
            //end positionY with random value 
            startPosY = parseInt(190 + 10 * Math.random());

            ret = move(parseInt(window.positionX / 2 + 35), startPosY);
        } catch (e) {
            console.error('move error:' + e);
        }
        return ret;
    }

    // end keyup
    function step5() {
        var ret = 0;
        try {
            ret = keyup(parseInt(window.positionX / 2 + 35), startPosY);
        } catch (e) {
            console.error('move error:' + e);
        }
        return ret;
    }

    //中间随机移动
    function stepRand() {
        var ret = 0;
        try {
            var rndPosX = parseInt(30 * Math.random() + window.stepNum * (positionX / 2 + 30) / stepsFunc.length);
            var rndPosY = parseInt(10 * Math.random() + 190);
            ret = move(rndPosX, rndPosY);
            console.log('random move :' + rndPosX + ':' + rndPosY);

        } catch (e) {
            console.error('move error:' + e);
        }
        return ret;
    }

    function stepNoop() {
        return 1;
    }
    window.stepNum = 0;
    window.stepsFunc = [step1, step2, step3, stepRand, stepRand, stepRand, step4, step5, stepNoop];
    window.count = 0;

    function crackIt() {
        // window.stepNum = window.stepNum % 5;
        if (stepNum === 0) {
            //generate random steps
            window.stepsFunc = [step1, step2, step3, step4, step5, stepNoop];
            var randStep = parseInt(30 * Math.random()+50);
            for (var i = 0; i < randStep; ++i) {
                window.stepsFunc.splice(3, 0, stepRand);
            }
            console.log("random path:" + stepsFunc.length);
        }

        if (window.stepNum < stepsFunc.length) {
            var value = window.stepsFunc[window.stepNum]();
            if (value > 0) {
                window.stepNum++;
            }
        } else {
            // $("#reload").click();
            window.stepNum = 0;
        }
        window.count++;
        if (window.error12Count && window.error12Count > 2) {
            // window.parent.window.postMessage('refresh', 'http://game.captcha.qq.com');
            parent.postMessage('reloadIt', 'http://game.captcha.qq.com')
            //parent reload
            btn1.style.color = 'red';
        } else {

            if (stepNum > 3 && stepNum < stepsFunc.length - 3) {
                var time = parseInt(80 * Math.random+100);
                setTimeout(function () {
                    crackIt();
                }, time);
            } else {
                setTimeout(function () {
                    crackIt();
                }, 450);
            }
        }
    }

    var btn1 = document.createElement('div');
    btn1.style.position = "absolute";
    btn1.innerText = "crack";
    btn1.style.left = '10px';
    btn1.style.top = '10px';
    btn1.addEventListener('click', function (evt) {
        crackIt();
    });
    window.btn1 = btn1;
    document.body.appendChild(btn1);
    window.crackIt = crackIt;
    window.step1 = step1;
    window.step2 = step2;
    window.step3 = step3;
    window.step4 = step4;
    window.step5 = step5;

    window.keydown = keydown;
    window.keyup = keyup;
    window.move = move;
    document.xPos = -1;

    setTimeout(crackIt, 500);

    if (window.ajaxInj == null) {
        console.log('-----------ajax------------------');
        console.log($.ajax);
        console.log('------------------------------------');
        window.ajaxInj = $.ajax;
        $.ajax = function (a, b) {
            console.log('ajax');
            console.log(a);
            console.log(b);
            // foolServer();

            // if (window.xPos != -1) {
            //     if (a && a.data && a.data.ans) {
            //         a.data.bbbbbd = TDC.getData(!0);
            //         a.data.ans = window.xPos + ',' + a.data.ans.split(',')[1];
            //         window.xPos = -1;
            //     }
            // }
            if (a.success.toString().indexOf('aaabbb') < 0) {
                var successHd = a.success;
                a.success = function (data) {
                    var aaabbb = data;
                    if (aaabbb.errorCode != '0') {
                        window.errorCount++;
                        if (aaabbb.errorCode == '12') {
                            if (window.error12Count == null) {
                                window.error12Count = 0;
                                btn1.style.color = '#f00';

                            }
                            window.error12Count++;
                        } else if (aaabbb.errorCode == '50') {
                            btn1.style.color = '#ff0';

                        }
                    } else {
                        window.errorCode = 0;
                        window.error12Count = 0;
                        window.successCount++;
                        btn1.style.color = '#fff';


                    }
                    console.log(aaabbb);
                    successHd(data);
                };
            }
            window.ajaxInj(a, b);
        };
        //     monitorEvents(document);
    }
    // process();
})();