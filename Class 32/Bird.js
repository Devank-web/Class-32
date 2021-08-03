class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    this.Path = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200){
      var position = [this.body.position.x,this.body.position.y];
      this.Path.push(position);
    }
   
    //console.log(this.Path);
    for(var i = 0;i<this.Path.length;i++){
      image(this.image2,this.Path[i][0],this.Path[i][1])
    }
  }
}
