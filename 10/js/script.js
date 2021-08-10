const books = document.querySelectorAll('.books');
const bookItem = document.querySelectorAll('.book');


/*1) Восстановить порядок книг.*/
books[0].prepend(bookItem[4]);
books[0].prepend(bookItem[0]);
books[0].prepend(bookItem[1]);
books[0].append(bookItem[2]);


//2) Заменить картинку заднего фона на другую из папки image
document.body.style.backgroundImage = "url(image/adv.jpg)";


//3) Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
let links = document.getElementsByTagName('a');
console.log(links);
links[2].classList.add('titleH2');
const titleBook3 = document.querySelector('.titleH2');
titleBook3.textContent = 'Книга 3. this и Прототипы Объектов';
console.log(titleBook3);


/*4) Удалить рекламу со страницы*/
const adv = document.querySelector('.adv');
adv.remove();


//5) Восстановить порядок глав
const li = document.getElementsByTagName('li');
console.log(li);

//во второй
li[15].after(li[8]);
li[14].before(li[12]);
li[12].after(li[9]);
li[12].after(li[9]);

//и пятой книге
li[37].after(li[45]);
li[38].after(li[40]);
li[45].before(li[42]);
li[39].after(li[41]);


//6) в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
//console.log(bookItem[2]);
const ul = document.getElementsByTagName('ul');
console.log(ul);
const newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
ul[5].append(newElem);
ul[5].append(li[56]);


console.log(books);
console.log(bookItem);