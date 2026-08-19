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

  // virtual-entry:./packages/vue/src/components/FLogo/examples/FLogoLiveExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("vue");
  var import_vue5 = __require("@fkui/vue");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");
  var import_vue6 = __require("vue");
  var exampleComponent = /* @__PURE__ */ (0, import_vue3.defineComponent)({
    __name: "FLogoLiveExample",
    setup(__props, { expose: __expose }) {
      __expose();
      const logoSize = (0, import_vue4.ref)("responsive");
      const components = (0, import_vue4.computed)(() => {
        return {
          FLogo: import_vue5.FLogo
        };
      });
      const template = (0, import_vue4.computed)(() => {
        const size = logoSize.value !== "responsive" ? logoSize.value : void 0;
        return (0, import_docs_live_example.createElement)("f-logo", { size }, "awesome logo");
      });
      const __returned__ = { logoSize, components, template, get FSelectField() {
        return import_vue5.FSelectField;
      }, get LiveExample() {
        return import_docs_live_example.LiveExample;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue6.openBlock)(), (0, import_vue6.createBlock)($setup["LiveExample"], {
      components: $setup.components,
      template: $setup.template
    }, {
      default: (0, import_vue6.withCtx)(() => [
        (0, import_vue6.createVNode)($setup["FSelectField"], {
          modelValue: $setup.logoSize,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.logoSize = $event)
        }, {
          label: (0, import_vue6.withCtx)(() => _cache[1] || (_cache[1] = [
            (0, import_vue6.createTextVNode)(" Storlek ")
          ])),
          default: (0, import_vue6.withCtx)(() => [
            _cache[2] || (_cache[2] = (0, import_vue6.createElementVNode)(
              "option",
              { value: "responsive" },
              "Responsiv",
              -1
              /* HOISTED */
            )),
            _cache[3] || (_cache[3] = (0, import_vue6.createElementVNode)(
              "option",
              { value: "small" },
              "Liten",
              -1
              /* HOISTED */
            )),
            _cache[4] || (_cache[4] = (0, import_vue6.createElementVNode)(
              "option",
              { value: "large" },
              "Stor",
              -1
              /* HOISTED */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["components", "template"]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FLogoLiveExample"
  });
})();
