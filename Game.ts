module LDMINI53
{
    var instanceOfGame;
    window.onload = () =>
    {
        instanceOfGame = new LDMINI53.Game();
    
    };

    export class Game extends Phaser.Game
    {

        constructor()
        {
            super(window.innerWidth, window.innerHeight, Phaser.AUTO, 'content', null);
            this.state.add('Boot', BootState, false);
            this.state.add('Preload', PreloadState, false);
            this.state.add('Mainmenu', MainmenuState, false);
            this.state.add('Level', LevelState, false);
            this.state.start('Boot');
        }
    }
}