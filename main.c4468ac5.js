parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=4,d=4,n=document.getElementsByClassName("append-row button")[0],t=document.getElementsByClassName("remove-row button")[0],l=document.getElementsByClassName("append-column button")[0],i=document.getElementsByClassName("remove-column button")[0],a=document.querySelector("tbody");function c(){if(e<10){t.disabled=!1,e++;var d=a.children[0].cloneNode(!0);a.appendChild(d)}10===e&&(n.disabled=!0)}function o(){e>2&&(n.disabled=!1,e--,a.removeChild(a.children[0])),2===e&&(t.disabled=!0)}function r(){if(d<10){i.disabled=!1,d++;for(var n=0;n<e;n++){var t=a.children[n],c=t.children[0].cloneNode(!0);t.appendChild(c)}}10===d&&(l.disabled=!0)}function s(){if(d>2){l.disabled=!1,d--;for(var n=0;n<e;n++){var t=a.children[n];t.removeChild(t.children[0])}}2===d&&(i.disabled=!0)}n.addEventListener("click",c),t.addEventListener("click",o),l.addEventListener("click",r),i.addEventListener("click",s);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.c4468ac5.js.map