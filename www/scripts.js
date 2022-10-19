/// aQuery

function $all(elements) {
  return document.querySelectorAll(elements)
}

function $id(element) {
  return document.querySelector(element)
}

//end aQuery

/// panels

var oldPanelID = 0
var newPanelID = 0
const panels = $all('.panel')
const blurbs = $all('.blurb')
const mottos = $all('.motto')

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

const labels = $all('.form-input label')

labels.forEach(label => {
  label.innerHTML = 
    label.innerText
      .split('')
      .map((letter, idx) => `<span style='transition-delay:${idx*20}ms'>${letter}</span>`)
      .join('')
})

//end form

/// width detection!

let delay = 150
let range = 'XXX'
let timeout = false

const w = $id('#width')
const r = $id('#range')

function getDimensions() {
  let width = window.innerWidth
  w.innerHTML = 'width: ' + width
  
  if (width > 1500) {
    range = '1500+'
  } else if (width > 1100) { 
    range = '1100 - 1500'
  } else if (width > 980) {
    range = '980 -1100'
  } else if (width > 880) {
    range = '806 - 980'
  } else if (width > 806) {
    range = '686 - 806'
  } else if (width > 686) {
    range = '560 - 686'
  } else if (width > 560) {
    range = '460 - 560'
  } else if (width > 460) {
    range = '460 - 560'
  } else if (width > 388) {
    range = '388 - 460'
  } else {
    range = 'teeny'
  }
  
  r.innerHTML = 'range: ' + range
}

window.addEventListener('resize', () => {
  clearTimeout(timeout)
  timeout = setTimeout(getDimensions, delay)
})

getDimensions()


//end width detection

/// scrollbar detection

const scrollbarVisible = (element) => {
  return element.scrollHeight > element.clientHeight;
}

const panel = panels[newPanelID]

// console.log('scrollbar: ' + scrollbarVisible(panel))

//end scrollbar