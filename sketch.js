let sp = [];
function setup()
{ angleMode(DEGREES);
    createCanvas(windowWidth, windowHeight);

}
function draw()
    { background(50, 10, 0, 100);

for (let i = 0; i < sp.length - 1; i++) {
  let p1 = sp[i];
  let p2 = sp[i + 1];

  let d = dist(p1.pos.x, p1.pos.y, p2.pos.x, p2.pos.y);

  // Solo conectar cuando están relativamente cerca
  if (d > 150) continue;

  stroke(150, 150, 255, 40);   // más suave
  strokeWeight(2.6);           // línea fina pero visible
  noFill();

  // punto medio
  let mx = (p1.pos.x + p2.pos.x) * 0.5;
  let my = (p1.pos.y + p2.pos.y) * 0.5;

  // ondulación más amplia pero elegante
  let wave = sin(frameCount * 0.04 + i * 0.2) * 12;
  mx += wave;
  my -= wave * 0.5;

  beginShape();
  curveVertex(p1.pos.x, p1.pos.y);
  curveVertex(p1.pos.x, p1.pos.y);
  curveVertex(mx, my);
  curveVertex(p2.pos.x, p2.pos.y);
  curveVertex(p2.pos.x, p2.pos.y);
  endShape();
}

    
    for (const [index, particula] of sp.entries())
    { particula.update();
    particula.display();
    if (particula.estaMuerta) { sp.splice(index, 1); } }
    let ang = random(TWO_PI);
    let r = random(10, 40);

    let px = mouseX + cos(ang) * r;
    let py = mouseY + sin(ang) * r;

    let np = new Particula(px, py);
    sp.push(np);

    }

function mouseClicked()
    {let np = new Particula(mouseX, mouseY);
    sp.push(np); }