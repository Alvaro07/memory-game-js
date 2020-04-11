import Card from './card.js'
import { chronoStop } from '../utils/chronometer'

export default class Board {
  constructor (items, game) {
    this.items = items
    this.cards = []
    this.firstCard = null
    this.game = game
    this.finish = false
  }

  createBoard () {
    this.items.forEach(e => this.cards.push(new Card(e)))
    document.getElementById('boardGame').innerHTML = this.cards.map(e => e.template).join('')
    this.setBoardSize(this.game.level)

    document.querySelectorAll('.card').forEach(e => {
      e.querySelector('.card__scene').addEventListener('click', () => {
        this.flipCard(e)
      })
    })
  }

  flipCard (e) {
    const name = e.dataset.card
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
      const board = document.getElementById('boardGame')
      this.game.setAttemp()
      board.classList.add('is-disabled')

      setTimeout(() => {
        this.backOffCards(name)
        this.backOffCards(this.firstCard)
        this.firstCard = null
        board.classList.remove('is-disabled')
      }, 1000)
    }
  }

  checkFinish () {
    if (document.querySelectorAll('.is-success').length === this.items.length) {
      chronoStop()
      this.finish = true
    }
  }

  backOffCards (card) {
    document.querySelectorAll(`[data-card="${card}"]`).forEach(el => {
      el.querySelector('.card__scene').classList.remove('is-flipped')
    })
  }

  setSuccesCard (card) {
    document.querySelectorAll(`[data-card="${card}"]`).forEach(el => {
      el.querySelector('.card__face--back').classList.add('is-success')
    })
  }

  setBoardSize (level) {
    if (level === 'hard') {
      document.getElementById('boardWrap').classList.add('is-medium')
    } else if (level === 'expert') {
      document.getElementById('boardWrap').classList.add('is-big')
    }
  }
}
