import FilterOffers from './components/FilterOffers';
import Offer from './components/Offer';
import RoleCard from './components/RoleCard';
import {
  ROLE_CARD_SELECTOR_CONFIG,
  ROLE_CARD_CLASS_CONFIG,
} from './utils/constants';

const roleCardLeft = new RoleCard(
  ROLE_CARD_SELECTOR_CONFIG.leftCardSelector,
  ROLE_CARD_SELECTOR_CONFIG.rightCardSelector,
  ROLE_CARD_SELECTOR_CONFIG.visiblePartSelector,
  ROLE_CARD_SELECTOR_CONFIG.slidingPartSelector,
  ROLE_CARD_SELECTOR_CONFIG.slidingPartContentSelector,
  ROLE_CARD_SELECTOR_CONFIG.openButtonSelector,
  ROLE_CARD_SELECTOR_CONFIG.closeButtonSelector,
  ROLE_CARD_CLASS_CONFIG.openedContainerLeftClass,
  ROLE_CARD_CLASS_CONFIG.openedContentClass,
  ROLE_CARD_CLASS_CONFIG.cardOpenedClass,
  ROLE_CARD_CLASS_CONFIG.hidingPartRightClass,
  ROLE_CARD_CLASS_CONFIG.hiddenClass
);
roleCardLeft.setEventListeners();

const roleCardRight = new RoleCard(
  ROLE_CARD_SELECTOR_CONFIG.rightCardSelector,
  ROLE_CARD_SELECTOR_CONFIG.leftCardSelector,
  ROLE_CARD_SELECTOR_CONFIG.visiblePartSelector,
  ROLE_CARD_SELECTOR_CONFIG.slidingPartSelector,
  ROLE_CARD_SELECTOR_CONFIG.slidingPartContentSelector,
  ROLE_CARD_SELECTOR_CONFIG.openButtonSelector,
  ROLE_CARD_SELECTOR_CONFIG.closeButtonSelector,
  ROLE_CARD_CLASS_CONFIG.openedContainerRightClass,
  ROLE_CARD_CLASS_CONFIG.openedContentClass,
  ROLE_CARD_CLASS_CONFIG.cardOpenedClass,
  ROLE_CARD_CLASS_CONFIG.hidingPartLeftClass,
  ROLE_CARD_CLASS_CONFIG.hiddenClass
);
roleCardRight.setEventListeners();



const filterOffers = new FilterOffers('.tabs__btn-checkbox', '.tabs__btn-radio');
filterOffers.setEventListeners();

// Создание офера
const createOffer = (data) => {
  const offer = new Offer(
    data,
    {
      titleSelector: '.tabs__content-title', contentSelector: '.tabs__content-text'
    }, '.tabs__navigation-item-template')
  return createOffer();
}

// Генерация