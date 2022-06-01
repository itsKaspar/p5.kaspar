(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./Maths.js":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
//static PHI = 1.6543;
p5.prototype.distSq = function (x1, y1, x2, y2){ return (x2 - x1)**2 + (y2 - y1)**2; };

// Vector Functions
p5.prototype.distSq = function (v1, v2) { return (v2.x - v1.x) ** 2 + (v2.y - v1.y) ** 2; };
p5.prototype.midpoint = function (v1, v2) { return (createVector((v1.x + v2.x) / 2, (v1.y + v2.y) / 2)); };

  // PROBABILITY

  // static randInt(min, max){ return int(random(min, max+1)); }

// LINEAR AND NON LINEAR MAPPING
// EXPIN EXPOUT EXPINOUT
// QUADRATICIN OUT
 //  static expInOut(x) {
 //  if(x == 0.0 || x == 1.0) return x;
 //
 //  	if(x < 0.5){
 //  		return(0.5 * pow(2, (20 * x) - 10));
 //  	}
 //  	else{
 //  		return(-0.5 * pow(2, (-20 * x) + 10) + 1);
 //  	}
 // }

 // if(typeof window !== 'undefined') window.Something = Something; // export for window
 // module.exports = Something; // and export for module

},{}],4:[function(require,module,exports){
class Something{
	constructor(){
		console.log("constructing default object")
	}
}

if(typeof window !== 'undefined') window.Something = Something; // export for window
module.exports = Something; // and export for module

},{}],5:[function(require,module,exports){
// Maths
const Something = require('./js/Something.js');
const Maths = require('./js/Maths.js');
const Geometry = require('./js/Geometry.js');
const Draw = require('./js/Draw.js');

const modules = {
  Something
}

if(typeof window !== 'undefined') window.base = modules; // would change Q to the name of the library
else module.exports = modules; // in node would create a context

},{"./js/Draw.js":1,"./js/Geometry.js":2,"./js/Maths.js":3,"./js/Something.js":4}]},{},[5]);
