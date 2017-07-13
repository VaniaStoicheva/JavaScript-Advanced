/**
 * Created by 1234 on 12.7.2017 г..
 */
let createCalculator=require('./sumator').createCalculator;
let expect=require('chai').expect;

describe("Sumator check",()=>{
    let calc;
    beforeEach(()=>{
        calc=createCalculator();
    });
    it("Should return object",()=>{
        expect(typeof calc).to.equal('object');
    });
    it("Should have 0 value when created",()=>{
        expect(calc.get()).to .equal(0);
    });
    it("Should return 5 to add(2,3)",()=>{
    calc.add(2);
    calc.add(3);
        expect(calc.get()).to .equal(5);
    });
    it("Should subtract",()=>{
        calc.subtract(2);
        calc.subtract(3);
        expect(calc.get()).to .equal(-5);
    });
    it("Should add ,subtract",()=>{
        calc.add(5.3);
        calc.subtract(1.1);
        expect(calc.get()).to.be.closeTo(4.2,0.002);
    });
    it("Should mixed value",()=>{
        calc.add(10);
        calc.subtract('7');
        calc.add(-2);
        calc.subtract(-1);
        expect(calc.get()).to.equal(2);
    });
    it("Should return add NaN",()=>{
        calc.add('hello');
        expect(calc.get()).to.be.NaN;
    });
    it("Should return subtract NaN",()=>{
        calc.subtract('hello');
        expect(calc.get()).to.be.NaN;
    });
    it("Should return add NaN",()=>{
        calc.add('7');
        expect(calc.get()).to.equal(7);
    });
})