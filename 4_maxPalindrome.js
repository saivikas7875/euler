const isPalindrome = n => {
    const original = String(n).split('');
    const originalCopy = String(n).split('');
  
    const reverse = originalCopy.reverse();
  
    return original.every((n, i) => n === reverse[i]);
  };
  
  
  function largestPalindromeProduct(n) {
      const num1 = Math.pow(10, n) - 1;
      const num2 = num1;
      
      let palindromes = [];
  
      for (let i = num1; i > 0; i--) {
        for (let j = num2; j > 0; j--) {
          const product = i * j;
  
          if (isPalindrome(product)) {
            palindromes.push(product);
          }
        }
      }
  
      const sortedPalindromes = palindromes.sort((a, b) => b - a);
  
      return sortedPalindromes[0];
  }
  
  largestPalindromeProduct(3);


  