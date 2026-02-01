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

// virtual-entry:virtual:docs/components/page-layout/FNavigationMenu.md:FNavigationMenu-c2a36a.js
import { defineComponent as _defineComponent } from "vue";

// node_modules/vue-router/dist/useApi-DQ_OuAZT.mjs
import { inject } from "vue";
var ErrorTypes = /* @__PURE__ */ (function(ErrorTypes2) {
  ErrorTypes2[ErrorTypes2["MATCHER_NOT_FOUND"] = 1] = "MATCHER_NOT_FOUND";
  ErrorTypes2[ErrorTypes2["NAVIGATION_GUARD_REDIRECT"] = 2] = "NAVIGATION_GUARD_REDIRECT";
  ErrorTypes2[ErrorTypes2["NAVIGATION_ABORTED"] = 4] = "NAVIGATION_ABORTED";
  ErrorTypes2[ErrorTypes2["NAVIGATION_CANCELLED"] = 8] = "NAVIGATION_CANCELLED";
  ErrorTypes2[ErrorTypes2["NAVIGATION_DUPLICATED"] = 16] = "NAVIGATION_DUPLICATED";
  return ErrorTypes2;
})({});
var ErrorTypeMessages = {
  [ErrorTypes.MATCHER_NOT_FOUND]({ location: location2, currentLocation }) {
    return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
  },
  [ErrorTypes.NAVIGATION_GUARD_REDIRECT]({ from, to }) {
    return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
  },
  [ErrorTypes.NAVIGATION_ABORTED]({ from, to }) {
    return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
  },
  [ErrorTypes.NAVIGATION_CANCELLED]({ from, to }) {
    return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
  },
  [ErrorTypes.NAVIGATION_DUPLICATED]({ from, to }) {
    return `Avoided redundant navigation to current location: "${from.fullPath}".`;
  }
};
var propertiesToLog = [
  "params",
  "query",
  "hash"
];
function stringifyRoute(to) {
  if (typeof to === "string") return to;
  if (to.path != null) return to.path;
  const location2 = {};
  for (const key of propertiesToLog) if (key in to) location2[key] = to[key];
  return JSON.stringify(location2, null, 2);
}
var routerKey = /* @__PURE__ */ Symbol(true ? "router" : "");
function useRouter() {
  return inject(routerKey);
}

// node_modules/vue-router/dist/vue-router.mjs
import { computed, defineComponent, getCurrentInstance, h as h2, inject as inject2, nextTick, provide, reactive, ref, shallowReactive, shallowRef, unref, watch, watchEffect } from "vue";
var TokenType = /* @__PURE__ */ (function(TokenType2) {
  TokenType2[TokenType2["Static"] = 0] = "Static";
  TokenType2[TokenType2["Param"] = 1] = "Param";
  TokenType2[TokenType2["Group"] = 2] = "Group";
  return TokenType2;
})({});
var ROOT_TOKEN = {
  type: TokenType.Static,
  value: ""
};

// virtual-entry:virtual:docs/components/page-layout/FNavigationMenu.md:FNavigationMenu-c2a36a.js
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
  selector: "#example-c2a36a"
});
/*! Bundled license information:

vue-router/dist/useApi-DQ_OuAZT.mjs:
vue-router/dist/vue-router.mjs:
  (*!
   * vue-router v5.0.0
   * (c) 2026 Eduardo San Martin Morote
   * @license MIT
   *)
*/
