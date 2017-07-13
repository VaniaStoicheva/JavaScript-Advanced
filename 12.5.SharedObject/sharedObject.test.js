/**
 * Created by 1234 on 12.7.2017 г..
 */
let sharedObject=require('./sharedObject').sharedObject;
let expect=require('Chai').expect;

describe("Shared Object function",()=>{
    describe("Initial value test",()=> {
        it("test name initial value",()=>{
            expect(sharedObject.name).to.be.null;
        });
        it("test income initial value",()=>{
            expect(sharedObject.income).to.be.null;
        });
    });
    describe("Change name test",()=>{
        it("name is empty string",()=>{
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        /*it("name is non-empty string",()=>{
            sharedObject.changeName('Anita');
            expect(sharedObject.name).to.be.equal('Anita');
        });*/

    });
});