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

  // virtual-entry:./packages/vue/src/components/FStaticField/examples/FStaticFieldTooltipDescription.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FStaticFieldTooltipDescription",
    components: { FStaticField: import_vue4.FStaticField, FTooltip: import_vue4.FTooltip }
  });
  var _hoisted_1 = { "data-test": "output-field" };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_tooltip = (0, import_vue5.resolveComponent)("f-tooltip");
    const _component_f_static_field = (0, import_vue5.resolveComponent)("f-static-field");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", _hoisted_1, [
      (0, import_vue5.createVNode)(_component_f_static_field, null, {
        label: (0, import_vue5.withCtx)(() => _cache[0] || (_cache[0] = [
          (0, import_vue5.createTextVNode)(" Etikett ")
        ])),
        tooltip: (0, import_vue5.withCtx)(() => [
          (0, import_vue5.createVNode)(_component_f_tooltip, { "screen-reader-text": "L\xE4s mer om avancerat f\xE4lt" }, {
            header: (0, import_vue5.withCtx)(() => _cache[1] || (_cache[1] = [
              (0, import_vue5.createTextVNode)(" Mer om avancerat f\xE4lt ")
            ])),
            body: (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
              (0, import_vue5.createTextVNode)(" Detta f\xE4ltet kr\xE4ver lite n\xE4rmare f\xF6rklaring. ")
            ])),
            _: 1
            /* STABLE */
          })
        ]),
        description: (0, import_vue5.withCtx)(({ descriptionClass, discreteDescriptionClass }) => [
          (0, import_vue5.createElementVNode)(
            "span",
            {
              class: (0, import_vue5.normalizeClass)(descriptionClass)
            },
            " Beskrivning av etikett ",
            2
            /* CLASS */
          ),
          (0, import_vue5.createElementVNode)(
            "span",
            {
              class: (0, import_vue5.normalizeClass)(discreteDescriptionClass)
            },
            " (format) ",
            2
            /* CLASS */
          )
        ]),
        default: (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
          (0, import_vue5.createTextVNode)(" En liten statisk text. ")
        ])),
        _: 1
        /* STABLE */
      })
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FStaticFieldTooltipDescription"
  });
})();
