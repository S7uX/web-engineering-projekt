class ImprintElement extends HTMLAnchorElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.href = "./imprint.html";
    this.innerText = "Impressum";
  }

}

customElements.define('imprint-element', ImprintElement, {extends: 'a'});
