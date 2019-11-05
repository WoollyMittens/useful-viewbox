/*
	Source:
	van Creij, Maurice (2019). "viewbox.js: Animate based on screen position.", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
function viewbox(elements, sensitivity) {
  var windowScrolled = 0;
  var onReposition = function() {
    if (Math.abs(window.pageYOffset - windowScrolled) > sensitivity) {
      var clientRect, classSuffix, className;
      var scrollDirection = windowScrolled - window.pageYOffset;
      var screenHeight = window.innerHeight || document.documentElement.clientHeight;
      for (var a = 0, b = elements.length; a < b; a += 1) {
        className = elements[a].className;
        clientRect = elements[a].getBoundingClientRect();
        classSuffix = [];
        if (scrollDirection < 0) {
          classSuffix.push('upwards');
          if (clientRect.top < screenHeight && clientRect.bottom > screenHeight && clientRect.top > 0) classSuffix.push('entering');
          if (clientRect.top < 0 && clientRect.bottom < screenHeight && clientRect.bottom > 0) classSuffix.push('exiting');
        }
        else if (scrollDirection > 0) {
          classSuffix.push('downwards');
          if (clientRect.top < screenHeight && clientRect.bottom > screenHeight && clientRect.top > 0) classSuffix.push('exiting');
          if (clientRect.top < 0 && clientRect.bottom < screenHeight && clientRect.bottom > 0) classSuffix.push('entering');
        }
        if (clientRect.bottom < 0) classSuffix.push('above');
        if (clientRect.top > screenHeight) classSuffix.push('below');
        if (clientRect.top >= 0 && clientRect.bottom <= screenHeight) classSuffix.push('inside');
        if (clientRect.top < 0 && clientRect.bottom > screenHeight) classSuffix.push('around');
        className = className.replace(/ vbx| _upwards| _downwards| _entering| _exiting| _above| _below| _inside| _around/g, '');
        className += ' vbx _' + classSuffix.join(' _');
        if (elements[a].className !== className) elements[a].className = className;
      }
  		windowScrolled = window.pageYOffset;
    }
  };
  if (elements.length > 0) {
    window.addEventListener('scroll', onReposition.bind(this));
    window.addEventListener('resize', onReposition.bind(this));
    onReposition();
  }
}

// return as a require.js module
if (typeof define != 'undefined') define([], function () { return viewbox });
if (typeof module != 'undefined') module.exports = viewbox;
