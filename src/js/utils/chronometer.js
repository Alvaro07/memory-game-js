let start = 0
let end = 0
let diff = 0
let timerID = 0

let sec
let min
let hr

function chrono () {
  end = new Date()
  diff = end - start
  diff = new Date(diff)

  sec = diff.getSeconds()
  min = diff.getMinutes()
  hr = diff.getHours() - 1

  if (min < 10) {
    min = '0' + min
  }
  if (sec < 10) {
    sec = '0' + sec
  }

  document.getElementById('chronotime').innerHTML = `${hr}:${min}:${sec}`
  timerID = setTimeout(() => chrono(), 1000)
}

function chronoStart () {
  start = new Date()
  chrono()
}

function chronoReset () {
  document.getElementById('chronotime').innerHTML = '0:00:00:000'
  start = new Date()
}

function chronoStop () {
  clearTimeout(timerID)
}

function getTime () {
  return `${hr}:${min}:${sec}`
}

export { chronoStart, chronoStop, chronoReset, getTime }
