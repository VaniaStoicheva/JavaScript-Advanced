/**
 * Created by 1234 on 12.7.2017 г..
 */
function validateRequest(inputObj) {
    let resultObj={};
    let method=['GET','POST','DELETE','CONNECT'];
    let version=['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1','HTTP/2.0' ];

    resultObj.method=inputObj.method;
    if(!method.includes(inputObj.method)){
        throw new Error("Invalid request header: Invalid Method")
    }
    resultObj.version=inputObj.version;
    if(!version.includes(inputObj.version)){
        throw new Error("Invalid request header: Invalid Version")
    }
}
validateRequest({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
});

