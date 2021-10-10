function flyDrone(){
  let path = anime.path('path');

  let easings = ['linear', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic'];

  anime({
    targets: '.square',
    translateX: path('x'),
    translateY: path('y'),
    easing: function (el, i) {
      return easings[i];
    },
    duration: 13000,
    loop: true
  });
}
