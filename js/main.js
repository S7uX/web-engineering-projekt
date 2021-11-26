// favicon for every page

let head = document.getElementsByTagName('head');
let favicon = document.createElement('link')
favicon.setAttribute('rel', 'shortcut icon');
favicon.setAttribute('type', 'image/x-icon');
favicon.setAttribute('href', 'favicon.ico');
head.item(0).appendChild(favicon)

function flyDrone() {
  let path = anime.path('path');

  let easings = ['linear', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic'];

  anime({
    targets: '#drone',
    translateX: path('x'),
    translateY: path('y'),
    easing: function (el, i) {
      return easings[i];
    },
    duration: 13000,
    loop: true
  });
}
