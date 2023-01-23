var leftValue = 450, topValue = 100;
var character = document.getElementById("character");
var img = "down1";

function update(){
    character.style.backgroundImage = "url('img/" + img + ".png')";
    character.style.left = leftValue+"px";
    character.style.top = topValue+"px";
}

document.onkeydown = function(e){
    
    if(e.keyCode == 37 && leftValue > 0) { // LEFT
        leftValue = leftValue - 10;
    }
    else if (e.keyCode == 39 && leftValue < 500) { // RIGHT
        leftValue = leftValue + 10;
    }
    else if (e.keyCode == 40 && topValue < 500) { // DOWN
        topValue = topValue + 10;
    }
    else if (e.keyCode == 38 && topValue > 0) { //Up
        topValue = topValue - 10;
    }
    update();
}