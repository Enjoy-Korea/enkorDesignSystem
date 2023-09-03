'use strict';

var React = require('react');
var styled = require('styled-components');

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
/* global Reflect, Promise */


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

exports.Button = Button;
//# sourceMappingURL=index.js.map