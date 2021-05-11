class SlingShot{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB, 
			stiffness:0.02, 
			length:1
        }
        this.bodyA=bodyA;
		this.pointB=pointB;
		this.slingShot=Constraint.create(options);
		World.add(world,this.slingShot);
    }
    attach(body){
		count+=1;
		this.slingShot.bodyA=body;
	}

	fly()
	{
		this.slingShot.bodyA=null;
	}

    display()
	{
		if(this.slingShot.bodyA)
		{
			var pointA=this.slingShot.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);
            stroke("darkBlue")		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}      
}