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

// virtual-entry:virtual:packages/vue/src/components/FNavigationMenu/examples/FNavigationMenuOverflow.vue:FNavigationMenuOverflow-1a227e.js
import { FNavigationMenu } from "@fkui/vue";

// packages/vue/src/components/FNavigationMenu/examples/router.ts
function generateExampleLabelsAndRoutes(nbRoutes) {
  const res = [];
  for (let i = 0; i < nbRoutes; i++) {
    res.push({ label: `label${i + 1}`, route: `ROUTE_${i + 1}` });
  }
  return res;
}
var routes = generateExampleLabelsAndRoutes(10);

// virtual-entry:virtual:packages/vue/src/components/FNavigationMenu/examples/FNavigationMenuOverflow.vue:FNavigationMenuOverflow-1a227e.js
import { openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = {
  __name: "FNavigationMenuOverflow",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get FNavigationMenu() {
      return FNavigationMenu;
    }, get routes() {
      return routes;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FNavigationMenu"], { routes: $setup.routes }, null, 8, ["routes"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-1a227e"
});
export {
  render
};
