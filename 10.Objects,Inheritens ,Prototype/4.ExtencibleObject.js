/**
 * Created by 1234 on 10.7.2017 г..
 */
function extencibleObject() {
    let obj={
        extend: function (template) {
            for(let key in template){
                if(template.hasOwnProperty(key)){
                    var element=template[key];
                    if(typeof element==='function'){
                        obj.__proto__[key]=element
                    }else{
                        obj[key]=element
                    }
                }
            }
        }
    }
    return obj;
}