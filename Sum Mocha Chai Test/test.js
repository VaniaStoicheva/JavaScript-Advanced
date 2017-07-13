/**
 * Created by 1234 on 11.7.2017 г..
 */
function sum(arr) {
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }
    return sum;
}
//Chai Test
/*let expect=require('chai').expect;
describe("Test1",function () {
    it("Should return 3 for [1,2]", function () {
        expect(sum([1, 2])).to.equal(3);
    })
})*/
//Mocha Test
describe("Test1",function () {
    it("Should return 3 for [1,2]",function () {
        let expected=3;
        let actual=sum([1,2]);
        if(expected!==actual){
            throw new Error("3!==1+2");
        }
    })
    it("Should return 0 for []",function () {
        let expected=0;
        let actual=sum([]);
        if(expected!==actual){
            throw new Error("0!==0");
        }
    })
    it("Should return 1 for [1]",function () {
        let expected=1;
        let actual=sum([1]);
        if(expected!==actual){
            throw new Error("1!==1");
        }
    })
    it("Should return 3 for [1.5,2.5,-1]",function () {
        let expected=3;
        let actual=sum([1.5,2.5,-1]);
        if(expected!==actual){
            throw new Error("3!==1.5+2.5+(-1)");
        }
    })


})
