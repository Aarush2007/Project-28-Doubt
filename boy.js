class Human {
    constructor(){

        this.body = Bodies.rectangle(windowWidth-1240,windowHeight-300,20,20,{isStatic:true});
        World.add(world,this.body);
        this.image = loadImage("boy.png");
    }

    display(){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,300,300);
    }
}