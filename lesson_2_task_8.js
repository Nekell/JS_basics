function power(val, pow) {
    if (pow === 1) return val;
    pow--;
    return val * power(val, pow);
};

result = power(2, 3);
document.write(result);