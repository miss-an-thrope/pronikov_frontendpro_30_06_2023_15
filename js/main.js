const MemoFunc = (func) => {
    const cache = {};
    const recentCalls = [];
  
    return (...args) => {
      const key = JSON.stringify(args);
      // Перевірка наявності результату в кешу:
      if (cache.hasOwnProperty(key)) {
        return `Результат з кешу: ${cache[key]}`;
      }

      //Зберігання аргументу в кеш:
      const result = func(...args);
      cache[key] = result;
      recentCalls.push(key);
  
      if (recentCalls.length > 10) {
        const oldestCall = recentCalls.shift();
        delete cache[oldestCall];
      }
  
      return `Новий результат: ${result}`;
    };
  }

const giveCall = (number) => number;

const countCalls = MemoFunc(giveCall);

console.log(countCalls('+380503017993'));
console.log(countCalls('+380503017994'));
console.log(countCalls('+380503017995'));
console.log(countCalls('+380503017996'));
console.log(countCalls('+380503017997'));
console.log(countCalls('+380503017998'));
console.log(countCalls('+380503017999'));
console.log(countCalls('+380503017901'));
console.log(countCalls('+380503017902'));
console.log(countCalls('+380503017903'));
console.log(countCalls('+380503017904'));
console.log(countCalls('+380503017993'));
console.log(countCalls('+380503017993'));
