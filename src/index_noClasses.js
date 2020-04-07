import './assets/scss/index.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/brands'

// Cards array methods

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5)

const arrCards = ['css3-alt', 'github', 'js-square', 'npm', 'sass', 'html5', 'node', 'stack-overflow']
const finalArray = shuffle([...arrCards, ...arrCards])

// Game logic

const cards = document.querySelectorAll('.card')
let firstCard = null

cards.forEach((e, i) => {
  const dataCard = finalArray[i]

  e.dataset.cardId = dataCard
  e.querySelector('.card__scene').addEventListener('click', function () {
    this.classList.add('is-flipped')
    firstCard
      ? checkMatch(dataCard)
      : firstCard = dataCard
  })
  e.querySelector('.card__face--back').innerHTML = `<i class="fab fa-${finalArray[i]}"></i>`
})

// Checkea si hay match

function checkMatch (card) {
  if (card === firstCard) {
    firstCard = null
  } else {
    setTimeout(() => {
      backOffCards(card)
      backOffCards(firstCard)
      firstCard = null
    }, 1000)
  }
}

// Vuelve a girar las cartas erroneas

function backOffCards (card) {
  document.querySelectorAll(`[data-card-id="${card}"]`).forEach(el => {
    el.querySelector('.card__scene').classList.remove('is-flipped')
  })
}
