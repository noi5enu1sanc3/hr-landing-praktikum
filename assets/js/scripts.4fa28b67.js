/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/components/FilterOffers.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var FilterOffers = /*#__PURE__*/function () {
  function FilterOffers(buttonCheckboxSelector, buttonRadioSelector) {
    _classCallCheck(this, FilterOffers);
    this._buttonCheckboxElements = _toConsumableArray(document.querySelectorAll(buttonCheckboxSelector));
    this._buttonRadioElements = _toConsumableArray(document.querySelectorAll(buttonRadioSelector));
  }
  _createClass(FilterOffers, [{
    key: "_handleCheckboxFilter",
    value: function _handleCheckboxFilter(event) {
      event.target.classList.toggle('tabs__btn_active');
    }
  }, {
    key: "_handleRadioFilter",
    value: function _handleRadioFilter(event) {
      this._buttonRadioElements.forEach(function (element) {
        if (element !== event.target) {
          element.classList.remove('tabs__btn_active');
        }
      });
      event.target.classList.toggle('tabs__btn_active');
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;
      this._buttonCheckboxElements.forEach(function (element) {
        element.addEventListener('click', function (event) {
          return _this._handleCheckboxFilter(event);
        });
      });
      this._buttonRadioElements.forEach(function (element) {
        element.addEventListener('click', function (event) {
          return _this._handleRadioFilter(event);
        });
      });
    }
  }]);
  return FilterOffers;
}();

;// CONCATENATED MODULE: ./src/js/index.js


var filterOffers = new FilterOffers('.tabs__btn-checkbox', '.tabs__btn-radio');
filterOffers.setEventListeners();

// Создание офера
var createOffer = function createOffer(data) {
  var offer = new Offer(data, {
    titleSelector: '.tabs__content-title',
    contentSelector: '.tabs__content-text'
  }, '.tabs__navigation-item-template');
  return createOffer();
};

// Генерация
;// CONCATENATED MODULE: ./src/app.js


/******/ })()
;
//# sourceMappingURL=scripts.4fa28b67.js.map