'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _calendar = require('../calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _dateRange = require('../date-range');

var _dateRange2 = _interopRequireDefault(_dateRange);

var _fitInput = require('fit-input');

var _fitInput2 = _interopRequireDefault(_fitInput);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateInput = (function (_React$Component) {
    _inherits(DateInput, _React$Component);

    function DateInput(props) {
        _classCallCheck(this, DateInput);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DateInput).call(this, props));

        _this.state = {
            showCalendar: false,
            position: 'bottom'
        };

        _this.handleDocumentClick = function (event) {
            if (!_jquery2.default.contains(_this.$dom[0], event.target)) {
                _this.setState({
                    showCalendar: false
                });
            }
        };
        return _this;
    }

    _createClass(DateInput, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.$dom = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this));
            (0, _jquery2.default)(document).on('click', this.handleDocumentClick);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            (0, _jquery2.default)(document).off('click', this.handleDocumentClick);
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus() {
            var position = 'bottom';
            if (this.$dom.offset().top > 310) {
                position = 'top';
            }

            this.setState({
                showCalendar: true,
                position: position
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var calendarContainerClass = (0, _classnames2.default)(_defineProperty({
                'calendar-container': true
            }, this.state.position, true));

            return _react2.default.createElement(
                'div',
                { className: 'lib-pc-datepicker-lib-input', style: { width: this.props.width } },
                _react2.default.createElement(_fitInput2.default, { onFocus: this.handleFocus.bind(this), style: { width: this.props.width } }),
                _react2.default.createElement('i', { className: 'fa fa-calendar addon' }),
                !this.state.showCalendar ? null : _react2.default.createElement(
                    'div',
                    { className: calendarContainerClass },
                    _react2.default.createElement(_calendar2.default, null)
                )
            );
        }
    }]);

    return DateInput;
})(_react2.default.Component);

exports.default = DateInput;

DateInput.defaultProps = {
    onChange: function onChange() {},
    width: 200
};