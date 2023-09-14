// Mam Iffe function all code  is  correct running in separate separate block.
    //But not running all  code is one script file.


//1) Print odd numbers in an array
// IFFE Function

(function(array){

  for (var i= 0; i< array.length; i++){

      if (array[i]%2!=0){

          console.log(array[i])
      }
  }

})([10,15,20,25,30])


//2)Convert all the strings to title caps in a string array
//IIFE

(function (str){

  str = str.toLowerCase().split(' ');

  for (var i = 0; i < str.length; i++) {

    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  console.log (str.join(' '));


 })("this is my dream");

//3)Sum of all numbers in an array
//IIFE

(function(array){
  var sum = 1;
  for(var i = 0 ; i< array.length ; i++){
     sum = sum + array[i];
   }
   console.log(sum);
})
([1,2,3,4,5,6,7])

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

(function() {

        let arr1 = [1,12,15,26,38,24];
        let arr2 = [2,13,17,30,45,47];

        let c = [...arr1, ...arr2].sort((arr1, arr2)=> arr1 - arr2);
      
        const half = c.length / 2 | 0;
      
      if (c.length %2) {
        console.log(c[half]);
      }else {
      
        console.log ((c[half]+ c[half -1]) /2);
      } 
      })()

      
//6.Return median of two sorted arrays of the same size

(function() {

  let arr1 = [1,12,15,26,38,24];
  let arr2 = [2,13,17,30,45,47];

  let c = [...arr1, ...arr2].sort((arr1, arr2)=> arr1 - arr2);

  const half = c.length / 2 | 0;

if (c.length %2) {
  console.log(c[half]);
}else {

  console.log ((c[half]+ c[half -1]) /2);
} 
})()


 //7. remove duplictes from an array
 //iife

 (function (){

  let numbers = [1,2,3,2,3,4,5,4,6];
  
  let duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));

  console.log(duplicates);
})()



//8. Rotate an array by K times
//iffe
(function (A,K){
  if (A.lenght === K || K=== 0){
          return A;
  }
  K = K % A.length;
  for (let i=0; i < K; i++) {
          A.unshift(A.pop())
  }
console.log(A)   
})([1,2,3,4,5,6,7,],2)









