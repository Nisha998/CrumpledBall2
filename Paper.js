class Paper {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':0.01,
          'friction':0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, (60-20/2), options);
      this.radius = 60;
      this.image = loadImage("Images/paper.png");
           
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(RADIUS);
      fill("purple");
      image(this.image,pos.x,pos.y, this.radius,this.radius);
      pop();
    }
  };