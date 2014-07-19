﻿module LDMINI53
{
    export class Background
    {
        public static ImageSize: number = 512;
        WidthInPanels: number;
        HeightInPanels: number;

        LayerOneSprites: Array<Phaser.Sprite>
        LayerTwoSprites: Array<Phaser.Sprite>
        LayerThreeSprites: Array<Phaser.Sprite>

        Game: Phaser.Game;

        Group: Phaser.Group;

        OffsetX: number=0;
        OffsetY: number=0;

        OffsetXVelo: number = (Math.random()*4)-2;
        OffsetYVelo: number = (Math.random() * 4) - 2;

        OffsetChangeTicks: number=0;

        Disposed: boolean=false;

        constructor(game: Phaser.Game)
        {
            this.Disposed = false;
            this.WidthInPanels = Math.floor(game.canvas.width / Background.ImageSize) + 3;
            this.HeightInPanels = Math.floor(game.canvas.height / Background.ImageSize) + 3;
            this.Game = game;
            this.LayerOneSprites = new Array<Phaser.Sprite>();
            this.LayerThreeSprites = new Array<Phaser.Sprite>();
            this.LayerTwoSprites = new Array<Phaser.Sprite>();

            this.Group = game.add.group();

            for (var x = 0; x < this.WidthInPanels; x++)
            {
                for (var y = 0; y < this.HeightInPanels; y++)
                {
                    var img1 = new Phaser.Sprite(game, 0, 0, "content-graphics-backgrounds-clouds1");
                    this.Group.add(img1);
                    img1.z = 50 + (x * this.HeightInPanels) + y;
                    img1.fixedToCamera = true;
                    this.LayerOneSprites.push(img1);

                    var img2 = new Phaser.Sprite(game, 0, 0, "content-graphics-backgrounds-clouds2");
                    this.Group.add(img2);
                    img2.z = 100 + (x * this.HeightInPanels) + y;
                    img2.fixedToCamera = true;
                    this.LayerTwoSprites.push(img2);

                    var img3 = new Phaser.Sprite(game, 0, 0, "content-graphics-backgrounds-clouds3");
                    this.Group.add(img3);
                    img3.z = 150 + (x * this.HeightInPanels) + y;
                    img3.fixedToCamera = true;
                    this.LayerThreeSprites.push(img3);
                }
            }

            this.Group.sort();
            this.Game.add.existing(this.Group);
            this.PositionClouds();
        }
        update()
        {
            if (this.Disposed) return;
            this.OffsetChangeTicks--;
            if (this.OffsetChangeTicks <= 0)
            {
                this.OffsetChangeTicks = 10;
                this.OffsetXVelo += (-1 + (Math.random() * 2)) * 0.1;
                this.OffsetYVelo += (-1 + (Math.random() * 2)) * 0.1;
                if (this.OffsetXVelo < -2) this.OffsetXVelo = -2;
                if (this.OffsetXVelo > 2) this.OffsetXVelo = 2;
                if (this.OffsetYVelo < -2) this.OffsetYVelo = -2;
                if (this.OffsetYVelo > 2) this.OffsetYVelo = 2;
            }

            this.OffsetX += this.OffsetXVelo;
            this.OffsetY += this.OffsetYVelo;

            this.PositionClouds();
        }
        PositionClouds()
        {
            for (var x = 0; x < this.WidthInPanels; x++)
            {
                for (var y = 0; y < this.HeightInPanels; y++)
                {
                    this.LayerOneSprites[(x * this.HeightInPanels) + y].cameraOffset.x = (Background.ImageSize * (x - 1)) + this.OffsetX % Background.ImageSize;
                    this.LayerOneSprites[(x * this.HeightInPanels) + y].cameraOffset.y = (Background.ImageSize * (y - 1)) + this.OffsetY % Background.ImageSize;

                    this.LayerTwoSprites[(x * this.HeightInPanels) + y].cameraOffset.x = (Background.ImageSize * (x - 1)) + ((this.OffsetX * 0.8) % Background.ImageSize);
                    this.LayerTwoSprites[(x * this.HeightInPanels) + y].cameraOffset.y = (Background.ImageSize * (y - 1)) + ((this.OffsetY * 0.8) % Background.ImageSize);

                    this.LayerThreeSprites[(x * this.HeightInPanels) + y].cameraOffset.x = (Background.ImageSize * (x - 1)) + ((this.OffsetX * 0.6) % Background.ImageSize);
                    this.LayerThreeSprites[(x * this.HeightInPanels) + y].cameraOffset.y = (Background.ImageSize * (y - 1)) + ((this.OffsetY * 0.6) % Background.ImageSize);
                }
            }
        }
        Dispose()
        {
            if (this.Disposed) return;
            this.Disposed = true;
            for (var x = 0; x < this.WidthInPanels; x++)
            {
                for (var y = 0; y < this.HeightInPanels; y++)
                {
                    this.LayerOneSprites[(x * this.HeightInPanels) + y].destroy();
                    this.LayerTwoSprites[(x * this.HeightInPanels) + y].destroy();
                    this.LayerThreeSprites[(x * this.HeightInPanels) + y].destroy();
                }
            }
            this.Group.removeAll();
            this.Group.destroy();
            this.Group = null;
            this.LayerOneSprites.length = 0;
            this.LayerTwoSprites.length = 0;
            this.LayerThreeSprites.length = 0;

        }
    }
}