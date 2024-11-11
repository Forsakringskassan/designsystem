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

  // virtual-entry:./packages/vue/src/components/FNavigationMenu/examples/FNavigationMenuOverflow.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");

  // packages/vue/src/components/FNavigationMenu/examples/router.ts
  function generateExampleLabelsAndRoutes(nbRoutes) {
    const res = [];
    for (let i = 0; i < nbRoutes; i++) {
      res.push({ label: `label${i + 1}`, route: `ROUTE_${i + 1}` });
    }
    return res;
  }
  var routes = generateExampleLabelsAndRoutes(10);

  // virtual-entry:./packages/vue/src/components/FNavigationMenu/examples/FNavigationMenuOverflow.vue
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FNavigationMenuOverflow",
    components: { FNavigationMenu: import_vue4.FNavigationMenu },
    data() {
      return {
        routes
      };
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_navigation_menu = (0, import_vue5.resolveComponent)("f-navigation-menu");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_navigation_menu, { routes: _ctx.routes }, null, 8, ["routes"]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FNavigationMenuOverflow"
  });
})();
