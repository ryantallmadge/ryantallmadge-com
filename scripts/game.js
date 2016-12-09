var canvas      = document.getElementById("game")
var context     = canvas.getContext("2d")
var frameRate   = 1000 / 30

context.canvas.width  = window.innerWidth
context.canvas.height = window.innerHeight

var Ball = function(){
    var ballW = 10
    var ballMovement = Math.floor(Math.random() * 10) + 1
    var ballPosition = canvas.width / 2

    function drawBall(){
        ballPosition = ballPosition - ballMovement
        if(ballPosition <= 0){
            ballMovement = -ballMovement
        }
        if(ballPosition >= canvas.width - ballW){
            ballMovement = -ballMovement
        }
        context.fillStyle = "blue"
        context.beginPath()
        context.arc(ballPosition, 50, ballW, 0, Math.PI * 2, true )
        context.fill()
    }

    return {
        draw : drawBall
    }
}

var Paddles = function(){
    var paddleW = 10
    var paddleH = 100
    var paddles = {}
    var paddleMovement = Math.floor(Math.random() * 10) + 1
    var paddlePosition = canvas.height / 2
    function drawPaddles(wall){
        paddlePosition = paddlePosition - paddleMovement
        if(paddlePosition <= 0){
            paddleMovement = -paddleMovement
        }
        if(paddlePosition >= canvas.height - paddleH){
            paddleMovement = -paddleMovement
        }
        context.fillStyle = "red"
        var yPosition = 0;
        context.fillRect(wall,paddlePosition, paddleW, paddleH )
    }
    
    paddles["left"] = function(y){
        var wall = 0;
        drawPaddles(0)
    }

    paddles["right"] = function(){
        var wall = canvas.width - 10;
        drawPaddles(wall)
    }

    return {
        updatePaddle : function(paddle, y){
            paddles[paddle]
        },
        draw : function(){
            paddles.left()
            paddles.right()
        },
        "paddles" :  paddles
    }
}

var paddles = new Paddles()
var ball    = new Ball()

function drawScene(scenes){
    if(!Array.isArray(scenes)){
        console.error("Must have an array of scenes to render")
        return;
    }
    context.clearRect(0, 0, canvas.width, canvas.height)
    scenes.forEach(function(scene){
        scene.draw()
    })
}

window.onload = function(){
    var scenes = [new Paddles(), new Ball()]
    //drawScene(scenes)

    function startScene(){
        setTimeout(function(){
            window.requestAnimationFrame(function(){
                drawScene(scenes)
                startScene()
            })
        },frameRate)
    }
WebFont.active(function(){
    drawScene(scenes)
    startScene()
})
}