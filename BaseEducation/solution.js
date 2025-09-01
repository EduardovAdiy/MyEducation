import { getTriangleArea } from './myMathModule.js';
import square from './myMathModule.js';

const getTriangleNArea = (trHeight) => {
  const trGround = square(trHeight)/2;
  const trArea = getTriangleArea(trHeight, trGround);

  return trArea;
}

export default getTriangleNArea;
