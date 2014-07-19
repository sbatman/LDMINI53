﻿module LDMINI53
{
    export class PreloadState extends Phaser.State
    {
        //reference to our preloading bar sprite.
        preloadBar: Phaser.Sprite;
        loadingMessage: Phaser.Text;

        preload()
        {
            //load all images.
            this.load.image("content-graphics-backgrounds-clouds1", "Content/Graphics/Backgrounds/clouds1.png");
            this.load.image("content-graphics-backgrounds-clouds2", "Content/Graphics/Backgrounds/clouds2.png");
            this.load.image("content-graphics-backgrounds-clouds3", "Content/Graphics/Backgrounds/clouds3.png");
            //load spritesheets
          
            //load all audio            

            //  Set-up our preloader sprite
            this.preloadBar = this.add.sprite((window.innerWidth / 2) - 200, (window.innerHeight / 2) - 20, 'content-graphics-BootLoadBar');
            this.load.setPreloadSprite(this.preloadBar);

            this.loadingMessage = this.game.add.text((window.innerWidth / 2) - 50, (window.innerHeight / 2) - 100, "Loading", { font: "30px Arial", fill: "#00ff00", stroke: '#000000', strokeThickness: 3 });
        }


        create()
        {
            //allow the loading bar to animate as assets load, and switch to the main menu game state when loading completes.
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        }

        //switch to the main menu state at this point.
        startMainMenu()
        {
            this.game.state.start('Mainmenu', true, false);
        }
    }
}