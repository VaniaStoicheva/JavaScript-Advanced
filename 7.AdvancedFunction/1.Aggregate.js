function aggregate(arr){
    "use strict";
    function reduce(arr,func) {
        let result = arr[0];
        for (let nextElement of arr.slice(1))
            result = func(result, nextElement);
            return result;

    }
        console.log('Sum = '+reduce(arr,(a,b)=>a+b));
    console.log('Min = '+reduce(arr,(a,b)=>(a>b)? b : a));
    console.log('Max = '+reduce(arr,(a,b)=>(a>b)? a : b));
    console.log('Product = '+reduce(arr,(a,b)=>a*b));
    console.log('Join = '+reduce(arr,(a,b)=>''+a+b));
    }


arr=[2,3,10,5];
aggregate(arr);