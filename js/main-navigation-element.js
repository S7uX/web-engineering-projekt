class MainNavigationElement extends HTMLElement{
  constructor() {
    super();
  }

  connectedCallback() {
    let test = document.createElement('p');
    test.innerText = 'test';
    this.appendChild(test);
  }
}


customElements.define('main-navigation', MainNavigationElement, {extends: 'nav'});
