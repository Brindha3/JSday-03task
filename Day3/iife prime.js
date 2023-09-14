//4)Return all the prime numbers in an array
//IIFE

(function(numArray){
    numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
       return true;
    });
       console.log(numArray);
  
    })([2,4,6,8,])
  