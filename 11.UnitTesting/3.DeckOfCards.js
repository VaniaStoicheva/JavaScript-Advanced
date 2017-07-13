/**
 * Created by 1234 on 11.7.2017 г..
 */
function dekcOfCards(arrCards) {
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
    let dekc=[];
    for (let card of arrCards) {
        let face = card.substring(0, card.length - 1);
        let suit = card[card.length - 1];

        try {
            dekc.push(makeCard(face,suit));
        }catch (err){
            console.log(`Invalid card: ${card}`);
            return;
        }
    }
    console.log(dekc.join(' '));
}
//dekcOfCards(['AS', '10D', 'KH', '2C']);