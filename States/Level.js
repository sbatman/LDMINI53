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
            this.HighScore = 0;
            this.CameraX = 2000;
            this.CameraY = 2000;
            this.CameraXVelo = 0.3;
            this.CameraYVelo = 0.5;
            this.Score = 0;
        }
        LevelState.prototype.preload = function () {
        };

        LevelState.prototype.readCookie = function (name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ')
                    c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0)
                    return c.substring(nameEQ.length, c.length);
            }

            return null;
        };

        LevelState.prototype.create = function () {
            this.HighScore = parseFloat(this.readCookie('hiScore'));
            if (isNaN(this.HighScore))
                this.HighScore = 0;
            LevelState.CurrentLevel = this;
            this.Enemys = new Array();
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.LevelCount = 0;
            this.LevelTick = 0;
            this.Score = 0;
            this.BackgroundLayer = new LDMINI53.Background(this.game);
            this.AvoidSprite = new Phaser.Sprite(this.game, 0, 0, "content-graphics-avoid");
            this.AvoidSprite.fixedToCamera = true;
            this.ArenaGraphic = new Phaser.Sprite(this.game, 2000, 2000, "content-graphics-arena");
            this.PlayerGraphic = new Phaser.Sprite(this.game, 2000 + (LevelState.ArenaWidth * 0.5), 2000 + (LevelState.ArenaHeight * 0.5), "content-graphics-player");
            this.PlayerGraphic.inputEnabled = true;
            this.PlayerGraphic.input.enableDrag();

            this.game.add.existing(this.ArenaGraphic);
            this.game.add.existing(this.PlayerGraphic);

            this.game.physics.enable(this.PlayerGraphic);

            this.HighScoreText = new Phaser.Text(this.game, 10, 10, "Score     :", { font: "18px Arial", fill: "#F15A24", stroke: '#000000', strokeThickness: 3 });
            this.ScoreText = new Phaser.Text(this.game, 10, 30, "HighScore :", { font: "18px Arial", fill: "#F15A24", stroke: '#000000', strokeThickness: 3 });
            this.ScoreText.fixedToCamera = true;
            this.HighScoreText.fixedToCamera = true;
            this.game.add.existing(this.ScoreText);
            this.game.add.existing(this.HighScoreText);

            this.game.camera.focusOnXY(2000 + (LevelState.ArenaWidth * 0.5), 2000 + (LevelState.ArenaHeight * 0.5));
            for (var i = 0; i < 40; i++) {
                this.Enemys.push(new LDMINI53.Enemy(this.game, 0, 0, 1));
            }
        };

        LevelState.prototype.update = function () {
            this.game.camera.follow(this.PlayerGraphic);
            this.game.camera.deadzone = new Phaser.Rectangle(this.game.canvas.width * 0.2, this.game.canvas.height * 0.2, this.game.canvas.width * 0.6, this.game.canvas.height * 0.6);
            this.BackgroundLayer.update();
            if (this.PlayerGraphic.x > 2000 + LevelState.ArenaWidth - 32)
                this.PlayerGraphic.x = 2000 + LevelState.ArenaWidth - 32;
            if (this.PlayerGraphic.x < 2000)
                this.PlayerGraphic.x = 2000;
            if (this.PlayerGraphic.y > 2000 + LevelState.ArenaHeight - 32)
                this.PlayerGraphic.y = 2000 + LevelState.ArenaHeight - 32;
            if (this.PlayerGraphic.y < 2000)
                this.PlayerGraphic.y = 2000;
            this.LevelTick++;
            this.Score += (this.LevelCount + 1);
            if (this.Score > this.HighScore) {
                this.HighScore = this.Score;
            }
            this.ScoreText.text = "Score     :" + this.Score;
            this.HighScoreText.text = "HighScore :" + this.HighScore;
            if (this.LevelTick > 50) {
                this.LevelTick = 0;
                this.LevelCount++;
                this.Enemys.push(new LDMINI53.Enemy(this.game, 0, 0, 1 + (0.01 * this.LevelCount)));
            }
            for (var i = 0; i < this.Enemys.length; i++) {
                this.game.physics.arcade.overlap(this.PlayerGraphic, this.Enemys, this.PlayerHitByEnemy);
            }
        };

        LevelState.prototype.PlayerHitByEnemy = function (obj1, obj2) {
            LevelState.CurrentLevel.dispose();
            LevelState.CurrentLevel.game.state.start('Level', true, false);
        };

        LevelState.prototype.render = function () {
        };

        LevelState.prototype.dispose = function () {
            document.cookie = "hiScore=" + this.HighScore + "; expires=Thu, 18 Dec 2099 12:00:00 GMT";

            for (var i = 0; i < this.Enemys.length; i++) {
                this.Enemys[i].destroy(true);
            }
            this.Enemys.length = 0;
            this.PlayerGraphic.destroy();
            this.ArenaGraphic.destroy();
            this.BackgroundLayer.Dispose();
        };
        LevelState.ArenaWidth = 1024;
        LevelState.ArenaHeight = 720;
        return LevelState;
    })(Phaser.State);
    LDMINI53.LevelState = LevelState;
})(LDMINI53 || (LDMINI53 = {}));
