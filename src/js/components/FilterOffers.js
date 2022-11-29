export default class FilterOffers {
  constructor(data, buttonSelectors, { rendererData }) {
    this._data = data;
    this._rendererData = rendererData;

    this._buttonCheckboxElements = [
      ...document.querySelectorAll(buttonSelectors.buttonCheckboxSelector),
    ];
    this._buttonRadioElements = [
      ...document.querySelectorAll(buttonSelectors.buttonRadioSelector),
    ];

    this._filteringBy = new Set(); //набор уникальных значений, по которым производится фильтрация: должность, направление, вознаграждение
    this._activeFilters = []; //массив условий, по которым производится фильтрация
  }

  renderData(data) {
    this._rendererData(data);
  }

  _updateFilterConditionsSet() {
    //метод, обновляющий сет this._filteringBy
    if (
      this._activeFilters.some(
        filter => filter === 'mentor' || filter === 'reviewer'
      )
    ) {
      this._filteringBy.add('post');
    } else {
      this._filteringBy.delete('post');
    }
    if (
      this._activeFilters.some(
        filter =>
          this._activeFilters.length !== 0 &&
          filter !== 'mentor' &&
          filter !== 'reviewer' &&
          typeof filter !== 'number'
      )
    ) {
      this._filteringBy.add('direction');
    } else {
      this._filteringBy.delete('direction');
    }
    this._activeFilters.some(filter => typeof filter === 'number')
      ? this._filteringBy.add('salary')
      : this._filteringBy.delete('salary');
    console.log(this._filteringBy);
  }

  _getFilterData() {
    this._updateFilterConditionsSet();
    return this._data.filter(
      offer =>
        (this._filteringBy.has('post') //фильтруем по должности?
          ? this._activeFilters.includes(offer.post)
          : true) &&
        (this._filteringBy.has('direction') //фильтруем по направлению?
          ? this._activeFilters.includes(offer.direction)
          : true) &&
        (this._filteringBy.has('salary') //фильтруем по вознаграждению?
          ? offer.salary >=
            this._activeFilters.find(filter => typeof filter === 'number')
          : true)
    );
  }

  _handleCheckboxFilter(event) {
    event.target.classList.toggle('tabs__btn_active');

    if (this._isButtonActive(event.target)) {
      this._activeFilters.push(this._getAttribute(event.target));
    } else {
      this._activeFilters = this._activeFilters.filter(
        item => item !== this._getAttribute(event.target)
      );
    }
    this.renderData(this._getFilterData());
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

    if (
      this._isButtonActive(event.target) &&
      !this._activeFilters.some(
        filter => filter === parseInt(this._getAttribute(event.target))
      )
    ) {
      this._activeFilters = this._activeFilters.filter(item =>
        typeof item === 'number'
          ? item === parseInt(this._getAttribute(event.target))
          : true
      );
      this._activeFilters.push(parseInt(this._getAttribute(event.target)));
    } else {
      this._activeFilters = this._activeFilters.filter(
        item => item !== parseInt(this._getAttribute(event.target))
      );
    }
    console.log(this._activeFilters);
    this.renderData(this._getFilterData());
  }

  setEventListeners() {
    this._buttonCheckboxElements.forEach(element => {
      element.addEventListener('click', event =>
        this._handleCheckboxFilter(event)
      );
    });

    this._buttonRadioElements.forEach(element => {
      element.addEventListener('click', event =>
        this._handleRadioFilter(event)
      );
    });
  }
}
