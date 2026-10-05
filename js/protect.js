(function (w, d) {
  'use strict';
  try {
    function stop(e) {
      try { e.preventDefault(); e.stopPropagation(); } catch (x) {}
      return false;
    }

    function onKey(e) {
      var k = e.key || '';
      var code = e.keyCode || 0;
      var c = e.ctrlKey || e.metaKey;
      var s = e.shiftKey;
      if (k === 'F12' || code === 123) return stop(e);
      if (c && s && (k === 'I' || k === 'i' || k === 'J' || k === 'j' || k === 'C' || k === 'c' || k === 'K' || k === 'k' || code === 73 || code === 74 || code === 67 || code === 75)) return stop(e);
      if (c && !s && (k === 'U' || k === 'u' || k === 'S' || k === 's' || code === 85 || code === 83)) return stop(e);
    }

    w.addEventListener('keydown', onKey, true);
    d.addEventListener('keydown', onKey, true);
    d.addEventListener('keyup', onKey, true);
    d.addEventListener('contextmenu', stop, true);

    var nuking = false;
    function nuke() {
      if (nuking) return;
      nuking = true;
      try { d.documentElement.innerHTML = ''; } catch (x) {}
      try { w.stop(); } catch (x) {}
      try { w.location.replace(w.location.href); } catch (x) {
        try { w.location.reload(); } catch (y) {}
      }
    }

    function hit() {
      var t = (w.performance && performance.now) ? performance.now() : Date.now();
      debugger;
      var dt = ((w.performance && performance.now) ? performance.now() : Date.now()) - t;
      if (dt > 50) nuke();
    }

    hit();
    setInterval(hit, 50);
    setInterval(function () {
      var t = (w.performance && performance.now) ? performance.now() : Date.now();
      try { eval('debugger;//' + Date.now()); } catch (x) {}
      var dt = ((w.performance && performance.now) ? performance.now() : Date.now()) - t;
      if (dt > 50) nuke();
    }, 90);

    function loop() {
      hit();
      try { w.requestAnimationFrame(loop); } catch (x) { setTimeout(loop, 40); }
    }
    try { w.requestAnimationFrame(loop); } catch (x) { setTimeout(loop, 40); }
  } catch (x) {}
})(window, document);
