var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LDMINI53;
(function (LDMINI53) {
    var LevelState = (function (_super) {
        __extends(LevelState, _super);
        function LevelState() {
            _super.apply(this, arguments);
            this.CameraX = 2000;
            this.CameraY = 2000;
            this.CameraXVelo = 0.3;
            this.CameraYVelo = 0.5;
        }
        LevelState.prototype.preload = function () {
        };

        LevelState.prototype.create = function () {
            this.BackgroundLayer = new LDMINI53.Background(this.game);
            this.ArenaGraphic = new Phaser.Sprite(this.game, 2000, 2000, "content-graphics-arena");
            this.PlayerGraphic = new Phaser.Sprite(this.game, 2512, 2360, "content-graphics-player");
            this.PlayerGraphic.inputEnabled = true;
            this.PlayerGraphic.input.enableDrag();
            this.game.add.existing(this.ArenaGraphic);
            this.game.add.existing(this.PlayerGraphic);
            this.game.camera.focusOnXY(2512, 2360);
        };

        LevelState.prototype.update = function () {
            this.game.camera.follow(this.PlayerGraphic);
            this.game.camera.deadzone = new Phaser.Rectangle(this.game.canvas.width * 0.15, this.game.canvas.height * 0.15, this.game.canvas.width * 0.7, this.game.canvas.height * 0.7);
            this.BackgroundLayer.update();
            if (this.PlayerGraphic.x > 3024 - 32)
                this.PlayerGraphic.x = 3024 - 32;
            if (this.PlayerGraphic.x < 2000)
                this.PlayerGraphic.x = 2000;
            if (this.PlayerGraphic.y > 2720 - 32)
                this.PlayerGraphic.y = 2720 - 32;
            if (this.PlayerGraphic.y < 2000)
                this.PlayerGraphic.y = 2000;
        };
        return LevelState;
    })(Phaser.State);
    LDMINI53.LevelState = LevelState;
})(LDMINI53 || (LDMINI53 = {}));
