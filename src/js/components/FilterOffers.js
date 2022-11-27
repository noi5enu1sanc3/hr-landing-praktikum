export default class FilterOffers {
  constructor(buttonCheckboxSelector, buttonRadioSelector) {
    this._buttonCheckboxElements = [...document.querySelectorAll(buttonCheckboxSelector)];
    this._buttonRadioElements = [...document.querySelectorAll(buttonRadioSelector)];
  }

  _handleCheckboxFilter(event) {
    event.target.classList.toggle('tabs__btn_active');
  }

  _handleRadioFilter(event) {
    this._buttonRadioElements.forEach(element => {
      if (element !== event.target) {
        element.classList.remove('tabs__btn_active');
      }
    });
    event.target.classList.toggle('tabs__btn_active');
  }


  setEventListeners() {
    this._buttonCheckboxElements.forEach(element => {
      element.addEventListener('click', event => this._handleCheckboxFilter(event));
    });

    this._buttonRadioElements.forEach(element => {
      element.addEventListener('click', event => this._handleRadioFilter(event));
    });
  }
}