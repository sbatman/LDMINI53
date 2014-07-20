module LDMINI53
{
    export class MainmenuState extends Phaser.State
    {
        BackgroundLayer: Background;

        preload()
        {

        }

        create()
        {
            this.BackgroundLayer = new Background(this.game);
            this.BackgroundLayer.Dispose();
            this.game.state.start('Level', true, false);
        }

        update()
        {
            this.BackgroundLayer.update();
        }
    }

}