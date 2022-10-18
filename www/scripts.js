/// panels

var oldPanelID = 0
var newPanelID = 0
const panels = document.querySelectorAll('.panel')
const blurbs = document.querySelectorAll('.blurb')
const mottos = document.querySelectorAll('.motto')

panels.forEach(panel => {
  if (window.innerWidth > 980) { 
    panel.addEventListener('click', (e) => {
      let activeNow = panel.classList.contains('shown')
      if (!activeNow) {
        newPanelID = parseInt(panel.dataset.idx)
        switchActives(panels, oldPanelID, newPanelID)
        switchActives(blurbs, oldPanelID, newPanelID)
        switchActives(mottos, newPanelID, oldPanelID)        
        oldPanelID = newPanelID
        // todo check for scrollbar and webkit styles?
      }
    })
  }
})

function switchActives(elements, oldID, newID) {
  if (window.innerWidth > 980) {
    elements[oldID].classList.remove('shown')
    elements[newID].classList.add('shown')
  }
}

//end panels

/// form

const labels = document.querySelectorAll('.form-input label')

labels.forEach(label => {
  label.innerHTML = 
    label.innerText
      .split('')
      .map((letter, idx) => `<span style='transition-delay:${idx*20}ms'>${letter}</span>`)
      .join('')
})


//end form


/// scrollbar detection

const scrollbarVisible = (element) => {
  return element.scrollHeight > element.clientHeight;
}

const panel = panels[newPanelID]

// console.log('scrollbar: ' + scrollbarVisible(panel))

//end scrollbar