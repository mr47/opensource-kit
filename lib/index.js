'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by mr470 on 10.03.2016.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _styles = require('./styles.scss');

var styles = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calc = function () {
    function Calc() {
        var initValue = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

        _classCallCheck(this, Calc);

        this.register = 0;
        this.innerHistory = [];

        this.register = initValue;
        return this;
    }

    _createClass(Calc, [{
        key: 'add',
        value: function add() {
            var value = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

            this.innerHistory.push([value, this.register]);
            this.register = this.register + value;
            return this;
        }
    }, {
        key: 'reset',
        value: function reset() {
            var value = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

            this.register = value || 0;
            return this;
        }
    }, {
        key: 'memory',
        value: function memory(value) {
            if (value) {
                this.reset(value);
                this.innerHistory = [];
                return this;
            } else {
                return this.register;
            }
        }
    }, {
        key: 'history',
        value: function history(value) {
            if (value) {
                this.innerHistory = [value];
                return this;
            } else {
                return this.innerHistory;
            }
        }
    }]);

    return Calc;
}();

exports.default = Calc;