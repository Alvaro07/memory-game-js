import Board from './board.js'

export default class Game {
  constructor (items) {
    this.items = items
    this.boardArray = this.setBoardArray()
    this.attemps = 0
  }

  setBoardArray () {
    return [...this.items, ...this.items].sort(() => Math.random() - 0.5)
  }

  startGame () {
    const memoryBoard = new Board(this.boardArray, this)
    memoryBoard.createBoard()
  }

  resetGame () {
    const flipsCards = document.querySelectorAll('.is-flipped')
    flipsCards.forEach(e => {
      e.classList.remove('is-flipped')
    })

    this.setAttemp(true)

    setTimeout(() => {
      this.boardArray = this.setBoardArray()
      this.startGame()
    }, flipsCards.length ? 500 : 0)
  }

  setAttemp (bol) {
    bol
      ? this.attemps = 0
      : ++this.attemps
    document.getElementById('gameAttemps').innerHTML = this.attemps
  }
}
