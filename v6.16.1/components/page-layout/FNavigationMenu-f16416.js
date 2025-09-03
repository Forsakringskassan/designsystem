// docs/src/setup.ts
import { createApp, h } from "vue";
import {
  ErrorPlugin,
  FErrorHandlingApp,
  FormatPlugin,
  TestPlugin,
  TranslationPlugin,
  ValidationPlugin,
  setRunningContext
} from "@fkui/vue";
function setup(options) {
  const { rootComponent, selector } = options;
  const app = createApp({
    render() {
      return h(FErrorHandlingApp, { defaultComponent: rootComponent });
    }
  });
  setRunningContext(app);
  app.use(ErrorPlugin, {
    captureWarnings: true,
    logToConsole: true
  });
  app.use(ValidationPlugin);
  app.use(TestPlugin);
  app.use(TranslationPlugin);
  app.use(FormatPlugin);
  app.mount(selector);
}

// virtual-entry:virtual:docs/components/page-layout/FNavigationMenu.md:FNavigationMenu-f16416.js
import { defineComponent as _defineComponent } from "vue";

// node_modules/vue-router/dist/vue-router.mjs
import { getCurrentInstance, inject, onUnmounted, onDeactivated, onActivated, computed, unref, watchEffect, defineComponent, reactive, h as h2, provide, ref, watch, shallowRef, shallowReactive, nextTick } from "vue";
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
  return inject(routerKey);
}

// virtual-entry:virtual:docs/components/page-layout/FNavigationMenu.md:FNavigationMenu-f16416.js
var exampleComponent = /* @__PURE__ */ _defineComponent({
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
  selector: "#example-f16416"
});
/*! Bundled license information:

vue-router/dist/vue-router.mjs:
  (*!
    * vue-router v4.5.1
    * (c) 2025 Eduardo San Martin Morote
    * @license MIT
    *)
*/
