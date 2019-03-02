define(function() {
  function PlaneScene(canvas) {
    const planeMovmentSpeed = Math.floor(Math.random() * (10 - 1) + 1)
    let planeX = canvas.width + 200
    let planeY = Math.floor((Math.random() * canvas.height) / 3)
    let arrowUpDown = 0

    document.addEventListener('keydown', e => {
      if (e.keyCode == 38) {
        arrowUpDown = arrowUpDown - 1
      }
      if (e.keyCode == 40) {
        arrowUpDown = arrowUpDown + 1
      }
    })

    document.addEventListener('keyup', e => {
      arrowUpDown = 0
    })

    function drawPlane(context, colors) {
      planeX = planeX - planeMovmentSpeed
      if (planeX <= -100) {
        planeX = canvas.width + Math.floor(Math.random() * (2000 - 200) + 200)
        planeY = Math.floor((Math.random() * canvas.height) / 3)
        arrowUpDown = 0
      }
      planeY = planeY - arrowUpDown
      const x = planeX
      const y = planeY

      const reds = colors.reds
      context.fillStyle = reds[Math.floor(Math.random() * reds.length)]

      context.beginPath()
      context.arc(x + 100, y, 7, 0, Math.PI * 2, true)
      context.fill()

      context.fillStyle = colors.plane
      context.beginPath()
      context.moveTo(x, y - 10)
      context.lineTo(x - 20, y + 10)
      context.lineTo(x + 10, y + 10)
      context.closePath()
      context.fill()

      context.fillRect(x, y - 10, 100, 20)

      context.fillStyle = 'black'
      context.fillRect(x, y - 10, 15, 5)
      context.save()
      ;(() => {
        const x = planeX + 30
        const y = planeY - 18
        const width = 10
        const height = 50
        context.beginPath()

        context.translate(x + width / 2, y + height / 2)
        context.rotate((-65 * Math.PI) / 180)
        context.rect(-width / 2, -height / 2, width, height)
        context.fillStyle = colors.plane
        context.fill()
      })()
      context.restore()
      context.save()
      ;(() => {
        const x = planeX + 67
        const y = planeY - 29
        const width = 15
        const height = 50
        context.beginPath()
        context.translate(x + width / 2, y + height / 2)
        context.rotate((65 * Math.PI) / 180)
        context.rect(-width / 2, -height / 2, width, height)
        context.fillStyle = colors.plane
        context.fill()
      })()

      context.restore()
    }

    return {
      draw: drawPlane
    }
  }

  return PlaneScene
})
