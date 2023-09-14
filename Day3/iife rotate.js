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
  