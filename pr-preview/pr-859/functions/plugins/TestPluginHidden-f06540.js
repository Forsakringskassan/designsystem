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

  // virtual-entry:./packages/vue/src/plugins/test/examples/TestPluginHidden.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "TestPluginHidden",
    components: { FTextField: import_vue4.FTextField },
    data() {
      return { isVisible: false };
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      _ctx.isVisible ? (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
        key: 0,
        id: "child-name"
      }, {
        default: (0, import_vue5.withCtx)(() => _cache[1] || (_cache[1] = [
          (0, import_vue5.createTextVNode)(" Barnets namn ")
        ])),
        _: 1
        /* STABLE */
      })), [
        [
          _directive_validation,
          { maxLength: { length: 100 } },
          void 0,
          { maxLength: true }
        ]
      ]) : (0, import_vue5.createCommentVNode)("v-if", true),
      (0, import_vue5.createElementVNode)(
        "button",
        {
          type: "button",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.isVisible = !_ctx.isVisible)
        },
        (0, import_vue5.toDisplayString)(_ctx.isVisible ? "G\xF6m inmatningsf\xE4lt" : "Visa inmatningsf\xE4lt"),
        1
        /* TEXT */
      )
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#TestPluginHidden"
  });
})();
