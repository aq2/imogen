/// panels

var activePanel = 1
const panels = document.querySelectorAll('.panel')
const blurbs = document.querySelectorAll('.blurb')
const mottos = document.querySelectorAll('.motto')

// or just addListener on non-active panels??

panels.forEach(panel => {
  panel.addEventListener('click', (e) => {
    let activeNow = panel.classList.contains('active')
    
    if (!activeNow) {
      let panelID = parseInt(panel.dataset.idx)
   

      // switchPanels(activePanelID)
      let panelOld = panels[activePanel-1]
      panelOld.classList.remove('active')
      panel.classList.add('active')

      let blurbOld = blurbs[activePanel - 1]
      blurbOld.classList.remove('active')
      let blurbNew = blurbs[panelID - 1]
      blurbNew.classList.add('active')

      let mottoOld = mottos[activePanel - 1]
      mottoOld.classList.add('shown')
      let mottoNew = mottos[panelID - 1]
      mottoNew.classList.remove('shown')

      activePanel = panelID 
    }
  })
})

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

/// meeja

// activateAll()

if (window.innerWidth < 960) {
  activateAll()
}

onresize = () => {
  if (window.innerWidth < 960) {
    activateAll()
  }
  // else restore status quo
  // deactivate all, reactive current activeNow
}

function activateAll() {
  panels.forEach(panel => {
    panel.classList.add('active')
  })
  blurbs.forEach(blurb => {
    blurb.classList.add('active')
  })
}

// // or do we just toggle them all???
// if (w < 960) {
//   panels.forEach(panel => {
//     panel.classList.add('active')
//   })
//   blurbs.forEach(blurb => {
//     blurb.classList.add('active')
//   })
// }

      //end meeja