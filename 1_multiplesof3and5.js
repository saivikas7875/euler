const multiplesOf3and5 = (number) => {
    const validNumbers = [];

    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
        validNumbers.push(i);
        }
    }

    return validNumbers.reduce((acc, num) => acc + num, 0);
}
