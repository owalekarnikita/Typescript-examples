
    function factorial(n) {
        return (n != 1) ? n * factorial(n - 1) : 1;
      }
      
      document.write("Factorial of 9 is "+ factorial(9) );