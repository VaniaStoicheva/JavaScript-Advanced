/**
 * Created by 1234 on 4.7.2017 г..
 */
function result(){
    var types={};
    for (let i = 0; i < arguments.length; i++) {
        var argumentValue=arguments[i];
        console.log(`${typeof argumentValue}: ${argumentValue}`);


        if (!types.hasOwnProperty(typeof argumentValue)) {
            types[typeof argumentValue]=0;
        }
        types[typeof  argumentValue]++;
    }

    let sortedArr=[];
    for (var arg in types) {
        if(types.hasOwnProperty(arg)) {
            var element = types[arg];
            sortedArr.push(arg, element);
        }
    }

    sortedArr=sortedArr.sort((a,b)=>{
        return b[1]-a[1];
    });
    console.log(sortedArr);

    for (var i = 0; i < sortedArr.length; i++) {
        var element=sortedArr[i];
        let argumentType=typeof element;
        let argumentCount=argumentType;

        console.log(`${element} = ${argumentCount}`);
    }
}
result(42, 'cat', 15, 'kitten', 'tomcat');
