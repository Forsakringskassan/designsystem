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

  // virtual-entry:./packages/vue/src/internal-components/IAnimateExpand/examples/IAnimateExpandToggleTwo.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    namne: "IAnimateExpandToggleTwo",
    components: { IAnimateExpand: import_vue4.IAnimateExpand },
    data() {
      return {
        toggle: false,
        opacity: false
      };
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_i_animate_expand = (0, import_vue5.resolveComponent)("i-animate-expand");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createElementVNode)("button", {
        type: "button",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.toggle = !_ctx.toggle)
      }, "Toggle"),
      (0, import_vue5.withDirectives)((0, import_vue5.createElementVNode)(
        "input",
        {
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.opacity = $event),
          type: "checkbox"
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [import_vue5.vModelCheckbox, _ctx.opacity]
      ]),
      _cache[4] || (_cache[4] = (0, import_vue5.createTextVNode)(" Toning ")),
      (0, import_vue5.createVNode)(_component_i_animate_expand, {
        opacity: _ctx.opacity,
        expanded: _ctx.toggle
      }, {
        default: (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
          (0, import_vue5.createElementVNode)(
            "div",
            { style: { "background-color": "yellow", "height": "200px", "position": "relative" } },
            null,
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      }, 8, ["opacity", "expanded"]),
      (0, import_vue5.createVNode)(_component_i_animate_expand, {
        opacity: _ctx.opacity,
        expanded: !_ctx.toggle
      }, {
        default: (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
          (0, import_vue5.createElementVNode)(
            "div",
            { style: { "background-color": "hotpink", "height": "300px", "position": "relative" } },
            null,
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      }, 8, ["opacity", "expanded"])
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#IAnimateExpandToggleTwo"
  });
})();
