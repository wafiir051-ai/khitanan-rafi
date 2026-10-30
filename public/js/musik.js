(function () {
  var VIDEO_ID = 'SU0CCJbHYYk';
  var player, ready = false, wantPlay = false;

  var holder = document.createElement('div');
  holder.id = 'ytMusic';
  holder.setAttribute('aria-hidden', 'true');
  document.body.appendChild(holder);

  var btn = document.createElement('button');
  btn.id = 'musicBtn';
  btn.type = 'button';
  btn.style.display = 'none';
  btn.setAttribute('aria-label', 'Nyalakan atau matikan musik');
  btn.innerHTML = '<i class="fas fa-volume-high"></i>';
  document.body.appendChild(btn);

  function icon(on) {
    btn.innerHTML = '<i class="fas ' + (on ? 'fa-volume-high' : 'fa-volume-xmark') + '"></i>';
  }

  function create() {
    player = new YT.Player('ytMusic', {
      width: '200', height: '200', videoId: VIDEO_ID,
      playerVars: { autoplay: 0, controls: 0, loop: 1, playlist: VIDEO_ID, playsinline: 1, rel: 0, modestbranding: 1 },
      events: {
        onReady: function () { ready = true; if (wantPlay) player.playVideo(); },
        onStateChange: function (e) { icon(e.data === 1 || e.data === 3); }
      }
    });
  }

  if (window.YT && window.YT.Player) {
    create();
  } else {
    var prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function () { if (prev) prev(); create(); };
    var s = document.createElement('script');
    s.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(s);
  }

  function start() {
    wantPlay = true;
    btn.style.display = 'flex';
    if (ready) player.playVideo();
  }

  var open = document.getElementById('openBtn');
  if (open) open.addEventListener('click', start);

  btn.addEventListener('click', function () {
    if (!ready) return;
    if (player.getPlayerState() === 1) { player.pauseVideo(); } else { player.playVideo(); }
  });
})();
