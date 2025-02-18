/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /gh/RyanL-29/aniopen@2.0.3/app.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
const version = "2.0.3";
function init() {
    document.siteName = $("title").html(),
    $("body").addClass("mdui-theme-primary-blue-grey mdui-theme-accent-blue mdui-color-grey-800");
    $("body").html('\n    <style>\n    /* Tooltip text */\n    .tool_tip {\n        visibility: hidden;\n        position: absolute;\n        width: auto;\n        height: auto;\n        background-color: #555;\n        color: #fff;\n        text-align: center;\n        padding: 3px 5px 3px 5px;\n        border-radius: 4px;\n        z-index: 1;\n        opacity: 0;\n        transition: opacity .3s;\n        font-size:0.8em;\n        line-height: 1pc;\n    }\n    .tool_tip {\n        top: 80%;\n        left: 0%;\n    }\n    /* Show the tooltip text when you mouse over the tooltip container */\n    .mdui-list-item:hover .tool_tip {\n    visibility: visible;\n    opacity: 1;\n    }\n\n    .mdui-list-item{\n        overflow:visible;\n    }\n    /* Subtitle */\n    .dplayer-subtitle {\n        display: inline-block;\n        white-space: pre-wrap;\n        color: #fff!important;\n        font-weight: bold!important;\n        text-shadow: -1px 1px 2px #000,1px 1px 2px #000,1px -1px 0 #000,-1px -1px 0 #000!important;\n    }\n    .dplayer-video-wrap {\n        font-size: 150%;\n    }\n    @media only screen and (max-device-width: 1020px) {\n        .dplayer-subtitle{\n            font-size: 4vw!important\n        }\n    }\n    \n    @media only screen and (max-device-width: 800px) {\n        .dplayer-subtitle{\n            font-size: 5vw!important\n        }\n    }\n\n    html {\n        background-color: #424242!important;\n    }\n\n    /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 5px;\n    background: transparent;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n    background: transparent;\n    border-radius: 10px;\n    }\n    \n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n    background: grey; \n    border-radius: 10px;\n    }\n\n    /* Handle on hover */\n    ::-webkit-scrollbar-thumb:hover {\n    background: #FBFBFB; \n    }\n\n    ::-webkit-scrollbar-track-piece:start {\n        background: transparent;\n        margin-top: 56px;\n    }\n\n    // .scrollbar-track {\n    //     background: transparent;\n    //     width: 5px;\n    //     border-radius: 10px;\n    //     margin-top: 56px;\n    // }\n\n    // .scrollbar-thumb {\n    //     background: grey;\n    //     border-radius: 10px;\n    // }\n\n\n    </style>\n<header class="mdui-appbar mdui-color-grey-900 mdui-theme-layout-dark"> \n   <div id="nav" class="mdui-toolbar mdui-container">\n   \n   </div>\n</header>\n<div id="content" class="mdui-container"> \n</div>\n  <footer>\n    <p style="line-height: 0;">Project ANi</p>\n    <div style="line-height: 0;">\n    <p class="footer-ele"><a onclick="topFunction(); contactus();">聯絡我們</a></p><ins></ins>\n    <p class="footer-ele"><a onclick="topFunction(); dmca();">DMCA</a></p>\n    </div>\n    <p class="footer-ele2">本網站只用作交流學習以及試看</p>\n    <p class="footer-ele2">如發現網站有任何非法資源 請立即聯絡我們移除</p>\n    </footer>')
}
function render(M) {
    M.indexOf("?") > 0 && (M = M.substr(0, M.indexOf("?"))),
    nav(M),
    "/" == M.substr(-1) ? list(M) : file(M)
}
document.write('<link rel="icon" type="image/x-icon" href="https://pro.0m.ee/cdn.jsdelivr.net/gh/RyanL-29/aniopen/favicon.ico">'),
document.write('<link rel="stylesheet" href="https://pro.0m.ee/unpkg.com/mdui@1.0.2/dist/css/mdui.min.css" />'),
document.write('<script src="https://pro.0m.ee/unpkg.com/mdui@1.0.2/dist/js/mdui.min.js"><\/script>'),
document.write('<link rel="stylesheet" href="https://pro.0m.ee/cdn.jsdelivr.net/npm/ionicons@2.0.1/css/ionicons.min.css">'),
document.write('<link rel="manifest" href="https://pro.0m.ee/cdn.jsdelivr.net/gh/RyanL-29/aniopen@2.0.3/manifest.json">'),
document.write('<link rel="apple-touch-icon" href="https://pro.0m.ee/cdn.jsdelivr.net/gh/RyanL-29/aniopen/pwa_icon/192x192nt.png">'),
document.write('<script src="https://pro.0m.ee/cdn.jsdelivr.net/npm/markdown-it@10.0.0/dist/markdown-it.min.js"><\/script>'),
document.write('<script src="https://pro.0m.ee/cdn.jsdelivr.net/gh/RyanL-29/aniopen@2.0.3/DPlayer.min.js"><\/script>'),
document.write("<style>.mdui-appbar .mdui-toolbar{height:56px;font-size:1pc}.mdui-toolbar>*{padding:0 6px;margin:0 2px}.mdui-toolbar>i{opacity:.5}.mdui-toolbar>.mdui-typo-headline{padding:0 1pc 0 0}.mdui-toolbar>i{padding:0}.mdui-toolbar>a:hover,a.active,a.mdui-typo-headline{opacity:1}.mdui-container{max-width:980px}.mdui-list-item{transition:none}.mdui-list>.th{background-color:initial}.mdui-list-item>a{width:100%;line-height:3pc}.mdui-list-item{margin:2px 0;padding:0}.mdui-toolbar>a:last-child{opacity:1}@media screen and (max-width:980px){.mdui-list-item .mdui-text-right{display:none}.mdui-container{width:100%!important;margin:0}.mdui-toolbar>.mdui-typo-headline,.mdui-toolbar>a:last-child,.mdui-toolbar>i:first-child{display:block}}</style>"),
document.write('<script src="https://pro.0m.ee/cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js"><\/script>');
var timeout2 = null;
function timeout() {
    document.getElementById("list").innerHTML = '<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>';
    timeout2 && clearTimeout(timeout2),
    timeout2 = setTimeout((function() {
        globalsearch()
    }
    ), 1500)
}
function topFunction() {
    document.body.scrollTop = 0,
    document.documentElement.scrollTop = 0
}
function globalsearch() {
    var M, t = window.location.pathname;
    M = document.getElementById("searchinput").value,
    $.post(t, '{"inputvalue":"' + M + '"}', (function(M, i) {
        var e = jQuery.parseJSON(M);
        if ("null" != typeof e && e.hasOwnProperty("error") && "401" == e.error.code) {
            var n = prompt("Require a private token", "");
            localStorage.setItem("password" + t, n),
            null != n && "" != n ? list(t) : history.go(-1)
        } else
            "null" != typeof e && list_files(e.foldername, e.files)
    }
    ))
}
function dmca() {
    nav("/DMCA"),
    window.history.pushState("DMCA", "Open ANi", "/DMCA");
    $("#content").html('\n    <h1>網站聲明</h1>\n    <p>本網站是以轉載資源的方式運作，對所有資源的真實性、完整性及立場等，不負任何法律責任。本網站亦不承擔使用者將本網站資源用於盈利和/或非法目的之任何後果和/或法律責任。\n    本網站資源皆從網上搜集轉載，不承擔任何技術及版權問題。\n    下載鏈接僅供寬帶測試研究用途,請下載後在24小時內刪除,請勿用於商業目的。</p>\n    <hr/>\n    <h1>DMCA policy</h1>\n    <p>This Digital Millennium Copyright Act policy (&quot;Policy&quot;) applies to the <a target="_blank" rel="nofollow" href="https://open.ani.rip">open.ani.rip</a> website (&quot;Website&quot;), &quot;Open ANi&quot; mobile application (&quot;Mobile Application&quot;) and any of their related products and services (collectively, &quot;Services&quot;) and outlines how this Website operator and Mobile Application developer (&quot;Operator&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) addresses copyright infringement notifications and how you (&quot;you&quot; or &quot;your&quot;) may submit a copyright infringement complaint.</p>\n    <p>Protection of intellectual property is of utmost importance to us and we ask our users and their authorized agents to do the same. It is our policy to expeditiously respond to clear notifications of alleged copyright infringement that comply with the United States Digital Millennium Copyright Act (&quot;DMCA&quot;) of 1998, the text of which can be found at the U.S. Copyright Office <a target="_blank" href="https://www.copyright.gov" rel="noopener">website</a>.</p>\n    <h2>What to consider before submitting a copyright complaint</h2>\n    <p>Before submitting a copyright complaint to us, consider whether the use could be considered fair use. Fair use states that brief excerpts of copyrighted material may, under certain circumstances, be quoted verbatim for purposes such as criticism, news reporting, teaching, and research, without the need for permission from or payment to the copyright holder. If you have considered fair use, and you still wish to continue with a copyright complaint, you may want to first reach out to the user in question to see if you can resolve the matter directly with the user.</p>\n    <p>Please note that if you are unsure whether the material you are reporting is in fact infringing, you may wish to contact an attorney before filing a notification with us.</p>\n    <p>The DMCA requires you to provide your personal information in the copyright infringement notification. If you are concerned about the privacy of your personal information, you may wish to <a target="_blank" href="https://www.copyrighted.com/professional-takedowns" rel="noopener">hire an agent</a> to report infringing material for you.</p>\n    <h2>Notifications of infringement</h2>\n    <p>Filing a DMCA complaint is the start of a pre-defined legal process. Your complaint will be reviewed for accuracy, validity, and completeness. Our response may include the removal or restriction of access to allegedly infringing material as well as a permanent termination of repeat infringers’ accounts.</p>\n    <p>If we remove or restrict access to materials or terminate an account in response to a Notification of alleged infringement, we will make a good faith effort to contact the affected user with information concerning the removal or restriction of access.</p>\n    <h2>Changes and amendments</h2>\n    <p>We reserve the right to modify this Policy or its terms relating to the Services at any time, effective upon posting of an updated version of this Policy on the Services. When we do, we will revise the updated date at the bottom of this page.</p>\n    <h2>Reporting copyright infringement</h2>\n    <p>If you would like to notify us of the infringing material or activity, you may send an email to su&#112;port&#64;ani&#46;&#114;&#105;p.</p>\n    <p>This document was last updated on May 23, 2021</p>\n\t')
}
function contactus() {
    window.history.pushState("Contact Us", "Open ANi", "/ContactUs"),
    nav("/ContactUs");
    $("#content").html('\n    <h1>聯絡我們</h1>\n    <p>Email: <a style="color:#E48E00;" href = "mailto: support@ani.rip?subject = Feedback">support@ani.rip</a></p>\n    <p>Discord: <a style="color:#E48E00;" href = "https://ani.rip/discord">https://ani.rip/discord</a></p>\n\t')
}
function nav(M) {
    var t = "";
    t += '<div style="max-width:150px;"><img class="mdui-typo-headline mdui-img-fluid folder" href="/"  style = "max-width: 100%;height: auto;width: auto;"src="https://pro.v300.eu.org/cdn.jsdelivr.net/gh/RyanL-29/aniopen/aniopen.png"></div>';
    var e = M.trim("/").split("/");
    let n = "/";
    if (e.length > 0) {
        for (i in e) {
            var o = e[i];
            if (n += "DMCA" == o || "ContactUs" == o ? "" : (o = decodeURIComponent(o)) + "/",
            "" == o)
                break;
            t += `<style>@media only screen and (max-width: 615px){.pathlist{display:none;}}</style><i class="mdui-icon material-icons mdui-icon-dark folder pathlist" style="margin:0;">chevron_right</i><a class="folder pathlist">${o}</a>`
        }
        window.location.href.includes("?a=view") || "/DMCA" == M || "/ContactUs" == M ? t += '<div class="mdui-toolbar-spacer"></div>' : screen.width >= 570 ? t += '<div class="mdui-toolbar-spacer"></div><div class="mdui-textfield"><i style="bottom: 0px;" class="mdui-icon material-icons">search</i><input style="color:white; cursor:text;" id="searchinput" class="mdui-textfield-input" onkeyup="timeout()" type="search" placeholder="搜尋"/></div>' : t += '<div class="mdui-toolbar-spacer"></div>',
        t += '<a href="https://t.me/channel_ani" target="_blank" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white" mdui-tooltip="{content: \'Telegram\'}">\n                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="100%" height="100%" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" fill="white"/></svg>\n                    </svg>\n                </a>\n                <a href="https://ko-fi.com/anidonate" target="_blank" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white" mdui-tooltip="{content: \'Donate\'}">\n                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="90%" preserveAspectRatio="xMidYMid meet"\n                viewBox="0 0 503.467 503.467" style="enable-background:new 0 0 503.467 503.467;" xml:space="preserve">\n                    <g transform="translate(1 1)">\n                        <path style="fill:#AAB1BA;" d="M3.33,498.2V276.333h51.2c9.387,0,17.067,7.68,17.067,17.067v17.067v119.467v51.2\n                            c0,9.387-7.68,17.067-17.067,17.067H3.33z"/>\n                        <path style="fill:#FF7474;" d="M332.716,31.427c15.36-17.067,38.4-28.16,63.147-28.16c46.933,0,85.333,38.4,85.333,85.333\n                            c0,51.2-51.2,136.533-145.067,187.733C242.263,225.133,191.063,139.8,191.063,88.6c0-46.933,38.4-85.333,85.333-85.333\n                            c11.947,0,23.893,2.56,34.133,6.827c0,0,15.36,8.533,21.333,19.627L332.716,31.427z"/>\n                        <path style="fill:#FFD0A1;" d="M354.05,399.213c2.56-0.853,5.12-1.707,7.68-3.413l98.133-47.787\n                            c11.947-6.827,28.16-2.56,34.987,9.387c6.827,11.947,2.56,28.16-9.387,34.987l-115.2,71.68c0,0-25.6,17.067-85.333,17.067\n                            c-51.2,0-128-42.667-128-42.667s-17.067-8.533-51.2-8.533H71.596V310.467h102.4c25.6,0,68.267,51.2,93.867,51.2h51.2\n                            c17.067,0,25.6,8.533,25.6,8.533s8.533,8.533,8.533,25.6L354.05,399.213z"/>\n                    </g>\n                    <path style="fill:#51565F;" d="M55.53,503.467H4.33c-2.56,0-4.267-1.707-4.267-4.267c0-2.56,1.707-4.267,4.267-4.267h51.2\n                        c6.827,0,12.8-5.973,12.8-12.8V294.4c0-6.827-5.973-12.8-12.8-12.8H4.33c-2.56,0-4.267-1.707-4.267-4.267s1.707-4.267,4.267-4.267\n                        h51.2c11.947,0,21.333,9.387,21.333,21.333v187.733C76.863,494.08,67.476,503.467,55.53,503.467z M285.93,486.4\n                        c-52.053,0-127.147-41.813-129.707-43.52l0,0c0,0-17.067-7.68-49.493-7.68c-2.56,0-4.267-1.707-4.267-4.267\n                        c0-2.56,1.707-4.267,4.267-4.267c34.987,0,52.053,8.533,52.907,9.387c0.853,0.853,76.8,41.813,126.293,41.813\n                        c57.173,0,82.773-16.213,82.773-16.213l115.2-71.68c10.24-5.973,13.653-18.773,7.68-29.013c-5.973-10.24-18.773-13.653-29.013-7.68\n                        l-98.133,47.787c-17.92,9.387-34.987,9.387-69.973,9.387c-34.133,0-83.627-8.533-86.187-8.533s-4.267-2.56-3.413-5.12\n                        c0-2.56,2.56-4.267,5.12-3.413c0.853,0,51.2,8.533,84.48,8.533s50.347,0,66.56-7.68l98.133-47.787\n                        c13.653-7.68,32.427-3.413,40.107,11.093c8.533,14.507,3.413,32.427-11.093,40.96l-115.2,71.68\n                        C372.116,469.333,346.516,486.4,285.93,486.4z M25.663,460.8c-5.12,0-8.533-3.413-8.533-8.533s3.413-8.533,8.533-8.533\n                        s8.533,3.413,8.533,8.533S30.783,460.8,25.663,460.8z M345.663,375.467c-0.853,0-2.56,0-3.413-0.853l0,0c0,0-7.68-7.68-22.187-7.68\n                        h-51.2c-14.507,0-31.573-12.8-49.493-26.453c-16.213-11.947-33.28-24.747-44.373-24.747H106.73c-2.56,0-4.267-1.707-4.267-4.267\n                        c0-2.56,1.707-4.267,4.267-4.267h68.267c14.507,0,31.573,12.8,49.493,26.453c16.213,11.947,33.28,24.747,44.373,24.747h51.2\n                        c18.773,0,28.16,9.387,29.013,9.387c1.707,1.707,1.707,4.267,0,5.973C348.223,375.467,346.516,375.467,345.663,375.467z\n                            M337.13,281.6c-0.853,0-1.707,0-1.707-0.853C243.263,230.4,187.796,144.213,187.796,89.6c0-49.493,40.107-89.6,89.6-89.6\n                        c12.8,0,24.747,2.56,35.84,7.68c2.56,0.853,3.413,3.413,2.56,5.973c-0.853,2.56-3.413,3.413-5.973,2.56\n                        c-10.24-4.267-21.333-6.827-32.427-6.827c-44.373,0-81.067,36.693-81.067,81.067c0,52.053,52.907,133.973,140.8,182.613\n                        c87.893-48.64,140.8-131.413,140.8-182.613c0-44.373-36.693-81.067-81.067-81.067c-31.573,0-60.587,18.773-73.387,46.933\n                        c-0.853,2.56-3.413,3.413-5.973,1.707c-2.56-0.853-3.413-3.413-1.707-5.973C330.303,20.48,362.73,0,396.863,0\n                        c49.493,0,89.6,40.107,89.6,89.6c0,54.613-55.467,140.8-147.627,191.147C338.836,281.6,337.983,281.6,337.13,281.6z M445.503,76.8\n                        c-1.707,0-3.413-0.853-4.267-2.56c-5.12-13.653-15.36-23.893-28.16-28.16c-2.56-0.853-3.413-3.413-2.56-5.12\n                        c0.853-2.56,3.413-3.413,5.12-2.56c16.213,5.973,28.16,17.92,34.133,34.133c0.853,2.56,0,4.267-2.56,5.12\n                        C446.356,76.8,445.503,76.8,445.503,76.8z"/>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                    <g>\n                    </g>\n                </svg>\n                </a>'
    }
    $("#nav").html(t)
}
function list(M) {
    var t = "";
    window.location.href.includes("?a=view") || "/DMCA" == M || "/ContactUs" == M ? t += '<div class="mdui-toolbar-spacer"></div><div class="mdui-textfield"><input style="color:white; cursor:text;" id="searchinput" class="mdui-textfield-input" onkeyup="timeout()" type="search" placeholder="搜尋" disabled/></div>' : screen.width < 570 && (t += '<div class="mdui-toolbar-spacer"></div><div class="mdui-textfield"><input style="color:white; cursor:text;" id="searchinput" class="mdui-textfield-input" onkeyup="timeout()" type="search" placeholder="搜尋"/></div>');
    var i = `\n    ${t}\n\t<div id="head_md" class="mdui-typo" style="display:none;padding: 20px 0;"></div>\n\t <div class="mdui-row"> \n\t  <ul class="mdui-list"> \n\t   <li class="mdui-list-item th"> \n\t    <div class="mdui-col-xs-12 mdui-col-sm-7" onclick="sortFileList('sortname')">\n\t     文件\n\t<i class="mdui-icon material-icons icon-sort" data-sort="name" data-order="more">expand_more</i>\n\t    </div> \n\t    <div class="mdui-col-sm-3 mdui-text-right" onclick="sortFileList('sortdate')">\n\t     修改時間\n\t<i class="mdui-icon material-icons icon-sort" data-sort="date" data-order="downward">expand_more</i>\n\t    </div> \n\t    <div class="mdui-col-sm-2 mdui-text-right" onclick="sortFileList('sortsize')">\n\t     檔案大小\n\t<i class="mdui-icon material-icons icon-sort" data-sort="size" data-order="downward">expand_more</i>\n\t    </div>\n        <div class="mdui-col-sm-2 mdui-text-right">\n       </div>\n\t    </li> \n\t  </ul> \n\t </div> \n\t <div class="mdui-row"> \n\t  <ul id="list" class="mdui-list"> \n\t  </ul> \n\t </div>\n\t <div id="readme_md" class="mdui-typo" style="display:none; padding: 20px 0;"></div>\n\t`;
    $("#content").html(i);
    var e = localStorage.getItem("password" + M);
    $("#list").html('<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>'),
    $("#readme_md").hide().html(""),
    $("#head_md").hide().html(""),
    $.post(M, '{"password":"' + e + '"}', (function(t, i) {
        var e = jQuery.parseJSON(t);
        if ("null" != typeof e && e.hasOwnProperty("error") && "401" == e.error.code) {
            var n = prompt("Require a private token", "");
            localStorage.setItem("password" + M, n),
            null != n && "" != n ? list(M) : history.go(-1)
        } else
            "null" != typeof e && list_files(M, e.files)
    }
    ))
}
function list_files(M, t) {
    for (i in html = "",
    t) {
        var e = t[i];
        if (Array.isArray(M))
            var n = M[i] + e.name;
        else
            n = M + e.name;
        if (pProg = n.split("/"),
        pProg.forEach(( (M, t) => {
            M = decodeURIComponent(M),
            pProg[t] = encodeURIComponent(M)
        }
        )),
        null == e.size && (e.size = ""),
        e.modifiedTime = utc2HK(e.modifiedTime),
        e.size = formatFileSize(e.size),
        "application/vnd.google-apps.folder" == e.mimeType)
            n = pProg.join("/") + "/",
            html += `<li class="mdui-list-item mdui-ripple"><span class="tool_tip">${e.name}</span><a href="${n}" class="folder">\n\t            <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate sortname">\n\t            <i class="mdui-icon material-icons">folder_open</i>\n\t              ${e.name}\n\t            </div>\n\t            <div class="mdui-col-sm-3 mdui-text-right sortdate">${e.modifiedTime}</div>\n\t            <div class="mdui-col-sm-2 mdui-text-right sortsize">${e.size}</div>\n                <div class="mdui-col-sm-2 mdui-text-right"><a class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"></a></div>\n\t            </a>\n\t        </li>`;
        else {
            var o = n = pProg.join("/")
              , a = "file";
            "README.md" == e.name && get_file(n, e, (function(M) {
                markdown("#readme_md", M)
            }
            )),
            "HEAD.md" == e.name && get_file(n, e, (function(M) {
                markdown("#head_md", M)
            }
            ));
            var s = n.split(".").pop();
            "|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${s.toLowerCase()}|`) >= 0 && (n += "?a=view",
            a += " view"),
            "sw.js" == e.name || e.name.includes(".vtt") || e.name.includes(".srt") || ("|html|php|css|go|java|js|json|txt|sh|md|bmp|jpg|jpeg|png|gif|m4a|mp3|wav|ogg|".indexOf(`|${s.toLowerCase()}|`) >= 0 ? html += `<li class="mdui-list-item file mdui-ripple" target="_blank"><a gd-type="${e.mimeType}" href="${n}" class="${a}"><span class="tool_tip">${e.name}</span>\n                    <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate sortname">\n                    <i class="mdui-icon material-icons">insert_drive_file</i>\n                      ${e.name}\n                    </div>\n                    <div class="mdui-col-sm-3 mdui-text-right sortdate">${e.modifiedTime}</div>\n                    <div class="mdui-col-sm-2 mdui-text-right sortsize">${e.size}</div>\n                    <div class="mdui-col-sm-2 mdui-text-right"><a href="${o}" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"><i class="mdui-icon material-icons">cloud_download</i></a></div>\n                    </a>\n                </li>` : "|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${s}|`) >= 0 ? html += `<li class="mdui-list-item file mdui-ripple" target="_blank"><a gd-type="${e.mimeType}" href="${n}" class="${a}"><span class="tool_tip">${e.name}</span>\n                    <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate sortname">\n                    <i class="mdui-icon material-icons">video_library</i>\n                      ${e.name}\n                    </div>\n                    <div class="mdui-col-sm-3 mdui-text-right sortdate">${e.modifiedTime}</div>\n                    <div class="mdui-col-sm-2 mdui-text-right sortsize">${e.size}</div>\n                    <div class="mdui-col-sm-2 mdui-text-right"><a href="${o}" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"><i class="mdui-icon material-icons">cloud_download</i></a></div>\n                    </a>\n                </li>` : "|nfo|".indexOf(`|${s}|`) >= 0 || (html += `<li class="mdui-list-item file mdui-ripple" target="_blank"><a gd-type="${e.mimeType}" href="${n}" class="${a}"><span class="tool_tip">${e.name}</span>\n                    <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate sortname">\n                    <i class="mdui-icon material-icons">insert_drive_file</i>\n                      ${e.name}\n                    </div>\n                    <div class="mdui-col-sm-3 mdui-text-right sortdate">${e.modifiedTime}</div>\n                    <div class="mdui-col-sm-2 mdui-text-right sortsize">${e.size}</div>\n                    <div class="mdui-col-sm-2 mdui-text-right"><a href="${o}" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"><i class="mdui-icon material-icons">cloud_download</i></a></div>\n                    </a>\n                </li>`))
        }
    }
    $("#list").html(html)
}
function get_file(M, t, i) {
    var e = "file_path_" + M + t.modifiedTime
      , n = localStorage.getItem(e);
    if (null != n)
        return i(n);
    $.get(M, (function(M) {
        localStorage.setItem(e, M),
        i(M)
    }
    ))
}
function file(M) {
    var t = M.split("/").slice(0, -1).join("/")
      , i = M.split("/").pop()
      , e = t + "/" + i
      , n = i.split(".").pop().toLowerCase().replace("?a=view", "");
    return "|html|php|css|go|java|js|json|txt|sh|md|".indexOf(`|${n}|`) >= 0 ? file_code(e) : "|mp4|webm|avi|".indexOf(`|${n}|`) >= 0 || "|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${n}|`) >= 0 ? file_video(e) : "|mp3|wav|ogg|m4a|".indexOf(`|${n}|`) >= 0 ? file_audio(e) : "|bmp|jpg|jpeg|png|gif|".indexOf(`|${n}|`) >= 0 ? file_image(e) : void 0
}
function file_code(M) {
    var t = {
        html: "html",
        php: "php",
        css: "css",
        go: "golang",
        java: "java",
        js: "javascript",
        json: "json",
        txt: "Text",
        sh: "sh",
        md: "Markdown"
    }
      , e = M.split("/").pop().split(".").pop()
      , n = (window.location.origin,
    window.location.origin)
      , o = M.split("/");
    for (i = 1; i < o.length; i++) {
        var a = decodeURIComponent(o[i]);
        n = n + "/" + (a = encodeURIComponent(a))
    }
    n = n.replaceAll(/%25/g, "%");
    let s = "";
    screen.width < 570 && (s = `<p style="overflow-wrap: break-word;">${decodeURIComponent(o.at(-1).replace(/.html|.php|.css|.go|.java|.js|.json|.txt|.sh|.md/g, ""))}</p>`);
    var r = `\n<div class="mdui-container">\n<pre id="editor"></pre>\n</div>\n<br>\n${s}\n<div class="mdui-textfield">\n\t<label class="mdui-textfield-label">下載地址</label>\n\t<input class="mdui-textfield-input" type="text" value="${n}"/>\n</div>\n<button href="${n + "?a=view"}" id="copybt" class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-color-theme-accent mdui-ripple" onClick="copyURI(event)"><i class="mdui-icon material-icons">share</i> Share</button>\n<button onclick="javascript:location.href='${n}'" class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">cloud_download</i> Download</button>\n<script src="https://cdn.staticfile.net/ace/1.4.7/ace.js"><\/script>\n<script src="https://cdn.staticfile.net/ace/1.4.7/ext-language_tools.js"><\/script>\n\t`;
    $("#content").html(r),
    $.get(M, (function(M) {
        $("#editor").html($("<div/>").text(M).html());
        var i = "Text";
        null != t[e] && (i = t[e]);
        var n = ace.edit("editor");
        n.setTheme("ace/theme/ambiance"),
        n.setFontSize(18),
        n.session.setMode("ace/mode/" + i),
        n.setOptions({
            enableBasicAutocompletion: !0,
            enableSnippets: !0,
            enableLiveAutocompletion: !0,
            maxLines: 1 / 0
        })
    }
    ))
}
function file_video(M) {
    var t = M.split("/")
      , e = window.location.origin;
    let n = "";
    for (screen.width < 570 && (n = `<p style="overflow-wrap: break-word;">${decodeURIComponent(t.at(-1).replace(/.mp4|.webm|.avi/g, ""))}</p>`),
    i = 1; i < t.length; i++) {
        var o = decodeURIComponent(t[i]);
        e = e + "/" + (o = encodeURIComponent(o))
    }
    var a = (e = e.replaceAll(/%25/g, "%")).split(/(.mp4)|(.webm)|(.avi)/)[0] + ".vtt"
      , s = `\n<div class="mdui-container-fluid">\n\t<br>\n    <div class="mdui-video-fluid mdui-center" id="dplayer"></div>\n    <br>\n    ${n}\n    <br> 如果以上片段無法播放，可使用以下播放連結 (請使用 Google Chrome)\n\t<br>\n\t<br>${`<a href="${"intent:" + e + "#Intent;package=com.mxtech.videoplayer.pro;end"}"><button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-deep-purple-900"><i class="mdui-icon material-icons">&#xe038;</i>MxPro</button></a>`}&emsp;${`<a href="${"vlc://" + e}"><button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-deep-purple-900"><i class="mdui-icon material-icons">&#xe038;</i>VLC</button></a>`}&emsp;${`<a href="${"potplayer://" + e}"><button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-deep-purple-900"><i class="mdui-icon material-icons">&#xe038;</i>Pot</button></a>`}&emsp;${`<a href="${"infuse://x-callback-url/play?url=" + e}"><button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-deep-purple-900"><i class="mdui-icon material-icons">&#xe038;</i>Infuse</button></a>`}&emsp;${`<a href="${"iina://weblink?url=" + e}"><button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-deep-purple-900"><i class="mdui-icon material-icons">&#xe038;</i>IINA</button></a>`}&emsp;${`<a href="${"nplayer-" + e}"><button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-deep-purple-900"><i class="mdui-icon material-icons">&#xe038;</i>NP</button></a>`}\n\t\x3c!-- 固定标签 --\x3e\n\t<div class="mdui-textfield">\n\t  <label style="color:white;" class="mdui-textfield-label">下載地址</label>\n\t  <input style="color:white;" class="mdui-textfield-input" type="text" value="${e}"/>\n\t</div>\n    <button href="${e + "?a=view"}" id="copybt" class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-color-theme-accent mdui-ripple" onClick="copyURI(event)"><i class="mdui-icon material-icons">share</i> Share</button>\n    <button onclick="javascript:location.href='${e}'" class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">cloud_download</i> Download</button>\n    <br>\n</div>\n\t`;
    $("#content").html(s);
    new DPlayer({
        container: document.getElementById("dplayer"),
        autoplay: !1,
        screenshot: !1,
        airplay: !0,
        theme: "#FF7DCC",
        preload: "auto",
        autoplay: !1,
        hotkey: !0,
        video: {
            url: e,
            pic: "https://pro.v300.eu.org/cdn.jsdelivr.net/gh/RyanL-29/aniopen/background.png",
            type: "auto"
        },
        subtitle: {
            url: a,
            type: "webvtt",
            fontSize: "1.6em",
            bottom: "13px",
            color: "#fff"
        }
    })
}
function file_audio(M) {
    var t = M.split("/")
      , e = window.location.origin;
    let n = "";
    for (screen.width < 570 && (n = `<p style="overflow-wrap: break-word;">${decodeURIComponent(t.at(-1).replace(/.mp3|.m4a|.wav|.ogg/g, ""))}</p>`),
    i = 1; i < t.length; i++) {
        var o = decodeURIComponent(t[i]);
        e = e + "/" + (o = encodeURIComponent(o))
    }
    var a = `\n<div class="mdui-container-fluid">\n\t<br>\n\t<audio class="mdui-center" preload controls>\n\t  <source src="${e = e.replaceAll(/%25/g, "%")}"">\n\t</audio>\n\t<br>\n    ${n}\n\t\x3c!-- 固定标签 --\x3e\n\t<div class="mdui-textfield">\n\t  <label style="color:white;" class="mdui-textfield-label">下載地址</label>\n\t  <input style="color:white;" class="mdui-textfield-input" type="text" value="${e}"/>\n\t</div>\n    <button href="${e + "?a=view"}" id="copybt" class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-color-theme-accent mdui-ripple" onClick="copyURI(event)"><i class="mdui-icon material-icons">share</i> Share</button>\n    <button onclick="javascript:location.href='${e}'" class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">cloud_download</i> Download</button>\n    <br>\n</div>\n\t`;
    $("#content").html(a)
}
function file_image(M) {
    var t = M.split("/")
      , e = window.location.origin;
    let n = "";
    for (screen.width < 570 && (n = `<p style="overflow-wrap: break-word;">${decodeURIComponent(rawshare.at(-1).replace(/.bmp|.jpg|.jpeg|.png|.gif/g, ""))}</p>`),
    i = 1; i < t.length; i++) {
        var o = decodeURIComponent(t[i]);
        e = e + "/" + (o = encodeURIComponent(o))
    }
    var a = `\n<div class="mdui-container-fluid">\n\t<br>\n\t<img class="mdui-img-fluid" src="${e = e.replaceAll(/%25/g, "%")}"/>\n\t<br>\n    ${n}\n\t<div class="mdui-textfield">\n\t  <label class="mdui-textfield-label">下載地址</label>\n\t  <input class="mdui-textfield-input" type="text" value="${e}"/>\n\t</div>\n    <button href="${e + "?a=view"}" id="copybt" class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-color-theme-accent mdui-ripple" onClick="copyURI(event)"><i class="mdui-icon material-icons">share</i> Share</button>\n    <button onclick="javascript:location.href='${e}'" class="mdui-btn mdui-btn-raised mdui-btn-dense mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">cloud_download</i> Download</button>\n    <br>\n</div>\n\t`;
    $("#content").html(a)
}
function utc2HK(M) {
    var t = M.indexOf("T")
      , i = M.indexOf("Z")
      , e = M.substr(0, t) + " " + M.substr(t + 1, i - t - 1);
    timestamp = new Date(Date.parse(e)),
    timestamp = timestamp.getTime(),
    timestamp /= 1e3;
    var n = timestamp + 28800
      , o = 1900 + (n = new Date(1e3 * n)).getYear()
      , a = "0" + (n.getMonth() + 1)
      , s = "0" + n.getDate()
      , r = "0" + n.getHours()
      , l = "0" + n.getMinutes()
      , d = "0" + n.getSeconds();
    return o + "-" + a.substring(a.length - 2, a.length) + "-" + s.substring(s.length - 2, s.length) + " " + r.substring(r.length - 2, r.length) + ":" + l.substring(l.length - 2, l.length) + ":" + d.substring(d.length - 2, d.length)
}
function formatFileSize(M) {
    return M >= 1e9 ? M = (M / 1e9).toFixed(2) + " GB" : M >= 1e6 ? M = (M / 1e6).toFixed(2) + " MB" : M >= 1e3 ? M = (M / 1e3).toFixed(2) + " KB" : M > 1 ? M += " bytes" : 1 == M ? M += " byte" : M = "",
    M
}
function covertSizeStringToBytes(M) {
    return M.includes("GB") ? 1073741824 * parseInt(M.split("GB")[0]) : M.includes("MB") ? 1048576 * parseInt(M.split("MB")[0]) : M.includes("KB") ? 1024 * parseInt(M.split("KB")[0]) : void 0
}
function markdown(M, t) {
    if (null == window.md)
        window.md = window.markdownit(),
        markdown(M, t);
    else {
        var i = md.render(t);
        $(M).show().html(i)
    }
}
function sortFileList(M) {
    var t, i, e, n, o, a;
    for (t = document.getElementById("list"),
    i = !0,
    n = "asc"; i; ) {
        i = !1,
        e = t.getElementsByTagName("LI"),
        a = [...e],
        o = document.getElementsByClassName(M);
        let r = [...o].map(( (M, t) => ({
            index: t,
            value: M
        })))
          , l = [...r];
        if ("asc" == n ? r.sort(( (t, i) => {
            if ("sortsize" === M) {
                if (covertSizeStringToBytes(t.value.innerHTML) > covertSizeStringToBytes(i.value.innerHTML))
                    return 1;
                if (covertSizeStringToBytes(t.value.innerHTML) < covertSizeStringToBytes(i.value.innerHTML))
                    return -1
            } else {
                if (t.value.innerHTML > i.value.innerHTML)
                    return 1;
                if (t.value.innerHTML < i.value.innerHTML)
                    return -1
            }
            return 0
        }
        )) : "desc" == n && r.sort(( (t, i) => {
            if ("sortsize" === M) {
                if (covertSizeStringToBytes(t.value.innerHTML) > covertSizeStringToBytes(i.value.innerHTML))
                    return -1;
                if (covertSizeStringToBytes(t.value.innerHTML) < covertSizeStringToBytes(i.value.innerHTML))
                    return 1
            } else {
                if (t.value.innerHTML > i.value.innerHTML)
                    return -1;
                if (t.value.innerHTML < i.value.innerHTML)
                    return 1
            }
            return 0
        }
        )),
        _.isEqual(r, l) && "asc" == n)
            n = "desc",
            i = !0;
        else {
            i = !1;
            for (var s = 0; s < r.length; s++)
                t.appendChild(a[r[s].index])
        }
    }
}
function printlogo() {
    console.log("\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMmmmmmmmmmmmmNMMMMMMMMMMMMMMNmmmmmmmmmmmMMMMMMMMMMMMmmmmmmmmmNMMMMMd::::::::::+MMMMM\nMMMMMMMMMMMMMMMMs````````````/MMMMMMMMMMMMMMd```````````+NMMMMMMMMMm`````````yMMMMMy          .MMMMM\nMMMMMMMMMMMMMMMN`             yMMMMMMMMMMMMMh            :mMMMMMMMMm         yMMMMMy          .MMMMM\nMMMMMMMMMMMMMMM/              .NMMMMMMMMMMMMh             .dMMMMMMMm         yMMMMMy          .MMMMM\nMMMMMMMMMMMMMMd                oMMMMMMMMMMMMh              `yMMMMMMm         yMMMMMh----------/MMMMM\nMMMMMMMMMMMMMM-                `dMMMMMMMMMMMh                oNMMMMm         yMMMMMNmmmmmmmmmmmMMMMM\nMMMMMMMMMMMMMs        `         :MMMMMMMMMMMh                 :NMMMm         yMMMMMy          .MMMMM\nMMMMMMMMMMMMm`       +o          yMMMMMMMMMMh                  .dMMm         yMMMMMy          .MMMMM\nMMMMMMMMMMMM/       `NN.         `NMMMMMMMMMh        -.         `yMN         yMMMMMy          .MMMMM\nMMMMMMMMMMMh        oMMs          +MMMMMMMMMh         d`          sM.        yMMMMMy          .MMMMM\nMMMMMMMMMMM.       .NMMM.          dMMMMMMMMh         dm.          o/        yMMMMMy          .MMMMM\nMMMMMMMMMMo        yMMMMh          -MMMMMMMMh         dMm-          .        yMMMMMy          .MMMMM\nMMMMMMMMMm`        ::::::           sMMMMMMMh         dMMN/                  yMMMMMy          .MMMMM\nMMMMMMMMM:                          `mMMMMMMh         dMMMMo                 yMMMMMy          .MMMMM\nMMMMMMMMh                            /MMMMMMh         dMMMMMy`               yMMMMMy          .MMMMM\nMMMMMMMN.                             hMMMMMh         dMMMMMMd.              yMMMMMy          .MMMMM\nMMMMMMMo        `++++++++++.          .NMMMMh         dMMMMMMMm:             yMMMMMy          .MMMMM\nMMMMMMm`        yMMMMMMMMMMh           oMMMMh         dMMMMMMMMN+            yMMMMMy          .MMMMM\nMMMMMM:        :MMMMMMMMMMMM:          `dMMMh         dMMMMMMMMMMs`          yMMMMMy          .MMMMM\nMMMMMy         dMMMMMMMMMMMMm           :MMMh         dMMMMMMMMMMMh`         yMMMMMy          .MMMMM\nMMMMMdyyyyyyyyhMMMMMMMMMMMMMMhyyyyyyyyyyyNMMNyyyyyyyyyNMMMMMMMMMMMMmyyyyyyyyymMMMMMmyyyyyyyyyyhMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                            MMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM      PowerBy: GoIndex      MMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM      Theme Design: ANi     MMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                            MMMMMMM\nMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM")
}
function copyURI(M) {
    M.preventDefault(),
    navigator.clipboard.writeText(M.target.getAttribute("href")).then(( () => {
        mdui.snackbar({
            message: "已複製連結 - Link Copied",
            position: "right-top"
        })
    }
    ), ( () => {
        mdui.snackbar({
            message: "複製連結失敗 - Link Copy failed",
            position: "right-top"
        })
    }
    ))
}
String.prototype.trim = function(M) {
    return M ? this.replace(new RegExp("^\\" + M + "+|\\" + M + "+$","g"), "") : this.replace(/^\s+|\s+$/g, "")
}
,
window.onpopstate = function() {
    render(window.location.pathname)
}
,
$((function() {
    init(),
    printlogo();
    var M = window.location.pathname;
    $("body").on("click", ".folder", (function() {
        var M = $(this).attr("href");
        return history.pushState(null, null, M),
        render(M),
        !1
    }
    )),
    $("body").on("click", ".view", (function() {
        var M = $(this).attr("href");
        return history.pushState(null, null, M),
        render(M),
        !1
    }
    )),
    render(M)
}
));
//# sourceMappingURL=/sm/7faf1e1de52d9ff38cbe96c646a46e670c88b1f4156db8b57ca49daaf32354dd.map
