alert('hello test.js');
console.log('------------------------------------');
console.log('test.js');
console.log('------------------------------------');

window.TCapMsg = function() {
    function t(t, n) {
        var e = "";
        if (arguments.length < 2 ? e = "target error - target and name are both required" : "object" != typeof t ? e = "target error - target itself must be window object" : "string" != typeof n && (e = "target error - target name must be string type"), e) throw new Error(e);
        this.target = t, this.name = n
    }

    function n(t, n) {
        this.targets = {}, this.name = t, this.listenFunc = [], e = n || e, "string" != typeof e && (e = e.toString()), this.initListen()
    }
    var e = "[CODE_VERIFY]",
        i = "postMessage" in window;
    return i ? t.prototype.send = function(t) {
        this.target.postMessage(t, "*")
    } : t.prototype.send = function(t) {
        var n = window.navigator[e + this.name];
        if ("function" != typeof n) throw new Error("target callback function is not defined");
        n(t, window)
    }, n.prototype.addTarget = function(n, e) {
        var i = new t(n, e);
        this.targets[e] = i
    }, n.prototype.initListen = function() {
        var t = this,
            n = function(n) {
                "object" == typeof n && n.data && (n = n.data);
                for (var e = 0; e < t.listenFunc.length; e++) t.listenFunc[e](n)
            };
        i ? "addEventListener" in document ? window.addEventListener("message", n, !1) : "attachEvent" in document && window.attachEvent("onmessage", n) : window.navigator[e + this.name] = n
    }, n.prototype.listen = function(t) {
        this.listenFunc.push(t)
    }, n.prototype.clear = function() {
        this.listenFunc = []
    }, n.prototype.send = function(t) {
        var n, e = this.targets;
        for (n in e) e.hasOwnProperty(n) && e[n].send(t)
    }, n
}();

! function(t) {
    function e(n) { if (o[n]) return o[n].exports; var r = o[n] = { exports: {}, id: n, loaded: !1 }; return t[n].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports }
    var o = {};
    return e.m = t, e.c = o, e.p = "", e(0)
}([function(t, e, o) {
    var n = o(1),
        r = o(2),
        a = o(7),
        i = o(20),
        s = o(10),
        c = o(5),
        f = "noborder",
        d = "",
        l = "embed",
        p = "";
    n(function() {
        var t = new r;
        t.init({ theme: d, color: p }), t.conform(l, 4, p, d), window.PIE && n(".bar_head_modal_img, .bar_bkg, #slide").each(function() { PIE.attach(this) }), "noborder" != f && t.addBorder(), i.init(t), a.init(), n("#title").html(c.c2), n("#change_pic").html(c.c5), n("#feedback").html(c.c4), n(".bar_success_icon").html(c.c3), n("#slide_bkg").html(c.puzzle1), setTimeout(function() { s.send() }, 1e3)
    })
}, function(t, e) { t.exports = jQuery }, function(t, e, o) {
    function n(t) { this.opts = r.extend(s, t || {}) }
    var r = o(1),
        a = o(3),
        i = o(4),
        s = { color: "#1a79ff", color_e: "#b3b3b3", c_gray_icon: "#b3b3b3", borderEle: r(".container_wrap"), fontEles: [r(".radio"), r(".tip")], bgEles: [r(".btn_primary")], theme: "" };
    n.prototype.init = function(t) { this.opts = r.extend(s, t || {}), "yellow" == this.opts.theme ? this.opts.color_e = "#bea272" : "" != this.opts.color && (this.opts.color_e = this.opts.color) }, n.prototype.addBorder = function() { this.opts.borderEle.addClass("cap_container") }, n.prototype.addBorderTop = function() { this.opts.borderEle.addClass("cap_container_top cap_container_shadow") }, n.prototype.dealEvents = function(t) {
        if ("yellow" == this.opts.theme) {
            var e = a.lighten(this.opts.color_e, 40);
            t.css("color", e)
        } else {
            var e = a.lighten(this.opts.c_gray_icon, 40);
            t.css("color", e)
        }
    }, n.prototype.unDealEvents = function(t) { "yellow" == this.opts.theme ? t.css("color", this.opts.color_e) : t.css("color", this.opts.c_gray_icon) }, n.prototype.setElements = function() { for (var t = this.opts.color, e = this.opts.fontEles, o = 0; o < e.length; o++) e[o].each(function() { r(this).css("color", t) }); for (var n = this.opts.bgEles, a = 0; a < n.length; a++) n[a].each(function() { r(this).css({ background: t, "border-color": t }) }) }, n.prototype.set = function(t, e) { t in this.opts && (this.opts[t] = e) }, n.prototype.conform = function(t, e, o, n) {
        if ("yellow" == n && this.opts.borderEle.css("1" == i.isIE() ? { border: "1px solid rgb(234,223,199)", background: "linear-gradient(180deg,#fff9ed,#fff4dd)", background: "-moz-linear-gradient(180deg, #fff9ed,#fff4dd)", background: "-o-linear-gradient(180deg,#fff9ed,#fff4dd)", background: "-webkit-linear-gradient(180deg,#fff9ed,#fff4dd)", background: "-ms-linear-gradient(180deg,#fff9ed,#fff4dd)", filter: "progid:DXImageTransform.Microsoft.Gradient(startColorStr='#fff9ed',endColorStr='#fff4dd',gradientType='0')" } : { border: "1px solid rgb(234,223,199)", background: "linear-gradient(180deg,#fff9ed,#fff4dd)", background: "-moz-linear-gradient(180deg, #fff9ed,#fff4dd)", background: "-o-linear-gradient(180deg,#fff9ed,#fff4dd)", background: "-webkit-linear-gradient(180deg,#fff9ed,#fff4dd)", filter: "progid:DXImageTransform.Microsoft.Gradient(startColorStr='#fff9ed',endColorStr='#fff4dd',gradientType='0')" }), "popup" == t) switch (e) {
            case 1:
                "yellow" == n && (r(".title_icon, .title, .icon_close, .aq_icon_refresh, .aq_icon_feedback, .tip, .aq_icon_shield").css({ color: "#bea272" }), r(".btn").css({ background: "#bea272", border: "none" }));
                break;
            case 2:
                "yellow" == n ? (r(".container_head").css({ "border-bottom": "none" }), r(".title_icon, .title, .icon_close, .aq_icon_refresh, .aq_icon_feedback, .tip, .aq_icon_shield").css({ color: "#bea272" }), r(".captcha_aq").css({ background: "linear-gradient(to bottom,#fff9ed,#fff4dd)" }), r(".btn").css({ background: "#bea272", border: "none" })) : r(".container_head").css({ "border-bottom": "1px solid #e5e5e5" });
                break;
            case 3:
                "yellow" == n ? (r(".container_head").css({ "border-bottom": "none" }), r(".title_icon, .title, .icon_close, .aq_icon_refresh, .aq_icon_feedback, .tip, .aq_icon_shield").css({ color: "#bea272" }), r(".captcha_aq").css({ background: "linear-gradient(to bottom,#fff9ed,#fff4dd)" }), r(".btn").css({ background: "#bea272", border: "none" })) : r(".popup_ct_wrap_head").css({ "border-bottom": "1px solid #e5e5e5" });
                break;
            case 4:
                if ("yellow" == n) r(".tip").css({ color: "#bea272" }), r(".bar_head").css({ border: "none", "box-shadow": "0 0 10px rgba(108,85,35,0.5)", background: "linear-gradient(to bottom,#ffffff,#eadab6)" }), r(".slide_bkg").css(1 == i.isLteIEVersion(9) ? { filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#7Fecddbb',endColorstr='#7Fecddbb')", color: "#bea272" } : { "border-top": "1px solid rgba(109,84,28,0.1)", background: "rgba(236,221,187,0.5)", filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#19ecddbb',endColorstr='#19ecddbb')", color: "#bea272" }), r(".title_icon, aq_icon_vryLogo, .title, .aq_icon_close, .aq_icon_va_loading").css({ color: "#bea272" });
                else if (null != o && "" != o) {
                    (o[0] = "#" && 7 == o.length) && (o = o.substr(1));
                    var a = parseInt(o.substr(0, 2), 16),
                        s = parseInt(o.substr(2, 2), 16),
                        c = parseInt(o.substr(4, 2), 16),
                        f = "1px solid rgba(" + a + "," + s + "," + c + ",0.2)",
                        d = "1px solid rgba(" + a + "," + s + "," + c + ",0.1)",
                        l = "rgba(" + a + "," + s + "," + c + ",0.1)",
                        p = "#19" + o;
                    1 == i.isLteIEVersion(9) ? (r(".bar_head").css({ background: "#fff", border: "1px solid #f5f5f6", "box-shadow": "0 0 10px #d4d4d4", left: "0px", top: "0px" }), r(".slide_bkg").css({ background: l, filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=" + p + ",endColorstr=" + p + ")" })) : (r(".bar_head").css({ background: "#fff", border: f, "box-shadow": "0 0 10px #d4d4d4", left: "0px", top: "0px" }), r(".slide_bkg").css({ background: l, filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=" + p + ",endColorstr=" + p + ")", "border-top": d }))
                }
        } else switch (e) {
            case 1:
                "yellow" == n && (r(".captcha_aq").css({ background: "linear-gradient(to bottom,#fffdf8,#fff9eb)" }), r(".aq_icon_refresh, .aq_icon_feedback, .tip, .aq_icon_shield").css({ color: "#bea272" }), r(".aq_icon_ok, .aq_icon_logo").css({ color: "#bea272" }), r(".btn").css({ background: "#bea272", border: "none" }));
                break;
            case 2:
                "yellow" == n && (r(".aq_icon_refresh, .aq_icon_feedback, .tip, .aq_icon_shield").css({ color: "#bea272" }), r(".aq_icon_vryLogo .title").css({ color: "#bea272" }), r(".captcha_aq").css({ background: "linear-gradient(to bottom,#fffdf8,#fff9eb)" }), r(".btn").css({ background: "#bea272", border: "none" }));
                break;
            case 3:
                "yellow" == n && (r(".aq_icon_refresh, .aq_icon_feedback, .tip, .aq_icon_shield").css({ color: "#bea272" }), r(".aq_icon_vryLogo .title").css({ color: "#bea272" }), r(".captcha_aq").css({ background: "linear-gradient(to bottom,#fffdf8,#fff9eb)" }), r(".btn").css({ background: "#bea272", border: "none" }));
                break;
            case 4:
                if ("yellow" == n) r(".tip").css({ color: "#bea272" }), r(".bar_head").css({ border: "none", "box-shadow": "0 0 10px rgba(108,85,35,0.5)", background: "linear-gradient(to bottom,#ffffff,#eadab6)" }), r(".aq_icon_va_loading").css({ color: "#bea272" }), r(".slide_bkg").css(1 == i.isLteIEVersion(9) ? { filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#7Fecddbb',endColorstr='#7Fecddbb')", color: "#bea272" } : { "border-top": "1px solid rgba(109,84,28,0.1)", background: "rgba(236,221,187,0.5)", filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#19ecddbb',endColorstr='#19ecddbb')", color: "#bea272" });
                else if (null != o && "" != o) {
                    (o[0] = "#" && 7 == o.length) && (o = o.substr(1));
                    var a = parseInt(o.substr(0, 2), 16),
                        s = parseInt(o.substr(2, 2), 16),
                        c = parseInt(o.substr(4, 2), 16),
                        f = "1px solid rgba(" + a + "," + s + "," + c + ",0.2)",
                        d = "1px solid rgba(" + a + "," + s + "," + c + ",0.1)",
                        l = "rgba(" + a + "," + s + "," + c + ",0.1)",
                        p = "#19" + o;
                    1 == i.isLteIEVersion(9) ? (r(".bar_head").css({ background: "#fff", border: "1px solid #f5f5f6", "box-shadow": "0 0 10px #d4d4d4", left: "0px", top: "0px" }), r(".slide_bkg").css({ background: l, filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=" + p + ",endColorstr=" + p + ")" })) : (r(".bar_head").css({ background: "#fff", border: f, "box-shadow": "0 0 10px #d4d4d4", left: "0px", top: "0px" }), r(".slide_bkg").css({ background: l, filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=" + p + ",endColorstr=" + p + ")", "border-top": d }))
                }
        }
    }, t.exports = n
}, function(t, e) {
    function o(t, e) {
        var o = !1;
        "#" == t[0] && (t = t.slice(1), o = !0);
        var n = parseInt(t, 16),
            r = (n >> 16) + e;
        r > 255 ? r = 255 : 0 > r && (r = 0);
        var a = (n >> 8 & 255) + e;
        a > 255 ? a = 255 : 0 > a && (a = 0);
        var i = (255 & n) + e;
        return i > 255 ? i = 255 : 0 > i && (i = 0), (o ? "#" : "") + (i | a << 8 | r << 16).toString(16)
    }

    function n(t, e) {
        var o = t.toLowerCase();
        if (o && r.test(o)) {
            if (4 === o.length) {
                for (var n = "#", a = 1; 4 > a; a += 1) n += o.slice(a, a + 1).concat(o.slice(a, a + 1));
                o = n
            }
            for (var i = [], a = 1; 7 > a; a += 2) i.push(parseInt("0x" + o.slice(a, a + 2)));
            return "RGBA(" + i.join(",") + "," + e + ")"
        }
        return o
    }
    var r = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
    t.exports = { lighten: o, rgba: n }
}, function(t, e) {
    function o() {
        var t = navigator.userAgent,
            e = t.indexOf("Opera") > -1,
            o = t.indexOf("compatible") > -1 && t.indexOf("MSIE") > -1 && !e;
        return o ? "1" : "-1"
    }

    function n(t) {
        var e = navigator.userAgent,
            o = e.indexOf("Opera") > -1,
            n = e.indexOf("compatible") > -1 && e.indexOf("MSIE") > -1 && !o;
        if (n) {
            var r = new RegExp("MSIE (\\d+\\.\\d+);");
            r.test(e);
            var a = parseFloat(RegExp.$1);
            return t > a ? !0 : !1
        }
        return !1
    }

    function r() {
        var t = navigator.userAgent,
            e = t.indexOf("Opera") > -1,
            o = t.indexOf("compatible") > -1 && t.indexOf("MSIE") > -1 && !e,
            n = t.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !o;
        if (o) {
            var r = new RegExp("MSIE (\\d+\\.\\d+);");
            r.test(t);
            var a = parseFloat(RegExp.$1);
            return 7 == a ? "IE7" : 8 == a ? "IE8" : 9 == a ? "IE9" : 10 == a ? "IE10" : 11 == a ? "IE11" : "0"
        }
        return n ? "Edge" : "-1"
    }
    t.exports = { isLteIEVersion: n, isIE: o, getIEVersion: r }
}, function(t, e) { t.exports = captcha }, , function(t, e, o) {
    var n = o(1),
        r = {
            _check: function() { return "maxLength" in document.createElement("textarea") },
            init: function() { this._check() || this.fix() },
            fix: function() {
                n("textarea[maxlength]").each(function(t, e) {
                    var o = n(this),
                        r = parseInt(o.attr("maxlength"), 10);
                    r > 0 && o.keyup(function() {
                        var t = o.val();
                        t.length > r && (t = t.substring(0, r)), o.val(t)
                    })
                })
            }
        };
    t.exports = r
}, , , function(t, e) {
    var o = !!window.ActiveXObject,
        n = {
            timePoints: [],
            flag1: 21406,
            flag2: 1,
            flag3: 1,
            push: function(t, e) { this.timePoints[t] = e },
            set: function(t, e, o) { this.flag1 = t, this.flag2 = e, this.flag3 = o },
            send: function(t) {
                var e = [];
                if (t) e.push(t + "=" + this.timePoints[t]);
                else {
                    if (!o && window.performance && window.performance.timing) {
                        var n = window.performance.timing;
                        this.timePoints[20] = n.loadEventEnd - n.navigationStart, this.timePoints[21] = n.domComplete - n.responseEnd, this.timePoints[22] = n.domainLookupEnd - n.domainLookupStart, this.timePoints[23] = n.responseStart - n.navigationStart, this.timePoints[24] = n.connectEnd - n.connectStart
                    }
                    for (var r = 0; 33 > r; r++) "undefined" != typeof this.timePoints[r] && e.push(r + "=" + this.timePoints[r])
                }
                var a, i = "flag1=" + this.flag1 + "&flag2=" + this.flag2 + "&flag3=" + this.flag3 + "&" + e.join("&");
                a = -1 == window.location.href.indexOf("https") ? "http://report.huatuo.qq.com/report.cgi?appid=20128&platform=pc&speedparams=" + escape(i) : "https://report.huatuo.qq.com/report.cgi?appid=20128&platform=pc&speedparams=" + escape(i), imgSendTimePoint = new Image, imgSendTimePoint.src = a
            }
        };
    t.exports = n
}, function(t, e) {
    var o = function(t) {
        var e = {
            id: "",
            time: t,
            start: function(t) {
                this.end();
                var e = this.time,
                    o = this;
                this.id = setTimeout(function() { t(o) }, e)
            },
            end: function() { clearTimeout(this.id) }
        };
        return e
    };
    t.exports = o
}, function(t, e) {
    function o(t) { "undefined" != typeof TDC && TDC.setData && TDC.setData(t) }

    function n() { "undefined" != typeof TDC && TDC.clearTc && TDC.clearTc() }

    function r() { var t = ""; return "undefined" != typeof TDC && TDC.getData && (t = TDC.getData(!0)), t }
    t.exports = { setData: o, getData: r, clearData: n }
}, function(t, e, o) {
    var n = o(1),
        r = { header: n(".container_head"), hideTitle: function() { this.header.find(".title").hide() }, showTitle: function() { this.header.find(".title").show() }, setTitle: function(t) { this.header.find(".title").html(t) }, show: function(t) { this.header.show() }, init: function(t) { this.header.find(".icon_close").on("mouseenter mouseleave click", function(e) { var o = n(this); "mouseenter" == e.type && t.theme && t.theme.dealEvents(o), "mouseleave" == e.type && t.theme && t.theme.unDealEvents(o), "click" == e.type && t.close && t.close() }) } };
    t.exports = r
}, , , , , function(t, e, o) {
    var n = o(1),
        r = function() {
            function t() { n(document).on("mousemove touchmove", s), n(document).on("mouseup touchend", i) }

            function e() { n(document).off("mousemove touchmove"), n(document).off("mouseup touchend") }

            function o(t) { return t.originalEvent.touches[0] }

            function r() { w = !1 }

            function a(e) { w && (b = !0, ele_l = f.offset().left, ele_t = f.offset().top, l = e.pageX - ele_l, p = e.pageY - ele_t, "touchstart" == e.type && (l = o(e).clientX - ele_l, p = o(e).clientY - ele_t), t(), x.start()) }

            function i(t) { b = !1, e(), x.stop(g) }

            function s(t) {
                var e = t.pageX,
                    n = t.pageY,
                    r = {},
                    a = t.pageX - l - u,
                    s = t.pageY - p - h;
                "touchmove" == t.type && (e = o(t).clientX, n = o(t).clientY, a = o(t).clientX - l - u, s = o(t).clientY - p - h);
                var c = $container.width() - f.width(),
                    d = $container.height() - f.height();
                return _ && v && (0 > a || 0 > s || a > c || s > d) ? void i(t) : (0 > a && (a = 0), a > c && (a = c), 0 > s && (s = 0), s > d && (s = d), g.left = a, g.top = s, r.left = e, r.top = n, x.draging(g, r), f.css(g), t.stopPropagation(), !1)
            }

            function c() { f.css(d) }
            var f, d = {},
                l = 0,
                p = 0,
                u = 0,
                h = 0,
                g = {},
                b = !1,
                m = !!window.ActiveXObject,
                _ = m && (8 == document.documentMode || 7 == document.documentMode),
                v = !1,
                w = !0,
                x = { stop: function() {}, start: function() {}, draging: function() {} },
                y = function(t) { x = n.extend(x, t || {}), f = x.ele, $container = x.container, u = $container.offset().left, h = $container.offset().top, v = x.bubble || !1, d.left = f.css("left"), d.top = f.css("top"), f.on("mousedown touchstart", a), f[0].dispatchEvent = null },
                k = { init: y, goBack: c, stop: i, cancel: r, hasMouseDown: function() { return b } };
            return k
        };
    t.exports = r
}, function(t, e) {
    function o() { f = c = +new Date }

    function n(t, e) {
        var o = +new Date;
        s.length < i && s.push({ x: Math.floor(t), y: Math.floor(e), t: o - c })
    }

    function r() { s.length = 0 }

    function a(t) {
        for (var e, o = [], n = 0; n < t.length; n++) {
            var r = t[n];
            o.push(0 == n ? [r.x, r.y, r.t] : [r.x - e.x, r.y - e.y, Number((r.t - e.t).toFixed(3))]), e = r
        }
        return o
    }
    var i = 300,
        s = [],
        c = +new Date,
        f = +new Date;
    t.exports = { start: o, end: r, push: n, getData: function() { return a(s) } }
}, function(t, e, o) {
    function n(t) {
        i.addTarget(window.parent, "parent"), r.init({
            theme: t,
            success: function(t) {
                try {
                    var e = { message: { type: 3, ticket: t.ticket, randstr: t.randstr } };
                    i.targets.parent.send(JSON.stringify(e))
                } catch (o) {}
            }
        }), a.init({
            theme: t,
            close: function() {
                try {
                    var t = { message: { type: 6 } };
                    i.targets.parent.send(JSON.stringify(t))
                } catch (e) {}
            }
        }), "popup" == s && (t.addBorderTop(), a.show());
        var e = document.createElement("script");
        e.type = "text/javascript", "inner" == c ? e.src = "//tajs.qq.com/stats?sId=55818628" : e.src = "//tajs.qq.com/stats?sId=57126461", document.getElementsByTagName("head").item(0).appendChild(e)
    }
    var r = (o(1), o(11), o(21)),
        a = o(13),
        i = new TCapMsg("securityCode"),
        s = "embed",
        c = "open";
    t.exports = { init: n }
}, function(t, e, o) {
    function n(t) { "popup" == L ? I(".container_wrap").css("height", "268px") : "point" == L && I(".container_wrap").css("height", "228px"), A.success = t.success, r(), f(t.theme), p(S, B || 0), _() }

    function r() {
        if (0 == s("fb")) {
            I(".help.captcha_icon").hide();
            var t = I(".refresh.captcha_icon");
            t.css({ "margin-right": "10px" });
            var e = t.find(".tip");
            e.css({ "background-position": "-334px -5px", right: "-8px" }), O && (e[0].style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="/cap_bubble_right_feedback.png",sizingMethod="crop")')
        }
    }

    function a(t, e, o) {
        var n = new Image;
        n.onload = function() { e(n) }, n.onerror = o || function() {}, n.src = t
    }

    function i() {
        var t = location.search.substr(1),
            e = new Object;
        if (t.length > 0)
            for (var o = t.split("&"), n = 0; n < o.length; n++) {
                var r = o[n].split("=");
                e[r[0]] = r[1]
            }
        return e
    }

    function s(t) { return i(location.search)[t] }

    function c(t, e) { e.src = "/cap_transparent.gif", e.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + t + "', sizingMethod='scale')" }

    function f(t) {
        function e() { n.animate({ left: "0px" }, { step: function(t, e) { r.css("left", t), 0 == t && (r.css("visibility", "hidden"), i.css("visibility", "hidden"), a.show(), I(".slide_bkg").html(captcha.puzzle1).css({ color: k })) } }) }
        var o = new M,
            n = I("#slide_bar_head"),
            r = (n.width(), I("#slideBlock")),
            a = I("#totalBlock"),
            i = I(".oripic"),
            s = I("#tip_point"),
            c = [a.offset().left, a.offset().top, X];
        q.setData({ coordinate: c, clientType: z }), o.init({
            ele: n,
            container: I("#slide"),
            draging: function(t, e) { T.push(e.left, e.top), r.css("left", t.left) },
            stop: function(t) {
                var o = [{ left: Math.floor(t.left / X), top: Math.floor(B) }],
                    n = T.getData();
                q.setData({ slideValue: n }), v(o, function() { e(), T.end() })
            },
            start: function() { T.start(), a.hide(), s.hide(), r.css("visibility", "visible"), i.css("visibility", "visible") }
        }), I("#reload").on("click", function() { d(), P++, q.clearData(), I(".slide_bkg").html(captcha.puzzle1).css({ color: k }) }), I(document).on("mouseleave", function() { o.hasMouseDown() && o.stop() }), I(".captcha_icon").on("mouseenter mouseleave mousedown", function(t) {
            var e = I(this).find(".tip"),
                o = I(this).find("a");
            "mouseenter" == t.type && (o.css("color", "#b3b3b3"), e.show()), ("mouseleave" == t.type || "mousedown" == t.type) && (o.css("color", "#fff"), e.hide())
        })
    }

    function d() {
        var t;
        t = "" != location.search ? location.search + "&rand=" + Math.random() : "?rand=" + Math.random();
        var e = Date.parse(new Date);
        I.ajax({
            type: "GET",
            url: "/cap_union_new_getsig" + t,
            dataType: "json",
            success: function(t) {
                var o = Date.parse(new Date);
                E.push(26, Math.floor(o - e)), E.send(), j = t && t.chlg ? JSON.stringify(t.chlg) : "", t && t.vsig && (S = t.vsig, p(t.vsig, parseInt(t.inity, 10)))
            }
        })
    }

    function l(t, e, o, n, r) {
        var a = Number(new Date) + (n || 2e3);
        r = r || 100,
            function i() { t() ? e() : Number(new Date) < a ? setTimeout(i, r) : o(new Error("timed out for " + t + ": " + arguments)) }()
    }

    function p(t, e) {
        var o;
        o = "" != location.search ? location.search + "&rand=" + Math.random() : "?rand=" + Math.random();
        var n = Date.parse(new Date),
            r = "/cap_union_new_getcapbysig" + o + "&vsig=" + t + "&img_index=1";
        a(r, function() {
            var t = Date.parse(new Date);
            E.push(25, Math.floor(t - n)), I(".img.big").attr("src", r)
        }, function() { I("#capInfo").html(captcha.c7), I(".img.big").attr("src", "/tx_m_fail.jpg") });
        var i = "/cap_union_new_getcapbysig" + o + "&vsig=" + t + "&img_index=2";
        a(i, function(t) {
            var o = Date.parse(new Date);
            E.push(28, Math.floor(o - n)), I("#slideBlock").attr("src", i), l(function() { return t.height > 10 }, function() {
                var o = Math.floor(t.height * X);
                I("#slideBlock").css({ height: o, width: o, top: e * X }), B = e
            }, function() {}, 5e3, 200), O && c(i, I("#slideBlock")[0])
        }, function() { I("#capInfo").html(captcha.c7), I("#slideBlock").attr("src", "/tx_m_fail_x.jpg"), I("#slideBlock").css({ height: 54, width: 54, top: e * X }) });
        var s = "/cap_union_new_getcapbysig" + o + "&vsig=" + t + "&img_index=0";
        a(s, function() { I("#totalBlock").attr("src", s), I(".img.big").css("_filter", 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + s + '" ,sizingMethod="crop")') }, function() {})
    }

    function u(t) { return "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t) }

    function h(t) { return "string" == typeof t && -1 != t.indexOf("%") }

    function g(t, e) { u(t) && (t = "100%"); var o = h(t); return t = V(e, R(0, parseFloat(t))), o && (t = parseInt(t * e, 10) / 100), Math.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e) }

    function b(t, e, o) {
        t = g(t, 255), e = g(e, 255), o = g(o, 255);
        var n, r, a = R(t, e, o),
            i = V(t, e, o),
            s = a,
            c = a - i;
        if (r = 0 === a ? 0 : c / a, a == i) n = 0;
        else {
            switch (a) {
                case t:
                    n = (e - o) / c + (o > e ? 6 : 0);
                    break;
                case e:
                    n = (o - t) / c + 2;
                    break;
                case o:
                    n = (t - e) / c + 4
            }
            n /= 6
        }
        return { h: 360 * n, s: 100 * r, v: 100 * s }
    }

    function m(t, e, o) {
        t = 6 * g(t, 360), e = g(e, 100), o = g(o, 100);
        var n = Math.floor(t),
            r = t - n,
            a = o * (1 - e),
            i = o * (1 - r * e),
            s = o * (1 - (1 - r) * e),
            c = n % 6,
            f = [o, i, a, a, s, o][c],
            d = [s, o, o, i, a, a][c],
            l = [a, a, s, o, o, i][c];
        return { r: 255 * f, g: 255 * d, b: 255 * l }
    }

    function _() {
        var t = "",
            e = "";
        if ("yellow" == e ? (k = "#bea272", D = "#bea272") : null != t && "" != t ? ((t[0] = "#" && 7 == t.length) && (t = t.substr(1)), k = t) : k = "1a79ff", "yellow" != e) {
            var o = parseInt(k.substr(0, 2), 16),
                n = parseInt(k.substr(2, 2), 16),
                r = parseInt(k.substr(4, 2), 16),
                a = b(o, n, r),
                i = m(a.h, a.s, .48 * a.v);
            D = "rgb(" + parseInt(i.r) + "," + parseInt(i.g) + "," + parseInt(i.b) + ")", k = "#" + k
        }
    }

    function v(t, e) {
        for (var o = "", n = 0; n < t.length; n++) o += Math.floor(t[n].left) + "," + Math.floor(t[n].top) + ";";
        var r;
        r = "" != location.search ? location.search + "&rand=" + Math.random() : "?rand=" + Math.random(), q.setData({ trycnt: ++F, refreshcnt: P });
        var a = q.getData(!0),
            s = Date.parse(new Date),
            c = 0;
        if ("string" == typeof j && "" != j) {
            j = j.replace(/&quot;/g, '"'), j = j.replace(/&apos;/g, "'");
            var f;
            try { f = JSON.parse(j) } catch (l) {}
            if ("object" == typeof f && "string" == typeof f.randstr && ("string" == typeof f.M || "number" == typeof f.M) && "string" == typeof f.ans) {
                f.ans = f.ans.toLowerCase(), f.M = parseInt(f.M);
                for (var p = 0; p < f.M && 1e3 > p; p++) {
                    var u = f.randstr + p,
                        h = md5(u);
                    if (f.ans == h.toLowerCase()) { c = p; break }
                }
            }
        }
        var g = i() || {},
            b = I.extend(g, { subcapclass: "9", vsig: S, ans: o, cdata: c, "accacg": a, websig: "719fa1fb3d3595e4003db5680546594c" }); //ans 坐标位置
        $ = !0;
        var m = I(".slide_bkg"),
            _ = I.ajax({
                type: "POST",
                url: "/cap_union_new_verify?random=" + +new Date,
                timeout: 5e3,
                data: b,
                dataType: "json",
                cache: !1,
                success: function(t) {
                    $ = !1;
                    var o = Date.parse(new Date);
                    E.push(27, Math.floor(o - s)), E.send(), t && 0 == t.errorCode ? y(t) : (9 == t.errorCode ? (m.css({ color: D }), m.html(captcha.slide2), d()) : 50 == t.errorCode ? (m.css({ color: D }), m.html(captcha.puzzle2)) : (d(), m.css({ color: k }), m.html(captcha.puzzle1)), e())
                },
                complete: function(t, o) { $ = !1, "timeout" == o && (_.abort(), d(), m.css({ color: D }), m.html(captcha.c8), e()), "abort" == o && (_.abort(), d(), m.css({ color: D }), m.html(captcha.slide4), e()) }
            })
    }

    function w() { I(".capachArea").show(), I("#showFB, .tip").css("zoom", 1) }

    function x() { I(".capachArea").hide(), I("#showFB, .tip").css("zoom", 0) }

    function y(t) { I(".big.img, #slideBlock, #tip_point, .operates").hide(), I("#totalBlock").show(), I("#bar_mask").show().animate({ left: "-100%" }, { duration: 1e3, complete: function() { I("#bar_success").slideDown(function() { I(".captcha_aq_modal").show(), setTimeout(function() { A.success(t) }, 200) }) } }) }
    var k, D, I = o(1),
        M = o(18),
        E = o(10),
        T = o(19),
        q = o(12),
        C = !!window.ActiveXObject,
        O = C && !window.XMLHttpRequest,
        $ = !1,
        X = .5,
        S = "b01pW4DqEtyw1eG5U2e1O8zs8KIf-Fb4D6tmcpPCC7C5KryeFn1Xazh39lCGd_xEPGipo29IWqivc1bXF8xGyXGBU1qqRzTFh_WhCp-JBuhW2hLUhSxnspsrw**",
        B = Number("10"),
        L = "embed",
        j = "",
        z = "2",
        P = 0,
        F = 0,
        A = { success: function() {}, showFeedback: function() {} },
        N = "open";
    "inner" == N ? -1 == window.location.href.indexOf("https") ? E.set(21406, 1, 4) : E.set(21408, 1, 4) : -1 == window.location.href.indexOf("https") ? E.set(21407, 1, 4) : E.set(21412, 1, 4);
    var V = (Math.round, Math.min),
        R = Math.max;
    Math.random;
    t.exports = { init: n, show: w, hide: x, getVsig: function() { return S } }
}]);