var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var count=0;
var plinkos = [];
var divisions = []
var divisionHeight=300;
var particlelist=[]


var score =0;

var gameState=!play1,play1
var gameState=!play2,play2
var gameState=!play3,play3
var gameState=!play4,play4


var gameState=end,end;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
   gameState=!end

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    
  }
 
 

function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("200",745,550);
 text("200",665,550);
 text("200",585,550);
 text("100",505,550);
 text("500",25,550);
 text("500",105,550);
 text("100",425,550);
 text("100",343,550);
 text("100",263,550);

 text("100",180,550);











 for(i=0;i<particlelist.length;i++){
 particlelist[i].display()
 
}

 
       






 if(gameState===end){
 

    
  textSize(30)
text("GAME OVER ",335,430);

}



  textSize(20)
  text("Count : "+count,700,30);
  Engine.update(engine);


  for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){


if(gameState!==end ){

count++
particle=new Particle(mouseX,mouseY,10,10)
  particlelist.push(particle)



if(count>=5)gameState=end





}




}











































