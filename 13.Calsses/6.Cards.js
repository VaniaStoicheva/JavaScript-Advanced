/**
 * Created by 1234 on 14.7.2017 г..
 */
let cardDefined=(function () {
   let Suits= {
       SPADES: '♠',
       HEARTS: '♥',
       DIAMONDS: '♦',
       CLUBS: '♣'

   };
    let Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    class Card{
       constructor(face,suit){
            this.face=face;
            this.suit=suit;
       }
       get face(){
           return this._face;
       }
       set face(face){
           if(!Faces.includes(face)){
               throw new Error("Invalid card face: "+face);
           }
           this._face=face;
       }
       get suit(){
           return this._suit;
       }
       set suit(suit){
           if(!Object.keys(Suits).map(k=>Suits[k]).includes(suit)){
               throw new Error("Invalid card suit: "+suit);
           }
           this._suit=suit;
       }
       toString(){
           return `${this.face}${this.suit}`;
       }
    }

    return {
       Suits: Suits,
        Card:Card,
    }
})();
let cards=cardDefined.Card;
let suits=cardDefined.Suits;
let c1=new cards("Q",suits.CLUBS);
c1.face="A";
c1.suit=suits.DIAMONDS;
console.log(c1);
let c2=new cards("1",suits.HEARTS);
console.log(c2);