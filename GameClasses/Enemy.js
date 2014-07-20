var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LDMINI53;
(function (LDMINI53) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy(game, x, y, speedMultiplier) {
            _super.call(this, game, x, y, 'content-graphics-enemy');
            this.SpeedMultiplier = speedMultiplier;
            this.Spawn();
            this.game.add.existing(this);
            this.anchor.setTo(0.5, 0.5);
            game.physics.enable(this);
        }
        Enemy.prototype.Spawn = function () {
            var speed = 2 + ((Math.random()) * this.SpeedMultiplier);
            var side = Math.floor(Math.random() * 4);
            var posX;
            var posY;
            switch (side) {
                case 0:
                    posX = 1000;
                    posY = 2000 + (Math.random() * LDMINI53.LevelState.ArenaHeight);
                    this.VeloX = speed;
                    this.VeloY = 0;
                    break;
                case 1:
                    posX = 4024;
                    posY = 2000 + (Math.random() * LDMINI53.LevelState.ArenaHeight);
                    this.VeloX = -speed;
                    this.VeloY = 0;
                    break;
                case 2:
                    posX = 2000 + (Math.random() * LDMINI53.LevelState.ArenaWidth);
                    ;
                    posY = 1000;
                    this.VeloX = 0;
                    this.VeloY = speed;
                    break;
                case 3:
                    posX = 2000 + (Math.random() * LDMINI53.LevelState.ArenaWidth);
                    ;
                    posY = 3720;
                    this.VeloX = 0;
                    this.VeloY = -speed;
                    break;
            }
            this.x = posX;
            this.y = posY;
        };
        Enemy.prototype.update = function () {
            this.x += this.VeloX;
            this.y += this.VeloY;
            if (this.x < 1000)
                this.Spawn();
            if (this.y < 1000)
                this.Spawn();
            if (this.x > 4100)
                this.Spawn();
            if (this.y > 3780)
                this.Spawn();
        };
        return Enemy;
    })(Phaser.Sprite);
    LDMINI53.Enemy = Enemy;
})(LDMINI53 || (LDMINI53 = {}));
