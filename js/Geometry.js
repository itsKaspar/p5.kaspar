// # Check if point is in Shape

p5.prototype.isPointinCircle = function(px, py, cx, cy, cr){ return (distSq(px, py, cx, cy) < cr**2); }
p5.prototype.isPointinSquare = function(){}

// # Generate uniform points inside polygons
p5.prototype.pointInQuad = function(){}
p5.prototype.pointInSquare = function(){}

p5.prototype.pointInTriangle = function(x0, y0, x1, y1, x2, y2){
 // we must put x1,x2 and y1 y2 at the origin before transformation
 // and put them back afterwards

 let a1 = random(); // nice fades if i put an sqrt here
 let a2 = random();
 if((a1 + a2) >=1 ){ // reflect the points that are outside 1st triangle
   a1 = 1 - a1; // https://blogs.sas.com/content/iml/2020/10/19/random-points-in-triangle.html
   a2 = 1 - a2;
 }
 const px = a1 * (x1-x0) + a2 * (x2-x0) + x0;
 const py = a1 * (y1-y0) + a2 * (y2-y0) + y0;

 return createVector(px, py);
}

p5.prototype.pointInCircle = function(cx, cy, cr){
 // uniformely generate points in a circle
 // https://stackoverflow.com/questions/5837572/generate-a-random-point-within-a-circle-uniformly

 const r = cr * Math.sqrt(Math.random()); // if i add a second square root here I get something more intense along the curves
 const theta = Math.random() * 2 * Math.PI;   // if we add an sqrt here it does a neat spiral

 const px = cx + r * Math.cos(theta)
 const py = cy + r * Math.sin(theta)

 return {x : px, y : py};
}

// # Generate
