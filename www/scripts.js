/// panels

var oldPanel = 1
var newPanel = 1
const panels = document.querySelectorAll('.panel')
const blurbs = document.querySelectorAll('.blurb')
const mottos = document.querySelectorAll('.motto')

panels.forEach(panel => {
  panel.addEventListener('click', (e) => {
    let activeNow = panel.classList.contains('shown')
    
    if (!activeNow) {
      newPanel = parseInt(panel.dataset.idx)

      switchActives(panels, oldPanel, newPanel)
      switchActives(blurbs, oldPanel, newPanel)
      switchActives(mottos, newPanel, oldPanel)
      
      oldPanel = newPanel 
    }
  })
})

function switchActives(elements, oldID, newID, status='shown') {
  let elementOld = elements[oldID - 1]
  elementOld.classList.remove(status)
  let elementNew = elements[newID - 1]
  elementNew.classList.add(status)
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
