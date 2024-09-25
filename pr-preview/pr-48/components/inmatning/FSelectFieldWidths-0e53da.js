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

  // virtual-entry:./packages/vue/src/components/FSelectField/examples/FSelectFieldWidths.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FSelectFieldWidths",
    components: { FSelectField: import_vue4.FSelectField },
    data() {
      return { foo: "" };
    }
  });
  var _hoisted_1 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    {
      disabled: "",
      hidden: "",
      value: ""
    },
    "V\xE4lj\u2026",
    -1
    /* HOISTED */
  );
  var _hoisted_2 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "FOO" },
    "Foo",
    -1
    /* HOISTED */
  );
  var _hoisted_3 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "BAR" },
    "Bar",
    -1
    /* HOISTED */
  );
  var _hoisted_4 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "BAZ" },
    "Baz",
    -1
    /* HOISTED */
  );
  function render(_ctx, _cache) {
    const _component_f_select_field = (0, import_vue5.resolveComponent)("f-select-field");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_select_field, {
      modelValue: _ctx.foo,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.foo = $event),
      "label-width": "md-9",
      "select-width": "md-6"
    }, {
      label: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createTextVNode)("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque lacus sed mi\n            mollis pulvinar.\n        ")
      ]),
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createTextVNode)(),
        _hoisted_1,
        (0, import_vue5.createTextVNode)(),
        _hoisted_2,
        (0, import_vue5.createTextVNode)(),
        _hoisted_3,
        (0, import_vue5.createTextVNode)(),
        _hoisted_4
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"])), [
      [
        _directive_validation,
        void 0,
        void 0,
        { required: true }
      ]
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FSelectFieldWidths"
  });
})();
