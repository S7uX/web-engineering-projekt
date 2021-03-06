function flyDrone() {
    const path = anime.path('path');

    const easings = ['linear', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic'];

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