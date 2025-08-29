const makeItFunny = (text, regNum) => {
  let i = 0;
  let result = '';

  while (i < text.length) {
    if((i + 1) % regNum === 0){
     result = `${result}${text[i].toUpperCase()}`;
    }
    else {
      result = `${result}${text[i]}`;
   }
   i = i + 1;
  };
  return result;
}

const res = makeItFunny('Как дела мой дорогой друг?', 3);

console.log(res);