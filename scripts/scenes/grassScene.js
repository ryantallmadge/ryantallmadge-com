define(function() {
  function GrassScene(canvas) {
    const grassAmount = [20, 40, 60, 80, 100]
    let grassScenes = new Array(
      grassAmount[Math.floor(Math.random() * grassAmount.length)]
    ).fill(1)

    grassScenes = grassScenes.map(() => {
      return {
        x: canvas.width - Math.floor(Math.random() * canvas.width),
        y: canvas.height - Math.floor(Math.random() * 200)
      }
    })

    function drawGrass(context, colors) {
      context.fillStyle = colors.grass
      context.beginPath()
      context.arc(
        canvas.width / 2,
        canvas.height - canvas.height / 3 + canvas.width,
        canvas.width,
        0,
        Math.PI,
        true
      )
      context.fill()

      context.beginPath()
      context.arc(
        canvas.width / 3,
        canvas.height - canvas.height / 3 + canvas.width,
        canvas.width,
        0,
        Math.PI,
        true
      )
      context.fill()

      context.beginPath()
      context.arc(
        canvas.width,
        canvas.height - canvas.height / 3 + canvas.width,
        canvas.width,
        0,
        Math.PI,
        true
      )
      context.fill()

      grassScenes.forEach(scene => {
        context.fillStyle =
          colors.randomGreen[
            Math.floor(Math.random() * colors.randomGreen.length)
          ]
        context.fillRect(scene.x, scene.y, 5, 5)
      })
    }

    return {
      draw: drawGrass
    }
  }

  return GrassScene
})
