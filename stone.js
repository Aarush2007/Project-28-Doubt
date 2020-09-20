class Stone {
    constructor(){
        this.body = Bodies.circle(windowWidth-1270,windowHeight-300,20)
        World.add(world,this.body);
        this.image = loadImage("stone.png");
    }

    display(){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,70,70);
    }
}