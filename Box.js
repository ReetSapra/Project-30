class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill ("pink");
    rect(0, 0, this.width, this.height);
    pop();
    
     console.log(this.body.speed);


       
      }
      else{
        World.remove (world, this.body);
        this.visibilty = this.visibilty-5;
        push();
        //tint(255,this.visibilty);
      // rect( this.body.position.x, this.body.position.y, 50,50);
        pop();
      }
   
  }
  }
  

