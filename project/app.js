const lodashModule = require('lodash');

const array = [2, [4, [8, [10]]]];
console.log(lodashModule.flatten(array));
console.log(lodashModule.flattenDeep(array));
console.log(lodashModule.flattenDepth(array));
