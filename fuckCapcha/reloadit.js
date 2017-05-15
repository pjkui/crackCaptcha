// ==UserScript==
// @name         reloadIt
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://game.captcha.qq.com/hslj/html/hslj/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.addEventListener("message", receiveMessage, false);

    function receiveMessage(event)
    {
        if (event.origin !== "http://example.org:8080")
            if(event.data == 'reloadIt'){
                console.log(event);
                //init("container","embed");
                window.location.reload();
            }
        return;
    }
})();