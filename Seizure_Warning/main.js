var NUM_CIRCLES = 12;
var circleDiameter;
var circleRadius;

function setup() {
    createCanvas(480, 600);
    circleDiameter = width/NUM_CIRCLES;
    circleRadius = circleDiameter/2;
}

function draw() {
    var isShifted = false;
    
    var y = 0;
    while (y <= height) { 
        
        var x;
        
        if (isShifted) {
            x = circleRadius;
        } else {
            x = 0;
        }
        
        while (x <= width) {
            ellipse(x, y, circleDiameter, circleDiameter);
            x = x + circleDiameter;
    }
    
    y = y + circleRadius;
    isShifted = !isShifted; 
  }
}
  
    //ellipse(0, height/2, circleDiameter, circleDiameter);
    //ellipse(circleDiameter, height/2, circleDiameter, circleDiameter);
    //ellipse(2*circleDiameter, height/2, circleDiameter, circleDiameter);
    //ellipse(3*circleDiameter, height/2, circleDiameter, circleDiameter);
    //ellipse(4*circleDiameter, height/2, circleDiameter, circleDiameter);
    //ellipse(5*circleDiameter, height/2, circleDiameter, circleDiameter);
    //ellipse(6*circleDiameter, height/2, circleDiameter, circleDiameter);
    //ellipse(7*circleDiameter, height/2, circleDiameter, circleDiameter);
    //ellipse(8*circleDiameter, height/2, circleDiameter, circleDiameter);
