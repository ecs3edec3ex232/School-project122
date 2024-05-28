function home() {
    window.location = "home.html";
}


var username1 = "";
var username2 = "";
var color1 = "";
var color2 = "";
var draw1 = ""; /* this is if they clicked the draw button then true so they can't also click skip */
var card_drawn = "";
var starting1_X = 35;
var starting1_Y = 169;
var starting2_X = 0;
var starting2_Y = 199;
var tile_on_rn = 1;
var playersturn = ""; 
var joker = ""; 
var finished =""; 


function preload(){
    board = loadImage("board.png");
    pink = loadImage("pink.png");
    blue = loadImage("blue.png");
    grey = loadImage("gray.png");
    green = loadImage("green.png");
    variable();
}

function variable(){
    username1 = localStorage.getItem("player1 name:");
    username2 = localStorage.getItem("player2 name:");
    color1 = localStorage.getItem("player1 pawn color");
    color2 = localStorage.getItem("player2 pawn color");

    console.log(username1 + username2 + color1 + color2);

    document.getElementById("playersturn").innerHTML = username1 + "'s turn"; 
    playersturn = username1; 
}

function setup() {
    var canvas = createCanvas(970, 313);
    canvas.parent('sketch-container');
    background(board);
}

function draw() {
    background(board); 
    
    if (color1 == "Pink") {
        image(pink, starting1_X, starting1_Y, 70, 100);
    } else if (color1 == "Blue") {
        image(blue, starting1_X, starting1_Y, 70, 100);
    } else if (color1 == "Grey") {
        image(grey, starting1_X, starting1_Y, 70, 100);
    } else if (color1 == "Green") {
        image(green, starting1_X, starting1_Y, 70, 100);
    } else {
        image(blue, starting1_X, starting1_Y, 70, 100);
    }
    
    if (color2 == "Pink") {
        image(pink, starting2_X, starting2_Y, 70, 100);
    } else if (color2 == "Blue") {
        image(blue, starting2_X, starting2_Y, 70, 100);
    } else if (color2 == "Grey") {
        image(grey, starting2_X, starting2_Y, 70, 100);
    } else if (color2 == "Green") {
        image(green, starting2_X, starting2_Y, 70, 100);
    } else {
        image(blue, starting2_X, starting2_Y, 70, 100);
    }
}

function carddrawn() {
    if (draw1 != "true") {
        console.log("oooh");
        draw1 = "true";
        card_drawn = Math.floor(Math.random() * 10) + 1; 

        switch (card_drawn) {
            case 1:
                document.getElementById("cards").src = "1.png";
                break;
            case 2:
                document.getElementById("cards").src = "2.png";
                break;
            case 3:
                document.getElementById("cards").src = "3card.png";
                break;
            case 4:
                document.getElementById("cards").src = "4.png";
                break;
            case 5:
                document.getElementById("cards").src = "5.png";
                break;
            case 6:
                document.getElementById("cards").src = "6.png";
                break;
            case 7:
                document.getElementById("cards").src = "7.png";
                break;
            case 8:
            case 9:
            case 10:
                document.getElementById("cards").src = "joker.png";
                joker = "true";
                break;
            default:
                break;
        }
        console.log(card_drawn);
        movepawn();
    }
}
secondrow=0; 
thirdrow=0; 
secondrow2=0; 
thirdrow2=0; 
tile_on_rn2=1; 
function movepawn() {
    if (draw1 == "true") {
        if (playersturn == username1) {
            if (joker == "") {
                if (tile_on_rn + card_drawn < 11) {
                    for (let i = 0; i < card_drawn; i++) {
                        console.log(card_drawn);
                        starting1_X += 96;
                        console.log("movepawn function activated for player 1");
                    }
                    tile_on_rn += card_drawn; 
                } else if(tile_on_rn + card_drawn ==11){
                    tile_on_rn += card_drawn; 
                    starting1_X = 35;
                    starting1_Y = 73; 
                }
                else if (tile_on_rn + card_drawn > 11 && tile_on_rn + card_drawn < 21) {
                    tile_on_rn += card_drawn; 
                    starting1_X = 35;
                    starting1_Y = 73;  
                    secondrow= tile_on_rn- 11;
                    for (let i = 0; i < secondrow; i++) {
                        console.log(card_drawn);
                        starting1_X += 96;
                        console.log("movepawn function activated for player 1");
                    }
                } else if (tile_on_rn + card_drawn > 20 && tile_on_rn + card_drawn < 30){
                    tile_on_rn += card_drawn; 
                    starting1_X = 35;
                    starting1_Y = 0;  
                    thirdrow= tile_on_rn- 21;
                    for (let i = 0; i < thirdrow; i++) {
                        console.log(card_drawn);
                        starting1_X += 96;
                        console.log("movepawn function activated for player 1");
                    }
                }else if (tile_on_rn + card_drawn > 29){
                    tile_on_rn =30; 
                    starting1_X = 35;
                    starting1_Y = 0;  
                    thirdrow= tile_on_rn- 21;
                    for (let i = 0; i < thirdrow; i++) {
                        console.log(card_drawn);
                        starting1_X += 96;
                        console.log("movepawn function activated for player 1");
                    }
                    finish();
                    console.log("sum1 finished!!!");
                    finished="yep";
                }
            } else {
                tile_on_rn = 1; 
                starting1_X = 35;
                starting1_Y = 169;
                draw1 = "";
                joker ="";
                secondrow=0; 
thirdrow=0; 
            }
        } 
else if(playersturn == username2){
    if(joker == ""){
        if (tile_on_rn2 + card_drawn < 11) {
            for (let i = 0; i < card_drawn; i++) {
                console.log(card_drawn);
                starting2_X += 96;
                console.log("movepawn function activated for player 2");
            }
            tile_on_rn2 += card_drawn;
    }
    else if(tile_on_rn2 + card_drawn ==11){
        tile_on_rn2 += card_drawn; 
        starting2_X = 35;
        starting2_Y = 103; 
    }
    else if (tile_on_rn2 + card_drawn > 11 && tile_on_rn2 + card_drawn < 21) {
        tile_on_rn2 += card_drawn; 
        starting2_X = 35;
        starting2_Y = 73;  
        secondrow2= tile_on_rn2- 11;
        for (let i = 0; i < secondrow2; i++) {
            console.log(card_drawn);
            starting2_X += 96;
            console.log("movepawn function activated for player 2");
        }
    }
    else if (tile_on_rn2 + card_drawn > 21 && tile_on_rn2 + card_drawn <30) {
        tile_on_rn2 += card_drawn; 
        starting2_X = 35;
        starting2_Y = 0;  
        thirdrow2= tile_on_rn2- 21;
        for (let i = 0; i < thirdrow2; i++) {
            console.log(card_drawn);
            starting2_X += 96;
            console.log("movepawn function activated for player 2");
        }
    }
    else if (tile_on_rn2 + card_drawn > 29) {
        tile_on_rn2 =30; 
                    starting2_X = 35;
                    starting2_Y = 0;  
                    thirdrow2= tile_on_rn2- 21;
                    for (let i = 0; i < thirdrow2; i++) {
                        console.log(card_drawn);
                        starting2_X += 96;
                        console.log("movepawn function activated for player 2");
                    }
                    finish2();
                    console.log("sum1 finished!!!");
                    finished="yep";
    }


    }
    else {
        tile_on_rn2 = 1; 
        starting2_X = 0;
        starting2_Y = 199;
        draw1 = "";
        joker ="";
        secondrow2=0; 
thirdrow2=0; 
    }
}
    setTimeout(function() {
        draw1 = "";  // Delay setting draw1 to "" by 3 seconds
        skip();      // Call skip() function after the delay
    }, 800);
}
}

function finish(){
draw1="true";
}
function finish2(){

}

function skip() {
    if (draw1 != "true") {
        if (playersturn == username1) {
            playersturn = username2;
            document.getElementById("playersturn").innerHTML = username2 + "'s turn"; 
        } else {
            playersturn = username1;
            document.getElementById("playersturn").innerHTML = username1 + "'s turn";   
        }
        document.getElementById("cards").src = "questionmark.png";
    }
}