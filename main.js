"use strict";

alert('Ваш возраст: ' + prompt('Сколько вам лет?'));

let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');

alert(Number(num1) + Number(num2));

let num3 = prompt('Введите чему равна сторона квадрата');
alert('Площадь квадрата равна ' + Number(num3) * 4);


let num4 = prompt('Введите чему равна верхняя сторона прямоугольника');
let num5 = prompt('Введите чему равна боковая сторона прямоугольника');
alert('Площадь прямоугольника равна ' + (Number(num4) * 2 + Number(num5) * 2));