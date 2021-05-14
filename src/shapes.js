export default read(`

#heptagon
  points: 7;


#star
  points: 10;
  r: seq(1, .618);


#another star
  points: 10;
  r: cos(5t);


#star with frame
  points: 10;
  r: cos(5t);
  frame: 10;


#frames
  split: 40;
  x: cos(2t)^2 * cos(5t);
  y: cos(2t)^2 * sin(5t);
  frame: 4;


#windwheel
  points: 18;
  R: seq(.618, 1, 0);
  T: seq(t+.55, t, t);
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
  rotate: 90;
  scale: .95;
  x: sin(t);
  y: (1 + sin(t)) * cos(t) / 1.9;


#heart
  points: 100;
  scale: .4;
  x: sin(2t) + sin(t) * 1.2;
  y: cos(t) + cos(2t) * 1.2 - .3;


#heart2
  points: 2400;
  scale: .34;
  origin: 0 -1.6;
  rotate: 180;
  s: sqrt.abs.cos(t) / (sin(t) + 1.6);
  r: 2 + (s - 2) * sin(t);


#heart3
  points: 200;
  rotate: 180;
  a: cos(t)*13/18 - cos(2t)*5/18;
  b: cos(3t)/18 + cos(4t)/18;
  x: .75 * sin(t)^3;
  y: a - b;


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


#butterfly
  points: 30;
  r: cos(4t) * sin(2t);


#butterfly 2
  points: 400;
  x: sin(2t) * sin(3t) * sin(5t);
  y: cos(t) * cos(8t)^2;


#css-doodle logo
  fill-rule: evenodd;
  points: 400;
  x: cos(5t)^2 * sin(t);
  y: sin(2t)^2 * cos(5t);


#butterfly 3
  fill-rule: evenodd;
  points: 400;
  x: cos(2t) * cos(5t) * sin(t);
  y: sin(2t) * sin(4t) * cos(5t);


#flower
  fill-rule: evenodd;
  points: 300;
  scale: .45;
  x: cos(2t) + cos(π - 7t);
  y: sin(2t) + sin(7t);


#flower 2
  fill-rule: evenodd;
  points: 300;
  scale: .45;
  x: cos(2t) + cos(7t);
  y: sin(2t) + sin(7t);


#heart
  fill-rule: evenodd;
  points: 300;
  scale: .45;
  x: cos(4t) + cos(5t);
  y: sin(4t) + sin(5t);


#holes
  fill-rule: evenodd;
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
  y: cos(3t) + 2 * cos(t);


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
  y: cos(4t) + sin(4t) + sin(t);


#flower petal
  fill-rule: evenodd;
  points: 200;
  scale: .6;
  r: cos(5t)^2 + sin(5t) + .3;


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
  rotate: 180;
  x: sin(4t) + sin(t) * 1.3;
  y: cos(t) + cos(t) * 4.9 + .3;


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
  fill-rule: evenodd;
  points: 36;
  scale: .45;
  x: cos(t) + cos(9t);
  y: sin(5t) + sin(9t);


#pattern2
  fill-rule: evenodd;
  points: 40;
  x: cos(9t)^9;
  y: sin(9t)^9;


#snake
  points: 200;
  scale: .8;
  x: sin(2.63t) / 5;
  y: cos(t);
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
