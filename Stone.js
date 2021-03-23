class Stone{
    constructor(x,y,r){
        var option={
            isStatic:true,
            restitution:0,
            density:5,
            friction:1
        }
        this.body=Bodies.circle(x,y,r,option)
        this.image=loadImage("Plucking+mangoes/Plucking mangoes/stone.png")
       this.x=x;
       this.y=y;
       this.r=r
       World.add(world,this.body)

    }
    display(){
        var pos = this.body.position
        imageMode(CENTER);
        image(this.image, pos.x,pos.y,this.r);

    }
}