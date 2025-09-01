/* Импорт модуля READLINE для работы с пользовательским терминалом */
const readline = require('node:readline');
/* Создаем пользовательский интерфейс для возможности ввода данных */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
/* Основная функция для работы */
const basicFunction = (start, finish) => {
    /* Если start и finish числа */
    if ((isNaN(start) === false) && (isNaN(finish) === false))
    {
        /* Проверка что start меньше, чем finish */
        if (start <= finish)
        {
            console.log(`Наименьшее число: ${start}. Наибольшее число: ${finish}.`);          
        };
        /* Если finish меньше, чем start */
        if (start > finish)
        {
           console.log(`Наименьшее число: ${finish}. Наибольшее число: ${start}.`);
        };
    }
    /** Если start не число */
    if(isNaN(start) === true && isNaN(finish) === false)
    {
        let i = 1;
        while (i <= finish)
        {
            console.log(start);
            i = i + 1;
        }
    }
    /** Если finish не число */
    if(isNaN(start) === false && isNaN(finish) === true)
    {
        let i = 1;
        while (i <= start)
        {
            console.log(finish);
            i = i + 1;
        }
    }
    /** Если start и finish не числа */
    if(isNaN(start) === true && isNaN(finish) === true)
    {
        console.log(`${start} / ${finish}`);    
    }
}
/** Запрос start */
rl.question 
('Введите данные 1: ', enterStart => 
    {
        rl.question('Введите данные 2: ', enterFinish =>
        {
            basicFunction(enterStart, enterFinish);
            rl.close();
        });
    }
);
