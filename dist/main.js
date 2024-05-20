/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n    // Function to generate a valid IMEI number\r\n    /*const generateIMEI = () => {\r\n        let imei = '';\r\n        for (let i = 0; i < 14; i++) {\r\n            imei += Math.floor(Math.random() * 10).toString();\r\n        }\r\n        // Calculate checksum digit\r\n        let sum = 0;\r\n        for (let i = 0; i < imei.length; i++) {\r\n            let digit = parseInt(imei[i], 10);\r\n            if (i % 2 !== 0) {\r\n                digit *= 2;\r\n                if (digit > 9) {\r\n                    digit -= 9;\r\n                }\r\n            }\r\n            sum += digit;\r\n        }\r\n        const checksum = (sum * 9) % 10;\r\n        imei += checksum.toString();\r\n        return imei;\r\n    };\r\n\r\n    // Function to check if an IMEI number is valid\r\n    const isValidIMEI = (imei) => {\r\n        if (imei.length !== 15 && imei.length !== 16) {\r\n            return false;\r\n        }\r\n        if (!/^\\d+$/.test(imei)) {\r\n            return false;\r\n        }\r\n        let sum = 0;\r\n        for (let i = 0; i < imei.length - 1; i++) {\r\n            let digit = parseInt(imei[i], 10);\r\n            if (i % 2 !== 0) {\r\n                digit *= 2;\r\n                if (digit > 9) {\r\n                    digit -= 9;\r\n                }\r\n            }\r\n            sum += digit;\r\n        }\r\n        const checksum = parseInt(imei[imei.length - 1], 10);\r\n        const calculateChecksum = (sum * 9) % 10;\r\n        return checksum === calculateChecksum;\r\n    };*/\r\n    /*const imeiGenerator = require('imei-generator');\r\n\r\n    document.getElementById('gen-btn').onclick = function() {\r\n        const imei = imeiGenerator.generateIMEI();\r\n        document.getElementById('gen-input').value = imei;\r\n    };\r\n\r\n    document.getElementById('validate-btn').onclick = function() {\r\n        const imei = document.getElementById('IMEI-input').value;\r\n        const isValid = imeiGenerator.isValidIMEI(imei);\r\n        const resultElement = document.getElementById('validation-result');\r\n        resultElement.textContent = isValid ? \"Valid IMEI\" : \"Invalid IMEI\";\r\n        resultElement.style.color = isValid ? \"green\" : \"red\";\r\n        resultElement.style.fontSize = \"20px\";\r\n    };*/\r\n\r\n    const imeiGenerator = __webpack_require__(/*! imei-generator */ \"./node_modules/imei-generator/index.js\");\r\n\r\n    document.addEventListener('DOMContentLoaded', function() {    \r\n        document.getElementById('gen-btn').onclick = function() {\r\n            const imeiGenerator = __webpack_require__(/*! imei-generator */ \"./node_modules/imei-generator/index.js\");\r\n            const imei = imeiGenerator.generateIMEI();\r\n            document.getElementById('gen-input').value = imei;\r\n        };\r\n    \r\n        document.getElementById('validate-btn').onclick = function() {\r\n            const imeiGenerator = __webpack_require__(/*! imei-generator */ \"./node_modules/imei-generator/index.js\");\r\n            const imei = document.getElementById('IMEI-input').value;\r\n            const isValid = imeiGenerator.isValidIMEI(imei);\r\n            const resultElement = document.getElementById('validation-result');\r\n            resultElement.textContent = isValid ? \"Valid IMEI\" : \"Invalid IMEI\";\r\n            resultElement.style.color = isValid ? \"green\" : \"red\";\r\n            resultElement.style.fontSize = \"20px\";\r\n        };\r\n    });\r\n    \r\n\n\n//# sourceURL=webpack://imei-gen/./index.js?");

/***/ }),

/***/ "./node_modules/imei-generator/index.js":
/*!**********************************************!*\
  !*** ./node_modules/imei-generator/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("function generateIMEI() {\r\n    let imei = '';\r\n\r\n    // Generate 14 random digits\r\n    for (let i = 0; i < 14; i++) {\r\n        imei += Math.floor(Math.random() * 10);\r\n    }\r\n\r\n    // Calculate the checksum\r\n    let sum = 0;\r\n    for (let i = 0; i < imei.length; i++) {\r\n        let digit = parseInt(imei[i], 10);\r\n        if (i % 2 !== 0) {\r\n            digit *= 2;\r\n            if (digit > 9) {\r\n                digit -= 9;\r\n            }\r\n        }\r\n        sum += digit;\r\n    }\r\n    const checksum = (sum * 9) % 10;\r\n\r\n    // Append the checksum to the IMEI\r\n    imei += checksum;\r\n\r\n    return imei;\r\n}\r\n\r\nfunction isValidIMEI(imei = null) {\r\n    if (imei === null) {\r\n        imei = generateIMEI();\r\n        console.log(imei);\r\n    }\r\n    if (imei.length !== 15 && imei.length !== 16) {\r\n        return false;\r\n    }\r\n    if (!imei.match(/^\\d+$/)) {\r\n        return false;\r\n    }\r\n    let sum = 0;\r\n    for (let i = 0; i < imei.length - 1; i++) {\r\n        let digit = parseInt(imei[i], 10);\r\n        if (i % 2 !== 0) {\r\n            digit *= 2;\r\n            if (digit > 9) {\r\n                digit -= 9;\r\n            }\r\n        }\r\n        sum += digit;\r\n    }\r\n\r\n    const checksum = parseInt(imei[imei.length - 1], 10);\r\n    const calculateChecksum = (sum * 9) % 10;\r\n    return checksum == calculateChecksum;\r\n}\r\n\r\n\r\n\r\nmodule.exports = {\r\n    generateIMEI,\r\n    isValidIMEI\r\n};\r\n\r\nmodule.exports.generateIMEI = generateIMEI;\r\nmodule.exports.isValidIMEI = isValidIMEI;\r\n\r\n\n\n//# sourceURL=webpack://imei-gen/./node_modules/imei-generator/index.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;