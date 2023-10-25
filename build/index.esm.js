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
  white: "#FFFFFF"
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
  200: "#1A62B8",
  300: "#066EEE",
  main: "#2586F9",
  500: "#74B0F6",
  600: "#E4EEFD",
  700: "#F2FAFF",
  opacity: "#F2FAFF"
};
var red = {
  200: "#BF292D",
  300: "#DC161A",
  main: "#F03E41",
  500: "#FB878C",
  600: "#FFD6D7",
  700: "#FFF2F3",
  opacity: "#FFF2F3"
};
var orange = {
  200: "#DE5B00",
  300: "#F18409",
  main: "#FFA33C",
  500: "#FFC275",
  600: "#FFDCAF",
  700: "#FFF7EC",
  opacity: "#FFF7EC"
};
var green = {
  200: "#009024",
  300: "#1AB62F",
  main: "#4BD05D",
  500: "#93EC9C",
  600: "#C2F1C7",
  700: "#F3FFF4",
  opacity: "#F3FFF4"
};

var Heading = function Heading(_a) {
  var name = _a.name,
    _b = _a.color,
    color = _b === void 0 ? grayScale.main : _b,
    children = _a.children,
    rest = __rest(_a, ["name", "color", "children"]);
  var filterHeadingStyle = {
    h1: {
      size: "36px",
      lineHeight: "44px",
      weight: "700"
    },
    h2: {
      size: "32px",
      lineHeight: "40px",
      weight: "700"
    },
    h3: {
      size: "28px",
      lineHeight: "36px",
      weight: "700"
    },
    h4: {
      size: "24px",
      lineHeight: "32px",
      weight: "600"
    },
    h5: {
      size: "20px",
      lineHeight: "28px",
      weight: "600"
    },
    h6: {
      size: "18px",
      lineHeight: "24px",
      weight: "600"
    }
  };
  var StyledHeading = styled[name].withConfig({
    displayName: "Typo__StyledHeading",
    componentId: "sc-1g34h81-0"
  })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-size: ", ";\n    line-height: ", ";\n    font-weight: ", ";\n    color: ", ";\n    margin: 0;\n  "], ["\n    font-size: ", ";\n    line-height: ", ";\n    font-weight: ", ";\n    color: ", ";\n    margin: 0;\n  "])), filterHeadingStyle[name].size, filterHeadingStyle[name].lineHeight, filterHeadingStyle[name].weight, color);
  return /*#__PURE__*/React.createElement(StyledHeading, __assign({}, rest), children);
};
var Text = function Text(_a) {
  var name = _a.name,
    color = _a.color,
    children = _a.children,
    _b = _a.element,
    element = _b === void 0 ? "p" : _b,
    rest = __rest(_a, ["name", "color", "children", "element"]);
  var filterTextStyle = {
    strongM: {
      size: "16px",
      lineHeight: "22px",
      weight: "600"
    },
    strongS: {
      size: "14px",
      lineHeight: "20px",
      weight: "600"
    },
    l: {
      size: "18px",
      lineHeight: "30px",
      weight: "400"
    },
    spacedM: {
      size: "16px",
      lineHeight: "26px",
      weight: "400"
    },
    m: {
      size: "16px",
      lineHeight: "22px",
      weight: "400"
    },
    spacedS: {
      size: "14px",
      lineHeight: "22px",
      weight: "400"
    },
    s: {
      size: "14px",
      lineHeight: "20px",
      weight: "400"
    },
    xs: {
      size: "12px",
      lineHeight: "16px",
      weight: "400"
    },
    xxs: {
      size: "10px",
      lineHeight: "14px",
      weight: "400"
    }
  };
  var StyledText = styled[element].withConfig({
    displayName: "Typo__StyledText",
    componentId: "sc-1g34h81-1"
  })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-size: ", ";\n    line-height: ", ";\n    font-weight: ", ";\n    color: ", ";\n    margin: 0;\n  "], ["\n    font-size: ", ";\n    line-height: ", ";\n    font-weight: ", ";\n    color: ", ";\n    margin: 0;\n  "])), filterTextStyle[name].size, filterTextStyle[name].lineHeight, filterTextStyle[name].weight, color);
  return /*#__PURE__*/React.createElement(StyledText, __assign({}, rest), children);
};
var Typo = {
  Heading: Heading,
  Text: Text
};
var templateObject_1, templateObject_2;

var AdjustmentsIcon = function AdjustmentsIcon(_a) {
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
    d: "M12 6V4m0 2a2 2 0 0 0 0 4m0-4a2 2 0 0 1 0 4m0 0v10m-6-2a2 2 0 1 0 0-4m0 4a2 2 0 1 1 0-4m0 4v2m0-6V4m12 14a2 2 0 0 0 0-4m0 4a2 2 0 0 1 0-4m0 4v2m0-6V4",
    stroke: strokeColor
  }));
};

var AirConditinerIcon = function AirConditinerIcon(_a) {
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
    d: "M12.001 2v19.63M14.53 4.103a4.884 4.884 0 0 1-2.53.701 4.884 4.884 0 0 1-2.529-.701M9.47 19.527a4.912 4.912 0 0 1 5.06 0M20.5 6.907l-17 9.815M19.942 10.15a4.911 4.911 0 0 1-2.528-4.382M4.057 13.481a4.911 4.911 0 0 1 2.529 4.382M3.5 6.907l17 9.815M4.057 10.15a4.91 4.91 0 0 0 2.529-4.382M19.942 13.481a4.911 4.911 0 0 0-2.528 4.382",
    stroke: strokeColor
  }));
};

var AlignIcon = function AlignIcon(_a) {
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
    fill: "#515151",
    d: "M11.622 4.436a.5.5 0 0 1 .756 0l4.102 4.737a.5.5 0 0 1-.378.827H7.898a.5.5 0 0 1-.378-.827l4.102-4.737ZM12.378 19.564a.5.5 0 0 1-.756 0L7.52 14.827A.5.5 0 0 1 7.898 14h8.204a.5.5 0 0 1 .378.827l-4.102 4.737Z",
    stroke: strokeColor
  }));
};

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

var BathroomIcon = function BathroomIcon(_a) {
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
    strokeWidth: 2,
    d: "M19.2 12.818h.488a1 1 0 0 1 .964 1.265l-1.25 4.546a1 1 0 0 1-.964.735H17.4m1.8-6.546H4.312a1 1 0 0 0-.964 1.265l1.25 4.546a1 1 0 0 0 .964.735H6.6m12.6-6.546V4a1 1 0 0 0-1-1h-3.4a1 1 0 0 0-1 1v1.727m0 0h2.7m-2.7 0h-2.7M6.6 19.364 5.7 21m.9-1.636h10.8m0 0L18.3 21",
    stroke: strokeColor
  }));
};

var BbqIcon = function BbqIcon(_a) {
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
    width: 8,
    height: 2,
    x: 8,
    y: 11,
    fill: "#515151",
    rx: 1
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M12 17v6M8 17l-2 5.928M16 17l2 5.928",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 9v-.547c0-1.262.442-2.484 1.25-3.453l.29-.348c.62-.744.96-1.683.96-2.652v0M14 9v-.547c0-1.262.442-2.484 1.25-3.453l.29-.348c.62-.744.96-1.683.96-2.652v0",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#515151",
    fillRule: "evenodd",
    d: "M7.75 9v-.547c0-.409.046-.918.137-1.453H3a1 1 0 0 0-1 1v2a8 8 0 0 0 8 8h4a8 8 0 0 0 8-8V8a1 1 0 0 0-1-1h-4.35c-.262.367-.4.748-.4 1.453V9H20v1a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6V9h3.75Z",
    clipRule: "evenodd",
    stroke: strokeColor
  }));
};

var BeddingSetIcon = function BeddingSetIcon(_a) {
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
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 7a4 4 0 0 1 4-4h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17.4 17.5H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h12a2 2 0 0 1 2 2v9.941",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M21 14H6",
    stroke: strokeColor
  }));
};

var BellIcon = function BellIcon(_a) {
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
    d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.001 6.001 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0H9m6 0v1a3 3 0 0 1-6 0v-1",
    stroke: strokeColor
  }));
};

var BilliardsIcon = function BilliardsIcon(_a) {
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
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 7.58,
    cy: 16.749,
    r: 5.5,
    strokeWidth: 2,
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: 2,
    d: "m15.702 16.285 2.121-2.122",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#515151",
    fillRule: "evenodd",
    d: "m3.686 2.767 16.946 15.787a.882.882 0 1 1-1.247 1.247l-4.484-4.813a7.484 7.484 0 0 1 .108 3.05l2.913 3.127a2.882 2.882 0 1 0 4.074-4.074L5.05 1.303A2.063 2.063 0 0 0 2.134 4.22L6.91 9.344a7.557 7.557 0 0 1 3.034.322l-6.345-6.81a.063.063 0 0 1 .088-.09Z",
    clipRule: "evenodd",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M7.83 18.999v-4.5l-1.5 1",
    stroke: strokeColor
  }));
};

var BookmarkIcon = function BookmarkIcon(_a) {
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
    d: "M5.586 3.586A2 2 0 0 0 5 5v16l7-3.5 7 3.5V5a2 2 0 0 0-2-2H7a2 2 0 0 0-1.414.586Z",
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

var CameraIcon = function CameraIcon(_a) {
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
    d: "M3.586 7.586A2 2 0 0 0 3 9v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-.93a2 2 0 0 1-1.664-.89l-.812-1.22A2 2 0 0 0 13.93 4h-3.86a2 2 0 0 0-1.664.89l-.812 1.22A2 2 0 0 1 5.93 7H5a2 2 0 0 0-1.414.586Z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14.121 15.121A3 3 0 1 0 9.88 10.88a3 3 0 0 0 4.242 4.242Z",
    stroke: strokeColor
  }));
};

var ChairIcon = function ChairIcon(_a) {
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
    d: "M4.4 17.75v2.85M5.35 10.15V5.4c0-1.05.85-1.9 1.9-1.9h9.5c1.05 0 1.9.85 1.9 1.9v4.75",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19.125 10.15a2.375 2.375 0 0 0-2.375 2.375v1.425h-9.5v-1.425a2.375 2.375 0 1 0-2.85 2.327v2.898h15.2v-2.898a2.376 2.376 0 0 0-.475-4.702ZM19.6 17.75v2.85",
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

var CheckCircleIcon = function CheckCircleIcon(_a) {
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
    d: "m9 12 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
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

var CircleIcon = function CircleIcon(_a) {
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
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 7,
    strokeWidth: 2,
    stroke: strokeColor
  }));
};

var CleaningGuestIcon = function CleaningGuestIcon(_a) {
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
    clipPath: "url(#CleaningGuest_svg__a)"
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "#515151",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.956 12.874c-.64 0-1.16-.541-1.16-1.209V9.506h-4v9.927c0 .866.673 1.568 1.504 1.568h7.064c.831 0 1.504-.702 1.504-1.568v-1.441c0-2.827-2.198-5.121-4.911-5.121v.002z"
  }), /*#__PURE__*/React.createElement("g", {
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.796 9.51V8.073a.575.575 0 0 0-.158-.399L1.343 5.28a.52.52 0 0 1-.143-.359V2.614c0-.28.216-.505.485-.505h10.653c.268 0 .485.226.485.505v2.829c0 .28-.216.505-.485.505h-1.123c-1.887 0-3.416 1.595-3.416 3.562m5.186-6.007h1.487M9.021 7.027l2.478 3.019"
  }))), /*#__PURE__*/React.createElement("g", {
    fill: "#515151"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: 16.562,
    cy: 3.487,
    rx: 0.979,
    ry: 0.994
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 18.521,
    cy: 4.978,
    rx: 0.979,
    ry: 0.994
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 18.521,
    cy: 1.995,
    rx: 0.979,
    ry: 0.994
  })), /*#__PURE__*/React.createElement("path", {
    stroke: "#515151",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m20.781 8.719-1.894 1.094.127.221m0 0a3.5 3.5 0 0 1 3.718 2.123 3.5 3.5 0 0 1-.557 3.602m-3.161-5.724.966 1.674m-1.761 6.574 1.894-1.094-.127-.22m0 0a3.5 3.5 0 0 1-3.717-2.123 3.5 3.5 0 0 1 .553-3.597m3.164 5.721-.967-1.674"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "CleaningGuest_svg__a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};

var CleaningHostIcon = function CleaningHostIcon(_a) {
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
    stroke: "#515151",
    strokeMiterlimit: 10,
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.756 13.874c-.64 0-1.16-.541-1.16-1.209v-2.158h-4v9.927c0 .866.673 1.568 1.504 1.568h7.064c.831 0 1.504-.702 1.504-1.568v-1.441c0-2.827-2.198-5.121-4.911-5.121v.002z"
  }), /*#__PURE__*/React.createElement("g", {
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.596 10.51V9.073a.575.575 0 0 0-.158-.399L3.143 6.28A.52.52 0 0 1 3 5.922V3.614c0-.28.216-.505.485-.505h10.653c.268 0 .485.226.485.505v2.829c0 .28-.216.505-.485.505h-1.123c-1.887 0-3.416 1.595-3.416 3.562m5.186-6.007h1.487M10.82 8.027l2.478 3.019"
  }))), /*#__PURE__*/React.createElement("g", {
    fill: "#515151"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: 18.562,
    cy: 4.487,
    rx: 0.979,
    ry: 0.994
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 20.521,
    cy: 5.978,
    rx: 0.979,
    ry: 0.994
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 20.521,
    cy: 2.995,
    rx: 0.979,
    ry: 0.994
  })));
};

var CloseCircleIcon = function CloseCircleIcon(_a) {
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
    d: "m10 14 2-2m0 0 2-2m-2 2-2-2m2 2 2 2m7-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
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

var CloudIcon = function CloudIcon(_a) {
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
    d: "M4.172 17.828a4 4 0 0 1 1.948-6.731 5.002 5.002 0 1 1 9.78-2.096A5 5 0 1 1 16 19H7a4 4 0 0 1-2.828-1.172Z",
    stroke: strokeColor
  }));
};

var CollectionIcon = function CollectionIcon(_a) {
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
    d: "M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m10 0V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2m10 0H7",
    stroke: strokeColor
  }));
};

var CookingToolsIcon = function CookingToolsIcon(_a) {
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
    strokeLinecap: "square",
    strokeWidth: 2,
    d: "M4 3v18M17 4v17",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: 2,
    d: "M4 3.238C4 3.107 4.107 3 4.238 3A4.762 4.762 0 0 1 9 7.762V15H4V3.238ZM21 6.692C21 8.732 19.21 15 17 15s-4-6.268-4-8.308C13 4.653 14.79 3 17 3s4 1.653 4 3.692Z",
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

var DeskIcon = function DeskIcon(_a) {
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
    width: 19,
    height: 4,
    x: 2.5,
    y: 3,
    stroke: "#515151",
    strokeLinejoin: "round",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 8,
    height: 10,
    stroke: "#515151",
    strokeLinejoin: "round",
    strokeWidth: 2,
    rx: 1,
    transform: "matrix(1 0 0 -1 11.5 17)"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4.5 21V8a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 15.5,
    cy: 9.5,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 15.5,
    cy: 14.5,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: 2,
    d: "M11.5 12h8",
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

var DinerWareIcon = function DinerWareIcon(_a) {
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
    strokeWidth: 2,
    d: "M2.5 21a9 9 0 0 0 0-18",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: 1.5,
    d: "M2.5 17a5 5 0 1 0 0-10",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M5.108 12.699A2.7 2.7 0 0 0 3.2 9.392",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17.5 2.5v19M14.5 3v4.333c0 2.167 3 2.167 3 2.167s3 0 3-2.167V3",
    stroke: strokeColor
  }));
};

var DishWasherIcon = function DishWasherIcon(_a) {
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
    width: 19,
    height: 19,
    x: 2.5,
    y: 2.5,
    stroke: "#515151",
    strokeWidth: 2,
    rx: 2
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 6,
    cy: 5.5,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 5.5,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 14,
    cy: 5.5,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: 2,
    d: "M2.5 8.5h19",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 9,
    cy: 15,
    r: 4,
    strokeWidth: 1.5,
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 9,
    cy: 15,
    r: 2,
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M15.75 11v8M18.25 11v8",
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

var DocumentDuplicateIcon = function DocumentDuplicateIcon(_a) {
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
    d: "M8 7v8a2 2 0 0 0 2 2h6M8 7V5a2 2 0 0 1 2-2h4.586a1 1 0 0 1 .707.293l4.414 4.414a1 1 0 0 1 .293.707V15a2 2 0 0 1-2 2h-2M8 7H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2",
    stroke: strokeColor
  }));
};

var DoorlockIcon = function DoorlockIcon(_a) {
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
    width: 11,
    height: 3,
    x: 10.5,
    y: 15,
    stroke: "#515151",
    strokeWidth: 2,
    rx: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#515151",
    fillRule: "evenodd",
    d: "M5.5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2h-2v2a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v9h2V5a3 3 0 0 0-3-3h-8Z",
    clipRule: "evenodd",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 6.5,
    cy: 6,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 9.5,
    cy: 6,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12.5,
    cy: 6,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 6.5,
    cy: 9,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 9.5,
    cy: 9,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12.5,
    cy: 9,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 6.5,
    cy: 12,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 9.5,
    cy: 12,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12.5,
    cy: 12,
    r: 1,
    fill: "#515151",
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

var DownloadIcon = function DownloadIcon(_a) {
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
    d: "M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4-4 4m0 0-4-4m4 4V4",
    stroke: strokeColor
  }));
};

var DressingTableIcon = function DressingTableIcon(_a) {
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
    width: 18,
    height: 3,
    x: 3,
    y: 16,
    stroke: "#515151",
    strokeLinejoin: "round",
    strokeWidth: 2,
    rx: 1
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 15a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1 2 2 0 0 0-2-2H6a2 2 0 0 0-2 2ZM5 22v-2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M15 9h4l1 4h-6l1-4Z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#515151",
    fillRule: "evenodd",
    d: "M8 8a4 4 0 1 1 7.874 1h2.043a6 6 0 1 0-2.6 4H14l.462-1.847A4 4 0 0 1 8 8Z",
    clipRule: "evenodd",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: 2,
    d: "M17 13v3",
    stroke: strokeColor
  }));
};

var DryingRackIcon = function DryingRackIcon(_a) {
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
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3.5 3h15a2 2 0 1 1 0 4h-15V3Z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#515151",
    fillRule: "evenodd",
    d: "M7.736 3A3 3 0 0 0 2.5 5v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7h-2v13h-2V6.732A2 2 0 0 1 5.5 3h2.236Z",
    clipRule: "evenodd",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M18.961 12.469a1.59 1.59 0 1 1 1.12 2.71H12.93m.465 5.547a1.59 1.59 0 1 0 1.121-2.71H12.5M19.783 20.726a1.589 1.589 0 1 0 1.121-2.71h-3.088",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M11 8v2M14 8v2M17 8v2",
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

var ExternalLinkIcon = function ExternalLinkIcon(_a) {
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
    d: "M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14",
    stroke: strokeColor
  }));
};

var EyeIcon = function EyeIcon(_a) {
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
    d: "M14.121 14.121A3 3 0 1 0 9.88 9.88a3 3 0 0 0 4.242 4.242Z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7Z",
    stroke: strokeColor
  }));
};

var EyeOffIcon = function EyeOffIcon(_a) {
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
    d: "M13.875 18.825c-.618.117-1.246.175-1.875.175-4.478 0-8.268-2.943-9.543-7A9.97 9.97 0 0 1 4.02 8.971m5.858.908a3 3 0 1 1 4.243 4.243M9.878 9.879l4.243 4.243M9.878 9.879l4.242 4.241m.001.002 3.291 3.29M9.88 9.88 6.59 6.59m0 0L3 3m3.59 3.59A9.953 9.953 0 0 1 12 5c4.478 0 8.268 2.943 9.543 7a10.024 10.024 0 0 1-4.132 5.411M6.59 6.59l10.821 10.821m0 0L21 21",
    stroke: strokeColor
  }));
};

var FastForwardIcon = function FastForwardIcon(_a) {
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
    d: "M12.227 12.447a.999.999 0 0 1-.294.353l-5.333 4A1 1 0 0 1 5 16V8a1 1 0 0 1 1.6-.8l5.333 4a.999.999 0 0 1 .294 1.247ZM20.227 12.447a.999.999 0 0 1-.294.353l-5.333 4A1 1 0 0 1 13 16V8a1 1 0 0 1 1.6-.8l5.333 4a.999.999 0 0 1 .294 1.247Z",
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

var Filter2Icon = function Filter2Icon(_a) {
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
    d: "M7.39 6.225h13.171M3.439 12.448h10.366m0 0c0 1.227.983 2.223 2.195 2.223 1.212 0 2.195-.995 2.195-2.223m-4.39 0c0-1.228.983-2.223 2.195-2.223 1.212 0 2.195.995 2.195 2.223m0 0h2.366m-13.17 6.054h13.17M7.391 6.222c0 1.228-.984 2.223-2.196 2.223C3.983 8.445 3 7.45 3 6.223 3 4.995 3.983 4 5.195 4c1.212 0 2.195.995 2.195 2.223Zm0 12.278c0 1.227-.984 2.223-2.196 2.223C3.983 20.723 3 19.727 3 18.5c0-1.227.983-2.223 2.195-2.223 1.212 0 2.195.995 2.195 2.223Z",
    stroke: strokeColor
  }));
};

var ForkSpoonIcon = function ForkSpoonIcon(_a) {
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
    d: "M7 2v20M4 2.5v5C4 10 7 10 7 10s3 0 3-2.5v-5M17 10v12M20 6c0 2.209-1.343 4-3 4s-3-1.791-3-4 1.343-4 3-4 3 1.791 3 4Z",
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

var GolfIcon = function GolfIcon(_a) {
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
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 15,
    cy: 16,
    r: 6,
    strokeWidth: 2,
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 17,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 14,
    cy: 19,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 16,
    cy: 17,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M3 2v20M3 11l8.738-3.574c.828-.34.828-1.513 0-1.852L3 2",
    stroke: strokeColor
  }));
};

var GymIcon = function GymIcon(_a) {
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
    strokeWidth: 2,
    d: "M1 11.5h2M21 11.5h2M9 11.5h5",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("mask", {
    id: "Gym_svg__a",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("rect", {
    width: 5,
    height: 13,
    x: 21.5,
    y: 18.5,
    rx: 1,
    transform: "rotate(-180 21.5 18.5)"
  })), /*#__PURE__*/React.createElement("rect", {
    width: 5,
    height: 13,
    x: 21.5,
    y: 18.5,
    stroke: "#515151",
    strokeWidth: 4,
    mask: "url(#Gym_svg__a)",
    rx: 1,
    transform: "rotate(-180 21.5 18.5)"
  }), /*#__PURE__*/React.createElement("mask", {
    id: "Gym_svg__b",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("rect", {
    width: 5,
    height: 19,
    x: 18.5,
    y: 21.5,
    rx: 1,
    transform: "rotate(-180 18.5 21.5)"
  })), /*#__PURE__*/React.createElement("rect", {
    width: 5,
    height: 19,
    x: 18.5,
    y: 21.5,
    stroke: "#515151",
    strokeWidth: 4,
    mask: "url(#Gym_svg__b)",
    rx: 1,
    transform: "rotate(-180 18.5 21.5)"
  }), /*#__PURE__*/React.createElement("mask", {
    id: "Gym_svg__c",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("rect", {
    width: 5,
    height: 13,
    x: 2.5,
    y: 5.5,
    rx: 1
  })), /*#__PURE__*/React.createElement("rect", {
    width: 5,
    height: 13,
    x: 2.5,
    y: 5.5,
    stroke: "#515151",
    strokeWidth: 4,
    mask: "url(#Gym_svg__c)",
    rx: 1
  }), /*#__PURE__*/React.createElement("mask", {
    id: "Gym_svg__d",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("rect", {
    width: 5,
    height: 19,
    x: 5.5,
    y: 2.5,
    rx: 1
  })), /*#__PURE__*/React.createElement("rect", {
    width: 5,
    height: 19,
    x: 5.5,
    y: 2.5,
    stroke: "#515151",
    strokeWidth: 4,
    mask: "url(#Gym_svg__d)",
    rx: 1
  }));
};

var HeartIcon = function HeartIcon(_a) {
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
    d: "M3.343 7.778a4.5 4.5 0 0 1 7.339-1.46L12 7.636l1.318-1.318a4.5 4.5 0 0 1 6.364 6.364L12 20.364l-7.682-7.682a4.499 4.499 0 0 1-.975-4.904Z",
    stroke: strokeColor
  }));
};

var HomeIcon = function HomeIcon(_a) {
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
    d: "m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11 2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6",
    stroke: strokeColor
  }));
};

var IdentificationIcon = function IdentificationIcon(_a) {
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
    d: "M10 6H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-5m-4 0V5a2 2 0 1 1 4 0v1m-4 0a2 2 0 1 0 4 0m-5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 0 0-2.83 2M15 11h3m-3 4h2",
    stroke: strokeColor
  }));
};

var InformationCircleIcon = function InformationCircleIcon(_a) {
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
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    stroke: strokeColor
  }));
};

var InviteIcon = function InviteIcon(_a) {
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
    d: "M12 4.354a4 4 0 0 1 4.414-1.096A4 4 0 0 1 19 7a4 4 0 0 1-2.586 3.742A4 4 0 0 1 12 9.646M15 21H3v-1a6 6 0 0 1 6-6 6 6 0 0 1 6 6v1zm0 0h6v-1a6 6 0 0 0-3-5.197 6 6 0 0 0-6 0M13 7a4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4z",
    stroke: strokeColor
  }));
};

var IronIcon = function IronIcon(_a) {
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
    strokeWidth: 2,
    d: "M3 21h18",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: 2,
    d: "M3 16.09A9.09 9.09 0 0 1 12.09 7h7.274C20.267 7 21 7.733 21 8.636V15a2 2 0 0 1-2 2H3.91a.91.91 0 0 1-.91-.91Z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M21 9V5a2 2 0 0 0-2-2H7",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 14,
    cy: 13,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 17,
    cy: 13,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }));
};

var LiftIcon = function LiftIcon(_a) {
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
    d: "M4.105 21V3h15.79v18M7.263 21V9h9.474v12M2 21h10m10 0H12m0 0V9m-1.579-3h3.158",
    stroke: strokeColor
  }));
};

var LinkIcon = function LinkIcon(_a) {
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
    d: "M13.828 10.172a4 4 0 0 0-5.656 0l-4 4a4 4 0 1 0 5.656 5.656l1.102-1.1m-.758-4.9a4 4 0 0 0 5.656 0l4-4a4 4 0 0 0-5.656-5.656l-1.1 1.1",
    stroke: strokeColor
  }));
};

var LivingRoomIcon = function LivingRoomIcon(_a) {
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
    strokeWidth: 2,
    d: "M6.5 13.5v-1.75a2.25 2.25 0 0 0-4.5 0v3.75a2 2 0 0 0 2 2m2.5-4h11m-11 0H12m5.5 0v-1.75a2.25 2.25 0 0 1 4.5 0v3.763a2 2 0 0 1-2 1.987m-2.5-4H12m8 4v3m0-3H4m0 0v3m8-15v8m0-8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4m7-4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V10",
    stroke: strokeColor
  }));
};

var LocationIcon = function LocationIcon(_a) {
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
    d: "M17.657 16.657 13.414 20.9a1.999 1.999 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0v0Z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M14.121 13.121A3 3 0 1 0 9.88 8.88a3 3 0 0 0 4.242 4.242Z",
    stroke: strokeColor
  }));
};

var LockClosedIcon = function LockClosedIcon(_a) {
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
    d: "M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Zm10-10V7a4 4 0 1 0-8 0v4h8Z",
    stroke: strokeColor
  }));
};

var LockOpenIcon = function LockOpenIcon(_a) {
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
    d: "M8 11V7a4 4 0 0 1 8 0m-4 8v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Z",
    stroke: strokeColor
  }));
};

var LoftIcon = function LoftIcon(_a) {
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
    d: "M2 10.571 12 2l10 8.571m-20 0V22h11M2 10.571h11m9 0V22h-4.316M22 10.571h-4.316m-4.684 0h4.684m-4.684 0v3.81M13 22h4.684M13 22v-3.81m4.684-7.619v3.81m0 7.619v-3.81M13 14.381h4.684m-4.684 0v3.81m4.684-3.81v3.81m-4.684 0h4.684",
    stroke: strokeColor
  }));
};

var LundryDryerIcon = function LundryDryerIcon(_a) {
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
    width: 19,
    height: 19,
    x: 2.5,
    y: 2.5,
    stroke: "#515151",
    strokeWidth: 2,
    rx: 2
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 5.667,
    cy: 5.667,
    r: 0.792,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 5.278,
    strokeWidth: 2,
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M15 12a3 3 0 0 0-3-3M9 12a3 3 0 0 0 3 3",
    stroke: strokeColor
  }));
};

var LundryWasherIcon = function LundryWasherIcon(_a) {
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
    width: 19,
    height: 19,
    x: 2.5,
    y: 2.5,
    stroke: "#515151",
    strokeWidth: 2,
    rx: 2
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 5.667,
    cy: 5.667,
    r: 0.792,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 5.278,
    strokeWidth: 2,
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M6.73 12.42c.79.263 2.878.535 4.9-.48 2.87-.94 4.217-.005 5.06.627",
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

var MessageIcon = function MessageIcon(_a) {
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
    d: "M5.422 12.275v6.43l2.995-2.756L12.695 21 22 3 2 8.602l3.422 3.673Zm0 0 7.273-3.673",
    stroke: strokeColor
  }));
};

var MicrophoneIcon = function MicrophoneIcon(_a) {
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
    d: "M19 11a7 7 0 0 1-7 7m0 0a7 7 0 0 1-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 0 1-3-3V5a3 3 0 1 1 6 0v6a3 3 0 0 1-3 3Z",
    stroke: strokeColor
  }));
};

var MicrowaveIcon = function MicrowaveIcon(_a) {
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
    width: 20,
    height: 16,
    x: 2,
    y: 4,
    stroke: "#515151",
    strokeWidth: 2,
    rx: 2
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5.158 7h10.526v9H5.158z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.395 8c0 .252-.223.5-.553.5-.33 0-.552-.248-.552-.5s.223-.5.552-.5c.33 0 .553.248.553.5ZM19.395 12c0 .252-.223.5-.553.5-.33 0-.552-.248-.552-.5s.223-.5.552-.5c.33 0 .553.248.553.5Z",
    stroke: strokeColor
  }));
};

var MinusCircleIcon = function MinusCircleIcon(_a) {
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
    d: "M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    stroke: strokeColor
  }));
};

var MinusIcon = function MinusIcon(_a) {
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
    d: "M18 12H6",
    stroke: strokeColor
  }));
};

var MoonIcon = function MoonIcon(_a) {
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
    d: "M15.195 15.822a9 9 0 0 0 5.16-.468A9.003 9.003 0 0 1 12 21 9.003 9.003 0 0 1 8.646 3.646a9 9 0 0 0 6.549 12.176Z",
    stroke: strokeColor
  }));
};

var NewsPaperIcon = function NewsPaperIcon(_a) {
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
    d: "M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8Z",
    stroke: strokeColor
  }));
};

var NoInviteIcon = function NoInviteIcon(_a) {
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
    clipPath: "url(#NoInvite_svg__a)"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "#515151",
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M1.45 22.586 22.663 1.373"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#515151",
    fillRule: "evenodd",
    d: "M4.83 22H21a1 1 0 0 0 1-1v-1a7 7 0 0 0-3.5-6.063 7 7 0 0 0-3.5-.938c-.434 0-.866.04-1.289.12L11.28 15.55c.46.235.884.543 1.256.915A5 5 0 0 1 14 20H6.83l-2 2zm10.003-10.003a5 5 0 0 0 4.281-2.155A5 5 0 0 0 20 7l-.003-.167-5.164 5.164zm3.265-8.922a5 5 0 0 0-4.302-.928A5 5 0 0 0 12 3a5 5 0 0 0-6.535.465 5 5 0 0 0 0 7.071A5 5 0 0 0 9 12l.176-.003 4.821-4.821L14 7a5 5 0 0 0-.667-2.495 3 3 0 0 1 2.727-.312 3 3 0 0 1 .606.312l1.431-1.431zm-9.98 9.981-6.061 6.061a7 7 0 0 1 6.061-6.061zm-1.24-8.177a3 3 0 0 1 4.243 0 3 3 0 0 1 0 4.243 3 3 0 0 1-4.243 0 3 3 0 0 1 0-4.243zM16 20a7 7 0 0 0-2.001-4.9A4.999 4.999 0 0 1 15 14.999a5 5 0 0 1 4.33 2.5A5 5 0 0 1 20 20h-4z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "NoInvite_svg__a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};

var NoPetIcon = function NoPetIcon(_a) {
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
    clipPath: "url(#NoPet_svg__a)"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "#515151",
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M1.45 22.586 22.663 1.373"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#515151",
    fillRule: "evenodd",
    d: "M5.202 21.625c.284.142.597.256.942.332l.007.002.007.002c.348.072.772.044 1.121.011l1.123-.136.201-.026 3.296-.268h.18c1.17 0 2.316.137 3.298.264l.225.029 1.096.132c.349.034.767.062 1.109-.004l.014-.003.014-.003c1.774-.393 2.718-1.776 3.075-3.02l.018-.062.01-.064c.204-1.346-.24-2.47-.857-3.383-.524-.776-1.222-1.468-1.804-2.045l-.202-.201-.865-1.017-1.171-1.376-1.418 1.418 1.057 1.242.902 1.061.026.03.028.028.24.239c.598.594 1.145 1.138 1.551 1.739.425.629.63 1.232.546 1.901-.23.741-.733 1.362-1.542 1.551-.013.001-.055.005-.136.003l-.401-.026-1.021-.123-.236-.031c-.986-.128-2.244-.281-3.555-.281h-.18c-1.311 0-2.571.156-3.556.285l-.208.027-1.046.127-.263.02-1.625 1.625zM17.93 3.24A2.998 2.998 0 0 0 15.5 2a3 3 0 0 0-3 3c0 .999.489 1.885 1.24 2.43l1.472-1.472A1 1 0 0 1 15.5 4a1 1 0 0 1 .958.712L17.93 3.24zm-.925 6.581 2.816-2.816L20 7a3 3 0 1 1 0 6 3 3 0 0 1-3-3l.005-.178zm-4.354-1.303-9.658 9.658c-.002-1.066.397-1.978.915-2.743.524-.773 1.221-1.464 1.803-2.041l.206-.204 1.55-1.817.902-1.061.006-.008c.499-.574 1.219-1.277 2.171-1.606a3.02 3.02 0 0 1 .479-.13c.353-.067.703-.067.945-.067H12.028l.623.019zM7.5 5a1 1 0 1 1 2 0 1 1 0 1 1-2 0zm1-3a3 3 0 1 0 0 6 3 3 0 1 0 0-6zM3 10a1 1 0 1 1 2 0 1 1 0 1 1-2 0zm1-3a3 3 0 1 0 0 6 3 3 0 1 0 0-6zm15 3a1 1 0 1 1 2 0 1 1 0 1 1-2 0z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "NoPet_svg__a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};

var NoSmokingIcon = function NoSmokingIcon(_a) {
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
    clipPath: "url(#NoSmoking_svg__a)"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "#515151",
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M1.45 22.586 22.663 1.373"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#515151",
    fillRule: "evenodd",
    d: "M19.482 1.692A1 1 0 0 0 17.827.76c-1.449 1.317-2.243 2.569-2.34 3.842a3.39 3.39 0 0 0 .073 1.011l3.921-3.921zm-.113 5.77-1.417 1.417.395.347.691.617c.734.682 1.203 1.252 1.375 1.819a1.85 1.85 0 0 1-.097 1.375 1.87 1.87 0 0 1-.298.445c-.092.101-.156.144-.169.153a1 1 0 0 0 .895 1.789c.503-.252 1.035-.817 1.373-1.517a3.848 3.848 0 0 0 .21-2.822c-.338-1.119-1.169-2.002-1.928-2.706l-.864-.772-.165-.145zm-7.132 1.475L5.896 2.546a1 1 0 0 0-1.42 0L1.79 5.253a1 1 0 0 0 0 1.409l6.336 6.386 1.414-1.414-5.631-5.676L5.186 4.67l5.636 5.681 1.414-1.414zm1.403 4.254 1.414-1.414 1.49 1.502a1 1 0 0 1 0 1.409l-2.686 2.707a1 1 0 0 1-1.42 0l-1.495-1.507 1.414-1.414.79.797 1.277-1.287-.785-.792zm4.918 3.593a1 1 0 1 0-1.42-1.409l-2.62 2.641a1 1 0 1 0 1.42 1.409l2.62-2.641zm2.014 2.03a1 1 0 0 0-1.42-1.409l-2.62 2.641a1 1 0 0 0 1.42 1.409l2.62-2.641z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "NoSmoking_svg__a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};

var OfficeBuildingIcon = function OfficeBuildingIcon(_a) {
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
    d: "M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0H5m14 0h2m-2 0h-5m-9 0H3m2 0h5m4 0v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5m4 0h-4M9 7h1m-1 4h1m4-4h1m-1 4h1",
    stroke: strokeColor
  }));
};

var OvenIcon = function OvenIcon(_a) {
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
    width: 19,
    height: 19,
    x: 2.5,
    y: 2.5,
    stroke: "#515151",
    strokeWidth: 2,
    rx: 2
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5.5 11.5h13v7h-13z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 6,
    cy: 5.5,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 5.5,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 14,
    cy: 5.5,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: 2,
    d: "M2.5 8.5h19",
    stroke: strokeColor
  }));
};

var PaperClipIcon = function PaperClipIcon(_a) {
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
    d: "m15.172 7-6.586 6.586a2 2 0 1 0 2.828 2.828l6.414-6.586a4 4 0 0 0-5.656-5.656l-6.415 6.585a6 6 0 1 0 8.486 8.486L20.5 13",
    stroke: strokeColor
  }));
};

var ParkingIcon = function ParkingIcon(_a) {
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
    d: "M9 16.5v-4m0 0V7h3.75a2.75 2.75 0 0 1 2.75 2.75v0a2.75 2.75 0 0 1-2.75 2.75H9Z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 9,
    strokeWidth: 2,
    stroke: strokeColor
  }));
};

var PauseCircleIcon = function PauseCircleIcon(_a) {
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
    d: "M10 9v6m4-6v6m7-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    stroke: strokeColor
  }));
};

var PencilAltIcon = function PencilAltIcon(_a) {
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
    d: "M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.414-9.414a2 2 0 1 1 2.828 2.828L11.828 15H9v-2.828l8.586-8.586Z",
    stroke: strokeColor
  }));
};

var PencilIcon = function PencilIcon(_a) {
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
    d: "m15.232 5.232 3.536 3.536m-2.036-5.036a2.5 2.5 0 0 1 3.536 3.536L6.5 21.036H3v-3.572L16.732 3.732Z",
    stroke: strokeColor
  }));
};

var PetIcon = function PetIcon(_a) {
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
    stroke: "#515151",
    strokeWidth: 2,
    style: style,
    className: className,
    viewBox: viewBox
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12a2 2 0 1 0 0-4 2 2 0 1 0 0 4zm4.5-5a2 2 0 1 0 0-4 2 2 0 1 0 0 4zm7 0a2 2 0 1 0 0-4 2 2 0 1 0 0 4zm4.5 5a2 2 0 1 0 0-4 2 2 0 1 0 0 4zm-2.66 1.86-2.48-2.91c-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32l-2.48 2.91c-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z",
    stroke: strokeColor
  }));
};

var PhotographIcon = function PhotographIcon(_a) {
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
    d: "m4 16 4.586-4.586a2 2 0 0 1 2.828 0L16 16m-2-2 1.586-1.586a2 2 0 0 1 2.828 0L20 14m-6-6h.01M6 20h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z",
    stroke: strokeColor
  }));
};

var PingpongIcon = function PingpongIcon(_a) {
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
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 6,
    cy: 5.5,
    r: 3,
    strokeWidth: 2,
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("mask", {
    id: "Pingpong_svg__a",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.353 10.73a9.471 9.471 0 0 0 2.782 6.812 9.471 9.471 0 0 0 6.812 2.782l-9.594-9.595Z",
    clipRule: "evenodd"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#515151",
    d: "m4.353 10.73 1.414-1.415L2.4 5.948l-.047 4.762 2 .02Zm9.594 9.594.02 2 4.761-.047-3.367-3.367-1.414 1.414Zm-5.398-4.196a7.471 7.471 0 0 1-2.197-5.379l-4-.04a11.472 11.472 0 0 0 3.368 8.247l2.829-2.828Zm5.378 2.196a7.471 7.471 0 0 1-5.378-2.196L5.72 18.956a11.472 11.472 0 0 0 8.247 3.368l-.04-4Zm1.434.586L5.767 9.315l-2.829 2.829 9.595 9.594 2.828-2.828Z",
    mask: "url(#Pingpong_svg__a)",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#515151",
    d: "m6.91 15.409 2.357 2.357-3.67 4.522a2 2 0 0 1-2.967.154l-.397-.397a2 2 0 0 1 .154-2.967l4.523-3.67Z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#515151",
    fillRule: "evenodd",
    d: "M7.914 10.12a4.986 4.986 0 0 1-2.48.349l9.76 9.76a9.457 9.457 0 0 0 5.374-2.687 9.5 9.5 0 0 0 0-13.435A9.504 9.504 0 0 0 9.786 2.235c.437.505.773 1.099.98 1.75a7.503 7.503 0 1 1 5.083 14.07L7.914 10.12Z",
    clipRule: "evenodd",
    stroke: strokeColor
  }));
};

var PlayCircleIcon = function PlayCircleIcon(_a) {
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
    d: "m11.555 9.036 3.197 2.132a1.003 1.003 0 0 1 0 1.665l-3.197 2.132A1 1 0 0 1 10 14.133V9.87a1 1 0 0 1 1.555-.834Z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20.315 15.444a9 9 0 1 0-16.63-6.888 9 9 0 0 0 16.63 6.888Z",
    stroke: strokeColor
  }));
};

var PlayIcon = function PlayIcon(_a) {
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
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19.5 12.866a1 1 0 0 0 0-1.732l-12-6.928a1 1 0 0 0-1.5.866v13.856a1 1 0 0 0 1.5.866l12-6.928Z",
    stroke: strokeColor
  }));
};

var PlusCircleIcon = function PlusCircleIcon(_a) {
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
    d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    stroke: strokeColor
  }));
};

var PlusIcon = function PlusIcon(_a) {
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
    d: "M12 6v6m0 0v6m0-6h6m-6 0H6",
    stroke: strokeColor
  }));
};

var QuestionMarkCircleIcon = function QuestionMarkCircleIcon(_a) {
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
    d: "M9.566 9.5c0-1 .51-2.13 1.99-2.5 2-.5 3.603 1.223 3.444 3-.223 2.5-3.434 2.5-3.434 2.5s-.01.947-.01 1.5m0 3h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    stroke: strokeColor
  }));
};

var RefreshIcon = function RefreshIcon(_a) {
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
    d: "M4 4v5h.582m0 0a8.001 8.001 0 0 1 15.356 2M4.582 9H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15",
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

var RewindIcon = function RewindIcon(_a) {
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
    d: "M11.772 11.553c.069-.14.17-.26.294-.353h.001l5.333-4A1 1 0 0 1 19 8v8a1 1 0 0 1-1.6.8l-5.334-4a.999.999 0 0 1-.294-1.247ZM3.772 11.553a1 1 0 0 1 .294-.353l5.334-4A1 1 0 0 1 11 8v8a1 1 0 0 1-1.6.8l-5.334-4a1 1 0 0 1-.294-1.247Z",
    stroke: strokeColor
  }));
};

var RooftopIcon = function RooftopIcon(_a) {
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
    d: "M2 22v-3h5m15 3v-3h-5m-5 0V8.667M12 19H7m5 0h5M12 8.667H5V6.762L12 2l7 4.762v1.905h-7ZM9 12h6M5 11v4h2m2 0H7m0 0v4m12-8v4h-2m-2 0h2m0 0v4",
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

var SaunaIcon = function SaunaIcon(_a) {
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
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 8,
    cy: 4.75,
    r: 2.5,
    strokeWidth: 2,
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#515151",
    fillRule: "evenodd",
    d: "M11.706 13.75c-.466-1.778-2.006-3-3.706-3-1.7 0-3.24 1.222-3.706 3H2.25c.504-2.845 2.887-5 5.75-5s5.246 2.155 5.75 5h-2.044Z",
    clipRule: "evenodd",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: 2,
    d: "M2 13.75h20v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7Z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 9.75v-.547c0-1.262.442-2.484 1.25-3.453v0a5.393 5.393 0 0 0 1.25-3.453V1.75M19 9.75v-.547c0-1.262.442-2.484 1.25-3.453v0a5.393 5.393 0 0 0 1.25-3.453V1.75",
    stroke: strokeColor
  }));
};

var SaveIcon = function SaveIcon(_a) {
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
    d: "M8 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3m-1 4-3 3m0 0-3-3m3 3V4",
    stroke: strokeColor
  }));
};

var SearchCircleIcon = function SearchCircleIcon(_a) {
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
    d: "m8 16 2.879-2.879m0 0a3 3 0 1 0 4.278-4.208 3 3 0 0 0-4.278 4.208ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    stroke: strokeColor
  }));
};

var SearchIcon = function SearchIcon(_a) {
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
    d: "m21 21-6-6m2-5a7.001 7.001 0 0 1-11.95 4.95A7 7 0 1 1 17 10Z",
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

var ShareIcon = function ShareIcon(_a) {
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
    d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 1 1 0-2.684m0 2.684 6.632 3.316m-6.632-6 6.632-3.316m0 9.316a3 3 0 1 0 5.368 2.684 3 3 0 0 0-5.368-2.684Zm0-9.316a3 3 0 1 0 5.366-2.683 3 3 0 0 0-5.366 2.683Z",
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

var ShoppingBagIcon = function ShoppingBagIcon(_a) {
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
    d: "M16 11V7a4 4 0 1 0-8 0v4M5 9h14l1 12H4L5 9Z",
    stroke: strokeColor
  }));
};

var ShoppingCartIcon = function ShoppingCartIcon(_a) {
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
    d: "M3 3h2l.4 2m0 0H21l-4 8H7M5.4 5 7 13m0 0-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
    stroke: strokeColor
  }));
};

var ShouldAskInviteIcon = function ShouldAskInviteIcon(_a) {
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
    stroke: "#515151",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    className: className,
    viewBox: viewBox
  }, /*#__PURE__*/React.createElement("path", {
    strokeWidth: 2,
    d: "M12 4.354a4 4 0 0 1 4.414-1.096A4 4 0 0 1 19 7a4 4 0 0 1-2.586 3.742A4 4 0 0 1 12 9.646M15 21H3v-1a6 6 0 0 1 6-6 6 6 0 0 1 6 6v1zm0 0h6v-1a6 6 0 0 0-3-5.197 6 6 0 0 0-6 0M13 7a4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: 1.5,
    d: "M20 2.283c0-.496.281-1.056 1.096-1.239 1.102-.248 1.985.606 1.898 1.487-.123 1.239-1.892 1.239-1.892 1.239l-.006.743m0 1.487h.006",
    stroke: strokeColor
  }));
};

var ShuttleBusIcon = function ShuttleBusIcon(_a) {
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
  }, /*#__PURE__*/React.createElement("mask", {
    id: "ShuttleBus_svg__a",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M22 4a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h.897a2.77 2.77 0 0 0 2.77-2.77.1.1 0 0 1 .1-.1h6.466a.1.1 0 0 1 .1.1 2.77 2.77 0 0 0 2.77 2.77H19a3 3 0 0 0 3-3V4Z",
    clipRule: "evenodd"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#515151",
    d: "M5 3h14v-4H5v4ZM4 20V4H0v16h4Zm1.897 1H5v4h.897v-4Zm4.77-.77a1.9 1.9 0 0 1-1.9 1.9v-4a2.1 2.1 0 0 0-2.1 2.1h4Zm-1.9 1.9h6.466v-4H8.767v4Zm6.466 0a1.9 1.9 0 0 1-1.9-1.9h4a2.1 2.1 0 0 0-2.1-2.1v4ZM19 21h-.897v4H19v-4Zm1-17v16h4V4h-4Zm-1 21a5 5 0 0 0 5-5h-4a1 1 0 0 1-1 1v4Zm-5.667-4.77a4.77 4.77 0 0 0 4.77 4.77v-4a.77.77 0 0 1-.77-.77h-4ZM5.897 25a4.77 4.77 0 0 0 4.77-4.77h-4a.77.77 0 0 1-.77.77v4ZM0 20a5 5 0 0 0 5 5v-4a1 1 0 0 1-1-1H0ZM19 3a1 1 0 0 1 1 1h4a5 5 0 0 0-5-5v4ZM5-1a5 5 0 0 0-5 5h4a1 1 0 0 1 1-1v-4Z",
    mask: "url(#ShuttleBus_svg__a)",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: 2,
    d: "M3 12h19",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M15 15.5h3M6 15.5h3M12 12V5",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("rect", {
    width: 2,
    height: 6,
    x: 21,
    y: 6,
    fill: "#515151",
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 2,
    height: 6,
    x: 1,
    y: 6,
    fill: "#515151",
    rx: 1
  }));
};

var SimCardIcon = function SimCardIcon(_a) {
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

var SingleBedroomIcon = function SingleBedroomIcon(_a) {
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
    d: "M4.636 11.667H4a1 1 0 0 0-1 1v4.666a1 1 0 0 0 1 1h1.455m-.819-6.666V6a1 1 0 0 1 1-1h12.728a1 1 0 0 1 1 1v5.667m-14.728 0H9m10.364 0H20a1 1 0 0 1 1 1v4.666a1 1 0 0 1-1 1h-1.454m.818-6.666H15m-6 0V8.5h6v3.167m-6 0h6m-9.545 6.666V20m0-1.667h13.09m0 0V20",
    stroke: strokeColor
  }));
};

var SmokingIcon = function SmokingIcon(_a) {
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
    fill: "#515151",
    d: "m5.186 3.25.71-.704a1 1 0 0 0-1.42 0l.71.704zm10.648 10.732.71.704a1 1 0 0 0 0-1.409l-.71.704zm-2.686 2.707-.71.704a1 1 0 0 0 1.42 0l-.71-.704zM2.5 5.957l-.71-.704a1 1 0 0 0 0 1.409l.71-.704zm16.057 10.826a1 1 0 0 0-1.42-1.409l1.42 1.409zm-4.04 1.232a1 1 0 0 0 1.42 1.409l-1.42-1.409zm6.054.798a1 1 0 0 0-1.42-1.409l1.42 1.409zm-4.04 1.232a1 1 0 0 0 1.42 1.409l-1.42-1.409zm3.314-6.409a1 1 0 1 0 .897 1.788l-.897-1.788zm1.523-2.263-.957.289.957-.289zM19.173 2.24A1 1 0 0 0 17.827.76l1.345 1.48zM4.476 3.954l10.648 10.732 1.42-1.409L5.896 2.546l-1.42 1.409zm10.648 9.324-2.686 2.707 1.42 1.409 2.686-2.707-1.42-1.409zm-1.266 2.707L3.21 5.253 1.79 6.661l10.648 10.732 1.42-1.409zM3.21 6.661l2.686-2.707-1.42-1.409L1.79 5.253l1.42 1.409zm13.928 8.713-2.62 2.641 1.42 1.409 2.62-2.641-1.42-1.409zm2.014 2.03-2.62 2.641 1.42 1.409 2.62-2.641-1.42-1.409zm1.591-1.981c.503-.252 1.035-.817 1.373-1.517a3.848 3.848 0 0 0 .21-2.822l-1.915.578a1.852 1.852 0 0 1-.097 1.375 1.87 1.87 0 0 1-.298.445c-.11.12-.18.159-.17.154l.897 1.788zm1.584-4.34c-.338-1.12-1.169-2.002-1.928-2.706l-2.164-2c-.568-.632-.79-1.131-.752-1.625.04-.521.39-1.331 1.691-2.514L17.827.76c-1.449 1.317-2.243 2.569-2.34 3.842-.099 1.3.549 2.324 1.258 3.113.674.75 1.638 1.523 2.291 2.128.734.682 1.203 1.252 1.375 1.819l1.915-.578z",
    stroke: strokeColor
  }));
};

var SolidQuestionMarkCircleIcon = function SolidQuestionMarkCircleIcon(_a) {
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
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 7,
    cy: 7,
    r: 7,
    fill: "#ececec",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#8b8b8b",
    d: "M7.182 8.598h-1.09c.004-.375.037-.682.1-.92a1.97 1.97 0 0 1 .322-.662 7.12 7.12 0 0 1 .592-.68l.492-.516a2.26 2.26 0 0 0 .369-.527c.094-.191.141-.42.141-.686s-.049-.502-.146-.697-.234-.346-.422-.451-.412-.158-.686-.158a1.71 1.71 0 0 0-.645.123 1.11 1.11 0 0 0-.492.381c-.125.168-.189.389-.193.662H4.439c.008-.441.117-.82.328-1.137a2.08 2.08 0 0 1 .867-.727 2.87 2.87 0 0 1 1.219-.252c.496 0 .918.09 1.266.27a1.85 1.85 0 0 1 .803.773c.184.332.275.727.275 1.184 0 .352-.072.676-.217.973s-.322.568-.545.826a9.72 9.72 0 0 1-.709.738 1.5 1.5 0 0 0-.434.674 2.83 2.83 0 0 0-.111.809zm-1.137 1.857a.64.64 0 0 1 .164-.445c.109-.121.268-.182.475-.182s.371.061.48.182a.64.64 0 0 1 .164.445c0 .168-.055.313-.164.434s-.27.182-.48.182-.365-.06-.475-.182-.164-.266-.164-.434z",
    stroke: strokeColor
  }));
};

var SpaIcon = function SpaIcon(_a) {
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
    d: "m12.943 13.111-.786-.855a3.205 3.205 0 0 1 .393-4.7v0a3.205 3.205 0 0 0 .393-4.701L12.157 2M7.993 13.111l-.786-.855a3.205 3.205 0 0 1 .393-4.7v0a3.205 3.205 0 0 0 .393-4.701L7.207 2M17.343 13.111l-.786-.855a3.205 3.205 0 0 1 .393-4.7v0a3.206 3.206 0 0 0 .393-4.701L16.557 2",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#515151",
    fillRule: "evenodd",
    d: "M4.623 10.96C3.521 11.975 3 13.124 3 14.223c0 1.325.757 2.722 2.376 3.867 1.615 1.142 3.95 1.91 6.624 1.91 2.673 0 5.009-.768 6.623-1.91C20.244 16.944 21 15.547 21 14.222c0-1.325-.757-2.721-2.377-3.867a8.87 8.87 0 0 0-.957-.587c.13-.517.514-1.048 1.27-1.583 2.48 1.426 4.064 3.6 4.064 6.037C23 18.518 18.075 22 12 22S1 18.518 1 14.222c0-2.416 1.559-4.576 4.004-6.002-.435.765-.542 1.761-.38 2.74Z",
    clipRule: "evenodd",
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

var SquashIcon = function SquashIcon(_a) {
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
    fill: "#515151",
    fillRule: "evenodd",
    d: "m10.92 19.494.883-5.006-1.97-.347-.883 5.006a3.443 3.443 0 0 1-.956 1.836l-2.39 2.39a2.062 2.062 0 0 0 2.916 2.916l2.39-2.39c.5-.5 1.14-.833 1.836-.956l4.28-.755c.083-.53.25-1.034.485-1.495l-.106-.603-5.006.884a5.442 5.442 0 0 0-2.903 1.51l-2.39 2.39a.062.062 0 0 1-.088-.087l2.39-2.39a5.442 5.442 0 0 0 1.511-2.903Z",
    clipRule: "evenodd",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#515151",
    fillRule: "evenodd",
    d: "M21.602 17.979 23.3 16.28a5.436 5.436 0 1 0-7.688-7.688l-2.253 2.254a5.436 5.436 0 0 0 4.52 9.238 4.973 4.973 0 0 0-.843 2.04 7.436 7.436 0 0 1-5.092-12.693l2.254-2.253a7.436 7.436 0 1 1 10.517 10.516l-.707.707a4.982 4.982 0 0 0-2.406-.422Z",
    clipRule: "evenodd",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 21.966,
    cy: 22.966,
    r: 3,
    strokeWidth: 2,
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    d: "m14.532 14.608 4.95-4.95M17.361 17.436l4.949-4.949M17.361 9.658l4.949 4.95M14.532 12.486l4.95 4.95",
    stroke: strokeColor
  }));
};

var StarIcon = function StarIcon(_a) {
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
    d: "M12.951 2.927c-.299-.92-1.602-.92-1.902 0L9.53 7.601a1 1 0 0 1-.95.69H3.664c-.968 0-1.372 1.24-.588 1.81l3.976 2.888a1 1 0 0 1 .363 1.118l-1.518 4.674c-.3.921.755 1.688 1.538 1.118l3.976-2.888a1 1 0 0 1 1.176 0l3.976 2.888c.783.57 1.838-.196 1.538-1.118l-1.518-4.674a1 1 0 0 1 .363-1.118l3.976-2.888c.783-.57.381-1.81-.588-1.81H15.42a1 1 0 0 1-.95-.69l-1.519-4.674Z",
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

var StopCircleIcon = function StopCircleIcon(_a) {
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
    d: "M20.315 15.444a9 9 0 1 0-16.63-6.888 9 9 0 0 0 16.63 6.888Z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4Z",
    stroke: strokeColor
  }));
};

var StoveIcon = function StoveIcon(_a) {
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
    width: 19,
    height: 19,
    x: 2.5,
    y: 2.5,
    stroke: "#515151",
    strokeWidth: 2,
    rx: 2
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 8,
    cy: 8,
    r: 2.25,
    strokeWidth: 2,
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 16,
    cy: 8,
    r: 2.25,
    strokeWidth: 2,
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 8,
    cy: 16,
    r: 2.25,
    strokeWidth: 2,
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 14.56,
    cy: 17,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 18,
    cy: 17,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }));
};

var SunIcon = function SunIcon(_a) {
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
    d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
    stroke: strokeColor
  }));
};

var SurfaceIcon = function SurfaceIcon(_a) {
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
    width: 19,
    height: 19,
    x: 2.5,
    y: 2.5,
    stroke: "#515151",
    strokeWidth: 2,
    rx: 2
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6.5 12.5v5h5M12.5 6.5h5v5",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: 2,
    d: "M6.5 17.5 17.62 6.379",
    stroke: strokeColor
  }));
};

var SwimmingPoolIcon = function SwimmingPoolIcon(_a) {
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
    strokeWidth: 2,
    d: "m1 16.084 1.068-.92c1.139-.981 2.86-.887 3.905.193v0c1.085 1.122 2.896 1.152 3.997.046v0a2.796 2.796 0 0 1 3.96.007v0a2.816 2.816 0 0 0 3.987.007l.076-.076a2.915 2.915 0 0 1 3.97-.152l1.037.895M1 21.084l1.068-.92c1.139-.981 2.86-.887 3.905.193v0c1.085 1.122 2.896 1.152 3.997.046v0a2.796 2.796 0 0 1 3.96.007v0a2.816 2.816 0 0 0 3.987.007l.076-.076a2.915 2.915 0 0 1 3.97-.152l1.037.895",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#515151",
    d: "M11 9.917a1 1 0 1 0 2 0h-2Zm0-4.5v4.5h2v-4.5h-2ZM7 15V5.417H5V15h2ZM9 3.417a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v2Zm0-2a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2v-2Z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#515151",
    fillRule: "evenodd",
    d: "M11.68 4.066c-.117.36-.18.744-.18 1.142v2.709a1 1 0 0 0 .5.866V5.417c0-.486-.116-.945-.32-1.351Zm2.165.112a1.708 1.708 0 0 1 3.071 1.03v4.709a1 1 0 1 0 2 0V5.208a3.708 3.708 0 0 0-6.007-2.91c.435.546.759 1.184.936 1.88Z",
    clipRule: "evenodd",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: 2,
    d: "M12 6.417h6",
    stroke: strokeColor
  }));
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

var TerraceIcon = function TerraceIcon(_a) {
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
    d: "M19 9h2V5L3 2v7h16Zm0 0v13M3 22h1.636M21 22h-8m-8.364-8v4m0 4v-4m0 4H10m-5.364-4H10v4m0 0h3m-3-7h3m3 0h-3m0 0v7",
    stroke: strokeColor
  }));
};

var ThumbDownIcon = function ThumbDownIcon(_a) {
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
    d: "m16.999 4-3.76-.94a2 2 0 0 0-.485-.06H8.736a2 2 0 0 0-1.789 1.106l-3.5 7A2 2 0 0 0 5.236 14H12m4.999-10L17 13l-3.392 5.088A3.616 3.616 0 0 0 13 20.096a.905.905 0 0 1-.905.904h-.096a2 2 0 0 1-2-2v-5m7-10H19a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.5",
    stroke: strokeColor
  }));
};

var ThumbUpIcon = function ThumbUpIcon(_a) {
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
    d: "M14 10h4.764a2 2 0 0 1 1.789 2.894l-3.5 7A1.999 1.999 0 0 1 15.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 0 0-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 0 1-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2.5",
    stroke: strokeColor
  }));
};

var ToastMachineIcon = function ToastMachineIcon(_a) {
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
    strokeWidth: 2,
    d: "m3.009 11.759-1 .008M8.111 20.665v1.333M15.889 20.665v1.333",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: 2,
    d: "M3.222 10.443a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v7.222a2 2 0 0 1-2 2H5.222a2 2 0 0 1-2-2v-7.222Z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#515151",
    fillRule: "evenodd",
    d: "M7.17 1.75a2.726 2.726 0 0 0-1.54 4.975c.049.167.12.324.211.469a4.05 4.05 0 0 1 .381-.018H18c.128 0 .255.006.38.018.092-.145.163-.302.212-.47a2.726 2.726 0 0 0-1.54-4.975H7.17Zm-.726 2.726c0-.401.325-.726.726-.726h9.882a.726.726 0 0 1 .255 1.406l-.74.278.081.63H7.574l.08-.63-.74-.278a.726.726 0 0 1-.47-.68Z",
    clipRule: "evenodd",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 17.667,
    cy: 16.332,
    r: 1.111,
    fill: "#515151",
    stroke: strokeColor
  }));
};

var TranslateIcon = function TranslateIcon(_a) {
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
    d: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 0 1 6.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
    stroke: strokeColor
  }));
};

var TrashIcon = function TrashIcon(_a) {
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
    d: "M10 11v6m4-6v6M4 7h16m-1 0-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7h14Zm-4 0V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3h6Z",
    stroke: strokeColor
  }));
};

var TvIcon = function TvIcon(_a) {
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
    width: 18,
    height: 13,
    x: 3,
    y: 4,
    stroke: "#515151",
    strokeLinejoin: "round",
    strokeWidth: 2,
    rx: 2
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M19 21H5M9 21v-4M15 21v-4",
    stroke: strokeColor
  }));
};

var UserAddIcon = function UserAddIcon(_a) {
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
    d: "M18 9v3-3Zm0 3v3-3Zm0 0h3-3Zm0 0h-3 3Zm-5-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0v0ZM3 20a6 6 0 1 1 12 0v1H3v-1Z",
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

var UserIcon = function UserIcon(_a) {
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
    d: "M14.828 9.828a4 4 0 1 0-5.656-5.656 4 4 0 0 0 5.656 5.656ZM7.05 16.05A7 7 0 0 1 19 21H5a7 7 0 0 1 2.05-4.95Z",
    stroke: strokeColor
  }));
};

var UserRemoveIcon = function UserRemoveIcon(_a) {
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
    d: "M21 12h-6m-2-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4 7a6 6 0 0 0-6 6v1h12v-1a6 6 0 0 0-6-6Z",
    stroke: strokeColor
  }));
};

var VideoCameraIcon = function VideoCameraIcon(_a) {
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
    d: "m15 10 4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14v-4ZM5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z",
    stroke: strokeColor
  }));
};

var VolumeOffIcon = function VolumeOffIcon(_a) {
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
    d: "M4 15h1.586l4.707 4.707c.63.63 1.707.184 1.707-.707V5c0-.891-1.077-1.337-1.707-.707L5.586 9H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1ZM19 12l2 2m-4 0 2-2-2 2Zm2-2 2-2-2 2Zm0 0-2-2 2 2Z",
    stroke: strokeColor
  }));
};

var VolumeUpIcon = function VolumeUpIcon(_a) {
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
    d: "M15.536 8.464a5.001 5.001 0 0 1 0 7.072m2.828-9.9a9 9 0 0 1 0 12.728M5.586 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15Z",
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

var WardrobeIcon = function WardrobeIcon(_a) {
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
    height: 19,
    x: 4,
    y: 2,
    stroke: "#515151",
    strokeLinejoin: "round",
    strokeWidth: 2,
    rx: 2
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 4a2 2 0 0 1 2-2h6v12H4V4ZM4 14h16v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5ZM12 2h6a2 2 0 0 1 2 2v10h-8V2Z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 9,
    cy: 8,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 15,
    cy: 8,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 17,
    r: 1,
    fill: "#515151",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M7 22v1M17 22v1",
    stroke: strokeColor
  }));
};

var WaterDispenser2Icon = function WaterDispenser2Icon(_a) {
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
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M13.5 16.262c0 1.09-.676 1.778-1.75 1.778-1.074 0-1.75-.687-1.75-1.778 0-1.172 1.255-2.753 1.64-3.21a.146.146 0 0 1 .11-.052.143.143 0 0 1 .11.052c.386.457 1.64 2.038 1.64 3.21Z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("rect", {
    width: 15,
    height: 19,
    x: 4.5,
    y: 2,
    stroke: "#515151",
    strokeWidth: 2,
    rx: 2
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: 2,
    d: "M9 6h6v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6ZM4.5 6h15",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeWidth: 2,
    d: "M3 21h18",
    stroke: strokeColor
  }));
};

var WaterDispenserIcon = function WaterDispenserIcon(_a) {
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
    strokeWidth: 2,
    d: "M4 6h6v13H4z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H4v1Z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeWidth: 2,
    d: "M4 6h16V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2ZM15 6h2v1h-2z",
    stroke: strokeColor
  }), /*#__PURE__*/React.createElement("path", {
    strokeMiterlimit: 10,
    strokeWidth: 2,
    d: "M18 13.883c0 1.3-.773 2.117-2 2.117-1.227 0-2-.818-2-2.117 0-1.395 1.434-3.277 1.873-3.821A.166.166 0 0 1 16 10c.024 0 .048.005.07.016.022.01.041.026.057.046.44.544 1.873 2.426 1.873 3.82Z",
    stroke: strokeColor
  }));
};

var WifiIcon = function WifiIcon(_a) {
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
    d: "M8.111 16.404a5.5 5.5 0 0 1 7.778 0M12 20h.01m-7.08-7.07c3.904-3.906 10.236-3.906 14.141 0M1.394 9.392c5.857-5.857 15.355-5.857 21.213 0",
    stroke: strokeColor
  }));
};

var ZoomInIcon = function ZoomInIcon(_a) {
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
    d: "m21 21-6-6m-5-8v3m0 0v3m0-3h3m-3 0H7m10 0a7.001 7.001 0 0 1-11.95 4.95A7 7 0 1 1 17 10Z",
    stroke: strokeColor
  }));
};

var ZoomOutIcon = function ZoomOutIcon(_a) {
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
    d: "M13 10H7m14 11-6-6 6 6Zm-4-11a7.001 7.001 0 0 1-11.95 4.95A7 7 0 1 1 17 10Z",
    stroke: strokeColor
  }));
};

export { AdjustmentsIcon, AirConditinerIcon, AlignIcon, AllGenderIcon, ArrowCircleDownIcon, ArrowCircleLeftIcon, ArrowCircleRightIcon, ArrowCircleUpIcon, ArrowDownIcon, ArrowLeftIcon, ArrowNarrowDownIcon, ArrowNarrowLeftIcon, ArrowNarrowRightIcon, ArrowNarrowUpIcon, ArrowRightIcon, ArrowUpIcon, ArrowsExpandIcon, BadgeCheckIcon, BagIcon, BanIcon, BathroomIcon, BbqIcon, BeddingSetIcon, BellIcon, BilliardsIcon, BookmarkIcon, CalendarIcon, CameraIcon, ChairIcon, ChatAlt2Icon, ChatAltIcon, ChatIcon, CheckCircleIcon, CheckIcon, CheckInIcon, CheckInoutIcon, CheckOutIcon, ChevronDoubleDownIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronDoubleUpIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, CircleIcon, CleaningGuestIcon, CleaningHostIcon, CloseCircleIcon, CloseIcon, CloudIcon, CollectionIcon, CookingToolsIcon, CreditCardIcon, DeskIcon, DeviceMobileIcon, DinerWareIcon, DishWasherIcon, DocumentAddIcon, DocumentDuplicateIcon, DoorlockIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, DotsVerticalIcon, DownloadIcon, DressingTableIcon, DryingRackIcon, ExclamationCircleIcon, ExternalLinkIcon, EyeIcon, EyeOffIcon, FastForwardIcon, FemaleIcon, Filter2Icon, ForkSpoonIcon, GoToTopIcon, GolfIcon, GymIcon, HeartIcon, HomeIcon, IdentificationIcon, InformationCircleIcon, InviteIcon, IronIcon, LiftIcon, LinkIcon, LivingRoomIcon, LocationIcon, LockClosedIcon, LockOpenIcon, LoftIcon, LundryDryerIcon, LundryWasherIcon, MaleIcon, MapIcon, MenuIcon, MessageIcon, MicrophoneIcon, MicrowaveIcon, MinusCircleIcon, MinusIcon, MoonIcon, NewsPaperIcon, NoInviteIcon, NoPetIcon, NoSmokingIcon, OfficeBuildingIcon, OvenIcon, PaperClipIcon, ParkingIcon, PauseCircleIcon, PencilAltIcon, PencilIcon, PetIcon, PhotographIcon, PingpongIcon, PlayCircleIcon, PlayIcon, PlusCircleIcon, PlusIcon, QuestionMarkCircleIcon, RefreshIcon, ReplyIcon, RewindIcon, RooftopIcon, RssIcon, SaunaIcon, SaveIcon, SearchCircleIcon, SearchIcon, SettingIcon, ShareIcon, ShieldCheckIcon, ShieldExclamationIcon, ShoppingBagIcon, ShoppingCartIcon, ShouldAskInviteIcon, ShuttleBusIcon, SimCardIcon, SingleBedroomIcon, SmokingIcon, SolidQuestionMarkCircleIcon, SpaIcon, SparklesIcon, SpeakerPhoneIcon, SquashIcon, StarIcon, StationIcon, StopCircleIcon, StoveIcon, SunIcon, SurfaceIcon, SwimmingPoolIcon, TagIcon, TerraceIcon, ThumbDownIcon, ThumbUpIcon, ToastMachineIcon, TranslateIcon, TrashIcon, TvIcon, Typo, UserAddIcon, UserGroupIcon, UserIcon, UserRemoveIcon, VideoCameraIcon, VolumeOffIcon, VolumeUpIcon, WalkingIcon, WardrobeIcon, WaterDispenser2Icon, WaterDispenserIcon, WifiIcon, ZoomInIcon, ZoomOutIcon, blue, grayScale, green, orange, red, yellow };
//# sourceMappingURL=index.esm.js.map
