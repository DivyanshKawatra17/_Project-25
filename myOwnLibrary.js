function keyPressed(){
    if(keyDown("left")){
       cat.velocityX = -5
       cat.addAnimation("catrunning",catImage2)
       cat.changeAnimation("catrunning")
       mouse.addAnimation("mouserunning",mouseImage2)
       mouse.changeAnimation("mouserunning")
    }
   //For moving and changing animation write code here
 
 
 }
 