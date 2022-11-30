export class Burger {
  constructor(burgerSelectors) {
    this._burgerOpeningButtonName = burgerSelectors.burgerOpeningButtonName;
    this._burgerClosingButtonName = burgerSelectors.burgerClosingButtonName;
    this._headerNavigationMenuName = burgerSelectors.headerNavigationMenuName;

    this._burgerOpeningButtonElement = document.querySelector(`.${this._burgerOpeningButtonName}`);
    this._burgerClosingButtonElement = document.querySelector(`.${this._burgerClosingButtonName}`);
    this._headerNavigationMenuElement = document.querySelector(`.${this._headerNavigationMenuName}`);
  }

  _openMenu() {
    console.log(this._headerNavigationMenuElement);
    this._headerNavigationMenuElement.classList.add(`${this._headerNavigationMenuName}_is-active`);
  }

  _closeMenu() {
    this._headerNavigationMenuElement.classList.remove(`${this._headerNavigationMenuName}_is-active`);
  }

  setEventListeners() {
    this._burgerOpeningButtonElement.addEventListener('click', () => this._openMenu());
    this._burgerClosingButtonElement.addEventListener('click', () => this._closeMenu());
  }
}