export default class RoleCard {
  constructor(
    cardSelector,
    hiddenCardSelector,
    visiblePartSelector,
    slidingPartSelector,
    slidingPartContentSelector,
    openButtonSelector,
    closeButtonSelector,
    openedContainerClass,
    openedContentClass,
    openedItemClass,
    closedItemClass,
    hiddenClass
  ) {
    this._card = document.querySelector(cardSelector);
    this._openButton = this._card.querySelector(openButtonSelector);
    this._closeButton = this._card.querySelector(closeButtonSelector);
    this._visiblePart = this._card.querySelector(visiblePartSelector);
    this._slidingPart = this._card.querySelector(slidingPartSelector);
    this._slidingContent = this._slidingPart.querySelector(
      slidingPartContentSelector
    );
    this._hiddenCard = document.querySelector(hiddenCardSelector);
    this._openedContainerClass = openedContainerClass;
    this._openedContentClass = openedContentClass;
    this._openedItemClass = openedItemClass;
    this._closedItemClass = closedItemClass;
    this._hiddenClass = hiddenClass;
    console.log(this._openButton);
  }

  _toggle() {
    this._openButton.classList.toggle(this._hiddenClass);
    this._closeButton.classList.toggle(this._hiddenClass);
    this._slidingPart.classList.toggle(this._openedContainerClass);
    this._hiddenCard.classList.toggle(this._closedItemClass);
    this._card.classList.toggle(this._openedItemClass);
    this._slidingContent.classList.toggle(this._openedContentClass);
  }

  setEventListeners() {
    this._openButton.addEventListener('click', this._toggle.bind(this));
    this._closeButton.addEventListener('click', this._toggle.bind(this));
  }
}
