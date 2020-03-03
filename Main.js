
///////////////////1
/*function seconds( total){
   return total % 60 ;
}
alert(seconds(800));*/



////////////////////////2
/*
function  perimiter(side, count) {
    return side * count;
}
alert(perimiter(10 , 8 ));


 */


/////////////////////////3
/*
function pedestrianFlowRate(cycleLength, trafficLength, turningLength) {
let time = cycleLength /2;
let realTime = time -trafficLength -turningLength;
let res = String((100- (realTime /(time / 100))));
console.log(res.split('.')[0] + " %");

}
pedestrianFlowRate(12, 3, 2);
*/


/////////////////////////////4
/*
function Calculate(nam1, nam2, nam3) {
    return (nam1 + nam2+ nam3) /3;
}
alert(Calculate(15, 88, 45));
 */

//////////////////////////////////////5
/*
let n = +prompt("n  ");
let x = +prompt("x  ");
let y = +prompt("y  ");
if(n <= 0 || x <= 0 || y <= 0 ) {
    alert("Введите позитивные числа и не равные 0");
}
    else{
        isDivided(n ,x, y);
        isDivideT(n , x, y);
}
function  isDivided(n, x, y) {
    if(n % x ==0 && n % y == 0){
        document.write("numbers divided by x" +" n = " + n + "x = " + x + " y = "+ y);
    }
    else {
        document.write("numbers aren't divided by x "+" n = " + n + "x = " + x + " y = "+ y);
    }
}

function isDivideT(n, x, y){
     (n % x ==0 && n % y ==0) ?  document.write("numbers divided by x" +" n = " + n + "x = " + x + " y = "+ y) : document.write("numbers aren't divided by x "+" n = " + n + "x = " + x + " y = "+ y);
}

function isDividedW(n, x, y) {

}


 */


///////////////////////////////////////////6
/*
let n  = 10;
let arr = [];
for(let i = 0; i < n ; i ++){
    arr.push(Math.floor(Math.random() * (100 - -100)) + -100);
}
document.write(arr);

document.write("<br/>Максимальный элемент: "+Math.max.apply(null, arr));
document.write("<br>Минимальный элемент: "+Math.min.apply(null, arr));

let sum =0;
for(let i =0; i < n ; i++){
    sum += arr[i];
}
document.write("<br/>Сумма элементов массива: " + sum);

let avg = sum /n ;
document.write("<br/>Среднее арифметическое значение: " + avg);

for(let i =0; i < n ; i++){
    if(arr[i] % 2 != 0){
        document.write("<br/>Непарные элементы массива: " + arr[i]);
    }
}
 */


///////////////////////////////////7
/*
let n =5, m =5;
let arr = [];
for(let i =0; i < m; i++){
    arr[i] =[];
    for(let j =0; j < n; j++){
        arr[i][j] = Math.floor(Math.random() * (100 - -100)) + -100;
        document.write(" "+ arr[i][j] + "");
    }
    document.write("<br/>");

}

document.write("---------------------------------------------");
document.write("<br/>");

function ReplaceMass(array) {
    for(let i =0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (i == j) {
                if (arr[i][j] < 0)
                    arr[i][j] = "0"
                else
                    arr[i][j] = "1";
            }
            document.write(" " + arr[i][j] + "");

        }
        document.write("<br/>");
    }
}

ReplaceMass(arr);
 */



//////////////////////8
/*
let operation = +prompt("Выберите операцию над числами \n1. Сложение \n2. Отнимание \n3. Умножение \n4. Деление");
let a = +prompt("ведите число a");
let b = +prompt("введите число b");
switch (operation) {
    case 1:
        Add(a, b);
        break;
    case 2:
        Sub(a, b);
        break;
    case 3:
        Mul(a, b);
        break;
    case 4:
        Div(a, b);
        break;
}
function Add(a, b) {
    return alert(a+b);
}
function Sub(a, b) {
    return alert(a-b);
}
function Mul(a, b){
    return alert(a*b);
}
function Div(a, b) {
    if(b === 0){
        alert(" а ноль делить нельзя");
    } else {
        return alert(a/b);
    }
}
*/


////////////////////////////////9
/*
let number = +prompt("введите число");
function isPositive(n) {
    if (number > 0) {
        alert("Число " + number + " - позитивное");
    } else {
        alert("Число " + number + " - негативное");
    }
}

function isPrime(n) {
    if(n === 1){
        return alert("простое число");
    }
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            return alert("не простое число");
        }
        return alert("простое число");
    }
}

function  isDiv(n){
    if (number % 2 == 0 && number % 5 == 0 && number % 3 == 0 && number % 6 == 0 && number % 9 == 0) {
        alert("Число " + number + " - делиться на 2,3,5,6,9 без остатка");
    } else {
        alert("Число " + number + " -  не делиться на 2,3,5,6,9 без остатка");
    }
}

isPositive(number);
isPrime(number);
isDiv(number);
*/



//////////////////////////////////////10
/*
let arr = [1, 5, 7, "10", 3, "aaa"];
let newArr =[];
function Check(array) {
    let numNew =0;
    for(let i =0; i < array.length; i++){
        if(typeof arr[i] !== 'number'){
            newArr.push(arr[i]);
        }else {
            numNew = Math.pow(arr[i], 2);
            newArr.push(numNew);
        }
    }
    return newArr;
}

alert(Check(arr));
*/


