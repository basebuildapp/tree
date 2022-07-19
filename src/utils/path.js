"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.isLowerSibling = exports.moveAfterPath = exports.getPathOnLevel = exports.getIndexAmongSiblings = exports.isTopOfSubtree = exports.getParentPath = exports.hasSameParent = exports.isSamePath = void 0;
/*
  Checking if two given path are equal
 */
var isSamePath = function (a, b) {
    if (a === b) {
        return true;
    }
    return a.length === b.length && a.every(function (v, i) { return v === b[i]; });
};
exports.isSamePath = isSamePath;
/*
  Checks if the two paths have the same parent
 */
var hasSameParent = function (a, b) {
    return exports.isSamePath(exports.getParentPath(a), exports.getParentPath(b));
};
exports.hasSameParent = hasSameParent;
/*
  Calculates the parent path for a path
*/
var getParentPath = function (child) {
    return child.slice(0, child.length - 1);
};
exports.getParentPath = getParentPath;
/*
  It checks if the item is on top of a sub tree based on the two neighboring items, which are above or below the item.
*/
var isTopOfSubtree = function (belowPath, abovePath) {
    return !abovePath || isParentOf(abovePath, belowPath);
};
exports.isTopOfSubtree = isTopOfSubtree;
var isParentOf = function (parent, child) {
    return exports.isSamePath(parent, exports.getParentPath(child));
};
var getIndexAmongSiblings = function (path) {
    var lastIndex = path[path.length - 1];
    return lastIndex;
};
exports.getIndexAmongSiblings = getIndexAmongSiblings;
var getPathOnLevel = function (path, level) {
    return path.slice(0, level);
};
exports.getPathOnLevel = getPathOnLevel;
var moveAfterPath = function (after, from) {
    var newPath = __spreadArray([], after);
    var movedDownOnTheSameLevel = exports.isLowerSibling(newPath, from);
    if (!movedDownOnTheSameLevel) {
        // not moved within the same subtree
        newPath[newPath.length - 1] += 1;
    }
    return newPath;
};
exports.moveAfterPath = moveAfterPath;
var isLowerSibling = function (a, other) {
    return exports.hasSameParent(a, other) &&
        exports.getIndexAmongSiblings(a) > exports.getIndexAmongSiblings(other);
};
exports.isLowerSibling = isLowerSibling;
