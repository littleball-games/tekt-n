const loop = require('lb-loop')

const init = () => {
  window.removeEventListener('DOMContentLoaded', init)

  const width = 800
  const height = 400

  const canvas = document.querySelectorAll('canvas')[0]
  const ctx = canvas.getContext('2d')

  canvas.width = width
  canvas.height = height

  const game = loop({
    update: () => {
    },
    render: () => {
      ctx.fillRect(Math.random() * width, Math.random() * height, 10, 10)
    }
  })

  game.start()
}

window.addEventListener('DOMContentLoaded', init)
