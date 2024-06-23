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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const container = document.querySelector('.container')\n\n\n//header\nconst divHeader = document.createElement('div');\nconst imgHeader = document.createElement('img')\nimgHeader.src = '../images/photo-1920.jpg';\nimgHeader.srcset = '../images/480.jpg 480w, ../images/1024.jpg 1024w, ../images/1920.jpg 1920w';\nimgHeader.sizes = '(max-width: 480px) 480px, (max-width: 1024px) 1024px, 1920px';\nimgHeader.alt = 'Description of the photo';\ndivHeader.appendChild(imgHeader)\nconst descriptionHeader = document.createElement('div')\nconst h1Header = document.createElement('h1Header')\nh1Header.textContent = 'Lorem ipsum jdiwjowkowofjwojfjjjjjjjjjjjjjjjjjjjjjjjjj'\ndescriptionHeader.appendChild(h1Header)\ndivHeader.appendChild(descriptionHeader)\n\n\ncontainer.appendChild(divHeader)\n\n//# sourceURL=webpack://homepage/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;