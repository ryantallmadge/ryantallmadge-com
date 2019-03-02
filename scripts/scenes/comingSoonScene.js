define(function() {
  function ComingSoonScene(canvas) {
    let showNameCount = 40
    let startLetter = 0
    const name = 'Ryan Tallmadge'

    function showName() {
      if (showNameCount) {
        showNameCount--
        return showNameCount % 5 === 0 ? '' : '|'
      }
      if (startLetter < name.length) {
        let returnName = ''
        for (let i = 0; i < startLetter; i++) {
          returnName += name[i]
        }
        startLetter++
        return returnName + '|'
      }
      return name
    }

    return {
      draw: context => {
        const name = showName()

        context.fillStyle = 'white'
        context.font = "1em 'Press Start 2P'"
        context.fillText(name, canvas.width - 250, canvas.height - 50)
      }
    }
  }

  return ComingSoonScene
})
