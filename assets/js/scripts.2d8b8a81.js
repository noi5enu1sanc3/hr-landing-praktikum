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
  function FilterOffers(data, buttonSelectors, _ref) {
    var rendererData = _ref.rendererData;
    _classCallCheck(this, FilterOffers);
    this._data = data;
    this._rendererData = rendererData;
    this._buttonCheckboxElements = _toConsumableArray(document.querySelectorAll(buttonSelectors.buttonCheckboxSelector));
    this._buttonRadioElements = _toConsumableArray(document.querySelectorAll(buttonSelectors.buttonRadioSelector));
    this._filteringBy = new Set(); //набор уникальных значений, по которым производится фильтрация: должность, направление, вознаграждение
    this._activeFilters = []; //массив условий, по которым производится фильтрация
  }
  _createClass(FilterOffers, [{
    key: "renderData",
    value: function renderData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._data;
      this._rendererData(data);
    }
  }, {
    key: "_updateFilterConditionsSet",
    value: function _updateFilterConditionsSet() {
      var _this = this;
      //метод, обновляющий сет this._filteringBy
      if (this._activeFilters.some(function (filter) {
        return filter === 'mentor' || filter === 'reviewer';
      })) {
        this._filteringBy.add('post');
      } else {
        this._filteringBy.delete('post');
      }
      if (this._activeFilters.some(function (filter) {
        return _this._activeFilters.length !== 0 && filter !== 'mentor' && filter !== 'reviewer' && typeof filter !== 'number';
      })) {
        this._filteringBy.add('direction');
      } else {
        this._filteringBy.delete('direction');
      }
      this._activeFilters.some(function (filter) {
        return typeof filter === 'number';
      }) ? this._filteringBy.add('salary') : this._filteringBy.delete('salary');
      console.log(this._filteringBy);
    }
  }, {
    key: "_getFilterData",
    value: function _getFilterData() {
      var _this2 = this;
      this._updateFilterConditionsSet();
      return this._data.filter(function (offer) {
        return (_this2._filteringBy.has('post') //фильтруем по должности?
        ? _this2._activeFilters.includes(offer.post) : true) && (_this2._filteringBy.has('direction') //фильтруем по направлению?
        ? _this2._activeFilters.includes(offer.direction) : true) && (_this2._filteringBy.has('salary') //фильтруем по вознаграждению?
        ? offer.salary >= _this2._activeFilters.find(function (filter) {
          return typeof filter === 'number';
        }) : true);
      });
    }
  }, {
    key: "_handleCheckboxFilter",
    value: function _handleCheckboxFilter(event) {
      var _this3 = this;
      event.target.classList.toggle('tabs__btn_active');
      if (this._isButtonActive(event.target)) {
        this._activeFilters.push(this._getAttribute(event.target));
      } else {
        this._activeFilters = this._activeFilters.filter(function (item) {
          return item !== _this3._getAttribute(event.target);
        });
      }
      this.renderData(this._getFilterData());
    }
  }, {
    key: "_isButtonActive",
    value: function _isButtonActive(button) {
      return button.classList.contains('tabs__btn_active');
    }
  }, {
    key: "_getAttribute",
    value: function _getAttribute(element) {
      return element.getAttribute('data-check');
    }
  }, {
    key: "_handleRadioFilter",
    value: function _handleRadioFilter(event) {
      var _this4 = this;
      this._buttonRadioElements.forEach(function (element) {
        if (element !== event.target) {
          element.classList.remove('tabs__btn_active');
        }
      });
      event.target.classList.toggle('tabs__btn_active');
      if (this._isButtonActive(event.target) && !this._activeFilters.some(function (filter) {
        return filter === parseInt(_this4._getAttribute(event.target));
      })) {
        this._activeFilters = this._activeFilters.filter(function (item) {
          return typeof item === 'number' ? item === parseInt(_this4._getAttribute(event.target)) : true;
        });
        this._activeFilters.push(parseInt(this._getAttribute(event.target)));
      } else {
        this._activeFilters = this._activeFilters.filter(function (item) {
          return item !== parseInt(_this4._getAttribute(event.target));
        });
      }
      console.log(this._activeFilters);
      this.renderData(this._getFilterData());
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this5 = this;
      this._buttonCheckboxElements.forEach(function (element) {
        element.addEventListener('click', function (event) {
          return _this5._handleCheckboxFilter(event);
        });
      });
      this._buttonRadioElements.forEach(function (element) {
        element.addEventListener('click', function (event) {
          return _this5._handleRadioFilter(event);
        });
      });
    }
  }]);
  return FilterOffers;
}();

;// CONCATENATED MODULE: ./src/js/components/Offer.js
function Offer_toConsumableArray(arr) { return Offer_arrayWithoutHoles(arr) || Offer_iterableToArray(arr) || Offer_unsupportedIterableToArray(arr) || Offer_nonIterableSpread(); }
function Offer_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Offer_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Offer_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Offer_arrayLikeToArray(o, minLen); }
function Offer_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function Offer_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Offer_arrayLikeToArray(arr); }
function Offer_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function Offer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Offer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function Offer_createClass(Constructor, protoProps, staticProps) { if (protoProps) Offer_defineProperties(Constructor.prototype, protoProps); if (staticProps) Offer_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Offer = /*#__PURE__*/function () {
  function Offer(data, cardSelectors) {
    Offer_classCallCheck(this, Offer);
    // Шаблон
    this._templateContent = document.querySelector(cardSelectors.itemTemplateSelector).content;
    // Данные
    this._name = data.name;
    this._text = data.text;
    // Селекторы
    this._itemSelector = cardSelectors.itemSelector;
    this._titleSector = cardSelectors.titleSelector;
    this._contentSelector = cardSelectors.contentSelector;
  }

  // Получаем шаблон предложения
  Offer_createClass(Offer, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var itemElement = this._templateContent.querySelector(this._itemSelector).cloneNode(true);
      return itemElement;
    }

    // Генерируем элемент (оффер)
  }, {
    key: "generateOffer",
    value: function generateOffer() {
      this._itemElement = this._getTemplate();
      this._titleElement = this._itemElement.querySelector(this._titleSector);
      this._contentElements = Offer_toConsumableArray(this._itemElement.querySelectorAll(this._contentSelector));
      this._titleElement.textContent = this._name;
      this._contentElements[0].textContent = 'Оплата за ведение группы';
      this._contentElements[1].textContent = this._text;
      return this._itemElement;
    }
  }]);
  return Offer;
}();
;// CONCATENATED MODULE: ./src/js/components/List.js
function List_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function List_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function List_createClass(Constructor, protoProps, staticProps) { if (protoProps) List_defineProperties(Constructor.prototype, protoProps); if (staticProps) List_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var List = /*#__PURE__*/function () {
  function List(_ref, containerSelectors) {
    var renderer = _ref.renderer;
    List_classCallCheck(this, List);
    this._renderer = renderer;
    this._containerElement = document.querySelector(containerSelectors.listSelector);
  }
  List_createClass(List, [{
    key: "render",
    value: function render(items) {
      var _this = this;
      items.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(element) {
      this._containerElement.prepend(element);
    }
  }, {
    key: "clearList",
    value: function clearList() {
      this._containerElement.innerHTML = '';
    }
  }]);
  return List;
}();
;// CONCATENATED MODULE: ./src/js/components/Accordion.js
function Accordion_toConsumableArray(arr) { return Accordion_arrayWithoutHoles(arr) || Accordion_iterableToArray(arr) || Accordion_unsupportedIterableToArray(arr) || Accordion_nonIterableSpread(); }
function Accordion_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Accordion_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Accordion_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Accordion_arrayLikeToArray(o, minLen); }
function Accordion_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function Accordion_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Accordion_arrayLikeToArray(arr); }
function Accordion_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function Accordion_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Accordion_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function Accordion_createClass(Constructor, protoProps, staticProps) { if (protoProps) Accordion_defineProperties(Constructor.prototype, protoProps); if (staticProps) Accordion_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Accordion = /*#__PURE__*/function () {
  function Accordion(accordionSelectors) {
    Accordion_classCallCheck(this, Accordion);
    this._accordionButtonElements = Accordion_toConsumableArray(document.querySelectorAll(accordionSelectors.accordionButton));
  }
  Accordion_createClass(Accordion, [{
    key: "_toggleAccordion",
    value: function _toggleAccordion(element) {
      var currentButtonAtrElement = element.getAttribute('aria-expanded');
      console.log(currentButtonAtrElement);
      for (var i = 0; i < this._accordionButtonElements.length; i++) {
        this._accordionButtonElements[i].setAttribute('aria-expanded', 'false');
      }
      if (currentButtonAtrElement === 'false') {
        element.setAttribute('aria-expanded', 'true');
      }
    }
  }, {
    key: "setEventListener",
    value: function setEventListener() {
      var _this = this;
      this._accordionButtonElements.forEach(function (element) {
        element.addEventListener('click', function () {
          return _this._toggleAccordion(element);
        });
      });
    }
  }]);
  return Accordion;
}();
;// CONCATENATED MODULE: ./src/js/components/RoleCard.js
function RoleCard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function RoleCard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function RoleCard_createClass(Constructor, protoProps, staticProps) { if (protoProps) RoleCard_defineProperties(Constructor.prototype, protoProps); if (staticProps) RoleCard_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var RoleCard = /*#__PURE__*/function () {
  function RoleCard(cardSelector, hiddenCardSelector, visiblePartSelector, slidingPartSelector, slidingPartContentSelector, openButtonSelector, closeButtonSelector, openedContainerClass, openedContentClass, openedItemClass, closedItemClass, hiddenClass) {
    RoleCard_classCallCheck(this, RoleCard);
    this._card = document.querySelector(cardSelector);
    this._openButton = this._card.querySelector(openButtonSelector);
    this._closeButton = this._card.querySelector(closeButtonSelector);
    this._visiblePart = this._card.querySelector(visiblePartSelector);
    this._slidingPart = this._card.querySelector(slidingPartSelector);
    this._slidingContent = this._slidingPart.querySelector(slidingPartContentSelector);
    this._hiddenCard = document.querySelector(hiddenCardSelector);
    this._openedContainerClass = openedContainerClass;
    this._openedContentClass = openedContentClass;
    this._openedItemClass = openedItemClass;
    this._closedItemClass = closedItemClass;
    this._hiddenClass = hiddenClass;
  }
  RoleCard_createClass(RoleCard, [{
    key: "_toggle",
    value: function _toggle() {
      this._openButton.classList.toggle(this._hiddenClass);
      this._closeButton.classList.toggle(this._hiddenClass);
      this._slidingPart.classList.toggle(this._openedContainerClass);
      this._hiddenCard.classList.toggle(this._closedItemClass);
      this._card.classList.toggle(this._openedItemClass);
      this._slidingContent.classList.toggle(this._openedContentClass);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      this._openButton.addEventListener('click', this._toggle.bind(this));
      this._closeButton.addEventListener('click', this._toggle.bind(this));
    }
  }]);
  return RoleCard;
}();

;// CONCATENATED MODULE: ./src/js/utils/offersData.json
const offersData_namespaceObject = JSON.parse('[{"post":"mentor","direction":"programming","name":"Наставник на курс «Мидл фронтенд-разработчик»","text":"В среднем 35 000₽","salary":35000},{"post":"mentor","direction":"design","name":"Наставник на курс «Разработчик C++»","text":"В среднем 45 000 ₽ в месяц","salary":45000},{"post":"mentor","direction":"design","name":"Наставник на курс «Дизайнер интерфейсов»","text":"В среднем 40 000₽","salary":40000},{"post":"mentor","direction":"design","name":"Наставник на курс «Графический дизайнер»","text":"В среднем 35 000₽","salary":35000},{"post":"mentor","direction":"marketing","name":"Наставник на курс «Графический дизайнер»","text":"В среднем 30 000₽","salary":30000},{"post":"mentor","direction":"marketing","name":"Наставник на курс «Интернет-маркетолог»","text":"В среднем 50 000₽","salary":50000},{"post":"mentor","direction":"management","name":"Наставник на курс «Менеджер проектов»","text":"В среднем 65 000₽","salary":65000},{"post":"reviewer","direction":"programming","name":"Ревьювер на курс «Мидл фронтенд-разработчик»","text":"В среднем 35 000₽","salary":35000},{"post":"reviewer","direction":"programming","name":"Ревьювер на курс «Разработчик C++»","text":"В среднем 45 000 ₽ в месяц","salary":45000},{"post":"reviewer","direction":"design","name":"Ревьювер на курс «Дизайнер интерфейсов»","text":"В среднем 40 000₽","salary":40000},{"post":"reviewer","direction":"design","name":"Ревьювер на курс «Графический дизайнер»","text":"В среднем 35 000₽","salary":35000},{"post":"reviewer","direction":"marketing","name":"Ревьювер на курс «Графический дизайнер»","text":"В среднем 30 000₽","salary":30000},{"post":"reviewer","direction":"marketing","name":"Ревьювер на курс «Интернет-маркетолог»","text":"В среднем 50 000₽","salary":50000},{"post":"reviewer","direction":"Менеджер проектов","name":"Ревьювер на курс «Мидл фронтенд-разработчик»","text":"В среднем 65 000₽","salary":65000}]');
;// CONCATENATED MODULE: ./src/js/utils/constants.js
var ROLE_CARD_SELECTOR_CONFIG = {
  leftCardSelector: '.roles__item_left',
  rightCardSelector: '.roles__item_right',
  visiblePartSelector: '.roles__main',
  slidingPartSelector: '.roles__details',
  slidingPartContentSelector: '.roles__details-content',
  //for additional effects e.g. text animation
  openButtonSelector: '.roles__open-btn',
  closeButtonSelector: '.roles__close-btn'
};
var ROLE_CARD_CLASS_CONFIG = {
  openedContainerLeftClass: 'roles__details_opened-left',
  openedContainerRightClass: 'roles__details_opened-right',
  openedContentClass: 'roles__details-content_open',
  cardOpenedClass: 'roles__item_opened',
  hidingPartLeftClass: 'roles__item_closed-left',
  hidingPartRightClass: 'roles__item_closed-right',
  toggleBtnCloseStateClass: 'roles__btn_close',
  hiddenClass: 'roles_visually-hidden'
};
var BUTTON_TABS_CONFIG = {
  buttonCheckboxSelector: '.tabs__btn-checkbox',
  buttonRadioSelector: '.tabs__btn-radio'
};
var OFFERS_ITEM_SELECTOR_CONFIG = {
  listSelector: '.tabs__content-list',
  itemTemplateSelector: '.tabs__content-item-template',
  itemSelector: '.tabs__content-item',
  titleSelector: '.tabs__content-title',
  contentSelector: '.tabs__content-text'
};
var ACCORDION_SELECTOR_CONFIG = {
  accordionButton: '.accordion__header'
};
;// CONCATENATED MODULE: ./src/js/index.js







var roleCardLeft = new RoleCard(ROLE_CARD_SELECTOR_CONFIG.leftCardSelector, ROLE_CARD_SELECTOR_CONFIG.rightCardSelector, ROLE_CARD_SELECTOR_CONFIG.visiblePartSelector, ROLE_CARD_SELECTOR_CONFIG.slidingPartSelector, ROLE_CARD_SELECTOR_CONFIG.slidingPartContentSelector, ROLE_CARD_SELECTOR_CONFIG.openButtonSelector, ROLE_CARD_SELECTOR_CONFIG.closeButtonSelector, ROLE_CARD_CLASS_CONFIG.openedContainerLeftClass, ROLE_CARD_CLASS_CONFIG.openedContentClass, ROLE_CARD_CLASS_CONFIG.cardOpenedClass, ROLE_CARD_CLASS_CONFIG.hidingPartRightClass, ROLE_CARD_CLASS_CONFIG.hiddenClass);
roleCardLeft.setEventListeners();
var roleCardRight = new RoleCard(ROLE_CARD_SELECTOR_CONFIG.rightCardSelector, ROLE_CARD_SELECTOR_CONFIG.leftCardSelector, ROLE_CARD_SELECTOR_CONFIG.visiblePartSelector, ROLE_CARD_SELECTOR_CONFIG.slidingPartSelector, ROLE_CARD_SELECTOR_CONFIG.slidingPartContentSelector, ROLE_CARD_SELECTOR_CONFIG.openButtonSelector, ROLE_CARD_SELECTOR_CONFIG.closeButtonSelector, ROLE_CARD_CLASS_CONFIG.openedContainerRightClass, ROLE_CARD_CLASS_CONFIG.openedContentClass, ROLE_CARD_CLASS_CONFIG.cardOpenedClass, ROLE_CARD_CLASS_CONFIG.hidingPartLeftClass, ROLE_CARD_CLASS_CONFIG.hiddenClass);
roleCardRight.setEventListeners();

// Создание офера
var createOffer = function createOffer(data) {
  var offer = new Offer(data, OFFERS_ITEM_SELECTOR_CONFIG);
  return offer.generateOffer();
};
var offersList = new List({
  renderer: function renderer(item) {
    var offer = createOffer(item);
    offersList.addItem(offer);
  }
}, OFFERS_ITEM_SELECTOR_CONFIG);
var filterOffers = new FilterOffers(offersData_namespaceObject, BUTTON_TABS_CONFIG, {
  rendererData: function rendererData(data) {
    offersList.clearList();
    offersList.render(data);
  }
});
filterOffers.setEventListeners();
var accordion = new Accordion(ACCORDION_SELECTOR_CONFIG);
accordion.setEventListener();
;// CONCATENATED MODULE: ./src/app.js


/******/ })()
;
//# sourceMappingURL=scripts.2d8b8a81.js.map