class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
    }

    fly(){
        this.sling.bodyA = null;
    }
    fly(){
        this.sling.bodyA = null;
    }
attach(body){
    this.sling.bodyA=body
}
    display(){
        image(this.sling1,160,20)
        image(this.sling2,130,20)
        push();
        strokeWeigt(10);
        stroke(48,22,8)
        line(pointA.x-20, pointA.y, pointB, pointB.y);
        line(pointA.x-20,pointA.y, pointB.x+30, pintB.y);
        if(this.sling.bodyA){
            var pointA = this.polygon.bodyA.position;
            var pointB = this.sling.pointB;
            stroke(48,22,8)
            if(pointA.x<220){
                strokeWeight(7);
                line(pointA.x-25, pointA.y, pointB.x, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x+30, pointB.y);
            image(this.sling3,pointA.x-28,pointA.y-15,15,30)
            }
            else{
                strokeWeight(3);
                line(pointA.x+25, pointA.y, pointB.x, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y);
            image(this.sling3,pointA.x+25   ,pointA.y-15,15,30)
            }
        }
    }
    
}