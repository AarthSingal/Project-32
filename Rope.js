class Rope{
    constructor(bodyA,offsetx,offsety){
        this.offsetx = offsetx;
        this.offsety = offsety;
        var options = {
            bodyA : bodyA,
            pointB : {x:this.offsetx,y:this.offsety},
            length : 10,
            stiffness : 0.03 
        }
        this.rope = Constraint.create(options);

        World.add(world,this.rope);
    }
    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position; 
            
            strokeWeight(3);
            
            line(pointA.x,pointA.y, this.offsetx,this.offsety);
        }
    }
    fly(){
        this.rope.bodyA = null;
    }
    attach(bodyA){
        this.rope.bodyA = bodyA;
    }
}