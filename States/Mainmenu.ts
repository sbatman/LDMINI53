module LDMINI53
{
    export class MainmenuState extends Phaser.State
    {
        BackgroundLayer : Background;

        preload()
        {
        
        }

        create()
        {
            this.BackgroundLayer = new Background(this.game);
        }

        Update()
        {
            this.BackgroundLayer.Update();
        }
    }

}