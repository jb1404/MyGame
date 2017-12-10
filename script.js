$(document).ready(function() 
{
    audio.play();
    //createjs.Sound.play(soundIDStart); 
    $('#startButton').on('click', function(e){
        //party.startGame();
    })
    //$('navbar-expand-lg').toggleClass('show');
    //$('page-footer').toggleClass('launch');
    
    setTimeout(function() {
        party.startGame();
       
    },1100);
    

    
})


// Class for the game
var KillingHeroe = function() {
    this.cardGood = [{
            index: 0,
            name: 'Trumpy',
            source: 'images/Gif/droide.gif',
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
            source: 'images/Gif/chewie.gif',
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
            source: 'images/Gif/droide.gif',
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
            source: 'images/Gif/Luke.gif',
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
            source: 'images/Gif/droide.gif',
            shot: '',
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
            source: 'images/Gif/hulk.gif',
            shot: '',
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
            source: 'images/Gif/Evil2.gif',
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
            source: 'images/Gif/thor.gif',
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
            source: 'images/Gif/yop.gif',
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
            source: 'images/Gif/mickael.gif',
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
            source: 'images/Gif/maya.gif',
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
            source: 'images/Gif/maxence.gif',
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
            source: 'images/Gif/charlotte.gif',
            shot: '',
            cliked: false,
            score: 2,
            goodGuy: false,
            special: false,
            effectIn: 'animated bounceOut',
            effectOut: 'animated bounceOut'
        },


    ];
    this.reaction =[
        {   
            source: 'images/Gif/yes.png'
        },
        {   
            source: 'images/Gif/no.png'
        }
    ]

    this.extraCard =[
        {   
            name : 'charlotte',
            source: 'images/Gif/charlotte.gif',
            sound:'',
            score:'4'
        },
        {   name : 'jony',
            source: 'images/Gif/maxence.gif',
            sound:'',
            score:'5'
        },
        {   
            name : 'charlotte',
            source: 'images/Gif/maya.gif',
            sound:'',
            score:'4'
        },
        {   name : 'jony',
            source: 'images/Gif/mickael.gif',
            sound:'',
            score:'5'
        }
        ,
        {   
            name : 'charlotte',
            source: 'images/Gif/thor.gif',
            sound:'',
            score:'10'
        }
    ]
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
    this.bestScore = 0;
    this.timing = 0;
    this.shuffleBad()
    this.partyTime = 35;
    this.courrentTime = this.partyTime
    this.cardPoint =0;
    this.numberOfCards = 21;
    this.intervall = 3500;
}

KillingHeroe.prototype.startGame = function() {

    $('.center > img').attr('src',"");
    this.chrono();
    this.gameCards();
    this.showCard();
    this.acceleration();
    

    $('#startButton').addClass('tada') 
    }

KillingHeroe.prototype.chrono = function() {
    var counter = this.partyTime;
    var that = this;
    var countdown = setInterval(function() {
        if (counter > 0) {
            counter += -1;
            $("body > div.menu > div.border.border-info.topscore.deux > span > h5").text('Chrono : '+counter);
            that.currentTime = counter;
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
    $('.navbar').toggleClass('launch');
    $('body > footer').toggleClass('launch');
    $('.cardgame').toggleClass('cardgameOver');
    $('#target1').attr('src', '')
   
    //if( party.cardPoint > that.bestScore){
      //localStorage.setItem("Best Score", party.cardpoint);
      //localStorage.Item("Best Score");
      //}

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
    var extra = this.extraCard;
    this.theGame = [];
    j = bad.length - 1;
    g = extra.length -1
    console.log('current time',this.currentTime )
    console.log('temps',this.partyTime)
        /*if ( this.currentTime<0,3*this.partyTime)
        {
            for (i = 0; i < good.length; i++) {
                this.theGame.push(good[i]);
                this.theGame.push(extra[g]);
                this.theGame.push(bad[g]);
                this.theGame.push(extra[g]);
            
                g = g - 1
            }
            return this.theGame;
        }
    else {*/
        for (i = 0; i < good.length; i++) {
            this.theGame.push(good[i]);
            this.theGame.push(bad[j]);
            this.theGame.push(bad[j]);
            j = j - 1
        }
            return this.theGame;
        }
//}
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
             that.intervall = that.intervall * (0.78)
             clearInterval(that.cycleInterval);
             that.cycleInterval = setInterval(that.showCard.bind(that),that.intervall);
            }, 3000);
 

}

KillingHeroe.prototype.showCard = function() {
    //console.log(this);
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
            $hand.css('cursor','images/objets/lightsabericonred.png');
        });

}

KillingHeroe.prototype.points = function(e) {
     
      party.cardPoint += party.theGame[$(this).attr('index-data')].score;

      $("body > div.menu > div.border.border-info.topscore.un > span > h5").text('Party-Score: '+party.cardPoint);
      
      if (party.theGame[$(this).attr('index-data')].score == 2) {
        createjs.Sound.play(soundIDGood);
        createjs.Sound.play(soundIDEvil);
        $('#target1').attr('src', party.reaction[0].source)
        $('body > div.menu > div.trois.image.animated').addClass('fadeInDown')
        setTimeout(function(){$('body > div.menu > div.trois.image.animated.fadeInDown').removeClass('fadeInDown')},1000)
        
      }
       else { party.theGame[$(this).attr('index-data')].score
       createjs.Sound.play(soundIDGood); 
       $('#target1').attr('src', party.reaction[1].source)
       $('body > div.menu > div.trois.image.animated').addClass('fadeInDown')
       setTimeout(function(){$('body > div.menu > div.trois.image.animated.fadeInDown').removeClass('fadeInDown')},1000)
      
      }
     
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
        
        if ($(this).find('img').length === 0) {
        $(this).append("<img id ='target' src='' alt=''>")}
        else ;

    }, 1000);

}


var party = new KillingHeroe();


var soundIDGood = "Good";
var soundIDBad = "Bad";
var soundIDEvil = 'Evil'
var soundIDStart = 'Start'

function loadSound () {
   //createjs.Sound.on("fileload", this.loadHandler, this);
    //createjs.Sound.registerSound("sounds/body.m4a", soundIDStart)
    createjs.Sound.registerSound("sounds/mossburg.mp3", soundIDGood);
    createjs.Sound.registerSound("sounds/minigun.mp3", soundIDBad);
    createjs.Sound.registerSound("sounds/Evil.wav", soundIDEvil);

    //function loadHandler(event) {
        // This is fired for each sound that is registered.
      //  var instance = createjs.Sound.play("sounds/body.m4a");  // play using id.  Could also use full sourcepath or event.src.
       // instance.on("complete", this.handleComplete, this);
       // instance.volume = 0.5;
    //}

}

var audio = new Audio('sounds/body.mp3');


function playSound () {
    createjs.Sound.play(soundID);
}

