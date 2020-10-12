class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibilty = 255;
      this.image = loadImage("Block.png")
    }
    display(){
      //console.log(this.body.speed);
      
      if(this.body.speed <  3){
        super.display();
        //console.log("no");
      }else{
        World.remove(world,this.body);
        push();
        this.visibilty = this.visibilty-5;
        //imageMode(CENTER);
        tint(255,this.visibilty);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        //console.log(this.body.speed);
        pop();
      }
    }
    Score(){
      //console.log("I am inside the score function.")
      if(this.visibilty<0 && this.visibilty>-1005){
        score++;
        //console.log("I am inside the score function if condition.")
      }
    }
};
  