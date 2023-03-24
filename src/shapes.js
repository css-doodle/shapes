export default read(`

#heptagon
  points: 7;


#star
  points: 10;
  r: seq(1, .618);


#another star
  points: 5;
  turn: 2;


#star with frame
  points: 5;
  turn: 2;
  frame: 5;


#star 2
  points: 400;
  scale: .012;
  r: 50*abs.sin(2.5t)-81;


#star 3
  points: 360;
  r: .8 + cos(5t)*.15;


#frames
  frame: 4;
  points: 40;
  x: cos(2t)^2 * cos(5t);
  y: cos(2t)^2 * sin(5t);


#sun
  points: 128;
  turn: 2;
  frame: 5;
  scale: .9;
  r: seq(.85, 10, .85);


#windwheel
  points: 18;
  R: seq(.618, 1, 0);
  T: seq(t-.55, t, t);
  x: R * cos(T);
  y: R * sin(T);


#cross
  points: 20;
  r: cos(2t);


#infinity
  points: 200;
  x: cos(t)*.99 / (sin(t)^2 + 1);
  y: x * sin(t);


#whale
  points: 200;
  origin: -.6 0;
  rotate: 180;
  r: 3 * (sin(t)^2-.5) * cos(t);


#bicorn
  /* bicorn */

  points: 200;
  x: cos(t);
  y: sin(t)^2 / (2 + sin(t)) - .5;


#flower
  points: 200;
  scale: .13;
  k: 5;
  x: (k+1)*cos(t) - cos((k+1)*t);
  y: (k+1)*sin(t) - sin((k+1)*t);


#hypocycloid
  points: 200;
  scale: .12;
  k: 8;
  x: (k-1)*cos(t) + cos((k-1)*t);
  y: (k-1)*sin(t) - sin((k-1)*t);


#sun
  points: 600;
  scale: .13;
  x: 6 * cos(t) + cos(12t);
  y: 6 * sin(t) - sin(12t);


#drop
  points: 200;
  scale: .5 .95;
  x: (1 + sin(t)) * cos(t);
  y: -sin(t);


#heart
  points: 100;
  scale: .4;
  x: sin(2t) + sin(t) * 1.2;
  -y: cos(t) + cos(2t) * 1.2 - .3;


#heart2
  points: 1200;
  scale: .34;
  origin: 0 -1.6;
  s: sqrt.abs.cos(t) / (sin(t) + 1.6);
  r: 2 + (s - 2) * sin(t);


#heart3
  points: 200;
  a: cos(t)*13/18 - cos(2t)*5/18;
  b: cos(3t)/18 + cos(4t)/18;
  x: .75 * sin(t)^3;
  y: a - b + .15;


#four-leaf clover
  points: 200;
  r: sin(2t);


#clover
  points: 300;
  r: cos(4t);


#gear
  points: 300;
  scale: .7;
  r: cos.cos.cos.cos.cos(7t) ^ cos(7t);


#gear 2
  points: 120;
  scale: .8;
  t: range(10000);


#butterfly
  points: 30;
  r: cos(4t) * sin(2t);


#butterfly 2
  points: 400;
  x: sin(2t) * sin(3t) * sin(5t);
  y: cos(t) * cos(8t)^2;


#css-doodle logo
  fill: evenodd;
  points: 400;
  x: cos(5t)^2 * sin(t);
  y: sin(2t)^2 * cos(5t);


#butterfly 3
  fill: evenodd;
  points: 400;
  x: cos(2t) * cos(5t) * sin(t);
  y: sin(2t) * sin(4t) * cos(5t);


#flower
  fill: evenodd;
  points: 300;
  scale: .45;
  x: cos(2t) + cos(π - 7t);
  y: sin(2t) + sin(7t);


#flower 2
  fill: evenodd;
  points: 300;
  scale: .45;
  x: cos(2t) + cos(7t);
  y: sin(2t) + sin(7t);


#heart
  fill: evenodd;
  points: 300;
  scale: .45;
  x: cos(4t) + cos(5t);
  y: sin(4t) + sin(5t);


#holes
  fill: evenodd;
  points: 200;
  scale: .3;
  x: 2 * sin(t) + sin(7t);
  y: 2 * cos(t) + cos(7t);


#bird
  points: 200;
  scale: .3;
  rotate: 30;
  x: 2 * cos(3t) + cos(t);
  y: 2 * sin(t) + sin(2t);


#doll
  points: 200;
  scale: .3;
  x: sin(4t) + 2 * sin(t);
  -y: cos(3t) + 2 * cos(t);


#number eight
  points: 200;
  x: cos(t) * sin(6t);
  y: sin(t) * cos(3t);


#bag
  points: 200;
  scale: .35;
  rotate: -90;
  x: cos(t) - cos(2t) - cos(4t) + .5;
  y: sin(2t) - sin(5t) - sin(t);


#music note
  points: 300;
  scale: .35;
  rotate: 45;
  x: sin(t) + cos(7t) + cos(2t) + .35;
  -y: cos(4t) + sin(4t) + sin(t);


#flower petal
  fill: evenodd;
  points: 200;
  scale: .6;
  r: cos(5t)^2 + sin(5t) + .3;


#flower2
  points: 200;
  scale: .8;
  frame: 100;
  r: sin(7t)/2^cos(14t)/4;


#hypershape
  points: 360;
  m: 5;
  n: .3;
  p1: abs.cos(t * m/4) ^ n;
  p2: abs.sin(t * m/4) ^ n;
  r:  1 / (p1 + p2) ^ (1 / n);


#vase
  points: 200;
  scale: .3;
  x: sin(4t) + sin(t) * 1.3;
  y: cos(t) + cos(t) * 4.9 + .3;


#vase 2
  points: 500;
  scale: .34 .17;
  x: sin(2t) + .8 * cos(4.5t);
  y: cos(2t) * (6-cos(x/1.6));


#popcorn
  points: 400;
  scale: .7;
  frame: 40;
  r: abs.cos(9t) ^ cos(9t);


#belt
  points: 120;
  scale: .7;
  frame: 15;
  r: cos(t/10) ^ sin(t) ^ sin(2t);


#squircle
  /* Squircle */

  points: 100;
  scale: .7;
  r: 1/(1-.5*sin(2t)^2)^.25;


#pattern
  fill: evenodd;
  points: 36;
  scale: .45;
  x: cos(t) + cos(9t);
  y: sin(5t) + sin(9t);


#pattern2
  fill: evenodd;
  points: 40;
  x: cos(9t)^9;
  y: sin(9t)^9;


#stamp
  fill: evenodd;
  points: 36;
  scale: .45;
  x: cos(4t) + cos(7t);
  y: sin(4t) + sin(7t);


#snake
  points: 200;
  scale: .8;
  x: -sin(2.63t) / 5;
  y: -cos(t);


#lake
  points: 1500;
  scale: .9;
  rotate: 180;
  x: 1.5 * cos(2t) * (1.2 - sin(5y));
  y: -1.2 * (sin(2t) + 1.5 * cos(6t));


#lake2
  points: 400;
  a: 1;
  b: 1.9;
  x: -y * cos(18y) + a*b*sin(t*y);
  y: -a * cos(t) * 1.4;


#tree
  points: 1000;
  a: 8;
  scale: .12 .18;
  origin: 7 4;
  x: 1.4a * cos(.5t) + cos(5t*a) - 1;
  y: a * sin(1.8t) - sin(5t*a);


#landscape
  points: 90;
  rotate: 90;
  scale: .8;
  x: (.99 + cos(9t)) * 2.3;
  y: x^9*sin(x^8*3t) + sin(13.6x-9.01t)/cos(t);


#landscape2
  points: 1000;
  scale: .8;
  move: .5 .64;
  x: cos(t^t) + cos(1.8^t);
  y: sin(t) + sin(2.305t)*sin(t);


#rocks
  points: 1000;
  scale: 1.5 1;
  x: cos(9t) + cos(9t)/9 + sin(139t)/2;
  y: sin(t) + sin(t)/.5 + cos(29t)/3;


#lattice
  points: 180;
  scale: .08;
  x: 2 * sin(112t) + 11 * sin(t);
  y: sin(47t) + 20 * sin(5t);


#dance
  points: 1000;
  scale: .061 .06;
  x: (11*cos(.6t) + cos(55t) - 2.8) * -1.81;
  -y: (11*sin(9.03t) - sin(77t)) * 2.5 + 17;


#strings
  points: 360;
  frame: 24;
  turn: .5;
  scale: .08;
  x: 9 * cos(10t) + cos(44t);
  y: 9 * sin(10t) + sin(44t);


#dried fish
  points: 360;
  scale: .22;
  x: sin(t) + tan.sin(4t) + tan.sin(t);
  y: cos(8t) + tan.cos(3t) + tan.cos(8t);


#san
  points: 360;
  scale: .45;
  move: 0 .2;
  x: sin(4t) + sin(t);
  y: cos(3t) + cos(8t);


#fish
  points: 480;
  scale: .3;
  move: 0 .35;
  x: sin(t) + sin(6t) + tan.sin(2t);
  y: cos(t) + cos(5t) + tan.cos(8t);


#fish2
  points: 360;
  scale: .28;
  move: 0 .5;
  x: sin(4t) + sin(4t) + tan.sin(t);
  y: cos(5t) + cos(t) + tan.cos(8t);


#fish 3
  points: 360;
  scale: .3;
  move: 0 .6;
  x: sin(5t) + sin(t) + tan.sin(3t);
  y: cos(2t) + cos(t) + tan.cos(6t);


#dog
  points: 360;
  scale: .3;
  -y: cos(7t) + cos(3t) + cos(7t);
  x: sin(8t) + sin(2t) + sin(t);


#mask
  points: 360;
  scale: .49;
  x: sin(5t) + sin(4t);
  -y: cos(4t) + cos(10t);


#mask 2
  points: 360;
  scale: .25;
  x: sin(4t) + sin(2t) + tan.sin(4t);
  -y: cos(3t) + cos(3t) + tan.cos(8t);


#mask 3
  points: 360;
  scale: .27;
  x: sin(2t) + sin(5t) + tan.sin(6t);
  -y: cos(8t) + cos(2t) + tan.cos(5t);


#mask 4
  points: 360;
  scale: .31 .28;
  x: sin(6t) + sin(4t) + tan.sin(t);
  -y: cos(t) + cos(4t) + tan.cos(7t);


#hat
  points: 360;
  scale: .24;
  move: 0 .5;
  x: sin(4t) + tan.sin(t) + tan.sin(8t);
  y: cos(6t) + tan.cos(4t) + tan.cos(5t);


#hat2
  points: 360;
  scale: .32;
  x: sin(t) + sin(7t) + sin(8t);
  -y: cos(t) + cos(3t) + cos(5t);


#zen
  points: 360;
  scale: .33;
  x: sin(3t) + sin(6t) + sin(7t);
  -y: 2*cos(t) + cos(7t);


#swim
  points: 360;
  scale: .25;
  x: sin(t) + sin(t) + tan.sin(6t);
  -y: cos(t) + cos(5t) + tan.cos(3t);


#film
  points: 1000;
  move: 0 1;
  x: cos(3t) + cos(t)/2 + sin(40t)/7;
  y: sin(9t) + sin(t)/2 + cos(40t)/7;


#Chinese lantern
  points: 360;
  scale: .32 .4;
  x: sin(t) + sin(5t) - sin(7t);
  y: cos(t) + cos(5t) - cos(3t);


#by the sea
  points: 360;
  scale: .42;
  move: -.5 -.78;
  x: sin(3t) + sin(2/t) + sin(4t);
  -y: cos(3t) + cos(t) + cos(2t);


#abstract
  points: 720;
  scale: .4 .3;
  move: -.5 0;
  -y: cos(5t) + cos(3t) + cos(5t);
  x: sin(3t) + sin(3/t) + sin(2t);


#slice
  points: 1000;
  a: 2931;
  scale: .9;
  frame: 400;
  fill: evenodd;
  x: cos(t) + cos(17t) + sin(a*t)/9;
  y: sin(t) + sin(17t) + cos(a*t)/9;


#plant
  points: 200;
  scale: .9;
  frame: 1000;
  x: cos(t) + cos(6t)/2 + sin(30t)/4;
  y: sin(t) + sin(6t)/2 + cos(30t)/4;


#S shape
  points: 180;
  scale: .07;
  -x: 3 * sin(2.6t) + 5 * sin(9t);
  y: sin(4.1t) + 12 * sin(3t);


#plane
  points: 240;
  scale: 1.2 1.65;
  move: 0 .45;
  x: cos(t) * cos(2t) * sin(3t);
  -y: sin(t) * sin(3t) * cos(4t);


#batman
  points: 240;
  scale: .3;
  move: 0 .8;
  x: sin(3t) + sin(4t) + sin(2t);
  y: cos(4t) + cos(8t) + cos(4t);


#fan
  points: 180;
  scale: .4;
  x: cos(t) + cos(5t)/2 + sin(3t)/.8;
  y: sin(t) + sin(5t)/2 + cos(3t)/.8;


#symmetry
  points: 360;
  fill: evenodd;
  scale: .6;
  x: cos(t) + cos(6t)/2 + sin(14t)/8;
  y: sin(t) + sin(6t)/2 + cos(14t)/8;


#organized
  points: 90;
  scale: .15;
  rotate: 135;
  x: cos(t)*(8 - sin(y^2));
  y: 1.5*sin(t)/cos(t)*cos(4t)%1;


#spaceship
  points: 360;
  scale: .35;
  move: 0 1;
  y: cos(3t) + cos(6t) + tan.cos(3t);
  x: sin(7t) + sin(6t) + tan.sin(t);


#dip
  points: 180;
  scale: .3;
  -x: sin(3t) + sin(6/t) + cos(2t);
  -y: 2*cos(t) + sin(2t);


#semlly
  points: 360;
  scale: .3;
  move: 0 .3;
  x: sin(t) + sin(3t) + sin(4t);
  y: cos(t) + cos(3t) + cos(5t);


#shine
  points: 20;
  scale: 1.2;
  r: cos(222t)^224-.2;


#magic
  points: 31;
  rotate: 90;
  r: seq(1, .05, .6, 0, 0);


#wind
  points: 9;
  rotate: -40;
  move: .15 -.5;
  r: 1.5 * sin(-10.278t);


#snake
  points: 1000;
  scale: .13;
  x: 6 * cos.range(t, 3t) + cos(12t);
  y: 6 * sin(t) - sin(12t);


#critter
  points: 240;
  scale: .32;
  move: 0 -.5;
  x: sin(2t) + sin(5t) + sin(7t);
  -y: cos(3t) + cos(4t) + cos(7t);


#apple
  points: 360;
  scale: .3;
  -y: cos(5t) + cos(2t) + cos(5t);
  x: sin(5t) + sin(4t) + sin(3t);


#bud 2
  points: 360;
  r: abs.sin.tan(sin(1.5t)*1.14);


#carrot
  points: 240;
  scale: .2 1;
  r: abs.cos(exp(cos(π/2-t)*4));


#weird shape
  points: 360;
  scale: .45;
  r: 1/(2-2.3*cos.cos(3.5t)^2.3)^.16;


#ship
  points: 170;
  x: cos(9t)/cos(4t)*sin(t)/23;
  y: sin(19t)/sin(4t)*cos(t);


#tower
  points: 178;
  rotate: -90;
  scale: .25;
  move: 0 4.5;
  x: 3.4129*sin(2t)/cos(t)*cos(2t);
  y: cos(t)*(2.4 - sin(x^x*1.5));


#egg
  points: 720;
  frame: 99;
  scale: .85;
  a: .35;
  x: y*cos(y*3.5/a)+a*sin(t)*.1;
  y: a*cos(t);


#baby
  points: 360;
  frame: -90;
  rotate: -90;
  scale: .7;
  move: 0 .35;
  x: y*tan(2y)+.1*sin(9t);
  y: .5*cos(t);
`);


function trim(line) {
  return line.trim()
    .split(/\n/)
    .map(n => n.trim())
    .filter(n => !n.startsWith('#') && !n.startsWith('//'))
    .join('\n');
}

function read(rules) {
  return rules.split(/\n{3,}/).map((rule, i) => {
    return {
      id: 'id' +  i,
      value: trim(rule)
    }

  });
}
