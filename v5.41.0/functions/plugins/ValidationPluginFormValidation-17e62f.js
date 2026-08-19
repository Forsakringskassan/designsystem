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

  // virtual-entry:./packages/vue/src/plugins/validation/examples/ValidationPluginFormValidation.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "ValidationPluginFormValidation",
    components: { FValidationForm: import_vue4.FValidationForm, FTextField: import_vue4.FTextField }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _component_f_validation_form = (0, import_vue5.resolveComponent)("f-validation-form");
    const _directive_validation_prefix = (0, import_vue5.resolveDirective)("validation-prefix");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    const _directive_test = (0, import_vue5.resolveDirective)("test");
    return (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_validation_form, null, {
      "error-message": (0, import_vue5.withCtx)(() => _cache[0] || (_cache[0] = [
        (0, import_vue5.createTextVNode)(" Fel i f\xF6ljande f\xE4lt... ")
      ])),
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
          (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, { maxlength: 100 }, {
            default: (0, import_vue5.withCtx)(() => _cache[1] || (_cache[1] = [
              (0, import_vue5.createTextVNode)(" Okreativ etikett ")
            ])),
            _: 1
            /* STABLE */
          })), [
            [
              _directive_validation_prefix,
              "1 ",
              void 0,
              { maxLength: true }
            ],
            [
              _directive_validation,
              void 0,
              void 0,
              { required: true }
            ]
          ]),
          (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, { maxlength: 100 }, {
            default: (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
              (0, import_vue5.createTextVNode)(" Okreativ etikett ")
            ])),
            _: 1
            /* STABLE */
          })), [
            [
              _directive_validation_prefix,
              "2 ",
              void 0,
              { maxLength: true }
            ],
            [
              _directive_validation,
              void 0,
              void 0,
              { required: true }
            ]
          ]),
          (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, { maxlength: 100 }, {
            default: (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
              (0, import_vue5.createTextVNode)(" Okreativ etikett ")
            ])),
            _: 1
            /* STABLE */
          })), [
            [
              _directive_validation_prefix,
              "3 ",
              void 0,
              { maxLength: true }
            ],
            [
              _directive_validation,
              void 0,
              void 0,
              { required: true }
            ]
          ])
        ])), [
          [_directive_validation_prefix, "PREFIX "]
        ]),
        _cache[4] || (_cache[4] = (0, import_vue5.createElementVNode)(
          "button",
          { type: "submit" },
          "Trigga fel",
          -1
          /* HOISTED */
        ))
      ]),
      _: 1
      /* STABLE */
    })), [
      [_directive_test, "form-validation-prefix"]
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#ValidationPluginFormValidation"
  });
})();
