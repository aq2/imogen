/// panels

const panels = document.querySelectorAll('.panel')
const blurbs = document.querySelectorAll('.blurb')
const insts = document.querySelectorAll('.inst')

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    // get last char
    let panelID = panel.className.slice(-1)
    removeActiveClasses()
    panel.classList.add('active')
    let blurb = blurbs[panelID - 1]
    let active = blurb.classList.contains('active')
    let inst = insts[panelID - 1]
    addHiddenInsts()
    inst.classList.remove('shown')
    if (!active) {
      removeActiveBlurbs()
      blurb.classList.add('active')
    }
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}

function removeActiveBlurbs() {
  blurbs.forEach(blurb => {
    blurb.classList.remove('active')
  })
}

function addHiddenInsts() {
  insts.forEach(inst => {
    inst.classList.add('shown')
  })
}

//end panels

/// form

const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
  label.innerHTML = 
    label.innerText
      .split('')
      .map((letter, idx) => `<span style='transition-delay:${idx*20}ms'>${letter}</span>`)
      .join('')
    })

//end form


/// tooltip

// var tooltipSpan = document.getElementById('tooltip-span')

// window.onmousemove = function(e) {
//   var x = e.clientX
//   var y = e.clientY
//   tooltipSpan.style.top = (y + 20) + 'px'
//   tooltipSpan.style.left = (x + 20) + 'px'
// }

//end tooltip