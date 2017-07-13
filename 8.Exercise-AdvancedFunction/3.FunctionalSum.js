/**
 * Created by 1234 on 5.7.2017 г..
 */
let solve=(function () {
    let sum=0;
    return function add(number) {
        sum+=number
        add.toString=function () {
            return sum
        }
        return add
    }
})()
console.log(solve(1)(6)(-3).toString());