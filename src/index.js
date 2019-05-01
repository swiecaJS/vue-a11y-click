const a11yClick = {
  install(Vue) {
    Vue.directive("a11y-click", {
      bind(el) {
        let pressed = false;

        el.tabIndex = 0;
        el.setAttribute("role", "button");
        el.setAttribute("aria-pressed", "false");

        el.addEventListener("keydown", () => {
          // enter keycode = 13
          if (event.keyCode !== 13 || pressed) return;
          pressed = true;
          el.setAttribute("aria-pressed", "true");
          el.click();
        });

        el.addEventListener("keyup", () => {
          if (event.keyCode !== 13) return;
          pressed = false;
          el.setAttribute("aria-pressed", "false");
        });
      },
      unbind(el) {
        el.removeEventListener("keyup");
      }
    });
  }
};

// auto install
if (typeof window !== "undefined" && typeof window.Vue !== "undefined") {
  window.Vue.use(a11yClick);
}

export default a11yClick;
