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
