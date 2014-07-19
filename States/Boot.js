var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LDMINI53;
(function (LDMINI53) {
    var BootState = (function (_super) {
        __extends(BootState, _super);
        function BootState() {
            _super.apply(this, arguments);
        }
        BootState.prototype.preload = function () {
            this.load.image('content-graphics-BootLoadBar', 'Content/Graphics/BootLoadBar.jpg');
        };

        BootState.prototype.create = function () {
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
        };
        return BootState;
    })(Phaser.State);
    LDMINI53.BootState = BootState;
})(LDMINI53 || (LDMINI53 = {}));
