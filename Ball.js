class Ball{
    constructor(x,y,radius){
        var options={
            restitution: 1.0,
            density: 0.4,
            friction: 0.3
        }
        this.r = radius;
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
    }

    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.r);
    }
}