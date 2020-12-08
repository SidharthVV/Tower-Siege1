class Shooter{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.06,
            length: 10
        }
        this.pointB = pointB
        this.shoot = Constraint.create(options);
        World.add(world, this.shoot);
        
    }

    fly(){
        this.shoot.bodyA = null;
    }

    display(){
        if(this.shoot.bodyA){
            var pointA = this.shoot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

            }
        }
    
}