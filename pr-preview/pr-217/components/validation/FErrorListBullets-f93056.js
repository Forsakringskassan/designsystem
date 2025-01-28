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

  // virtual-entry:./packages/vue/src/components/FErrorList/examples/FErrorListBullets.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FErrorListBullets",
    components: { FErrorList: import_vue4.FErrorList, FTextField: import_vue4.FTextField },
    data() {
      return {
        items: [
          { id: "fornamn-med-bullets", title: "F\xF6rnamn" },
          { id: "efternamn-med-bullets", title: "Efternamn" }
        ]
      };
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_error_list = (0, import_vue5.resolveComponent)("f-error-list");
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createVNode)(_component_f_error_list, {
        items: _ctx.items,
        bullets: true
      }, {
        title: (0, import_vue5.withCtx)(() => _cache[0] || (_cache[0] = [
          (0, import_vue5.createTextVNode)(" Kolla p\xE5 felen nedan ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["items"]),
      (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, { id: "fornamn-med-bullets" }, {
        default: (0, import_vue5.withCtx)(() => _cache[1] || (_cache[1] = [
          (0, import_vue5.createTextVNode)(" F\xF6rnamn ")
        ])),
        _: 1
        /* STABLE */
      })), [
        [
          _directive_validation,
          void 0,
          void 0,
          { maxLength: true }
        ]
      ]),
      (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, { id: "efternamn-med-bullets" }, {
        default: (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
          (0, import_vue5.createTextVNode)(" Efternamn ")
        ])),
        _: 1
        /* STABLE */
      })), [
        [
          _directive_validation,
          void 0,
          void 0,
          { maxLength: true }
        ]
      ])
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FErrorListBullets"
  });
})();
