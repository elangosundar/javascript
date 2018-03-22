console.log("Webpack is started...!");

import Point from './Point.js';
var body = document.querySelector('body');
body.textContent = 'Good point: ===> ' + new Point(1, 23) +" ,Strin===>"+ new Point('Leaf','ela');
