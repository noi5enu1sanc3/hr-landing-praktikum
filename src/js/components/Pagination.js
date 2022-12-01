export class Pagination {
  constructor(data, configSelectors, { rendererData }) { //tut ne nado peredavat dannye?
    this._data = data;
    this._rendererData = rendererData;
    // Шаблон
    this._templatePaginationTemplate = document.querySelector(configSelectors.paginationTemplateSelector).content;

    // Селекторы
    this._paginationItemSelector = configSelectors.paginationItemSelector;
    this._paginationListElement = document.querySelector(configSelectors.paginationListSelector);

    this._currentPageClass = configSelectors.currentPageClass;

    this._itemsPerPage = 14; //temp, will use resize

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
           this._paginationListElement.querySelectorAll(this._paginationItemSelector).forEach(item => {
            item.classList.remove('tabs__pagination-item_active')
          });
          event.target.classList.add('tabs__pagination-item_active');
    });

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
  }

  setCurrentData(data, pageNumber = 1) { //(data, pageNumber)?
    this._currentPage = pageNumber;
    this._end = this._currentPage * this._itemsPerPage;
    this._start = this._end - this._itemsPerPage;

    this._data = data;
    this._totalPages = Math.ceil(this._data.length / this._itemsPerPage);
    this.renderPagination();

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
