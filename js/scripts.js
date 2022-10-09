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


///font switcher

// const header = document.getElementsByTagName('header')[0]
// const title = document.getElementById('title')
// const h2s = document.querySelectorAll('h2')

// const fonts = [
//   'Cardo', 'Yeseva One', 'Playfair Display'
// ]

// let currentFont = 0

// header.addEventListener('click', () => {
//   currentFont++
//   if (currentFont > fonts.length - 1) {
//     currentFont = 0
//   }
//   title.style.fontFamily = fonts[currentFont]
//   h2s.forEach(head => {
//     head.style.fontFamily = fonts[currentFont]
//   })
//   alert('font is now ' + fonts[currentFont])
// })

//end font switcher

///testimonial

const testimonialContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const punter = document.querySelector('.punter')


const testimonials = [
  {
    name: 'S.H.',
    text: 'Classes are enjoyable and gently challenging. I always come away with a strong sense of achievement and renewed calm.'
  },
  {
    name: 'N.C.',
    text: "It's been great online too. Imogen is such a lovely, patient, fun and professional teacher. Highly recommended."
  },
  {
    name: 'E.T.',
    text: "I've been doing yoga for 40 years and Dru is the most adaptable and flexible that I have experienced. It suits all bodies and minds!"
  },
  {
    name: 'G.M.',
    text: 'After attending many yoga classes over nearly 40 years, these are the best classes I have ever been to. Apart from the improved flexibility and the increased vitality and clarity of mind that the classes give, there is a sense of pure joy in taking part'
  },
  {
    name: 'C.F.',
    text: 'Dru is a very gentle way of connecting to your body stretching and balancing. Classes are fun and engaging.'
  }
]

let idx = 1

function updateTestimonial() {
  const { name, text } = testimonials[idx]
  testimonial.innerHTML = '"' + text + '"'
  punter.innerHTML = name

  idx++
  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

// setInterval(updateTestimonial, 10000)

//end testimonial


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