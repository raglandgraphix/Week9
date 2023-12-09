//Game of War
//create the cards
//create the deck
//shuffle the deck
//deal the deck to 2 players
//show results

//The cards will consist of the face and the suit. A value is added to the cards so that they can win or lose.
//Cards will be called from a class below.
class Cards{
    constructor(face,suit){
        this.face=face;
        this.suit=suit;
        this.value=this.getValue(face);

    }
    //method to get the value of the cards. Since A, K, Q, and J are strings they must be assigned and the turn the rest of the faces into a number.
    //the method returns the value above.
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
                //this passes the information to the Cards class which will give it values. This is really when the 
                //cards are made.
                this.deck.push(new Cards(faces,suits));
            }
        }
        //this does the shuffling of the cards
        this.deck = [...this.deck].sort(() => Math.random() - 0.5);
        
       
    }
    //dealing the card now is as simple as saying the top card, which is indexed at even locations needs to be 
    //given to player 1 and the odd cards given to player 2
    deal(){
       
            for (let [index, hand] of this.deck.entries()) {
                //the function below knows that if the remainder is 0 it is an index that is even.
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
    //passing the deck in... it comes from being added to the parameter in the new Game method call below.
    constructor(deck) {
      this.deck = deck;
      // this calles the shuffle
      this.deck.shuffle();
      //this calls the deal
      this.deck.deal();
      //scores variables for keeping track
      this.player1Score = 0;
      this.player2Score = 0;
      
    }
    play(){
        
//when the play function is called you have to iterate through the cards.
//either player 1 or player 2. It doesn't matter because they both have 26.
        for(let i = 0; i<this.deck.player1.length;i++){
            //if player 1 has a higher value call this.
            if(this.deck.player1[i].value>this.deck.player2[i].value){
                console.log(`Player 1 played: ${this.deck.player1[i].face}${this.deck.player1[i].suit}:Player 2 played: ${this.deck.player2[i].face}${this.deck.player2[i].suit} :PLAYER 1 WINS!!!!!!`);
                this.player1Score++;
            //if player 1 has a lower value call this.
            }else if(this.deck.player1[i].value<this.deck.player2[i].value){
                console.log(`Player 1 played: ${this.deck.player1[i].face}${this.deck.player1[i].suit}:Player 2 played: ${this.deck.player2[i].face}${this.deck.player2[i].suit} :PLAYER 2 WINS!!!!!!`);
                this.player2Score++;
            //if player 1 and player 2 have the same value call this for the tie.
            }else if(this.deck.player1[i].value===this.deck.player2[i].value){
                console.log(`Player 1 played: ${this.deck.player1[i].face}${this.deck.player1[i].suit}:Player 2 played: ${this.deck.player2[i].face}${this.deck.player2[i].suit} : It's A Tie!!!!`);
            //if any other comparison is made there is something wrong.
            }else{
                console.log('Something Failed');
            }
        }
        //when the program is done iterating through the for loop and breaks out. this will run.
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
//create the new Deck
let deck = new Deck();
//create the new Game with the deck passed through it so that it can utiilize the information of the deck.
let game = new Game(deck);
//let er rip.
game.play();
