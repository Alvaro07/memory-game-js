import Board from './board.js'
import { chronoStart, chronoReset } from '../utils/chronometer'

export default class Game {
  constructor (items, level) {
    this.items = items
    this.boardArray = this.setBoardArray()
    this.attemps = 0
    this.level = level
    this.boardWrap = document.getElementById('boardWrap')
    this.levelSetup = document.getElementById('levelSetup')
  }

  setBoardArray () {
    return [...this.items, ...this.items].sort(() => Math.random() - 0.5)
  }

  startGame () {
    new Board(this.boardArray, this).createBoard()
    chronoStart()
    this.boardWrap.classList.remove('is-hidden')
    this.levelSetup.classList.add('is-hidden')
  }

  resetGame () {
    const flipsCards = document.querySelectorAll('.is-flipped')
    flipsCards.forEach(e => {
      e.classList.remove('is-flipped')
    })

    setTimeout(() => {
      this.setAttemp(true)
      this.boardWrap.classList.add('is-hidden')
      this.boardWrap.classList.remove('is-big', 'is-medium')
      this.levelSetup.classList.remove('is-hidden')
      chronoReset()
    }, flipsCards.length ? 500 : 0)
  }

  setAttemp (bol) {
    bol
      ? this.attemps = 0
      : ++this.attemps
    document.getElementById('gameAttemps').innerHTML = this.attemps
  }
}
