define(function(){
    var GrassScene = function(){
        var grassAmount = [20,40,60,80,100]
        var grassScenes = new Array(grassAmount[Math.floor(Math.random() * grassAmount.length)]).fill(1)
        
        grassScenes = grassScenes.map(function(){
            return {
                x : canvas.width - Math.floor(Math.random() * canvas.width),
                y : canvas.height - Math.floor(Math.random() * 200),
                color : colors.randomGreen[Math.floor(Math.random() * colors.randomGreen.length)]
            }
        });

        function drawGrass() {
            // context.fillStyle = colors.darkGrass
            // context.beginPath()
            // context.arc(canvas.width / 2, canvas.height - (canvas.height /  3) - 3 + canvas.width, canvas.width, 0, Math.PI, true )
            // context.fill()

            context.fillStyle = colors.grass
            context.beginPath()
            context.arc(canvas.width / 2, canvas.height - (canvas.height /  3) + canvas.width, canvas.width, 0, Math.PI, true )
            context.fill()

            context.beginPath()
            context.arc(canvas.width / 3, canvas.height - (canvas.height /  3) + canvas.width, canvas.width, 0, Math.PI, true )
            context.fill()

            context.beginPath()
            context.arc(canvas.width, canvas.height - (canvas.height /  3) + canvas.width, canvas.width, 0, Math.PI, true )
            context.fill()
            
            grassScenes.forEach(function(scene){ 
                context.fillStyle = scene.color
                context.fillRect(scene.x, scene.y, 5, 5 )
            })
        }

        return {
            draw : drawGrass
        }
    }

return GrassScene
})