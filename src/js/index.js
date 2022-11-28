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
