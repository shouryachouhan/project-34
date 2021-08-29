class Hero {
  constructor(x,y,width,height){
		var options = {
			inStatic:false,
			restitution:0, 
			density: 1, 
			frictionAir: 1.2
		};
		this.body = Bodies.rectangle(x,y,width,height,options);
		this.width = width;
		this.height = height;
		this.image=loadImage("images/superhero1.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);

	}
	
	display()
	{
		    var angle = this.body.angle;
			var heroPos=this.body.position;		
			push()
			translate(this.body.position.x,this.body.position.y);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.width, this.height);
			pop()
			
	}
}
