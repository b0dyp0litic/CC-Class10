let para;
let slider;
let sliderVal = 16;

function setup() {
  createCanvas(windowWidth, windowHeight);

  para = createP('this text is on the webpage, made in p5')
  para.position(0,20)
  para.style('background-color:blue')

  slider = createSlider(12,24,16);
  slider.position(0,80);
  
}

function draw() {
  background(220);
  text("this is text on the sketch",10,20);
  push()
  textSize(sliderValue)
  
    pop()
}