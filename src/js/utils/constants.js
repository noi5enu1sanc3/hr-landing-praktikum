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
  buttonRadioSelector: '.tabs__btn-radio'
}

export const OFFERS_ITEM_SELECTOR_CONFIG = {
  listSelector: '.tabs__content-list',
  itemTemplateSelector:'.tabs__content-item-template',
  itemSelector: '.tabs__content-item',
  titleSelector: '.tabs__content-title',
  contentSelector: '.tabs__content-text',
}

export const ACCORDION_SELECTOR_CONFIG = {
  accordionButton: '.accordion__header',
}

export const BURGER_NAME_CONFIG = {
  burgerOpeningButtonName: 'burger',
  burgerClosingButtonName: 'header__menu-close-btn',
  headerNavigationMenuName: 'header__menu'
}