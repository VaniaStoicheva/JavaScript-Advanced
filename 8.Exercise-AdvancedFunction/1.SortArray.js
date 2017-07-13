/**
 * Created by 1234 on 4.7.2017 г..
 */
function sortArray(arr,sortType) {
    if(sortType==='asc'){
      return arr.sort((a,b)=>{
          "use strict";
          return a-b;
      })
      }
    else{
        return arr.sort((a,b)=>{
            "use strict";
            return b-a;
        })
    }
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));