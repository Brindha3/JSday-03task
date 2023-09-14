//7. remove duplictes from an array
 //iife

 (function (){

    let numbers = [1,2,3,2,3,4,5,4,6];
    
    let duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
  
    console.log(duplicates);
  })()
  