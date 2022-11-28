export default class FilterOffers {
  constructor(data, buttonSelectors) {
    this._data = data;
    console.log(this._data);
    this._buttonCheckboxElements = [...document.querySelectorAll(buttonSelectors.buttonCheckboxSelector)];
    this._buttonRadioElements = [...document.querySelectorAll(buttonSelectors.buttonRadioSelector)];

    this._filterData = [];
    this._activeFilters = [];
  }


  _getFilterData() {
    const data = this._data.filter(item => {
      this._activeFilters.forEach(filterItem => {
        console.log(filterItem);
        return filterItem === item.post;
      })
    })

    this._addData(data);
  }

  _addData(data) {
    this._filterData.push(...data);
    console.log(this._filterData);
  }

  _deleteByPost(data, attribute) {
    this._filterData = this._filterData.filter(item => item.post !== attribute);
    console.log(this._filterData);
  }

  _deleteByDirection(data, attribute) {
    this._filterData = this._filterData.filter(item => item.direction !== attribute);
    console.log(this._filterData);
  }

  _handleCheckboxFilter(event) {
    event.target.classList.toggle('tabs__btn_active');

    // Получаем фильтр в стейт
    if (this._isButtonActive(event.target)) {
      this._activeFilters.push(this._getAttribute(event.target));
    } else {
      this._activeFilters = this._activeFilters.filter(item => item !== this._getAttribute(event.target));
    }

    console.log(this._activeFilters);

   this._getFilterData();

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