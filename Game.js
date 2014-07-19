var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LDMINI53;
(function (LDMINI53) {
    window.onload = function () {
        var instanceOfGame = new LDMINI53.Game();
    };

    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, window.innerWidth, window.innerHeight, Phaser.AUTO, 'content', null);
            this.state.add('Boot', LDMINI53.BootState, false);
            this.state.add('Preload', LDMINI53.PreloadState, false);
            this.state.add('Mainmenu', LDMINI53.MainmenuState, false);

            this.state.start('Boot');
        }
        return Game;
    })(Phaser.Game);
    LDMINI53.Game = Game;
})(LDMINI53 || (LDMINI53 = {}));
