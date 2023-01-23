var leftValue = 450, topValue = 100, leftArrow = 37, rightArrow = 39, downArrow = 40, upArrow = 38;
var character = document.getElementById("character");
var step = 1, direction ="down", speed = 50, max = 500, min = 0;

function update(){
    if(step !== 1){
        step = 1;
    }else{
        step = 2;
    }
    character.style.backgroundImage = "url('img/" + direction + step + ".png')";
    character.style.left = leftValue+"px";
    character.style.top = topValue+"px";
}

document.onkeydown = function(e){
    
    if(e.keyCode == leftArrow && leftValue > min) { // LEFT
        direction = "left";
        leftValue = leftValue - speed;
    }
    else if (e.keyCode == rightArrow && leftValue < max) { // RIGHT
        direction = "right";
        leftValue = leftValue + speed;
    }
    else if (e.keyCode == downArrow && topValue < max) { // DOWN
        direction = "down";
        topValue = topValue + speed;
    }
    else if (e.keyCode == upArrow && topValue > min) { //Up
        direction = "top";
        topValue = topValue - speed;
    }
    // ...
    update();
}