/// panels

const panels = document.querySelectorAll('.panel')
const blurbs = document.querySelectorAll('.blurb')
const mottos = document.querySelectorAll('.motto')

panels.forEach(panel => {
  panel.addEventListener('click', (e) => {
    let active = panel.classList.contains('active')
    
    if (!active) {
      let panelID = parseInt(panel.dataset.idx)
      let blurb = blurbs[panelID - 1]
      removeActiveBlurbs()
      
      removeActiveClasses()
      panel.classList.add('active')
      let motto = mottos[panelID - 1]
      addHiddenMottos()
      motto.classList.remove('shown')
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

function addHiddenMottos() {
  mottos.forEach(motto => {
    motto.classList.add('shown')
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

