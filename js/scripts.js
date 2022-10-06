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