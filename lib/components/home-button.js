'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _goToAction = require('./go-to-action');

var _goToAction2 = _interopRequireDefault(_goToAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledDiv = /*#__PURE__*/(0, _reactEmotion2.default)('div')(function (props) {
  return props.styles;
});

var _ref = (0, _jsx3.default)('svg', {
  width: '100%',
  height: '100%',
  viewBox: '0 0 48 51'
}, void 0, (0, _jsx3.default)('path', {
  d: 'M32,51 L32,31 C32,30.4477153 31.5522847,30 31,30 L17,30 C16.4477153,30 16,30.4477153 16,31 L16,51 L1,51 C0.44771525,51 6.76353751e-17,50.5522847 0,50 L0,15.5542476 C-6.54694735e-16,15.2094576 0.177619697,14.8889877 0.47000106,14.7062493 L23.4700011,0.331249338 C23.7942713,0.12858041 24.2057287,0.12858041 24.5299989,0.331249338 L47.5299989,14.7062493 C47.8223803,14.8889877 48,15.2094576 48,15.5542476 L48,50 C48,50.5522847 47.5522847,51 47,51 L32,51 Z'
}));

var HomeButton = function (_Component) {
  (0, _inherits3.default)(HomeButton, _Component);

  function HomeButton() {
    (0, _classCallCheck3.default)(this, HomeButton);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  HomeButton.prototype.render = function render() {
    var _this2 = this;

    return (0, _jsx3.default)(_goToAction2.default, {
      render: function render(goToSlide) {
        return (0, _jsx3.default)(StyledDiv, {
          styles: [_this2.context.styles.homeButton.container],
          onClick: function onClick() {
            return goToSlide(1);
          }
        }, void 0, _ref);
      }
    });
  };

  return HomeButton;
}(_react.Component);

exports.default = HomeButton;


HomeButton.contextTypes = {
  styles: _propTypes2.default.object
};