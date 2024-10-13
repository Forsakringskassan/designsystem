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
    app.use(import_vue2.ErrorPlugin);
    app.use(import_vue2.ValidationPlugin);
    app.use(import_vue2.TestPlugin);
    app.use(import_vue2.TranslationPlugin);
    app.mount(selector);
    app.config.warnHandler = (msg, vm, trace) => {
      console.warn(`Warning:`, msg, trace);
      throw new Error(msg);
    };
  }

  // virtual-entry:./packages/vue/src/components/FStaticField/examples/FStaticFieldInput.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FStaticFieldTextField",
    components: { FStaticField: import_vue4.FStaticField, FTextField: import_vue4.FTextField },
    data() {
      return { name: "" };
    }
  });
  var _hoisted_1 = { "data-test": "output-field" };
  function render(_ctx, _cache) {
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _component_f_static_field = (0, import_vue5.resolveComponent)("f-static-field");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", _hoisted_1, [
      (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
        id: "normal",
        modelValue: _ctx.name,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.name = $event)
      }, {
        default: (0, import_vue5.withCtx)(() => [
          (0, import_vue5.createTextVNode)("\n            Namn\n        ")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])), [
        [
          _directive_validation,
          { maxLength: { length: 100 } },
          void 0,
          { maxLength: true }
        ]
      ]),
      (0, import_vue5.createTextVNode)(),
      (0, import_vue5.createVNode)(_component_f_static_field, null, {
        label: (0, import_vue5.withCtx)(() => [
          (0, import_vue5.createTextVNode)(" Beskrivning ")
        ]),
        default: (0, import_vue5.withCtx)(() => [
          (0, import_vue5.createTextVNode)("\n            En liten statisk beskrivning.\n        ")
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FStaticFieldInput"
  });
})();