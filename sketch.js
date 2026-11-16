let para;

function setup() {
  createCanvas(windowWidth, windowHeight);

  para = createP('this text is on the webpage, made in p5')
  para.position(0,20)
  para.style('background-color:blue')
}

function draw() {
  background(220);
  text("this is text on the sketch",10,20);
}