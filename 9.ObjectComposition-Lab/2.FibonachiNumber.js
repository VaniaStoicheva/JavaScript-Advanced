/**
 * Created by 1234 on 7.7.2017 г..
 */
function fibonator() {
let f1=0;
let f2=1;

return function fib() {
    let f3=f1+f2;
    f1=f2;
    f2=f3;
    return f1;
}

}
let fib=fibonator();
fib(); // 1
fib(); // 1
fib(); // 2
fib(); // 3
fib(); // 5

