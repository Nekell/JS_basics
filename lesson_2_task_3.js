a = Number(prompt("Введите значение a", 10));
b = Number(prompt("Введите значение b", -5));

if ((a >= 0) && (b >= 0)) {
    c = a - b;
    d = b - a;
    alert("a - b = "+c+"\nb - a = "+d);

} else if ((a < 0) && (b < 0)) {
    c = a * b;
    alert("a * b = "+c);
    
} else {
    c = a + b;
    alert("a + b = "+c);
};