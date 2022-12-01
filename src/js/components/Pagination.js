export class Pagination {
  constructor(data, configSelectors) {
    this._data = data;
    // Шаблон
    this._templatePaginationTemplate = document.querySelector(configSelectors.paginationTemplateSelector).content;

    // Селекторы
    this._paginationItemSelector = configSelectors.paginationItemSelector;
    this._paginationListElement = document.querySelector(configSelectors.paginationListSelector);

    this._currentPageClass = configSelectors.currentPageClass;

    this._itemsPerPage = 5; //temp, will use resize

    this._totalPages = Math.ceil(this._data.length / this._itemsPerPage);
  }

  // Получаем шаблон предложения
  _getTemplate() {
    const itemElement = this._templatePaginationTemplate.querySelector(this._paginationItemSelector).cloneNode(true);
    return itemElement;
  }

  // Генерируем элемент, принимаем на вход номер страницы.
  _generatePaginationItem(number) {
    this._itemElement = this._getTemplate();
    this._itemElement.textContent = number;

    this._itemElement.addEventListener('click', (event) => this.setCurrentData(event.target))
    return this._itemElement;
  }

  _addItem(element) {
    this._paginationListElement.append(element);
  }

  renderPagination() {
    for(let i = 1; i <= this._totalPages; i++) {
      this._addItem(this._generatePaginationItem(i));
    }
  }

  setCurrentData(element) {
    this._paginationListElement.querySelectorAll(this._paginationItemSelector).forEach(item => {
      item.classList.remove('activeClass')
    });

    element?.classList?.add('activeClass')

    this._currentPage = element.textContent || 1;
    this._end = this._currentPage * this._itemsPerPage;
    this._start = this._end - this._itemsPerPage;

    this._currentData = this._data.slice(this._start, this._end);

    console.log('data length ', this._data.length)
    console.log('current Page ', this._currentPage);
    console.log('start ', this._start);
    console.log('end ', this._end);
    console.log('data ', this._data);
    console.log(this._currentData);
    
    return this._currentData; //метод возвращающий наружу элементы для рендеринга текущей страницы
  }
}
