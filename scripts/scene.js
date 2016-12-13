var colors = {
    sky         : "rgb(135, 206, 235)",
    clouds      : "rgb(255, 255, 255)",
    grass       : "rgb(1, 166, 17)",
    darkGrass   : "rgb(0, 92, 9)",
    randomGreen : ["rgb(0,92,9)","rgb(0,104,10)","rgb(0,123,12)", "rgb(1,142,14)"],
    plane       : "rgb(127, 133, 131)"
}

var canvas      = document.getElementById("scene")
var context     = canvas.getContext("2d")
var frameRate   = 1000 / 30

var PIXEL_RATIO = (function () {
    var ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
              ctx.mozBackingStorePixelRatio ||
              ctx.msBackingStorePixelRatio ||
              ctx.oBackingStorePixelRatio ||
              ctx.backingStorePixelRatio || 1;

    return dpr / bsr;
})();

function setCanvas(){
    context.canvas.width  = window.innerWidth
    context.canvas.height = window.innerHeight
}
setCanvas()

requirejs([
    "scenes/skyScene",
    "scenes/grassScene",
    "scenes/comingSoonScene",
    "scenes/planeScene"
    ],function(
        SkyScene, 
        GrassScene,
        ComingSoonScene,
        PlaneScene
    ){


function drawScene(scenes){
    context.clearRect(0, 0, canvas.width, canvas.height)
    scenes.forEach(function(scene){
        scene.draw()
    })
}

var scenes = [new SkyScene(), new GrassScene(), new PlaneScene()]
WebFontConfig = {
    active: function(){
        scenes.push(new ComingSoonScene())
    },
    google: {
        families: ['Pacifico']
    }
}
WebFont.load(WebFontConfig);
//drawScene(scenes)
function startScene(){
    setTimeout(function(){
        window.requestAnimationFrame(function(){
            drawScene(scenes)
            startScene()
        })
    },frameRate)
}

startScene()
})