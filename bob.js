class Bob{
    constructor(x,y,radius){
        this.body= Matter.Bodies.circle(x,y,radius, {isStatic:false, restitution:1, friction:0, density:1.2});
        this.radius=radius;
        World.add(world, this.body)
    }

    display(){

        push();
        ellipseMode(CENTER);
        fill("blue");
        stroke("black");
        var pos=this.body.position
        ellipse(pos.x,pos.y, this.radius*2,this.radius*2);
        pop();

    }








}