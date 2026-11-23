// Types out the home page boot sequence one character at a time.
// The text is already in the HTML, so it still shows without JavaScript.
// Untyped characters stay in place but invisible, so the block is always
// exactly as tall as its finished text and nothing below it jumps.
// Skipped for reduced-motion users and after the first play in a session.
(function () {
  var boot = document.getElementById('boot');
  if (!boot) return;

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var seen = false;
  try { seen = sessionStorage.getItem('bootPlayed') === '1'; } catch (e) {}
  if (reduceMotion || seen) return;
  try { sessionStorage.setItem('bootPlayed', '1'); } catch (e) {}

  var CHAR_DELAY = 28;   // ms per character
  var LINE_DELAY = 350;  // ms pause between lines

  var lines = Array.prototype.slice.call(boot.querySelectorAll('.boot-line'));
  var parts = lines.map(function (el) {
    var text = el.textContent;
    var typed = document.createElement('span');
    var untyped = document.createElement('span');
    typed.className = 'boot-typed';
    untyped.className = 'boot-untyped';
    untyped.textContent = text;
    el.textContent = '';
    el.appendChild(typed);
    el.appendChild(untyped);
    return { el: el, text: text, typed: typed, untyped: untyped };
  });
  boot.classList.add('typing');

  function finish() {
    parts.forEach(function (p) {
      p.el.textContent = p.text;
      p.el.classList.remove('active');
    });
    boot.classList.remove('typing');
  }

  // Click anywhere on the boot block to skip the animation.
  var skipped = false;
  boot.addEventListener('click', function () { skipped = true; });

  function typeLine(i) {
    if (i >= parts.length) { finish(); return; }
    var p = parts[i];
    p.el.classList.add('active');
    var n = 0;
    (function step() {
      if (skipped) { finish(); return; }
      n++;
      p.typed.textContent = p.text.slice(0, n);
      p.untyped.textContent = p.text.slice(n);
      if (n < p.text.length) {
        setTimeout(step, CHAR_DELAY);
      } else {
        p.el.classList.remove('active');
        setTimeout(function () { typeLine(i + 1); }, LINE_DELAY);
      }
    })();
  }

  typeLine(0);
})();
