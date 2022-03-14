let arr1 = [1,2,3,4,5]
let arr2 = [9,8,7,6]

function medianOfArray ( arr1, arr2){
    let median =0 ;
    for( let i = 0; i < arr2.length ; i++ ){
        arr1.push(arr2[i])        
    }
   
    if(arr1){

        if (arr1.length % 2 == 0) {
            median = arr1[ (arr1.length/2 )]
          } else {
            median = arr1[ ( (arr1.length -1 )/2 )]
          }
    }
    return median
}

console.log("median:", medianOfArray ( arr1, arr2));