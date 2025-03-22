(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5225:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/Navbar.module.css
var Navbar_module = __webpack_require__(4643);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./components/Navbar.jsx






const Navbar = () => {
  const cart = (0,external_react_redux_.useSelector)(state => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    className: (Navbar_module_default()).navbar,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
      className: (Navbar_module_default()).logo,
      children: "GamesKart"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: (Navbar_module_default()).links,
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (Navbar_module_default()).navlink,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: "Home"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (Navbar_module_default()).navlink,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/shop",
          children: "Shop"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (Navbar_module_default()).navlink,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/cart",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            children: ["Cart (", getItemsCount(), ")"]
          })
        })
      })]
    })]
  });
};

/* harmony default export */ var components_Navbar = (Navbar);
// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(2202);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer.jsx




const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: (Footer_module_default()).footer,
    children: ["Copyright ", /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: (Footer_module_default()).brand,
      children: "GamesKart"
    }), " \xA9", ' ', new Date().getFullYear()]
  });
};

/* harmony default export */ var components_Footer = (Footer);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
// EXTERNAL MODULE: ./redux/cart.slice.js
var cart_slice = __webpack_require__(2477);
;// CONCATENATED MODULE: ./redux/store.js


const reducer = {
  cart: cart_slice/* cartReducer */.C$
};
const store = (0,toolkit_.configureStore)({
  reducer
});
/* harmony default export */ var redux_store = (store);
;// CONCATENATED MODULE: ./pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: redux_store,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "wrapper",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Navbar, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
    })
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 2202:
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "Footer_footer__317iK",
	"brand": "Footer_brand__1V94a"
};


/***/ }),

/***/ 4643:
/***/ (function(module) {

// Exports
module.exports = {
	"navbar": "Navbar_navbar__3KWoz",
	"logo": "Navbar_logo__gT4EI",
	"links": "Navbar_links__IKuKL",
	"navlink": "Navbar_navlink__1Lgq-"
};


/***/ }),

/***/ 6139:
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [374,664,477], function() { return __webpack_exec__(5225); });
module.exports = __webpack_exports__;

})();