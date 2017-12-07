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
            source: 'images/Gif/evil.gif',
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
    this.timing = 0;
    this.shuffleBad()
    this.partyTime = 60;
    this.courrentTime = this.partyTime
    this.cardPoint =0;
    this.numberOfCards = 14;
    this.intervall = 3500;
}

KillingHeroe.prototype.startGame = function() {

    $('.center > img').attr('src',"");
    this.chrono();
    this.gameCards();
    this.showCard();
    this.acceleration();

    $("#chrono > h6").text(0)
    $('#startButton').addClass('tada') 
    }

KillingHeroe.prototype.chrono = function() {
    var counter = this.partyTime;
    var that = this;
    var countdown = setInterval(function() {
        if (counter > 0) {
            counter += -1;
            $("#chrono > h6").text(counter);
            that.courrentTime = counter;
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
    clearInterval(this.timing)
    temp = Math.floor(Math.random() * 2)

for (i = 0; i < this.numberOfCards; i++) 
    {
    $('.cardgame[index-data="'+i+'"] > img').attr('src', '')
    }
    $('.center').prepend('<img id="theImg" src="'+ that.gameOverCard[temp].source +'" />')
    $('#startButton').toggleClass('launch')
    $('#startButton').addClass('animated tada')  

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

KillingHeroe.prototype.acceleration = function() 
{
    
    var that = this;
    this.timing = setInterval(
         function () {
             that.intervall = that.intervall * (0.9)
             clearInterval(that.cycleInterval);
             that.cycleInterval = setInterval(that.showCard.bind(that),that.intervall);
            }, 3000);
 

}

KillingHeroe.prototype.showCard = function() {
    console.log(this);
    this.shuffleBad();
    this.shuffle();
    this.gameCards();
    var j = this.gameCards();
    that = this;
   
    for (i = 0; i < this.numberOfCards; i++) {
          $('.cardgame[index-data="'+i+'"] > img').attr('src', j[i].source)
        }
}
KillingHeroe.prototype.changeCursor = function () 
{
        $hand = $('.hand');
        $hand.click(function() {
            $hand.css('cursor','images/objets/lightsabericonred .png');
        });

}

KillingHeroe.prototype.points = function(e) {
     
      party.cardPoint += party.theGame[$(this).attr('index-data')].score;
      //if(){
      //localStorage.setItem("Best Score", party.cardpoint);
      //localStorage.Item("Best Score", party.cardpoint);
      //}
      $("#count > h6").text(party.cardPoint);
      $("#count2 > h6").text(party.theGame[$(this).attr('index-data')].score);
      $("#count2").toggleClass('animated zoomIn');

      if (party.theGame[$(this).attr('index-data')].score == 2) {
        createjs.Sound.play(soundIDGood);
      }
       else { party.theGame[$(this).attr('index-data')].score
        createjs.Sound.play(soundIDBad);
      }
      //elseif () {}


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
    setTimeout(() => {
        $('.explode-wrapper').hide();
        console.log('reload img', $(this).find('img'))
        if ($(this).find('img').length === 0) {
        $(this).append("<img id ='target' src='' alt=''>")}
        else ;

    }, 1000);

}


var party = new KillingHeroe();


var soundIDGood = "Good";
var soundIDBad = "Bad";

function loadSound () {
    createjs.Sound.registerSound("sounds/mossburg.mp3", soundIDGood);
    createjs.Sound.registerSound("sounds/minigun.mp3", soundIDBad);
}

function playSound () {
    createjs.Sound.play(soundID);
}

