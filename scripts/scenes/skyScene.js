define(function () {

var SkyScene = function(){
    var numberOfClouds = 20
    var clouds = new Array(numberOfClouds).fill(1)
    var maxCloudSize = 40
    var minCloudSize = 20
    var mouseYMovement = 0
    var mouseXMovement = 0
    function getMousePos(event) {
        var rect = canvas.getBoundingClientRect();
        mouseYMovement = event.clientY / 100
        mouseXMovement = event.clientX / 100
    }
    canvas.addEventListener('mousemove',getMousePos);

    clouds = clouds.map(function(item){
        var size = Math.floor(Math.random() * maxCloudSize)
        return {
                x : Math.floor(Math.random() * canvas.width), 
                y : Math.floor(Math.random() * canvas.height / 3),
                speed : Math.floor(Math.random() * 1.3) + 0.5,
                size : (size > minCloudSize) ? size : minCloudSize
            }
    });

    function drawCloudCircle(x,y, size){
            context.beginPath()
            context.arc(x, y, size, 0, Math.PI * 2, true )
            context.fill()
    }
    
    function drawSky() {
        var sunColors = [ "rgb(253, 207, 65)"]
        context.fillStyle = sunColors[Math.floor(Math.random() * sunColors.length)]
        drawCloudCircle(-10, -10,120)

        clouds.forEach(function(cloud){
            var xStart = cloud.x  + mouseXMovement
            cloud.x = cloud.x - cloud.speed
            if(cloud.x + 100 <= 0) cloud.x = canvas.width + 100
            var yStart = cloud.y + mouseYMovement

            context.fillStyle = "rgba(0,0,0,0.5)"
            drawCloudCircle(xStart + 4, yStart + 4,cloud.size)
            drawCloudCircle(xStart + (10 - (cloud.size + maxCloudSize)) + 2, yStart + 10 + 4,cloud.size)
            drawCloudCircle(xStart + (45 - (cloud.size + maxCloudSize)) + 2, yStart + 15 + 4,cloud.size)

            context.fillStyle = colors.clouds
            drawCloudCircle(xStart, yStart,cloud.size)
            drawCloudCircle(xStart + (15 - (cloud.size + maxCloudSize)), yStart - 10,cloud.size)
            drawCloudCircle(xStart + (10 - (cloud.size + maxCloudSize)), yStart + 10,cloud.size)
            drawCloudCircle(xStart + (25 - (cloud.size + maxCloudSize)), yStart - 5,cloud.size)
            drawCloudCircle(xStart + (45 - (cloud.size + maxCloudSize)), yStart - 15,cloud.size)
            drawCloudCircle(xStart + (45 - (cloud.size + maxCloudSize)), yStart + 15,cloud.size)
        })
    }

    return {
        draw : drawSky
    }
}

return SkyScene
});