webpackHotUpdate(0,{

/***/ "./components/Layout/layout.css":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"title":"title___2cGPb"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1522750017386");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=0.6d2df52f99ca759b2619.hot-update.js.map