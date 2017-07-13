/**
 * Created by 1234 on 12.7.2017 г..
 */
let mathEnforcer=require('./mathEnforcer').mathEnforcer;
let expect=require('Chai').expect;

describe("MathEnforcer function",()=>{
describe("addFive",()=> {
    it("parameter is string", () => {
        expect(mathEnforcer.addFive('hello')).to.be.undefined;
    });
    it("parameter is positive number", () => {
        expect(mathEnforcer.addFive(4)).to.equal(9);
    });
    it("parameter is negative number", () => {
        expect(mathEnforcer.addFive(-4)).to.equal(1);
    });
    it("parameter is floating point number", () => {
        expect(mathEnforcer.addFive(3.2)).to.closeTo(8.2, 0.01);
    });
})
    describe("subtractTen",()=>{
        it("parameter is string",()=>{
            expect(mathEnforcer.subtractTen('hello')).to.be.undefined;
        });
        it("parameter is positive number",()=>{
            expect(mathEnforcer.subtractTen(4)).to.equal(-6);
        });
        it("parameter is negative number",()=>{
            expect(mathEnforcer.subtractTen(-4)).to.equal(-14);
        });
        it("parameter is floating point number",()=>{
            expect(mathEnforcer.subtractTen(3.2)).to.closeTo(-6.8,0.01);
        });
});
    describe("sum",()=>{
        it("parameter is string",()=>{
            expect(mathEnforcer.sum('hello',1)).to.be.undefined;
        });
        it("parameter is string",()=>{
            expect(mathEnforcer.sum(4,'hi')).to.be.undefined;
        });
        it("parameter is positive number",()=>{
            expect(mathEnforcer.sum(4,5)).to.equal(9);
        });
        it("parameter is negative number",()=>{
            expect(mathEnforcer.sum(-4,-9)).to.equal(-13);
        });
        it("parameter is floating point number",()=>{
            expect(mathEnforcer.sum(3.2,2.2)).to.closeTo(5.4,0.01);
        });
    });
});