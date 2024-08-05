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

/*Header start*/
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
/*Header end*/

/*Player input start*/
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
    margin-bottom: 1rem;
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
/*Player input end*/

/*Placement grid start*/
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
        grid-template-rows: repeat(5, 1fr) 70px 70px;
        grid-column-gap: 5px;
        grid-row-gap: 5px;
        width: 70%;
        margin: auto;
}

#grid {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(10, 1fr);
        grid-column-gap: 3px;
        grid-row-gap: 3px; 
        width: 70%;
        height: fit-content;
}

.grid-square {
    border-radius: 0;
    border: 2px solid black;
    width: 60px;
    height: 60px;
    cursor: pointer;
}

.square {
    border: 4px solid black;
}

.square div{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
}

.square button{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 100%;
    box-shadow: 0;
    border: 0;
    border-top: 4px solid black;
    cursor: pointer;
    margin-top: 0.5rem;
}

#controls-container1 {
    grid-row: 6/7;
    grid-column: 1/4;
    text-align: center;
    align-content: center;
}

#currentP {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 0;
    border: 2px solid black;
    background-color: white;
}

#controls-container2 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    grid-row: 7/7;
    grid-column: 1/4;
    text-align: center;
    align-content: center;
    border: 2px solid black;
}

#controls-container2 button {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    box-shadow: 0;
    border: 0;
    width: 50%;
    height: 100%;
    cursor: pointer;

}

#log {
    grid-column: 1/4;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    text-align: center;
    align-content: center;
    border: 2px solid black;
    padding: 0.5rem 0;
    background-color: white;
}
/*Placement grid end*/

/*Hit grid start*/
#current-player {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    grid-row: 6/7;
    grid-column: 1/3;
    text-align: center;
    align-content: center;
    border: 5px solid black;
    background-color: white;
}

#switch {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    text-align: center;
    align-content: center;
    border: 5px solid black;
    cursor: pointer;
}

#win {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    font-size: 3rem;
    text-align: center;
}
/*Hit grid end*/`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,wBAAwB;AAC5B;;AAEA,eAAe;AACf;IACI,kBAAkB;IAClB,4BAA4B;IAC5B,WAAW;IACX,8BAA8B;AAClC;;AAEA;IACI,2DAA2D;IAC3D,cAAc;IACd,sBAAsB;IACtB,kBAAkB;AACtB;AACA,aAAa;;AAEb,qBAAqB;AACrB;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,2DAA2D;IAC3D,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,2DAA2D;IAC3D,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;AACA,mBAAmB;;AAEnB,uBAAuB;AACvB;IACI,aAAa;IACb,qCAAqC;IACrC,uBAAuB;IACvB,oBAAoB;IACpB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;QACQ,aAAa;QACb,qCAAqC;QACrC,4CAA4C;QAC5C,oBAAoB;QACpB,iBAAiB;QACjB,UAAU;QACV,YAAY;AACpB;;AAEA;QACQ,aAAa;QACb,sCAAsC;QACtC,mCAAmC;QACnC,oBAAoB;QACpB,iBAAiB;QACjB,UAAU;QACV,mBAAmB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,4DAA4D;IAC5D,kBAAkB;AACtB;;AAEA;IACI,4DAA4D;IAC5D,WAAW;IACX,aAAa;IACb,SAAS;IACT,2BAA2B;IAC3B,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,4DAA4D;IAC5D,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,4DAA4D;IAC5D,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,4DAA4D;IAC5D,iBAAiB;IACjB,iBAAiB;IACjB,aAAa;IACb,SAAS;IACT,UAAU;IACV,YAAY;IACZ,eAAe;;AAEnB;;AAEA;IACI,gBAAgB;IAChB,4DAA4D;IAC5D,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,uBAAuB;IACvB,iBAAiB;IACjB,uBAAuB;AAC3B;AACA,qBAAqB;;AAErB,iBAAiB;AACjB;IACI,4DAA4D;IAC5D,iBAAiB;IACjB,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,qBAAqB;IACrB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,4DAA4D;IAC5D,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,4DAA4D;IAC5D,iBAAiB;IACjB,eAAe;IACf,kBAAkB;AACtB;AACA,eAAe","sourcesContent":["body {\r\n    margin: 0;\r\n    background-color:#fff49b;\r\n}\r\n\r\n/*Header start*/\r\n#header-div {\r\n    padding: 20px 20px;\r\n    background-color: whitesmoke;\r\n    width: 100%;\r\n    border-bottom: 5px solid black;\r\n}\r\n\r\n#header {\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    margin: 0 auto;\r\n    letter-spacing: 0.3rem;\r\n    text-align: center;\r\n}\r\n/*Header end*/\r\n\r\n/*Player input start*/\r\n#player-input{\r\n    text-align: center;\r\n    margin-top: 1rem;\r\n}\r\n\r\n#player-input input {\r\n    text-align: center;\r\n    width: 200px;\r\n    height: 25px;\r\n    border-radius: 5px;\r\n    border: 2px solid black;\r\n}\r\n\r\n#player-input input:focus {\r\n    outline: 2px solid black; \r\n}\r\n\r\n#player-input input::placeholder{\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: bold;\r\n}\r\n\r\n#start {\r\n    text-align: center;\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n#start button {\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: bold;\r\n    width: 200px;\r\n    height: 25px;\r\n    border-radius: 5px;\r\n    border: 2px solid black;\r\n    letter-spacing: 0.1rem;\r\n}\r\n\r\n#start :hover {\r\n    cursor: pointer;\r\n}\r\n\r\n#start :disabled {\r\n    cursor: unset;\r\n}\r\n/*Player input end*/\r\n\r\n/*Placement grid start*/\r\n#wrapper {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: 1fr;\r\n    grid-column-gap: 0px;\r\n    grid-row-gap: 0px;\r\n    height: 100%;  \r\n}\r\n\r\n#ship-grid {\r\n        display: grid;\r\n        grid-template-columns: repeat(3, 1fr);\r\n        grid-template-rows: repeat(5, 1fr) 70px 70px;\r\n        grid-column-gap: 5px;\r\n        grid-row-gap: 5px;\r\n        width: 70%;\r\n        margin: auto;\r\n}\r\n\r\n#grid {\r\n        display: grid;\r\n        grid-template-columns: repeat(10, 1fr);\r\n        grid-template-rows: repeat(10, 1fr);\r\n        grid-column-gap: 3px;\r\n        grid-row-gap: 3px; \r\n        width: 70%;\r\n        height: fit-content;\r\n}\r\n\r\n.grid-square {\r\n    border-radius: 0;\r\n    border: 2px solid black;\r\n    width: 60px;\r\n    height: 60px;\r\n    cursor: pointer;\r\n}\r\n\r\n.square {\r\n    border: 4px solid black;\r\n}\r\n\r\n.square div{\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    text-align: center;\r\n}\r\n\r\n.square button{\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    width: 100%;\r\n    box-shadow: 0;\r\n    border: 0;\r\n    border-top: 4px solid black;\r\n    cursor: pointer;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n#controls-container1 {\r\n    grid-row: 6/7;\r\n    grid-column: 1/4;\r\n    text-align: center;\r\n    align-content: center;\r\n}\r\n\r\n#currentP {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    padding: 0.5rem 0;\r\n    border: 2px solid black;\r\n    background-color: white;\r\n}\r\n\r\n#controls-container2 {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    grid-row: 7/7;\r\n    grid-column: 1/4;\r\n    text-align: center;\r\n    align-content: center;\r\n    border: 2px solid black;\r\n}\r\n\r\n#controls-container2 button {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n    box-shadow: 0;\r\n    border: 0;\r\n    width: 50%;\r\n    height: 100%;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n#log {\r\n    grid-column: 1/4;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    align-content: center;\r\n    border: 2px solid black;\r\n    padding: 0.5rem 0;\r\n    background-color: white;\r\n}\r\n/*Placement grid end*/\r\n\r\n/*Hit grid start*/\r\n#current-player {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: bold;\r\n    grid-row: 6/7;\r\n    grid-column: 1/3;\r\n    text-align: center;\r\n    align-content: center;\r\n    border: 5px solid black;\r\n    background-color: white;\r\n}\r\n\r\n#switch {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    align-content: center;\r\n    border: 5px solid black;\r\n    cursor: pointer;\r\n}\r\n\r\n#win {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: bold;\r\n    font-size: 3rem;\r\n    text-align: center;\r\n}\r\n/*Hit grid end*/"],"sourceRoot":""}]);
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
        this.submarine2 = new Ship("Submarine 2", 3, "S2");
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
        this.log = "";
    };

    placeVer(ship, hor, ver) {
        if(ship.placed === true) {
            this.log = "Ship already placed";
            return;
        }
        
        for(let i = 0; i < ship.length; i++) {
            if(this.board[ver + i] === undefined) {
                this.log = "OoB ver";
                return
            }
        }

        for(let i = 0; i < ship.length; i++) {
            if(this.board[ver + i][hor] !== 0){
                this.log = "Not possible ver";
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
            this.log = "Ship already placed";
            return;
        };

        for(let i = 0; i < ship.length; i++) {
            if(this.board[ver][hor + i] === undefined) {
                this.log = "OoB hor";
                return
            }
        };

        for(let i = 0; i < ship.length; i++) {
            if(this.board[ver][hor + i] !== 0) {
                this.log = "Not possible hor";
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
                    this.log = "Carrier has been hit";
                    break;
                    //
                case "B1":
                    this.battleship1.length--;
                    this.log = "Battleship has been hit";
                    break;
                case "B2":
                    this.battleship2.length--;
                    this.log = "Battleship has been hit";
                    break;
                    //
                case "D1":
                    this.destroyer1.length--;
                    this.log = "Destroyer has been hit";
                    break;
                case "D2":
                    this.destroyer2.length--;
                    this.log = "Destroyer has been hit";
                    break;
                case "D3":
                    this.destroyer3.length--;
                    this.log = "Destroyer has been hit";
                    break;
                    //
                case "S1":
                    this.submarine1.length--
                    this.log = "Submarine has been hit";
                    break;
                case "S2":
                    this.submarine2.length--
                    this.log = "Submarine has been hit";
                    break;
                case "S3": 
                    this.submarine3.length--
                    this.log = "Submarine has been hit";
                    break;
                case "S4": 
                    this.submarine4.length--
                    this.log = "Submarine has been hit";
                    break;
                    //
                case "P1":
                    this.patrol_boat1.length--;
                    this.log = "Patrol Boat has been hit";
                    break;
                case "P2":
                    this.patrol_boat2.length--;
                    this.log = "Patrol Boat has been hit";
                    break;
                case "P3":
                    this.patrol_boat3.length--;
                    this.log = "Patrol Boat has been hit";
                    break;
                case "P4":
                    this.patrol_boat4.length--;
                    this.log = "Patrol Boat has been hit";
                    break;
                case "P5":
                    this.patrol_boat5.length--;
                    this.log = "Patrol Boat has been hit";
                    break;
            }
        } else {
            this.log = "Miss";
            this.missed++;
        }
        this.board[ver][hor] = "H";

        this.checkSunk();
        this.checkWin();
    };

    checkSunk() {
        for(const entry in this) {
            if(this[entry].name){
                if(this[entry].sunk !== true) {
                    if(this[entry].length === 0) {
                        this.totalSunk++;
                        this[entry].sunk = true;
                        this.log = `${this[entry].name} has been sunk!`;
                    }
                }
            }
        }
    };

    checkWin() {
        if(this.totalSunk === 15) {
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
        if(this.current.pBoard.totalPlaced === 15) {
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
const content = document.getElementById("content");

let game;

function startGame () {
    if(p1Input.value === "" || p2Input.value === "") {
        alert("Enter name");
        return;
    }

    game = new _index_js__WEBPACK_IMPORTED_MODULE_0__.Play(p1Input.value, p2Input.value);
    
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
            name.innerHTML = `${game.current.pBoard[entry].name}`;
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
    const controlsContainer1 = document.createElement("div");
    controlsContainer1.id = "controls-container1";
    shipGrid.appendChild(controlsContainer1);

    const currentP = document.createElement("div");
    currentP.id = "currentP";
    currentP.innerHTML = `Current Ship: ${game.current.pBoard.currentShip.name} --- Current Player Board: ${game.current.pName}`;
    controlsContainer1.appendChild(currentP);

    const controlsContainer2 = document.createElement("div");
    controlsContainer2.id = "controls-container2";
    shipGrid.appendChild(controlsContainer2);

    const placeHor = document.createElement("button");
    placeHor.innerHTML = "Place Horizontally";
    placeHor.addEventListener("click", () => setDirection("horizontal"));
    controlsContainer2.appendChild(placeHor);

    const placeVer = document.createElement("button");
    placeVer.innerHTML = "Place Vertically";
    placeVer.addEventListener("click", () => setDirection("vertical"));
    controlsContainer2.appendChild(placeVer);

    const log = document.createElement("p");
    log.id = "log";
    log.innerHTML = `Log: ${game.current.pBoard.log}`;
    controlsContainer2.appendChild(log);
};

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
        squareGrid.classList.add("grid-square");
        squareGrid.addEventListener("mouseenter", gridHoverIn.bind(null, hor, ver));
        squareGrid.addEventListener("mouseleave", gridHoverOut.bind(null, hor, ver));
        squareGrid.addEventListener("click", place.bind(null, hor, ver));
        grid.appendChild(squareGrid);
    }
};

function updateUIPre() {
    shipGrid.innerHTML = "";
    grid.innerHTML = "";
    renderShips();
    renderControls();
    renderGrid();
    checkGrid();

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
    const currentPlayer = document.createElement("div");
    currentPlayer.id = "current-player";
    currentPlayer.innerHTML = `Current Player Board: ${game.current.pName}`;
    shipGrid.appendChild(currentPlayer);

    const switchPlayer = document.createElement("button");
    switchPlayer.id = "switch";
    switchPlayer.innerHTML = `Switch`;
    switchPlayer.addEventListener("click", () => { game.switch(); updateUIPost(); });
    shipGrid.appendChild(switchPlayer);

    const log = document.createElement("p");
    log.id = "log";
    log.innerHTML = `Log: ${game.current.pBoard.log}`;
    shipGrid.appendChild(log);
};

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
    console.log(game.current.pBoard);

    document.getElementById("log").innerHTML = `Log: ${game.current.pBoard.log}`
    checkWin();
};

function checkGrid() {
    for(let i = 0; i < game.current.pBoard.board.length; i++) {
        for(let j = 0; j < game.current.pBoard.board[i].length; j++) {
            if(game.current.pBoard.board[i][j] !== 0) {
                let currSquare = document.getElementById(`${i}-${j}`);
                currSquare.style.backgroundColor = "white";
            }
        }
    };
};

function setDirection(direction) {
    game.current.pBoard.direction = direction;
};

function place(hor, ver) {
    if(game.current.pBoard.direction === "vertical") {
        game.current.pBoard.placeVer(game.current.pBoard.currentShip, hor, ver);
    } else if (game.current.pBoard.direction === "horizontal"){
        game.current.pBoard.placeHor(game.current.pBoard.currentShip, hor, ver);
    };
    
    console.log(game.current.pBoard);
    
    checkGrid();
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
    const win = document.createElement("p");
    win.id = "win";

    if(game.p1.pBoard.winner === true) {
        wrapper.innerHTML = "";
        win.innerHTML = `${game.p2.pName} has won!`;
        content.appendChild(win);
    }

    if(game.p2.pBoard.winner === true) {
        wrapper.innerHTML = "";
        win.innerHTML = `${game.p1.pName} has won!`;
        content.appendChild(win);
    }
};

start.addEventListener("click", startGame);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUZBQWlGLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sV0FBVyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxhQUFhLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxh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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNENBQTRDO0FBQy9EO0FBQ0EsMkRBQTJELFFBQVEsR0FBRyxJQUFJO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViwyREFBMkQsSUFBSSxHQUFHLFFBQVE7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGVBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjQ5YjtcclxufVxyXG5cclxuLypIZWFkZXIgc3RhcnQqL1xyXG4jaGVhZGVyLWRpdiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLypIZWFkZXIgZW5kKi9cclxuXHJcbi8qUGxheWVyIGlucHV0IHN0YXJ0Ki9cclxuI3BsYXllci1pbnB1dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbiNwbGF5ZXItaW5wdXQgaW5wdXQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNwbGF5ZXItaW5wdXQgaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrOyBcclxufVxyXG5cclxuI3BsYXllci1pbnB1dCBpbnB1dDo6cGxhY2Vob2xkZXJ7XHJcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jc3RhcnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbiNzdGFydCBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxufVxyXG5cclxuI3N0YXJ0IDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNzdGFydCA6ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiB1bnNldDtcclxufVxyXG4vKlBsYXllciBpbnB1dCBlbmQqL1xyXG5cclxuLypQbGFjZW1lbnQgZ3JpZCBzdGFydCovXHJcbiN3cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDBweDtcclxuICAgIGdyaWQtcm93LWdhcDogMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAgXHJcbn1cclxuXHJcbiNzaGlwLWdyaWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpIDcwcHggNzBweDtcclxuICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDVweDtcclxuICAgICAgICBncmlkLXJvdy1nYXA6IDVweDtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuI2dyaWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAzcHg7XHJcbiAgICAgICAgZ3JpZC1yb3ctZ2FwOiAzcHg7IFxyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmdyaWQtc3F1YXJlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3F1YXJlIHtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uc3F1YXJlIGRpdntcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNxdWFyZSBidXR0b257XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgYmxhY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbn1cclxuXHJcbiNjb250cm9scy1jb250YWluZXIxIHtcclxuICAgIGdyaWQtcm93OiA2Lzc7XHJcbiAgICBncmlkLWNvbHVtbjogMS80O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jY3VycmVudFAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNjb250cm9scy1jb250YWluZXIyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGdyaWQtcm93OiA3Lzc7XHJcbiAgICBncmlkLWNvbHVtbjogMS80O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNjb250cm9scy1jb250YWluZXIyIGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG59XHJcblxyXG4jbG9nIHtcclxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4vKlBsYWNlbWVudCBncmlkIGVuZCovXHJcblxyXG4vKkhpdCBncmlkIHN0YXJ0Ki9cclxuI2N1cnJlbnQtcGxheWVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZ3JpZC1yb3c6IDYvNztcclxuICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jc3dpdGNoIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiN3aW4ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLypIaXQgZ3JpZCBlbmQqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1Qsd0JBQXdCO0FBQzVCOztBQUVBLGVBQWU7QUFDZjtJQUNJLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDJEQUEyRDtJQUMzRCxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBLGFBQWE7O0FBRWIscUJBQXFCO0FBQ3JCO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwyREFBMkQ7SUFDM0QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyREFBMkQ7SUFDM0QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBLG1CQUFtQjs7QUFFbkIsdUJBQXVCO0FBQ3ZCO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO1FBQ1EsYUFBYTtRQUNiLHFDQUFxQztRQUNyQyw0Q0FBNEM7UUFDNUMsb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YsWUFBWTtBQUNwQjs7QUFFQTtRQUNRLGFBQWE7UUFDYixzQ0FBc0M7UUFDdEMsbUNBQW1DO1FBQ25DLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsVUFBVTtRQUNWLG1CQUFtQjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNERBQTREO0lBQzVELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDREQUE0RDtJQUM1RCxXQUFXO0lBQ1gsYUFBYTtJQUNiLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDREQUE0RDtJQUM1RCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNERBQTREO0lBQzVELGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw0REFBNEQ7SUFDNUQsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsNERBQTREO0lBQzVELGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCO0FBQ0EscUJBQXFCOztBQUVyQixpQkFBaUI7QUFDakI7SUFDSSw0REFBNEQ7SUFDNUQsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNERBQTREO0lBQzVELGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksNERBQTREO0lBQzVELGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0EsZUFBZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY0OWI7XFxyXFxufVxcclxcblxcclxcbi8qSGVhZGVyIHN0YXJ0Ki9cXHJcXG4jaGVhZGVyLWRpdiB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4vKkhlYWRlciBlbmQqL1xcclxcblxcclxcbi8qUGxheWVyIGlucHV0IHN0YXJ0Ki9cXHJcXG4jcGxheWVyLWlucHV0e1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXItaW5wdXQgaW5wdXQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLWlucHV0IGlucHV0OmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrOyBcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXllci1pbnB1dCBpbnB1dDo6cGxhY2Vob2xkZXJ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YXJ0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhcnQgYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YXJ0IDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YXJ0IDpkaXNhYmxlZCB7XFxyXFxuICAgIGN1cnNvcjogdW5zZXQ7XFxyXFxufVxcclxcbi8qUGxheWVyIGlucHV0IGVuZCovXFxyXFxuXFxyXFxuLypQbGFjZW1lbnQgZ3JpZCBzdGFydCovXFxyXFxuI3dyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XFxyXFxuICAgIGdyaWQtcm93LWdhcDogMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7ICBcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAtZ3JpZCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcikgNzBweCA3MHB4O1xcclxcbiAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiA1cHg7XFxyXFxuICAgICAgICBncmlkLXJvdy1nYXA6IDVweDtcXHJcXG4gICAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNncmlkIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAzcHg7XFxyXFxuICAgICAgICBncmlkLXJvdy1nYXA6IDNweDsgXFxyXFxuICAgICAgICB3aWR0aDogNzAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtc3F1YXJlIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNxdWFyZSB7XFxyXFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uc3F1YXJlIGRpdntcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zcXVhcmUgYnV0dG9ue1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3gtc2hhZG93OiAwO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCBibGFjaztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250cm9scy1jb250YWluZXIxIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDYvNztcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50UCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDA7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRyb2xzLWNvbnRhaW5lcjIge1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGdyaWQtcm93OiA3Lzc7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRyb2xzLWNvbnRhaW5lcjIgYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDA7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNsb2cge1xcclxcbiAgICBncmlkLWNvbHVtbjogMS80O1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLypQbGFjZW1lbnQgZ3JpZCBlbmQqL1xcclxcblxcclxcbi8qSGl0IGdyaWQgc3RhcnQqL1xcclxcbiNjdXJyZW50LXBsYXllciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGdyaWQtcm93OiA2Lzc7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNzd2l0Y2gge1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3dpbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4vKkhpdCBncmlkIGVuZCovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5cclxuY2xhc3MgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgbGVuZ3RoLCBtYXJraW5nKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMubWFya2luZyA9IG1hcmtpbmc7XHJcblxyXG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGxhY2VkID0gZmFsc2U7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJvYXJkID0gICBbWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDBdXTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNhcnJpZXIxID0gbmV3IFNoaXAoXCJDYXJyaWVyIDFcIiwgNSwgXCJDMVwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmJhdHRsZXNoaXAxID0gbmV3IFNoaXAoXCJCYXR0bGVzaGlwIDFcIiwgNCwgXCJCMVwiKTtcclxuICAgICAgICB0aGlzLmJhdHRsZXNoaXAyID0gbmV3IFNoaXAoXCJCYXR0bGVzaGlwIDJcIiwgNCwgXCJCMlwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmRlc3Ryb3llcjEgPSBuZXcgU2hpcChcIkRlc3Ryb3llciAxXCIsIDMsIFwiRDFcIik7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95ZXIyID0gbmV3IFNoaXAoXCJEZXN0cm95ZXIgMlwiLCAzLCBcIkQyXCIpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveWVyMyA9IG5ldyBTaGlwKFwiRGVzdHJveWVyIDNcIiwgMywgXCJEM1wiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN1Ym1hcmluZTEgPSBuZXcgU2hpcChcIlN1Ym1hcmluZSAxXCIsIDMsIFwiUzFcIik7XHJcbiAgICAgICAgdGhpcy5zdWJtYXJpbmUyID0gbmV3IFNoaXAoXCJTdWJtYXJpbmUgMlwiLCAzLCBcIlMyXCIpO1xyXG4gICAgICAgIHRoaXMuc3VibWFyaW5lMyA9IG5ldyBTaGlwKFwiU3VibWFyaW5lIDNcIiwgMywgXCJTM1wiKTtcclxuICAgICAgICB0aGlzLnN1Ym1hcmluZTQgPSBuZXcgU2hpcChcIlN1Ym1hcmluZSA0XCIsIDMsIFwiUzRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wYXRyb2xfYm9hdDEgPSBuZXcgU2hpcChcIlBhdHJvbCBCb2F0IDFcIiwgMiwgXCJQMVwiKTtcclxuICAgICAgICB0aGlzLnBhdHJvbF9ib2F0MiA9IG5ldyBTaGlwKFwiUGF0cm9sIEJvYXQgMlwiLCAyLCBcIlAyXCIpO1xyXG4gICAgICAgIHRoaXMucGF0cm9sX2JvYXQzID0gbmV3IFNoaXAoXCJQYXRyb2wgQm9hdCAzXCIsIDIsIFwiUDNcIik7XHJcbiAgICAgICAgdGhpcy5wYXRyb2xfYm9hdDQgPSBuZXcgU2hpcChcIlBhdHJvbCBCb2F0IDRcIiwgMiwgXCJQNFwiKTtcclxuICAgICAgICB0aGlzLnBhdHJvbF9ib2F0NSA9IG5ldyBTaGlwKFwiUGF0cm9sIEJvYXQgNVwiLCAyLCBcIlA1XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY3VycmVudFNoaXAgPSB0aGlzLmNhcnJpZXIxO1xyXG4gICAgICAgIHRoaXMubWlzc2VkID0gMDtcclxuICAgICAgICB0aGlzLnRvdGFsU3VuayA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbFBsYWNlZCA9IDA7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcInZlcnRpY2FsXCI7XHJcbiAgICAgICAgdGhpcy53aW5uZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvZyA9IFwiXCI7XHJcbiAgICB9O1xyXG5cclxuICAgIHBsYWNlVmVyKHNoaXAsIGhvciwgdmVyKSB7XHJcbiAgICAgICAgaWYoc2hpcC5wbGFjZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2cgPSBcIlNoaXAgYWxyZWFkeSBwbGFjZWRcIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZih0aGlzLmJvYXJkW3ZlciArIGldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nID0gXCJPb0IgdmVyXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5ib2FyZFt2ZXIgKyBpXVtob3JdICE9PSAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nID0gXCJOb3QgcG9zc2libGUgdmVyXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbdmVyICsgaV1baG9yXSA9IHNoaXAubWFya2luZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2hpcC5wbGFjZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudG90YWxQbGFjZWQrKztcclxuICAgIH07XHJcblxyXG4gICAgcGxhY2VIb3Ioc2hpcCwgaG9yLCB2ZXIpIHtcclxuICAgICAgICBpZihzaGlwLnBsYWNlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZyA9IFwiU2hpcCBhbHJlYWR5IHBsYWNlZFwiO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5ib2FyZFt2ZXJdW2hvciArIGldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nID0gXCJPb0IgaG9yXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbdmVyXVtob3IgKyBpXSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2cgPSBcIk5vdCBwb3NzaWJsZSBob3JcIjtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt2ZXJdW2hvciArIGldID0gc2hpcC5tYXJraW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2hpcC5wbGFjZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudG90YWxQbGFjZWQrKztcclxuICAgIH07XHJcblxyXG4gICAgaGl0KGhvciwgdmVyKSB7XHJcbiAgICAgICAgaWYodGhpcy5ib2FyZFt2ZXJdW2hvcl0gIT09IDApIHtcclxuICAgICAgICAgICAgc3dpdGNoKHRoaXMuYm9hcmRbdmVyXVtob3JdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQzFcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcnJpZXIxLmxlbmd0aC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nID0gXCJDYXJyaWVyIGhhcyBiZWVuIGhpdFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQjFcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhdHRsZXNoaXAxLmxlbmd0aC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nID0gXCJCYXR0bGVzaGlwIGhhcyBiZWVuIGhpdFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkIyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXR0bGVzaGlwMi5sZW5ndGgtLTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZyA9IFwiQmF0dGxlc2hpcCBoYXMgYmVlbiBoaXRcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkQxXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95ZXIxLmxlbmd0aC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nID0gXCJEZXN0cm95ZXIgaGFzIGJlZW4gaGl0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRDJcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3llcjIubGVuZ3RoLS07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2cgPSBcIkRlc3Ryb3llciBoYXMgYmVlbiBoaXRcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJEM1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveWVyMy5sZW5ndGgtLTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZyA9IFwiRGVzdHJveWVyIGhhcyBiZWVuIGhpdFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUzFcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1hcmluZTEubGVuZ3RoLS1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZyA9IFwiU3VibWFyaW5lIGhhcyBiZWVuIGhpdFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlMyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtYXJpbmUyLmxlbmd0aC0tXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2cgPSBcIlN1Ym1hcmluZSBoYXMgYmVlbiBoaXRcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJTM1wiOiBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1hcmluZTMubGVuZ3RoLS1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZyA9IFwiU3VibWFyaW5lIGhhcyBiZWVuIGhpdFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlM0XCI6IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWFyaW5lNC5sZW5ndGgtLVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nID0gXCJTdWJtYXJpbmUgaGFzIGJlZW4gaGl0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQMVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF0cm9sX2JvYXQxLmxlbmd0aC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nID0gXCJQYXRyb2wgQm9hdCBoYXMgYmVlbiBoaXRcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQMlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF0cm9sX2JvYXQyLmxlbmd0aC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nID0gXCJQYXRyb2wgQm9hdCBoYXMgYmVlbiBoaXRcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQM1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF0cm9sX2JvYXQzLmxlbmd0aC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nID0gXCJQYXRyb2wgQm9hdCBoYXMgYmVlbiBoaXRcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQNFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF0cm9sX2JvYXQ0Lmxlbmd0aC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nID0gXCJQYXRyb2wgQm9hdCBoYXMgYmVlbiBoaXRcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQNVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF0cm9sX2JvYXQ1Lmxlbmd0aC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nID0gXCJQYXRyb2wgQm9hdCBoYXMgYmVlbiBoaXRcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nID0gXCJNaXNzXCI7XHJcbiAgICAgICAgICAgIHRoaXMubWlzc2VkKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYm9hcmRbdmVyXVtob3JdID0gXCJIXCI7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tTdW5rKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja1dpbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjaGVja1N1bmsoKSB7XHJcbiAgICAgICAgZm9yKGNvbnN0IGVudHJ5IGluIHRoaXMpIHtcclxuICAgICAgICAgICAgaWYodGhpc1tlbnRyeV0ubmFtZSl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzW2VudHJ5XS5zdW5rICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpc1tlbnRyeV0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxTdW5rKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbZW50cnldLnN1bmsgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZyA9IGAke3RoaXNbZW50cnldLm5hbWV9IGhhcyBiZWVuIHN1bmshYDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNoZWNrV2luKCkge1xyXG4gICAgICAgIGlmKHRoaXMudG90YWxTdW5rID09PSAxNSkge1xyXG4gICAgICAgICAgICB0aGlzLndpbm5lciA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgc2V0U3VuaygpIHtcclxuICAgICAgICB0aGlzLnRvdGFsU3VuayA9IDE1O1xyXG4gICAgfTtcclxuXHJcbiAgICBzZXRQbGFjZWQoKSB7XHJcbiAgICAgICAgZm9yKGNvbnN0IGVudHJ5IGluIHRoaXMpIHtcclxuICAgICAgICAgICAgaWYodGhpc1tlbnRyeV0ubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpc1tlbnRyeV0ucGxhY2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwaWNrKHNoaXApICAge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNoaXAgPSBzaGlwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFNoaXApO1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNsYXNzIENyZWF0ZVBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwTmFtZSwgcE1hcmspIHtcclxuICAgICAgICAgICAgdGhpcy5wTmFtZSA9IHBOYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnBNYXJrID0gcE1hcms7XHJcbiAgICAgICAgICAgIHRoaXMucEJvYXJkID0gbmV3IEdhbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xyXG4gICAgfTtcclxufTtcclxuXHJcbmNsYXNzIFBsYXkge1xyXG4gICAgY29uc3RydWN0b3IgKHAxTmFtZSwgcDJOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5wMSA9IG5ldyBDcmVhdGVQbGF5ZXIocDFOYW1lLCBcIlAxXCIpO1xyXG4gICAgICAgIHRoaXMucDIgPSBuZXcgQ3JlYXRlUGxheWVyKHAyTmFtZSwgXCJQMlwiKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnAxO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrUmVhZHkoKSB7XHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50LnBCb2FyZC50b3RhbFBsYWNlZCA9PT0gMTUpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50LnJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHN3aXRjaCgpIHtcclxuICAgICAgICB0aGlzLmNoZWNrUmVhZHkoKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5wMS5yZWFkeSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPT09IHRoaXMucDEgPyB0aGlzLmN1cnJlbnQgPSB0aGlzLnAyIDogdGhpcy5jdXJyZW50ID0gdGhpcy5wMTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNoYW5nZVBsYXllcigpIHtcclxuICAgICAgICB0aGlzLmNoZWNrUmVhZHkoKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5wMS5yZWFkeSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnAyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IFNoaXAsIEdhbWUsIENyZWF0ZVBsYXllciwgUGxheX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBHYW1lLCBDcmVhdGVQbGF5ZXIsIFBsYXkgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5cclxuY29uc3Qgc2hpcEdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAtZ3JpZFwiKTtcclxuY29uc3QgcDFJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicDEtaW5wdXRcIik7XHJcbmNvbnN0IHAySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInAyLWlucHV0XCIpO1xyXG5jb25zdCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtYnRuXCIpO1xyXG5jb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmlkXCIpO1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5cclxubGV0IGdhbWU7XHJcblxyXG5mdW5jdGlvbiBzdGFydEdhbWUgKCkge1xyXG4gICAgaWYocDFJbnB1dC52YWx1ZSA9PT0gXCJcIiB8fCBwMklucHV0LnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgYWxlcnQoXCJFbnRlciBuYW1lXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnYW1lID0gbmV3IFBsYXkocDFJbnB1dC52YWx1ZSwgcDJJbnB1dC52YWx1ZSk7XHJcbiAgICBcclxuICAgIHN0YXJ0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHAxSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgcDJJbnB1dC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBcclxuICAgIHVwZGF0ZVVJUHJlKCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZW5kZXJTaGlwcygpIHtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBmb3IoY29uc3QgZW50cnkgaW4gZ2FtZS5jdXJyZW50LnBCb2FyZCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGdhbWUuY3VycmVudC5wQm9hcmRbZW50cnldLm5hbWUpIHtcclxuICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHRvcC5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xyXG4gICAgICAgICAgICBzaGlwR3JpZC5hcHBlbmRDaGlsZCh0b3ApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIG5hbWUuaW5uZXJIVE1MID0gYCR7Z2FtZS5jdXJyZW50LnBCb2FyZFtlbnRyeV0ubmFtZX1gO1xyXG4gICAgICAgICAgICB0b3AuYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBsZW5ndGguaW5uZXJIVE1MID0gYExlbmd0aDogJHtnYW1lLmN1cnJlbnQucEJvYXJkW2VudHJ5XS5sZW5ndGh9YDtcclxuICAgICAgICAgICAgdG9wLmFwcGVuZENoaWxkKGxlbmd0aCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBwbGFjZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBwbGFjZWQuY2xhc3NMaXN0LmFkZChcInBsYWNlXCIpO1xyXG4gICAgICAgICAgICBwbGFjZWQuaW5uZXJIVE1MID0gYFBsYWNlZD86ICR7Z2FtZS5jdXJyZW50LnBCb2FyZFtlbnRyeV0ucGxhY2VkfWA7XHJcbiAgICAgICAgICAgIHRvcC5hcHBlbmRDaGlsZChwbGFjZWQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcGlja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIHBpY2tCdG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgcGlja0J0bi5pbm5lckhUTUwgPSBcIlBpY2tcIjtcclxuICAgICAgICAgICAgcGlja0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmN1cnJlbnQucEJvYXJkLnBpY2soZ2FtZS5jdXJyZW50LnBCb2FyZFtlbnRyeV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVVJUHJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdG9wLmFwcGVuZENoaWxkKHBpY2tCdG4pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoY291bnQgPT09IDE1KSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDb250cm9scygpIHtcclxuICAgIGNvbnN0IGNvbnRyb2xzQ29udGFpbmVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250cm9sc0NvbnRhaW5lcjEuaWQgPSBcImNvbnRyb2xzLWNvbnRhaW5lcjFcIjtcclxuICAgIHNoaXBHcmlkLmFwcGVuZENoaWxkKGNvbnRyb2xzQ29udGFpbmVyMSk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY3VycmVudFAuaWQgPSBcImN1cnJlbnRQXCI7XHJcbiAgICBjdXJyZW50UC5pbm5lckhUTUwgPSBgQ3VycmVudCBTaGlwOiAke2dhbWUuY3VycmVudC5wQm9hcmQuY3VycmVudFNoaXAubmFtZX0gLS0tIEN1cnJlbnQgUGxheWVyIEJvYXJkOiAke2dhbWUuY3VycmVudC5wTmFtZX1gO1xyXG4gICAgY29udHJvbHNDb250YWluZXIxLmFwcGVuZENoaWxkKGN1cnJlbnRQKTtcclxuXHJcbiAgICBjb25zdCBjb250cm9sc0NvbnRhaW5lcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udHJvbHNDb250YWluZXIyLmlkID0gXCJjb250cm9scy1jb250YWluZXIyXCI7XHJcbiAgICBzaGlwR3JpZC5hcHBlbmRDaGlsZChjb250cm9sc0NvbnRhaW5lcjIpO1xyXG5cclxuICAgIGNvbnN0IHBsYWNlSG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHBsYWNlSG9yLmlubmVySFRNTCA9IFwiUGxhY2UgSG9yaXpvbnRhbGx5XCI7XHJcbiAgICBwbGFjZUhvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2V0RGlyZWN0aW9uKFwiaG9yaXpvbnRhbFwiKSk7XHJcbiAgICBjb250cm9sc0NvbnRhaW5lcjIuYXBwZW5kQ2hpbGQocGxhY2VIb3IpO1xyXG5cclxuICAgIGNvbnN0IHBsYWNlVmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHBsYWNlVmVyLmlubmVySFRNTCA9IFwiUGxhY2UgVmVydGljYWxseVwiO1xyXG4gICAgcGxhY2VWZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNldERpcmVjdGlvbihcInZlcnRpY2FsXCIpKTtcclxuICAgIGNvbnRyb2xzQ29udGFpbmVyMi5hcHBlbmRDaGlsZChwbGFjZVZlcik7XHJcblxyXG4gICAgY29uc3QgbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBsb2cuaWQgPSBcImxvZ1wiO1xyXG4gICAgbG9nLmlubmVySFRNTCA9IGBMb2c6ICR7Z2FtZS5jdXJyZW50LnBCb2FyZC5sb2d9YDtcclxuICAgIGNvbnRyb2xzQ29udGFpbmVyMi5hcHBlbmRDaGlsZChsb2cpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyR3JpZCgpIHtcclxuICAgIGxldCB2ZXIgPSAwO1xyXG4gICAgbGV0IGhvciA9IC0xO1xyXG4gICAgXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuICAgICAgICBob3IrK1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGhvciA9PT0gMTApIHtcclxuICAgICAgICAgICAgaG9yID0gMDtcclxuICAgICAgICAgICAgdmVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNxdWFyZUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHNxdWFyZUdyaWQuaWQgPSBgJHt2ZXJ9LSR7aG9yfWA7XHJcbiAgICAgICAgc3F1YXJlR3JpZC5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1zcXVhcmVcIik7XHJcbiAgICAgICAgc3F1YXJlR3JpZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBncmlkSG92ZXJJbi5iaW5kKG51bGwsIGhvciwgdmVyKSk7XHJcbiAgICAgICAgc3F1YXJlR3JpZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBncmlkSG92ZXJPdXQuYmluZChudWxsLCBob3IsIHZlcikpO1xyXG4gICAgICAgIHNxdWFyZUdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYWNlLmJpbmQobnVsbCwgaG9yLCB2ZXIpKTtcclxuICAgICAgICBncmlkLmFwcGVuZENoaWxkKHNxdWFyZUdyaWQpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlVUlQcmUoKSB7XHJcbiAgICBzaGlwR3JpZC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZ3JpZC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgcmVuZGVyU2hpcHMoKTtcclxuICAgIHJlbmRlckNvbnRyb2xzKCk7XHJcbiAgICByZW5kZXJHcmlkKCk7XHJcbiAgICBjaGVja0dyaWQoKTtcclxuXHJcbiAgICBpZihnYW1lLnAxLnJlYWR5ID09PSB0cnVlICYmIGdhbWUucDIucmVhZHkgPT09IHRydWUpIHtcclxuICAgICAgICB1cGRhdGVVSVBvc3QoKTtcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVVJUG9zdCgpIHtcclxuICAgIHNoaXBHcmlkLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBncmlkLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICByZW5kZXJTaGlwcygpO1xyXG4gICAgcmVuZGVyQ29udHJvbHNIaXQoKTtcclxuICAgIHJlbmRlckhpdEdyaWQoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckhpdEdyaWQoKSB7XHJcbiAgICBsZXQgdmVyID0gMDtcclxuICAgIGxldCBob3IgPSAtMTtcclxuICAgIFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICAgICAgaG9yKytcclxuICAgICAgICBcclxuICAgICAgICBpZihob3IgPT09IDEwKSB7XHJcbiAgICAgICAgICAgIGhvciA9IDA7XHJcbiAgICAgICAgICAgIHZlcisrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzcXVhcmVHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzcXVhcmVHcmlkLmlkID0gYCR7dmVyfS0ke2hvcn1gO1xyXG4gICAgICAgIHNxdWFyZUdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpdC5iaW5kKG51bGwsIGhvciwgdmVyKSk7XHJcbiAgICAgICAgc3F1YXJlR3JpZC5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1zcXVhcmVcIik7XHJcbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChzcXVhcmVHcmlkKTtcclxuICAgIH07XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGdhbWUuY3VycmVudC5wQm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgZ2FtZS5jdXJyZW50LnBCb2FyZC5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBpZihnYW1lLmN1cnJlbnQucEJvYXJkLmJvYXJkW2ldW2pdID09PSBcIkhcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aX0tJHtqfWApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gXCJibHVlXCI7XHJcbiAgICAgICAgICAgICAgICBpZihnYW1lLmN1cnJlbnQucE1hcmsgPT09IFwiUDFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yID0gXCJibHVlXCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yID0gXCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNoaXBHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b25cIik7XHJcbiAgICBzaGlwR3JpZC5mb3JFYWNoKChzaGlwKSA9PiB7XHJcbiAgICAgICAgc2hpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNoaXApO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDb250cm9sc0hpdCgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY3VycmVudFBsYXllci5pZCA9IFwiY3VycmVudC1wbGF5ZXJcIjtcclxuICAgIGN1cnJlbnRQbGF5ZXIuaW5uZXJIVE1MID0gYEN1cnJlbnQgUGxheWVyIEJvYXJkOiAke2dhbWUuY3VycmVudC5wTmFtZX1gO1xyXG4gICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQoY3VycmVudFBsYXllcik7XHJcblxyXG4gICAgY29uc3Qgc3dpdGNoUGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHN3aXRjaFBsYXllci5pZCA9IFwic3dpdGNoXCI7XHJcbiAgICBzd2l0Y2hQbGF5ZXIuaW5uZXJIVE1MID0gYFN3aXRjaGA7XHJcbiAgICBzd2l0Y2hQbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgZ2FtZS5zd2l0Y2goKTsgdXBkYXRlVUlQb3N0KCk7IH0pO1xyXG4gICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQoc3dpdGNoUGxheWVyKTtcclxuXHJcbiAgICBjb25zdCBsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGxvZy5pZCA9IFwibG9nXCI7XHJcbiAgICBsb2cuaW5uZXJIVE1MID0gYExvZzogJHtnYW1lLmN1cnJlbnQucEJvYXJkLmxvZ31gO1xyXG4gICAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQobG9nKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGhpdChob3IsIHZlcikge1xyXG4gICAgZ2FtZS5jdXJyZW50LnBCb2FyZC5oaXQoaG9yLCB2ZXIpO1xyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnYW1lLmN1cnJlbnQucEJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGdhbWUuY3VycmVudC5wQm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aX0tJHtqfWApLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgaWYoZ2FtZS5jdXJyZW50LnBCb2FyZC5ib2FyZFtpXVtqXSA9PT0gXCJIXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2l9LSR7an1gKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xvciA9IFwiYmx1ZVwiO1xyXG4gICAgICAgICAgICAgICAgaWYoZ2FtZS5jdXJyZW50LnBNYXJrID09PSBcIlAxXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvciA9IFwiYmx1ZVwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvciA9IFwicmVkXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGdhbWUuY3VycmVudC5wQm9hcmQpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nXCIpLmlubmVySFRNTCA9IGBMb2c6ICR7Z2FtZS5jdXJyZW50LnBCb2FyZC5sb2d9YFxyXG4gICAgY2hlY2tXaW4oKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrR3JpZCgpIHtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnYW1lLmN1cnJlbnQucEJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGdhbWUuY3VycmVudC5wQm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYoZ2FtZS5jdXJyZW50LnBCb2FyZC5ib2FyZFtpXVtqXSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJTcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpfS0ke2p9YCk7XHJcbiAgICAgICAgICAgICAgICBjdXJyU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzZXREaXJlY3Rpb24oZGlyZWN0aW9uKSB7XHJcbiAgICBnYW1lLmN1cnJlbnQucEJvYXJkLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHBsYWNlKGhvciwgdmVyKSB7XHJcbiAgICBpZihnYW1lLmN1cnJlbnQucEJvYXJkLmRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgICAgZ2FtZS5jdXJyZW50LnBCb2FyZC5wbGFjZVZlcihnYW1lLmN1cnJlbnQucEJvYXJkLmN1cnJlbnRTaGlwLCBob3IsIHZlcik7XHJcbiAgICB9IGVsc2UgaWYgKGdhbWUuY3VycmVudC5wQm9hcmQuZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIil7XHJcbiAgICAgICAgZ2FtZS5jdXJyZW50LnBCb2FyZC5wbGFjZUhvcihnYW1lLmN1cnJlbnQucEJvYXJkLmN1cnJlbnRTaGlwLCBob3IsIHZlcik7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhnYW1lLmN1cnJlbnQucEJvYXJkKTtcclxuICAgIFxyXG4gICAgY2hlY2tHcmlkKCk7XHJcbiAgICBnYW1lLmNoYW5nZVBsYXllcigpO1xyXG4gICAgdXBkYXRlVUlQcmUoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdyaWRIb3ZlckluKGhvciwgdmVyKSB7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZS5jdXJyZW50LnBCb2FyZC5jdXJyZW50U2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKGdhbWUuY3VycmVudC5wQm9hcmQuZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt2ZXIgKyBpfS0ke2hvcn1gKTtcclxuICAgICAgICAgICAgaWYoY3VycmVudFNxdWFyZSAhPT0gbnVsbCAmJiBjdXJyZW50U3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciAhPT0gXCJ3aGl0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50U3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dmVyfS0ke2hvciArIGl9YCk7XHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRTcXVhcmUgIT09IG51bGwgJiYgY3VycmVudFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgIT09IFwid2hpdGVcIikge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ3JpZEhvdmVyT3V0KGhvciwgdmVyKSB7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZS5jdXJyZW50LnBCb2FyZC5jdXJyZW50U2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKGdhbWUuY3VycmVudC5wQm9hcmQuZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt2ZXIgKyBpfS0ke2hvcn1gKTtcclxuICAgICAgICAgICAgaWYoY3VycmVudFNxdWFyZSAhPT0gbnVsbCAmJiBjdXJyZW50U3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciAhPT0gXCJ3aGl0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZjQ5YlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRTcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt2ZXJ9LSR7aG9yICsgaX1gKTtcclxuICAgICAgICAgICAgaWYoY3VycmVudFNxdWFyZSAhPT0gbnVsbCAmJiBjdXJyZW50U3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciAhPT0gXCJ3aGl0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZjQ5YlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hlY2tXaW4oKSB7XHJcbiAgICBjb25zdCB3aW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHdpbi5pZCA9IFwid2luXCI7XHJcblxyXG4gICAgaWYoZ2FtZS5wMS5wQm9hcmQud2lubmVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgd3JhcHBlci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHdpbi5pbm5lckhUTUwgPSBgJHtnYW1lLnAyLnBOYW1lfSBoYXMgd29uIWA7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh3aW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGdhbWUucDIucEJvYXJkLndpbm5lciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB3aW4uaW5uZXJIVE1MID0gYCR7Z2FtZS5wMS5wTmFtZX0gaGFzIHdvbiFgO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2luKTtcclxuICAgIH1cclxufTtcclxuXHJcbnN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEdhbWUpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==