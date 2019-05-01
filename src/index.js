const a11yClick = {
  install(Vue) {
    let handleKeyUp, handleKeyDown;

    Vue.directive("a11y-click", {
      bind(el) {
        let pressed = false;

        handleKeyDown = () => {
          // enter keycode = 13
          if (event.keyCode !== 13 || pressed) return;
          pressed = true;
          el.setAttribute("aria-pressed", "true");
          el.click();
        };

        handleKeyUp = () => {
          if (event.keyCode !== 13) return;
          pressed = false;
          el.setAttribute("aria-pressed", "false");
        };

        el.tabIndex = 0;
        el.setAttribute("role", "button");
        el.setAttribute("aria-pressed", "false");

        el.addEventListener("keydown", handleKeyDown);
        el.addEventListener("keyup", handleKeyUp);
      },
      unbind(el) {
        el.removeEventListener("keyup", handleKeyUp);
        el.removeEventListener("keydown", handleKeyDown);
      }
    });
  }
};

// auto install
if (typeof window !== "undefined" && typeof window.Vue !== "undefined") {
  window.Vue.use(a11yClick);
}

export default a11yClick;
