// favicon for every page
let head = document.getElementsByTagName('head');
let favicon = document.createElement('link')
favicon.setAttribute('rel', 'shortcut icon');
favicon.setAttribute('type', 'image/x-icon');
favicon.setAttribute('href', 'favicon.ico');
head.item(0).appendChild(favicon)


class ImprintElement extends HTMLAnchorElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.classList.add("imprint");
        this.href = "./imprint.html";
        this.innerText = "Impressum";
    }

}

customElements.define('imprint-element', ImprintElement, {extends: 'a'});


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