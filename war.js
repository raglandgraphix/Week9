class Cards{
    constructor(face,suit){
        this.face=face;
        this.suit=suit;
        this.value=this.getValue(face);

    }
    getValue(face){
        switch(face){
            case 'A': return 14;
            break;
            case 'K' : return 13;
            break;
            case 'Q' : return 12;
            break;
            case 'J' : return 11
            break;
            default : return parseInt(face);
        }
    }
}


//Build the deck
class Deck{
    constructor(e){
        this.deck = [];
        this.face = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
        this.suit = ['♡','♢','♣','♠'];
        this.player1=[];
        this.player2 = [];
       
    }
    //shuffle the deck
    shuffle(){
        //when this function runs it will loop through all the cards 4 times and add a suit to it, creating 52 cards and put them into this.deck
        
        for(let suits of this.suit){
            for(let faces of this.face){
                this.deck.push(new Cards(faces,suits));
            }
        }
        this.deck = [...this.deck].sort(() => Math.random() - 0.5);
        
        // return this.deck;
    }
    deal(){
       
            for (let [index, hand] of this.deck.entries()) {
                if(index%2===0){
                    this.player1.push(hand);
                }else{
                    this.player2.push(hand);
                }
            }
    
    }

    
    
}

//play the game
class Game {
    constructor(deck) {
      this.deck = deck;
      this.deck.shuffle();
      this.deck.deal();
      this.player1Score = 0;
      this.player2Score = 0;
      
    }
    play(){
        

        for(let i = 0; i<this.deck.player1.length;i++){
            if(this.deck.player1[i].value>this.deck.player2[i].value){
                console.log(`Player 1 played: ${this.deck.player1[i].face}${this.deck.player1[i].suit}:Player 2 played: ${this.deck.player2[i].face}${this.deck.player2[i].suit} :PLAYER 1 WINS!!!!!!`);
                this.player1Score++;
            }else if(this.deck.player1[i].value<this.deck.player2[i].value){
                console.log(`Player 1 played: ${this.deck.player1[i].face}${this.deck.player1[i].suit}:Player 2 played: ${this.deck.player2[i].face}${this.deck.player2[i].suit} :PLAYER 2 WINS!!!!!!`);
                this.player2Score++;
            }else if(this.deck.player1[i].value===this.deck.player2[i].value){
                console.log(`Player 1 played: ${this.deck.player1[i].face}${this.deck.player1[i].suit}:Player 2 played: ${this.deck.player2[i].face}${this.deck.player2[i].suit} : It's A Tie!!!!`);
            }else{
                console.log('Something Failed');
            }
        }
        console.log(`Player 1 score is: ${this.player1Score} ---- Player 2 score is:${this.player2Score}`);
        if(this.player1Score>this.player2Score){
            console.log(`Player 1 is the Champion!`);
        }else if(this.player1Score<this.player2Score){
            console.log(`Player 2 is the Champion!`);
        }else if(this.player1Score===this.player2Score){
            console.log(`HOLY COW.... We have a tie!`)
        }else{
            console.log('Something failed');
        }
        
    }


}  
let deck = new Deck();
let game = new Game(deck);
game.play();
