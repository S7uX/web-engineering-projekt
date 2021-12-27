// favicon for every page

let head = document.getElementsByTagName('head');
let favicon = document.createElement('link')
favicon.setAttribute('rel', 'shortcut icon');
favicon.setAttribute('type', 'image/x-icon');
favicon.setAttribute('href', 'favicon.ico');
head.item(0).appendChild(favicon)
