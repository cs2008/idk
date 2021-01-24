var fixed, unfixed;

function setup() { 
  createCanvas(800,400);
   fixed = createSprite(400, 200, 50, 50);
    fixed.shapeColor = "green"; 
    unfixed = createSprite(500, 300, 50, 50);
     unfixed.shapeColor = "black";
     fixedRect = createSprite(400, 100, 50, 80);
     fixedRect.shapeColor = "green";
     fixedRect.debug = true;
     movingRect = createSprite(400, 800,80,30);
     movingRect.shapeColor = "green";
     movingRect.debug = true;
   
     movingRect.velocityY = -5;
     fixedRect.velocityY = +5;
    } 
     
     function draw() {
        background(220);
         unfixed.x = World.mouseX;
          unfixed.y = World.mouseY;
          if(isTouching(fixed,unfixed)){
             fixed.shapeColor = "brown"; 
             unfixed.shapeColor = "red";
             } 
             else{ 
               fixed.shapeColor = "green"; 
               unfixed.shapeColor = "black";
               }
               ounce(movingRect,fixedRect)
                drawSprites();
           }

         