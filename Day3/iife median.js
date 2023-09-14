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
