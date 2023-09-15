import React from 'react';
import styled from 'styled-components';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var StyledButton = styled.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-1vdts62-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: 600;\n  border: none;\n  border-radius: 20px;\n  cursor: pointer;\n  display: inline-block;\n  color: #515151;\n  background-color: #ffd951;\n  padding: 10px 20px;\n  &:hover {\n    background-color: #ffb801;\n  }\n"], ["\n  font-weight: 600;\n  border: none;\n  border-radius: 20px;\n  cursor: pointer;\n  display: inline-block;\n  color: #515151;\n  background-color: #ffd951;\n  padding: 10px 20px;\n  &:hover {\n    background-color: #ffb801;\n  }\n"])));
var Button = function Button(_a) {
  _a.label;
    var children = _a.children,
    rest = __rest(_a, ["label", "children"]);
  return /*#__PURE__*/React.createElement(StyledButton, __assign({}, rest), children);
};
var templateObject_1;

var ArrowCircleDown = function ArrowCircleDown(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "" : _c,
    _d = _a.strokeColor,
    strokeColor = _d === void 0 ? "#515151" : _d,
    _e = _a.className,
    className = _e === void 0 ? "" : _e,
    _f = _a.style,
    style = _f === void 0 ? {} : _f,
    _g = _a.viewBox,
    viewBox = _g === void 0 ? "0 0 24 24" : _g;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: fillColor,
    style: style,
    className: className,
    viewBox: viewBox
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m15 13-3 3m0 0-3-3m3 3V8m0 13a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z",
    stroke: strokeColor
  }));
};

var Close = function Close(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "" : _c,
    _d = _a.strokeColor,
    strokeColor = _d === void 0 ? "#515151" : _d,
    _e = _a.className,
    className = _e === void 0 ? "" : _e,
    _f = _a.style,
    style = _f === void 0 ? {} : _f,
    _g = _a.viewBox,
    viewBox = _g === void 0 ? "0 0 24 24" : _g;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: fillColor,
    style: style,
    className: className,
    viewBox: viewBox
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m6 6 12 12M6 18 18 6 6 18Z",
    stroke: strokeColor
  }));
};

var grayScale = {
  black: "#000000",
  300: "#333333",
  main: "#515151",
  500: "#8B8B8B",
  600: "#A8A8A8",
  700: "#C1C1C1",
  800: "#DDDDDD",
  900: "#ECECEC",
  1000: "#F5F5F5",
  white: "#000000"
};
var yellow = {
  200: "#FFD951",
  300: "#FFB801",
  main: "#FFD951",
  500: "#FFE998",
  600: "#FFF1C3",
  700: "#FFFDF4",
  opacity: "#FFFDF4"
};
var blue = {
  200: "#FFF1C3",
  300: "#0969DF",
  main: "#2277DC",
  500: "#2586F9",
  600: "#E9F1FC",
  700: "#FFFDF4",
  opacity: "#FFFDF4"
};
var red = {
  200: "#1A62B8",
  300: "#206DCC",
  main: "#2277DC",
  500: "#2586F9",
  600: "#E9F1FC",
  700: "#FFFDF4",
  opacity: "#FFFDF4"
};
var orange = {
  200: "#1A62B8",
  300: "#206DCC",
  main: "#2277DC",
  500: "#2586F9",
  600: "#E9F1FC",
  700: "#FFFDF4",
  opacity: "#FFFDF4"
};
var green = {
  200: "#1A62B8",
  300: "#206DCC",
  main: "#2277DC",
  500: "#2586F9",
  600: "#E9F1FC",
  700: "#FFFDF4",
  opacity: "#FFFDF4"
};

export { ArrowCircleDown, Button, Close, blue, grayScale, green, orange, red, yellow };
//# sourceMappingURL=index.esm.js.map
