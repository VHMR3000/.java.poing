function setup() {
  createCanvas(600, 400);
}
let xbolinha = 300;
let ybolinha = 200;
let diametro = 20;
let raio =diametro/2;
let velocidadexbolinha = 6;
let velocidadeybolinha = 6;

function draw() {
  background(0);
  circle (xbolinha , ybolinha, diametro);
  //mova (12) passos;
  xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
  if(xbolinha + raio > 600 || xbolinha - raio < 0){
velocidadexbolinha *=  -1}
if(ybolinha + raio > 400 || ybolinha - raio < 0){
velocidadeybolinha *=  -1}
}