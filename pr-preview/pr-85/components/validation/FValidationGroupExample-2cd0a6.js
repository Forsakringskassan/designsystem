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

  // virtual-entry:./packages/vue/src/components/FValidationGroup/examples/FValidationGroupExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FValidationGroupExample",
    components: { FValidationGroup: import_vue4.FValidationGroup, FTextField: import_vue4.FTextField },
    data() {
      return { favoritGrupp: {} };
    }
  });
  function render(_ctx, _cache) {
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _component_f_validation_group = (0, import_vue5.resolveComponent)("f-validation-group");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createVNode)(_component_f_validation_group, {
        key: "favoritGrupp",
        modelValue: _ctx.favoritGrupp,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.favoritGrupp = $event)
      }, {
        default: (0, import_vue5.withCtx)(() => [
          (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
            id: "frukt",
            maxlength: "100"
          }, {
            default: (0, import_vue5.withCtx)(() => _cache[1] || (_cache[1] = [
              (0, import_vue5.createTextVNode)("\n                Favoritfrukt\n            ")
            ])),
            _: 1
            /* STABLE */
          })), [
            [
              _directive_validation,
              void 0,
              void 0,
              { required: true }
            ]
          ]),
          _cache[3] || (_cache[3] = (0, import_vue5.createTextVNode)()),
          (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
            id: "godis",
            maxlength: "100"
          }, {
            default: (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
              (0, import_vue5.createTextVNode)("\n                Favoritgodis\n            ")
            ])),
            _: 1
            /* STABLE */
          })), [
            [
              _directive_validation,
              void 0,
              void 0,
              { required: true }
            ]
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _cache[4] || (_cache[4] = (0, import_vue5.createTextVNode)()),
      _cache[5] || (_cache[5] = (0, import_vue5.createElementVNode)(
        "pre",
        null,
        "v-model",
        -1
        /* HOISTED */
      )),
      _cache[6] || (_cache[6] = (0, import_vue5.createTextVNode)()),
      (0, import_vue5.createElementVNode)(
        "pre",
        null,
        (0, import_vue5.toDisplayString)(_ctx.favoritGrupp),
        1
        /* TEXT */
      )
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FValidationGroupExample"
  });
})();