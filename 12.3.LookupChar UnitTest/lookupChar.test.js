/**
 * Created by 1234 on 12.7.2017 г..
 */
let lookupChar=require('./lookupChar').lookupChar;
let expect=require('Chai').expect;

describe("LoocupChar function",()=>{
    it("first parameter not a string return undefined",()=>{
        expect(lookupChar(13,0)).to.be.undefined;
    });
    it("second parameter not a number return undefined",()=>{
        expect(lookupChar('hello','seven')).to.be.undefined;
    });
    it("second parameter is floating point number return undefined",()=>{
        expect(lookupChar('hello',3.24)).to.be.undefined;
    });
    it("index is outside of the bounds of the string ",()=>{
        expect(lookupChar('hello',324)).to.equal("Incorrect index");
    });
    it("index is negative number ",()=>{
        expect(lookupChar('hello',-3)).to.equal("Incorrect index");
    });
    it("index is outside of the bounds of the string",()=>{
        expect(lookupChar('hello',5)).to.equal("Incorrect index");
    })
    it("correct parameter",()=>{
        expect(lookupChar('hello',0)).to.equal('h');
    });
    it("correct parameter",()=>{
        expect(lookupChar('hello',3)).to.equal('l');
    })
})