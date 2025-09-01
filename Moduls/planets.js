import * as math from './math.js'

const surfaceOfMars = math.surfaceArea(3390);
const surfaceOfMercury = math.surfaceArea(2440);
const yearSquared = math.square(2017);

const result = `Surface Of Mars = ${surfaceOfMars};
Surface of Mercury = ${surfaceOfMercury};
Years Squared = ${yearSquared};
PI = ${math.pi}`

console.log (result);
