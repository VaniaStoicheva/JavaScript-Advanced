/**
 * Created by 1234 on 8.7.2017 г..
 */
function commandProcessor(arrCommans) {

    let proccessor=(function () {
        let myObj = new Map();

        function create(name,param,parent) {
            if(param) inherit(name,parent);
           else myObj.set(name, {});
        }

        function inherit(name, parent) {
            myObj.set(name, Object.create(myObj.get(parent)));
        }

        function set(objName, propName, propValue) {
            myObj.get(objName)[propName] = propValue;
        }

        function print(name) {
            let current = myObj.get(name);
            let props = [];
            for (let prop in current) {
                props.push(`${prop}:${current[prop]}`);
            }
            console.log(props.join(','));
        }
        return {create,inherit,set,print};
    })();

    for(let cmd of arrCommans){
        let [command,name,param,value]=cmd.split(' ');
        proccessor[command](name,param,value)
    }
}
create('c1');
inherit('c2', 'c1');
set('c2','model','new');
set('c2','color','red');
console.log(myObj);
print('c2');