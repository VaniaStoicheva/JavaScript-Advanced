/**
 * Created by 1234 on 12.7.2017 г..
 */
function validateRequest(inputObj) {
    let resultObj={};
    let method=['GET','POST','DELETE','CONNECT'];
    let version=['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1','HTTP/2.0' ];
    let messagePattern = /^[^<>\\&'"\r\n]*$/;
    let uriPatern = /^[a-zA-Z0-9.*]+$/g;

    resultObj.method=inputObj.method;
    if(!method.includes(inputObj.method) && inputObj.method===''){
        throw new Error("Invalid request header: Invalid Method")
    }
    resultObj.uri=inputObj.uri;
    if(uriPatern.exec(inputObj)!==null && inputObj.uri===''){
        throw new Error("Invalid request header: Invalid URI");
    }
    resultObj.version=inputObj.version;
    if(!version.includes(inputObj.version) && inputObj.version===''){
        throw new Error("Invalid request header: Invalid Version")
    }

    resultObj.message=inputObj.message;
    if(messagePattern.exec(inputObj)===null && inputObj.message===''){
        throw new Error("Invalid request header: Invalid Message");
    }
}



