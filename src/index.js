import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/brands'
import './assets/scss/index.scss'
import Game from './js/classes/game.js'

const memoryItems = ['css3-alt', 'github', 'js-square', 'npm', 'sass', 'html5', 'node', 'stack-overflow', 'angular', 'codepen', 'docker', 'less']
let memoryGame

document.getElementById('resetButton').addEventListener('click', function () {
  memoryGame.resetGame()
})

document.querySelectorAll('[data-level]').forEach(e => {
  e.addEventListener('click', function (e) {
    initGame(e.target.dataset.level)
  })
})

/**
 * @function
 * @name initGame
 * @param {string} - The level select.
*/

function initGame (level) {
  let levelArray = []

  switch (level) {
    case 'easy':
      levelArray = memoryItems.slice(0, 4)
      break

    case 'medium':
      levelArray = memoryItems.slice(0, 8)
      break

    case 'hard':
      levelArray = memoryItems.slice(0, 10)
      break

    default:
      levelArray = memoryItems.slice(0, 12)
      break
  }

  memoryGame = new Game(levelArray, level)
  memoryGame.startGame()
}
