'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
require('antd/es/input/style/css');
var _Input = require('antd/es/input');
require('antd/es/select/style/css');
var _Select = require('antd/es/select');
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
var _Input__default = /*#__PURE__*/_interopDefaultLegacy(_Input);
var _Select__default = /*#__PURE__*/_interopDefaultLegacy(_Select);
var wTouch__default = /*#__PURE__*/_interopDefaultLegacy(wTouch);
var clsx__default = /*#__PURE__*/_interopDefaultLegacy(clsx);
var sortablejs__default = /*#__PURE__*/_interopDefaultLegacy(sortablejs);

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
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

var Option = _Select__default['default'].Option;
var SelectInput = function SelectInput(_ref) {
  var _options$find;
  var initialKey = _ref.initialKey,
    _ref$initialValue = _ref.initialValue,
    initialValue = _ref$initialValue === void 0 ? '' : _ref$initialValue,
    options = _ref.options,
    _ref$selectWidth = _ref.selectWidth,
    selectWidth = _ref$selectWidth === void 0 ? 'auto' : _ref$selectWidth,
    _ref$inputWidth = _ref.inputWidth,
    inputWidth = _ref$inputWidth === void 0 ? 220 : _ref$inputWidth,
    suffix = _ref.suffix,
    onChange = _ref.onChange;
  var _useState = React.useState(initialKey),
    _useState2 = _slicedToArray(_useState, 2),
    optionVal = _useState2[0],
    setOptionVal = _useState2[1];
  var _useState3 = React.useState(initialValue),
    _useState4 = _slicedToArray(_useState3, 2),
    inputVal = _useState4[0],
    setInputVal = _useState4[1];
  React.useEffect(function () {
    setOptionVal(initialKey);
  }, [initialKey]);
  React.useEffect(function () {
    setInputVal(initialValue);
  }, [initialValue]);
  var onSelectChange = function onSelectChange(key) {
    setOptionVal(key);
    onChange && onChange(_defineProperty({}, key, inputVal));
  };
  var onInputChange = function onInputChange(e) {
    setInputVal(e.target.value);
    onChange && onChange(_defineProperty({}, optionVal, e.target.value));
  };
  return /*#__PURE__*/React__default['default'].createElement(_Input__default['default'].Group, {
    compact: true
  }, /*#__PURE__*/React__default['default'].createElement(_Select__default['default'], {
    value: optionVal,
    onChange: onSelectChange,
    style: {
      width: selectWidth
    }
  }, options.map(function (item) {
    return /*#__PURE__*/React__default['default'].createElement(Option, {
      key: item.key,
      value: item.key
    }, item.label);
  })), /*#__PURE__*/React__default['default'].createElement(_Input__default['default'], {
    value: inputVal,
    onChange: onInputChange,
    placeholder: ((_options$find = options.find(function (item) {
      return item.key === optionVal;
    })) === null || _options$find === void 0 ? void 0 : _options$find.placeholder) || '',
    style: {
      width: inputWidth
    },
    suffix: suffix,
    allowClear: true
  }));
};

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
exports.SelectInput = SelectInput;
