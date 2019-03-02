define(function() {
  function SkyScene(canvas) {
    const numberOfClouds = 20
    let clouds = new Array(numberOfClouds).fill(1)
    const maxCloudSize = 40
    const minCloudSize = 20
    let mouseYMovement = 0
    let mouseXMovement = 0

    function getMousePos(event) {
      mouseYMovement = event.clientY / 100
      mouseXMovement = event.clientX / 100
    }

    if (window.ondevicemotion) {
      window.ondevicemotion = function(event) {
        getMousePos({
          clientY: event.accelerationIncludingGravity.y,
          clientX: event.accelerationIncludingGravity.x
        })
      }
    } else {
      canvas.addEventListener('mousemove', getMousePos)
    }

    clouds = clouds.map(function(item) {
      const size = Math.floor(Math.random() * maxCloudSize)
      return {
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor((Math.random() * canvas.height) / 3),
        speed: Math.floor(Math.random() * 1.3) + 0.5,
        size: size > minCloudSize ? size : minCloudSize
      }
    })

    function drawCircle(x, y, size, context) {
      context.beginPath()
      context.arc(x, y, size, 0, Math.PI * 2, true)
      context.fill()
    }

    function drawSky(context, colors) {
      context.fillStyle = 'rgb(253, 207, 65)'
      drawCircle(-10, -10, 120, context)

      clouds.forEach(function(cloud) {
        const xStart = cloud.x - mouseXMovement
        cloud.x = cloud.x + cloud.speed
        if (cloud.x - 100 >= canvas.width) cloud.x = -100
        const yStart = cloud.y + mouseYMovement

        context.fillStyle = 'rgba(0,0,0,0.5)'
        drawCircle(xStart + 4, yStart + 4, cloud.size, context)
        drawCircle(
          xStart + (10 - (cloud.size + maxCloudSize)) + 2,
          yStart + 10 + 4,
          cloud.size,
          context
        )
        drawCircle(
          xStart + (45 - (cloud.size + maxCloudSize)) + 2,
          yStart + 15 + 4,
          cloud.size,
          context
        )

        context.fillStyle = colors.clouds
        drawCircle(xStart, yStart, cloud.size, context)
        drawCircle(
          xStart + (15 - (cloud.size + maxCloudSize)),
          yStart - 10,
          cloud.size,
          context
        )
        drawCircle(
          xStart + (10 - (cloud.size + maxCloudSize)),
          yStart + 10,
          cloud.size,
          context
        )
        drawCircle(
          xStart + (25 - (cloud.size + maxCloudSize)),
          yStart - 5,
          cloud.size,
          context
        )
        drawCircle(
          xStart + (45 - (cloud.size + maxCloudSize)),
          yStart - 15,
          cloud.size,
          context
        )
        drawCircle(
          xStart + (45 - (cloud.size + maxCloudSize)),
          yStart + 15,
          cloud.size,
          context
        )
      })
    }

    return {
      draw: drawSky
    }
  }

  return SkyScene
})
