module LDMINI53
{


    export class LevelState extends Phaser.State
    {
        public static ArenaWidth: number = 1024;
        public static ArenaHeight: number = 720;

        BackgroundLayer: Background;
        ArenaGraphic: Phaser.Sprite;
        PlayerGraphic: Phaser.Sprite;

        CameraX: number = 2000;
        CameraY: number = 2000;

        CameraXVelo: number = 0.3;
        CameraYVelo: number = 0.5;

        preload()
        {

        }

        create()
        {
            this.BackgroundLayer = new Background(this.game);
            this.ArenaGraphic = new Phaser.Sprite(this.game, 2000, 2000, "content-graphics-arena");
            this.PlayerGraphic = new Phaser.Sprite(this.game, 2000 + (LevelState.ArenaWidth * 0.5), 2000 + (LevelState.ArenaHeight*0.5), "content-graphics-player");
            this.PlayerGraphic.inputEnabled = true;
            this.PlayerGraphic.input.enableDrag();
            this.game.add.existing(this.ArenaGraphic);
            this.game.add.existing(this.PlayerGraphic);
            this.game.camera.focusOnXY(2000 + (LevelState.ArenaWidth * 0.5), 2000 + (LevelState.ArenaHeight * 0.5));
            for (var i = 0; i < 20; i++)
            {
                var tempX = (Math.random() * 1024) + 2000;
                var tempY = (Math.random() * 1024) + 2000;
                new Enemy(this.game, tempX, tempY,1);
            }
        }

        update()
        {
            this.game.camera.follow(this.PlayerGraphic );
            this.game.camera.deadzone = new Phaser.Rectangle(this.game.canvas.width * 0.15, this.game.canvas.height * 0.15, this.game.canvas.width * 0.7, this.game.canvas.height * 0.7);
            this.BackgroundLayer.update();
            if (this.PlayerGraphic.x > LevelState.ArenaWidth - 32) this.PlayerGraphic.x = LevelState.ArenaWidth-32;
            if (this.PlayerGraphic.x < 2000) this.PlayerGraphic.x = 2000;
            if (this.PlayerGraphic.y > LevelState.ArenaHeight - 32) this.PlayerGraphic.y = LevelState.ArenaHeight - 32;
            if (this.PlayerGraphic.y < 2000) this.PlayerGraphic.y = 2000;
        }
    }
}