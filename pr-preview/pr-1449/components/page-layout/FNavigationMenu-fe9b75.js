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

// virtual-entry:virtual:docs/components/page-layout/FNavigationMenu.md:FNavigationMenu-fe9b75.js
import { defineComponent as _defineComponent } from "vue";

// node_modules/vue-router/dist/useApi-s_02lHjl.js
import { inject } from "vue";
var routerKey = /* @__PURE__ */ Symbol(true ? "router" : "");
function useRouter() {
  return inject(routerKey);
}

// node_modules/vue-router/dist/vue-router.js
import { computed, defineComponent, getCurrentInstance, h as h2, inject as inject2, nextTick, provide, reactive, ref, shallowReactive, shallowRef, unref, watch, watchEffect } from "vue";

// virtual-entry:virtual:docs/components/page-layout/FNavigationMenu.md:FNavigationMenu-fe9b75.js
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
  selector: "#example-fe9b75"
});
/*! Bundled license information:

vue-router/dist/useApi-s_02lHjl.js:
vue-router/dist/vue-router.js:
  (*!
  * vue-router v5.1.0
  * (c) 2026 Eduardo San Martin Morote
  * @license MIT
  *)
*/
