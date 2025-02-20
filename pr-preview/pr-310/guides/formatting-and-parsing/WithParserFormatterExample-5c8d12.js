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

  // virtual-entry:./docs/guides/validation/examples/WithParserFormatterExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  function myParser(value) {
    return value.toUpperCase();
  }
  function myFormatter(value) {
    return value.toLowerCase();
  }
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "WithParserFormatterExample",
    components: { FTextField: import_vue4.FTextField, FOutputField: import_vue4.FOutputField },
    data() {
      return {
        modelValue: "",
        myParser,
        myFormatter
      };
    }
  });
  var _hoisted_1 = { class: "row" };
  var _hoisted_2 = { class: "col col--md-9" };
  var _hoisted_3 = { class: "col col--md-3" };
  var _hoisted_4 = { class: "docs-pre" };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _component_f_output_field = (0, import_vue5.resolveComponent)("f-output-field");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", _hoisted_1, [
      (0, import_vue5.createElementVNode)("div", _hoisted_2, [
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
          id: "with-parser-formatter",
          modelValue: _ctx.modelValue,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.modelValue = $event),
          parser: _ctx.myParser,
          formatter: _ctx.myFormatter
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[1] || (_cache[1] = [
            (0, import_vue5.createTextVNode)(" Inmatningsf\xE4lt ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "parser", "formatter"])), [
          [
            _directive_validation,
            { maxLength: { length: 100 } },
            void 0,
            { maxLength: true }
          ]
        ])
      ]),
      (0, import_vue5.createElementVNode)("div", _hoisted_3, [
        (0, import_vue5.createVNode)(_component_f_output_field, { for: "with-parser-formatter" }, {
          label: (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
            (0, import_vue5.createTextVNode)(" modelValue ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)(
              "span",
              _hoisted_4,
              (0, import_vue5.toDisplayString)(JSON.stringify(_ctx.modelValue)),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#WithParserFormatterExample"
  });
})();
