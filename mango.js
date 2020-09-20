class Mango {
    constructor(x,y,r){
        var options = {
            restitution: 0,
            isStatic: true,
            friction: 1
        }
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.radius = r;

        this.image = loadImage("mango.png");
    }

    display(imgWidth,imgHeight){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,imgWidth,imgHeight);
    }
}