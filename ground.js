class Ground {
    constructor(){
        this.body = Bodies.rectangle(windowWidth/2,windowHeight-70,width,10,{isStatic:true});
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        rect(pos.x,pos.y+35,width,15);
    }
}