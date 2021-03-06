'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _arwes = require('arwes');

var _TextIcon = require('./TextIcon');

var _TextIcon2 = _interopRequireDefault(_TextIcon);

var _Wrap = require('./Wrap');

var _Wrap2 = _interopRequireDefault(_Wrap);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var styles = function styles(theme) {
  return _defineProperty({
    root: {
      textAlign: 'center'
    },
    wrap: {
      padding: [theme.padding, 0]
    },
    content: {},
    left: {
      marginBottom: theme.margin / 2
    },
    right: {}
  }, '@media screen and (min-width: ' + (theme.responsive.small + 1) + 'px)', {
    root: {
      textAlign: 'left'
    },
    content: {
      display: 'flex'
    },
    left: {
      margin: 0,
      flex: '1 1 auto'
    },
    right: {
      flex: '1 1 auto',
      textAlign: 'right'
    }
  });
};

var Footer = function Footer(props) {
  var theme = props.theme,
      classes = props.classes,
      className = props.className,
      onLink = props.onLink,
      etc = _objectWithoutProperties(props, ['theme', 'classes', 'className', 'onLink']);

  var cls = (0, _classnames2.default)(classes.root, className);

  return _react2.default.createElement(_arwes.Footer, _extends({ className: cls }, etc), function (anim) {
    return _react2.default.createElement(_Wrap2.default, { className: classes.wrap }, _react2.default.createElement(_arwes.Row, { noMargin: true, col: true, s: 12 }, _react2.default.createElement('div', { className: classes.content }, _react2.default.createElement('div', { className: classes.left }, _react2.default.createElement(_Link2.default, { href: 'https://github.com/romelperez/romelperez.com/blob/master/LICENSE', target: 'license', onLink: onLink }, _react2.default.createElement(_TextIcon2.default, { show: anim.entered, icon: 'copyright' }, '2018 Romel P\xE9rez'))), _react2.default.createElement('div', { className: classes.right }, _react2.default.createElement(_Link2.default, { href: 'https://arwes.romelperez.com', target: 'arwes', onLink: onLink }, _react2.default.createElement(_TextIcon2.default, { show: anim.entered, icon: 'chemical-weapon' }, 'Made with Arwes'))))));
  });
};

Footer.propTypes = {
  onLink: _propTypes2.default.func
};

exports.default = (0, _arwes.withStyles)(styles)(Footer);