import Board from './board.js'

export default class Game {
  constructor (items, level) {
    this.items = items
    this.boardArray = this.setBoardArray()
    this.attemps = 0
    this.level = level
  }

  setBoardArray () {
    return [...this.items, ...this.items].sort(() => Math.random() - 0.5)
  }

  startGame () {
    console.log(this.boardArray)
    new Board(this.boardArray, this).createBoard()

    document.getElementById('boardWrap').classList.remove('is-hidden')
    document.getElementById('levelSetup').classList.add('is-hidden')
  }

  resetGame () {
    const flipsCards = document.querySelectorAll('.is-flipped')
    flipsCards.forEach(e => {
      e.classList.remove('is-flipped')
    })

    this.setAttemp(true)

    setTimeout(() => {
      document.getElementById('boardWrap').classList.add('is-hidden')
      document.getElementById('levelSetup').classList.remove('is-hidden')
    }, flipsCards.length ? 500 : 0)
  }

  setAttemp (bol) {
    bol
      ? this.attemps = 0
      : ++this.attemps
    document.getElementById('gameAttemps').innerHTML = this.attemps
  }
}