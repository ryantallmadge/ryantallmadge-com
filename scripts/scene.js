requirejs(
  [
    'scenes/skyScene',
    'scenes/grassScene',
    'scenes/comingSoonScene',
    'scenes/planeScene'
  ],
  (SkyScene, GrassScene, ComingSoonScene, PlaneScene) => {
    const colors = {
      sky: 'rgb(135, 206, 235)',
      clouds: 'rgb(255, 255, 255)',
      grass: 'rgb(1, 166, 17)',
      darkGrass: 'rgb(0, 92, 9)',
      reds: ['red', 'darkred', 'lightred'],
      randomGreen: [
        'rgb(0,92,9)',
        'rgb(0,104,10)',
        'rgb(0,123,12)',
        'rgb(1,142,14)'
      ],
      plane: 'rgb(127, 133, 131)'
    }

    const canvas = document.getElementById('scene')
    const context = canvas.getContext('2d')
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight
    const frameRate = 1000 / 30

    function drawScene(scenes) {
      context.clearRect(0, 0, canvas.width, canvas.height)
      scenes.forEach(scene => {
        scene.draw(context, colors)
      })
    }

    function startScene(scenes) {
      setTimeout(() => {
        window.requestAnimationFrame(() => {
          drawScene(scenes)
          startScene(scenes)
        })
      }, frameRate)
    }

    const scenes = [SkyScene(canvas), GrassScene(canvas), PlaneScene(canvas)]
    WebFontConfig = {
      active: function() {
        scenes.push(ComingSoonScene(canvas))
      },
      google: {
        families: ['Pacifico', 'Press Start 2P']
      }
    }
    WebFont.load(WebFontConfig)

    startScene(scenes)
  }
)
