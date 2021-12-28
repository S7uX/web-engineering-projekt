// favicon for every page
let head = document.getElementsByTagName('head');
let favicon = document.createElement('link')
favicon.setAttribute('rel', 'shortcut icon');
favicon.setAttribute('type', 'image/x-icon');
favicon.setAttribute('href', 'favicon.ico');
head.item(0).appendChild(favicon)


class ImprintElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const a = document.createElement("a");
        a.classList.add("imprint");
        a.href = "./imprint.html";
        a.innerText = "Impressum";
        this.appendChild(a);
    }
}

customElements.define('imprint-element', ImprintElement);


class MainNavigationElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.classList.add("main-navigation");
        const text = ["Start", "Produkte und Preise", "Videos"];
        const links = ["index.html", "products.html", "videos.html"]
        for (let i = 0; i < links.length; i++) {
            const navItem = document.createElement('a');
            navItem.classList.add("nav-item");
            navItem.innerText = text[i];
            navItem.href = links[i];
            this.appendChild(navItem);
        }
    }

}

customElements.define('main-navigation', MainNavigationElement);