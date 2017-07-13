/**
 * Created by 1234 on 12.7.2017 г..
 */
let isSymetric=require('../5.Symetry').isSymmetric;
let expect=require('chai').expect;

describe("Ceck Symetry Unit Test",()=>{
    describe("General Sum Mocha Chai Test",()=>{
        it("should be a function",()=>{
            expect(typeof isSymetric).to.equal('function');
        });
        it("should  accept arguments",()=>{
            expect(isSymetric()).to.be.false;
        });
        it("should  accept only array",()=>{
            expect(isSymetric('test')).to.be.false;
        });
        it("should  accept only array",()=>{
            expect(isSymetric({})).to.be.false;
        });
    });
    describe("Value Test",()=>{
        it("should return true for ['bunny']",()=>{
            expect(isSymetric(['bunny'])).to.be.true;
        });
        it("should return true for [1,2,3,3,2,1]",()=>{
            expect(isSymetric([1,2,3,3,2,1])).to.be.true;
        });
        it("should return false for [1,2,4,3,2,1]",()=>{
            expect(isSymetric([1,2,4,3,2,1])).to.be.false;
        });
        it("should return true for [1,2,3,2,1]",()=>{
            expect(isSymetric([1,2,3,2,1])).to.be.true;
        });
        it("should return false for [1,2,4,1,2]",()=>{
            expect(isSymetric([1,2,4,1,2])).to.be.false;
        });
        it("should return false for [1,2]",()=>{
            expect(isSymetric([1,2])).to.be.false;
        });
        it("should return true for [1]",()=>{
            expect(isSymetric([1])).to.be.true;
        });
        it("should return true for [-1,2,-1]",()=>{
            expect(isSymetric([-1,2,-1])).to.be.true;
        });
        it("should return true for [-1,2,1]",()=>{
            expect(isSymetric([-1,2,1])).to.be.false;
        });
        it("Should return false",()=>{
            expect(isSymetric(['bunny','fox'])).to.be.false;
        });
        it("shuold return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]",()=>{
            expect(isSymetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.true;
        });
        it("shuold return false for [5,'hi',{a:5},new Date(),{X:5},'hi',5]",()=>{
            expect(isSymetric([5,'hi',{a:5},new Date(),{X:5},'hi',5])).to.be.false;
        });
        it("shuold return false for 1,2,3",()=>{
            expect(isSymetric(1,2,3)).to.be.false;
        });
        it("shuold return true for ['string',{},new Date(),[],new Date(),{},'string']",()=>{
            expect(isSymetric(['string',{},new Date(),[],new Date(),{},'string'])).to.be.true;
        })
    });
});