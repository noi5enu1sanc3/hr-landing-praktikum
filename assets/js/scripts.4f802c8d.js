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
  function FilterOffers(data, buttonsConfig, _ref, _ref2) {
    var rendererData = _ref.rendererData;
    var filterUtils = _ref2.filterUtils;
    _classCallCheck(this, FilterOffers);
    this._data = data;
    this._rendererData = rendererData;
    this._buttonCheckboxElements = _toConsumableArray(document.querySelectorAll(buttonsConfig.buttonCheckboxSelector));
    this._buttonRadioElements = _toConsumableArray(document.querySelectorAll(buttonsConfig.buttonRadioSelector));
    this._buttonResetElement = document.querySelector(buttonsConfig.buttonResetSelector);
    this._activeButtonClass = buttonsConfig.activeButtonClass;
    this._hiddenResetButtonClass = buttonsConfig.hiddenResetButtonClass;
    this._shouldFilterByPost = filterUtils.filterByPost;
    this._shouldFilterByDirection = filterUtils.filterByDirection;
    this._shouldFilterBySalary = filterUtils.filterBySalary;
    this._filteringBy = new Set(); //набор уникальных типов, по которым производится фильтрация: должность, направление, вознаграждение
    this._activeFilters = []; //массив всех условий, по которым производится фильтрация
  }
  _createClass(FilterOffers, [{
    key: "getFilterData",
    value: function getFilterData() {}
  }, {
    key: "_resetFilters",
    value: function _resetFilters() {
      var _this = this;
      this._filteringBy.clear();
      this._activeFilters = [];
      this._buttonCheckboxElements.forEach(function (element) {
        return element.classList.remove(_this._activeButtonClass);
      });
      this._buttonRadioElements.forEach(function (element) {
        return element.classList.remove(_this._activeButtonClass);
      });
      this.renderData(this._getFilterData());
    }
  }, {
    key: "_handleResetButtonDisplay",
    value: function _handleResetButtonDisplay() {
      this._activeFilters.length === 0 ? this._buttonResetElement.classList.add(this._hiddenResetButtonClass) : this._buttonResetElement.classList.remove(this._hiddenResetButtonClass);
    }
  }, {
    key: "renderData",
    value: function renderData(data) {
      this._handleResetButtonDisplay();
      this._rendererData(data);
    }
  }, {
    key: "_updateFilterConditionsSet",
    value: function _updateFilterConditionsSet() {
      //метод, обновляющий сет this._filteringBy
      this._shouldFilterByPost(this._activeFilters) ? this._filteringBy.add('post') : this._filteringBy.delete('post');
      this._shouldFilterByDirection(this._activeFilters) ? this._filteringBy.add('direction') : this._filteringBy.delete('direction');
      this._shouldFilterBySalary(this._activeFilters) ? this._filteringBy.add('salary') : this._filteringBy.delete('salary');
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
      event.target.classList.toggle(this._activeButtonClass);
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
      return button.classList.contains(this._activeButtonClass);
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
          element.classList.remove(_this4._activeButtonClass);
        }
      });
      event.target.classList.toggle(this._activeButtonClass);
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
      this._buttonResetElement.addEventListener('click', function () {
        return _this5._resetFilters();
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
;// CONCATENATED MODULE: ./src/js/components/Quiz.js
function Quiz_toConsumableArray(arr) { return Quiz_arrayWithoutHoles(arr) || Quiz_iterableToArray(arr) || Quiz_unsupportedIterableToArray(arr) || Quiz_nonIterableSpread(); }
function Quiz_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Quiz_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Quiz_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Quiz_arrayLikeToArray(o, minLen); }
function Quiz_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function Quiz_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Quiz_arrayLikeToArray(arr); }
function Quiz_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function Quiz_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Quiz_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function Quiz_createClass(Constructor, protoProps, staticProps) { if (protoProps) Quiz_defineProperties(Constructor.prototype, protoProps); if (staticProps) Quiz_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Quiz = /*#__PURE__*/function () {
  function Quiz(buttonsConfig, quizContentConfig, data) {
    Quiz_classCallCheck(this, Quiz);
    this._progressButtons = Quiz_toConsumableArray(document.querySelectorAll(buttonsConfig.progressButtonsSelector));
    this._optionButtons = Quiz_toConsumableArray(document.querySelectorAll(buttonsConfig.optionButtonsSelector));
    this._currentProgressClass = buttonsConfig.currentProgressClass;
    this._restartButton = document.querySelector(buttonsConfig.restartButtonSelector);
    this._currentQuestionElement = document.querySelector(quizContentConfig.questionNumberSelector);
    this._questionTextElement = document.querySelector(quizContentConfig.questionTextSelector);
    this._optionElements = Quiz_toConsumableArray(document.querySelectorAll(quizContentConfig.optionsTextSelector));
    this._quizBlockElement = document.querySelector(quizContentConfig.quizBlockSelector);
    this._resultBlockElement = document.querySelector(quizContentConfig.resultBlockSelector);
    this._resultTextElement = document.querySelector(quizContentConfig.resultTextSelector);
    this._hiddenClass = quizContentConfig.hiddenContentClass;
    this._aquamarineTextStyleClass = quizContentConfig.resultAquamarineTextClass;
    this._yellowTextStyleClass = quizContentConfig.resultYellowTextClass;
    this._data = data;
    this._currentQuestion = 1;
    this._result = 0; // if < 0 mentor, if > 0 reviewer
  }
  Quiz_createClass(Quiz, [{
    key: "startQuiz",
    value: function startQuiz() {
      this._quizBlockElement.classList.remove(this._hiddenClass);
      this._resultBlockElement.classList.add(this._hiddenClass);
      this._currentQuestion = 1;
      this._result = 0;
      this._renderQuiz();
    }
  }, {
    key: "_renderQuiz",
    value: function _renderQuiz() {
      this._renderCurrentQuizState(this._data[this._currentQuestion - 1]);
    }
  }, {
    key: "_renderCurrentQuizState",
    value: function _renderCurrentQuizState(item) {
      this._renderProgressBar();
      this._currentQuestionElement.textContent = this._currentQuestion;
      this._question = item.question;
      this._option1 = item.option1;
      this._option2 = item.option2;
      this._questionTextElement.textContent = this._question;
      this._optionElements[0].textContent = this._option1.text;
      this._optionElements[0].setAttribute('data-key', "".concat(this._option1.result));
      this._optionElements[1].textContent = this._option2.text;
      this._optionElements[1].setAttribute('data-key', "".concat(this._option2.result));
    }
  }, {
    key: "_getQuestionNumber",
    value: function _getQuestionNumber(element) {
      return parseInt(element.getAttribute('data-number'));
    }
  }, {
    key: "_renderQuestion",
    value: function _renderQuestion() {
      this._currentQuestionElement.textContent = this._currentQuestion;
    }
  }, {
    key: "_renderProgressBar",
    value: function _renderProgressBar() {
      var _this = this;
      this._progressButtons.forEach(function (button) {
        return button.classList.remove(_this._currentProgressClass);
      });
      this._progressButtons.slice(0, this._currentQuestion).forEach(function (button) {
        return button.classList.add(_this._currentProgressClass);
      });
    }
  }, {
    key: "_renderResult",
    value: function _renderResult() {
      if (this._result < 0) {
        this._resultTextElement.classList.add(this._aquamarineTextStyleClass);
        this._resultTextElement.textContent = 'Наставник';
      } else {
        this._resultTextElement.classList.add(this._yellowTextStyleClass);
        this._resultTextElement.textContent = 'Ревьюер';
      }
      this._quizBlockElement.classList.add(this._hiddenClass);
      this._resultBlockElement.classList.remove(this._hiddenClass);
    }
  }, {
    key: "_addAnswer",
    value: function _addAnswer(event) {
      this._currentQuestion += 1;
      this._renderQuestion();
      this._renderProgressBar();
      if (event.currentTarget.getAttribute('data-key') === 'mentor') {
        this._result -= 1;
      } else {
        this._result += 1;
      }
      if (this._currentQuestion > this._data.length) {
        this._renderResult();
      } else {
        this._renderQuiz();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      this._optionButtons.forEach(function (button) {
        return button.addEventListener('click', function (event) {
          return _this2._addAnswer(event);
        });
      });
      this._restartButton.addEventListener('click', function () {
        return _this2.startQuiz();
      });
    }
  }]);
  return Quiz;
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
const offersData_namespaceObject = JSON.parse('[{"post":"mentor","direction":"programming","name":"Наставник на курс «Мидл фронтенд-разработчик»","text":"В среднем 35 000₽","salary":35000},{"post":"mentor","direction":"programming","name":"Наставник на курс «Разработчик C++»","text":"В среднем 45 000 ₽ в месяц","salary":45000},{"post":"mentor","direction":"design","name":"Наставник на курс «Дизайнер интерфейсов»","text":"В среднем 40 000₽","salary":40000},{"post":"mentor","direction":"design","name":"Наставник на курс «Графический дизайнер»","text":"В среднем 35 000₽","salary":35000},{"post":"mentor","direction":"marketing","name":"Наставник на курс «Графический дизайнер»","text":"В среднем 30 000₽","salary":30000},{"post":"mentor","direction":"marketing","name":"Наставник на курс «Интернет-маркетолог»","text":"В среднем 50 000₽","salary":50000},{"post":"mentor","direction":"management","name":"Наставник на курс «Менеджер проектов»","text":"В среднем 65 000₽","salary":65000},{"post":"reviewer","direction":"programming","name":"Ревьювер на курс «Мидл фронтенд-разработчик»","text":"В среднем 35 000₽","salary":35000},{"post":"reviewer","direction":"programming","name":"Ревьювер на курс «Разработчик C++»","text":"В среднем 45 000 ₽ в месяц","salary":45000},{"post":"reviewer","direction":"design","name":"Ревьювер на курс «Дизайнер интерфейсов»","text":"В среднем 40 000₽","salary":40000},{"post":"reviewer","direction":"design","name":"Ревьювер на курс «Графический дизайнер»","text":"В среднем 35 000₽","salary":35000},{"post":"reviewer","direction":"marketing","name":"Ревьювер на курс «Графический дизайнер»","text":"В среднем 30 000₽","salary":30000},{"post":"reviewer","direction":"marketing","name":"Ревьювер на курс «Интернет-маркетолог»","text":"В среднем 50 000₽","salary":50000},{"post":"reviewer","direction":"programming","name":"Ревьювер на курс «Мидл фронтенд-разработчик»","text":"В среднем 65 000₽","salary":65000}]');
;// CONCATENATED MODULE: ./src/js/utils/quizData.json
const quizData_namespaceObject = JSON.parse('[{"question":"«У меня точно есть лидерские качества, я умею вдохновлять и вести людей за собой» — сказали бы так про себя?","option1":{"text":"Конечно! Что есть, то есть.","result":"mentor"},"option2":{"text":"Скорее нет, но хочу работать над этим.","result":"reviewer"}},{"question":"С лидерством разобрались, а вот умение поддержать и подбодрить человека у вас есть?","option1":{"text":"Да! Не знаю, откуда это во мне.","result":"mentor"},"option2":{"text":"Нет, обычно мне сложно подобрать нужные слова.","result":"reviewer"}},{"question":"Что выберете — живое общение или переписку?","option1":{"text":"Всегда за первое, однозначно!","result":"mentor"},"option2":{"text":"Второе. Почти всё можно легко обсудить в тексте.","result":"reviewer"}},{"question":"Только честно, у вас получается сохранять терпение и сосредоточенно выполнять монотонную работу?","option1":{"text":"О, нет… Не люблю таким заниматься.","result":"mentor"},"option2":{"text":"Да! Усидчивость — моё второе имя.","result":"reviewer"}},{"question":"Предположим, вас просят выступить перед аудиторией — ваша реакция?","option1":{"text":"Пф, меня и просить не надо! Дайте 10 минут на подготовку и могу начинать.","result":"mentor"},"option2":{"text":"Сделаю вид, что меня нет. Выступать — это дикий стресс.","result":"reviewer"}},{"question":"Разберём ещё одну ситуацию. Представим, вы проверяете домашнее задание студента, а в нём — катастрофическое количество ошибок. Что больше похоже на вас:","option1":{"text":"Найду этого студента и расскажу, как всё исправить. Готов объяснять, пока не поймёт на 100%.","result":"mentor"},"option2":{"text":"Отмечу все ошибки и покажу, что нужно исправить. Пусть ещё раз подумает и пересдаст работу.","result":"reviewer"}},{"question":"Как бы вы охарактеризовали этап, на котором вы сейчас находитесь?","option1":{"text":"Уже накопил кучу интересных кейсов и хочу ими поделиться!","result":"mentor"},"option2":{"text":"Пока нарабатываю личный опыт и коплю интересные кейсы в работе.","result":"reviewer"}},{"question":"На ваш взгляд, самое крутое в профессии учителя — это…","option1":{"text":"Получать кучу конфет и цветов на День Учителя.","result":"mentor"},"option2":{"text":"Ставить оценки в тетрадях красной ручкой!","result":"reviewer"}},{"question":"Какое действие тебе сейчас сильнее хочется осуществить?","option2":{"text":"Оценить тест","result":"mentor"},"option1":{"text":"Дать себе напутственную речь","result":"reviewer"}}]');
;// CONCATENATED MODULE: ./src/js/utils/filterHelper.js
var filterByPost = function filterByPost(data) {
  return data.some(function (item) {
    return item === 'mentor' || item === 'reviewer';
  });
};
var filterByDirection = function filterByDirection(data) {
  return data.some(function (item) {
    return item === 'management' || item === 'marketing' || item === 'design' || item === 'programming';
  });
};
var filterBySalary = function filterBySalary(data) {
  return data.some(function (item) {
    return typeof item === 'number';
  });
};
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
  buttonRadioSelector: '.tabs__btn-radio',
  buttonResetSelector: '.tabs__btn-reset',
  activeButtonClass: 'tabs__btn_active',
  hiddenResetButtonClass: 'tabs__btn-reset_hidden'
};
var OFFERS_ITEM_SELECTOR_CONFIG = {
  listSelector: '.tabs__content-list',
  itemTemplateSelector: '.tabs__content-item-template',
  itemSelector: '.tabs__content-link',
  titleSelector: '.tabs__content-title',
  contentSelector: '.tabs__content-text',
  paginationListSelector: '.tabs__pagination-list',
  paginationTemplateSelector: '.tabs_pagination-item-template',
  paginationItemSelector: '.tabs__pagination-item'
};
var ACCORDION_SELECTOR_CONFIG = {
  accordionButton: '.accordion__header'
};
var BURGER_NAME_CONFIG = {
  burgerOpeningButtonName: 'burger',
  burgerClosingButtonName: 'header__menu-close-btn',
  headerNavigationMenuName: 'header__menu'
};
var VIDEO_SELECTOR_CONFIG = {
  videoSelector: '.video-history__video',
  videoButtonSelector: '.video-history__btn'
};
var QUIZ_BUTTONS_CONFIG = {
  progressButtonsSelector: '.quiz__progress-bar-item',
  optionButtonsSelector: '.quiz__option',
  currentProgressClass: 'quiz__progress-bar-item_active',
  restartButtonSelector: '.quiz__restart-btn'
};
var QUIZ_CONTENT_CONFIG = {
  quizBlockSelector: '.quiz__questions-block',
  resultBlockSelector: '.quiz__result-block',
  resultTextSelector: '.quiz__result-role',
  resultYellowTextClass: 'quiz__result-role_accent_yellow',
  resultAquamarineTextClass: 'quiz__result-role_accent_aquamarine',
  questionNumberSelector: '.quiz__question-number',
  questionTextSelector: '.quiz__question',
  optionsTextSelector: '.quiz__option',
  hiddenContentClass: 'quiz__hidden'
};
var FORM_SELECTOR_CONFIG = {
  postSelector: 'post',
  directionSelector: 'direction',
  specializationItemTemplateSelector: 'specialization__item-template',
  specializationItemSelector: 'specialization__item',
  specializationContainerSelector: 'specialization'
};
;// CONCATENATED MODULE: ./src/js/components/Burger.js
function Burger_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Burger_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function Burger_createClass(Constructor, protoProps, staticProps) { if (protoProps) Burger_defineProperties(Constructor.prototype, protoProps); if (staticProps) Burger_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Burger = /*#__PURE__*/function () {
  function Burger(burgerSelectors) {
    Burger_classCallCheck(this, Burger);
    this._burgerOpeningButtonName = burgerSelectors.burgerOpeningButtonName;
    this._burgerClosingButtonName = burgerSelectors.burgerClosingButtonName;
    this._headerNavigationMenuName = burgerSelectors.headerNavigationMenuName;
    this._burgerOpeningButtonElement = document.querySelector(".".concat(this._burgerOpeningButtonName));
    this._burgerClosingButtonElement = document.querySelector(".".concat(this._burgerClosingButtonName));
    this._headerNavigationMenuElement = document.querySelector(".".concat(this._headerNavigationMenuName));
  }
  Burger_createClass(Burger, [{
    key: "_openMenu",
    value: function _openMenu() {
      console.log(this._headerNavigationMenuElement);
      this._headerNavigationMenuElement.classList.add("".concat(this._headerNavigationMenuName, "_is-active"));
    }
  }, {
    key: "_closeMenu",
    value: function _closeMenu() {
      this._headerNavigationMenuElement.classList.remove("".concat(this._headerNavigationMenuName, "_is-active"));
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;
      this._burgerOpeningButtonElement.addEventListener('click', function () {
        return _this._openMenu();
      });
      this._burgerClosingButtonElement.addEventListener('click', function () {
        return _this._closeMenu();
      });
    }
  }]);
  return Burger;
}();
;// CONCATENATED MODULE: ./src/js/components/VideoLoad.js
function VideoLoad_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function VideoLoad_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function VideoLoad_createClass(Constructor, protoProps, staticProps) { if (protoProps) VideoLoad_defineProperties(Constructor.prototype, protoProps); if (staticProps) VideoLoad_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var VideoLoad = /*#__PURE__*/function () {
  function VideoLoad(videoSelectors) {
    VideoLoad_classCallCheck(this, VideoLoad);
    this._videoElement = document.querySelector(videoSelectors.videoSelector);
    this._videoButtonSelector = document.querySelector(videoSelectors.videoButtonSelector);
  }
  VideoLoad_createClass(VideoLoad, [{
    key: "_activateVideo",
    value: function _activateVideo() {
      console.log(this._videoElement);
      this._videoElement.classList.add('video-history__video_is-played');
      this._videoElement.autoplay = true;
      this._videoElement.load();
    }
  }, {
    key: "setEventListener",
    value: function setEventListener() {
      var _this = this;
      this._videoButtonSelector.addEventListener('click', function () {
        return _this._activateVideo();
      });
    }
  }]);
  return VideoLoad;
}();
;// CONCATENATED MODULE: ./src/js/components/AnchorScroll.js
function AnchorScroll_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function AnchorScroll_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function AnchorScroll_createClass(Constructor, protoProps, staticProps) { if (protoProps) AnchorScroll_defineProperties(Constructor.prototype, protoProps); if (staticProps) AnchorScroll_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var AnchorScroll = /*#__PURE__*/function () {
  function AnchorScroll(documentElement) {
    AnchorScroll_classCallCheck(this, AnchorScroll);
    this._documentElement = documentElement;
  }
  AnchorScroll_createClass(AnchorScroll, [{
    key: "setAnchorScroll",
    value: function setAnchorScroll() {
      this._documentElement.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (event) {
          event.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    }
  }]);
  return AnchorScroll;
}();
;// CONCATENATED MODULE: ./src/js/components/Pagination.js
function Pagination_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Pagination_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function Pagination_createClass(Constructor, protoProps, staticProps) { if (protoProps) Pagination_defineProperties(Constructor.prototype, protoProps); if (staticProps) Pagination_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Pagination = /*#__PURE__*/function () {
  function Pagination(data, configSelectors, _ref) {
    var rendererData = _ref.rendererData;
    Pagination_classCallCheck(this, Pagination);
    this._data = data;
    this._rendererData = rendererData;
    // Шаблон
    this._templatePaginationTemplate = document.querySelector(configSelectors.paginationTemplateSelector).content;

    // Селекторы
    this._paginationItemSelector = configSelectors.paginationItemSelector;
    this._paginationListElement = document.querySelector(configSelectors.paginationListSelector);
    this._currentPageClass = configSelectors.currentPageClass;
    this._itemsPerPage = 10; //temp, will use resize

    this._totalPages = Math.ceil(this._data.length / this._itemsPerPage);
    this._currentPage = 1;
  }

  // Получаем шаблон предложения
  Pagination_createClass(Pagination, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var itemElement = this._templatePaginationTemplate.querySelector(this._paginationItemSelector).cloneNode(true);
      return itemElement;
    }

    // Генерируем элемент, принимаем на вход номер страницы.
  }, {
    key: "_generatePaginationItem",
    value: function _generatePaginationItem(number) {
      var _this = this;
      this._itemElement = this._getTemplate();
      this._itemElement.textContent = number;
      this._itemElement.addEventListener('click', function (event) {
        _this._rendererData(_this.setCurrentData(_this._data, number));

        //add active class
        _this._renderActivePage(event.target);
      });
      return this._itemElement;
    }
  }, {
    key: "_addItem",
    value: function _addItem(element) {
      this._paginationListElement.append(element);
    }
  }, {
    key: "renderPagination",
    value: function renderPagination() {
      this._paginationListElement.innerHTML = '';
      for (var i = 1; i <= this._totalPages; i++) {
        this._addItem(this._generatePaginationItem(i));
      }
      this._renderActivePage(this._paginationListElement.querySelectorAll(this._paginationItemSelector)[0]);
    }
  }, {
    key: "_renderActivePage",
    value: function _renderActivePage(element) {
      this._paginationListElement.querySelectorAll(this._paginationItemSelector).forEach(function (item) {
        item.classList.remove('tabs__pagination-item_active');
      });
      element === null || element === void 0 ? void 0 : element.classList.add('tabs__pagination-item_active');
    }
  }, {
    key: "setCurrentData",
    value: function setCurrentData(data) {
      var pageNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      this._currentPage = pageNumber;
      this._end = this._currentPage * this._itemsPerPage;
      this._start = this._end - this._itemsPerPage;
      this._data = data;
      this._totalPages = Math.ceil(this._data.length / this._itemsPerPage);
      this._currentData = this._data.slice(this._start, this._end);
      console.log('total pages ', this._totalPages);
      console.log('data length ', this._data.length);
      console.log('current Page ', this._currentPage);
      console.log('start ', this._start);
      console.log('end ', this._end);
      console.log('data ', this._data);
      console.log(this._currentData);
      return this._currentData; //метод возвращающий наружу элементы для рендеринга текущей страницы
    }
  }]);
  return Pagination;
}();
;// CONCATENATED MODULE: ./src/js/components/OptionsSpecializations.js
function OptionsSpecializations_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function OptionsSpecializations_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function OptionsSpecializations_createClass(Constructor, protoProps, staticProps) { if (protoProps) OptionsSpecializations_defineProperties(Constructor.prototype, protoProps); if (staticProps) OptionsSpecializations_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var OptionsSpecializations = /*#__PURE__*/function () {
  function OptionsSpecializations(data, configSelectors) {
    OptionsSpecializations_classCallCheck(this, OptionsSpecializations);
    this._data = data;
    this._specializationItemTemplate = document.querySelector(".".concat(configSelectors.specializationItemTemplateSelector)).content;
    this._postElement = document.querySelector(".".concat(configSelectors.postSelector));
    this._directionElement = document.querySelector(".".concat(configSelectors.directionSelector));
    this._specializationItemSelector = configSelectors.specializationItemSelector;
    this._specializationContainerElement = document.querySelector(".".concat(configSelectors.specializationContainerSelector));
    this._filterPostDataState = [];
    this._filterDirectionDataState = [];
    this._postValueState = this._postElement.value;
    this._directionValueState = this._directionElement.value;
  }
  OptionsSpecializations_createClass(OptionsSpecializations, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var itemElement = this._specializationItemTemplate.querySelector(".".concat(this._specializationItemSelector)).cloneNode(true);
      return itemElement;
    }
  }, {
    key: "_generateItem",
    value: function _generateItem(data) {
      this._itemElement = this._getTemplate();
      this._itemElement.value = data.name;
      this._itemElement.textContent = data.name;
      return this._itemElement;
    }
  }, {
    key: "_clearList",
    value: function _clearList() {
      this._specializationContainerElement.innerHTML = '';
    }
  }, {
    key: "_setFilterData",
    value: function _setFilterData() {
      var postValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._postValueState;
      var directionValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._directionValueState;
      this._filterPostDataState = this._data.filter(function (item) {
        return item.post === postValue;
      });
      this._filterDirectionDataState = this._filterPostDataState.filter(function (item) {
        return item.direction === directionValue;
      });
      return this._filterDirectionDataState;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._setFilterData();
      data.forEach(function (item) {
        _this._specializationContainerElement.append(_this._generateItem(item));
      });
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      this._postElement.addEventListener('change', function (event) {
        _this2._postValueState = event.target.value;
        _this2._clearList();
        _this2.render(_this2._setFilterData(_this2._postValueState, _this2._directionValueState));
      });
      this._directionElement.addEventListener('change', function (event) {
        _this2._directionValueState = event.target.value;
        _this2._clearList();
        _this2.render(_this2._setFilterData(_this2._postValueState, _this2._directionValueState));
      });
    }
  }]);
  return OptionsSpecializations;
}();
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
    offersList.render(pagination.setCurrentData(data));
    pagination.renderPagination();
  }
}, {
  filterUtils: {
    filterByPost: filterByPost,
    filterByDirection: filterByDirection,
    filterBySalary: filterBySalary
  }
});
filterOffers.setEventListeners();

// 14 - десктоп
// 9 - планшет
// 8 - мобилка

var pagination = new Pagination(offersData_namespaceObject, OFFERS_ITEM_SELECTOR_CONFIG, {
  rendererData: function rendererData(data) {
    offersList.clearList();
    offersList.render(data);
  }
});
pagination.renderPagination();
filterOffers.renderData(offersData_namespaceObject);
var accordion = new Accordion(ACCORDION_SELECTOR_CONFIG);
accordion.setEventListener();
var burger = new Burger(BURGER_NAME_CONFIG);
burger.setEventListeners();

//квиз
var quiz = new Quiz(QUIZ_BUTTONS_CONFIG, QUIZ_CONTENT_CONFIG, quizData_namespaceObject);
quiz.setEventListeners();
quiz.startQuiz();
var video = new VideoLoad(VIDEO_SELECTOR_CONFIG);
video.setEventListener();
var anchorScroll = new AnchorScroll(document);
anchorScroll.setAnchorScroll();
var optionsSpecializations = new OptionsSpecializations(offersData_namespaceObject, FORM_SELECTOR_CONFIG);
optionsSpecializations.render();
optionsSpecializations.setEventListeners();
;// CONCATENATED MODULE: ./src/app.js


/******/ })()
;
//# sourceMappingURL=scripts.4f802c8d.js.map