
var pawns = ["Blue", "Green", "Pink", "Grey"];
var images = ["blue.png", "green.png", "pink.png", "gray.png"];
var player1pawncolor = "";
var player2pawncolor = "";
var player1name ="";
var player2name ="";

var currentIndex = 0;



function nextPawn() {
    currentIndex = (currentIndex + 1) % pawns.length;
    document.getElementById("colors").innerText = pawns[currentIndex];
    document.getElementById("pawns").src = images[currentIndex];


    player1pawncolor = document.getElementById("colors").innerText;
  

    console.log("Player 1 color:", player1pawncolor);

}


function nextpawn1() {
    currentIndex = (currentIndex + 1) % pawns.length;
    document.getElementById("colors1").innerText = pawns[currentIndex];
    document.getElementById("pawns1").src = images[currentIndex];


    player2pawncolor = document.getElementById("colors1").innerText;


    console.log("Player 2 color:", player2pawncolor);

    var player1name = document.getElementById("player1name").value; 
var player2name =document.getElementById("player2name").value; 

console.log(player1name, player2name);
}



function nextPage() {
    var player1name = document.getElementById("player1name").value; 
    var player2name =document.getElementById("player2name").value; 
    localStorage.setItem("player1 name:", player1name);
    localStorage.setItem("player2 name:", player2name);

    localStorage.setItem("player1 pawn color", player1pawncolor);
    localStorage.setItem("player2 pawn color", player2pawncolor);
    
    window.location = "game.html";
}


function home() {
    window.location = "index.html"; // Corrected from window.loaction to window.location
}

