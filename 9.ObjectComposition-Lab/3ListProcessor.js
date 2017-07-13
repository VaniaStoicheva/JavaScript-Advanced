/**
 * Created by 1234 on 7.7.2017 г..
 */
function processCommands(arr) {
    let processor = (function () {
        let list = [];
        function add(string) {
            list.push(string);
        }

        function remove(string) {
            list = list.filter(e => e !== string);
        }

        function print() {
            console.log(list.toString());
        }
        return {add,remove,print}
    })();
    for(let command of arr){
        let commandTokens=command.split(' ');
        processor[commandTokens[0]](commandTokens[1]);
    }
}
processCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);
