/**
 * Created by 1234 on 14.7.2017 г..
 */
let extensible=(function () {
   let id=0;
   return class Extencible{
       constructor(){
           this.id=id++;
       }
       extend(template) {
           for(let prop in template){
               if(template.hasOwnProperty(prop)){

                   if(typeof template[prop]==='function'){
                       Extencible.prototype[prop]=template[prop];
                   }else{
                       this[prop]=template[prop];
                   }
               }
           }
       }
   }
})();
let obj1=new extensible();
let obj2=new extensible();
console.log(obj1);
console.log(obj2);