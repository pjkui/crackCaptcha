parse,mousemove,mouseclick,keyvalue,user_Agent,resolutionx,resolutiony,url,refer,begintime,endtime,platform,os,keyboards,flash,pluginNum,index,ptcz,tokenid,toString,prototype,hasOwnProperty,call,[object ,],Object,String,isArray,Array,Function,length,forEach,map,currentStyle,getComputedStyle,defaultView,style,match,userAgent,doScroll,documentElement,DOMContentLoaded,add,?,indexOf,substring,type,CSS,each,mapArray,poll,cutUrl,DOMReady,href,location,,referrer,addEventListener,attachEvent,on,removeEventListener,detachEvent,remove,lib,Base,mixIn,init,apply,$super,extend,WordArray,words,sigBytes,stringify,clamp,push,ceil,clone,slice,random,enc,Hex,join,substr,Latin1,fromCharCode,charCodeAt,Utf8,Malformed UTF-8 data,BufferedBlockAlgorithm,_data,_nDataBytes,string,concat,blockSize,_minBufferSize,max,min,splice,Hasher,cfg,reset,finalize,HMAC,algo,Base64,_map,charAt,create,ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=,sin,abs,MD5,_hash,floor,HmacMD5,EvpKDF,hasher,keySize,iterations,update,compute,Cipher,_xformMode,_key,encrypt,decrypt,StreamCipher,mode,_iv,_prevBlock,BlockCipherMode,Encryptor,Decryptor,_cipher,encryptBlock,decryptBlock,CBC,Pkcs7,pad,BlockCipher,iv,_ENC_XFORM_MODE,createEncryptor,createDecryptor,_mode,processBlock,padding,unpad,CipherParams,formatter,OpenSSL,format,ciphertext,salt,SerializableCipher,kdf,PasswordBasedCipher,ivSize,execute,key,AES,_nRounds,_keySchedule,_invKeySchedule,object,use strict,0,toJSON,function,getUTCFullYear,-,getUTCMonth,getUTCDate,T,getUTCHours,:,getUTCMinutes,getUTCSeconds,Z,lastIndex,test,",\u,0000,replace,null,number,boolean,[object Array],[],[
,,
,
,[,,,: ,{},{
,},{,\b,\t,\n,\f,\r,\",\\, ,JSON.stringify,@,(,),JSON.parse,RTCPeerConnection,mozRTCPeerConnection,webkitRTCPeerConnection,stun:stun.services.mozilla.com,exec,onicecandidate,candidate,createDataChannel,setLocalDescription,createOffer,split,sdp,localDescription,a=candidate:,get,i,in,out,stack,phantomjs,callPhantom,_phantom,appVersion,$cdc_asdjflasutopfhvcZLmcfl_,__webdriver_script_fn,fxdriver_id,__fxdriver_unwrapped,[CODE_VERIFY],postMessage,target error - target and name are both required,target error - target itself must be window object,target error - target name must be string type,target,name,send,*,navigator,target callback function is not defined,targets,listenFunc,initListen,addTarget,data,message,onmessage,listen,clear,timer,count,interval,start,shift,stop,innerWidth,clientWidth,body,innerHeight,clientHeight,isIE,w,h,] ,Error,monospace,sans-serif,serif,getElementsByTagName,span,createElement,fontSize,72px,innerHTML,ttttttttx,fontFamily,appendChild,offsetWidth,offsetHeight,removeChild,detect,;,Symbol;Arial;Courier New;Times New Roman;Georgia;Trebuchet MS;Verdana;Impact;Comic Sans MS;Webdings;Tahoma;Microsoft Sans Serif;Wingdings;Arial Black;Lucida Console;Marlett;Lucida Sans Unicode;Courier;Franklin Gothic Medium;Palatino Linotype,getRegularPluginsString,plugins,getIEPluginsString,ActiveXObject,ShockwaveFlash.ShockwaveFlash,AcroPDF.PDF,PDF.PdfCtrl,QuickTime.QuickTime,rmocx.RealPlayer G2 Control,rmocx.RealPlayer G2 Control.1,RealPlayer.RealPlayer(tm) ActiveX Control (32-bit),RealVideo.RealVideo(tm) ActiveX Control (32-bit),RealPlayer,SWCtl.SWCtl,WMPlayer.OCX,AgControl.AgControl,Skype.Detection,width,height,availHeight,colorDepth,deviceXDPI,logicalXDPI,fontSmoothingEnabled,cS,description,Shockwave Flash,.,$version,charset,characterSet,languages,localStorage,indexedDB,openDatabase,getFullYear,toGMTString,cTZ,collectFonts,collectPlugins,getFlashVersion,getCharSet,getLanguage,collectScreen,collectTimeZone,bSupportLocalStorage,reportError,getErrors,input,querySelectorAll,focus,blur,cIPT,=,; expires=,; path=,; domain=,; secure,cookie,set,unset,atob,'atob' failed: The string to be decoded is not correctly encoded.,btoa,'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.,currentScript,script,src,https://bsp.qcloud.qq.com/v2/index.php,other,winSize,btokenid,tokents,ips,c…s,Mac68K,MacPPC,Macintosh,MacIntel,Mac,X11,Unix,Linux,android,Android,like mac os x,IOS,Windows NT 5.0,Windows 2000,Win2000,Windows NT 5.1,Windows XP,WinXP,Windows NT 5.2,Windows 2003,Win2003,Windows NT 6.0,Windows Vista,WinVista,Windows NT 6.1,Windows 7,Win7,msie,firefox,chrome,safari,mobile,all,iframes,parent_dc,parent,child,0px,hidden,iframe,https://captcha.gtimg.com/public/2/tdc_iframe.html,TDC_bfp,div,mouseup,mous…Hidden,mousewheel,DOMMouseScroll,val,setConfig,contentWindow,TDC,Messenger"
if (document.ajaxInj == null) {
    document.ajaxInj = $.ajax;
    $.ajax = function(a, b) {
        console.log('ajax');
        console.log(a);
        console.log(b);
        if (document.xPos != -1) {
            if (a && a.data && a.data.ans) {
                a.data.ans = document.xPos + ',' + a.data.ans.split(',')[1];
                document.xPos = -1;
            }
        }
        document.ajaxInj(a, b);
    }
//     monitorEvents(document);
}
document.xPos = -1;
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

//很可能记录了操作路径了
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

slideValue() [[x,y,t],[x,y,t],..]

{"mousemove":[{"t":666,"x":28,"y":12},{"t":667,"x":36,"y":189},{"t":668,"x":179,"y":195}],"mouseclick":[{"t":665,"x":143,"y":203}],"keyvalue":[],"user_Agent":"chrome/55.0.2883.87","resolutionx":1920,"resolutiony":1080,"winSize":[300,232],"url":"https://ssl.captcha.qq.com/cap_union_new_show","refer":"http://game.captcha.qq.com/hslj/html/hslj/game_vcode.html","begintime":1494692176,"endtime":1494692853,"platform":1,"os":"Win7","keyboards":0,"flash":1,"pluginNum":5,"index":4,"ptcz":"737a6a8b8b46951786403a6be66799f6dcf0642beaaf0a2691cc5e615baa8b08","tokenid":3971341166,"btokenid":"B534b1260b528ab9d708e8e179db71381","tokents":1494515684,"ips":{},"colorDepth":24,"cookieEnabled":true,"timezone":8,"wDelta":0,"keyUpCnt":0,"keyUpValue":[],"mouseUpValue":[{"t":669,"x":181,"y":195}],"mouseUpCnt":3,"mouseDownValue":[{"t":667,"x":35,"y":189}],"mouseDownCnt":3,"orientation":[{"x":0,"y":0,"z":0}],"bSimutor":0,"focusBlur":{"in":[],"out":[],"t":[]},"fVersion":25,"charSet":"UTF-8","resizeCnt":0,"errors":[],"screenInfo":"1920-1080-1040-24-*-*-*","elapsed":16000,"ft":"qf_7P_n_H","coordinate":[10,9,0.5],"clientType":"2","slideValue":[[47,193,44],[3,1,14],[2,2,8],[3,0,8],[5,2,7],[5,1,8],[5,1,8],[3,0,8],[3,0,8],[2,0,6],[2,0,8],[2,0,8],[2,0,17],[1,0,15],[1,0,16],[1,0,8],[2,0,8],[3,0,8],[3,0,8],[3,0,8],[5,1,8],[3,0,8],[2,0,9],[1,0,7],[2,1,8],[1,0,60],[2,0,16],[3,0,8],[3,0,4],[4,0,8],[4,0,8],[3,0,8],[5,1,9],[2,0,7],[1,0,8],[1,0,7],[1,0,9],[1,0,169],[1,0,24]],"trycnt":2,"refreshcnt":0}

"{"mousemove":[{"t":451,"x":92,"y":17},{"t":452,"x":74,"y":109},{"t":453,"x":196,"y":313},{"t":454,"x":238,"y":383},{"t":455,"x":76,"y":277},{"t":456,"x":172,"y":292}],"mouseclick":[],"keyvalue":[],"user_Agent":"chrome/55.0.2883.87","resolutionx":1920,"resolutiony":1080,"winSize":[300,232],"url":"https://ssl.captcha.qq.com/cap_union_new_show","refer":"http://game.captcha.qq.com/hslj/html/hslj/game_vcode.html","begintime":1494692873,"endtime":1494693343,"platform":1,"os":"Win7","keyboards":0,"flash":1,"pluginNum":5,"index":1,"ptcz":"737a6a8b8b46951786403a6be66799f6dcf0642beaaf0a2691cc5e615baa8b08","tokenid":3971341166,"btokenid":"B534b1260b528ab9d708e8e179db71381","tokents":1494515684,"ips":{},"colorDepth":24,"cookieEnabled":true,"timezone":8,"wDelta":0,"keyUpCnt":0,"keyUpValue":[],"mouseUpValue":[{"t":457,"x":242,"y":294}],"mouseUpCnt":1,"mouseDownValue":[{"t":452,"x":35,"y":199}],"mouseDownCnt":1,"orientation":[{"x":0,"y":0,"z":0}],"bSimutor":0,"focusBlur":{"in":[],"out":[],"t":[]},"fVersion":25,"charSet":"UTF-8","resizeCnt":0,"errors":[],"screenInfo":"1920-1080-1040-24-*-*-*"}"

{"mousemove":[{"t":666,"x":28,"y":12},{"t":667,"x":36,"y":189},{"t":668,"x":179,"y":195}],"mouseclick":[{"t":665,"x":143,"y":203}],
"begintime":1494692176,"endtime":1494692853,
"keyUpCnt":0,"keyUpValue":[],"mouseUpValue":[{"t":669,"x":181,"y":195}],"mouseUpCnt":3,
"mouseDownValue":[{"t":667,"x":35,"y":189}],"mouseDownCnt":3,
"orientation":[{"x":0,"y":0,"z":0}],"bSimutor":0,"coordinate":[10,9,0.5],"clientType":"2","slideValue":[[47,193,44],[3,1,14],[2,2,8],[3,0,8],[5,2,7],[5,1,8],[5,1,8],[3,0,8],[3,0,8],[2,0,6],[2,0,8],[2,0,8],[2,0,17],[1,0,15],[1,0,16],[1,0,8],[2,0,8],[3,0,8],[3,0,8],[3,0,8],[5,1,8],[3,0,8],[2,0,9],[1,0,7],[2,1,8],[1,0,60],[2,0,16],[3,0,8],[3,0,4],[4,0,8],[4,0,8],[3,0,8],[5,1,9],[2,0,7],[1,0,8],[1,0,7],[1,0,9],[1,0,169],[1,0,24]],"trycnt":1,"refreshcnt":0
}

{"mousemove":[{"t":4,"x":121,"y":2},{"t":5,"x":48,"y":203},{"t":6,"x":244,"y":210},{"t":7,"x":251,"y":211}],"mouseclick":[],"keyvalue":[],"user_Agent":"chrome/55.0.2883.87","resolutionx":1920,"resolutiony":1080,"winSize":[300,232],"url":"https://ssl.captcha.qq.com/cap_union_new_show","refer":"http://game.captcha.qq.com/hslj/html/hslj/game_vcode.html","begintime":1494693390,"endtime":1494693400,"platform":1,"os":"Win7","keyboards":0,"flash":1,"pluginNum":5,"index":1,"ptcz":"737a6a8b8b46951786403a6be66799f6dcf0642beaaf0a2691cc5e615baa8b08","tokenid":3971341166,"btokenid":"B534b1260b528ab9d708e8e179db71381","tokents":1494515684,"ips":{},"colorDepth":24,"cookieEnabled":true,"timezone":8,"wDelta":0,"keyUpCnt":0,"keyUpValue":[],"mouseUpValue":[{"t":8,"x":255,"y":211}],"mouseUpCnt":1,"mouseDownValue":[{"t":4,"x":38,"y":199}],"mouseDownCnt":1,"orientation":[{"x":0,"y":0,"z":0}],"bSimutor":0,"focusBlur":{"in":[],"out":[],"t":[]},"fVersion":25,"charSet":"UTF-8","resizeCnt":0,"errors":[],"screenInfo":"1920-1080-1040-24-*-*-*"}

//faild request 
curl "https://ssl.captcha.qq.com/cap_union_new_verify?random=1494727157171" -H "Cookie: eas_sid=k1I4P6a7s9L9d6L1y1L8B9Q7Y8; _ga=GA1.2.1863992933.1468033803; tvfe_boss_uuid=37feee15cd64a25e; gaduid=57c851dadfa91; gr_user_id=3ae136c9-359e-441f-be88-ba8bdfebc967; mobileUV=1_15825c52933_bd9c9; pgv_pvi=5922061312; RK=IWmePpkmEK; pac_uid=1_714428042; sd_userid=11001489158194813; sd_cookie_crttime=1489158194813; LW_uid=R1J4E941A7d1x509G4g3y2h5i6; LW_sid=51s4B9R2k2y7c222655465x4o7; cuid=104535832; ptui_loginuin=1603829490; pt2gguin=o1603829490; ptcz=737a6a8b8b46951786403a6be66799f6dcf0642beaaf0a2691cc5e615baa8b08; TDC_bfp=B534b1260b528ab9d708e8e179db71381; pgv_info=ssid=s5343761680; pgv_si=s4320655360; pgv_pvid=152264680; o_cookie=1603829490" -H "Origin: https://ssl.captcha.qq.com" -H "Accept-Encoding: gzip, deflate, br" -H "Accept-Language: zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4,ja;q=0.2" -H "User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36" -H "Content-Type: application/x-www-form-urlencoded; charset=UTF-8" -H "Accept: application/json, text/javascript, */*; q=0.01" -H "Referer: https://ssl.captcha.qq.com/cap_union_new_show?aid=1600001048^&asig=^&captype=7^&protocol=https^&clientype=2^&disturblevel=1^&apptype=1^&curenv=inner^&sess=-5YzBG3esMMmwakcY-xkJpC95DDZ8jfVdg-s4ZQOG9n55xtTftrvkHjSzuFIbFlKdFKNDuQdJ6SWIJ-pjHVLybiC3G0yz9zuPG3ckE8SdmHuob7xDXWWaE31U2h3ZVR20ljVihPANVQBXFNCZXSMCwR3yaLIH7GYy2P-HFskfuLJAbvUWjLeNA**^&noBorder=noborder^&fb=1^&showtype=embed^&uid=510124997^&cap_cd=^&lang=2052^&rnd=966438" -H "X-Requested-With: XMLHttpRequest" -H "Connection: keep-alive" -H "DNT: 1" --data "aid=1600001048^&asig=^&captype=7^&protocol=https^&clientype=2^&disturblevel=1^&apptype=1^&curenv=inner^&sess=-5YzBG3esMMmwakcY-xkJpC95DDZ8jfVdg-s4ZQOG9n55xtTftrvkHjSzuFIbFlKdFKNDuQdJ6SWIJ-pjHVLybiC3G0yz9zuPG3ckE8SdmHuob7xDXWWaE31U2h3ZVR20ljVihPANVQBXFNCZXSMCwR3yaLIH7GYy2P-HFskfuLJAbvUWjLeNA**^&noBorder=noborder^&fb=1^&showtype=embed^&uid=510124997^&cap_cd=^&lang=2052^&rnd=966438^&subcapclass=9^&vsig=c014FESkdYHJ3irzRnucaAr4r7f7OILz2MVLkWRASLlfnmJSkymWJTQtit1JK6oWUzEJtx9aLyXcxe6ZDhc81KIvwVAf0I0wwXGn7MYaiewaRLXNSmsFPWgZNyjkdSnfiJzX7zIg3Xm7iWgg5Q0RCpQgd1e0kSu6X3AdAbV6nizJEK3kuVOqJ19gg**^&ans=172,10;^&cdata=22^&abcaef=OD6q9t0AraWJf^%^2Bdtq0j8VvssoV9RcrPSzle1kma7FAderCVsqcWmA5GXV5NxB9HcSOwqIC3MaN0QgRxwu6dwQIvCXGTgmUwGSksLMDVpB41RpP83HGj16BDgv^%^2BG224wF6xV8j2RGtNxzeP3TkeMWaqxa1zF2ShFMtm6bR7W37sX2d5YTsYoGPBsHoDKwfJbvPMVftw6NlzncftOve6ic^%^2FVidDAOvPACz9wC^%^2FkzHEpzeqyRw3d8aSJk6Wx6s3mqD6exf6ACf1Na^%^2BEI4If1JUolrhgoU3WodKbqdYY8^%^2FPuWJYExMDgidxjyz51i6f1duB3FYNRIviHKpaF^%^2FnjCyWdl2lHhRZ16^%^2BbAKYtsUvj^%^2FxL22SeGKyXONN5FBAFNbdgu6kWIbc6C0B4BpvipjoRCvmL^%^2F6XayKAm1Iz2WyMtpGfBzkx7oSH7ciafKrIALRh84zjDTdzj8sQCvHJG0Mmx4pVaS5FYbgZmmxUX18Bzqv5p89S^%^2BVhyoe5I5v^%^2FNmxVWBGisYNxbRGvZ6NS4Ve8aXIIbOuyjFl4Ouhlaxv8qh^%^2BhV0UKyl7jcVegjRdVjV9JNqeXooICO0aaCP20F3f3thdMPKJuGWsmiJUIYbYjx4tQ7qoKaQ0vynPCdQ^%^2Bx5mcy61JK3Cis9LyhGpxTGRgzBWEoZp52WqDXoPELJ7dKx72LwpbzwKqmP7rR1Lkj3^%^2FHu2D21VxdkCYgcs1x6Ont3Q1S4c2fifLmiMJ^%^2Bu99dwU17mnCVOThQ7eko^%^2FDuRaBPgBhy0xSTWwhokJWF9MSo6HjN^%^2Bw0vXK5gM7EX5UuRlVjgbOiqbESRC0b7kj8u0ZIfKnyQGR^%^2FXrzzcMr75F2a9p9eg^%^2FE^%^2FMcPiFZNWWeTW4BqPuhXPQnjUTl^%^2B0D3qBEVQoCxQ2Zvz4CIVLTacOdIHlMGw2bYYZKAvJN3XVsu3nicGqVdhIkhrE^%^2BkPZgThJVIbx92IxmM5^%^2FUMMwsXWXcb18WXpjY6SZO14O6g0jT65NNuzdqVURXLtyRjNdOOLiAKls4nvHj8t^%^2F26RAsJIEFMoYSC^%^2BXGwUhTLvBn^%^2BFnckeFQ^%^2FViBO00kAzFiYWrlCQV6^%^2BkR^%^2B6L2fSyMwbUJ9MGLY2cmJL9qiPkI4Mp5Waf6I^%^2Bf3sJQMQDeydoPgmjfbMsTGAnRhdURJu7C^%^2BG83yW0P1GAa^%^2BQHqB9HbbGCT^%^2Fv2nZjOc1szlFeZxg1eHEzEne2oILQ0OTdNVFBC2xOMyHAr0bX2elduHhoZgi^%^2FuQzhfWX3dEEQ01LVVq3BbglufIiwOS3qQwqRLfdI2g1MTS^%^2FpWZkZFwhedgnQFyNM48FtcI5thP9cTatxc215BEoA7a3cf^%^2BmnWhig^%^2FrOtKoBYMXT^%^2FzIS8rDFdgQI3nn54GCI^%^2BpWUituTIvRJ1gkcWyZBYHv30yUPKGAh2BjrmmnNoS6vZjOe3DuT9GQIoG3IfXPGuxmT^%^2Ft5m^%^2FF2slIsetL^%^2FuhY8^%^2BoKf1r2ZIT2CPtZDi8ZZKUNNBLUyGzanZJgV3VTgSDSq^%^2FUEBumZX85lpqcUMmWlHXfB9IovX85wdzwRjJFxVy05L8rNufEFLwCToCcOH^%^2FmA6HTPdj^%^2B1muA33B^%^2B6OtFJ0^%^2BCcdqc5OSUzrW05Yfs2RpyX2edGPCPgmOPWuPRRfNa841i60Mec^%^2FGSbl^%^2BlKnSvcVJqFmWTkQxCqB8pv1LViXWuor9VlVRDeunYlBvDpcLf16e^%^2FKXPcgYPQwXBL51GTF^%^2Fylf5DAwiTdQ0xKrOAxQOEXSgfIxMLOkrsUMJnx0XNSgYps7BnxSiZQfuP4dTeoNjiXkeqHArjSZfbWQZ0kzZXALDN^%^2BYNk5zbjTbwijc2CxliaMK7WsZbZ1tkEpe8CelhmPV^%^2BO^%^2BSUPVRItJDgfw5qpCrD2sr0pOxAxTi5PcKlWUvd9wEitOnWp0jB7x8DBVPPKBb^%^2F2TccFh47fHLSKGwCeqnwoGij^%^2BsU5cNHEGNbh2qSQVdJKcSDorZYCkBW4mOAY9^%^2FiY0XzmgfGh4kEOS13OrzuynQtb3TTvKvm74H8w4NCRNlq0iKukmVuIoi0qjOMIA^%^2FyXIJxpa4o9bGI4qYjPDYkg0u95FVgKRiJL8hd0McclYhv^%^2FI^%^2BGAQ8SXTqgOYnHoMhFVgGDrKwevTECdyUruq5otaJfMoWlFUeh3Kr3PfMkYG31uQ0iSFifMXCGI^%^3D^&websig=8175194af598bc809dc6b72acc6de9fb" --compressed

//same request but success

curl "https://ssl.captcha.qq.com/cap_union_new_verify?random=1494727160367" -H "Cookie: eas_sid=k1I4P6a7s9L9d6L1y1L8B9Q7Y8; _ga=GA1.2.1863992933.1468033803; tvfe_boss_uuid=37feee15cd64a25e; gaduid=57c851dadfa91; gr_user_id=3ae136c9-359e-441f-be88-ba8bdfebc967; mobileUV=1_15825c52933_bd9c9; pgv_pvi=5922061312; RK=IWmePpkmEK; pac_uid=1_714428042; sd_userid=11001489158194813; sd_cookie_crttime=1489158194813; LW_uid=R1J4E941A7d1x509G4g3y2h5i6; LW_sid=51s4B9R2k2y7c222655465x4o7; cuid=104535832; ptui_loginuin=1603829490; pt2gguin=o1603829490; ptcz=737a6a8b8b46951786403a6be66799f6dcf0642beaaf0a2691cc5e615baa8b08; TDC_bfp=B534b1260b528ab9d708e8e179db71381; pgv_info=ssid=s5343761680; pgv_si=s4320655360; pgv_pvid=152264680; o_cookie=1603829490" -H "Origin: https://ssl.captcha.qq.com" -H "Accept-Encoding: gzip, deflate, br" -H "Accept-Language: zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4,ja;q=0.2" -H "User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36" -H "Content-Type: application/x-www-form-urlencoded; charset=UTF-8" -H "Accept: application/json, text/javascript, */*; q=0.01" -H "Referer: https://ssl.captcha.qq.com/cap_union_new_show?aid=1600001048^&asig=^&captype=7^&protocol=https^&clientype=2^&disturblevel=1^&apptype=1^&curenv=inner^&sess=-5YzBG3esMMmwakcY-xkJpC95DDZ8jfVdg-s4ZQOG9n55xtTftrvkHjSzuFIbFlKdFKNDuQdJ6SWIJ-pjHVLybiC3G0yz9zuPG3ckE8SdmHuob7xDXWWaE31U2h3ZVR20ljVihPANVQBXFNCZXSMCwR3yaLIH7GYy2P-HFskfuLJAbvUWjLeNA**^&noBorder=noborder^&fb=1^&showtype=embed^&uid=510124997^&cap_cd=^&lang=2052^&rnd=966438" -H "X-Requested-With: XMLHttpRequest" -H "Connection: keep-alive" -H "DNT: 1" --data "aid=1600001048^&asig=^&captype=7^&protocol=https^&clientype=2^&disturblevel=1^&apptype=1^&curenv=inner^&sess=-5YzBG3esMMmwakcY-xkJpC95DDZ8jfVdg-s4ZQOG9n55xtTftrvkHjSzuFIbFlKdFKNDuQdJ6SWIJ-pjHVLybiC3G0yz9zuPG3ckE8SdmHuob7xDXWWaE31U2h3ZVR20ljVihPANVQBXFNCZXSMCwR3yaLIH7GYy2P-HFskfuLJAbvUWjLeNA**^&noBorder=noborder^&fb=1^&showtype=embed^&uid=510124997^&cap_cd=^&lang=2052^&rnd=966438^&subcapclass=9^&vsig=c014FESkdYHJ3irzRnucaAr4r7f7OILz2MVLkWRASLlfnmJSkymWJTQtit1JK6oWUzEJtx9aLyXcxe6ZDhc81KIvwVAf0I0wwXGn7MYaiewaRLXNSmsFPWgZNyjkdSnfiJzX7zIg3Xm7iWgg5Q0RCpQgd1e0kSu6X3AdAbV6nizJEK3kuVOqJ19gg**^&ans=216,10;^&cdata=22^&abcaef=OD6q9t0AraWJf^%^2Bdtq0j8Vsv9bb8sJOOGV06LkpqX9xNrjpBQIp2iwKoprHJW8NRhRxu^%^2B6gEpU5RtpMa^%^2FnCEnA^%^2F9pxVIPh0T6XldxKW47^%^2B4FZK2qcmDEmmHMqnRSYCA58mGRehMbIU3D^%^2FyzY253Uv8H3G3mn^%^2B^%^2BfAMdOfQ8t7vOpn6X6PuAFo3d9IEZg1njDj8P^%^2Frgh92vPk9FR^%^2FNYzq7fdcHcJEYT9lBEp^%^2FKuMZk2UGOaMO1g1aQlGWu6D7UAhTTYbdLnXogzsY3AhOb7elhKlbV1zqmn69QSwJs8xYZ3DPswgw^%^2FUomCozVLY48ucdtql6mc9TQn3uZzpRwKGBoxwW1ahslNcC2V4MSs98aJ0LEg2zz^%^2FUulUYl8MYFXhRHnxT9hxkoPI5YNv0mkze4ecjdXmKipgABdWyFR0vd36evlOaN2d6RgBPOjLXIRWmdaJLoiBb2GAAtg8hdnN^%^2FqGgIb26U7yWfRSFWoDwWeo6JAevaipnvj9SL^%^2FZG725dpA52la^%^2B5xDZxza^%^2FVYKra5YR3KEtB65H7jkplk03lyti9VHxiHWNK0XTXRq85aQ7Eck4Ey^%^2FIpiGohaY^%^2BEUWGz9k81vTenUF7kS4QKNFftyNDCwOOdpOM4xJkdWiJTRs1Eam53^%^2BBT5pU^%^2Fyc88QzD9wIs1hU9zqELFzoNjdGyCl1CjjergCUOmUZiOPd^%^2FKLdCsb12clRFZTIcpDVKES63vL4QQh^%^2F6Tq7LSXQNGy^%^2FIDCScWwrrv873gdbqR9jOfO8ya8^%^2F8MHe1qeOHL^%^2BdxLPCR9gdwZsIWXBWqbwpvVi^%^2B0tWzi7ZLD4d7qfuA9B7DnonqmiakW9Q2End^%^2Bl9^%^2FYDTFOIo3swGBrF^%^2FtpC84NhiEtWaECE9yo3eH8cJ7HrImhJ^%^2BTlYIuRyH1PiYgdQm^%^2FtAo4aYCiwNoAf5puOu9bEXb62jh1lqcWdAxbQtEgoH7AwpVkUP7gwDLG8R4M067geQjlA3DcslRkoF76I7jK0ikD5wG1cQGwEi56nDyIwPOUiYfJcaSLCHzKxRPFxVnBpKlNEutEp5RMVrMgdQHXGzSa^%^2Fsoz8vsZoGrULdYLQfvn5JXRqq1cu^%^2FsRXDWCjzeKsBwUorOIXgmjrC7MDAwGbeXDZXK^%^2FymUmn2vN4Wo0P8zBV9IoTAn23HIay7tsJdQuLv95WRJPZqVTlSvOuK7HaaLvBWrLIRbt1jgksCFtL7Sp12IhYjvsRFaGUbr3sU^%^2Fz9sMWciIKDTJDRdhaL1Q^%^2FnpV^%^2BlF80E6Y^%^2FZQyipR0YOqMnHHBcl^%^2B^%^2BrocSydaGYc7bCrlDfMa5itH6WHkLNiSEsMQo4TAsR^%^2BA5yRHumz32Ivp9O8tZ5sdDuV8tvgpaMTaxnbFu3she^%^2BuUz^%^2BxRxTvJY90sDBD85avmqeZJK1P7bm9YoQai^%^2Btr6sqlonE9GpwWkBH75nWtmz^%^2BGeqf72cRqplf^%^2F1WeYQvB6DRNQc3Vl0VeQRldVhs8ZmNIs8DtHjcEbi0I^%^2BNa^%^2FHPOGQhiSavH5FsoLNT0w^%^2Bbc^%^2B9VBiiZPR5hp5u3eXJS8k^%^2FKuvYT0MrsBnsZkuh2cT7RSPpG9ZWRBEcwjx1545O9RaizhTmr^%^2FW7vKcmPQNElRdATaiKgDlU2Gkgzon7WXBMMvBdnbI^%^2BpTiswpsRzFu^%^2FAs2x2Vl7tLocnStS1pmTZR2SPP1^%^2Fhr195rj9z642WZzUr^%^2FA^%^2FaIOtxHgWtk2yEzs1mVfxuehole2MCHrcGyh3f4ZOLRmry2HOtVLlvh7UoyZdmNziwH7GjOoRmxOw^%^2BlTypzMsHa34gSFh8pKWVDmwSqaxYrP8U6wxBCvc59N0tG4fy1CN16qHaYrZxA7wbSJKsPhm7WWTRoOJJaZiTO^%^2FYpOnibM6IVxBWJ38kOmT57UejGwp^%^2BN3^%^2FasZ9o4FAahyQ8jt9NiecQU7BQEdixc4TnIA1tDErCvVD3aKkr5tW96vktBLbnZIJdNA^%^3D^%^3D^&websig=8175194af598bc809dc6b72acc6de9fb" --compressed


{altKey
:,
false
bubbles
:
true,
button
:
0,
buttons
:
0,
cancelBubble
:
false,
cancelable
:
true,
clientX
:
113,
clientY
:
208,
composed
:
true,
ctrlKey
:
false,
currentTarget
:
null,
defaultPrevented
:
false,
detail
:
0,
eventPhase
:
0,
fromElement
:
null,
isTrusted
:
true,
layerX
:
103,
layerY
:
29,
metaKey
:
false,
movementX
:
6,
movementY
:
3,
offsetX
:
103,
offsetY
:
29,
pageX
:
113,
pageY
:
208,
path
:
Array,(12)
relatedTarget
:
null,
returnValue
:
true,
screenX
:
332,
screenY
:
678,
shiftKey
:
false,
sourceCapabilities
:
InputDeviceCapabilities,
srcElement
:
div,#slide_bar_head.bar_head
target
:
div,#slide_bar_head.bar_head
timeStamp
:
359597,.03
toElement
:
div,#slide_bar_head.bar_head
type
:
",mousemove"
view
:
Window,
which
:
0,
x
:
113,
y
:
208,
}