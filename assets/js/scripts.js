var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

// Cycles the hero background video through a playlist of clips.
// Each clip plays once, then the next one loads and plays, wrapping around.
var introVideo = document.querySelector('.intro-video[data-playlist]');
if (introVideo) {
    var playlist = [];
    try {
        playlist = JSON.parse(introVideo.getAttribute('data-playlist'));
    } catch (e) {
        playlist = [];
    }
    if (playlist.length > 1) {
        var playlistIndex = 0;
        introVideo.addEventListener('ended', function() {
            playlistIndex = (playlistIndex + 1) % playlist.length;
            introVideo.src = playlist[playlistIndex];
            introVideo.load();
            var playPromise = introVideo.play();
            if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(function() {
                    // Autoplay was blocked; the poster/last frame will just stay visible.
                });
            }
        });
    }
}
