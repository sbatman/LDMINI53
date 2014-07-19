module LDMINI53
{
    export class LevelState extends Phaser.State
    {
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
            this.PlayerGraphic = new Phaser.Sprite(this.game, 2512, 2360, "content-graphics-player");
            this.PlayerGraphic.inputEnabled = true;
            this.PlayerGraphic.input.enableDrag();
            this.game.add.existing(this.ArenaGraphic);
            this.game.add.existing(this.PlayerGraphic);
            this.game.camera.focusOnXY(2512, 2360);
        }

        update()
        {
            this.game.camera.follow(this.PlayerGraphic );
            this.game.camera.deadzone = new Phaser.Rectangle(this.game.canvas.width * 0.15, this.game.canvas.height * 0.15, this.game.canvas.width * 0.7, this.game.canvas.height * 0.7);
            this.BackgroundLayer.update();
            if (this.PlayerGraphic.x > 3024-32) this.PlayerGraphic.x = 3024-32;
            if (this.PlayerGraphic.x < 2000) this.PlayerGraphic.x = 2000;
            if (this.PlayerGraphic.y > 2720 - 32) this.PlayerGraphic.y = 2720 - 32;
            if (this.PlayerGraphic.y < 2000) this.PlayerGraphic.y = 2000;
        }
    }

}