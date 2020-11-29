/*
 * @Author    : zhjue
 * @Date      : 2020-11-29
 * @Software  : VSCode
 */

!(function () {
  if (
    "false" ===
      document.getElementById("click-show-text").getAttribute("mobile") &&
    /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)
  )
    return;
  let t = 0;
  document.body.addEventListener("click", function (e) {
    const n = GLOBAL_CONFIG.ClickShowText,
      o = n.text.split(","),
      i = document.createElement("span");
    n.random
      ? ((t = Math.floor(Math.random() * o.length)), (i.textContent = o[t]))
      : ((i.textContent = o[t]), (t = (t + 1) % o.length));
    const r = e.pageX;
    let a = e.pageY - 20;
    (i.style.cssText = `\n      z-index: 150;\n      top: ${a}px;\n      left: ${
      r - 20
    }px;\n      position: absolute;\n      font-weight: bold;\n      color: ${(function () {
      const t = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f".split(",");
      let e = "#";
      for (let n = 0; n < 6; n++) e += t[Math.floor(16 * Math.random())];
      return e;
    })()};\n      cursor: default;\n      font-size: ${
      n.fontSize || "inherit"
    };\n      word-break: break-word;\n    `),
      this.appendChild(i);
    const l = new Date().getTime();
    let d = 1;
    window.requestAnimationFrame(function t() {
      a--,
        (d -= 0.02),
        (i.style.top = a + "px"),
        (i.style.opacity = d),
        new Date().getTime() - l < 600
          ? window.requestAnimationFrame(t)
          : i.remove();
    });
  });
})();
