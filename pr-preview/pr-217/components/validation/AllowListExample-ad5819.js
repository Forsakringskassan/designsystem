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

  // virtual-entry:./docs/components/validation/examples/AllowListExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var import_vue6 = __require("vue");
  var exampleComponent = /* @__PURE__ */ (0, import_vue3.defineComponent)({
    __name: "AllowListExample",
    setup(__props, { expose: __expose }) {
      __expose();
      const model = (0, import_vue5.ref)("");
      const __returned__ = { model, get FTextField() {
        return import_vue4.FTextField;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _directive_validation = (0, import_vue6.resolveDirective)("validation");
    return (0, import_vue6.withDirectives)(((0, import_vue6.openBlock)(), (0, import_vue6.createBlock)($setup["FTextField"], {
      id: "input",
      modelValue: $setup.model,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event)
    }, {
      default: (0, import_vue6.withCtx)(() => _cache[1] || (_cache[1] = [
        (0, import_vue6.createTextVNode)(" Fyll i en text (alternativ i lista: foo, bar, baz)")
      ])),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"])), [
      [
        _directive_validation,
        { allowList: { list: ["foo", "bar", "baz"] } },
        void 0,
        { allowList: true }
      ]
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#AllowListExample"
  });
})();
