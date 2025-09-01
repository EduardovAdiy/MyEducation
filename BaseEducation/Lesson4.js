const encrypt = (inputText) => {
    let result = '';
    const textLen = inputText.length;

    if (textLen % 2 === 0) {
        for (let i = 1; i < textLen; i = i + 2) {
            if ((i + 1) % 2 === 0) {
               result = `${result}${inputText[i]}${inputText[i-1]}`
            }
        };
    } else {
        for (let i = 1; i < textLen; i = i + 2) {
            if ((i + 1) % 2 === 0) {
               result = `${result}${inputText[i]}${inputText[i-1]}`
            }
        };
        result = `${result}${inputText[textLen - 1]}`
    }
    return result;
}

const text = encrypt('Приветик');

console.log(text);
