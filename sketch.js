var database;
var canvas, backgroundImage;
var gameState = 0;
var form, player, game;
var playerCount;

function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(400,400);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  
}