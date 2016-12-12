define(function(){

function ComingSoonScene(){
    return {
        draw : function(){
            context.fillStyle = "white"
            context.font = "3em 'Pacifico', 'cursive'";
            context.textBaseline = "top"
            context.textAlign = "center"
            context.fillStyle = "black"
            context.fillText("Ryan Tallmadge", canvas.width / 2 + 1, canvas.height / 2 + 2);

            context.fillStyle = "white"
            context.fillText("Ryan Tallmadge", canvas.width / 2, canvas.height / 2);
            context.font = "1.5em 'Arial'";
            context.fillText("Coming Soon", canvas.width / 2, canvas.height / 2 + 70);
        }
    }
}

return ComingSoonScene


})