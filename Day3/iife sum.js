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
  