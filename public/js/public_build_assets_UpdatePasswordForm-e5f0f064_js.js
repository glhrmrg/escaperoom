"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["public_build_assets_UpdatePasswordForm-e5f0f064_js"],{

/***/ "./public/build/assets/PrimaryButton-7093d14f.js":
/*!*******************************************************!*\
  !*** ./public/build/assets/PrimaryButton-7093d14f.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _plugin_vue_export_helper_c27b6911_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_plugin-vue_export-helper-c27b6911.js */ "./public/build/assets/_plugin-vue_export-helper-c27b6911.js");
/* harmony import */ var _app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-86fdfe3a.js */ "./public/build/assets/app-86fdfe3a.js");


var s = {},
  i = {
    "class": "inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
  };
function a(e, c) {
  return (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_1__.o)(), (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_1__.f)("button", i, [(0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_1__.r)(e.$slots, "default")]);
}
var d = (0,_plugin_vue_export_helper_c27b6911_js__WEBPACK_IMPORTED_MODULE_0__._)(s, [["render", a]]);


/***/ }),

/***/ "./public/build/assets/TextInput-d560097e.js":
/*!***************************************************!*\
  !*** ./public/build/assets/TextInput-d560097e.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ k),
/* harmony export */   a: () => (/* binding */ S),
/* harmony export */   b: () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var _app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-86fdfe3a.js */ "./public/build/assets/app-86fdfe3a.js");

var f = {
    "class": "text-sm text-red-600"
  },
  x = {
    __name: "InputError",
    props: {
      message: {
        type: String
      }
    },
    setup: function setup(e) {
      return function (o, t) {
        return (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.i)(((0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.o)(), (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.f)("div", null, [(0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.b)("p", f, (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.t)(e.message), 1)], 512)), [[_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.p, e.message]]);
      };
    }
  },
  g = {
    "class": "block font-medium text-sm text-gray-700"
  },
  v = {
    key: 0
  },
  h = {
    key: 1
  },
  k = {
    __name: "InputLabel",
    props: {
      value: {
        type: String
      }
    },
    setup: function setup(e) {
      return function (o, t) {
        return (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.o)(), (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.f)("label", g, [e.value ? ((0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.o)(), (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.f)("span", v, (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.t)(e.value), 1)) : ((0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.o)(), (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.f)("span", h, [(0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.r)(o.$slots, "default")]))]);
      };
    }
  },
  y = ["value"],
  S = {
    __name: "TextInput",
    props: {
      modelValue: {
        type: String,
        required: !0
      }
    },
    emits: ["update:modelValue"],
    setup: function setup(e, _ref) {
      var o = _ref.expose;
      var t = (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.m)(null);
      return (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.k)(function () {
        t.value.hasAttribute("autofocus") && t.value.focus();
      }), o({
        focus: function focus() {
          return t.value.focus();
        }
      }), function (r, n) {
        return (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.o)(), (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.f)("input", {
          "class": "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
          value: e.modelValue,
          onInput: n[0] || (n[0] = function (l) {
            return r.$emit("update:modelValue", l.target.value);
          }),
          ref_key: "input",
          ref: t
        }, null, 40, y);
      };
    }
  };


/***/ }),

/***/ "./public/build/assets/UpdatePasswordForm-e5f0f064.js":
/*!************************************************************!*\
  !*** ./public/build/assets/UpdatePasswordForm-e5f0f064.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var _app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-86fdfe3a.js */ "./public/build/assets/app-86fdfe3a.js");
/* harmony import */ var _TextInput_d560097e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextInput-d560097e.js */ "./public/build/assets/TextInput-d560097e.js");
/* harmony import */ var _PrimaryButton_7093d14f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrimaryButton-7093d14f.js */ "./public/build/assets/PrimaryButton-7093d14f.js");
/* harmony import */ var _plugin_vue_export_helper_c27b6911_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_plugin-vue_export-helper-c27b6911.js */ "./public/build/assets/_plugin-vue_export-helper-c27b6911.js");




var P = (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.b)("header", null, [(0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.b)("h2", {
    "class": "text-lg font-medium text-gray-900"
  }, "Update Password"), (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.b)("p", {
    "class": "mt-1 text-sm text-gray-600"
  }, " Ensure your account is using a long, random password to stay secure. ")], -1),
  b = ["onSubmit"],
  k = {
    "class": "flex items-center gap-4"
  },
  S = {
    key: 0,
    "class": "text-sm text-gray-600"
  },
  E = {
    __name: "UpdatePasswordForm",
    setup: function setup(N) {
      var u = (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.m)(null),
        p = (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.m)(null),
        s = (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.T)({
          current_password: "",
          password: "",
          password_confirmation: ""
        }),
        f = function f() {
          s.put(route("password.update"), {
            preserveScroll: !0,
            onSuccess: function onSuccess() {
              return s.reset();
            },
            onError: function onError() {
              s.errors.password && (s.reset("password", "password_confirmation"), u.value.focus()), s.errors.current_password && (s.reset("current_password"), p.value.focus());
            }
          });
        };
      return function (U, a) {
        return (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.o)(), (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.f)("section", null, [P, (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.b)("form", {
          onSubmit: (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.e)(f, ["prevent"]),
          "class": "mt-6 space-y-6"
        }, [(0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.b)("div", null, [(0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.a)(_TextInput_d560097e_js__WEBPACK_IMPORTED_MODULE_1__._, {
          "for": "current_password",
          value: "Current Password"
        }), (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.a)(_TextInput_d560097e_js__WEBPACK_IMPORTED_MODULE_1__.a, {
          id: "current_password",
          ref_key: "currentPasswordInput",
          ref: p,
          modelValue: (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.u)(s).current_password,
          "onUpdate:modelValue": a[0] || (a[0] = function (t) {
            return (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.u)(s).current_password = t;
          }),
          type: "password",
          "class": "mt-1 block w-full",
          autocomplete: "current-password"
        }, null, 8, ["modelValue"]), (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.a)(_TextInput_d560097e_js__WEBPACK_IMPORTED_MODULE_1__.b, {
          message: (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.u)(s).errors.current_password,
          "class": "mt-2"
        }, null, 8, ["message"])]), (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.b)("div", null, [(0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.a)(_TextInput_d560097e_js__WEBPACK_IMPORTED_MODULE_1__._, {
          "for": "password",
          value: "New Password"
        }), (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.a)(_TextInput_d560097e_js__WEBPACK_IMPORTED_MODULE_1__.a, {
          id: "password",
          ref_key: "passwordInput",
          ref: u,
          modelValue: (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.u)(s).password,
          "onUpdate:modelValue": a[1] || (a[1] = function (t) {
            return (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.u)(s).password = t;
          }),
          type: "password",
          "class": "mt-1 block w-full",
          autocomplete: "new-password"
        }, null, 8, ["modelValue"]), (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.a)(_TextInput_d560097e_js__WEBPACK_IMPORTED_MODULE_1__.b, {
          message: (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.u)(s).errors.password,
          "class": "mt-2"
        }, null, 8, ["message"])]), (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.b)("div", null, [(0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.a)(_TextInput_d560097e_js__WEBPACK_IMPORTED_MODULE_1__._, {
          "for": "password_confirmation",
          value: "Confirm Password"
        }), (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.a)(_TextInput_d560097e_js__WEBPACK_IMPORTED_MODULE_1__.a, {
          id: "password_confirmation",
          modelValue: (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.u)(s).password_confirmation,
          "onUpdate:modelValue": a[2] || (a[2] = function (t) {
            return (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.u)(s).password_confirmation = t;
          }),
          type: "password",
          "class": "mt-1 block w-full",
          autocomplete: "new-password"
        }, null, 8, ["modelValue"]), (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.a)(_TextInput_d560097e_js__WEBPACK_IMPORTED_MODULE_1__.b, {
          message: (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.u)(s).errors.password_confirmation,
          "class": "mt-2"
        }, null, 8, ["message"])]), (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.b)("div", k, [(0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.a)(_PrimaryButton_7093d14f_js__WEBPACK_IMPORTED_MODULE_2__.P, {
          disabled: (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.u)(s).processing
        }, {
          "default": (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.w)(function () {
            return [(0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.d)("Save")];
          }),
          _: 1
        }, 8, ["disabled"]), (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.a)(_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.q, {
          "enter-from-class": "opacity-0",
          "leave-to-class": "opacity-0",
          "class": "transition ease-in-out"
        }, {
          "default": (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.w)(function () {
            return [(0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.u)(s).recentlySuccessful ? ((0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.o)(), (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.f)("p", S, "Saved.")) : (0,_app_86fdfe3a_js__WEBPACK_IMPORTED_MODULE_0__.g)("", !0)];
          }),
          _: 1
        })])], 40, b)]);
      };
    }
  };


/***/ }),

/***/ "./public/build/assets/_plugin-vue_export-helper-c27b6911.js":
/*!*******************************************************************!*\
  !*** ./public/build/assets/_plugin-vue_export-helper-c27b6911.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ s)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var s = function s(t, r) {
  var o = t.__vccOpts || t;
  var _iterator = _createForOfIteratorHelper(r),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        c = _step$value[0],
        e = _step$value[1];
      o[c] = e;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return o;
};


/***/ })

}]);