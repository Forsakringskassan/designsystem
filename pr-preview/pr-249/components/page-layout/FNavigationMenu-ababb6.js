"use strict";
(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });

  // docs/src/setup.ts
  var import_vue = __require("vue");
  var import_vue2 = __require("@fkui/vue");
  function setup(options) {
    const { rootComponent, selector } = options;
    const app = (0, import_vue.createApp)({
      render() {
        return (0, import_vue.h)(import_vue2.FErrorHandlingApp, { defaultComponent: rootComponent });
      }
    });
    (0, import_vue2.setRunningContext)(app);
    app.use(import_vue2.ErrorPlugin, {
      captureWarnings: true,
      logToConsole: true
    });
    app.use(import_vue2.ValidationPlugin);
    app.use(import_vue2.TestPlugin);
    app.use(import_vue2.TranslationPlugin);
    app.mount(selector);
  }

  // virtual-entry:./docs/components/page-layout/FNavigationMenu.md
  var import_vue4 = __require("vue");

  // node_modules/vue-router/dist/vue-router.mjs
  var import_vue3 = __require("vue");
  var isArray = Array.isArray;
  var NavigationType;
  (function(NavigationType2) {
    NavigationType2["pop"] = "pop";
    NavigationType2["push"] = "push";
  })(NavigationType || (NavigationType = {}));
  var NavigationDirection;
  (function(NavigationDirection2) {
    NavigationDirection2["back"] = "back";
    NavigationDirection2["forward"] = "forward";
    NavigationDirection2["unknown"] = "";
  })(NavigationDirection || (NavigationDirection = {}));
  var NavigationFailureSymbol = Symbol(true ? "navigation failure" : "");
  var NavigationFailureType;
  (function(NavigationFailureType2) {
    NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
    NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
    NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
  })(NavigationFailureType || (NavigationFailureType = {}));
  var matchedRouteKey = Symbol(true ? "router view location matched" : "");
  var viewDepthKey = Symbol(true ? "router view depth" : "");
  var routerKey = Symbol(true ? "router" : "");
  var routeLocationKey = Symbol(true ? "route location" : "");
  var routerViewLocationKey = Symbol(true ? "router view location" : "");
  function useRouter() {
    return (0, import_vue3.inject)(routerKey);
  }

  // virtual-entry:./docs/components/page-layout/FNavigationMenu.md
  var exampleComponent = /* @__PURE__ */ (0, import_vue4.defineComponent)({
    __name: "FNavigationMenu",
    setup(__props, { expose: __expose }) {
      __expose();
      const router = useRouter();
      function onSelectedRoute(route) {
        router.push({
          name: route
        });
      }
      const __returned__ = { router, onSelectedRoute, get useRouter() {
        return useRouter;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  setup({
    rootComponent: exampleComponent,
    selector: "#FNavigationMenu"
  });
})();
/*! Bundled license information:

vue-router/dist/vue-router.mjs:
  (*!
    * vue-router v4.5.0
    * (c) 2024 Eduardo San Martin Morote
    * @license MIT
    *)
*/
