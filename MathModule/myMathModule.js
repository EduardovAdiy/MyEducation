const getTriangleArea = (trHeight, trGround) => {
    const trArea = (1 / 2 * trHeight * trGround);
    return trArea;
};

const square = (number) => {
    const result = number * number;
    return result;
}

export {getTriangleArea};
export default square;
