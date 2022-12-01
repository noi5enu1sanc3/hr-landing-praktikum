export class OptionsSpecializations {
  constructor(data, configSelectors) {
    this._data = data;
    this._specializationItemTemplate = document.querySelector(`.${configSelectors.specializationItemTemplateSelector}`).content;
    this._postElement = document.querySelector(`.${configSelectors.postSelector}`);
    this._directionElement = document.querySelector(`.${configSelectors.directionSelector}`);
    this._specializationItemSelector = configSelectors.specializationItemSelector;
    this._specializationContainerElement = document.querySelector(`.${configSelectors.specializationContainerSelector}`);

    this._filterPostDataState = [];
    this._filterDirectionDataState = [];
    this._postValueState = this._postElement.value;
    this._directionValueState = this._directionElement.value;
  }

  _getTemplate() {
    const itemElement = this._specializationItemTemplate.querySelector(`.${this._specializationItemSelector}`).cloneNode(true);
    return itemElement;
  }

  _generateItem(data) {
    this._itemElement = this._getTemplate();
    this._itemElement.value = data.name;
    this._itemElement.textContent = data.name;
    return this._itemElement;
  }

  _clearList() {
    this._specializationContainerElement.innerHTML = '';
  }

  _setFilterData(postValue = this._postValueState, directionValue = this._directionValueState) {
    this._filterPostDataState = this._data.filter(item => item.post === postValue);
    this._filterDirectionDataState = this._filterPostDataState.filter(item => item.direction === directionValue);
    return this._filterDirectionDataState;
  }

  render(data = this._setFilterData()) {
    data.forEach(item => {
      this._specializationContainerElement.append(this._generateItem(item));
    })
  }

  setEventListeners() {
    this._postElement.addEventListener('change', (event) => {
      this._postValueState = event.target.value;
      this._clearList();
      this.render(this._setFilterData(this._postValueState, this._directionValueState));
    })

    this._directionElement.addEventListener('change', (event) => {
      this._directionValueState = event.target.value;
      this._clearList();
      this.render(this._setFilterData(this._postValueState, this._directionValueState));
    })
  }

}