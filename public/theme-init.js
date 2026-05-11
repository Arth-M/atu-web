/*
  Anti-flash script — runs synchronously BEFORE the first paint.
  It reads localStorage and applies [data-theme] immediately,
  so the user never sees a flash of the wrong theme.
*/

(function () {
  try {
    var t = localStorage.getItem("theme");
    if (t && ["classic", "dark", "colorful"].includes(t)) {
      document.documentElement.dataset.theme = t;
    } else {
      document.documentElement.dataset.theme = "classic";
    }
  } catch (e) {
    document.documentElement.dataset.theme = "classic";
  }
})();
