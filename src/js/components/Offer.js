export default class Offer {
  constructor(data, cardSelectors, templateSelector) {

    // Шаблон
    this._templateContent = document.querySelector(templateSelector).content;

    // Данные
    this._name = data.name;
    this._salary = data.salary;

    // Селекторы
    this._titleSector = cardSelectors.titleSelector;
    this._contentSelector = cardSelectors.contentSelector;
  }

  // Получаем шаблон предложения
  _getTemplate() {
    const offerElement = this._templateContent.querySelector('.tabs__navigation-item').cloneNode(true);
    return offerElement;
  }

  // Генерируем элемент (оффер)
  generateOffer() {
    this._itemElement = this._getTemplate();

    this._titleElement = this._itemElement.querySelector(this._titleSector);
    this._contentElements = [...this._itemElement.querySelector(this._contentSelector)];

    this._itemElement.textContent = this._name;
    this._contentElements[0].textContent = 'Оплата за ведение группы';
    this._contentElements[1].textContent = this._salary;
  }
}