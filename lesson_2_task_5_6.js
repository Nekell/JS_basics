function addition(number_1, number_2) {
    return number_1 + number_2;
};
function subtraction(number_1, number_2) {
    return number_1 - number_2;
};
function multiplication(number_1, number_2) {
    return number_1 * number_2;
};
function division(number_1, number_2) {
    return number_1 / number_2;
};
function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "addition":
            result = addition(arg1, arg2);
            break;
        case "subtraction":
            result = subtraction(arg1, arg2);
            break;
        case "multiplication":
            result = multiplication(arg1, arg2);
            break;
        case "division":
            result = division(arg1, arg2);
            break;
    };
    return result;
};

first_number = Number(prompt("Write first number:", 10));
second_number = Number(prompt("Write second number:", 5));
operation_name = prompt("Write operation name:", "addition");
answer = mathOperation(first_number, second_number, operation_name);
document.write(answer);