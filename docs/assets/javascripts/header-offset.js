// Measures the real rendered height of the custom header and the tab bar,
// then writes them into CSS variables so the fixed header/tabs and the
// page's top padding always line up exactly — at any window size, on any
// breakpoint, with no hardcoded pixel guessing.
(function () {
  function updateOffsets() {
    var header = document.querySelector(".ds-header");
    var tabs = document.querySelector(".md-tabs");
    var headerHeight = header ? header.offsetHeight : 0;
    var tabsHeight = tabs ? tabs.offsetHeight : 0;

    document.documentElement.style.setProperty("--ds-header-h", headerHeight + "px");
    document.documentElement.style.setProperty("--ds-tabs-h", tabsHeight + "px");
  }

  document.addEventListener("DOMContentLoaded", updateOffsets);
  window.addEventListener("load", updateOffsets);
  window.addEventListener("resize", updateOffsets);
})();
