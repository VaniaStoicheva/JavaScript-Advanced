/**
 * Created by 1234 on 9.7.2017 г..
 */
(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        let newArr = this.slice(n);
        return newArr;
    };
    Array.prototype.take = function (n) {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }
        return result;
    };
    Array.prototype.sum = function () {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this[i];
        }
        return sum;
    };
    Array.prototype.average = function () {
        let sum = this.sum();
        return sum / this.length;
    };
})()
let myArr=[1,2,3,4];
console.log(myArr.last());
console.log(myArr.skip(2));
console.log(myArr.take(2));
console.log(myArr.sum());
console.log(myArr.average());