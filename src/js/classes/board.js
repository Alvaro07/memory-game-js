import Card from './card.js'
import { chronoStop } from '../utils/chronometer'

export default class Board {
  constructor (items, game) {
    this.items = items
    this.cards = []
    this.firstCard = null
    this.game = game
    this.finish = false
    this.boardGame = document.getElementById('boardGame')
  }

  createBoard () {
    this.items.forEach(e => this.cards.push(new Card(e)))
    this.boardGame.innerHTML = this.cards.map(e => e.template).join('')
    this.setBoardSize(this.game.level)

    document.querySelectorAll('.card').forEach(e => {
      e.querySelector('.card__face--front').addEventListener('click', () => {
        this.flipCard(e)
      })
    })
  }

  flipCard (e) {
    const name = e.dataset.card
    e.classList.add('is-flip')
    e.querySelector('.card__scene').classList.add('is-flipped')
    this.firstCard
      ? this.checkMatch(name)
      : this.firstCard = name
  }

  checkMatch (name) {
    if (name === this.firstCard) {
      this.firstCard = null
      this.game.setAttemp()
      setTimeout(() => {
        this.setSuccesCard(name)
        this.checkFinish()
      }, 300)
    } else {
      this.game.setAttemp()
      this.boardGame.classList.add('is-disabled')
      this.backOffCards(name, this.firstCard)
    }
  }

  checkFinish () {
    if (document.querySelectorAll('.is-success').length === this.items.length) {
      chronoStop()
      this.finish = true
    }
  }

  backOffCards (card, firstCard) {
    const cards = [...document.querySelectorAll(`[data-card="${card}"].is-flip`), ...document.querySelectorAll(`[data-card="${firstCard}"].is-flip`)]

    setTimeout(() => cards.forEach(el => el.classList.add('shake-animation')), 250)
    setTimeout(() => {
      cards.forEach(el => {
        el.classList.remove('is-flip', 'shake-animation')
        el.querySelector('.card__scene').classList.remove('is-flipped')
      })

      this.firstCard = null
      this.boardGame.classList.remove('is-disabled')
    }, 1000)
  }

  setSuccesCard (card) {
    document.querySelectorAll(`[data-card="${card}"]`).forEach(el => {
      el.classList.add('heart-beat-animation')
      el.querySelector('.card__face--back').classList.add('is-success')
    })
  }

  setBoardSize (level) {
    if (level === 'hard') {
      this.game.boardWrap.classList.add('is-medium')
    } else if (level === 'expert') {
      this.game.boardWrap.classList.add('is-big')
    }
  }
}
