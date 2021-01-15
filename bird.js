class Bird extends Parent{

    constructor(x,y){
    
    
          super(x,y,50,50,0)
          this.image=loadImage("sprites/bird.png")
    
    
    }
    
    display(){
    super.display();
   // this.body.position.x=mouseX
   // this.body.position.y=mouseY
    
    
    }
    
    }