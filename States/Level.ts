module LDMINI53
{
    export class LevelState extends Phaser.State
    {
        public static ArenaWidth: number = 1024;
        public static ArenaHeight: number = 720;
        public static CurrentLevel: LevelState;

        Enemys: Array<Enemy>;

        BackgroundLayer: Background;
        ArenaGraphic: Phaser.Sprite;
        PlayerGraphic: Phaser.Sprite;
        AvoidSprite: Phaser.Sprite;

        HighScoreText: Phaser.Text;
        ScoreText: Phaser.Text;
        HelpText: Phaser.Text;

        HighScore: number = 0;
        LevelCount: number;
        LevelTick: number;
        Score: number;

        CameraX: number = 2000;
        CameraY: number = 2000;

        CameraXVelo: number = 0.3;
        CameraYVelo: number = 0.5;

        SoundTrack: Phaser.Sound;

        preload()
        {
            if (this.SoundTrack == null) this.SoundTrack = this.add.audio('content-audio-music', 0.1, true);
            if (!this.SoundTrack.isPlaying) this.SoundTrack.play();
        }


        readCookie(name: string)
        {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++)
            {
                var c = ca[i];
                while (c.charAt(0) == ' ')
                    c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0)
                    return c.substring(nameEQ.length, c.length);
            }

            return null;
        }

        create()
        {
            this.HighScore = parseFloat(this.readCookie('hiScore'));
            if (isNaN(this.HighScore)) this.HighScore = 0;
            LevelState.CurrentLevel = this;
            this.Enemys = new Array();
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.LevelCount = 0;
            this.LevelTick = 0;
            this.Score = 0;
            this.BackgroundLayer = new LDMINI53.Background(this.game);
            this.AvoidSprite = new Phaser.Sprite(this.game, 0, 0, "content-graphics-avoid");
            this.AvoidSprite.y = (this.game.canvas.height * 0.5) - (this.AvoidSprite.height * 0.5);
            this.AvoidSprite.fixedToCamera = true;
            this.ArenaGraphic = new Phaser.Sprite(this.game, 2000, 2000, "content-graphics-arena");
            this.PlayerGraphic = new Phaser.Sprite(this.game, 2000 + (LevelState.ArenaWidth * 0.5), 2000 + (LevelState.ArenaHeight * 0.5), "content-graphics-player");
            this.PlayerGraphic.inputEnabled = true;
            this.PlayerGraphic.input.enableDrag();

            this.game.add.existing(this.ArenaGraphic);
            this.game.add.existing(this.PlayerGraphic);
            this.game.add.existing(this.AvoidSprite);
            this.game.physics.enable(this.PlayerGraphic);

            this.HighScoreText = new Phaser.Text(this.game, 10, 10, "Score     :", { font: "18px Arial", fill: "#F15A24", stroke: '#000000', strokeThickness: 3 });
            this.ScoreText = new Phaser.Text(this.game, 10, 30, "HighScore :", { font: "18px Arial", fill: "#F15A24", stroke: '#000000', strokeThickness: 3 });
            this.HelpText = new Phaser.Text(this.game, 10, this.game.canvas.height - 20, "Click and Drag the Green block, avoid the orange ones. Simple!, Soundtrack by knarmahfox", { font: "12px Arial", fill: "#F15A24", stroke: '#000000', strokeThickness: 3 });
            this.ScoreText.fixedToCamera = true;
            this.HighScoreText.fixedToCamera = true;
            this.HelpText.fixedToCamera = true;
            this.game.add.existing(this.ScoreText);
            this.game.add.existing(this.HighScoreText);
            this.game.add.existing(this.HelpText);

            this.game.camera.focusOnXY(2000 + (LevelState.ArenaWidth * 0.5), 2000 + (LevelState.ArenaHeight * 0.5));
            for (var i = 0; i < 40; i++)
            {
                this.Enemys.push(new LDMINI53.Enemy(this.game, 0, 0, 1));
            }
        }

        update()
        {
            this.game.camera.follow(this.PlayerGraphic);
            this.game.camera.deadzone = new Phaser.Rectangle(this.game.canvas.width * 0.2, this.game.canvas.height * 0.2, this.game.canvas.width * 0.6, this.game.canvas.height * 0.6);
            this.BackgroundLayer.update();
            if (this.PlayerGraphic.x > 2000 + LevelState.ArenaWidth - 32)
                this.PlayerGraphic.x = 2000 + LevelState.ArenaWidth - 32;
            if (this.PlayerGraphic.x < 2000)
                this.PlayerGraphic.x = 2000;
            if (this.PlayerGraphic.y > 2000 + LevelState.ArenaHeight - 32)
                this.PlayerGraphic.y = 2000 + LevelState.ArenaHeight - 32;
            if (this.PlayerGraphic.y < 2000)
                this.PlayerGraphic.y = 2000;
            this.LevelTick++;
            this.Score += (this.LevelCount + 1);
            if (this.Score > this.HighScore)
            {
                this.HighScore = this.Score;
            }
            this.ScoreText.text = "Score     :" + this.Score;
            this.HighScoreText.text = "HighScore :" + this.HighScore;
            if (this.LevelTick > 50)
            {
                this.LevelTick = 0;
                this.LevelCount++;
                this.Enemys.push(new LDMINI53.Enemy(this.game, 0, 0, 1 + (0.01 * this.LevelCount)));
            }
            for (var i = 0; i < this.Enemys.length; i++)
            {
                this.game.physics.arcade.overlap(this.PlayerGraphic, this.Enemys, this.PlayerHitByEnemy);
            }
        }

        PlayerHitByEnemy(obj1, obj2)
        {
            LevelState.CurrentLevel.dispose();
            LevelState.CurrentLevel.game.state.start('Level', true, false);
        }

        dispose()
        {
            document.cookie = "hiScore=" + this.HighScore + "; expires=Thu, 18 Dec 2099 12:00:00 GMT";

            for (var i = 0; i < this.Enemys.length; i++)
            {
                this.Enemys[i].destroy(true);
            }
            this.Enemys.length = 0;
            this.PlayerGraphic.destroy();
            this.ArenaGraphic.destroy();
            this.BackgroundLayer.Dispose();
        }
    }
}