import Game from './js/game.js'
import './assets/scss/index.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/brands'

const memoryItems = ['css3-alt', 'github', 'js-square', 'npm', 'sass', 'html5', 'node', 'stack-overflow']
const memoryGame = new Game(memoryItems)
memoryGame.startGame()

document.getElementById('resetButton').addEventListener('click', function () {
  memoryGame.resetGame()
})
