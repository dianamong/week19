//Создайте класс Калькулятор, который будет содержать 4 статических метода - Сложение, Умножение, Вычитание и Деление. Доработайте свою страничку с калькулятором, чтобы в ней использовались методы этого класса.

let x = document.getElementById('num1');
let y = document.getElementById('num2');
let result = document.getElementById('result');

class Calculator {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    static add(x, y) {
        let sum = +x + +y;
        result.textContent = sum;
    }

    static minus(x, y) {
        let diff = +x - +y;
        result.textContent = diff;
    }

    static times(x, y) {
        let times = +x * +y;
        result.textContent = times;
    }

    static divide(x, y) {
        let divide = +x / +y;
        result.textContent = divide;
    }
}

function add() {
    Calculator.add(x.value, y.value);
}
function minus() {
    Calculator.minus(x.value, y.value);
}
function times() {
    Calculator.times(x.value, y.value);
}
function divide() {
    if (y.value == 0) {
        result.textContent = 'На ноль делить нельзя!';
    } else {
        Calculator.divide(x.value, y.value);
    }
}

document.getElementById('plus').addEventListener('click', add);
document.getElementById('minus').addEventListener('click', minus);
document.getElementById('times').addEventListener('click', times);
document.getElementById('divide').addEventListener('click', divide);