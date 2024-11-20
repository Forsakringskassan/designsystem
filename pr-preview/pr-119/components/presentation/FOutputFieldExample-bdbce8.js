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

  // virtual-entry:./packages/vue/src/components/FOutputField/examples/FOutputFieldExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FOutputFieldExample",
    components: { FOutputField: import_vue4.FOutputField, FTextField: import_vue4.FTextField, FTooltip: import_vue4.FTooltip },
    data() {
      return { number1: "1", number2: "2" };
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _component_f_tooltip = (0, import_vue5.resolveComponent)("f-tooltip");
    const _component_f_output_field = (0, import_vue5.resolveComponent)("f-output-field");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
        id: "one",
        modelValue: _ctx.number1,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.number1 = $event)
      }, {
        default: (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
          (0, import_vue5.createTextVNode)(" Nummer 1 ")
        ])),
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
      (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
        id: "two",
        modelValue: _ctx.number2,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.number2 = $event)
      }, {
        default: (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
          (0, import_vue5.createTextVNode)(" Nummer 2 ")
        ])),
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
      (0, import_vue5.createVNode)(_component_f_output_field, {
        id: "calculated",
        for: "one two"
      }, {
        label: (0, import_vue5.withCtx)(() => _cache[4] || (_cache[4] = [
          (0, import_vue5.createTextVNode)(" Summa ")
        ])),
        tooltip: (0, import_vue5.withCtx)(() => [
          (0, import_vue5.createVNode)(_component_f_tooltip, { "screen-reader-text": "L\xE4s mer om avancerat f\xE4lt" }, {
            header: (0, import_vue5.withCtx)(() => _cache[5] || (_cache[5] = [
              (0, import_vue5.createTextVNode)(" Mer om summa-f\xE4ltet ")
            ])),
            body: (0, import_vue5.withCtx)(() => _cache[6] || (_cache[6] = [
              (0, import_vue5.createTextVNode)(" Detta f\xE4ltet \xE4r en summa av nummer 1 och nummer 2. ")
            ])),
            _: 1
            /* STABLE */
          })
        ]),
        default: (0, import_vue5.withCtx)(() => [
          (0, import_vue5.createTextVNode)(
            " " + (0, import_vue5.toDisplayString)(parseInt(_ctx.number1) + parseInt(_ctx.number2)),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FOutputFieldExample"
  });
})();
