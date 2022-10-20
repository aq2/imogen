/// aQuery

function $all(elements) {
  return document.querySelectorAll(elements)
}

function $id(element) {
  return document.querySelector(element)
}

//end aQuery

/// sections

var oldSectionID = 0
var newSectionID = 0
const sections = $all('section')
const articles = $all('article')
const asides = $all('aside')

sections.forEach(section => {
  if (window.innerWidth > 980) { 
    section.addEventListener('click', (e) => {
      let activeNow = section.classList.contains('shown')
      if (!activeNow) {
        newSectionID = parseInt(section.dataset.idx)
        switchActives(sections, oldSectionID, newSectionID)
        switchActives(articles, oldSectionID, newSectionID)
        switchActives(asides, newSectionID, oldSectionID)        
        oldSectionID = newSectionID
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

//end sections

/// form

const labels = $all('label')

labels.forEach(label => {
  label.innerHTML = 
    label.innerText
      .split('')
      .map((letter, idx) => `<span style='transition-delay:${idx*20}ms'>${letter}</span>`)
      .join('')
})

const emailInput = $id('#email')
emailInput.addEventListener('click', (e) => {
  console.log(e.target)
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

const section = sections[newSectionID]

// console.log('scrollbar: ' + scrollbarVisible(section))

//end scrollbar