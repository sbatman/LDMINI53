var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LDMINI53;
(function (LDMINI53) {
    var PreloadState = (function (_super) {
        __extends(PreloadState, _super);
        function PreloadState() {
            _super.apply(this, arguments);
        }
        PreloadState.prototype.preload = function () {
            this.load.image("content-graphics-backgrounds-clouds1", "Content/Graphics/Backgrounds/clouds1.jpg");
            this.load.image("content-graphics-backgrounds-clouds2", "Content/Graphics/Backgrounds/clouds2.png");
            this.load.image("content-graphics-backgrounds-clouds3", "Content/Graphics/Backgrounds/clouds3.png");
            this.load.image("content-graphics-arena", "Content/Graphics/Arena.png");
            this.load.image("content-graphics-player", "Content/Graphics/Player.png");
            this.load.image("content-graphics-enemy", "Content/Graphics/Enemy.png");
            this.load.image("content-graphics-avoid", "Content/Graphics/Avoid.png");

            this.load.audio('content-audio-music', 'Content/Audio/Music.mp3');

            this.preloadBar = this.add.sprite((window.innerWidth / 2) - 200, (window.innerHeight / 2) - 20, 'content-graphics-BootLoadBar');
            this.load.setPreloadSprite(this.preloadBar);

            this.loadingMessage = this.game.add.text((window.innerWidth / 2) - 50, (window.innerHeight / 2) - 100, "Loading", { font: "30px Arial", fill: "#00ff00", stroke: '#000000', strokeThickness: 3 });
        };

        PreloadState.prototype.create = function () {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        };

        PreloadState.prototype.startMainMenu = function () {
            this.game.state.start('Mainmenu', true, false);
        };
        return PreloadState;
    })(Phaser.State);
    LDMINI53.PreloadState = PreloadState;
})(LDMINI53 || (LDMINI53 = {}));
