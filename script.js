"use strict";

//переменная, в которой хранится выбранное мат. действие
let op;

function calc() {
    let result;

    let num1 = Number(document.getElementById("num_1").value);
    let num2 = Number(document.getElementById("num_2").value);

    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default: result = "Не выбрано действие";
    }

    if (num2 === 0 && op == '/') {
        document.getElementById("total-id").innerHTML = "Недопустимое действие";
        return;
    }

    document.getElementById("total-id").innerHTML = result;
}