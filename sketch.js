
function setup() {
  createCanvas(500,500);
  let test = new Something();
}

function draw() {
  background(255);
  cross(width/2, height/2,30);
  grainCircle(width/2, height/2, 100, color(200,50,30,220),PI/3);
  grainCircle(width/2, height/2, 100, color(60,100,255,220),4*PI/3);

  // let MAX = 10;
//
// for(let i = 0 ; i < MAX ; i++){
//   for(let j = 0 ; j < MAX ; j++){
//
//     let p1x = i*width/(MAX+1);
//     let p1y = j*width/(MAX+1);
//
//     let p2x = (i+1)*width/(MAX+1);
//     let p2y = j*width/(MAX+1);
//
//     let p3x = i*width/(MAX+1);
//     let p3y = (j+1)*width/(MAX+1);
//
//     grains.grainTriangle(p1x,p1y,p2x,p2y,p3x,p3y);
//
//   }
// }
}
