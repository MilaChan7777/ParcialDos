/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Cats/Cats.ts":
/*!*************************************!*\
  !*** ./src/components/Cats/Cats.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeCat\": () => (/* binding */ AttributeCat),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_getCats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/getCats */ \"./src/components/data/getCats.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nvar AttributeCat;\n(function (AttributeCat) {\n    AttributeCat[\"tittle\"] = \"tittle\";\n    AttributeCat[\"img\"] = \"img\";\n    AttributeCat[\"description\"] = \"description\";\n})(AttributeCat || (AttributeCat = {}));\nclass Cat extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.mount();\n    }\n    mount() {\n        this.render();\n    }\n    static get observedAttributes() {\n        const attrs = {\n            tittle: null,\n            img: null,\n            description: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n        //<h1>${this.tittle}</h1>\r\n        //<img src=${this.img} alt=\"\"/>\r\n        //<p>${this.description}</p>\r\n        `;\n        }\n        const catSection = this.ownerDocument.createElement('section');\n        catSection.className = 'cat-section';\n        const title = this.ownerDocument.createElement('h1');\n        title.textContent = this.tittle || 'No hay Title';\n        catSection.appendChild(title);\n        const image = this.ownerDocument.createElement('img');\n        image.src = this.img || '';\n        image.alt = 'Cat Image';\n        catSection.appendChild(image);\n        const description = this.ownerDocument.createElement('p');\n        description.textContent = this.description || 'No hay descripción';\n        catSection.appendChild(title);\n        const button = this.ownerDocument.createElement('button');\n        button.textContent = 'Frases de gatos';\n        button.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {\n            var _b;\n            if (this.img) {\n                const catData = yield (0,_data_getCats__WEBPACK_IMPORTED_MODULE_0__.getCats)(this.img);\n                const tittle = this.ownerDocument.createElement('h1');\n                description.textContent = catData.description;\n                (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(tittle);\n            }\n        }));\n        catSection.appendChild(button);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(catSection);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cat);\ncustomElements.define('cat-card', Cat);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Cats/Cats.ts?");

/***/ }),

/***/ "./src/components/data/getCats.ts":
/*!****************************************!*\
  !*** ./src/components/data/getCats.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCats\": () => (/* binding */ getCats)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst getCats = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const dataCats = yield fetch(`https://catfact.ninja/fact`).then((res) => res.json());\n        console.log(dataCats);\n        return dataCats;\n    }\n    catch (error) {\n        console.log('error', error);\n        return error;\n    }\n});\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/data/getCats.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cat\": () => (/* reexport safe */ _Cats_Cats__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Cats_Cats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cats/Cats */ \"./src/components/Cats/Cats.ts\");\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _components_data_getCats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/data/getCats */ \"./src/components/data/getCats.ts\");\n/* harmony import */ var _components_Cats_Cats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Cats/Cats */ \"./src/components/Cats/Cats.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.FavoriteCats = [];\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const catData = yield (0,_components_data_getCats__WEBPACK_IMPORTED_MODULE_1__.getCats)(_components_Cats_Cats__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n            this.render(catData);\n        });\n    }\n    render(catData) {\n        var _a, _b, _c;\n        if (!catData) {\n            console.error(\"No data provided.\");\n            return;\n        }\n        const catSection = this.ownerDocument.createElement('section');\n        const catFavoriteSection = this.ownerDocument.createElement('section');\n        catFavoriteSection.setAttribute('id', 'cat-favorite-section');\n        const cardCat = this.ownerDocument.createElement('cat-card');\n        cardCat.setAttribute(_components_Cats_Cats__WEBPACK_IMPORTED_MODULE_2__.AttributeCat.img, catData.image);\n        cardCat.setAttribute(_components_Cats_Cats__WEBPACK_IMPORTED_MODULE_2__.AttributeCat.tittle, catData.title);\n        cardCat.setAttribute(_components_Cats_Cats__WEBPACK_IMPORTED_MODULE_2__.AttributeCat.description, catData.description);\n        const button = this.ownerDocument.createElement('button');\n        button.className = 'favorite-kitten-button';\n        button.textContent = 'Add your Favorite kitty';\n        button.addEventListener('click', () => {\n            const favoriteKitten = this.ownerDocument.createElement('cat-card');\n            favoriteKitten.setAttribute(_components_Cats_Cats__WEBPACK_IMPORTED_MODULE_2__.AttributeCat.img, catData.image);\n            favoriteKitten.setAttribute(_components_Cats_Cats__WEBPACK_IMPORTED_MODULE_2__.AttributeCat.tittle, catData.title);\n            favoriteKitten.setAttribute(_components_Cats_Cats__WEBPACK_IMPORTED_MODULE_2__.AttributeCat.description, catData.description);\n            catFavoriteSection.appendChild(favoriteKitten);\n        });\n        const catContainer = this.ownerDocument.createElement('div');\n        catContainer.appendChild(cardCat);\n        catContainer.appendChild(button);\n        catSection.appendChild(catContainer);\n        const favoriteKitty = this.ownerDocument.createElement('h1');\n        favoriteKitty.textContent = 'Favorite Kitty';\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(favoriteKitty);\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(catFavoriteSection);\n        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(catSection);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;