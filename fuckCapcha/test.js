setTimeout(function() {
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
    document.doOne = doOne;

}, 100);
document.xPos = -1;