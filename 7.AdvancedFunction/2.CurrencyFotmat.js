/**
 * Created by 1234 on 4.7.2017 г..
 */
function formatCurreny(separator,symbol,symbolFirst,value) {
    let result=Math.trunc(value)+separator;
    result+=value.toFixed(2).substr(-2,2);
    if(symbolFirst)return symbol+' '+result;
    else return result+' '+symbol;
}
function getDollarFormatter(formatter) {
    function dollarFormatter(value) {
        return formatter(',','$',true,value);
    };
    return dollarFormatter;
}
let dollars=getDollarFormatter(formatCurreny);
console.log(dollars(365));