!(function () {
  function e(e, t, n) {
    return Number(e.getAttribute(t)) || n;
  }
  function t() {
    for (
      d.clearRect(0, 0, g, h),
        c = [
          { x: 0, y: 0.7 * h + s },
          { x: 0, y: 0.7 * h - s },
        ];
      c[1].x < g + s;

    )
      n(c[0], c[1]);
  }
  function n(e, t) {
    d.beginPath(), d.moveTo(e.x, e.y), d.lineTo(t.x, t.y);
    var n = t.x + (2 * y() - 0.25) * s,
      i = (function e(t) {
        return (a = t + (2 * y() - 1.1) * s), a > h || a < 0 ? e(t) : a;
      })(t.y);
    d.lineTo(n, i),
      d.closePath(),
      (u -= m / -50),
      (d.fillStyle =
        "#" +
        (
          ((127 * x(u) + 128) << 16) |
          ((127 * x(u + m / 3) + 128) << 8) |
          (127 * x(u + (m / 3) * 2) + 128)
        ).toString(16)),
      d.fill(),
      (c[0] = c[1]),
      (c[1] = { x: n, y: i });
  }
  var i = document.getElementsByTagName("script"),
    o = i[i.length - 1];
  config = {
    z: e(o, "zIndex", -1),
    a: e(o, "alpha", 0.4),
    s: e(o, "size", 150),
  };
  var c,
    a,
    l = document.createElement("canvas"),
    d = l.getContext("2d"),
    r = window.devicePixelRatio || 1,
    g = window.innerWidth,
    h = window.innerHeight,
    s = config.s,
    f = Math,
    u = 0,
    m = 2 * f.PI,
    x = f.cos,
    y = f.random;
  (l.width = g * r),
    (l.height = h * r),
    d.scale(r, r),
    (d.globalAlpha = config.a),
    (l.style.cssText =
      "opacity: " +
      config.a +
      ";position:fixed;top:0;left:0;z-index: " +
      config.z +
      ";width:100%;height:100%;pointer-events:none;"),
    document.getElementsByTagName("body")[0].appendChild(l),
    (document.onclick = t),
    (document.ontouchstart = t),
    t();
})();
