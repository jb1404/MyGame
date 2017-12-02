$(document).ready(function() {
    $('#startButton').click(function(e) {

       party.startGame();
        $('#startButton').addClass('launch') 
    })
})


// Class for the game
var KillingHeroe = function() {
    this.cardGood = [{
            index: 0,
            name: 'Trumpy',
            source: 'images/Gif/CA.gif',
            shot: 'Evil.jpg',
            cliked: false,
            score: -3,
            goodGuy: false,
            special: false,
            effectIn: 'animated bounceOut',
            effectOut: 'animated bounceOut'
        },
        {
            index: 0,
            name: 'Trumpy',
            source: 'images/Gif/CA.gif',
            shot: 'Evil.jpg',
            cliked: false,
            score: -3,
            goodGuy: false,
            special: false,
            effectIn: 'animated bounceOut',
            effectOut: 'animated bounceOut'
        },
        {
            index: 0,
            name: 'Trumpy',
            source: 'images/Gif/CA.gif',
            shot: 'Evil.jpg',
            cliked: false,
            score: -3,
            goodGuy: false,
            special: false,
            effectIn: 'animated bounceOut',
            effectOut: 'animated bounceOut'
        },
        {
            index: 0,
            name: 'Trumpy',
            source: '',
            shot: '',
            cliked: false,
            score: 2,
            goodGuy: false,
            special: false,
            effectIn: 'animated bounceOut',
            effectOut: 'animated bounceOut'
        },
        {
            index: 0,
            name: 'Trumpy',
            source: 'images/Gif/CA.gif',
            shot: 'Evil.jpg',
            cliked: false,
            score: -3,
            goodGuy: false,
            special: false,
            effectIn: 'animated bounceOut',
            effectOut: 'animated bounceOut'
        },
        {
            index: 0,
            name: 'Trumpy',
            source: '',
            shot: '',
            cliked: false,
            score: -3,
            goodGuy: false,
            special: false,
            effectIn: 'animated bounceOut',
            effectOut: 'animated bounceOut'
        },



    ];

    this.cardBad = [{
            index: 0,
            name: 'Evil',
            source: 'images/Gif/evil.gif',
            shot: '//images/Trumpy_clicked.png',
            cliked: false,
            score: 2,
            goodGuy: false,
            special: false,
            effectIn: 'animated bounceOut',
            effectOut: 'animated bounceOut'
        },
        {
            index: 0,
            name: 'Evil',
            source: 'images/Gif/evil.gif',
            shot: '//images/Trumpy_clicked.png',
            cliked: false,
            score: 2,
            goodGuy: false,
            special: false,
            effectIn: 'animated bounceOut',
            effectOut: 'animated bounceOut'
        },
        {
            index: 0,
            name: 'Evil',
            source: 'images/Gif/evil.gif',
            shot: '//images/Trumpy_clicked.png',
            cliked: false,
            score: 2,
            goodGuy: false,
            special: false,
            effectIn: 'animated bounceOut',
            effectOut: 'animated bounceOut'
        },
        {
            index: 0,
            name: 'Trumpy',
            source: '',
            shot: '',
            cliked: false,
            score: 2,
            goodGuy: false,
            special: false,
            effectIn: 'animated bounceOut',
            effectOut: 'animated bounceOut'
        },
        {
            index: 0,
            name: 'Evil',
            source: 'images/Gif/evil.gif',
            shot: '//images/Trumpy_clicked.png',
            cliked: false,
            score: 2,
            goodGuy: false,
            special: false,
            effectIn: 'animated bounceOut',
            effectOut: 'animated bounceOut'
        },
        {
            index: 0,
            name: 'Trumpy',
            source: '',
            shot: '',
            cliked: false,
            score: 2,
            goodGuy: false,
            special: false,
            effectIn: 'animated bounceOut',
            effectOut: 'animated bounceOut'
        },


    ];

    this.gameOverCard = [{
        index: 0,
        name: 'Evil',
        source: 'images/GameOver/1.gif',
        },
        {
            index: 1,
            name: 'Cat',
            source: 'images/GameOver/2.gif',
        }]

    this.totalScore = 0;
    $('.cardgame').on('click', this.points);
    this.total = 20;
    this.theGame = [];
    this.shuffle();
    this.shuffleBad()
    this.partyTime = 5;
    this.cardPoint =0;
    this.numberOfCards = 14;
}

KillingHeroe.prototype.startGame = function() {
    this.cycleInterval = setInterval(this.showCard.bind(this),4000);
    this.chrono();
    this.gameCards();
    this.showCard();
    }

KillingHeroe.prototype.chrono = function() {
    var counter = this.partyTime;
    var that = this;
    var countdown = setInterval(function() {
        if (counter > 0) {
            counter += -1;
            $("#chrono > h6").text(counter);
            that.partyTime = counter;
        } else {
            clearInterval(that.cycleInterval);
            that.gameOver();
            clearInterval(countdown);
        } ;
    }, 1000)
}

KillingHeroe.prototype.gameOver = function() 
{
    var that = this;
    console.log('game over');
    temp = Math.floor(Math.random() * 2)

for (i = 0; i < this.numberOfCards; i++) 
    {
    $('.cardgame[index-data="'+i+'"] > img').attr('src', '')
    }
    $('.center').prepend('<img id="theImg" src="'+ that.gameOverCard[temp].source +'" />')
    $('#startButton').toggleClass('launch') 

}

KillingHeroe.prototype.gameCards = function() {
    var good = this.cardGood;
    var bad = this.cardBad;
    this.theGame = [];
    j = bad.length - 1;
    for (i = 0; i < good.length; i++) {
        this.theGame.push(good[i]);
        this.theGame.push(bad[j]);
        this.theGame.push(bad[j]);
        j = j - 1
    }
    return this.theGame;
}
KillingHeroe.prototype.shuffle = function() {
    var counter = this.cardGood.length - 1;
    var random = 0;
    for (var i = counter; i > 0; i = i - 1) {
        random = Math.floor(Math.random() * counter);
        temp = this.cardGood[random];
        this.cardGood[random] = this.cardGood[counter];
        this.cardGood[counter] = temp;
    }



}

KillingHeroe.prototype.shuffleBad = function() {
    var counter = this.cardBad.length - 1;
    var random = 0;
    for (var i = counter; i > 0; i = i - 1) {
        random = Math.floor(Math.random() * counter);
        temp = this.cardBad[random];
        this.cardBad[random] = this.cardBad[counter];
        this.cardBad[counter] = temp;
    }

}



KillingHeroe.prototype.showCard = function() {
    console.log()
    this.shuffleBad();
    this.shuffle();
    this.gameCards();
    var j = this.gameCards();
    that = this;
   
    $('#startButton').on('click', function()
    { 
    }
    )
    for (i = 0; i < this.numberOfCards; i++) {

        $('.cardgame[index-data="'+i+'"] > img').attr('src', j[i].source)
        }
}


KillingHeroe.prototype.points = function(e) {
     
      party.cardPoint += party.theGame[$(this).attr('index-data')].score;
      $("#count > h6").text(party.cardPoint);
      $("#count2 > h6").text(party.theGame[$(this).attr('index-data')].score);
    
    var tmp = $(this).find('img')
    tmp.explode({
        "minWidth": 3,
        "maxWidth": 12,
        "radius": 235,
        "minRadius": 15,
        "release": false,
        "fadeTime": 300,
        "recycle": false,
        "recycleDelay": 500,
        "explodeTime": 131,
        "round": false,
        "minAngle": 0,
        "maxAngle": 360,
        "gravity": 10,
        "groundDistance": 236
    });
    setTimeout(function() {
        $('.explode-wrapper').hide()
    }, 1000);

}


var party = new KillingHeroe();
