export class Pagination {
  constructor(data, configSelectors) {
    this._data = data;
    // Шаблон
    this._templatePaginationTemplate = document.querySelector(configSelectors.paginationTemplateSelector).content;

    // Селекторы
    this._paginationItemSelector = configSelectors.paginationItemSelector;
    this._paginationListElement = document.querySelector(configSelectors.paginationListSelector);
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
    return this._itemElement;
  }

  _addItem(element) {
    this._paginationListElement.append(element);
  }

  renderPagination() {
    for(let i = 1; i < 6; i++) {
      this._addItem(this._generatePaginationItem(i));
    }
  }
}