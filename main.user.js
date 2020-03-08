// ==UserScript==
// @name         Plot To SVG
// @namespace    http://tampermonkey.net/
// @version      0.1
// @license      Apache 2.0
// @description  Add download SVG button
// @author       JJH조재희
// @match        http://www.spectraplot.com/blackbody
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var download = document.getElementById("save_as_png").parentElement;
    var svgbtn = document.createElement("BUTTON");
    svgbtn.innerText = "Save as SVG";
    download.appendChild(svgbtn);
    svgbtn.addEventListener("click", function() {
        svgAsDataUri(document.getElementById("plot"), {scale: 2}, function(uri) {
            var a = document.createElement('a');
            a.download = "spectraplot.svg";
            a.href = uri;
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
        });
    });
})();
