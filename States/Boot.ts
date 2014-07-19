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
            this.game.input.maxPointers = 1;
            this.game.stage.disableVisibilityChange = false;
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.state.start('Preload', true, false);
            this.game.world.width = 10000;
            this.game.world.height = 10000;
            this.game.camera.bounds.width = this.game.world.width;
            this.game.camera.bounds.height = this.game.world.height;
            this.game.scale.forceOrientation(true, false);
            this.game.scale.setScreenSize(true);
        }

    }

} 