"use strict";
exports.__esModule = true;
exports.sameProps = void 0;
var sameProps = function (oldProps, newProps, props) {
    return props.find(function (p) { return oldProps[p] !== newProps[p]; }) === undefined;
};
exports.sameProps = sameProps;
