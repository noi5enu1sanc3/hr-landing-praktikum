export class List {
  constructor({ renderer }, containerSelectors) {
    this._renderer = renderer;
    this._containerElement = document.querySelector(containerSelectors.listSelector);
  }

  render(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._containerElement.prepend(element);
  }
}