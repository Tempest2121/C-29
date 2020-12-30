class SlingShot {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 10,
    };
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
    this.slingImg1 = loadImage("sprites/sling1.png");
    this.slingImg2 = loadImage("sprites/sling2.png");
    this.slingImg3 = loadImage("sprites/sling3.png");
  }

  fly() {
    this.sling.bodyA = null;
  }

  display() {
    image(this.slingImg1, 200, 20);
    image(this.slingImg2, 170, 20);

    if (this.sling.bodyA) {
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;
      stroke(82, 39, 15);
      if (pointA.x < 220) {
        strokeWeight(7);
        line(pointA.x - 25, pointA.y, pointB.x, pointB.y);
        line(pointA.x - 25, pointA.y, pointB.x + 30, pointB.y - 3);
        image(this.slingImg3, pointA.x - 30, pointA.y - 10, 15, 30);
      } else {
        line(pointA.x + 25, pointA.y, pointB.x, pointB.y);
        line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
      }
    }
  }
}
