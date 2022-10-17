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

/// meeja

// let oldWidth = window.innerWidth

// if (window.innerWidth < 960) {
//   activateAll()
// }

// todo suspect much easier changing classes in media queries
// onresize = () => {
//   let newWidth = window.innerWidth

//   if ((oldWidth > 960) && (newWidth < 960)) {
//     activateAll()
//   } 
  
//   if ((oldWidth < 960) && (newWidth > 960)) {
//     removeShowns(panels)
//     removeShowns(blurbs)
//     switchActives(panels, newPanel, newPanel)
//     switchActives(blurbs, newPanel, newPanel)
//     mottos[newPanel - 1].classList.remove('shown')
//   }
//   oldWidth = newWidth
// }


// function removeShowns(elements) {
//   elements.forEach(element => {
//     element.classList.remove('shown')
//   })
//   console.log('removed')
// }

// function activateAll() {
//   panels.forEach(panel => {
//     panel.classList.add('shown')
//   })
//   blurbs.forEach(blurb => {
//     blurb.classList.add('shown')
//   })
//   mottos.forEach(motto => {
//     motto.classList.add('shown')
//   })
// }

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