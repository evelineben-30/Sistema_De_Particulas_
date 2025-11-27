let sp = [];
function setup()
{ angleMode(DEGREES);
    createCanvas(windowWidth, windowHeight);

}
function draw()
    { background(40, 0, 60, 45);

  push();
    drawingContext.shadowBlur = 25;     
    drawingContext.shadowColor = "rgba(80, 220, 255, 0.5)";
    pop();
    
    // ahora sí viene tu for ORIGINAL
    for (let i = 0; i < sp.length - 1; i++) {
        let p1 = sp[i];
        let p2 = sp[i + 1];

  let d = dist(p1.pos.x, p1.pos.y, p2.pos.x, p2.pos.y);
  if (d > 150) continue;

  // Colores pastel estilo acuarela
  let baseR = 200 + sin(i * 0.4) * 40;
  let baseG = 150 + cos(i * 0.3) * 40;
  let baseB = 255;

  // puntos medios
  let cx = (p1.pos.x + p2.pos.x) * 0.5;
  let cy = (p1.pos.y + p2.pos.y) * 0.5;

  // ondulación acuarelada
  let wave = sin(frameCount * 0.03 + i * 0.2) * 20;
  cx += wave * 1.3;
  cy += wave * 0.6;

  // --- ACUARELA: Dibujar múltiples pasadas con diferentes opacidades ---
  for (let k = 0; k < 4; k++) {
    let alpha = 12 + k * 5;   // capas suaves
    let thickness = 1 + k * 0.8;

    stroke(baseR, baseG, baseB, alpha);
    strokeWeight(thickness);
    noFill();

    beginShape();
    curveVertex(p1.pos.x, p1.pos.y);
    curveVertex(p1.pos.x, p1.pos.y);

    // variaciones ligeras de los puntos para textura acuarela
    curveVertex(
      cx + sin(k * 1.5 + i * 0.2) * 6,
      cy + cos(k * 1.2 + i * 0.3) * 6
    );

    curveVertex(p2.pos.x, p2.pos.y);
    curveVertex(p2.pos.x, p2.pos.y);
    endShape();
  }
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