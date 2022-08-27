class Cannon{
    constructor(x,y,w,h){
        var options={
            isStatic: true
        }
        this.w = w
        this.h = h
        this.image = loadImage("assets/cannon_base.png")
        this.image2 = loadImage("assets/CANON.png")
        this.body = Bodies.rectangle(x, y, w, h, options)
        World.add(world, this.body)
    }

    display(){
        push()
        fill("red")
        //translate(this.body.position.x, this.body.position.y)
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.w, this.h)
        pop()
        image(this.image2, 90, 40, 140, 150)
    }
}