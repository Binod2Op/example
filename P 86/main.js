var canvas = new fabric.Canvas('myCanvas');

hero_image_width = 30;
hero_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = ""

function player_update()
{
    fabric.Image.fromURL("player.png" , function(Img){
    player_object= Img;
    player_object.scaleToWidth(150)
    player_object.scaleToHeight(140)
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object)
});

}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image , function(Img){
        hero_image= Img;
        hero_image.scaleToWidth(hero_image_width)
        hero_image.scaleToHeight(hero_image_height)
        hero_image.set({
    top:player_y,
    left:player_x
    });
    canvas.add(hero_image)
});
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80'){
    console.log("p and shift pressed together");
    hero_image=hero_image_width + 10;
    hero_image=hero_image_height +10;
    document.getElementById("current_width").innerHTML = hero_image_width;
    document.getElementById("current_height").innerHTML = hero_image_height;
    }
    if (e.shiftKey == true && keyPressed == '77'){
        console.log("m and shift pressed together");
        hero_image=hero_image_width - 10;
        hero_image=hero_image_height -10;
        document.getElementById("current_width").innerHTML = hero_image_width;
        document.getElementById("current_height").innerHTML = hero_image_height;
        }
        if (keyPressed ==  '38')
        {
            up();
            console.log("up");
        }
        if (keyPressed ==  '40')
        {
            down();
            console.log("down");
        }
        if (keyPressed ==  '37')
        {
            left();
            console.log("left");
        }
        if (keyPressed ==  '39')
        {
            right();
            console.log("right");
        }
        if (keyPressed ==  '87')
        {
            new_image("hulk_face.png");
            console.log("w");
        }
        if (keyPressed ==  '71')
        {
            new_image("ironman_body.png");
            console.log("g");
        }
        if (keyPressed ==  '76')
        {
            new_image("player.png");
            console.log("l");
        }
        if (keyPressed ==  '84')
        {
            new_image("spiderman_left_hand.png");
            console.log("t");
        }
        if (keyPressed ==  '82')
        {
            new_image("thor_right_hand.png")
            console.log("r");
        }
        if (keyPressed ==  '89')
        {
            new_image("ironman_legs.png");
            console.log("y");
        }
        if (keyPressed ==  '67')
        {
            new_image("thor_face.png");
            console.log("d");
        }
        if (keyPressed ==  '85')
        {
            new_image("captain_america_left_hand.png");
            console.log("d");
        }
        if (keyPressed ==  '67')
        {
            new_image("hulk_legs.png");
            console.log("c");
        }

}