/**
 * Created by 1234 on 12.7.2017 г..
 */
let isOddOrEven=require('./isOdd').isOddOrEven;
let expect=require('Chai').expect;

describe("OddOrEven length string",()=>{
    it("is not a string return undefined",()=>{
        expect(isOddOrEven(12)).to.be.undefined;
    });
    it("input was o object return undefined",()=>{
        expect(isOddOrEven({name:'ani'})).to.be.undefined;
    });
    it("input was strin even length",()=>{
        expect(isOddOrEven('nana')).to.equal('even');
    });
    it("input was strin odd length",()=>{
        expect(isOddOrEven('ana')).to.equal('odd');
    });
    it("input was strin even length",()=>{
        expect(isOddOrEven('this is nana')).to.equal('even');
    });
})