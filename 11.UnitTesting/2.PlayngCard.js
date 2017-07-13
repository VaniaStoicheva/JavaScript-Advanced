/**
 * Created by 1234 on 11.7.2017 г..
 */
function makeCard(face,suit) {
    let validFaces=['2','3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits=['S' , 'H', 'D', 'C'];
    if(!validFaces.includes(face)){
        throw new Error("Wrong face");
    }
    if(!validSuits.includes(suit)){
        throw new Error("Wrong suit");
    }
    let card= {
        face: face,
        suit: suit,
        toString: () => {
            let suitToChar = {
                'S': "\u2660",
                'H': "\u2665",// (♥)
                'D': "\u2666",// (♦)
                'C': "\u2663"

            }
            return `${card.face}${suitToChar[card.suit]}`;
        }
    }
        return card;
    }
    //let card=makeCard('A', 'S');
console.log('' +makeCard('A', 'S') );