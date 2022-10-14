/// panels

const panels = document.querySelectorAll('.panel')
const blurbs = document.querySelectorAll('.blurb')
const mottos = document.querySelectorAll('.motto')

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    // get last char
    let panelID = panel.className.slice(-1)
    removeActiveClasses()
    panel.classList.add('active')
    let blurb = blurbs[panelID - 1]
    let active = blurb.classList.contains('active')
    let motto = mottos[panelID - 1]
    addHiddenMottos()
    motto.classList.remove('shown')
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

/// tooltip

// let tooltipShown = 0
// let tooltip = document.getElementById('tooltip')

// panels.forEach(panel => {
//   panel.addEventListener('mouseover', (e) => {
//     if (!panel.classList.contains('active') && (tooltipShown < 5)) {
//       let x = e.clientX
//       let y = e.clientY
//       tooltip.style.left = x + 5 + 'px'
//       tooltip.style.top = y + 10 + 'px'
//       tooltip.classList.add('shown')
//       tooltipShown++
//     } else {
//       tooltip.classList.remove('shown')      
//     }
//     console.log(tooltipShown)
//     if (tooltipShown == 5) {
//       console.log('gone')
//       tooltip.classList.add('hide')
//       tooltip.style.left = '-1000005px'
      
//     }
//   })
// })

// if (tooltipShown >= 5) {
//   tooltip.classList.add('hide')
//   tooltip.style.left = '-1000005px'
//   console.log('hide')
// }
//end tooltip