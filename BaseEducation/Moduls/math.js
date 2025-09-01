const pi = 3.14;
const e = 2.718;

const square = (x) => {
  return x * x;
};

const surfaceArea = (r) => {
  return 4 * pi * square(r);
};

export { e, square, surfaceArea};
export default pi;
