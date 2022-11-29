export default class FilterOffers {
  constructor(data, buttonSelectors, { rendererData }) {
    this._data = data;
    this._rendererData = rendererData;

    this._buttonCheckboxElements = [...document.querySelectorAll(buttonSelectors.buttonCheckboxSelector)];
    this._buttonRadioElements = [...document.querySelectorAll(buttonSelectors.buttonRadioSelector)];

    this._activeFilters = [];
  }

  renderData(data) {
    this._rendererData(data);
  }


  _getFilterData() {
      return this._data.filter(
        offer =>
          (this._activeFilters.some(
            filter => filter === 'mentor' || filter === 'reviewer'
          )
            ? this._activeFilters.includes(offer.post)
            : true)
          &&
          (this._activeFilters.some(
            filter =>
              this._activeFilters.length !== 0 &&
              filter !== 'mentor' &&
              filter !== 'reviewer'
          )
            ? this._activeFilters.includes(offer.direction)
            : true)
      );
  }

  _handleCheckboxFilter(event) {
    event.target.classList.toggle('tabs__btn_active');

    if (this._isButtonActive(event.target)) {
      this._activeFilters.push(this._getAttribute(event.target));
    } else {
      this._activeFilters = this._activeFilters.filter(item => item !== this._getAttribute(event.target));
    }
    this.renderData(this._getFilterData());
    console.log(this._activeFilters);

  }


  _isButtonActive(button) {
    return button.classList.contains('tabs__btn_active');
  }

  _getAttribute(element) {
    return element.getAttribute('data-check');
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