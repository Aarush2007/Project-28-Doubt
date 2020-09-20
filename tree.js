class Tree {
    constructor(){
        this.body = Bodies.rectangle(windowWidth-700,windowHeight/2-300,20,20,{isStatic:true});
        World.add(world,this.body);
        this.image = loadImage("tree.png");
    }

    display(){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y-10,500,600);
    }
}