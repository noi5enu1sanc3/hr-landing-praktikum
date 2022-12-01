import FilterOffers from './components/FilterOffers';
import { Offer } from './components/Offer';
import { List } from './components/List';
import { Accordion } from './components/Accordion';
import Quiz from './components/Quiz';
import RoleCard from './components/RoleCard';
import offersData from './utils/offersData.json';
import quizData from './utils/quizData.json';

import {
  filterByPost,
  filterByDirection,
  filterBySalary,
} from './utils/filterHelper';

import {
  ROLE_CARD_SELECTOR_CONFIG,
  ROLE_CARD_CLASS_CONFIG,
  BUTTON_TABS_CONFIG,
  OFFERS_ITEM_SELECTOR_CONFIG,
  ACCORDION_SELECTOR_CONFIG,
  BURGER_NAME_CONFIG,
  QUIZ_BUTTONS_CONFIG,
  QUIZ_CONTENT_CONFIG,
  VIDEO_SELECTOR_CONFIG, FORM_SELECTOR_CONFIG,
} from './utils/constants';
import { Burger } from './components/Burger';
import { VideoLoad } from './components/VideoLoad';
import { AnchorScroll } from './components/AnchorScroll';
import { Pagination } from './components/Pagination';
import { OptionsSpecializations } from './components/OptionsSpecializations';

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
const createOffer = data => {
  const offer = new Offer(data, OFFERS_ITEM_SELECTOR_CONFIG);
  return offer.generateOffer();
};

const offersList = new List(
  {
    renderer: item => {
      const offer = createOffer(item);
      offersList.addItem(offer);
    },
  },
  OFFERS_ITEM_SELECTOR_CONFIG
);

const filterOffers = new FilterOffers(
  offersData,
  BUTTON_TABS_CONFIG,
  {
    rendererData: data => {
      offersList.clearList();
      offersList.render(pagination.setCurrentData(data));
      pagination.renderPagination();
    },
  },
  {
    filterUtils: {
      filterByPost: filterByPost,
      filterByDirection: filterByDirection,
      filterBySalary: filterBySalary,
    },
  }
);

filterOffers.setEventListeners();

// 14 - десктоп
// 9 - планшет
// 8 - мобилка

const pagination = new Pagination(offersData, OFFERS_ITEM_SELECTOR_CONFIG,
  {
    rendererData: data => {
      offersList.clearList();
      offersList.render(data);
    },
  },);
  pagination.renderPagination();
  filterOffers.renderData(offersData);
  pagination.setEventListeners();

const accordion = new Accordion(ACCORDION_SELECTOR_CONFIG);
accordion.setEventListener();

const burger = new Burger(BURGER_NAME_CONFIG);
burger.setEventListeners();


//квиз
const quiz = new Quiz(QUIZ_BUTTONS_CONFIG, QUIZ_CONTENT_CONFIG, quizData);
quiz.setEventListeners();
quiz.startQuiz();

const video = new VideoLoad(VIDEO_SELECTOR_CONFIG);
video.setEventListener();

const anchorScroll = new AnchorScroll(document);
anchorScroll.setAnchorScroll();

const optionsSpecializations = new OptionsSpecializations(offersData, FORM_SELECTOR_CONFIG);
optionsSpecializations.render();
optionsSpecializations.setEventListeners();