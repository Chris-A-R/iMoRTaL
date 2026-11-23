(function () {
  var canvas = document.getElementById('matrix-bg');
  if (!canvas || !canvas.getContext) return;

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  var ctx = canvas.getContext('2d');
  var fontSize = 12;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  chars = chars.split('');

  var columns, drops, lastWidth = 0;

  function setup() {
    // Phones fire "resize" whenever the address bar shows or hides while
    // scrolling. Only restart the animation when the width really changes.
    if (window.innerWidth === lastWidth) {
      if (window.innerHeight > canvas.height) canvas.height = window.innerHeight;
      return;
    }
    lastWidth = window.innerWidth;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }
  }

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#33ff33';
    ctx.font = fontSize + 'px monospace';

    for (var i = 0; i < drops.length; i++) {
      var char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setup();
  window.addEventListener('resize', setup);
  draw();
  // Skip drawing while the tab is in the background to save battery.
  setInterval(function () { if (!document.hidden) draw(); }, 170);
})();
