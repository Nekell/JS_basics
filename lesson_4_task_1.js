function numberToObject(number) {
    if (number > 999 || number < 0) {
        console.log('Enter a number between 0 and 999');
        return {};
    }

    return {
        'units': number % 10,
        'tens': ((number / 10) >> 0) % 10,
        'hundreds': (number / 100) >> 0,
    }
}