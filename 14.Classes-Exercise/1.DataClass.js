/**
 * Created by 1234 on 14.7.2017 г..
 */
class Request{
    constructor(method,uri,version,message,responce=undefined,fulfilled=false){
        this.method=method;
        this.uri=uri;
        this.version=version;
        this.message=message;
        this.response=responce;
        this.fulfilled=fulfilled;
    }
}
let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);