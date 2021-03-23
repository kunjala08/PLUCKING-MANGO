class Tree{
    constructor(x,y){
        var option={
            isStatic:true,
            density:0.2,
        }
        this.x=x
        this.y=y
        this.width=400
        this.height=600
        this.body = Bodies.rectangle(x, y, 400, 600,option);
        this.image = loadImage("Plucking+mangoes/Plucking mangoes/tree.png");
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 400, 600);
        pop();
    }
}



  