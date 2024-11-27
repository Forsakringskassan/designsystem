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

  // virtual-entry:./packages/vue/src/components/FCheckboxField/examples/FCheckboxGroupValues.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FCheckboxGroupValues",
    components: { FFieldset: import_vue4.FFieldset, FCheckboxField: import_vue4.FCheckboxField },
    data() {
      return {
        brochures: []
      };
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_checkbox_field = (0, import_vue5.resolveComponent)("f-checkbox-field");
    const _component_f_fieldset = (0, import_vue5.resolveComponent)("f-fieldset");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_fieldset, { name: "checkbox-complex-values" }, {
      label: (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
        (0, import_vue5.createTextVNode)(" Broschyrer ")
      ])),
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          id: "broschyrer-bor-eller-arbetar-utomlands",
          modelValue: _ctx.brochures,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.brochures = $event),
          value: ["Om du bor eller arbetar utomlands"]
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
            (0, import_vue5.createTextVNode)(" Om du bor eller arbetar utomlands ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          id: "broschyrer-offentlighet-sekretess",
          modelValue: _ctx.brochures,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.brochures = $event),
          value: { offentlighet: false, sekretess: true }
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[4] || (_cache[4] = [
            (0, import_vue5.createTextVNode)(" Offentlighet och sekretess ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])
      ]),
      _: 1
      /* STABLE */
    });
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FCheckboxGroupValues"
  });
})();