module LDMINI53
{
    export class BootState extends Phaser.State
    {

        preload()
        {
            //load the loading bar BEFORE the main loading phase.
            this.load.image('content-graphics-BootLoadBar', 'Content/Graphics/BootLoadBar.jpg');
        }

        create()
        {
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = false;
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.state.start('Preload', true, false);
        }

    }

} 