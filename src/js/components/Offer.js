export class Offer {
  constructor(data, cardSelectors) {

    // Шаблон
    this._templateContent = document.querySelector(cardSelectors.itemTemplateSelector).content;
    // Данные
    this._name = data.name;
    this._salary = data.salary;
    // Селекторы
    this._itemSelector = cardSelectors.itemSelector;
    this._titleSector = cardSelectors.titleSelector;
    this._contentSelector = cardSelectors.contentSelector;
  }

  // Получаем шаблон предложения
  _getTemplate() {
    const itemElement = this._templateContent.querySelector(this._itemSelector).cloneNode(true);
    return itemElement;
  }

  // Генерируем элемент (оффер)
  generateOffer() {
    this._itemElement = this._getTemplate();

    this._titleElement = this._itemElement.querySelector(this._titleSector);
    this._contentElements = [...this._itemElement.querySelectorAll(this._contentSelector)];

    this._titleElement.textContent = this._name;
    this._contentElements[0].textContent = 'Оплата за ведение группы';
    this._contentElements[1].textContent = this._salary;

    return this._itemElement;
  }
}