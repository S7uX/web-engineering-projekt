class MainNavigationElement extends HTMLElement{
  constructor() {
    super();
  }

  connectedCallback() {
    let start = document.createElement('div');
    start.innerText = 'Start';
    this.appendChild(start);
    let products = document.createElement('div');
    products.innerText = 'Produkte und Preise';
    this.appendChild(products);
    let Videos = document.createElement('div');
    Videos.innerText = 'Start';
    this.appendChild(Videos);
  }

}

customElements.define('main-navigation', MainNavigationElement, {extends: 'nav'});
