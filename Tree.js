class Tree{
constructor(x,y,w,h){
var options = {

isStatic:true,
}

this.image = loadImage("Plucking+mangoes/Plucking mangoes/tree.png");

this.body = Bodies.rectangle(x, y, 50, 50, options);
World.add(world, this.body);
     

}

display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,1400,1900,50,50);
    pop();
}
}
