const rules = `
  split: 10;
  r: cos(5t);


  split: 20;
  r: cos(2t);


  split: 100;
  scale: .4;
  x: sin(2t) + sin(t) * 1.2;
  y: cos(1t) + cos(2t) * 1.2 - .3;


  split: 200;
  r: sin(2t);


  split: 300;
  r: cos(4t);


  split: 300;
  scale: .7;
  r: cos.cos.cos.cos.cos(7t) ^ cos(7t);


  split: 30;
  r: cos(4t) * sin(2t);


  split: 400;
  x: sin(2t) * sin(3t) * sin(5t);
  y: cos(t) * cos(8t)^2;


  /* css-doodle logo */

  fill-rule: evenodd;
  split: 400;
  x: cos(5t)^2 * sin(t);
  y: sin(2t)^2 * cos(5t);


  fill-rule: evenodd;
  split: 400;
  x: cos(2t) * cos(5t) * sin(t);
  y: sin(2t) * sin(4t) * cos(5t);


  fill-rule: evenodd;
  split: 300;
  scale: .45;
  x: cos(2t) + cos(π - 7t);
  y: sin(2t) + sin(π - 7t);


  fill-rule: evenodd;
  split: 200;
  scale: .3;
  x: 2 * sin(t) + sin(7t);
  y: 2 * cos(t) + cos(7t);


  split: 200;
  scale: .3;
  rotate: 30;
  x: 2 * cos(3t) + cos(t);
  y: 2 * sin(t) + sin(2t);


  split: 200;
  scale: .3;
  x: sin(4t) + 2 * sin(t);
  y: cos(3t) + 2 * cos(t);


  split: 200;
  x: cos(t) * sin(6t);
  y: sin(t) * cos(3t);


  split: 200;
  scale: .35;
  rotate: -90;
  x: cos(t) - cos(2t) - cos(4t) + .5;
  y: sin(2t) - sin(5t) - sin(t);


  split: 300;
  scale: .35;
  rotate: 45;
  x: sin(t) + cos(7t) + cos(2t) + .35;
  y: cos(4t) + sin(4t) + sin(t);


  fill-rule: evenodd;
  split: 200;
  scale: .6;
  r: cos(5t)^2 + sin(5t) + .3;


  /* Superformula */
  /* https://en.wikipedia.org/wiki/Superformula */

  split: 360;
  m: 5;
  n: .3;
  p1: abs.cos(t * m/4) ^ n;
  p2: abs.sin(t * m/4) ^ n;
  r:  1 / (p1 + p2) ^ (1 / n);


  split: 200;
  scale: .3;
  rotate: 180;
  x: sin(4t) + sin(t) * 1.6;
  y: cos(t) + cos(t) * 4.8 + .3;


  split: 2400;
  scale: .34;
  origin: 0 -1.6;
  rotate: 180;
  s: sqrt.abs.cos(t) / (sin(t) + 1.6);
  r: 2 + (s - 2) * sin(t);


  split: 400;
  scale: .6;
  frame: 40;
  r: abs.cos(9t) ^ cos(9t);


  /* Blob */

  split: 120;
  scale: .7;
  frame: 15;
  r: cos(t/10) ^ sin(t) ^ sin(2t);


  /* Squircle */

  split: 100;
  scale: .7;
  r: 1/(1-.5*sin(2t)^2)^.25;
`;

function trim(line) {
  return line.trim().split(/\n/).map(n => n.trim()).join('\n');
}

function read(rules) {
  return rules.split(/\n{3,}/).map(trim);
}

export default read(rules);
