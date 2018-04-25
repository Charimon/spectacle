"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _goToAction = _interopRequireDefault(require("./go-to-action"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyledDiv =
/*#__PURE__*/
(0, _reactEmotion.default)("div", {
  target: "ek2sjop0"
})(function (props) {
  return props.styles;
});

var HomeButton =
/*#__PURE__*/
function (_Component) {
  _inherits(HomeButton, _Component);

  function HomeButton() {
    _classCallCheck(this, HomeButton);

    return _possibleConstructorReturn(this, (HomeButton.__proto__ || Object.getPrototypeOf(HomeButton)).apply(this, arguments));
  }

  _createClass(HomeButton, [{
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_goToAction.default, {
        render: function render(goToSlide) {
          return _react.default.createElement(StyledDiv, {
            onClick: function onClick() {
              return goToSlide(1);
            },
            styles: [_this.context.styles.homeButton.container]
          }, _react.default.createElement("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 48 51"
          }, _react.default.createElement("path", {
            d: "M32,51 L32,31 C32,30.4477153 31.5522847,30 31,30 L17,30 C16.4477153,30 16,30.4477153 16,31 L16,51 L1,51 C0.44771525,51 6.76353751e-17,50.5522847 0,50 L0,15.5542476 C-6.54694735e-16,15.2094576 0.177619697,14.8889877 0.47000106,14.7062493 L23.4700011,0.331249338 C23.7942713,0.12858041 24.2057287,0.12858041 24.5299989,0.331249338 L47.5299989,14.7062493 C47.8223803,14.8889877 48,15.2094576 48,15.5542476 L48,50 C48,50.5522847 47.5522847,51 47,51 L32,51 Z"
          })));
        }
      });
    }
  }]);

  return HomeButton;
}(_react.Component);

exports.default = HomeButton;
HomeButton.propTypes = {};
HomeButton.contextTypes = {
  styles: _propTypes.default.object
};