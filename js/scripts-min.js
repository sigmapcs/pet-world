!function(){return function e(t,n,r){function i(o,c){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!c&&a)return a(o,!0);if(u)return u(o,!0);var s=new Error("Cannot find module '"+o+"'");throw s.code="MODULE_NOT_FOUND",s}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){return i(t[o][1][e]||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var u="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o]);return i}}()({1:[function(e,t,n){"use strict";var r=e("./modules/active-menu"),i=e("./modules/slide");(0,r.activeMenu)(),document.getElementById("year").textContent=(new Date).getFullYear(),(0,i.slidePCS)(document.getElementById("slides"),document.getElementById("slide-navigation"),1e3,5e3),document},{"./modules/active-menu":2,"./modules/slide":3}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.activeMenu=function(){var e=document.getElementById("main-menu");document.getElementById("toggleMenu").addEventListener("click",function(t){t.preventDefault(),e.classList.toggle("show")})}},{}],3:[function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(n,"__esModule",{value:!0});n.slidePCS=function(e,t,n,c){var a=[].concat(r(t.querySelectorAll("li")));a.map(function(t){return t.addEventListener("click",function(t){i(a,t.target),u(e,t.target.dataset.index)})}),o(e,a)};var i=function(e,t){e.map(function(e){return e.classList.remove("active")}),t.classList.add("active")},u=function(e,t){var n=[].concat(r(e.querySelectorAll(".slide-item")));n.map(function(e){return e.classList.remove("active")}),n[t-1].classList.add("active")},o=function(e,t){setInterval(function(){var n=e.querySelector(".active").dataset.index;console.log(n),parseInt(n)+1<5?(u(e,parseInt(n)+1),c(parseInt(n),t)):(u(e,1),c(0,t))},5e3)},c=function(e,t){t.map(function(e){return e.classList.remove("active")}),t[e].classList.add("active")}},{}]},{},[1]);
//# sourceMappingURL=scripts-min.js.map
