/**
 * Created by 1234 on 10.7.2017 г..
 */
(function solve() {
String.prototype.ensureStart=function (str){
        if(!this.startsWith(str)){
        let newStr=str+this;
        return  newStr;
        }
        return this.toString();
    };
String.prototype.ensureEnd=function (str){
    if(!this.endsWith(str)){
        let newStr=this+str;
        return  newStr;
    }
    return this.toString();
};
String.prototype.isEmpty=function () {
    if(this.length===0){
        return true;
    }
    return false;
};
String.prototype.truncate=function (n) {
    let word=this.split(' ');
    if(this.length<=n){
        return this.toString();
    }
    else{
        return this.substring(-1,n-6)+(this.length>n ?'...' :'');
    };
    String.prototype.format=function (str,params) {
        let newStr
        for(let argument of arguments){
            let str=argument[0];
            newStr=str.replace('{}',argument);
    }
    return newStr;
    }
}})()
String.format=function (str,params) {
    let newStr
    for(let argument of arguments){
        //let str=argument[0];
        newStr=str.replace('{}',argument);
    }
    return newStr;
}

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ')
//str = str.truncate(16);
//str = str.truncate(14);
str = str.truncate(8)
console.log(str = String.format('The {0} {1} fox',
    'quick', 'brown'));

console.log(str);
