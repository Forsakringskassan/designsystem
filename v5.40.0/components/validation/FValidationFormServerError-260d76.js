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

  // virtual-entry:./packages/vue/src/components/FValidationForm/examples/FValidationFormServerError.vue
  var import_vue3 = __require("vue");
  var import_logic = __require("@fkui/logic");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FValidationFormServerError",
    components: { FTextField: import_vue4.FTextField, FValidationForm: import_vue4.FValidationForm },
    data() {
      return {
        field1: "",
        field2: ""
      };
    },
    methods: {
      onSubmit() {
        alert("Spara");
      },
      onCancel() {
        alert("Avbryt");
      },
      async runServerValidation() {
        await new Promise((resolve) => setTimeout(resolve, 1e3));
        const field1 = (0, import_vue4.getElementFromVueRef)(this.$refs.field1);
        import_logic.ValidationService.setError(field1, "Serverfel");
        return import_vue4.FValidationFormAction.CANCEL;
      }
    }
  });
  var _hoisted_1 = { class: "button-group" };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _component_f_validation_form = (0, import_vue5.resolveComponent)("f-validation-form");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_validation_form, {
      "before-submit": _ctx.runServerValidation,
      onSubmit: _ctx.onSubmit
    }, {
      "error-message": (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
        (0, import_vue5.createTextVNode)(" Oj, du har gl\xF6mt fylla i n\xE5got. G\xE5 till: ")
      ])),
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
          ref: "field1",
          modelValue: _ctx.field1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.field1 = $event)
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[4] || (_cache[4] = [
            (0, import_vue5.createTextVNode)(" Ett inmatningsf\xE4lt ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])), [
          [
            _directive_validation,
            { maxLength: { length: 32 } },
            void 0,
            {
              required: true,
              maxLength: true
            }
          ]
        ]),
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
          modelValue: _ctx.field2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.field2 = $event)
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[5] || (_cache[5] = [
            (0, import_vue5.createTextVNode)(" Ett annat inmatningsf\xE4lt ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])), [
          [
            _directive_validation,
            { maxLength: { length: 32 } },
            void 0,
            {
              required: true,
              maxLength: true
            }
          ]
        ]),
        (0, import_vue5.createElementVNode)("div", _hoisted_1, [
          _cache[6] || (_cache[6] = (0, import_vue5.createElementVNode)(
            "button",
            {
              type: "submit",
              class: "button button-group__item button--primary button--large"
            },
            " Spara ",
            -1
            /* HOISTED */
          )),
          (0, import_vue5.createElementVNode)("button", {
            type: "button",
            class: "button button-group__item button--secondary button--large",
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onCancel && _ctx.onCancel(...args))
          }, " Avbryt ")
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["before-submit", "onSubmit"]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FValidationFormServerError"
  });
})();
