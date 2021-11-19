class MainNavigationElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add("main-navigation");
    let text = ["Start", "Produkte und Preise", "Videos"];
    let links = ["index.html", "products.html", "videos.html"]
    for (let i = 0; i < links.length; i++) {
      let navItem = document.createElement('a');
      navItem.classList.add("nav-item");
      navItem.innerText = text[i];
      navItem.href = links[i];
      this.appendChild(navItem);
    }
  }

}

customElements.define('main-navigation', MainNavigationElement, {extends: 'nav'});
