const rules = `
  split: 10;
  r: cos(5t);


  split: 20;
  r: cos(2t);


  split: 100;
  scale: .4;
  y: cos(1t) + cos(2t) * 1.2 - .3;
  x: sin(2t) + sin(t) * 1.2;


  split: 200;
  r: sin(2t);


  split: 200;
  r: cos(4t);


  split: 300;
  x: cos(7t) * cos(7t) * sin(2t);
  y: sin(t) * sin(t) * cos(7t);


  split: 30;
  r: cos(4t) * sin(2t);


  split: 200;
  x: sin(2t) * sin(3t) * sin(5t);
  y: cos(t) * cos(8t) * cos(8t);


  fill-rule: evenodd;
  split: 400;
  x: cos(5t) * cos(5t) * sin(t);
  y: sin(2t) * sin(2t) * cos(5t);


  fill-rule: evenodd;
  split: 400;
  y: sin(2t) * sin(4t) * cos(5t);
  x: cos(2t) * cos(5t) * sin(t);


  fill-rule: evenodd;
  split: 300;
  scale: .45;
  x: cos(2t) + cos(π - 7t);
  y: sin(2t) + sin(π - 7t);


  fill-rule: evenodd;
  split: 200;
  scale: .3;
  x: sin(t) + sin(t) + sin(7t);
  y: cos(t) + cos(7t) + cos(t);


  split: 200;
  scale: .3;
  rotate: 30;
  x: cos(3t) + cos(t) + cos(3t);
  y: sin(2t) + sin(t) + sin(t);


  split: 200;
  scale: .3;
  x: sin(4t) + sin(t) + sin(t);
  y: cos(t) + cos(t) + cos(3t);


  split: 200;
  x: cos(t) * sin(6t);
  y: sin(t) * cos(3t);


  split: 200;
  scale: .35;
  rotate: -90;
  x: cos(t) - cos(2t) - cos(4t) + .5;
  y: sin(2t) - sin(5t) - sin(t);


  split: 200;
  scale: .4;
  x: sin(t) + cos(7t) + cos(2t) + .35;
  y: cos(4t) + sin(4t) + sin(t);


  fill-rule: evenodd;
  split: 200;
  scale: .6;
  r: cos(5t) * cos(5t) + sin(5t) + .3;


  split: 360;
  a: 1;
  b: 1;
  m: 5;
  n1: 0.3;
  n2: 0.3;
  n3: 0.3;
  p1: pow(abs(1/a * cos(t * m/4)), n2);
  p2: pow(abs(1/b * sin(t * m/4)), n3);
  r: 1/pow(p1 + p2, 1/n1);
`;

function trim(line) {
  return line.trim().split(/\n/).map(n => n.trim()).join('\n');
}

function read(rules) {
  return rules.split(/\n{2,}/).map(trim);
}

export default read(rules);
