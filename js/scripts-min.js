(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _activeMenu = require('./modules/active-menu');

var _slide = require('./modules/slide');

// saludo()
// despedida()
// import {saludo, despedida} from "./modules/example"
(0, _activeMenu.activeMenu)();
(function (d) {
  d.getElementById('year').textContent = new Date().getFullYear();
})(document);
// (d=>{
//   const slides = d.getElementById('slides')
//   console.log(slides.querySelector('.active'))
// })(document);
(0, _slide.slidePCS)(document.getElementById('slides'), document.getElementById('slide-navigation'), 1000, 5000);
(function (d) {})(document);

},{"./modules/active-menu":2,"./modules/slide":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var activeMenu = exports.activeMenu = function activeMenu() {
  var menu = document.getElementById('main-menu'),
      toggleMenu = document.getElementById('toggleMenu');
  toggleMenu.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.toggle('show');
  });
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var slidePCS = exports.slidePCS = function slidePCS(slide, nav, time, trasition) {
  var navLi = [].concat(_toConsumableArray(nav.querySelectorAll('li')));
  navLi.map(function (li) {
    return li.addEventListener('click', function (e) {
      liActive(navLi, e.target);
      nextItem(slide, e.target.dataset.index);
    });
  });
  next(slide, navLi);
};
var liActive = function liActive(navLi, t) {
  navLi.map(function (li) {
    return li.classList.remove('active');
  });
  t.classList.add('active');
};
var nextItem = function nextItem(slide, i) {
  var slideItem = [].concat(_toConsumableArray(slide.querySelectorAll('.slide-item')));
  // console.log(slideItem,slideItem[i],i)
  slideItem.map(function (s) {
    return s.classList.remove('active');
  });
  slideItem[i - 1].classList.add('active');
};
var next = function next(slide, navLi) {
  setInterval(function () {
    var activeIndex = slide.querySelector('.active').dataset.index;
    console.log(activeIndex);
    if (parseInt(activeIndex) + 1 < 5) {
      nextItem(slide, parseInt(activeIndex) + 1);
      listactive(parseInt(activeIndex), navLi);
    } else {
      nextItem(slide, 1);
      listactive(0, navLi);
    }
  }, 5000);
};

var listactive = function listactive(i, lia) {
  lia.map(function (li) {
    return li.classList.remove('active');
  });
  lia[i].classList.add('active');
};

},{}]},{},[1]);

//# sourceMappingURL=scripts-min.js.map
