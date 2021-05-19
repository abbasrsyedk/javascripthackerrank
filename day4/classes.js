class Polygon
{
    constructor(sides)
    {
        var polygonPerimeter = 0;
        for(var index in sides)
        {
            polygonPerimeter += sides[index];
        }        
        this.finalPerimeter = polygonPerimeter;
    }
    perimeter()
    {
        return this.finalPerimeter;
    }
}