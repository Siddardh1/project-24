class paper
{
    constructor(x,y)
    {
        var options={
            'isStatic':false,
            'density':1.2,
            'restitution':0.5,
            'friction':1
        }
        this.body=Bodies.circle(x,y,20,options)

        World.add(world,this.body)
    }

    display()
    {
        rectMode(CENTER)
        fill("blue")
        ellipse(this.body.position.x,this.body.position.y,20,20)
    }
}