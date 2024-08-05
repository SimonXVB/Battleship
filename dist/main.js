/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    margin: 0;
    background-color:#fff49b;
}

#header-div {
    padding: 20px 20px;
    background-color: whitesmoke;
    width: 100%;
    border-bottom: 5px solid black;
}

#header {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0 auto;
    letter-spacing: 0.3rem;
    text-align: center;
}

#player-input{
    text-align: center;
    margin-top: 1rem;
}

#player-input input {
    text-align: center;
    width: 200px;
    height: 25px;
    border-radius: 5px;
    border: 2px solid black;
}

#player-input input:focus {
    outline: 2px solid black; 
}

#player-input input::placeholder{
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
}

#start {
    text-align: center;
    margin-top: 1rem;
}

#start button {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    width: 200px;
    height: 25px;
    border-radius: 5px;
    border: 2px solid black;
    letter-spacing: 0.1rem;
}

#start :hover {
    cursor: pointer;
}

#start :disabled {
    cursor: unset;
}

#wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 100%;  
}

#ship-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
}

#ship-grid div button{
    cursor: pointer;
}

#grid {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(10, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px; 
}

.grid-square {
    border-radius: 0;
    border: 2px solid black;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,4BAA4B;IAC5B,WAAW;IACX,8BAA8B;AAClC;;AAEA;IACI,2DAA2D;IAC3D,cAAc;IACd,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,2DAA2D;IAC3D,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,2DAA2D;IAC3D,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,uBAAuB;IACvB,oBAAoB;IACpB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;QACQ,aAAa;QACb,qCAAqC;QACrC,kCAAkC;QAClC,oBAAoB;QACpB,iBAAiB;AACzB;;AAEA;IACI,eAAe;AACnB;;AAEA;QACQ,aAAa;QACb,sCAAsC;QACtC,mCAAmC;QACnC,oBAAoB;QACpB,iBAAiB;AACzB;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;AAC3B","sourcesContent":["body {\r\n    margin: 0;\r\n    background-color:#fff49b;\r\n}\r\n\r\n#header-div {\r\n    padding: 20px 20px;\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    border-bottom: 5px solid black;\r\n}\r\n\r\n#header {\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    margin: 0 auto;\r\n    letter-spacing: 0.3rem;\r\n    text-align: center;\r\n}\r\n\r\n#player-input{\r\n    text-align: center;\r\n    margin-top: 1rem;\r\n}\r\n\r\n#player-input input {\r\n    text-align: center;\r\n    width: 200px;\r\n    height: 25px;\r\n    border-radius: 5px;\r\n    border: 2px solid black;\r\n}\r\n\r\n#player-input input:focus {\r\n    outline: 2px solid black; \r\n}\r\n\r\n#player-input input::placeholder{\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: bold;\r\n}\r\n\r\n#start {\r\n    text-align: center;\r\n    margin-top: 1rem;\r\n}\r\n\r\n#start button {\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: bold;\r\n    width: 200px;\r\n    height: 25px;\r\n    border-radius: 5px;\r\n    border: 2px solid black;\r\n    letter-spacing: 0.1rem;\r\n}\r\n\r\n#start :hover {\r\n    cursor: pointer;\r\n}\r\n\r\n#start :disabled {\r\n    cursor: unset;\r\n}\r\n\r\n#wrapper {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: 1fr;\r\n    grid-column-gap: 0px;\r\n    grid-row-gap: 0px;\r\n    height: 100%;  \r\n}\r\n\r\n#ship-grid {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 1fr);\r\n        grid-template-rows: repeat(5, 1fr);\r\n        grid-column-gap: 0px;\r\n        grid-row-gap: 0px;\r\n}\r\n\r\n#ship-grid div button{\r\n    cursor: pointer;\r\n}\r\n\r\n#grid {\r\n        display: grid;\r\n        grid-template-columns: repeat(10, 1fr);\r\n        grid-template-rows: repeat(10, 1fr);\r\n        grid-column-gap: 0px;\r\n        grid-row-gap: 0px; \r\n}\r\n\r\n.grid-square {\r\n    border-radius: 0;\r\n    border: 2px solid black;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreatePlayer: () => (/* binding */ CreatePlayer),
/* harmony export */   Game: () => (/* binding */ Game),
/* harmony export */   Play: () => (/* binding */ Play),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


class Ship {
    constructor (name, length, marking){
        this.name = name;
        this.length = length;
        this.marking = marking;

        this.sunk = false;
        this.placed = false;
    };
};

class Game {
    constructor() {
        this.board =   [[0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0]];
        
        this.carrier1 = new Ship("Carrier 1", 5, "C1");
        
        this.battleship1 = new Ship("Battleship 1", 4, "B1");
        this.battleship2 = new Ship("Battleship 2", 4, "B2");
        
        this.destroyer1 = new Ship("Destroyer 1", 3, "D1");
        this.destroyer2 = new Ship("Destroyer 2", 3, "D2");
        this.destroyer3 = new Ship("Destroyer 3", 3, "D3");
        
        this.submarine1 = new Ship("Submarine 1", 3, "S1");
        this.submarine2 = new Ship("Submarine 2", 3, "S3");
        this.submarine3 = new Ship("Submarine 3", 3, "S3");
        this.submarine4 = new Ship("Submarine 4", 3, "S4");
        
        this.patrol_boat1 = new Ship("Patrol Boat 1", 2, "P1");
        this.patrol_boat2 = new Ship("Patrol Boat 2", 2, "P2");
        this.patrol_boat3 = new Ship("Patrol Boat 3", 2, "P3");
        this.patrol_boat4 = new Ship("Patrol Boat 4", 2, "P4");
        this.patrol_boat5 = new Ship("Patrol Boat 5", 2, "P5");
        
        this.currentShip = this.carrier1;
        this.missed = 0;
        this.totalSunk = 0;
        this.totalPlaced = 0;
        this.direction = "vertical";
        this.winner = false;
    };

    placeVer(ship, hor, ver) {
        if(ship.placed === true) {
            console.log("Ship already placed");
            return;
        }
        
        for(let i = 0; i < ship.length; i++) {
            if(this.board[ver + i] === undefined) {
                console.log("OoB ver");
                return
            }
        }

        for(let i = 0; i < ship.length; i++) {
            if(this.board[ver + i][hor] !== 0){
                console.log("Not possible ver");
                return
            } else {
                this.board[ver + i][hor] = ship.marking;
            }
        }

        ship.placed = true;
        this.totalPlaced++;
    };

    placeHor(ship, hor, ver) {
        if(ship.placed === true) {
            console.log("Ship already placed");
            return;
        };

        for(let i = 0; i < ship.length; i++) {
            if(this.board[ver][hor + i] === undefined) {
                console.log("OoB hor");
                return
            }
        };

        for(let i = 0; i < ship.length; i++) {
            if(this.board[ver][hor + i] !== 0) {
                console.log("Not possible hor");
                return
            } else {
                this.board[ver][hor + i] = ship.marking;
            }
        };

        ship.placed = true;
        this.totalPlaced++;
    };

    hit(hor, ver) {
        if(this.board[ver][hor] !== 0) {
            switch(this.board[ver][hor]) {
                case "C1":
                    this.carrier1.length--;
                    alert("Carrier has been hit");
                    break;
                    //
                case "B1":
                    this.battleship1.length--;
                    alert("Battleship has been hit");
                    break;
                case "B2":
                    this.battleship2.length--;
                    alert("Battleship has been hit");
                    break;
                    //
                case "D1":
                    this.destroyer1.length--;
                    alert("Destroyer has been hit");
                    break;
                case "D2":
                    this.destroyer2.length--;
                    alert("Destroyer has been hit");
                    break;
                case "D3":
                    this.destroyer3.length--;
                    alert("Destroyer has been hit");
                    break;
                    //
                case "S1":
                    this.submarine1.length--
                    alert("Submarine has been hit");
                    break;
                case "S2":
                    this.submarine2.length--
                    console.log("Submarine has been hit");
                    break;
                case "S3": 
                    this.submarine3.length--
                    alert("Submarine has been hit");
                    break;
                case "S4": 
                    this.submarine4.length--
                    alert("Submarine has been hit");
                    break;
                    //
                case "P1":
                    this.patrol_boat1.length--;
                    alert("Patrol Boat has been hit");
                    break;
                case "P2":
                    this.patrol_boat2.length--;
                    alert("Patrol Boat has been hit");
                    break;
                case "P3":
                    this.patrol_boat3.length--;
                    alert("Patrol Boat has been hit");
                    break;
                case "P4":
                    this.patrol_boat4.length--;
                    alert("Patrol Boat has been hit");
                    break;
                case "P5":
                    this.patrol_boat5.length--;
                    alert("Patrol Boat has been hit");
                    break;
                case 0:
                    this.missed++
                    return
                default:
                    this.missed++
                    return
            }
        }
        this.board[ver][hor] = "H";

        this.checkSunk();
        this.checkWin();
    };

    checkSunk() {
        for(const entry in this) {
            if(this[entry].sunk !== true) {
                if(this[entry].length === 0) {
                    this.totalSunk++;
                    this[entry].sunk = true;
                    alert(`${this[entry].name} has been sunk!`);
                }
            }
        }
    };

    checkWin() {
        if(this.totalSunk === 2) {
            this.winner = true;
            return
        }
    };

    setSunk() {
        this.totalSunk = 15;
    };

    setPlaced() {
        for(const entry in this) {
            if(this[entry].name) {
                this[entry].placed = true;
            }
        }
    }

    pick(ship)   {
        this.currentShip = ship;
        console.log(this.currentShip);
    };
};

class CreatePlayer {
    constructor(pName, pMark) {
            this.pName = pName;
            this.pMark = pMark;
            this.pBoard = new Game();
            this.ready = false;
    };
};

class Play {
    constructor (p1Name, p2Name) {
        this.p1 = new CreatePlayer(p1Name, "P1");
        this.p2 = new CreatePlayer(p2Name, "P2");
        this.current = this.p1;
        
    }

    checkReady() {
        if(this.current.pBoard.totalPlaced === 2) {
            this.current.ready = true;
        }
    };

    switch() {
        this.checkReady();

        if(this.p1.ready === true) {
            this.current === this.p1 ? this.current = this.p2 : this.current = this.p1;
        }
    };

    changePlayer() {
        this.checkReady();

        if(this.p1.ready === true) {
            this.current = this.p2;
        }
    }
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


const shipGrid = document.getElementById("ship-grid");
const p1Input = document.getElementById("p1-input");
const p2Input = document.getElementById("p2-input");
const start = document.getElementById("start-btn");
const grid = document.getElementById("grid");
const wrapper = document.getElementById("wrapper");

let game;

function startGame () {
    if(p1Input.value === "" || p2Input.value === "") {
        alert("Enter name");
        return;
    }

    game = new _index_js__WEBPACK_IMPORTED_MODULE_0__.Play(p1Input.value, p2Input.value)
    
    start.disabled = true;
    p1Input.disabled = true;
    p2Input.disabled = true;
    
    updateUIPre();
};

function renderShips() {
    let count = 0;
    for(const entry in game.current.pBoard) {
        
        if(game.current.pBoard[entry].name) {
            count++;
            
            const top = document.createElement("div");
            top.classList.add("square");
            shipGrid.appendChild(top);
            
            const name = document.createElement("div");
            name.innerHTML = `Ship: ${game.current.pBoard[entry].name}`;
            top.appendChild(name);
            
            const length = document.createElement("div");
            length.innerHTML = `Length: ${game.current.pBoard[entry].length}`;
            top.appendChild(length);
            
            const placed = document.createElement("div");
            placed.classList.add("place");
            placed.innerHTML = `Placed?: ${game.current.pBoard[entry].placed}`;
            top.appendChild(placed);

            const pickBtn = document.createElement("button");
            pickBtn.classList.add("button");
            pickBtn.innerHTML = "Pick";
            pickBtn.addEventListener("click", () => { 
                                                        game.current.pBoard.pick(game.current.pBoard[entry]);
                                                        updateUIPre();
                                                    });
            top.appendChild(pickBtn);

        }
        
        if(count === 15) {
            return
        }
    };
};

function renderControls() {
    const currentPick = document.createElement("p");
    currentPick.id = "current-ship";
    currentPick.innerHTML = `Current ship: ${game.current.pBoard.currentShip.name}`;
    shipGrid.appendChild(currentPick);

    const currentPlayer = document.createElement("p");
    currentPlayer.id = "current-player";
    currentPlayer.innerHTML = `Current player board: ${game.current.pName}`;
    shipGrid.appendChild(currentPlayer);

    const placeHor = document.createElement("button");
    placeHor.innerHTML = "Place horizontally";
    placeHor.addEventListener("click", () => setDirection("horizontal"));
    shipGrid.appendChild(placeHor);

    const placeVer = document.createElement("button");
    placeVer.innerHTML = "Place vertically";
    placeVer.addEventListener("click", () => setDirection("vertical"));
    shipGrid.appendChild(placeVer);
}

function renderGrid() {
    let ver = 0;
    let hor = -1;
    
    for(let i = 0; i < 100; i++) {
        hor++
        
        if(hor === 10) {
            hor = 0;
            ver++;
        }
        
        const squareGrid = document.createElement("div");
        squareGrid.id = `${ver}-${hor}`;
        squareGrid.addEventListener("mouseenter", gridHoverIn.bind(null, hor, ver));
        squareGrid.addEventListener("mouseleave", gridHoverOut.bind(null, hor, ver));
        squareGrid.addEventListener("click", place.bind(null, hor, ver));
        squareGrid.classList.add("grid-square");
        grid.appendChild(squareGrid);
    }
};

function updateUIPre() {
    shipGrid.innerHTML = "";
    grid.innerHTML = "";
    renderShips();
    renderControls();
    renderGrid();

    for(let i = 0; i < game.current.pBoard.board.length; i++) {
        for(let j = 0; j < game.current.pBoard.board[i].length; j++)
            if(game.current.pBoard.board[i][j] !== 0) {
                const square = document.getElementById(`${i}-${j}`);
                square.style.backgroundColor = "white";
            }
    }

    if(game.p1.ready === true && game.p2.ready === true) {
        updateUIPost();
    }
};

function updateUIPost() {
    shipGrid.innerHTML = "";
    grid.innerHTML = "";
    renderShips();
    renderControlsHit();
    renderHitGrid();
};

function renderHitGrid() {
    let ver = 0;
    let hor = -1;
    
    for(let i = 0; i < 100; i++) {
        hor++
        
        if(hor === 10) {
            hor = 0;
            ver++;
        }
        
        const squareGrid = document.createElement("div");
        squareGrid.id = `${ver}-${hor}`;
        squareGrid.addEventListener("click", hit.bind(null, hor, ver));
        squareGrid.classList.add("grid-square");
        grid.appendChild(squareGrid);
    };

    for(let i = 0; i < game.current.pBoard.board.length; i++) {
        for(let j = 0; j < game.current.pBoard.board[i].length; j++) {
            if(game.current.pBoard.board[i][j] === "H") {
                const square = document.getElementById(`${i}-${j}`);
                let color = "blue";
                if(game.current.pMark === "P1") {
                    color = "blue";
                } else {
                    color = "red"
                }
                square.style.backgroundColor = color;
            }
        }
    }

    const shipGrid = document.querySelectorAll(".button");
    shipGrid.forEach((ship) => {
        ship.parentNode.removeChild(ship);
    });
};

function renderControlsHit() {
    const currentPlayer = document.createElement("p");
    currentPlayer.id = "current-player";
    currentPlayer.innerHTML = `Current player: ${game.current.pName}`;
    shipGrid.appendChild(currentPlayer);

    const switchPlayer = document.createElement("button");
    switchPlayer.id = "switch";
    switchPlayer.innerHTML = `Switch`;
    switchPlayer.addEventListener("click", () => { game.switch(); updateUIPost(); });
    shipGrid.appendChild(switchPlayer);
}

function hit(hor, ver) {
    game.current.pBoard.hit(hor, ver);

    for(let i = 0; i < game.current.pBoard.board.length; i++) {
        for(let j = 0; j < game.current.pBoard.board[i].length; j++) {
            document.getElementById(`${i}-${j}`).style.pointerEvents = "none";
            if(game.current.pBoard.board[i][j] === "H") {
                const square = document.getElementById(`${i}-${j}`);
                let color = "blue";
                if(game.current.pMark === "P1") {
                    color = "blue";
                } else {
                    color = "red"
                }
                square.style.backgroundColor = color;
            }
        }
    }
    checkWin();
};

function setDirection(direction) {
    game.current.pBoard.direction = direction;
};

function place(hor, ver) {
    if(game.current.pBoard.direction = "vertical") {
        game.current.pBoard.placeVer(game.current.pBoard.currentShip, hor, ver);
    } else {
        game.current.pBoard.placeVer(game.current.pBoard.currentShip, hor, ver);
    };

    for(let i = 0; i < game.current.pBoard.board.length; i++) {
        for(let j = 0; j < game.current.pBoard.board[i].length; j++)
            if(game.current.pBoard.board[i][j] !== 0) {
                const square = document.getElementById(`${i}-${j}`);
                square.style.backgroundColor = "white";
            }
    };

    game.changePlayer();
    updateUIPre();
};

function gridHoverIn(hor, ver) {
    for(let i = 0; i < game.current.pBoard.currentShip.length; i++) {
        if(game.current.pBoard.direction === "vertical") {
            let currentSquare = document.getElementById(`${ver + i}-${hor}`);
            if(currentSquare !== null && currentSquare.style.backgroundColor !== "white") {
                currentSquare.style.backgroundColor = "black";
            }
        } else {
            let currentSquare = document.getElementById(`${ver}-${hor + i}`);
            if(currentSquare !== null && currentSquare.style.backgroundColor !== "white") {
                currentSquare.style.backgroundColor = "black";
            }
        }
    };
};

function gridHoverOut(hor, ver) {
    for(let i = 0; i < game.current.pBoard.currentShip.length; i++) {
        if(game.current.pBoard.direction === "vertical") {
            let currentSquare = document.getElementById(`${ver + i}-${hor}`);
            if(currentSquare !== null && currentSquare.style.backgroundColor !== "white") {
                currentSquare.style.backgroundColor = "#fff49b";
            }
        } else {
            let currentSquare = document.getElementById(`${ver}-${hor + i}`);
            if(currentSquare !== null && currentSquare.style.backgroundColor !== "white") {
                currentSquare.style.backgroundColor = "#fff49b";
            }
        }
    }
};

function checkWin() {
    if(game.p1.pBoard.winner === true) {
        wrapper.innerHTML = `${game.p2.pName} has won!`;
    }

    if(game.p2.pBoard.winner === true) {
        wrapper.innerHTML = `${game.p1.pName} has won!`;
    }
}

start.addEventListener("click", startGame);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtCQUFrQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3ZRQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtX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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0Q0FBNEM7QUFDL0Q7QUFDQSwyREFBMkQsUUFBUSxHQUFHLElBQUk7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDJEQUEyRCxJQUFJLEdBQUcsUUFBUTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRDQUE0QztBQUMvRDtBQUNBLDJEQUEyRCxRQUFRLEdBQUcsSUFBSTtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsMkRBQTJELElBQUksR0FBRyxRQUFRO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixlQUFlO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixlQUFlO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLDJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmNDliO1xyXG59XHJcblxyXG4jaGVhZGVyLWRpdiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNwbGF5ZXItaW5wdXR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4jcGxheWVyLWlucHV0IGlucHV0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4jcGxheWVyLWlucHV0IGlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjazsgXHJcbn1cclxuXHJcbiNwbGF5ZXItaW5wdXQgaW5wdXQ6OnBsYWNlaG9sZGVye1xyXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI3N0YXJ0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbiNzdGFydCBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxufVxyXG5cclxuI3N0YXJ0IDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNzdGFydCA6ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiB1bnNldDtcclxufVxyXG5cclxuI3dyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7ICBcclxufVxyXG5cclxuI3NoaXAtZ3JpZCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XHJcbiAgICAgICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XHJcbn1cclxuXHJcbiNzaGlwLWdyaWQgZGl2IGJ1dHRvbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2dyaWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XHJcbiAgICAgICAgZ3JpZC1yb3ctZ2FwOiAwcHg7IFxyXG59XHJcblxyXG4uZ3JpZC1zcXVhcmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwyREFBMkQ7SUFDM0QsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDJEQUEyRDtJQUMzRCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMkRBQTJEO0lBQzNELGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7UUFDUSxhQUFhO1FBQ2IscUNBQXFDO1FBQ3JDLGtDQUFrQztRQUNsQyxvQkFBb0I7UUFDcEIsaUJBQWlCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtRQUNRLGFBQWE7UUFDYixzQ0FBc0M7UUFDdEMsbUNBQW1DO1FBQ25DLG9CQUFvQjtRQUNwQixpQkFBaUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjQ5YjtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlci1kaXYge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllci1pbnB1dHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLWlucHV0IGlucHV0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllci1pbnB1dCBpbnB1dDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjazsgXFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXItaW5wdXQgaW5wdXQ6OnBsYWNlaG9sZGVye1xcclxcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNzdGFydCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YXJ0IGJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxyXFxufVxcclxcblxcclxcbiNzdGFydCA6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzdGFydCA6ZGlzYWJsZWQge1xcclxcbiAgICBjdXJzb3I6IHVuc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4jd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgICBncmlkLWNvbHVtbi1nYXA6IDBweDtcXHJcXG4gICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTsgIFxcclxcbn1cXHJcXG5cXHJcXG4jc2hpcC1ncmlkIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXHJcXG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xcclxcbiAgICAgICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XFxyXFxufVxcclxcblxcclxcbiNzaGlwLWdyaWQgZGl2IGJ1dHRvbntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xcclxcbiAgICAgICAgZ3JpZC1yb3ctZ2FwOiAwcHg7IFxcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1zcXVhcmUge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5cclxuY2xhc3MgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgbGVuZ3RoLCBtYXJraW5nKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMubWFya2luZyA9IG1hcmtpbmc7XHJcblxyXG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGxhY2VkID0gZmFsc2U7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJvYXJkID0gICBbWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdXTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNhcnJpZXIxID0gbmV3IFNoaXAoXCJDYXJyaWVyIDFcIiwgNSwgXCJDMVwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmJhdHRsZXNoaXAxID0gbmV3IFNoaXAoXCJCYXR0bGVzaGlwIDFcIiwgNCwgXCJCMVwiKTtcclxuICAgICAgICB0aGlzLmJhdHRsZXNoaXAyID0gbmV3IFNoaXAoXCJCYXR0bGVzaGlwIDJcIiwgNCwgXCJCMlwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmRlc3Ryb3llcjEgPSBuZXcgU2hpcChcIkRlc3Ryb3llciAxXCIsIDMsIFwiRDFcIik7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95ZXIyID0gbmV3IFNoaXAoXCJEZXN0cm95ZXIgMlwiLCAzLCBcIkQyXCIpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveWVyMyA9IG5ldyBTaGlwKFwiRGVzdHJveWVyIDNcIiwgMywgXCJEM1wiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN1Ym1hcmluZTEgPSBuZXcgU2hpcChcIlN1Ym1hcmluZSAxXCIsIDMsIFwiUzFcIik7XHJcbiAgICAgICAgdGhpcy5zdWJtYXJpbmUyID0gbmV3IFNoaXAoXCJTdWJtYXJpbmUgMlwiLCAzLCBcIlMzXCIpO1xyXG4gICAgICAgIHRoaXMuc3VibWFyaW5lMyA9IG5ldyBTaGlwKFwiU3VibWFyaW5lIDNcIiwgMywgXCJTM1wiKTtcclxuICAgICAgICB0aGlzLnN1Ym1hcmluZTQgPSBuZXcgU2hpcChcIlN1Ym1hcmluZSA0XCIsIDMsIFwiUzRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wYXRyb2xfYm9hdDEgPSBuZXcgU2hpcChcIlBhdHJvbCBCb2F0IDFcIiwgMiwgXCJQMVwiKTtcclxuICAgICAgICB0aGlzLnBhdHJvbF9ib2F0MiA9IG5ldyBTaGlwKFwiUGF0cm9sIEJvYXQgMlwiLCAyLCBcIlAyXCIpO1xyXG4gICAgICAgIHRoaXMucGF0cm9sX2JvYXQzID0gbmV3IFNoaXAoXCJQYXRyb2wgQm9hdCAzXCIsIDIsIFwiUDNcIik7XHJcbiAgICAgICAgdGhpcy5wYXRyb2xfYm9hdDQgPSBuZXcgU2hpcChcIlBhdHJvbCBCb2F0IDRcIiwgMiwgXCJQNFwiKTtcclxuICAgICAgICB0aGlzLnBhdHJvbF9ib2F0NSA9IG5ldyBTaGlwKFwiUGF0cm9sIEJvYXQgNVwiLCAyLCBcIlA1XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY3VycmVudFNoaXAgPSB0aGlzLmNhcnJpZXIxO1xyXG4gICAgICAgIHRoaXMubWlzc2VkID0gMDtcclxuICAgICAgICB0aGlzLnRvdGFsU3VuayA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbFBsYWNlZCA9IDA7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcInZlcnRpY2FsXCI7XHJcbiAgICAgICAgdGhpcy53aW5uZXIgPSBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgcGxhY2VWZXIoc2hpcCwgaG9yLCB2ZXIpIHtcclxuICAgICAgICBpZihzaGlwLnBsYWNlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNoaXAgYWxyZWFkeSBwbGFjZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5ib2FyZFt2ZXIgKyBpXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9vQiB2ZXJcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5ib2FyZFt2ZXIgKyBpXVtob3JdICE9PSAwKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90IHBvc3NpYmxlIHZlclwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt2ZXIgKyBpXVtob3JdID0gc2hpcC5tYXJraW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzaGlwLnBsYWNlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50b3RhbFBsYWNlZCsrO1xyXG4gICAgfTtcclxuXHJcbiAgICBwbGFjZUhvcihzaGlwLCBob3IsIHZlcikge1xyXG4gICAgICAgIGlmKHNoaXAucGxhY2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2hpcCBhbHJlYWR5IHBsYWNlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbdmVyXVtob3IgKyBpXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9vQiBob3JcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbdmVyXVtob3IgKyBpXSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3QgcG9zc2libGUgaG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Zlcl1baG9yICsgaV0gPSBzaGlwLm1hcmtpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzaGlwLnBsYWNlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50b3RhbFBsYWNlZCsrO1xyXG4gICAgfTtcclxuXHJcbiAgICBoaXQoaG9yLCB2ZXIpIHtcclxuICAgICAgICBpZih0aGlzLmJvYXJkW3Zlcl1baG9yXSAhPT0gMCkge1xyXG4gICAgICAgICAgICBzd2l0Y2godGhpcy5ib2FyZFt2ZXJdW2hvcl0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJDMVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FycmllcjEubGVuZ3RoLS07XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJDYXJyaWVyIGhhcyBiZWVuIGhpdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkIxXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXR0bGVzaGlwMS5sZW5ndGgtLTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkJhdHRsZXNoaXAgaGFzIGJlZW4gaGl0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkIyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXR0bGVzaGlwMi5sZW5ndGgtLTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkJhdHRsZXNoaXAgaGFzIGJlZW4gaGl0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRDFcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3llcjEubGVuZ3RoLS07XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJEZXN0cm95ZXIgaGFzIGJlZW4gaGl0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkQyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95ZXIyLmxlbmd0aC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRGVzdHJveWVyIGhhcyBiZWVuIGhpdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJEM1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveWVyMy5sZW5ndGgtLTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkRlc3Ryb3llciBoYXMgYmVlbiBoaXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJTMVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWFyaW5lMS5sZW5ndGgtLVxyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiU3VibWFyaW5lIGhhcyBiZWVuIGhpdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJTMlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWFyaW5lMi5sZW5ndGgtLVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VibWFyaW5lIGhhcyBiZWVuIGhpdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJTM1wiOiBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1hcmluZTMubGVuZ3RoLS1cclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIlN1Ym1hcmluZSBoYXMgYmVlbiBoaXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUzRcIjogXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtYXJpbmU0Lmxlbmd0aC0tXHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJTdWJtYXJpbmUgaGFzIGJlZW4gaGl0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUDFcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdHJvbF9ib2F0MS5sZW5ndGgtLTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIlBhdHJvbCBCb2F0IGhhcyBiZWVuIGhpdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQMlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF0cm9sX2JvYXQyLmxlbmd0aC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGF0cm9sIEJvYXQgaGFzIGJlZW4gaGl0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlAzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRyb2xfYm9hdDMubGVuZ3RoLS07XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJQYXRyb2wgQm9hdCBoYXMgYmVlbiBoaXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUDRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdHJvbF9ib2F0NC5sZW5ndGgtLTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIlBhdHJvbCBCb2F0IGhhcyBiZWVuIGhpdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQNVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF0cm9sX2JvYXQ1Lmxlbmd0aC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGF0cm9sIEJvYXQgaGFzIGJlZW4gaGl0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWlzc2VkKytcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5taXNzZWQrK1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYm9hcmRbdmVyXVtob3JdID0gXCJIXCI7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tTdW5rKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja1dpbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjaGVja1N1bmsoKSB7XHJcbiAgICAgICAgZm9yKGNvbnN0IGVudHJ5IGluIHRoaXMpIHtcclxuICAgICAgICAgICAgaWYodGhpc1tlbnRyeV0uc3VuayAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpc1tlbnRyeV0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFN1bmsrKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2VudHJ5XS5zdW5rID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChgJHt0aGlzW2VudHJ5XS5uYW1lfSBoYXMgYmVlbiBzdW5rIWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjaGVja1dpbigpIHtcclxuICAgICAgICBpZih0aGlzLnRvdGFsU3VuayA9PT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLndpbm5lciA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgc2V0U3VuaygpIHtcclxuICAgICAgICB0aGlzLnRvdGFsU3VuayA9IDE1O1xyXG4gICAgfTtcclxuXHJcbiAgICBzZXRQbGFjZWQoKSB7XHJcbiAgICAgICAgZm9yKGNvbnN0IGVudHJ5IGluIHRoaXMpIHtcclxuICAgICAgICAgICAgaWYodGhpc1tlbnRyeV0ubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpc1tlbnRyeV0ucGxhY2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwaWNrKHNoaXApICAge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNoaXAgPSBzaGlwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFNoaXApO1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNsYXNzIENyZWF0ZVBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwTmFtZSwgcE1hcmspIHtcclxuICAgICAgICAgICAgdGhpcy5wTmFtZSA9IHBOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnBNYXJrID0gcE1hcms7XHJcbiAgICAgICAgICAgIHRoaXMucEJvYXJkID0gbmV3IEdhbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNsYXNzIFBsYXkge1xyXG4gICAgY29uc3RydWN0b3IgKHAxTmFtZSwgcDJOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5wMSA9IG5ldyBDcmVhdGVQbGF5ZXIocDFOYW1lLCBcIlAxXCIpO1xyXG4gICAgICAgIHRoaXMucDIgPSBuZXcgQ3JlYXRlUGxheWVyKHAyTmFtZSwgXCJQMlwiKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnAxO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrUmVhZHkoKSB7XHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50LnBCb2FyZC50b3RhbFBsYWNlZCA9PT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQucmVhZHkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgc3dpdGNoKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tSZWFkeSgpO1xyXG5cclxuICAgICAgICBpZih0aGlzLnAxLnJlYWR5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9PT0gdGhpcy5wMSA/IHRoaXMuY3VycmVudCA9IHRoaXMucDIgOiB0aGlzLmN1cnJlbnQgPSB0aGlzLnAxO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY2hhbmdlUGxheWVyKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tSZWFkeSgpO1xyXG5cclxuICAgICAgICBpZih0aGlzLnAxLnJlYWR5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMucDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgU2hpcCwgR2FtZSwgQ3JlYXRlUGxheWVyLCBQbGF5fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIEdhbWUsIENyZWF0ZVBsYXllciwgUGxheSB9IGZyb20gXCIuL2luZGV4LmpzXCI7XHJcblxyXG5jb25zdCBzaGlwR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcC1ncmlkXCIpO1xyXG5jb25zdCBwMUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwMS1pbnB1dFwiKTtcclxuY29uc3QgcDJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicDItaW5wdXRcIik7XHJcbmNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1idG5cIik7XHJcbmNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyaWRcIik7XHJcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndyYXBwZXJcIik7XHJcblxyXG5sZXQgZ2FtZTtcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZSAoKSB7XHJcbiAgICBpZihwMUlucHV0LnZhbHVlID09PSBcIlwiIHx8IHAySW5wdXQudmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICBhbGVydChcIkVudGVyIG5hbWVcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGdhbWUgPSBuZXcgUGxheShwMUlucHV0LnZhbHVlLCBwMklucHV0LnZhbHVlKVxyXG4gICAgXHJcbiAgICBzdGFydC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBwMUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHAySW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgXHJcbiAgICB1cGRhdGVVSVByZSgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyU2hpcHMoKSB7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgZm9yKGNvbnN0IGVudHJ5IGluIGdhbWUuY3VycmVudC5wQm9hcmQpIHtcclxuICAgICAgICBcclxuICAgICAgICBpZihnYW1lLmN1cnJlbnQucEJvYXJkW2VudHJ5XS5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICB0b3AuY2xhc3NMaXN0LmFkZChcInNxdWFyZVwiKTtcclxuICAgICAgICAgICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQodG9wKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBuYW1lLmlubmVySFRNTCA9IGBTaGlwOiAke2dhbWUuY3VycmVudC5wQm9hcmRbZW50cnldLm5hbWV9YDtcclxuICAgICAgICAgICAgdG9wLmFwcGVuZENoaWxkKG5hbWUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgbGVuZ3RoLmlubmVySFRNTCA9IGBMZW5ndGg6ICR7Z2FtZS5jdXJyZW50LnBCb2FyZFtlbnRyeV0ubGVuZ3RofWA7XHJcbiAgICAgICAgICAgIHRvcC5hcHBlbmRDaGlsZChsZW5ndGgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcGxhY2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgcGxhY2VkLmNsYXNzTGlzdC5hZGQoXCJwbGFjZVwiKTtcclxuICAgICAgICAgICAgcGxhY2VkLmlubmVySFRNTCA9IGBQbGFjZWQ/OiAke2dhbWUuY3VycmVudC5wQm9hcmRbZW50cnldLnBsYWNlZH1gO1xyXG4gICAgICAgICAgICB0b3AuYXBwZW5kQ2hpbGQocGxhY2VkKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBpY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBwaWNrQnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIHBpY2tCdG4uaW5uZXJIVE1MID0gXCJQaWNrXCI7XHJcbiAgICAgICAgICAgIHBpY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5jdXJyZW50LnBCb2FyZC5waWNrKGdhbWUuY3VycmVudC5wQm9hcmRbZW50cnldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVVSVByZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRvcC5hcHBlbmRDaGlsZChwaWNrQnRuKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGNvdW50ID09PSAxNSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ29udHJvbHMoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50UGljayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY3VycmVudFBpY2suaWQgPSBcImN1cnJlbnQtc2hpcFwiO1xyXG4gICAgY3VycmVudFBpY2suaW5uZXJIVE1MID0gYEN1cnJlbnQgc2hpcDogJHtnYW1lLmN1cnJlbnQucEJvYXJkLmN1cnJlbnRTaGlwLm5hbWV9YDtcclxuICAgIHNoaXBHcmlkLmFwcGVuZENoaWxkKGN1cnJlbnRQaWNrKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50UGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjdXJyZW50UGxheWVyLmlkID0gXCJjdXJyZW50LXBsYXllclwiO1xyXG4gICAgY3VycmVudFBsYXllci5pbm5lckhUTUwgPSBgQ3VycmVudCBwbGF5ZXIgYm9hcmQ6ICR7Z2FtZS5jdXJyZW50LnBOYW1lfWA7XHJcbiAgICBzaGlwR3JpZC5hcHBlbmRDaGlsZChjdXJyZW50UGxheWVyKTtcclxuXHJcbiAgICBjb25zdCBwbGFjZUhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBwbGFjZUhvci5pbm5lckhUTUwgPSBcIlBsYWNlIGhvcml6b250YWxseVwiO1xyXG4gICAgcGxhY2VIb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNldERpcmVjdGlvbihcImhvcml6b250YWxcIikpO1xyXG4gICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQocGxhY2VIb3IpO1xyXG5cclxuICAgIGNvbnN0IHBsYWNlVmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHBsYWNlVmVyLmlubmVySFRNTCA9IFwiUGxhY2UgdmVydGljYWxseVwiO1xyXG4gICAgcGxhY2VWZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNldERpcmVjdGlvbihcInZlcnRpY2FsXCIpKTtcclxuICAgIHNoaXBHcmlkLmFwcGVuZENoaWxkKHBsYWNlVmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyR3JpZCgpIHtcclxuICAgIGxldCB2ZXIgPSAwO1xyXG4gICAgbGV0IGhvciA9IC0xO1xyXG4gICAgXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuICAgICAgICBob3IrK1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGhvciA9PT0gMTApIHtcclxuICAgICAgICAgICAgaG9yID0gMDtcclxuICAgICAgICAgICAgdmVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNxdWFyZUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHNxdWFyZUdyaWQuaWQgPSBgJHt2ZXJ9LSR7aG9yfWA7XHJcbiAgICAgICAgc3F1YXJlR3JpZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBncmlkSG92ZXJJbi5iaW5kKG51bGwsIGhvciwgdmVyKSk7XHJcbiAgICAgICAgc3F1YXJlR3JpZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBncmlkSG92ZXJPdXQuYmluZChudWxsLCBob3IsIHZlcikpO1xyXG4gICAgICAgIHNxdWFyZUdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYWNlLmJpbmQobnVsbCwgaG9yLCB2ZXIpKTtcclxuICAgICAgICBzcXVhcmVHcmlkLmNsYXNzTGlzdC5hZGQoXCJncmlkLXNxdWFyZVwiKTtcclxuICAgICAgICBncmlkLmFwcGVuZENoaWxkKHNxdWFyZUdyaWQpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlVUlQcmUoKSB7XHJcbiAgICBzaGlwR3JpZC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZ3JpZC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgcmVuZGVyU2hpcHMoKTtcclxuICAgIHJlbmRlckNvbnRyb2xzKCk7XHJcbiAgICByZW5kZXJHcmlkKCk7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGdhbWUuY3VycmVudC5wQm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgZ2FtZS5jdXJyZW50LnBCb2FyZC5ib2FyZFtpXS5sZW5ndGg7IGorKylcclxuICAgICAgICAgICAgaWYoZ2FtZS5jdXJyZW50LnBCb2FyZC5ib2FyZFtpXVtqXSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aX0tJHtqfWApO1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGdhbWUucDEucmVhZHkgPT09IHRydWUgJiYgZ2FtZS5wMi5yZWFkeSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHVwZGF0ZVVJUG9zdCgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlVUlQb3N0KCkge1xyXG4gICAgc2hpcEdyaWQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGdyaWQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHJlbmRlclNoaXBzKCk7XHJcbiAgICByZW5kZXJDb250cm9sc0hpdCgpO1xyXG4gICAgcmVuZGVySGl0R3JpZCgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVuZGVySGl0R3JpZCgpIHtcclxuICAgIGxldCB2ZXIgPSAwO1xyXG4gICAgbGV0IGhvciA9IC0xO1xyXG4gICAgXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuICAgICAgICBob3IrK1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGhvciA9PT0gMTApIHtcclxuICAgICAgICAgICAgaG9yID0gMDtcclxuICAgICAgICAgICAgdmVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNxdWFyZUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHNxdWFyZUdyaWQuaWQgPSBgJHt2ZXJ9LSR7aG9yfWA7XHJcbiAgICAgICAgc3F1YXJlR3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGl0LmJpbmQobnVsbCwgaG9yLCB2ZXIpKTtcclxuICAgICAgICBzcXVhcmVHcmlkLmNsYXNzTGlzdC5hZGQoXCJncmlkLXNxdWFyZVwiKTtcclxuICAgICAgICBncmlkLmFwcGVuZENoaWxkKHNxdWFyZUdyaWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZS5jdXJyZW50LnBCb2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBnYW1lLmN1cnJlbnQucEJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmKGdhbWUuY3VycmVudC5wQm9hcmQuYm9hcmRbaV1bal0gPT09IFwiSFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpfS0ke2p9YCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSBcImJsdWVcIjtcclxuICAgICAgICAgICAgICAgIGlmKGdhbWUuY3VycmVudC5wTWFyayA9PT0gXCJQMVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgPSBcImJsdWVcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgPSBcInJlZFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hpcEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvblwiKTtcclxuICAgIHNoaXBHcmlkLmZvckVhY2goKHNoaXApID0+IHtcclxuICAgICAgICBzaGlwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2hpcCk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNvbnRyb2xzSGl0KCkge1xyXG4gICAgY29uc3QgY3VycmVudFBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY3VycmVudFBsYXllci5pZCA9IFwiY3VycmVudC1wbGF5ZXJcIjtcclxuICAgIGN1cnJlbnRQbGF5ZXIuaW5uZXJIVE1MID0gYEN1cnJlbnQgcGxheWVyOiAke2dhbWUuY3VycmVudC5wTmFtZX1gO1xyXG4gICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQoY3VycmVudFBsYXllcik7XHJcblxyXG4gICAgY29uc3Qgc3dpdGNoUGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHN3aXRjaFBsYXllci5pZCA9IFwic3dpdGNoXCI7XHJcbiAgICBzd2l0Y2hQbGF5ZXIuaW5uZXJIVE1MID0gYFN3aXRjaGA7XHJcbiAgICBzd2l0Y2hQbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgZ2FtZS5zd2l0Y2goKTsgdXBkYXRlVUlQb3N0KCk7IH0pO1xyXG4gICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQoc3dpdGNoUGxheWVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGl0KGhvciwgdmVyKSB7XHJcbiAgICBnYW1lLmN1cnJlbnQucEJvYXJkLmhpdChob3IsIHZlcik7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGdhbWUuY3VycmVudC5wQm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgZ2FtZS5jdXJyZW50LnBCb2FyZC5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpfS0ke2p9YCkuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBpZihnYW1lLmN1cnJlbnQucEJvYXJkLmJvYXJkW2ldW2pdID09PSBcIkhcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aX0tJHtqfWApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gXCJibHVlXCI7XHJcbiAgICAgICAgICAgICAgICBpZihnYW1lLmN1cnJlbnQucE1hcmsgPT09IFwiUDFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yID0gXCJibHVlXCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yID0gXCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tXaW4oKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldERpcmVjdGlvbihkaXJlY3Rpb24pIHtcclxuICAgIGdhbWUuY3VycmVudC5wQm9hcmQuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcGxhY2UoaG9yLCB2ZXIpIHtcclxuICAgIGlmKGdhbWUuY3VycmVudC5wQm9hcmQuZGlyZWN0aW9uID0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgICAgZ2FtZS5jdXJyZW50LnBCb2FyZC5wbGFjZVZlcihnYW1lLmN1cnJlbnQucEJvYXJkLmN1cnJlbnRTaGlwLCBob3IsIHZlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdhbWUuY3VycmVudC5wQm9hcmQucGxhY2VWZXIoZ2FtZS5jdXJyZW50LnBCb2FyZC5jdXJyZW50U2hpcCwgaG9yLCB2ZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZS5jdXJyZW50LnBCb2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBnYW1lLmN1cnJlbnQucEJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaisrKVxyXG4gICAgICAgICAgICBpZihnYW1lLmN1cnJlbnQucEJvYXJkLmJvYXJkW2ldW2pdICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpfS0ke2p9YCk7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdhbWUuY2hhbmdlUGxheWVyKCk7XHJcbiAgICB1cGRhdGVVSVByZSgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ3JpZEhvdmVySW4oaG9yLCB2ZXIpIHtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnYW1lLmN1cnJlbnQucEJvYXJkLmN1cnJlbnRTaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYoZ2FtZS5jdXJyZW50LnBCb2FyZC5kaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3ZlciArIGl9LSR7aG9yfWApO1xyXG4gICAgICAgICAgICBpZihjdXJyZW50U3F1YXJlICE9PSBudWxsICYmIGN1cnJlbnRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yICE9PSBcIndoaXRlXCIpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJibGFja1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt2ZXJ9LSR7aG9yICsgaX1gKTtcclxuICAgICAgICAgICAgaWYoY3VycmVudFNxdWFyZSAhPT0gbnVsbCAmJiBjdXJyZW50U3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciAhPT0gXCJ3aGl0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBncmlkSG92ZXJPdXQoaG9yLCB2ZXIpIHtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnYW1lLmN1cnJlbnQucEJvYXJkLmN1cnJlbnRTaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYoZ2FtZS5jdXJyZW50LnBCb2FyZC5kaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3ZlciArIGl9LSR7aG9yfWApO1xyXG4gICAgICAgICAgICBpZihjdXJyZW50U3F1YXJlICE9PSBudWxsICYmIGN1cnJlbnRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yICE9PSBcIndoaXRlXCIpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmNDliXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Zlcn0tJHtob3IgKyBpfWApO1xyXG4gICAgICAgICAgICBpZihjdXJyZW50U3F1YXJlICE9PSBudWxsICYmIGN1cnJlbnRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yICE9PSBcIndoaXRlXCIpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmNDliXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGVja1dpbigpIHtcclxuICAgIGlmKGdhbWUucDEucEJvYXJkLndpbm5lciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gYCR7Z2FtZS5wMi5wTmFtZX0gaGFzIHdvbiFgO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGdhbWUucDIucEJvYXJkLndpbm5lciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gYCR7Z2FtZS5wMS5wTmFtZX0gaGFzIHdvbiFgO1xyXG4gICAgfVxyXG59XHJcblxyXG5zdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRHYW1lKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=