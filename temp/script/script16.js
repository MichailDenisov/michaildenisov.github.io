
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
console.log( 'Всем привет!' );//Всем привет!
showMessage("Вася", "Привет!");
showMessage('Коля', 'Привет!'); // Аня: Привет! (*)
showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)

let age = prompt('Сколько вам лет?', 18);//Cколько вам лет? 18
console.log('Сколько вам лет?', age  );


//function checkAge(age) {
  //  if (age > 18) {
    //  return true;
   // } else {
   //   return confirm('А родители разрешили?');
  //  }
  //}
  
  //let age = prompt('Сколько вам лет?', 18);
  
  //if ( checkAge(age) ) {
    //alert( 'Доступ получен' );
  //} else {
    //alert( 'Доступ закрыт' );
  //}

//push (...items) – добавляет элементы в конец,
//shift() – извлекает элемент с начала,
//unshift(...items) – добавляет элементы в начало.
//splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
//slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
//concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items.
// Если какой-то из items является массивом, тогда берутся его элементы.

//3.1. Создать функцию которая будет принимать два параметра.
// В первый параметр будет передаваться имя пользователя а во второй его возраст.
// Функция должна возвращать строку "Привет " + имяпользователя. + " Твой возраст " + возрастпользователя + "?".
// Вызвать созданную функцию и сохранить результат ее вызова в переменную.
// Вывести созданную переменную со значение возврата функции в консоль.
//
//
//