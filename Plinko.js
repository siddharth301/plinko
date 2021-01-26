class Plinko{
    constructor (x,y,width,height){
       var options={
        isStatic : true
     }
    this.body = Bodies.circle(x,y,10,width,height);
    this.width = width;
    this.heigth = height;
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipse( 0, 0, this.width, this.height);
    pop();
  }
}