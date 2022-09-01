"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = /*#__PURE__*/ _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var ClickAwayEventListener = function(param) {
    var children = param.children, onClickAway = param.onClickAway;
    var childrenRef = (0, _react.useRef)(null);
    // add ref to children element
    var childrenWithRef = /*#__PURE__*/ _react.default.cloneElement(children, {
        ref: childrenRef
    });
    (0, _react.useEffect)(function() {
        var handleClickAway = function(event) {
            if (childrenRef.current && !childrenRef.current.contains(event.target)) {
                onClickAway();
            }
        };
        document.addEventListener("click", handleClickAway);
        return function() {
            return document.removeEventListener("click", handleClickAway);
        };
    }, []);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, childrenWithRef);
};
var _default = ClickAwayEventListener;
