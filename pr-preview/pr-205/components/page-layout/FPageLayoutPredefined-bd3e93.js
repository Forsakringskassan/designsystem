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

  // virtual-entry:./docs/components/page-layout/FPageLayoutPredefined.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = /* @__PURE__ */ (0, import_vue3.defineComponent)({
    __name: "FPageLayoutPredefined",
    setup(__props, { expose: __expose }) {
      __expose();
      const __returned__ = { get FPageLayout() {
        return import_vue4.FPageLayout;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  var _hoisted_1 = { class: "wrapper" };
  var _hoisted_2 = { class: "item" };
  var _hoisted_3 = { class: "layout-container" };
  var _hoisted_4 = { class: "item" };
  var _hoisted_5 = { class: "layout-container" };
  var _hoisted_6 = { class: "item" };
  var _hoisted_7 = { class: "layout-container" };
  var _hoisted_8 = { class: "item" };
  var _hoisted_9 = { class: "layout-container" };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", _hoisted_1, [
      (0, import_vue5.createElementVNode)("div", _hoisted_2, [
        _cache[3] || (_cache[3] = (0, import_vue5.createElementVNode)(
          "h3",
          null,
          [
            (0, import_vue5.createElementVNode)("code", null, "simple")
          ],
          -1
          /* HOISTED */
        )),
        (0, import_vue5.createElementVNode)("div", _hoisted_3, [
          (0, import_vue5.createVNode)($setup["FPageLayout"], { layout: "simple" }, {
            header: (0, import_vue5.withCtx)(() => _cache[0] || (_cache[0] = [
              (0, import_vue5.createElementVNode)(
                "header",
                { class: "area header" },
                "[header]",
                -1
                /* HOISTED */
              )
            ])),
            content: (0, import_vue5.withCtx)(() => _cache[1] || (_cache[1] = [
              (0, import_vue5.createElementVNode)(
                "main",
                { class: "area content" },
                "[content]",
                -1
                /* HOISTED */
              )
            ])),
            footer: (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
              (0, import_vue5.createElementVNode)(
                "footer",
                { class: "area footer" },
                "[footer]",
                -1
                /* HOISTED */
              )
            ])),
            _: 1
            /* STABLE */
          })
        ])
      ]),
      (0, import_vue5.createElementVNode)("div", _hoisted_4, [
        _cache[8] || (_cache[8] = (0, import_vue5.createElementVNode)(
          "h3",
          null,
          [
            (0, import_vue5.createElementVNode)("code", null, "left-panel")
          ],
          -1
          /* HOISTED */
        )),
        (0, import_vue5.createElementVNode)("div", _hoisted_5, [
          (0, import_vue5.createVNode)($setup["FPageLayout"], { layout: "left-panel" }, {
            header: (0, import_vue5.withCtx)(() => _cache[4] || (_cache[4] = [
              (0, import_vue5.createElementVNode)(
                "header",
                { class: "area header" },
                "[header]",
                -1
                /* HOISTED */
              )
            ])),
            left: (0, import_vue5.withCtx)(() => _cache[5] || (_cache[5] = [
              (0, import_vue5.createElementVNode)(
                "div",
                { class: "area left-panel" },
                "[left]",
                -1
                /* HOISTED */
              )
            ])),
            content: (0, import_vue5.withCtx)(() => _cache[6] || (_cache[6] = [
              (0, import_vue5.createElementVNode)(
                "main",
                { class: "area content" },
                "[content]",
                -1
                /* HOISTED */
              )
            ])),
            footer: (0, import_vue5.withCtx)(() => _cache[7] || (_cache[7] = [
              (0, import_vue5.createElementVNode)(
                "footer",
                { class: "area footer" },
                "[footer]",
                -1
                /* HOISTED */
              )
            ])),
            _: 1
            /* STABLE */
          })
        ])
      ]),
      (0, import_vue5.createElementVNode)("div", _hoisted_6, [
        _cache[13] || (_cache[13] = (0, import_vue5.createElementVNode)(
          "h3",
          null,
          [
            (0, import_vue5.createElementVNode)("code", null, "right-panel")
          ],
          -1
          /* HOISTED */
        )),
        (0, import_vue5.createElementVNode)("div", _hoisted_7, [
          (0, import_vue5.createVNode)($setup["FPageLayout"], { layout: "right-panel" }, {
            header: (0, import_vue5.withCtx)(() => _cache[9] || (_cache[9] = [
              (0, import_vue5.createElementVNode)(
                "header",
                { class: "area header" },
                "[header]",
                -1
                /* HOISTED */
              )
            ])),
            right: (0, import_vue5.withCtx)(() => _cache[10] || (_cache[10] = [
              (0, import_vue5.createElementVNode)(
                "div",
                { class: "area right-panel" },
                "[right]",
                -1
                /* HOISTED */
              )
            ])),
            content: (0, import_vue5.withCtx)(() => _cache[11] || (_cache[11] = [
              (0, import_vue5.createElementVNode)(
                "main",
                { class: "area content" },
                "[content]",
                -1
                /* HOISTED */
              )
            ])),
            footer: (0, import_vue5.withCtx)(() => _cache[12] || (_cache[12] = [
              (0, import_vue5.createElementVNode)(
                "footer",
                { class: "area footer" },
                "[footer]",
                -1
                /* HOISTED */
              )
            ])),
            _: 1
            /* STABLE */
          })
        ])
      ]),
      (0, import_vue5.createElementVNode)("div", _hoisted_8, [
        _cache[19] || (_cache[19] = (0, import_vue5.createElementVNode)(
          "h3",
          null,
          [
            (0, import_vue5.createElementVNode)("code", null, "three-column")
          ],
          -1
          /* HOISTED */
        )),
        (0, import_vue5.createElementVNode)("div", _hoisted_9, [
          (0, import_vue5.createVNode)($setup["FPageLayout"], { layout: "three-column" }, {
            header: (0, import_vue5.withCtx)(() => _cache[14] || (_cache[14] = [
              (0, import_vue5.createElementVNode)(
                "header",
                { class: "area header" },
                "[header]",
                -1
                /* HOISTED */
              )
            ])),
            left: (0, import_vue5.withCtx)(() => _cache[15] || (_cache[15] = [
              (0, import_vue5.createElementVNode)(
                "div",
                { class: "area left-panel" },
                "[left]",
                -1
                /* HOISTED */
              )
            ])),
            right: (0, import_vue5.withCtx)(() => _cache[16] || (_cache[16] = [
              (0, import_vue5.createElementVNode)(
                "div",
                { class: "area right-panel" },
                "[right]",
                -1
                /* HOISTED */
              )
            ])),
            content: (0, import_vue5.withCtx)(() => _cache[17] || (_cache[17] = [
              (0, import_vue5.createElementVNode)(
                "main",
                { class: "area content" },
                "[content]",
                -1
                /* HOISTED */
              )
            ])),
            footer: (0, import_vue5.withCtx)(() => _cache[18] || (_cache[18] = [
              (0, import_vue5.createElementVNode)(
                "footer",
                { class: "area footer" },
                "[footer]",
                -1
                /* HOISTED */
              )
            ])),
            _: 1
            /* STABLE */
          })
        ])
      ])
    ]);
  }
  exampleComponent.render = render;
  exampleComponent.__scopeId = "data-v-bd3e93";
  setup({
    rootComponent: exampleComponent,
    selector: "#FPageLayoutPredefined"
  });
})();
