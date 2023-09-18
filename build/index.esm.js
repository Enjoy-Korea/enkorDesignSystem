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

var AllGenderIcon = function AllGenderIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M7 13.182c2.21 0 4-1.832 4-4.091C11 6.83 9.21 5 7 5S3 6.832 3 9.09c0 2.26 1.79 4.092 4 4.092Zm0 0v3.23m-3.333 0H7m0 0h3.333m-3.333 0V20M17 11.818c-2.21 0-4 1.832-4 4.091C13 18.17 14.79 20 17 20s4-1.832 4-4.09c0-2.26-1.79-4.092-4-4.092Zm0 0V5m0 0-2.285 2.38M17 5l2.304 2.211",
    stroke: strokeColor
  }));
};

var ArrowCircleDownIcon = function ArrowCircleDownIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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

var ArrowCircleLeftIcon = function ArrowCircleLeftIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m11 15-3-3m0 0 3-3m-3 3h8M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z",
    stroke: strokeColor
  }));
};

var ArrowCircleRightIcon = function ArrowCircleRightIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m13 9 3 3m0 0-3 3m3-3H8m13 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    stroke: strokeColor
  }));
};

var ArrowCircleUpIcon = function ArrowCircleUpIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m9 11 3-3m0 0 3 3m-3-3v8m0-13a9 9 0 1 1 0 18.001A9 9 0 0 1 12 3Z",
    stroke: strokeColor
  }));
};

var ArrowDownIcon = function ArrowDownIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m19 14-7 7m0 0-7-7m7 7V3",
    stroke: strokeColor
  }));
};

var ArrowLeftIcon = function ArrowLeftIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m10 19-7-7m0 0 7-7m-7 7h18",
    stroke: strokeColor
  }));
};

var ArrowNarrowDownIcon = function ArrowNarrowDownIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m16 17-4 4m0 0-4-4m4 4V3",
    stroke: strokeColor
  }));
};

var ArrowNarrowLeftIcon = function ArrowNarrowLeftIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M3 12h18M7 16l-4-4 4 4Zm-4-4 4-4-4 4Z",
    stroke: strokeColor
  }));
};

var ArrowNarrowRightIcon = function ArrowNarrowRightIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m17 8 4 4m0 0-4 4m4-4H3",
    stroke: strokeColor
  }));
};

var ArrowNarrowUpIcon = function ArrowNarrowUpIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m8 7 4-4m0 0 4 4m-4-4v18",
    stroke: strokeColor
  }));
};

var ArrowRightIcon = function ArrowRightIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m14 5 7 7m0 0-7 7m7-7H3",
    stroke: strokeColor
  }));
};

var ArrowUpIcon = function ArrowUpIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m5 10 7-7m0 0 7 7m-7-7v18",
    stroke: strokeColor
  }));
};

var ArrowsExpandIcon = function ArrowsExpandIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M20 20h-4M4 8V4v4Zm0-4h4-4Zm0 0 5 5-5-5Zm16 4V4v4Zm0-4h-4 4Zm0 0-5 5 5-5ZM4 16v4-4Zm0 4h4-4Zm0 0 5-5-5 5Zm16 0-5-5 5 5Zm0 0v-4 4Z",
    stroke: strokeColor
  }));
};

var BadgeCheckIcon = function BadgeCheckIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m9 12 2 2 4-4M7.835 4.697A3.42 3.42 0 0 0 9.78 3.89a3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138c.057.717.34 1.398.806 1.946a3.42 3.42 0 0 1 0 4.438 3.419 3.419 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.419 3.419 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.419 3.419 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138Z",
    stroke: strokeColor
  }));
};

var BagIcon = function BagIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
  }, /*#__PURE__*/React.createElement("rect", {
    width: 16,
    height: 11.935,
    x: 4,
    y: 8.064,
    stroke: "#515151",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M7.8 9.194v-3.54C7.8 4.188 9.59 3 11.8 3c2.209 0 4 1.188 4 2.654v3.54",
    stroke: strokeColor
  }));
};

var BanIcon = function BanIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636",
    stroke: strokeColor
  }));
};

var CalendarIcon = function CalendarIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z",
    stroke: strokeColor
  }));
};

var ChatAlt2Icon = function ChatAlt2Icon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a1.995 1.995 0 0 1-1.414-.586m0 0L11 14h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4l.586-.586Z",
    stroke: strokeColor
  }));
};

var ChatAltIcon = function ChatAltIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5l-5 5v-5Z",
    stroke: strokeColor
  }));
};

var ChatIcon = function ChatIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.862 9.862 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z",
    stroke: strokeColor
  }));
};

var CheckIcon = function CheckIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m5 13 4 4L19 7",
    stroke: strokeColor
  }));
};

var CheckInIcon = function CheckInIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m11 16-4-4m0 0 4-4m-4 4h14m-5 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v1",
    stroke: strokeColor
  }));
};

var CheckInoutIcon = function CheckInoutIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m11 16-4-4m0 0 4-4m-4 4h14m-5 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v1m3 0 4 4-4 4",
    stroke: strokeColor
  }));
};

var CheckOutIcon = function CheckOutIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m17 16 4-4m0 0-4-4m4 4H7m6 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1",
    stroke: strokeColor
  }));
};

var ChevronDoubleDownIcon = function ChevronDoubleDownIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m19 13-7 7-7-7m14-8-7 7-7-7",
    stroke: strokeColor
  }));
};

var ChevronDoubleLeftIcon = function ChevronDoubleLeftIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m11 19-7-7 7-7m8 14-7-7 7-7",
    stroke: strokeColor
  }));
};

var ChevronDoubleRightIcon = function ChevronDoubleRightIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m13 5 7 7-7 7M5 5l7 7-7 7",
    stroke: strokeColor
  }));
};

var ChevronDoubleUpIcon = function ChevronDoubleUpIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m5 11 7-7 7 7M5 19l7-7 7 7",
    stroke: strokeColor
  }));
};

var ChevronDownIcon = function ChevronDownIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m19 9-7 7-7-7",
    stroke: strokeColor
  }));
};

var ChevronLeftIcon = function ChevronLeftIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m15 19-7-7 7-7",
    stroke: strokeColor
  }));
};

var ChevronRightIcon = function ChevronRightIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m9 5 7 7-7 7",
    stroke: strokeColor
  }));
};

var ChevronUpIcon = function ChevronUpIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m5 15 7-7 7 7",
    stroke: strokeColor
  }));
};

var CloseIcon = function CloseIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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

var CreditCardIcon = function CreditCardIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Z",
    stroke: strokeColor
  }));
};

var DeviceMobileIcon = function DeviceMobileIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z",
    stroke: strokeColor
  }));
};

var DocumentAddIcon = function DocumentAddIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M9 13h6m-3-3v6m5 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z",
    stroke: strokeColor
  }));
};

var DotsCircleHorizontalIcon = function DotsCircleHorizontalIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    stroke: strokeColor
  }));
};

var DotsHorizontalIcon = function DotsHorizontalIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
    stroke: strokeColor
  }));
};

var DotsVerticalIcon = function DotsVerticalIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
    stroke: strokeColor
  }));
};

var ExclamationCircleIcon = function ExclamationCircleIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    stroke: strokeColor
  }));
};

var FemaleIcon = function FemaleIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M12.5 12.91c3.038 0 5.5-2.443 5.5-5.455C18 4.442 15.538 2 12.5 2S7 4.442 7 7.455c0 3.012 2.462 5.454 5.5 5.454Zm0 0v4.305m-4.583 0H12.5m0 0h4.583m-4.583 0V22",
    stroke: strokeColor
  }));
};

var GoToTopIcon = function GoToTopIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m17 13-5-5m0 0-5 5m5-5v12",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M5 4h14",
    stroke: strokeColor
  }));
};

var MaleIcon = function MaleIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M15 8.528a6 6 0 1 0-8 8.944 6 6 0 0 0 8-8.944Zm0 0L20 3.5m0 0h-4.5m4.5 0V8",
    stroke: strokeColor
  }));
};

var MapIcon = function MapIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m9 20-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13V7m0 13 6-3M9 7l6-3m0 13 4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4",
    stroke: strokeColor
  }));
};

var MenuIcon = function MenuIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M4 18h16M4 6h16H4Zm0 6h16H4Z",
    stroke: strokeColor
  }));
};

var ReplyIcon = function ReplyIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M3 10h10a8 8 0 0 1 8 8v2M3 10l6 6m-6-6 6-6",
    stroke: strokeColor
  }));
};

var RssIcon = function RssIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 0 1 7 7m-6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
    stroke: strokeColor
  }));
};

var SettingIcon = function SettingIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M13.675 4.317c-.426-1.756-2.924-1.756-3.35 0a1.723 1.723 0 0 1-2.572 1.065c-1.544-.94-3.31.827-2.37 2.37a1.724 1.724 0 0 1-1.066 2.573c-1.756.426-1.756 2.924 0 3.35a1.725 1.725 0 0 1 1.065 2.572c-.94 1.544.827 3.31 2.37 2.37a1.724 1.724 0 0 1 2.573 1.066c.426 1.756 2.924 1.756 3.35 0a1.725 1.725 0 0 1 2.572-1.065c1.544.94 3.31-.827 2.37-2.37a1.725 1.725 0 0 1 1.066-2.573c1.756-.426 1.756-2.924 0-3.35a1.724 1.724 0 0 1-1.065-2.572c.94-1.544-.827-3.31-2.37-2.37a1.724 1.724 0 0 1-2.573-1.066Z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14.121 14.121A3 3 0 1 0 9.88 9.88a3 3 0 0 0 4.242 4.242Z",
    stroke: strokeColor
  }));
};

var ShieldCheckIcon = function ShieldCheckIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "m9 12 2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.59 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016Z",
    stroke: strokeColor
  }));
};

var ShieldExclamationIcon = function ShieldExclamationIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M12 9v2m0 4h.01m8.608-9.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.59 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016Z",
    stroke: strokeColor
  }));
};

var SimcardIcon = function SimcardIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    fill: "#fff",
    d: "M5 20V8h17v9.23L19.167 20H5Z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7.833 14v-3H11m-3.167 3v3H11m-3.167-3H11m0 0v-3m0 3v3m0-6h4.5v6H11M5 8v12h14.167L22 17.23V8H5Z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4.833 17H2V5h17v2.77",
    stroke: strokeColor
  }));
};

var SparklesIcon = function SparklesIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M5 3v4-4ZM3 5h4-4Zm3 12v4-4Zm-2 2h4-4Zm9-16 2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3Z",
    stroke: strokeColor
  }));
};

var SpeakerPhoneIcon = function SpeakerPhoneIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M11 5.882V19.24a1.76 1.76 0 0 1-3.417.592l-2.147-6.15m0 0A3.999 3.999 0 0 1 7 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.066-3-9.168-3H7c-.537 0-1.069-.108-1.564-.318ZM18 13a3 3 0 0 0 0-6v6Z",
    stroke: strokeColor
  }));
};

var StationIcon = function StationIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c;
    _a.strokeColor;
    var _e = _a.className,
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
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#Station_svg__a)"
  }, /*#__PURE__*/React.createElement("rect", {
    width: 12,
    height: 13,
    x: 6,
    y: 3,
    stroke: "#515151",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/React.createElement("mask", {
    id: "Station_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("rect", {
    width: 8,
    height: 6,
    x: 8,
    y: 5,
    rx: 1
  })), /*#__PURE__*/React.createElement("rect", {
    width: 8,
    height: 6,
    x: 8,
    y: 5,
    stroke: "#515151",
    strokeWidth: 4,
    mask: "url(#Station_svg__b)",
    rx: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 9,
    cy: 13,
    r: 1,
    fill: "#515151"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 15,
    cy: 13,
    r: 1,
    fill: "#515151"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#515151",
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "m9 16-5 5M18.465 19.535H6M15 16l5 5"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "Station_svg__a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};

var TagIcon = function TagIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M7 7h.01M7 3h5a1.99 1.99 0 0 1 1.414.586l7 7a2 2 0 0 1 0 2.828l-7 7a2 2 0 0 1-2.828 0l-7-7A1.995 1.995 0 0 1 3 12V7a4 4 0 0 1 4-4Z",
    stroke: strokeColor
  }));
};

var UserGroupIcon = function UserGroupIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.003 5.003 0 0 0-9.288 0M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
    stroke: strokeColor
  }));
};

var WalkingIcon = function WalkingIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    _c = _a.fillColor,
    fillColor = _c === void 0 ? "none" : _c,
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
    d: "M13 8a8.227 8.227 0 0 1-.761 3.444 9.002 9.002 0 0 1-2.168 2.92 10.14 10.14 0 0 1-3.244 1.95A10.972 10.972 0 0 1 3 17M17 22a7.001 7.001 0 0 0-7-7M20 14c-1.857 0-3.637-.632-4.95-1.757C13.737 11.117 13 9.59 13 8",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 15,
    cy: 4,
    r: 2,
    strokeWidth: 2,
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M10 8c0 2-1.5 4-3 4.5",
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

export { AllGenderIcon, ArrowCircleDownIcon, ArrowCircleLeftIcon, ArrowCircleRightIcon, ArrowCircleUpIcon, ArrowDownIcon, ArrowLeftIcon, ArrowNarrowDownIcon, ArrowNarrowLeftIcon, ArrowNarrowRightIcon, ArrowNarrowUpIcon, ArrowRightIcon, ArrowUpIcon, ArrowsExpandIcon, BadgeCheckIcon, BagIcon, BanIcon, Button, CalendarIcon, ChatAlt2Icon, ChatAltIcon, ChatIcon, CheckIcon, CheckInIcon, CheckInoutIcon, CheckOutIcon, ChevronDoubleDownIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronDoubleUpIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, CloseIcon, CreditCardIcon, DeviceMobileIcon, DocumentAddIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, DotsVerticalIcon, ExclamationCircleIcon, FemaleIcon, GoToTopIcon, MaleIcon, MapIcon, MenuIcon, ReplyIcon, RssIcon, SettingIcon, ShieldCheckIcon, ShieldExclamationIcon, SimcardIcon, SparklesIcon, SpeakerPhoneIcon, StationIcon, TagIcon, UserGroupIcon, WalkingIcon, blue, grayScale, green, orange, red, yellow };
//# sourceMappingURL=index.esm.js.map
