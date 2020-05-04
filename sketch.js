let dim;

function setup() {
  createCanvas(500, 500);
  dim = width /32;
  colorMode(HSB, 1200, 40, 50);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(1);
}

function draw() {
background('#0080FF')
  for (let x = 0; x <= width; x += dim) {
    drawGradient(x, height / 2);
  }
}

function drawGradient(x, y) {
  let radius = dim / 8;
  let h = random(0, 180);
  for (let r = radius; r > 0; --r) {
    fill(h, 150, 90);
    ellipse(x, x, h, r);
    h = (h + 1) % 720;
  }
}
