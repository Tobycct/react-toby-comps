import { __makeTemplateObject } from "tslib";
import React from 'react';
import styled, { css } from 'styled-components';
var StyledTag = styled.span(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  min-width: 56px;\n  height: 24px;\n  padding: 0 14px;\n  box-sizing: border-box;\n  line-height: 24px;\n  text-align: center;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  display: inline-block;\n\n  /* Color variants */\n  ", "\n\n  /* Size variants */\n  ", "\n"], ["\n  min-width: 56px;\n  height: 24px;\n  padding: 0 14px;\n  box-sizing: border-box;\n  line-height: 24px;\n  text-align: center;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  display: inline-block;\n\n  /* Color variants */\n  ", "\n\n  /* Size variants */\n  ", "\n"])), function (_a) {
  var color = _a.color,
    theme = _a.theme;
  switch (color) {
    case 'success':
      return theme === 'light' ? css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["color: #fff; background: #52c41a;"], ["color: #fff; background: #52c41a;"]))) : css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["color: #52c41a; background: #DAF9F0;"], ["color: #52c41a; background: #DAF9F0;"])));
    case 'complete':
      return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["color: #5062EC; background: rgba(80, 98, 236, 0.1);"], ["color: #5062EC; background: rgba(80, 98, 236, 0.1);"])));
    case 'warning':
      return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["color: #faad14; background: rgba(247, 201, 57, 0.1);"], ["color: #faad14; background: rgba(247, 201, 57, 0.1);"])));
    case 'error':
      return theme === 'light' ? css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["color: #fff; background: #ff4d4f;"], ["color: #fff; background: #ff4d4f;"]))) : css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["color: #ff4d4f; background: rgba(247, 61, 108, 0.1);"], ["color: #ff4d4f; background: rgba(247, 61, 108, 0.1);"])));
    case 'disabled':
      return css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["color: #bfbfbf; background: #D7DBDF;"], ["color: #bfbfbf; background: #D7DBDF;"])));
    case 'neutral':
      return css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["color: #0097E0; background: rgba(0, 151, 224, 0.1);"], ["color: #0097E0; background: rgba(0, 151, 224, 0.1);"])));
    case 'green':
      return css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["color: #92DB35; background: rgba(146, 219, 53, 0.2);"], ["color: #92DB35; background: rgba(146, 219, 53, 0.2);"])));
    default:
      return css(templateObject_10 || (templateObject_10 = __makeTemplateObject([""], [""])));
  }
}, function (_a) {
  var size = _a.size;
  return size === 'mini' && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    min-width: 40px;\n    height: 20px;\n    line-height: 20px;\n    padding: 0 4px;\n  "], ["\n    min-width: 40px;\n    height: 20px;\n    line-height: 20px;\n    padding: 0 4px;\n  "])));
});
var DKTag = /*#__PURE__*/React.memo(function (_a) {
  var color = _a.color,
    _b = _a.theme,
    theme = _b === void 0 ? 'normal' : _b,
    _c = _a.size,
    size = _c === void 0 ? 'normal' : _c,
    children = _a.children;
  return /*#__PURE__*/React.createElement(StyledTag, {
    color: color,
    theme: theme,
    size: size
  }, children);
});
export default DKTag;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;