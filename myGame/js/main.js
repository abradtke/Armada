// global variables
var game;
var player;

// wait for DOM to load before we start up Phaser
window.onload = function() {
    game = new Phaser.Game(500,500, Phaser.AUTO);
    game.state.add('Load', Load);
    game.state.add('Play', Play);
    game.state.start('Load');
}

var Load = function(game) {};
Load.prototype = {
    preload: function() {
        console.log('Load: preload');
       
        game.load.atlas('atlas', 'assets/img/atlas.png', 'assets/img/atlas.json');
    },
    create: function() {
        console.log('Load: create');
        game.state.start('Play');
    }
};

var Play = function(game) {};
Play.prototype = {
    preload: function() {
        console.log('Play: preload');
    },
    create: function() {
        console.log('Play: create');
        player = new Player(game, 'atlas', 'diamond', 3, 45);
        game.add.existing(player);
    },
    update: function() {
        // update
    }
};