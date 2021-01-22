class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    

    if(this.body.position.y>760){
            if(this.body.position.x<150){
          push()
          score=score+500
          this.body.position.x=null
          this.body.position.y=null
          pop()  
        
        
       
        }
    }
  
        if(this.body.position.y>760){
                if(this.body.position.x<550){
              push()
              score=score+100
              this.body.position.x=null
              this.body.position.y=null
              pop()  
            }
              }
              if(this.body.position.y>760){
                if(this.body.position.x<800){
              push()
              score=score+200
              this.body.position.x=null
              this.body.position.y=null
              pop()  
            }
              }
            
         
}
    
}