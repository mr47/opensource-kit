'use strict';

import Calc from '../src';

let calc = new Calc(0);

console.log(calc.add(2).memory());
console.log(calc.reset().add(5).memory());
