canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

rover_x = 400;
rover_y = 300;

rover_img = "rover.png";
background_img = "mars.jpg";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_img;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);

}

window.addEventListener("keydown", mykeydown);

function mykeydown() {
    keypress = e.keyCode;
    console.log(keypress);
    if (keypress == "37") {
        left();
        console.log("left");
    }
    if (keypress == "38") {
        up();
        console.log("up");

    }
    if (keypress == "39")

    {
        right();
        console.log("right");
    }

    if (keypress == "40") {
        down();
        console.log("down");
    }
}