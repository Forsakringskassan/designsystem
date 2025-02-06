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

  // virtual-entry:./packages/vue/src/components/FNavigationMenu/examples/FNavigationMenuLiveExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FNavigationMenuLiveExample",
    components: { LiveExample: import_docs_live_example.LiveExample, FCheckboxField: import_vue4.FCheckboxField },
    data() {
      return {
        isVertical: false
      };
    },
    computed: {
      livedata() {
        return {
          routes: [
            { label: "label1", route: "ROUTE_1" },
            { label: "label2", route: "ROUTE_2" },
            { label: "label3", route: "ROUTE_3" },
            { label: "label4", route: "ROUTE_4" },
            { label: "label5", route: "ROUTE_5" }
          ]
        };
      },
      components() {
        return { FNavigationMenu: import_vue4.FNavigationMenu };
      },
      vertical() {
        return this.isVertical ? "vertical" : "";
      },
      template() {
        return (
          /* HTML */
          `
                <f-navigation-menu
                    aria-label="Example navigation"
                    :routes="routes"
                    ${this.vertical}
                ></f-navigation-menu>
            `
        );
      }
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_checkbox_field = (0, import_vue5.resolveComponent)("f-checkbox-field");
    const _component_live_example = (0, import_vue5.resolveComponent)("live-example");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_live_example, {
      components: _ctx.components,
      template: _ctx.template,
      livedata: _ctx.livedata
    }, {
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isVertical,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.isVertical = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[1] || (_cache[1] = [
            (0, import_vue5.createTextVNode)(" Vertikal ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["components", "template", "livedata"]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FNavigationMenuLiveExample"
  });
})();
