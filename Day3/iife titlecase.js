//2)Convert all the strings to title caps in a string array
//IIFE

(function (str){

    str = str.toLowerCase().split(' ');
  
    for (var i = 0; i < str.length; i++) {
  
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    console.log (str.join(' '));
  
  
   })("this is my dream");
  