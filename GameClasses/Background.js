var LDMINI53;
(function (LDMINI53) {
    var Background = (function () {
        function Background(game) {
            this.Game = game;
            this.LayerOneSprites = new Array();
            this.LayerThreeSprites = new Array();
            this.LayerTwoSprites = new Array();

            for (var x = 0; x < Background.WidthInPanels; x++) {
                for (var y = 0; y < Background.HeightInPanels; y++) {
                    var img1 = new Phaser.Sprite(game, 0, 0, "content-graphics-backgrounds-clouds1");
                    game.add.existing(img1);
                    this.LayerOneSprites.push(img1);
                    var img2 = new Phaser.Sprite(game, 0, 0, "content-graphics-backgrounds-clouds2");
                    game.add.existing(img2);
                    this.LayerTwoSprites.push(img2);
                    var img3 = new Phaser.Sprite(game, 0, 0, "content-graphics-backgrounds-clouds3");
                    game.add.existing(img3);
                    this.LayerThreeSprites.push(img3);
                }
            }
            this.PositionClouds();
        }
        Background.prototype.Update = function () {
            this.PositionClouds();
        };
        Background.prototype.PositionClouds = function () {
            var cameraX = this.Game.camera.x;
            var cameraY = this.Game.camera.y;
            for (var x = 0; x < Background.WidthInPanels; x++) {
                for (var y = 0; y < Background.HeightInPanels; y++) {
                    this.LayerOneSprites[(x * Background.WidthInPanels) + y].x = (Background.ImageSize * (x - 1)) + cameraX;
                    this.LayerOneSprites[(x * Background.WidthInPanels) + y].y = (Background.ImageSize * (y - 1)) + cameraY;
                    this.LayerTwoSprites[(x * Background.WidthInPanels) + y].x = (Background.ImageSize * (x - 1)) + (cameraX * 1.1);
                    this.LayerTwoSprites[(x * Background.WidthInPanels) + y].y = (Background.ImageSize * (y - 1)) + (cameraY * 1.1);
                    this.LayerThreeSprites[(x * Background.WidthInPanels) + y].x = (Background.ImageSize * (x - 1)) + (cameraX * 1.2);
                    this.LayerThreeSprites[(x * Background.WidthInPanels) + y].y = (Background.ImageSize * (y - 1)) + (cameraY * 1.2);
                }
            }
        };
        Background.ImageSize = 512;
        Background.WidthInPanels = 5;
        Background.HeightInPanels = 5;
        return Background;
    })();
    LDMINI53.Background = Background;
})(LDMINI53 || (LDMINI53 = {}));
