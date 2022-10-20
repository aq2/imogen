"use strict";

/// aQuery
function $all(elements) {
  return document.querySelectorAll(elements);
}

function $id(element) {
  return document.querySelector(element);
} //end aQuery
/// sections
// todo - sort this 💩 out!


var notDoneYet = true;
var initialSection = 0;
var oldID = initialSection;
var newID = initialSection;
var sections = $all('section');
var articles = $all('article');
var asides = $all('aside');
sections.forEach(function (section) {
  if (window.innerWidth > 980) {
    section.addEventListener('click', function (e) {
      var activeNow = section.classList.contains('shown');

      if (!activeNow) {
        newID = parseInt(section.dataset.idx);
        switchActives(sections, oldID, newID);
        switchActives(articles, oldID, newID);
        switchActives(asides, newID, oldID);
        oldID = newID; // todo check for scrollbar and webkit styles?
      }
    });
  }
}); // if (notDoneYet) {
//   sections[initialSection].classList.add('shown')
//   asides.forEach(aside => {
//     aside.classList.add('shown')
//   })
//   asides[initialSection].classList.remove('shown')
//   notDoneYet = false
// }

function switchActives(elements, oldID, newID) {
  if (window.innerWidth > 980) {
    elements[oldID].classList.remove('shown');
    elements[newID].classList.add('shown');
  }
} //end sections
/// form


var labels = $all('label');
labels.forEach(function (label) {
  label.innerHTML = label.innerText.split('').map(function (letter, idx) {
    return "<span style='transition-delay:".concat(idx * 20, "ms'>").concat(letter, "</span>");
  }).join('');
});
var emailInput = $id('#email');
emailInput.addEventListener('click', function (e) {
  console.log(e.target);
}); //end form
/// width detection!

var delay = 150;
var range = 'XXX';
var timeout = false;
var w = $id('#width');
var r = $id('#range');

function getDimensions() {
  var width = window.innerWidth;
  w.innerHTML = 'width: ' + width;

  if (width > 1500) {
    range = '1500+';
  } else if (width > 1100) {
    range = '1100 - 1500';
  } else if (width > 980) {
    range = '980 -1100';
  } else if (width > 880) {
    range = '806 - 980';
  } else if (width > 806) {
    range = '686 - 806';
  } else if (width > 686) {
    range = '560 - 686';
  } else if (width > 560) {
    range = '460 - 560';
  } else if (width > 460) {
    range = '460 - 560';
  } else if (width > 388) {
    range = '388 - 460';
  } else {
    range = 'teeny';
  }

  r.innerHTML = 'range: ' + range;
}

window.addEventListener('resize', function () {
  clearTimeout(timeout);
  timeout = setTimeout(getDimensions, delay);
});
getDimensions(); //end width detection
/// scrollbar detection

var scrollbarVisible = function scrollbarVisible(element) {
  return element.scrollHeight > element.clientHeight;
};

var section = sections[newID]; // console.log('scrollbar: ' + scrollbarVisible(section))
//end scollbar