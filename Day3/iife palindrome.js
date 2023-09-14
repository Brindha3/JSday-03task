//5)  Return all the palindromes in an array

(function (){
       
    var myArray = ["vicci", "racecar", "honda", "malayalam"];
  
  
    var arr = myArray.filter(function(c, d) {
         
          var palindrome = c.split('').reverse().join('');
  
  
          if(c == palindrome) {
  
  
        console.log(myArray[d]);
   }
   });
  })()
