import FilterOffers from './components/FilterOffers';
import Offer from './components/Offer';


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