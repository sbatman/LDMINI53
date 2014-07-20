var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LDMINI53;
(function (LDMINI53) {
    var MainmenuState = (function (_super) {
        __extends(MainmenuState, _super);
        function MainmenuState() {
            _super.apply(this, arguments);
        }
        MainmenuState.prototype.preload = function () {
        };

        MainmenuState.prototype.create = function () {
            this.BackgroundLayer = new LDMINI53.Background(this.game);
            this.BackgroundLayer.Dispose();
            this.game.state.start('Level', true, false);
        };

        MainmenuState.prototype.update = function () {
            this.BackgroundLayer.update();
        };
        return MainmenuState;
    })(Phaser.State);
    LDMINI53.MainmenuState = MainmenuState;
})(LDMINI53 || (LDMINI53 = {}));
