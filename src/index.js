import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/brands'
import './assets/scss/index.scss'
import Game from './js/classes/game.js'

const memoryItems = ['css3-alt', 'vuejs', 'github', 'js-square', 'npm', 'sass', 'html5', 'react', 'node', 'stack-overflow', 'angular', 'codepen', 'docker', 'less', 'yarn']
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
  const memoryItemSort = memoryItems.sort(() => Math.random() - 0.5)

  switch (level) {
    case 'easy':
      levelArray = memoryItemSort.slice(0, 4)
      break

    case 'medium':
      levelArray = memoryItemSort.slice(0, 8)
      break

    case 'hard':
      levelArray = memoryItemSort.slice(0, 10)
      break

    default:
      levelArray = memoryItemSort.slice(0, 15)
      break
  }

  memoryGame = new Game(levelArray, level)
  memoryGame.startGame()
}
