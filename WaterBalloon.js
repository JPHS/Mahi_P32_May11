class WaterBalloon{
    constructor(x, y, width, height){
        var options={
            'friction':2.0,
            'density': 5.0,

        }
        this.body=Bodies.rectangle(x, y, width, height, options);
        this.width=width;
        this.height=height;
        this.image=loadImage("waterballoon.png");
        World.add(world, this.body);
    }


   display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(0, 0, this.width, this.height);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
       
    }
}
function isTouching()
{
    if(waterballoon.body.position.x >= 1120 && waterballoon.body.position.x<=1400 && waterballoon.body.position.y>= 500 && waterballoon.body.position.y<=600){
        // blueLine=new Line(1150, 550, 10, 100, "darkBlue");
     
         console.log("bl");
         Score=Score+40;
     }
     
     if(waterballoon.body.position.x >= 900 && waterballoon.body.position.x<=1100 && waterballoon.body.position.y>= 550 && waterballoon.body.position.y<=600){
       
       //yellowLine=new Line(950, 550, 10,100, "yellow");
       console.log("yl");
      Score=Score+30;
     }
     
     if(waterballoon.body.position.x >= 700 && waterballoon.body.position.x<=900 && waterballoon.body.position.y>= 500 && waterballoon.body.position.y<=600){
       //  greenLine=new Line(750, 550, 10,100, "green");
     
       console.log("gl");
     Score=Score+20;
     }
     if(waterballoon.body.position.x >= 500 && waterballoon.body.position.x<=800 && waterballoon.body.position.y>= 500 && waterballoon.body.position.y<=600){
       
       //redLine=new Line(550, 550, 10, 100, "red");
       console.log("rl");
     Score=Score+10;
     }
}