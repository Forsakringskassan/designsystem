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

  // virtual-entry:./packages/vue/src/plugins/validation/examples/ValidationPluginDynamicValidation.vue
  var import_vue3 = __require("vue");
  var import_logic = __require("@fkui/logic");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  import_logic.ValidationService.registerValidator({
    name: "notShorter",
    validation(value, element, config) {
      return value.length >= config.minLength;
    }
  });
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "ValidationPluginDynamicValidation",
    components: {
      FValidationForm: import_vue4.FValidationForm,
      FTextField: import_vue4.FTextField
    },
    data() {
      return {
        name: "",
        minLength: "8"
      };
    }
  });
  var _hoisted_1 = { class: "row" };
  var _hoisted_2 = {
    id: "min-name",
    class: "col col--md-6"
  };
  var _hoisted_3 = {
    id: "min-minLength",
    class: "col col--md-6"
  };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _component_f_validation_form = (0, import_vue5.resolveComponent)("f-validation-form");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_validation_form, { "use-error-list": false }, {
      "error-message": (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
        (0, import_vue5.createTextVNode)(" Alla fr\xE5gor \xE4r inte korrekt ifyllda. Titta i: ")
      ])),
      default: (0, import_vue5.withCtx)(() => [
        _cache[5] || (_cache[5] = (0, import_vue5.createElementVNode)(
          "p",
          null,
          "Namn f\xE5r inte vara kortare \xE4n minsta l\xE4ngd.",
          -1
          /* HOISTED */
        )),
        (0, import_vue5.createElementVNode)("div", _hoisted_1, [
          (0, import_vue5.createElementVNode)("div", _hoisted_2, [
            (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
              modelValue: _ctx.name,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.name = $event)
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
                (0, import_vue5.createTextVNode)(" Namn ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])), [
              [
                _directive_validation,
                {
                  notShorter: {
                    minLength: _ctx.minLength,
                    errorMessage: "Namn f\xE5r inte vara kortare \xE4n minimum l\xE4ngd"
                  },
                  maxLength: { length: 100 }
                },
                void 0,
                {
                  required: true,
                  maxLength: true,
                  notShorter: true
                }
              ]
            ])
          ]),
          (0, import_vue5.createElementVNode)("div", _hoisted_3, [
            (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
              modelValue: _ctx.minLength,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.minLength = $event)
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[4] || (_cache[4] = [
                (0, import_vue5.createTextVNode)(" Minimuml\xE4ngd ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])), [
              [
                _directive_validation,
                { maxLength: { length: 100 } },
                void 0,
                {
                  required: true,
                  maxLength: true
                }
              ]
            ])
          ])
        ]),
        _cache[6] || (_cache[6] = (0, import_vue5.createElementVNode)(
          "button",
          {
            class: "button",
            type: "submit"
          },
          "Signera",
          -1
          /* HOISTED */
        ))
      ]),
      _: 1
      /* STABLE */
    });
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#ValidationPluginDynamicValidation"
  });
})();
