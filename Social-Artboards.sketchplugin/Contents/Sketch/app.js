var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var fileManager = NSFileManager.defaultManager();
var pluginName = 'Social Medias & Banner Ads Artboards';
var app = NSApplication.sharedApplication();

var createNew = function createNew(context) {
  var pathArray = context.scriptPath.split('/');
  var defaultsFilePath = pathArray.reverse().filter(function (e, r) {
    return r !== 0 && r !== 1;
  });
  defaultsFilePath = defaultsFilePath.reverse().join('/');
  defaultsFilePath = defaultsFilePath + '/Resources/defaults.plist';
  var targetDirectory = "/" + context.scriptPath.split('/')[1] + "/" + context.scriptPath.split('/')[2] + "/Library/Application Support/com.bohemiancoding.sketch3/artboards.plist";
  var data = NSData.dataWithContentsOfFile(defaultsFilePath);
  data.writeToFile(targetDirectory);
  context.document.showMessage("🎉 " + pluginName + " have been added to Sketch. Take a look at your 'Custom' artboard presets (A).");
};

/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var uri = "/" + context.scriptPath.split('/')[1] + "/" + context.scriptPath.split('/')[2] + "/Library/Application Support/com.bohemiancoding.sketch3/artboards.plist";
  var urout = "/" + context.scriptPath.split('/')[1] + "/" + context.scriptPath.split('/')[2] + "/Library/Application Support/com.bohemiancoding.sketch3/artboards.plist";
  var defaultLibraryPath = '~/Library/Application Support/com.bohemiancoding.sketch3/';
  var path = NSHomeDirectory();
  var defaultFilePath = path + '/Library/Application Support/com.bohemiancoding.sketch3/artboards.plist';

  if (fileManager.fileExistsAtPath(String(defaultFilePath)) === 1) {
    var libraryPath = NSURL.fileURLWithPath(defaultFilePath);
    var array = NSMutableArray.alloc().initWithContentsOfFile(String(defaultFilePath));
    var length = Array.from(array).length;

    if (length === 1) {
      var pathArray = context.scriptPath.split('/');
      var defaultsFilePath = pathArray.reverse().filter(function (e, r) {
        return r !== 0 && r !== 1;
      });
      defaultsFilePath = defaultsFilePath.reverse().join('/');
      defaultsFilePath = defaultsFilePath + '/Resources/defaults.plist';
      var defLibraryPath = NSURL.fileURLWithPath(defaultsFilePath);
      var karray = NSMutableArray.alloc().initWithContentsOfFile(String(defLibraryPath));
      var xarray = NSMutableArray.alloc().initWithContentsOfFile(String(defaultsFilePath));
      xarray[0] = array[0];
      var x = NSPropertyListSerialization.dataWithPropertyList_format_options_error(xarray, NSPropertyListXMLFormat_v1_0, [], nil);
      NSFileManager.defaultManager().createFileAtPath_contents_attributes(String(urout), x, nil);
      context.document.showMessage("💬 " + pluginName + " have been added to Sketch. Take a look at your custom artboards. (A)");
    } else {
      context.document.showMessage("💬 Looks like " + pluginName + " exists already... Take a look at your custom artboards. (A)");
    }
  } else {
    createNew(context);
  }
});

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=app.js.map
