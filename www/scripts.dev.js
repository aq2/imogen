"use strict";

/// sections
var initialSection = 0; // 0 -> 3

var breakpoint = 980;
var oldID = initialSection;
var newID = initialSection;
var sections = $all('section');
var articles = $all('article');
var asides = $all('aside'); // initialise

doNeeded(oldID, newID);

function doNeeded(oldID, newID) {
  hideAll();

  if (window.innerWidth > breakpoint) {
    openSection(newID);
    changeSingle(articles[newID], 'block');
    changeAll(asides, 'block');
    changeSingle(asides[newID], 'none');
  } else {
    changeAll(articles, 'block');
    changeAll(asides, 'block');
  }
} // add click listeners


sections.forEach(function (section) {
  if (window.innerWidth > breakpoint) {
    section.addEventListener('click', function (e) {
      var clickedOn = parseInt(section.dataset.idx);

      if (clickedOn !== newID) {
        closeSection(oldID);
        newID = clickedOn;
        doNeeded(oldID, newID);
        oldID = newID;
        changeBordersIfScrollbar(section);
      }
    });
  }
}); // todo now we need a resize handler!

function changeAll(elements, shown) {
  if (shown) {
    elements.forEach(function (element) {
      element.style.display = shown;
    });
  }
}

function changeSingle(element, shown) {
  if (shown) {
    element.style.display = shown;
  }
}

function openSection(sectionID) {
  sections[sectionID].style.flex = 5;
  sections[sectionID].style.cursor = 'default';
}

function closeSection(sectionID) {
  sections[sectionID].style.flex = 1;
  sections[sectionID].style.cursor = 'pointer';
}

function showAll() {
  // sections.forEach(section => {
  //   section.style.display = 'block'
  // })
  asides.forEach(function (aside) {
    // aside.style.display = 'block'
    show(aside, 'block');
  });
  articles.forEach(function (article) {
    // article.style.display = 'block'
    show(article, 'block');
  });
}

function show(element, witch) {
  element.style.display = witch;
}

function hideAll() {
  // sections.forEach(section => {
  //   section.style.display = 'none'
  // })
  asides.forEach(function (aside) {
    // aside.style.display = 'none'
    show(aside, 'none');
  });
  articles.forEach(function (article) {
    // article.style.display = 'none'
    show(article, 'none');
  });
} // initializePanels()
// sections[initialSection].classList.add('shown')
// asides.forEach(aside => {
//   aside.classList.add('shown')
// })
// asides[initialSection].classList.remove('shown')
// articles[initialSection].classList.add('shown')
// changeBordersIfScrollbar(sections[initialSection])        
// articles[initialSection].style.color='red'
// // add click listeners
// sections.forEach(section => {
//   if (window.innerWidth > 980) { 
//     section.addEventListener('click', (e) => {
//       let activeNow = section.classList.contains('shown')
//       if (!activeNow) {
//         newID = parseInt(section.dataset.idx)
//         switchActives(sections, oldID, newID)
//         switchActives(articles, oldID, newID)
//         switchActives(asides, newID, oldID)        
//         oldID = newID
//         changeBordersIfScrollbar(section)        
//       }
//       console.log(window.innerWidth)
//       // let section.shown = 1
//     })
//   }
// })


function switchActives(elements, oldID, newID) {
  if (window.innerWidth > 980) {
    elements[oldID].classList.remove('shown');
    elements[newID].classList.add('shown');
  }
} // hideElement(asides[2])


function hideElement(element) {
  element.style.display = 'none'; // element.classList.remove('shown')
}

function considerElement(element, display) {
  element.style.display = display;
} // there's always a quick initial scrollbar, so wait to settle


function changeBordersIfScrollbar(elem) {
  setTimeout(function () {
    var hasScrollbar = elem.scrollHeight > elem.clientHeight;

    if (hasScrollbar) {
      elem.classList.add('scrollbar');
    } else {
      elem.classList.remove('scrollbar');
    }
  }, 250);
} // function initializePanels() {
//   if (notDoneYet) {
//     sections[initialSection].classList.add('shown')
//     asides.forEach(aside => {
//       aside.classList.add('shown')
//     })
//     asides[initialSection].classList.remove('shown')
//     articles[initialSection].classList.add('shown')
//     changeBordersIfScrollbar(sections[initialSection])        
//     notDoneYet = false
//   }
// }


var landscape = function landscape() {
  return window.innerWidth > breakpoint;
};

function scape() {
  return window.innerWidth > breakpoint;
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
/// widf
/// width detection!

var delay = 150;
var range = 'XXX';
var timeout = false;
var wDisplay = $id('#width');
var r = $id('#range');

function getDimensions() {
  var width = window.innerWidth;
  wDisplay.innerHTML = 'width: ' + width;

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
/// aQuery

function $all(elements) {
  return document.querySelectorAll(elements);
}

function $id(element) {
  return document.querySelector(element);
}

function $log(message) {
  console.log(message);
} //end aQuery