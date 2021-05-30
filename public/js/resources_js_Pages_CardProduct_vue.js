(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_CardProduct_vue"],{

/***/ "./node_modules/@google-pay/button-element/dist/index.umd.min.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@google-pay/button-element/dist/index.umd.min.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function t(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r}function e(t,e,n,o){return new(n||(n=Promise))((function(i,a){function r(t){try{d(o.next(t))}catch(t){a(t)}}function s(t){try{d(o.throw(t))}catch(t){a(t)}}function d(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,s)}d((o=o.apply(t,e||[])).next())}))}function n(t){return t.replace(/[A-Z]+/g,t=>"-"+t).replace(/^-/,"").toLowerCase()}function o(t){return function(e,o){const i=t||n(o);e.addObservedAttribute&&e.addObservedAttribute(i),Object.defineProperty(e,o,{get(){return this.getAttribute(i)},set(t){null==t?this.removeAttribute(i):this.setAttribute(i,t),this.notifyPropertyChanged(o)},enumerable:!0,configurable:!0})}}function i(t){return t?o(t):function(t,e){Object.defineProperty(t,e,{get(){return this["$__"+e]},set(t){this["$__"+e]=t,this.notifyPropertyChanged(e)},enumerable:!0,configurable:!0})}}function a(t){return function(e,n){Object.defineProperty(e,t,{get(){return this[n]},set(t){this[n]=t},enumerable:!0,configurable:!1})}}let r={};function s(t){const e=r[t];if(e)return e;const n=new Promise((e,n)=>{const o=document.createElement("script");o.src=t,o.async=!0;const i=()=>{e()},a=()=>{o.removeEventListener("load",i),o.removeEventListener("error",a),delete r[t],o.remove(),n(new Error("Unable to load script "+t))};o.addEventListener("load",i),o.addEventListener("error",a),document.body.appendChild(o)});return r[t]=n,n}class d{constructor(t){this.handleClick=()=>e(this,void 0,void 0,(function*(){const t=this.config;if(!t)throw new Error("google-pay-button: Missing configuration");const e=this.createLoadPaymentDataRequest(t);try{const n=yield this.client.loadPaymentData(e);t.onLoadPaymentData&&t.onLoadPaymentData(n)}catch(e){"CANCELED"===e.statusCode?t.onCancel&&t.onCancel(e):t.onError?t.onError(e):console.error(e)}})),this.options=t}getElement(){return this.element}isGooglePayLoaded(){var t,e;return"google"in(window||__webpack_require__.g)&&!!(null===(e=null===(t=null===google||void 0===google?void 0:google.payments)||void 0===t?void 0:t.api)||void 0===e?void 0:e.PaymentsClient)}mount(t){return e(this,void 0,void 0,(function*(){this.isGooglePayLoaded()||(yield s("https://pay.google.com/gp/p/js/pay.js")),this.element=t,t&&(this.appendStyles(),this.config&&this.updateElement())}))}unmount(){this.element=void 0}configure(t){let e=void 0;return this.config=t,this.oldInvalidationValues&&!this.isClientInvalidated(t)||(e=this.updateElement()),this.oldInvalidationValues=this.getInvalidationValues(t),null!=e?e:Promise.resolve()}createClientOptions(t){const e={environment:t.environment,merchantInfo:this.createMerchantInfo(t)};return(t.onPaymentDataChanged||t.onPaymentAuthorized)&&(e.paymentDataCallbacks={},t.onPaymentDataChanged&&(e.paymentDataCallbacks.onPaymentDataChanged=e=>t.onPaymentDataChanged(e)||{}),t.onPaymentAuthorized&&(e.paymentDataCallbacks.onPaymentAuthorized=e=>t.onPaymentAuthorized(e)||{})),e}createIsReadyToPayRequest(t){const e=t.paymentRequest;return{apiVersion:e.apiVersion,apiVersionMinor:e.apiVersionMinor,allowedPaymentMethods:e.allowedPaymentMethods,existingPaymentMethodRequired:t.existingPaymentMethodRequired}}createLoadPaymentDataRequest(t){return Object.assign(Object.assign({},t.paymentRequest),{merchantInfo:this.createMerchantInfo(t)})}createMerchantInfo(t){const e=Object.assign({},t.paymentRequest.merchantInfo);return e.softwareInfo||(e.softwareInfo={id:this.options.softwareInfoId,version:this.options.softwareInfoVersion}),e}isMounted(){return null!=this.element&&!1!==this.element.isConnected}removeButton(){if(this.element instanceof ShadowRoot||this.element instanceof Element)for(const t of Array.from(this.element.children))"STYLE"!==t.tagName&&t.remove()}updateElement(){var t;return e(this,void 0,void 0,(function*(){if(!this.isMounted())return;const e=this.element;if(!this.config)throw new Error("google-pay-button: Missing configuration");this.removeButton(),this.client=new google.payments.api.PaymentsClient(this.createClientOptions(this.config));const n={buttonType:this.config.buttonType,buttonColor:this.config.buttonColor,buttonSizeMode:this.config.buttonSizeMode,buttonLocale:this.config.buttonLocale,onClick:this.handleClick},o=null===(t=this.element)||void 0===t?void 0:t.getRootNode();o instanceof ShadowRoot&&(n.buttonRootNode=o);const i=this.client.createButton(n);this.setClassName(e,[e.className,"not-ready"]),e.appendChild(i);let a,r=!1;try{a=yield this.client.isReadyToPay(this.createIsReadyToPayRequest(this.config)),r=a.result&&!this.config.existingPaymentMethodRequired||a.result&&a.paymentMethodPresent&&this.config.existingPaymentMethodRequired||!1}catch(t){this.config.onError?this.config.onError(t):console.error(t)}if(this.isMounted()){if(r){try{this.client.prefetchPaymentData(this.createLoadPaymentDataRequest(this.config))}catch(t){console.log("Error with prefetch",t)}this.setClassName(e,(e.className||"").split(" ").filter(t=>t&&"not-ready"!==t))}if((this.isReadyToPay!==(null==a?void 0:a.result)||this.paymentMethodPresent!==(null==a?void 0:a.paymentMethodPresent))&&(this.isReadyToPay=!!(null==a?void 0:a.result),this.paymentMethodPresent=null==a?void 0:a.paymentMethodPresent,this.config.onReadyToPayChange)){const t={isButtonVisible:r,isReadyToPay:this.isReadyToPay};this.paymentMethodPresent&&(t.paymentMethodPresent=this.paymentMethodPresent),this.config.onReadyToPayChange(t)}}}))}setClassName(t,e){const n=e.filter(t=>t).join(" ");n?t.className=n:t.removeAttribute("class")}appendStyles(){var t,e,n;if("undefined"==typeof document)return;const o=null===(t=this.element)||void 0===t?void 0:t.getRootNode(),i=`default-google-style-${this.options.cssSelector.replace(/[^\w-]+/g,"")}-${null===(e=this.config)||void 0===e?void 0:e.buttonLocale}`;if(o&&!(null===(n=o.getElementById)||void 0===n?void 0:n.call(o,i))){const t=document.createElement("style");t.id=i,t.type="text/css",t.innerHTML=`\n          ${this.options.cssSelector} {\n            display: inline-block;\n          }\n          ${this.options.cssSelector}.not-ready {\n            width: 0;\n            height: 0;\n            overflow: hidden;\n          }\n        `,o instanceof Document&&o.head?o.head.appendChild(t):o.appendChild(t)}}isClientInvalidated(t){if(!this.oldInvalidationValues)return!0;return this.getInvalidationValues(t).some((t,e)=>t!==this.oldInvalidationValues[e])}getInvalidationValues(t){var e,n;return[t.environment,t.existingPaymentMethodRequired,!!t.onPaymentDataChanged,!!t.onPaymentAuthorized,t.buttonColor,t.buttonType,t.buttonLocale,t.buttonSizeMode,t.paymentRequest.merchantInfo.merchantId,t.paymentRequest.merchantInfo.merchantName,null===(e=t.paymentRequest.merchantInfo.softwareInfo)||void 0===e?void 0:e.id,null===(n=t.paymentRequest.merchantInfo.softwareInfo)||void 0===n?void 0:n.version]}}var l;function c(t,e=0){let n;return function(...o){window.clearTimeout(n);return new Promise(i=>{n=window.setTimeout(()=>{const e=(n=void 0,t(...o));i(e)},e)})}}class u extends HTMLElement{constructor(){super(...arguments),this.manager=new d({cssSelector:"google-pay-button",softwareInfoId:"@google-pay/button-element",softwareInfoVersion:"2.3.0"}),this.initializeButton=c(()=>{if(!this.assertRequiredProperty("paymentRequest"))return;if(!this.assertRequiredProperty("environment"))return;const t={paymentRequest:this.paymentRequest,environment:this.environment,existingPaymentMethodRequired:this.existingPaymentMethodRequired,onPaymentDataChanged:this.onPaymentDataChanged,onPaymentAuthorized:this.onPaymentAuthorized,buttonColor:this.buttonColor,buttonType:this.buttonType,buttonSizeMode:this.buttonSizeMode,buttonLocale:this.buttonLocale,onReadyToPayChange:t=>{this.onReadyToPayChange&&this.onReadyToPayChange(t),this.dispatch("readytopaychange",t)},onCancel:t=>{this.onCancel&&this.onCancel(t),this.dispatch("cancel",t)},onError:t=>{var e;this.onError&&(null===(e=this.onError)||void 0===e||e.call(this,t)),this.dispatchEvent(new ErrorEvent("error",{error:t}))},onLoadPaymentData:t=>{this.onLoadPaymentData&&this.onLoadPaymentData(t),this.dispatch("loadpaymentdata",t)}};this.manager.configure(t)})}get isReadyToPay(){return this.manager.isReadyToPay}assertRequiredProperty(t){const e=this[t];return null!=e||(this.throwError(Error("Required property not set: "+t)),!1)}throwError(t){throw t}static get observedAttributes(){return u._observedAttributes}addObservedAttribute(t){u._observedAttributes.push(t)}dispatch(t,e){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:!1,detail:e}))}connectedCallback(){return e(this,void 0,void 0,(function*(){return yield this.manager.mount(this),this.initializeButton()}))}disconnectedCallback(){this.manager.unmount()}attributeChangedCallback(t){return this.initializeButton()}notifyPropertyChanged(t){return this.initializeButton()}}return u._observedAttributes=[],t([i(),a("paymentrequest")],u.prototype,"paymentRequest",void 0),t([o()],u.prototype,"environment",void 0),t([function(t,e){const o=l||n(e);t.addObservedAttribute&&t.addObservedAttribute(o),Object.defineProperty(t,e,{get(){return this.hasAttribute(o)},set(t){t?this.setAttribute(o,""):this.removeAttribute(o),this.notifyPropertyChanged(e)},enumerable:!0,configurable:!0})},a("existingpaymentmethodrequired")],u.prototype,"existingPaymentMethodRequired",void 0),t([o(),a("buttoncolor")],u.prototype,"buttonColor",void 0),t([o(),a("buttontype")],u.prototype,"buttonType",void 0),t([o(),a("buttonsizemode")],u.prototype,"buttonSizeMode",void 0),t([o(),a("buttonlocale")],u.prototype,"buttonLocale",void 0),t([i(),a("paymentDataChangedCallback"),a("paymentdatachangedcallback"),a("onpaymentdatachanged")],u.prototype,"onPaymentDataChanged",void 0),t([i(),a("paymentAuthorizedCallback"),a("paymentauthorizedcallback"),a("onpaymentauthorized")],u.prototype,"onPaymentAuthorized",void 0),t([a("readyToPayChangeCallback"),a("readytopaychangecallback"),a("onreadytopaychange")],u.prototype,"onReadyToPayChange",void 0),t([a("loadPaymentDataCallback"),a("loadpaymentdatacallback"),a("onloadpaymentdata")],u.prototype,"onLoadPaymentData",void 0),t([a("cancelCallback"),a("cancelcallback"),a("oncancel")],u.prototype,"onCancel",void 0),t([a("errorCallback"),a("errorcallback"),a("onerror")],u.prototype,"onError",void 0),customElements.define("google-pay-button",u),u}));


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CardProduct.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CardProduct.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GooglePay_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GooglePay.vue */ "./resources/js/Pages/GooglePay.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/*global axios  */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    GooglePay: _GooglePay_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      product: {
        name: "",
        cost: "",
        description: "",
        image: "",
        id: ""
      }
    };
  },
  methods: {
    read: function read() {
      var _this = this;

      var url = "api/products/".concat(this.$route.params.id);
      axios.get(url).then(function (response) {
        var product = response.data;
        _this.product.id = product.id;
        _this.product.name = product.name;
        _this.product.cost = product.cost;
        _this.product.description = product.description;
        _this.product.image = product.image;
      })["catch"](function () {});
    },
    addToCart: function addToCart(product) {
      this.$store.commit("addToCart", product);
    },
    removeFromCart: function removeFromCart(item) {
      this.$store.commit("removeFromCart", item);
    }
  },
  computed: {
    totalPrice: function totalPrice() {
      var total = 0;

      var _iterator = _createForOfIteratorHelper(this.$store.state.cart.cart),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          total += item.totalPrice;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return total.toFixed(2);
    }
  },
  created: function created() {
    this.read();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/GooglePay.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/GooglePay.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _google_pay_button_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google-pay/button-element */ "./node_modules/@google-pay/button-element/dist/index.umd.min.js");
/* harmony import */ var _google_pay_button_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_google_pay_button_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Router_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Router/index */ "./resources/js/Router/index.js");
/* harmony import */ var _Store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Store/index */ "./resources/js/Store/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "GooglePay",
  props: {
    cost: String
  },
  data: function data() {
    return {
      existingPaymentMethodRequired: true,
      buttonColor: "default",
      buttonType: "buy",
      paymentRequest: {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [{
          type: "CARD",
          parameters: {
            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
            allowedCardNetworks: ["MASTERCARD", "VISA"]
          },
          tokenizationSpecification: {
            type: "PAYMENT_GATEWAY",
            parameters: {
              gateway: "example",
              gatewayMerchantId: "exampleGatewayMerchantId"
            }
          }
        }],
        merchantInfo: {
          merchantId: "BCR2DN6TV6457CCR",
          merchantName: "ООО Рога и Копыта"
        }
      }
    };
  },
  methods: {
    onLoadPaymentData: function onLoadPaymentData(event) {
      console.log("load payment data", event.detail);
      _Store_index__WEBPACK_IMPORTED_MODULE_2__.default.commit("clearCart");
      _Router_index__WEBPACK_IMPORTED_MODULE_1__.default.push("/paySaccess");
    },
    onError: function onError(event) {
      console.error("error", event.error);
    },
    onPaymentDataAuthorized: function onPaymentDataAuthorized(paymentData) {
      console.log("payment authorized", paymentData);
      return {
        transactionState: "SUCCESS"
      };
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/CardProduct.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/CardProduct.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardProduct_vue_vue_type_template_id_3cb18db4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardProduct.vue?vue&type=template&id=3cb18db4& */ "./resources/js/Pages/CardProduct.vue?vue&type=template&id=3cb18db4&");
/* harmony import */ var _CardProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardProduct.vue?vue&type=script&lang=js& */ "./resources/js/Pages/CardProduct.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CardProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CardProduct_vue_vue_type_template_id_3cb18db4___WEBPACK_IMPORTED_MODULE_0__.render,
  _CardProduct_vue_vue_type_template_id_3cb18db4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/CardProduct.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/GooglePay.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/GooglePay.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GooglePay_vue_vue_type_template_id_159bb4d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GooglePay.vue?vue&type=template&id=159bb4d6& */ "./resources/js/Pages/GooglePay.vue?vue&type=template&id=159bb4d6&");
/* harmony import */ var _GooglePay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GooglePay.vue?vue&type=script&lang=js& */ "./resources/js/Pages/GooglePay.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _GooglePay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GooglePay_vue_vue_type_template_id_159bb4d6___WEBPACK_IMPORTED_MODULE_0__.render,
  _GooglePay_vue_vue_type_template_id_159bb4d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/GooglePay.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/CardProduct.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/CardProduct.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CardProduct.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/GooglePay.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/GooglePay.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GooglePay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GooglePay.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/GooglePay.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GooglePay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/CardProduct.vue?vue&type=template&id=3cb18db4&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/CardProduct.vue?vue&type=template&id=3cb18db4& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardProduct_vue_vue_type_template_id_3cb18db4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardProduct_vue_vue_type_template_id_3cb18db4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardProduct_vue_vue_type_template_id_3cb18db4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardProduct.vue?vue&type=template&id=3cb18db4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CardProduct.vue?vue&type=template&id=3cb18db4&");


/***/ }),

/***/ "./resources/js/Pages/GooglePay.vue?vue&type=template&id=159bb4d6&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/GooglePay.vue?vue&type=template&id=159bb4d6& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GooglePay_vue_vue_type_template_id_159bb4d6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GooglePay_vue_vue_type_template_id_159bb4d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GooglePay_vue_vue_type_template_id_159bb4d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GooglePay.vue?vue&type=template&id=159bb4d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/GooglePay.vue?vue&type=template&id=159bb4d6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CardProduct.vue?vue&type=template&id=3cb18db4&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/CardProduct.vue?vue&type=template&id=3cb18db4& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c(
        "v-card",
        { staticClass: "mx-auto my-12", attrs: { "max-width": "374" } },
        [
          _c("v-img", {
            attrs: { height: "250", src: "" + _vm.product.image }
          }),
          _vm._v(" "),
          _c("v-card-title", [
            _c("div", { staticClass: "font-weight-black" }, [
              _vm._v(_vm._s(_vm.product.name))
            ])
          ]),
          _vm._v(" "),
          _c("v-card-title", [
            _c("div", [_vm._v("Стоимость: " + _vm._s(_vm.product.cost))])
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("div", { staticClass: "text-left" }, [
              _vm._v("Описание: " + _vm._s(_vm.product.description))
            ])
          ]),
          _vm._v(" "),
          _vm.$store.state.cart.cart.length === 0
            ? _c("GooglePay", {
                attrs: {
                  cost:
                    "" +
                    (_vm.$store.state.cart.cart.length === 0
                      ? _vm.product.cost
                      : _vm.totalPrice)
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("div"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "white--text mb-2",
              attrs: { color: "black" },
              on: {
                click: function($event) {
                  return _vm.addToCart(_vm.product)
                }
              }
            },
            [_vm._v("В корзину")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.$store.state.cart.cart.length > 0
        ? _c(
            "v-card",
            { staticClass: "mx-auto my-12", attrs: { "max-width": "374" } },
            [
              _c("v-card-title", [_vm._v(" Ваша корзина ")]),
              _vm._v(" "),
              _c("v-simple-table", { staticClass: "products mt-3" }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v("Название")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [
                      _vm._v("Количество")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-center" }, [_vm._v("Сумма")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.$store.state.cart.cart, function(item) {
                      return _c("tr", { key: item.id }, [
                        _c("td", [_vm._v(_vm._s(item.name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.quantity))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.totalPrice))]),
                        _vm._v(" "),
                        item.quantity === 1
                          ? _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "red white--text px-3 py-2 rounded-lg",
                                  on: {
                                    click: function($event) {
                                      return _vm.removeFromCart(item)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-trash" })]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        item.quantity > 1
                          ? _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "red white--text px-3 py-2 rounded-lg",
                                  on: {
                                    click: function($event) {
                                      return _vm.removeFromCart(item)
                                    }
                                  }
                                },
                                [_vm._v("\n              -1\n            ")]
                              )
                            ])
                          : _vm._e()
                      ])
                    }),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "td",
                        { staticClass: "text-right", attrs: { colspan: "2" } },
                        [_vm._v("Итог:")]
                      ),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.totalPrice))])
                    ])
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("GooglePay", { attrs: { cost: "" + _vm.totalPrice } })
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/GooglePay.vue?vue&type=template&id=159bb4d6&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/GooglePay.vue?vue&type=template&id=159bb4d6& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("google-pay-button", {
    attrs: {
      environment: "TEST",
      "button-type": _vm.buttonType,
      "button-color": _vm.buttonColor,
      "existing-payment-method-required": _vm.existingPaymentMethodRequired
    },
    domProps: {
      paymentRequest: {
        apiVersion: _vm.paymentRequest.apiVersion,
        apiVersionMinor: _vm.paymentRequest.apiVersionMinor,
        allowedPaymentMethods: _vm.paymentRequest.allowedPaymentMethods,
        merchantInfo: _vm.paymentRequest.merchantInfo,
        transactionInfo: {
          totalPriceStatus: "FINAL",
          totalPriceLabel: "Total",
          totalPrice: _vm.cost,
          currencyCode: "RUB",
          countryCode: "RU"
        },
        callbackIntents: ["PAYMENT_AUTHORIZATION"]
      },
      onPaymentAuthorized: _vm.onPaymentDataAuthorized
    },
    on: { loadpaymentdata: _vm.onLoadPaymentData, error: _vm.onError }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);