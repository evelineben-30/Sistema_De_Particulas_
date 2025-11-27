class Particula {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);

    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(0.5, 2));

    this.tVida = int(random(100, 300));
    this.tVidaInicial = this.tVida;
    this.estaMuerta = false;
    this.diam = random(20, 50);

    this.velAng = random(-0.1, 0.1);

    this.c = color(
  random(100, 180),
  random(120, 200), 
  random(200, 255),  
  200               
);
  }

  update() {
    if (!this.estaMuerta) {
   
    let noiseVal = noise(this.pos.x * 0.005, this.pos.y * 0.005, frameCount * 0.01);
    let ang = map(noiseVal, 0, 1, -1, 1);

      this.vel.rotate(ang * 0.1); 

      this.tVida -= 1;
      this.pos.add(this.vel);
    }

    if (this.tVida <= 0 && !this.estaMuerta) {
      this.estaMuerta = true;
    }
  }
  display() {
    
    fill(this.c);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 22, 22);

    this.diamF = map(this.tVida, this.tVidaInicial, 0, this.diam, 0);

    circle(this.pos.x, this.pos.y, this.diamF);
  }
}
