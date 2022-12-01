export class Pagination {
  constructor(data, configSelectors, { rendererData }) {
    this._data = data;
    this._rendererData = rendererData;
    // Шаблон
    this._templatePaginationTemplate = document.querySelector(configSelectors.paginationTemplateSelector).content;

    // Селекторы
    this._paginationItemSelector = configSelectors.paginationItemSelector;
    this._paginationListElement = document.querySelector(configSelectors.paginationListSelector);

    this._currentPageClass = configSelectors.currentPageClass;

    this._itemsPerPage = 10; //temp, will use resize

    this._totalPages = Math.ceil(this._data.length / this._itemsPerPage);

    this._currentPage = 1;
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

    this._itemElement.addEventListener('click', (event) => {
      this._rendererData(this.setCurrentData(this._data, number));

      //add active class
      this._renderActivePage(event.target);
    })

    return this._itemElement;
  }

  _addItem(element) {
    this._paginationListElement.append(element);
  }

  renderPagination() {
    this._paginationListElement.innerHTML = '';
    for(let i = 1; i <= this._totalPages; i++) {
      this._addItem(this._generatePaginationItem(i));
    }
    this._renderActivePage(this._paginationListElement.querySelectorAll(this._paginationItemSelector)[0]);
  }

  _renderActivePage(element) {
    this._paginationListElement.querySelectorAll(this._paginationItemSelector).forEach(item => {
      item.classList.remove('tabs__pagination-item_active')
    });
    element?.classList.add('tabs__pagination-item_active');
  };

  setCurrentData(data, pageNumber = 1) {
    this._currentPage = pageNumber;
    this._end = this._currentPage * this._itemsPerPage;
    this._start = this._end - this._itemsPerPage;

    this._data = data;
    this._totalPages = Math.ceil(this._data.length / this._itemsPerPage);

    this._currentData = this._data.slice(this._start, this._end);

    return this._currentData; //метод возвращающий наружу элементы для рендеринга текущей страницы
  }
}
