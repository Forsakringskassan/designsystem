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

  // virtual-entry:./packages/vue/src/plugins/validation/examples/ValidationPluginToggleDisable.vue
  var import_vue3 = __require("vue");
  var import_logic = __require("@fkui/logic");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "ValidationPluginToggleDisable",
    components: {
      FTextField: import_vue4.FTextField,
      FFieldset: import_vue4.FFieldset,
      FRadioField: import_vue4.FRadioField
    },
    data() {
      return {
        name: "Ett f\xF6r l\xE5ngt namn",
        isDisabled: false
      };
    },
    methods: {
      async onToggleDisable() {
        await this.$nextTick();
        if (this.isDisabled) {
          const wrapper = (0, import_vue4.getElementFromVueRef)(this.$refs.inputField);
          const input = wrapper.querySelector("input");
          import_logic.ValidationService.validateElement(input);
        }
      }
    }
  });
  var _hoisted_1 = { class: "row" };
  var _hoisted_2 = { class: "col col--md-6" };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_radio_field = (0, import_vue5.resolveComponent)("f-radio-field");
    const _component_f_fieldset = (0, import_vue5.resolveComponent)("f-fieldset");
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _directive_test = (0, import_vue5.resolveDirective)("test");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createVNode)(_component_f_fieldset, {
        id: "is-disabled",
        name: "color",
        onChange: _ctx.onToggleDisable
      }, {
        label: (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
          (0, import_vue5.createTextVNode)(" Ska inmatningsf\xE4ltet vara inaktivt? ")
        ])),
        default: (0, import_vue5.withCtx)(() => [
          (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_radio_field, {
            id: "disabled-no",
            modelValue: _ctx.isDisabled,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.isDisabled = $event),
            value: false
          }, {
            default: (0, import_vue5.withCtx)(() => _cache[4] || (_cache[4] = [
              (0, import_vue5.createTextVNode)(" Nej ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])), [
            [_directive_test, "disabled-no"]
          ]),
          (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_radio_field, {
            id: "disabled-yes",
            modelValue: _ctx.isDisabled,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.isDisabled = $event),
            value: true
          }, {
            default: (0, import_vue5.withCtx)(() => _cache[5] || (_cache[5] = [
              (0, import_vue5.createTextVNode)(" Ja ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])), [
            [_directive_test, "disabled-yes"]
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onChange"]),
      (0, import_vue5.createElementVNode)("div", _hoisted_1, [
        (0, import_vue5.createElementVNode)("div", _hoisted_2, [
          (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
            id: "dynamic-disable",
            ref: "inputField",
            modelValue: _ctx.name,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.name = $event),
            disabled: _ctx.isDisabled
          }, {
            default: (0, import_vue5.withCtx)(() => _cache[6] || (_cache[6] = [
              (0, import_vue5.createTextVNode)(" Namn ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "disabled"])), [
            [_directive_test, "dynamic-disable"],
            [
              _directive_validation,
              { maxLength: { length: 10 } },
              void 0,
              { maxLength: true }
            ]
          ])
        ])
      ])
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#ValidationPluginToggleDisable"
  });
})();
