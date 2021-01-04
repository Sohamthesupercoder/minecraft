var canvas = new fabric.Canvas('myCanvas');
var block_img_width = 30;
var block_img_height = 30;
var created_x = 10;
var created_y = 10;
var ctx=canvas.getContext("2d");

var player_object = "";
var block_img_object = "";


function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        console.log("player update");
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        console.log("height , width");
        player_object.set({ top: created_y, left: created_x });
        console.log("player set");
        canvas.add(player_object);
    }
    );
    

}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {

        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);

        block_img_object.set({ top: created_y, left: created_x });
        canvas.add(block_img_object);
    }

    );


}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var key_value = e.keyCode;
    console.log(key_value);


    if (e.shiftKey == true && key_value == "80") {
        block_img_height = block_img_height + 10;
        block_img_width = block_img_width + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_width;
    }
    if (e.shiftKey == true && key_value == "77") {
        block_img_height = block_img_height - 10;
        block_img_width = block_img_width - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_width;
    }
    if (key_value == 38) {
        goup();
        console.log("up");
    }
    if (key_value == 40) {
        godown();
        console.log("down");
    }
    if (key_value == 37) {
        goleft();
        console.log("left");
    }
    if (key_value == 39) {
        goright();
        console.log("right");
    }
    if (key_value == 84) {
        new_image("trunk.jpg");
    }
    if (key_value == 68) {
        new_image("dark_green.png");
    }
    if (key_value == 68) {
        new_image("dark_green.png");
    }
    if (key_value == 76) {
        new_image("light_green.png");
    }
    if (key_value == 71) {
        new_image("ground.png");
    }
    if (key_value == 87) {
        new_image("wall.jpg");
    }
    if (key_value == 89) {
        new_image("yellow_wall.png");
    }
    if (key_value == 67) {
        new_image("cloud.jpg");
    }
    if (key_value == 82) {
        new_image("roof.jpg");
    }
    if (key_value == 85) {
        new_image("unique.png");
    }

}
function goright(){
    if(created_x < 700){
    created_x= created_x + 10;
    console.log("right is pressed");
    canvas.remove(player_object);
    player_update();
}
}
function godown(){
    if(created_y < 600){
    created_y= created_y + 10;
    console.log("down is pressed");
    canvas.remove(player_object);
    player_update();
}
}
function goleft(){
    if(created_x > 0){
    created_x= created_x - 10;
    console.log("left is pressed");
    canvas.remove(player_object);
    player_update();
}
}
function goup(){
    if(created_y > 0){
    created_y= created_y - 10;
    console.log("up is pressed");
    canvas.remove(player_object);
    player_update();
}
}




function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}