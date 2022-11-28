/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/components/RoleCard.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var RoleCard = /*#__PURE__*/function () {
  function RoleCard(cardSelector, hiddenCardSelector, visiblePartSelector, slidingPartSelector, slidingPartContentSelector, openButtonSelector, closeButtonSelector, openedContainerClass, openedContentClass, openedItemClass, closedItemClass, hiddenClass) {
    _classCallCheck(this, RoleCard);
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
    console.log(this._openButton);
  }
  _createClass(RoleCard, [{
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
;// CONCATENATED MODULE: ./src/js/index.js


var roleCardLeft = new RoleCard(ROLE_CARD_SELECTOR_CONFIG.leftCardSelector, ROLE_CARD_SELECTOR_CONFIG.rightCardSelector, ROLE_CARD_SELECTOR_CONFIG.visiblePartSelector, ROLE_CARD_SELECTOR_CONFIG.slidingPartSelector, ROLE_CARD_SELECTOR_CONFIG.slidingPartContentSelector, ROLE_CARD_SELECTOR_CONFIG.openButtonSelector, ROLE_CARD_SELECTOR_CONFIG.closeButtonSelector, ROLE_CARD_CLASS_CONFIG.openedContainerLeftClass, ROLE_CARD_CLASS_CONFIG.openedContentClass, ROLE_CARD_CLASS_CONFIG.cardOpenedClass, ROLE_CARD_CLASS_CONFIG.hidingPartRightClass, ROLE_CARD_CLASS_CONFIG.hiddenClass);
roleCardLeft.setEventListeners();
var roleCardRight = new RoleCard(ROLE_CARD_SELECTOR_CONFIG.rightCardSelector, ROLE_CARD_SELECTOR_CONFIG.leftCardSelector, ROLE_CARD_SELECTOR_CONFIG.visiblePartSelector, ROLE_CARD_SELECTOR_CONFIG.slidingPartSelector, ROLE_CARD_SELECTOR_CONFIG.slidingPartContentSelector, ROLE_CARD_SELECTOR_CONFIG.openButtonSelector, ROLE_CARD_SELECTOR_CONFIG.closeButtonSelector, ROLE_CARD_CLASS_CONFIG.openedContainerRightClass, ROLE_CARD_CLASS_CONFIG.openedContentClass, ROLE_CARD_CLASS_CONFIG.cardOpenedClass, ROLE_CARD_CLASS_CONFIG.hidingPartLeftClass, ROLE_CARD_CLASS_CONFIG.hiddenClass);
roleCardRight.setEventListeners();
;// CONCATENATED MODULE: ./src/app.js


/******/ })()
;
//# sourceMappingURL=scripts.5eb7b6bb.js.map