const Maths = require('./Maths.js');

// # Fill and Strokes

p5.prototype.linearGradient = function (sX, sY, eX, eY, colS, colE) {
  let gradient = drawingContext.createLinearGradient(sX, sY, eX, eY);
	gradient.addColorStop(0,colS);
	gradient.addColorStop(1,colE);
	drawingContext.fillStyle = gradient;
  // return true;
};

// # Shapes

p5.prototype.cross = function (cx, cy, w) {
  line(cx - w, cy + w, cx + w, cy - w); //descending line
	line(cx - w, cy - w, cx + w, cy + w); //ascending line
  // return true;
};

// # Grain Shapes

p5.prototype.grainCircle = function(cx,cy,cr,c=color(0), dir=TWO_PI){

	stroke(c);
	strokeWeight(1.1); // so that it is not pixels

	const AREA = PI * cr * cr;

	// LIGHTING SYSTEM
	const v = p5.Vector.fromAngle(dir,cr); // pick random point on edge of sphere
	const light = createVector(cx+v.x, cy+v.y);

	//GENERATE POINTS
	for(let i = 0; i < AREA / 2 ; i++){

		while(true){

			const p = pointInCircle(cx, cy, cr);
			const probability = map(dist(p.x, p.y, light.x, light.y),0,(cr*2),1,0);

			if(random() < probability == 0){          // I DONT UDBNERSTAND WHY I HAVE AN EQL 0 here
				point(p.x,p.y);
				break;
			}
		}
	}
};

p5.prototype.grainTriangle = function(x0, y0, x1, y1, x2, y2){
	strokeWeight(1.1); // so that it is not pixels

	const AREA = ( x0 * ( y1 - y2 ) + x1 * ( y2 - y0 ) + x2 * (y0 - y1) ) / 2;

	// LIGHTING SYSTEM
	//const v = p5.Vector.fromAngle(dir,cr); // pick random point on edge of sphere
	//const light = createVector(cx+v.x, cy+v.y);

	// GENERATE POINTS
	for(let i = 0; i < AREA / 2 ; i++){

		//while(true){
			//const p = pointInCircle(cx, cy, cr);
			const p = pointInTriangle(x0,y0,x1,y1,x2,y2);
			//const probability = map(dist(p.x, p.y, light.x, light.y),0,(cr*2),1,0);

			//if(random() < probability == 0){          // I DONT UDBNERSTAND WHY I HAVE AN EQL 0 here
				point(p.x,p.y);
				//break;
			//}
		//}
	 }
 };

// if(typeof window !== 'undefined') window.Grafix = Grafix; // export for window
// module.exports = Grafix; // and export for module
