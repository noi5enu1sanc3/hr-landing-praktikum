export const ROLE_CARD_SELECTOR_CONFIG = {
  leftCardSelector: '.roles__item_left',
  rightCardSelector: '.roles__item_right',
  visiblePartSelector: '.roles__main',
  slidingPartSelector: '.roles__details',
  slidingPartContentSelector: '.roles__details-content', //for additional effects e.g. text animation
  openButtonSelector: '.roles__open-btn',
  closeButtonSelector: '.roles__close-btn',
};

export const ROLE_CARD_CLASS_CONFIG = {
  openedContainerLeftClass: 'roles__details_opened-left',
  openedContainerRightClass: 'roles__details_opened-right',
  openedContentClass: 'roles__details-content_open',
  cardOpenedClass: 'roles__item_opened',
  hidingPartLeftClass: 'roles__item_closed-left',
  hidingPartRightClass: 'roles__item_closed-right',
  toggleBtnCloseStateClass: 'roles__btn_close',
  hiddenClass: 'roles_visually-hidden',
};

export const BUTTON_TABS_CONFIG = {
  buttonCheckboxSelector: '.tabs__btn-checkbox',
  buttonRadioSelector: '.tabs__btn-radio',
  buttonResetSelector: '.tabs__btn-reset',
  activeButtonClass: 'tabs__btn_active',
  hiddenResetButtonClass: 'tabs__btn-reset_hidden',
};

export const OFFERS_ITEM_SELECTOR_CONFIG = {
  listSelector: '.tabs__content-list',
  itemTemplateSelector: '.tabs__content-item-template',
  itemSelector: '.tabs__content-link',
  titleSelector: '.tabs__content-title',
  contentSelector: '.tabs__content-text',
  paginationListSelector: '.tabs__pagination-list',
  paginationTemplateSelector: '.tabs_pagination-item-template',
  paginationItemSelector: '.tabs__pagination-item'
};

export const ACCORDION_SELECTOR_CONFIG = {
  accordionButton: '.accordion__header',
};

export const BURGER_NAME_CONFIG = {
  burgerOpeningButtonName: 'burger',
  burgerClosingButtonName: 'header__menu-close-btn',
  headerNavigationMenuName: 'header__menu',
};

export const VIDEO_SELECTOR_CONFIG = {
  videoSelector: '.video-history__video',
  videoButtonSelector: '.video-history__btn',
}

export const QUIZ_BUTTONS_CONFIG = {
  progressButtonsSelector: '.quiz__progress-bar-item',
  optionButtonsSelector: '.quiz__option',
  currentProgressClass: 'quiz__progress-bar-item_active',
  restartButtonSelector: '.quiz__restart-btn',
}

export const QUIZ_CONTENT_CONFIG = {
  quizBlockSelector: '.quiz__questions-block',
  resultBlockSelector: '.quiz__result-block',
  resultTextSelector: '.quiz__result-role',
  resultYellowTextClass: '.quiz__result-role_accent_yellow',
  resultAquamarineTextClass: '.quiz__result-role_accent_aquamarine',
  questionNumberSelector: '.quiz__question-number',
  questionTextSelector: '.quiz__question',
  optionsTextSelector: '.quiz__option',
  hiddenContentClass: 'quiz__hidden',
}