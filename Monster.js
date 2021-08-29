class Monster {
  constructor(x,y,width,height) {
		var options = { 
	  inStatic:true,
	  restitution:0.5,
      density: 5, 
      frictionAir: 1.0
    };
		this.body = Bodies.rectangle(x,y,width,height,options);
		this.width = width;
		this.height = height;
		this.image=loadImage("images/monster1.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var santaPos=this.body.position;		
			push()
			translate(this.body.x, this.body.position.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.width, this.height);
			pop()
			
	}
}
