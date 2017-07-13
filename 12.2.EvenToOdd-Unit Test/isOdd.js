/**
 * Created by 1234 on 12.7.2017 г..
 */
function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}
module.exports={isOddOrEven};