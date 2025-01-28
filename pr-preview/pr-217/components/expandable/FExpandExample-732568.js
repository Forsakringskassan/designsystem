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

  // virtual-entry:./packages/vue/src/components/FExpand/examples/FExpandExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FExpandExample",
    components: { FExpand: import_vue4.FExpand },
    data() {
      return {
        expanded: false
      };
    }
  });
  var _hoisted_1 = { key: 0 };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_expand = (0, import_vue5.resolveComponent)("f-expand");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createVNode)(_component_f_expand, null, {
        default: (0, import_vue5.withCtx)(() => [
          _ctx.expanded ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", _hoisted_1, "Expanded content")) : (0, import_vue5.createCommentVNode)("v-if", true)
        ]),
        _: 1
        /* STABLE */
      }),
      (0, import_vue5.createElementVNode)(
        "button",
        {
          type: "button",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.expanded = !_ctx.expanded)
        },
        (0, import_vue5.toDisplayString)(_ctx.expanded ? `Close` : `Open`),
        1
        /* TEXT */
      )
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FExpandExample"
  });
})();
