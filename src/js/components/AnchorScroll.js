export class AnchorScroll {
  constructor(documentElement) {
    this._documentElement = documentElement;
  }

  setAnchorScroll() {
   this._documentElement.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (event) {
        event.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }
}