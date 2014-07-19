var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LDMINI53;
(function (LDMINI53) {
    window.onload = function () {
        var instanceOfGame = new LDMINI53.Game();
    };

    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, window.innerWidth, window.innerHeight, Phaser.AUTO, 'content', null);
            this.state.add('Boot', LDMINI53.BootState, false);
            this.state.add('Preloader', LDMINI53.PreloadState, false);
            this.state.add('Mainmenu', LDMINI53.MainmenuState, false);
            //  this.state.add('Level', LevelState, false);
            // this.state.start('Boot');
        }
        return Game;
    })(Phaser.Game);
    LDMINI53.Game = Game;
})(LDMINI53 || (LDMINI53 = {}));
var LDMINI53;
(function (LDMINI53) {
    var BootState = (function (_super) {
        __extends(BootState, _super);
        function BootState() {
            _super.apply(this, arguments);
        }
        BootState.prototype.preload = function () {
            //load the loading bar BEFORE the main loading phase.
            this.load.image('content-graphics-BootLoadBar', 'Content/Graphics/BootLoadBar.jpg');
        };

        BootState.prototype.create = function () {
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = false;
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.state.start('Preload', true, false);
        };
        return BootState;
    })(Phaser.State);
    LDMINI53.BootState = BootState;
})(LDMINI53 || (LDMINI53 = {}));
var LDMINI53;
(function (LDMINI53) {
    var MainmenuState = (function (_super) {
        __extends(MainmenuState, _super);
        function MainmenuState() {
            _super.apply(this, arguments);
        }
        MainmenuState.prototype.preload = function () {
        };

        MainmenuState.prototype.create = function () {
        };
        return MainmenuState;
    })(Phaser.State);
    LDMINI53.MainmenuState = MainmenuState;
})(LDMINI53 || (LDMINI53 = {}));
var LDMINI53;
(function (LDMINI53) {
    var PreloadState = (function (_super) {
        __extends(PreloadState, _super);
        function PreloadState() {
            _super.apply(this, arguments);
        }
        PreloadState.prototype.preload = function () {
            //load all images.
            //load spritesheets
            //load all audio
            this.load.audio('content-audio-music-gameTheme', 'Content/Audio/Music/Track.mp3');
            this.load.audio('content-audio-music-menuTheme', 'Content/Audio/Music/MenuTrack.mp3');

            //  Set-up our preloader sprite
            this.preloadBar = this.add.sprite((window.innerWidth / 2) - 200, (window.innerHeight / 2) - 20, 'content-graphics-BootLoadBar');
            this.load.setPreloadSprite(this.preloadBar);

            this.loadingMessage = this.game.add.text((window.innerWidth / 2) - 50, (window.innerHeight / 2) - 100, "Loading", { font: "30px Arial", fill: "#00ff00", stroke: '#000000', strokeThickness: 3 });
        };

        PreloadState.prototype.create = function () {
            //allow the loading bar to animate as assets load, and switch to the main menu game state when loading completes.
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        };

        //switch to the main menu state at this point.
        PreloadState.prototype.startMainMenu = function () {
            this.game.state.start('Mainmenu', true, false);
        };
        return PreloadState;
    })(Phaser.State);
    LDMINI53.PreloadState = PreloadState;
})(LDMINI53 || (LDMINI53 = {}));
//# sourceMappingURL=Main.js.map
