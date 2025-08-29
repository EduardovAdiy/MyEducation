/* Импорт модуля READLINE для работы с пользовательским терминалом */
const readline = require('node:readline');
/* Создаем пользовательский интерфейс для возможности ввода данных */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
/* Создание функции, которая будет делать обработку введенных данных */
const whileFunction = (circleNumber) => {
    const i = circleNumber
    let j = 1

    /* Проверка, что введено число */
    if (isNaN(i) === false) {
        while (i >= j) {
          const message = `Итерация цикла: ${j} из ${i}`

          console.log(message)

         j = j + 1
        }
    console.log('Итерация завершена!')
    }
     else {
        console.log(`Данные введены не корректно!
Попробуйте ввести число еще раз!`)
     }  
}
/* Непосредственное выполнение данных */
rl.question(`Укажите число от 1 до 100: `, enterNumber => {
  whileFunction(enterNumber);
  rl.close();
});