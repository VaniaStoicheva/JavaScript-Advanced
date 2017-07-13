let jsdom=require('jsdom-global')();
let $=require('jquery');
let expect=require('Chai').expect;

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};


document.body.innerHTML=`<body>
    <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>
</body>`;

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
        it("with empty string(name should be null)",()=>{
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        it("with a  non-empty string(name should not be null)",()=>{
            sharedObject.changeName('Sisi');
            expect(sharedObject.name).to.be.equal('Sisi');
        })
    });
    describe("Name input test",()=>{
        it("with empty string name",()=>{
        sharedObject.changeName('Ala');
            sharedObject.changeName('');
            let nameTextVal=$('#name');
            expect(nameTextVal.val()).to.be.equal('Ala');
        });
        it("with non-empty string name",()=>{
            sharedObject.changeName('Ema');
            let nameTextVal=$('#name');
            expect(nameTextVal.val()).to.be.equal('Ema');
        })
    });
    describe("Change income test",()=>{
        it("with a string (should stay null",()=>{
            sharedObject.changeIncome('d');
            expect(sharedObject.income).to.be.null;
        });
        it("with a positive number",()=>{
            sharedObject.changeIncome(5);
            expect(sharedObject.income).to.be.equal(5);
        });
        it("with a floating-point ",()=>{
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(4.56);
            expect(sharedObject.income).to.be.equal(5);
        });
        it("with a negative number ",()=>{
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-9);
            expect(sharedObject.income).to.be.equal(5);
        });
        it("with zero ",()=>{
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(5);
        });
    });
    describe("Income input test",()=> {
        it("with a string (not work correctly)",()=>{
            sharedObject.changeIncome(5);
            sharedObject.changeIncome('d');
            let incomeText=$('#income');
            expect(incomeText.val()).to.be.equal('5');
        });
        it("with a positive number",()=>{
            sharedObject.changeIncome(5);
            let incomeText=$('#income');
            expect(incomeText.val()).to.be.equal('5');
        });
        it("with a floating-point number",()=>{
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(4.5);
            let incomeText=$('#income');
            expect(incomeText.val()).to.be.equal('5');
        });
        it("with a negative number",()=>{
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-5);
            let incomeText=$('#income');
            expect(incomeText.val()).to.be.equal('5');
        });
        it("with zero",()=>{
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            let incomeText=$('#income');
            expect(incomeText.val()).to.be.equal('5');
        });
    });
    describe("Update name test",()=>{
        it("with an empty string(should not change property",()=>{
            sharedObject.changeName('Viki');
            let nameEl=$('#name');
            nameEl.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Viki');
        });
        it("with an non-empty string(should  change property",()=>{
            sharedObject.changeName('Viki');
            let nameEl=$('#name');
            nameEl.val('Ani');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Ani');
        })
    });
    describe("Update income test",()=>{
        it("with a string(should not change income property)",()=>{
            sharedObject.changeIncome(3);
            let incomEl=$('#income');
            incomEl.val('vili');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });
        it("with a floating-point number",()=>{
            sharedObject.changeIncome(3);
            let incomEl=$('#income');
            incomEl.val('9.78');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        })
        it("with a negative number",()=>{
            sharedObject.changeIncome(3);
            let incomEl=$('#income');
            incomEl.val('-5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });
        it("with a zero",()=>{
            sharedObject.changeIncome(3);
            let incomEl=$('#income');
            incomEl.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });
        it("with a positive number",()=>{
            sharedObject.changeIncome(3);
            let incomEl=$('#income');
            incomEl.val('9');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(9);
        })
    })
});