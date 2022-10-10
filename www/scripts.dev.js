"use strict";

/// panels
alert('hey');
var panels = document.querySelectorAll('.panel');
var blurbs = document.querySelectorAll('.blurb');
var insts = document.querySelectorAll('.inst');
panels.forEach(function (panel) {
  panel.addEventListener('click', function () {
    // get last char
    var panelID = panel.className.slice(-1);
    removeActiveClasses();
    panel.classList.add('active');
    var blurb = blurbs[panelID - 1];
    var active = blurb.classList.contains('active');
    var inst = insts[panelID - 1];
    addHiddenInsts();
    inst.classList.remove('shown');

    if (!active) {
      removeActiveBlurbs();
      blurb.classList.add('active');
    }
  });
});

function removeActiveClasses() {
  panels.forEach(function (panel) {
    panel.classList.remove('active');
  });
}

function removeActiveBlurbs() {
  blurbs.forEach(function (blurb) {
    blurb.classList.remove('active');
  });
}

function addHiddenInsts() {
  insts.forEach(function (inst) {
    inst.classList.add('shown');
  });
} //end panels
/// form


var labels = document.querySelectorAll('.form-control label');
labels.forEach(function (label) {
  label.innerHTML = label.innerText.split('').map(function (letter, idx) {
    return "<span style='transition-delay:".concat(idx * 20, "ms'>").concat(letter, "</span>");
  }).join('');
}); //end form
/// tooltip
// var tooltipSpan = document.getElementById('tooltip-span')
// window.onmousemove = function(e) {
//   var x = e.clientX
//   var y = e.clientY
//   tooltipSpan.style.top = (y + 20) + 'px'
//   tooltipSpan.style.left = (x + 20) + 'px'
// }
//end tooltip