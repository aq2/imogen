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
  // console.log(elements.toString())
  // console.log(elements + ' switched')
}

function removeShowns(elements) {
  elements.forEach(element => {
    console.log('was ' + element.classList)
    element.classList.remove('shown')
    console.log('now ' + element.classList)

  })
  console.log('removed')
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

// activateAll()

if (window.innerWidth < 960) {
  activateAll()
}

onresize = () => {
  if (window.innerWidth < 960) {
    activateAll()
    // console.log('under')
  } else {
    // window has been resized up!
    // should now restore status quo
      // restore all showns
        // remove all shown panels and blurbs
        // show current panel and blurb
        // un-show current motto
        // can o' worms for freaky corner case 🥫

    // console.log('over')
    removeShowns(panels)
    removeShowns(blurbs)
    // panels[newPanel - 1].classList.add('shown')
    // console.log('old ' + oldPanel + ', new ' + newPanel)
    switchActives(panels, newPanel, newPanel)
    switchActives(blurbs, newPanel, newPanel)
    

    removeShowns(mottos)
    // show mottos for inactive panels - sigh
    // must be a better way of doing this!
    // the content either shows a blurb or a motto!
    switchActives(mottos, oldPanel, oldPanel)
  
  
  
  }
  // else restore status quo
  // deactivate all, reactive current activeNow
}

function activateAll() {
  panels.forEach(panel => {
    panel.classList.add('shown')
  })
  blurbs.forEach(blurb => {
    blurb.classList.add('shown')
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