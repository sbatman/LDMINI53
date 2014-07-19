module LDMINI53
{
    export class Background
    {
        public static ImageSize: number = 512;
         WidthInPanels: number;
        HeightInPanels: number;

        LayerOneSprites: Array<Phaser.Sprite>
        LayerTwoSprites: Array<Phaser.Sprite>
        LayerThreeSprites: Array<Phaser.Sprite>

        Game: Phaser.Game;

        constructor(game: Phaser.Game)
        {

            this.WidthInPanels = Math.floor(game.canvas.width / Background.ImageSize) + 2;
            this.HeightInPanels = Math.floor(game.canvas.height / Background.ImageSize) + 2;
            this.Game = game;
            this.LayerOneSprites = new Array<Phaser.Sprite>();
            this.LayerThreeSprites = new Array<Phaser.Sprite>();
            this.LayerTwoSprites = new Array<Phaser.Sprite>();

            for (var x = 0; x < this.WidthInPanels; x++)
            {
                for (var y = 0; y < this.HeightInPanels; y++)
                {
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
        Update()
        {
            this.PositionClouds();
        }
        PositionClouds()
        {
            var cameraX = this.Game.camera.x;
            var cameraY = this.Game.camera.y;
            for (var x = 0; x < this.WidthInPanels; x++)
            {
                for (var y = 0; y < this.HeightInPanels; y++)
                {
                    this.LayerOneSprites[(x * this.HeightInPanels) + y].x = (Background.ImageSize * (x - 1)) + cameraX;
                    this.LayerOneSprites[(x * this.HeightInPanels) + y].y = (Background.ImageSize * (y - 1)) + cameraY;
                    this.LayerTwoSprites[(x * this.HeightInPanels) + y].x = (Background.ImageSize * (x - 1)) + (cameraX * 1.1);
                    this.LayerTwoSprites[(x * this.HeightInPanels) + y].y = (Background.ImageSize * (y - 1)) + (cameraY * 1.1);
                    this.LayerThreeSprites[(x * this.HeightInPanels) + y].x = (Background.ImageSize * (x - 1)) + (cameraX * 1.2);
                    this.LayerThreeSprites[(x * this.HeightInPanels) + y].y = (Background.ImageSize * (y - 1)) + (cameraY * 1.2);
                }
            }
        }
    }
}