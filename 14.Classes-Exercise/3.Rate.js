/**
 * Created by 1234 on 14.7.2017 г..
 */
class Rat{
    constructor(name){
        this.name=name;
        this.uniteRate=[];
    }
    unite(otherRate){
        if(otherRate instanceof Rat){
            this.uniteRate.push(otherRate);
        }
    }
    getRats(){
        return this.uniteRate;
    }
    toString(){
        let result=this.name+'\n';
        for(let rat of this.uniteRate){
            result+=`##${rat.name}\n`;
        }
        return result.trim();
    }
}
let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
