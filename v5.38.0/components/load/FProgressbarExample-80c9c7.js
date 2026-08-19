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

  // virtual-entry:./packages/vue/src/components/FProgressbar/examples/FProgressbarExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FProgressbarExample",
    components: { FProgressbar: import_vue4.FProgressbar },
    data() {
      return {
        currentProgress: 40
      };
    },
    methods: {
      decrease() {
        this.currentProgress = Math.max(this.currentProgress - 20, 0);
      },
      increase() {
        this.currentProgress = Math.min(this.currentProgress + 20, 100);
      }
    }
  });
  var _hoisted_1 = { class: "debug-data" };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_progressbar = (0, import_vue5.resolveComponent)("f-progressbar");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createVNode)(_component_f_progressbar, {
        value: _ctx.currentProgress,
        "aria-label": "Progressbar",
        label: "Progressbar",
        "value-text": "You have uploaded %VALUE% %."
      }, null, 8, ["value"]),
      (0, import_vue5.createElementVNode)("pre", _hoisted_1, [
        _cache[3] || (_cache[3] = (0, import_vue5.createElementVNode)(
          "span",
          { class: "sr-only" },
          "Debug-data: ",
          -1
          /* HOISTED */
        )),
        (0, import_vue5.createTextVNode)(
          "value: " + (0, import_vue5.toDisplayString)(_ctx.currentProgress),
          1
          /* TEXT */
        )
      ]),
      (0, import_vue5.createElementVNode)("button", {
        type: "button",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.increase())
      }, "Increase"),
      (0, import_vue5.createElementVNode)("button", {
        type: "button",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.decrease())
      }, "Decrease"),
      (0, import_vue5.createElementVNode)("label", null, [
        _cache[4] || (_cache[4] = (0, import_vue5.createTextVNode)(" Progress: ")),
        (0, import_vue5.withDirectives)((0, import_vue5.createElementVNode)(
          "input",
          {
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.currentProgress = $event),
            type: "number"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [
            import_vue5.vModelText,
            _ctx.currentProgress,
            void 0,
            { number: true }
          ]
        ])
      ])
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FProgressbarExample"
  });
})();
