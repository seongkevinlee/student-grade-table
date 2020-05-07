class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    var badgeEl = this.headerElement.querySelector('.badge');
    badgeEl.textContent = newAverage;
  }
}
