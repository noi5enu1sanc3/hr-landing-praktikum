import FilterOffers from './components/FilterOffers';
import { Offer } from './components/Offer';
import { List } from './components/List';
import { Accordion } from './components/Accordion';
import RoleCard from './components/RoleCard';
import offersData from "./utils/offersData.json";

import {
  ROLE_CARD_SELECTOR_CONFIG,
  ROLE_CARD_CLASS_CONFIG,
  BUTTON_TABS_CONFIG,
  OFFERS_ITEM_SELECTOR_CONFIG,
  ACCORDION_SELECTOR_CONFIG,
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


// Создание офера
const createOffer = (data) => {
  const offer = new Offer(data, OFFERS_ITEM_SELECTOR_CONFIG);
  return offer.generateOffer();
}

const offersList = new List({
  renderer: (item) => {
    const offer = createOffer(item);
    offersList.addItem(offer);
  }
}, OFFERS_ITEM_SELECTOR_CONFIG);


const filterOffers = new FilterOffers(offersData, BUTTON_TABS_CONFIG, {
  rendererData: (data) => {
    offersList.clearList();
    offersList.render(data);
  }
});

filterOffers.setEventListeners();

filterOffers.renderData(offersData)

const accordion = new Accordion(ACCORDION_SELECTOR_CONFIG);
accordion.setEventListener();
