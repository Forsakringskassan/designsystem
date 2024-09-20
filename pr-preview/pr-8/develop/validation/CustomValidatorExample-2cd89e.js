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

  // virtual-entry:./docs/patterns/validering/examples/CustomValidatorExample.vue
  var import_vue3 = __require("@fkui/vue");
  var import_logic = __require("@fkui/logic");
  var import_vue4 = __require("vue");
  var import_vue5 = __require("vue");
  function startsWithPattern(input, pattern) {
    return input.startsWith(pattern);
  }
  var defaultConfig = {
    startString: "demo"
  };
  var startsWithValidator = {
    name: "startsWith",
    validation(value, element, userConfig) {
      if ((0, import_logic.isEmpty)(value)) {
        return true;
      }
      const config = { ...defaultConfig, ...userConfig };
      return startsWithPattern(value, config.startString);
    }
  };
  import_logic.ValidationService.registerValidator(startsWithValidator);
  import_logic.ValidationService.addValidationErrorMessages(
    import_logic.ValidationErrorMessageBuilder.create().map("startsWith", "F\xE4ltet b\xF6rjar med fel v\xE4rde.").build()
  );
  var exampleComponent = (0, import_vue4.defineComponent)({
    name: "CustomValidator",
    components: { FTextField: import_vue3.FTextField },
    data() {
      return {
        modelFoo: "",
        modelBar: "",
        modelDemo: ""
      };
    }
  });
  function render(_ctx, _cache) {
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
        modelValue: _ctx.modelFoo,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.modelFoo = $event)
      }, {
        description: (0, import_vue5.withCtx)(({ descriptionClass }) => [
          (0, import_vue5.createElementVNode)(
            "span",
            {
              class: (0, import_vue5.normalizeClass)(descriptionClass)
            },
            " Anv\xE4nder globalt felmeddelande ",
            2
            /* CLASS */
          )
        ]),
        default: (0, import_vue5.withCtx)(() => [
          (0, import_vue5.createTextVNode)("\n            Detta f\xE4lt accepterar bara str\xE4ngar som b\xF6rjar med 'foo'\n            ")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])), [
        [
          _directive_validation,
          {
            startsWith: { startString: "foo" },
            maxLength: { length: 20 }
          },
          void 0,
          {
            startsWith: true,
            maxLength: true
          }
        ]
      ]),
      (0, import_vue5.createTextVNode)(),
      (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
        modelValue: _ctx.modelBar,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.modelBar = $event)
      }, {
        description: (0, import_vue5.withCtx)(({ descriptionClass }) => [
          (0, import_vue5.createElementVNode)(
            "span",
            {
              class: (0, import_vue5.normalizeClass)(descriptionClass)
            },
            " Anv\xE4nder ett specifik felmeddelande ",
            2
            /* CLASS */
          )
        ]),
        default: (0, import_vue5.withCtx)(() => [
          (0, import_vue5.createTextVNode)("\n            Detta f\xE4lt accepterar bara str\xE4ngar som b\xF6rjar med 'bar'\n            ")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])), [
        [
          _directive_validation,
          {
            startsWith: {
              startString: "bar",
              errorMessage: "Texten m\xE5ste b\xF6rja med bar"
            },
            maxLength: { length: 20 }
          },
          void 0,
          {
            startsWith: true,
            maxLength: true
          }
        ]
      ]),
      (0, import_vue5.createTextVNode)(),
      (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
        modelValue: _ctx.modelDemo,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.modelDemo = $event)
      }, {
        description: (0, import_vue5.withCtx)(({ descriptionClass }) => [
          (0, import_vue5.createElementVNode)(
            "span",
            {
              class: (0, import_vue5.normalizeClass)(descriptionClass)
            },
            " Saknar konfiguration f\xF6r `startsWith` ",
            2
            /* CLASS */
          )
        ]),
        default: (0, import_vue5.withCtx)(() => [
          (0, import_vue5.createTextVNode)("\n            Detta f\xE4lt accepterar bara str\xE4ngar som b\xF6rjar med 'demo'\n            ")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])), [
        [
          _directive_validation,
          {
            maxLength: { length: 20 }
          },
          void 0,
          {
            startsWith: true,
            maxLength: true
          }
        ]
      ])
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#CustomValidatorExample"
  });
})();