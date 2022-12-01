export default class FilterOffers {
  constructor(data, buttonsConfig,
    { rendererData },
    { filterUtils }) {
    this._data = data;
    this._rendererData = rendererData;

    this._buttonCheckboxElements = [
      ...document.querySelectorAll(buttonsConfig.buttonCheckboxSelector),
    ];
    this._buttonRadioElements = [
      ...document.querySelectorAll(buttonsConfig.buttonRadioSelector),
    ];

    this._buttonResetElement = document.querySelector(
      buttonsConfig.buttonResetSelector
    );

    this._activeButtonClass = buttonsConfig.activeButtonClass;
    this._hiddenResetButtonClass = buttonsConfig.hiddenResetButtonClass;

    this._shouldFilterByPost = filterUtils.filterByPost;
    this._shouldFilterByDirection = filterUtils.filterByDirection;
    this._shouldFilterBySalary = filterUtils.filterBySalary;

    this._filteringBy = new Set(); //набор уникальных типов, по которым производится фильтрация: должность, направление, вознаграждение
    this._activeFilters = []; //массив всех условий, по которым производится фильтрация
  }

  getFilterData() {

  }

  _resetFilters() {
    this._filteringBy.clear();
    this._activeFilters = [];
    this._buttonCheckboxElements.forEach(element =>
      element.classList.remove(this._activeButtonClass)
    );
    this._buttonRadioElements.forEach(element =>
      element.classList.remove(this._activeButtonClass)
    );
    this.renderData(this._getFilterData());
  }

  _handleResetButtonDisplay() {
    this._activeFilters.length === 0
      ? this._buttonResetElement.classList.add(this._hiddenResetButtonClass)
      : this._buttonResetElement.classList.remove(this._hiddenResetButtonClass);
  }

  renderData(data) {
    this._handleResetButtonDisplay();
    this._rendererData(data);
  }

  _updateFilterConditionsSet() {
    //метод, обновляющий сет this._filteringBy
    this._shouldFilterByPost(this._activeFilters)
      ? this._filteringBy.add('post')
      : this._filteringBy.delete('post');

    this._shouldFilterByDirection(this._activeFilters)
      ? this._filteringBy.add('direction')
      : this._filteringBy.delete('direction');

    this._shouldFilterBySalary(this._activeFilters)
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
    event.target.classList.toggle(this._activeButtonClass);

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
    return button.classList.contains(this._activeButtonClass);
  }

  _getAttribute(element) {
    return element.getAttribute('data-check');
  }

  _handleRadioFilter(event) {
    this._buttonRadioElements.forEach(element => {
      if (element !== event.target) {
        element.classList.remove(this._activeButtonClass);
      }
    });
    event.target.classList.toggle(this._activeButtonClass);

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

    this._buttonResetElement.addEventListener('click', () =>
      this._resetFilters()
    );
  }
}
