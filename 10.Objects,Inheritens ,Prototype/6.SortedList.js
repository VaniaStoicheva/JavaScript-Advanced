/**
 * Created by 1234 on 10.7.2017 г..
 */
function getSortedList() {
    return {
        internalArr:[],
        size:0,
        add:function (element) {
            this.internalArr.push(element);
            this.size++;
            this.sort();
        },
       
        remove:function (index) {
            if(index >= 0 && index < this.internalArr.length){
            this.internalArr.splice(index,1);
            this.size--;
            }
        },
        get:function (index) {
           if(index >= 0 && index < this.internalArr.length){
               return this.internalArr[index];
           }
        },
        sort:function () {
            this.internalArr=this.internalArr.sort((a,b)=>a-b);
        },
    toString:function () {
        return this.internalArr.join(',')
        }
    }
}
let sortedList=getSortedList();
sortedList.add(9);
console.log(sortedList.toString());

sortedList.add(3);
console.log(sortedList.toString());
console.log(sortedList.remove(0));;
console.log(sortedList.toString());
console.log(sortedList.get(0));;
console.log(sortedList.size);
console.log(sortedList.toString());