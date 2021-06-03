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

/***/ "./src/worker.js":
/*!***********************!*\
  !*** ./src/worker.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst OFFLINE_VERSION = 1\nconst CACHE_NAME = 'offline'\nconst OFFLINE_URL = 'index.html'\n\nself.addEventListener(\"install\", (event) => {\n    event.waitUntil((async () => {\n        const cache = await caches.open(CACHE_NAME);\n        await cache.add(new Request(OFFLINE_URL, {cache: \"reload\"}))\n    })())\n    self.skipWaiting();\n});\n\nself.addEventListener(\"activate\", (event) => {\n    event.waitUntil((async () => {\n        if(\"navigationPreload\" in self.registration) await self.registration.navigationPreload.enable()\n    })())\n    self.clients.claim()\n});\n\nself.addEventListener(\"fetch\", (event) => {\n    if(event.request.mode === \"navigate\") {\n        event.respondWith((async () => {\n            try {\n                const preloadResponse = await event.preloadResponse\n                if(preloadResponse) return preloadResponse\n\n                const networkResponse = await fetch(event.request)\n                return networkResponse\n            } catch (error) {\n                console.log(\"Fetch failed; returning offline page instead.\", error);\n\n                const cache = await caches.open(CACHE_NAME);\n                const cachedResponse = await cache.match(OFFLINE_URL);\n                return cachedResponse;\n            }\n        })())\n    }\n});\n\n//# sourceURL=webpack://utor-passcard/./src/worker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/worker.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;