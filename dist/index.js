'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var wTouch = require('w-touch');
var clsx = require('clsx');
var reactTransitionGroup = require('react-transition-group');
var nanoid = require('nanoid');
var web = require('@react-spring/web');
var reactI18next = require('react-i18next');
var sortablejs = require('sortablejs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var wTouch__default = /*#__PURE__*/_interopDefaultLegacy(wTouch);
var clsx__default = /*#__PURE__*/_interopDefaultLegacy(clsx);
var sortablejs__default = /*#__PURE__*/_interopDefaultLegacy(sortablejs);

function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0, _templateObject1;

/**
 * 2套标签主题色(默认: normal)
 * normal: 字体颜色和背景色相似
 * light: 字体颜色为白色, 背景色更加明亮
 *
 * @type Props
 */

var StyledTag = /*#__PURE__*/styled__default['default'].span.withConfig({
  displayName: "DKTag__StyledTag",
  componentId: "sc-xx3xc0-0"
})(["min-width:56px;height:24px;padding:0 14px;box-sizing:border-box;line-height:24px;text-align:center;border-radius:8px;font-size:14px;font-weight:500;display:inline-block;", " ", ""], function (_ref) {
  var color = _ref.color,
    theme = _ref.theme;
  switch (color) {
    case 'success':
      return theme === 'light' ? styled.css(_templateObject || (_templateObject = _taggedTemplateLiteral(["color: #fff; background: #52c41a;"]))) : styled.css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["color: #52c41a; background: #DAF9F0;"])));
    case 'complete':
      return styled.css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["color: #5062EC; background: rgba(80, 98, 236, 0.1);"])));
    case 'warning':
      return styled.css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["color: #faad14; background: rgba(247, 201, 57, 0.1);"])));
    case 'error':
      return theme === 'light' ? styled.css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["color: #fff; background: #ff4d4f;"]))) : styled.css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["color: #ff4d4f; background: rgba(247, 61, 108, 0.1);"])));
    case 'disabled':
      return styled.css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["color: #bfbfbf; background: #D7DBDF;"])));
    case 'neutral':
      return styled.css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["color: #0097E0; background: rgba(0, 151, 224, 0.1);"])));
    case 'green':
      return styled.css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["color: #92DB35; background: rgba(146, 219, 53, 0.2);"])));
    default:
      return styled.css(_templateObject0 || (_templateObject0 = _taggedTemplateLiteral([""])));
  }
}, function (_ref2) {
  var size = _ref2.size;
  return size === 'mini' && styled.css(_templateObject1 || (_templateObject1 = _taggedTemplateLiteral(["\n    min-width: 40px;\n    height: 20px;\n    line-height: 20px;\n    padding: 0 4px;\n  "])));
});
var DKTag = /*#__PURE__*/React__default['default'].memo(function (_ref3) {
  var color = _ref3.color,
    _ref3$theme = _ref3.theme,
    theme = _ref3$theme === void 0 ? 'normal' : _ref3$theme,
    _ref3$size = _ref3.size,
    size = _ref3$size === void 0 ? 'normal' : _ref3$size,
    children = _ref3.children;
  return /*#__PURE__*/React__default['default'].createElement(StyledTag, {
    color: color,
    theme: theme,
    size: size
  }, children);
});

Object.defineProperty(exports, 'ServerStyleSheet', {
  enumerable: true,
  get: function () {
    return styled.ServerStyleSheet;
  }
});
Object.defineProperty(exports, 'StyleSheetManager', {
  enumerable: true,
  get: function () {
    return styled.StyleSheetManager;
  }
});
Object.defineProperty(exports, 'createGlobalStyle', {
  enumerable: true,
  get: function () {
    return styled.createGlobalStyle;
  }
});
Object.defineProperty(exports, 'css', {
  enumerable: true,
  get: function () {
    return styled.css;
  }
});
Object.defineProperty(exports, 'isStyledComponent', {
  enumerable: true,
  get: function () {
    return styled.isStyledComponent;
  }
});
Object.defineProperty(exports, 'keyframes', {
  enumerable: true,
  get: function () {
    return styled.keyframes;
  }
});
Object.defineProperty(exports, 'styled', {
  enumerable: true,
  get: function () {
    return styled__default['default'];
  }
});
Object.defineProperty(exports, 'useTheme', {
  enumerable: true,
  get: function () {
    return styled.useTheme;
  }
});
Object.defineProperty(exports, 'Touch', {
  enumerable: true,
  get: function () {
    return wTouch__default['default'];
  }
});
Object.defineProperty(exports, 'clsx', {
  enumerable: true,
  get: function () {
    return clsx__default['default'];
  }
});
Object.defineProperty(exports, 'CSSTransition', {
  enumerable: true,
  get: function () {
    return reactTransitionGroup.CSSTransition;
  }
});
Object.defineProperty(exports, 'Transition', {
  enumerable: true,
  get: function () {
    return reactTransitionGroup.Transition;
  }
});
Object.defineProperty(exports, 'TransitionGroup', {
  enumerable: true,
  get: function () {
    return reactTransitionGroup.TransitionGroup;
  }
});
Object.defineProperty(exports, 'nanoid', {
  enumerable: true,
  get: function () {
    return nanoid.nanoid;
  }
});
Object.defineProperty(exports, 'animated', {
  enumerable: true,
  get: function () {
    return web.animated;
  }
});
Object.defineProperty(exports, 'easings', {
  enumerable: true,
  get: function () {
    return web.easings;
  }
});
Object.defineProperty(exports, 'useSpring', {
  enumerable: true,
  get: function () {
    return web.useSpring;
  }
});
Object.defineProperty(exports, 'useTranslation', {
  enumerable: true,
  get: function () {
    return reactI18next.useTranslation;
  }
});
Object.defineProperty(exports, 'Sortable', {
  enumerable: true,
  get: function () {
    return sortablejs__default['default'];
  }
});
exports.DKTag = DKTag;
