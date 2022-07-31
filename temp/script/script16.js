
let fruits = ["Яблоко", "Апельсин", "Груша"];

console.log( fruits.pop() ); // удаляем "Груша" и выводим его

console.log( fruits ); // Яблоко, Апельсин

console.log(fruits.push("Груша"));//Добавляем "Груша"

console.log( fruits );

console.log( fruits[0] ); // Яблоко
console.log( fruits[1] ); // Апельсин
console.log( fruits[2] ); // Слива

console.log( fruits.length ); // 3

console.log(fruits.unshift("Томат"));//Добавляем в начало
console.log( fruits );

console.log(fruits.shift("Томат"));//удаляем эл-т сначала
console.log( fruits );

let arr = ["Яблоко", "Апельсин", "Груша"];

for (let i = 0; i < arr.length; i++) {
console.log( arr[i] ); //Перебор массива 2-й способ
}


function showMessage(from, text, age) { // аргументы: from, text
    console.log(from + ":" + text);
    if (age > 18);
    return true;

  }
    showMessage("Вася", "Привет!");
    showMessage('Коля', 'Привет!'); // Коля: Привет! (*)
    showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)

  let age = prompt('Сколько вам лет?', 18);//Cколько вам лет? 18
  console.log('Сколько вам лет?', age  );
  console.log( 'Всем пока!' );//Всем пока!

  function run() {
    	    // область видимости функции run()
    	    var message = 'Фродо, 18 лет, друг Сем !'
    	    console.log(message)
}
run() // Фродо, 18 лет, друг Сем !

