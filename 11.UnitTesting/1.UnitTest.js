/**
 * Created by 1234 on 11.7.2017 г..
 */
function subsum(array,startIndex,endIndex) {
    let sum=0;
    if(!Array.isArray(array)){
        return NaN;
    //throw new Error("Input is not an array!");
    }
    if(startIndex<0)startIndex=0;
    if(endIndex>=array.length)endIndex=array.length-1
        for (let i = startIndex; i <=endIndex; i++)
        sum+=Number(array[i]);

    return sum;
}
console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300));
//throw new RangeError("Starting index outside the bounds of the array ")