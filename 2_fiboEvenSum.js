const getFibonacciSeq = (n) => {
  const fibonacciSeries = [1, 2];
  let newSeqNum;

  for (let i = 2; i <n; i++) {
      newSeqNum = fibonacciSeries[i -1] + fibonacciSeries[i-2];

      fibonacciSeries.push(newSeqNum);
  }

  return fibonacciSeries;
};

const fibonacciEvenSum = (n) => {
  const fibonacciSeq = getFibonacciSeq(n);

  return fibonacciSeq
    .filter(num => num % 2 === 0)
    .reduce((a, b) => a + b, 0);
}
