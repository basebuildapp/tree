"use strict";
exports.__esModule = true;
exports.oneOf = exports.between = exports.range = exports.noop = void 0;
var noop = function () { };
exports.noop = noop;
var range = function (n) {
    return Array.from({ length: n }, function (v, i) { return i; });
};
exports.range = range;
var between = function (min, max, number) {
    return Math.min(max, Math.max(min, number));
};
exports.between = between;
var oneOf = function (a, b) { return (typeof a !== 'undefined' ? a : b); };
exports.oneOf = oneOf;
