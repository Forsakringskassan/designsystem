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

  // virtual-entry:./packages/vue/src/components/FErrorList/examples/FErrorListBeforeNavigate.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FErrorListBeforeNavigate",
    components: { FErrorList: import_vue4.FErrorList, FExpandablePanel: import_vue4.FExpandablePanel, FTextField: import_vue4.FTextField },
    data() {
      return {
        items: [
          { title: "Favoritfrukt", id: "favorit-frukt", focusElementId: "favorit-frukt" },
          { title: "Favoritgodis", id: "favorit-godis", focusElementId: "favorit-godis" }
        ],
        expanded: false
      };
    },
    methods: {
      beforeNavigate() {
        this.expanded = true;
        return this.$nextTick();
      }
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_error_list = (0, import_vue5.resolveComponent)("f-error-list");
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _component_f_expandable_panel = (0, import_vue5.resolveComponent)("f-expandable-panel");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createVNode)(_component_f_error_list, {
        items: _ctx.items,
        "before-navigate": _ctx.beforeNavigate
      }, {
        title: (0, import_vue5.withCtx)(() => _cache[1] || (_cache[1] = [
          (0, import_vue5.createTextVNode)(" Kolla p\xE5 felen nedan ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["items", "before-navigate"]),
      (0, import_vue5.createVNode)(_component_f_expandable_panel, {
        expanded: _ctx.expanded,
        onToggle: _cache[0] || (_cache[0] = ($event) => _ctx.expanded = !_ctx.expanded)
      }, {
        title: (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
          (0, import_vue5.createTextVNode)(" Favoriter ")
        ])),
        default: (0, import_vue5.withCtx)(() => [
          (0, import_vue5.createVNode)(_component_f_text_field, {
            id: "favorit-frukt",
            maxlength: "100"
          }, {
            default: (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
              (0, import_vue5.createTextVNode)(" Favoritfrukt \u{1F34E} ")
            ])),
            _: 1
            /* STABLE */
          }),
          (0, import_vue5.createVNode)(_component_f_text_field, {
            id: "favorit-godis",
            maxlength: "100"
          }, {
            default: (0, import_vue5.withCtx)(() => _cache[4] || (_cache[4] = [
              (0, import_vue5.createTextVNode)(" Favoritgodis \u{1F36C} ")
            ])),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["expanded"])
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FErrorListBeforeNavigate"
  });
})();
