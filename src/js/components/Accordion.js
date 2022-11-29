export class Accordion {
  constructor(accordionSelectors) {
    this._accordionButtonElements = [...document.querySelectorAll(accordionSelectors.accordionButton)];
  }

  _toggleAccordion(element) {
    const currentButtonAtrElement = element.getAttribute('aria-expanded');
    console.log(currentButtonAtrElement);
    for (let i = 0; i < this._accordionButtonElements.length; i++) {
      this._accordionButtonElements[i].setAttribute('aria-expanded', 'false');
    }

    if (currentButtonAtrElement === 'false') {
      element.setAttribute('aria-expanded', 'true')
    }
  }

  setEventListener() {
    this._accordionButtonElements.forEach(element => {
      element.addEventListener('click', () => this._toggleAccordion(element));
    })
  }
}