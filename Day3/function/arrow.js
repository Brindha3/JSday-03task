//1) Print odd numbers in an array
// Arrow Function

oddNumbers = (bri) => {

    for (var i =0 ; i< bri.length; i++){

        if (bri[i]%2!=0){

            console.log(bri[i])
        }
    }
}

oddNumbers([11,12,13,14,15,16]);


//2)Convert all the strings to title caps in a string array
//Arrow Function 
 
titleCase = (str) => {

    str = str.toLowerCase().split(' ');

    for (var i = 0; i < str.length; i++) {

    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 

} 

    return str.join(' ');

} 
titleCase("this is my dream");          

//3)Sum of all numbers in an array
//Arrow Function

let num = (array) => {

    var sum = 1;

    for(var i = 0 ; i< array.length ; i++){

       sum = sum + array[i];
}
     console.log(sum);
} 
num([1,2,3,4,5,6,7])


//4)Return all the prime numbers in an array
//Arrow Function

let prime = (numArray) =>  {
    numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
       return true;
    });
       console.log(numArray);
    }
    prime([1,2,3,4,5,6])


//5)Return all the palindromes in an array
//Arrow Function

isPalindrome = () => {
        
    var myArray = ["vicci", "racecar", "honda", "malayalam"]; 
  
    var arr = myArray.filter(function(c, d) {
          
          var palindrome = c.split('').reverse().join('');
  
          if(c == palindrome) {
  
        console.log(myArray[d]);
   }
   });
  }
  isPalindrome()



