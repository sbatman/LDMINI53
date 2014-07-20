module LDMINI53
{
    export class Enemy extends Phaser.Sprite
    {
        VeloX: number;
        VeloY: number;
        SpeedMultiplier: number;

        constructor(game: Phaser.Game, x: number, y: number, speedMultiplier: number)
        {
            super(game, x, y, 'content-graphics-enemy');
            this.SpeedMultiplier = speedMultiplier;
            this.Spawn();
            this.game.add.existing(this);
            this.anchor.setTo(0.5, 0.5);
            game.physics.enable(this);
        }

        Spawn()
        {
            var speed =2 + ((Math.random()) * this.SpeedMultiplier) ;
            var side = Math.floor(Math.random() * 4);
            var posX;
            var posY;
            switch (side)
            {
                case 0://left
                    posX = 1000;
                    posY = 2000 + (Math.random() * LevelState.ArenaHeight);
                    this.VeloX = speed;
                    this.VeloY = 0;
                    break;
                case 1: // right
                    posX = 4024;
                    posY = 2000 + (Math.random() * LevelState.ArenaHeight);
                    this.VeloX = -speed;
                    this.VeloY = 0;
                    break;
                case 2: // top
                    posX = 2000 + (Math.random() * LevelState.ArenaWidth);;
                    posY = 1000;
                    this.VeloX = 0;
                    this.VeloY = speed;
                    break;
                case 3: // bottom
                    posX = 2000 + (Math.random() * LevelState.ArenaWidth);;
                    posY = 3720;
                    this.VeloX = 0;
                    this.VeloY = -speed;
                    break;
            }
            this.x = posX;
            this.y = posY;
        }
        update()
        {
            this.x += this.VeloX;
            this.y += this.VeloY;
            if (this.x < 1000) this.Spawn();
            if (this.y < 1000) this.Spawn();
            if (this.x > 4100) this.Spawn();
            if (this.y > 3780) this.Spawn();
        }

    }
}