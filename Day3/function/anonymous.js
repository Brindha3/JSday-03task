//1) Print odd numbers in an array 
//Anonymous Function 

let arr = [0,1,2,3,4,5,6,7,8,9];

let odd = function (){

    let odd = arr.filter(num => num %2 ==1)

    console.log(odd)
}
odd()


//2)Convert all the strings to title caps in a string array
//anonymous

let str = function (str) {

    str = str.toLowerCase().split(' ');

    for (var i = 0; i < str.length; i++) {

    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 

} 
    return str.join(' ');
}
str("this is my dream")

//3)Sum of all numbers in an array 
//anonymous

let num = function(array){
    var sum = 1;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     console.log(sum);
  } 
  num([1,2,3,4,5,6,7])

  //4)Return all the prime numbers in an array
  //anonymous

  let prime = function(numArray){
    numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
       return true;
    });
       console.log(numArray);
    }([2,4,6,8,])


  //5)  Return all the palindromes in an array
  //anonymous
  let isPalindrome = function(){
        
    var myArray = ["vicci", "racecar", "honda", "malayalam"]; 
  
    var arr = myArray.filter(function(c, d) {
          
          var palindrome = c.split('').reverse().join('');
  
          if(c == palindrome) {
  
        console.log(myArray[d]);
   }
   });
  }
  isPalindrome()


//6.Return median of two sorted arrays of the same size

let median = function(a ,b) {
  let c = [...a, ...b].sort((a, b)=> a - b);

  const half = c.length / 2 | 0;

if (c.length %2) {
  return c[half];
}else {

  return (c[half]+ c[half -1]) /2;
} 
}
let arr1 = [1,12,15,26,38,24];
let arr2 = [2,13,17,30,45,47];
console.log(median(arr1, arr2));

//7.remove duplictes from an array
 // anonymous

 let findDuplicates = function (){
  const dup = [1,1,2,2,3,5,6,5,]
 let duplicates = []
 const tempArray = [...dup].sort()
 for (let  i=0; i < tempArray.length; i++){
         if (tempArray[i + 1] === tempArray[i]) {
              duplicates.push(tempArray[i])
 
         }
 }
  
    console.log(duplicates)
 }
 findDuplicates()


 //8. Rotate an array by K times
 // anonymous
 
 let rotateArray = function (A,K){
  if (A.lenght === K || K=== 0){
          return A;
  }
  K = K % A.length;
  for (let i=0; i < K; i++) {
          A.unshift(A.pop())
  }
console.log(A)   
}
rotateArray([1,2,3,4,5,6,7,],2)
