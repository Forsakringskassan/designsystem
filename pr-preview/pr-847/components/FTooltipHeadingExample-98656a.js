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

  // virtual-entry:./packages/vue/src/components/FTooltip/examples/FTooltipHeadingExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    components: { FTooltip: import_vue4.FTooltip },
    setup() {
      const heading1 = (0, import_vue3.useTemplateRef)("heading1");
      const heading2 = (0, import_vue3.useTemplateRef)("heading2");
      const heading3 = (0, import_vue3.useTemplateRef)("heading3");
      const heading4 = (0, import_vue3.useTemplateRef)("heading4");
      const heading5 = (0, import_vue3.useTemplateRef)("heading5");
      const heading6 = (0, import_vue3.useTemplateRef)("heading6");
      return { heading1, heading2, heading3, heading4, heading5, heading6 };
    }
  });
  var _hoisted_1 = { ref: "heading1" };
  var _hoisted_2 = { ref: "heading2" };
  var _hoisted_3 = { ref: "heading3" };
  var _hoisted_4 = { ref: "heading4" };
  var _hoisted_5 = { ref: "heading5" };
  var _hoisted_6 = { ref: "heading6" };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_tooltip = (0, import_vue5.resolveComponent)("f-tooltip");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
      import_vue5.Fragment,
      null,
      [
        (0, import_vue5.createElementVNode)(
          "div",
          _hoisted_1,
          _cache[0] || (_cache[0] = [
            (0, import_vue5.createElementVNode)(
              "h1",
              null,
              "Heading level 1",
              -1
              /* HOISTED */
            )
          ]),
          512
          /* NEED_PATCH */
        ),
        (0, import_vue5.createVNode)(_component_f_tooltip, {
          "attach-to": _ctx.heading1,
          "screen-reader-text": "Sk\xE4rml\xE4sartext"
        }, {
          body: (0, import_vue5.withCtx)(() => _cache[1] || (_cache[1] = [
            (0, import_vue5.createTextVNode)(" Lorem ipsum dolor sit amet. ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["attach-to"]),
        (0, import_vue5.createElementVNode)(
          "div",
          _hoisted_2,
          _cache[2] || (_cache[2] = [
            (0, import_vue5.createElementVNode)(
              "h2",
              null,
              "Heading level 2",
              -1
              /* HOISTED */
            )
          ]),
          512
          /* NEED_PATCH */
        ),
        (0, import_vue5.createVNode)(_component_f_tooltip, {
          "attach-to": _ctx.heading2,
          "screen-reader-text": "Sk\xE4rml\xE4sartext"
        }, {
          body: (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
            (0, import_vue5.createTextVNode)(" Lorem ipsum dolor sit amet. ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["attach-to"]),
        (0, import_vue5.createElementVNode)(
          "div",
          _hoisted_3,
          _cache[4] || (_cache[4] = [
            (0, import_vue5.createElementVNode)(
              "h3",
              null,
              "Heading level 3",
              -1
              /* HOISTED */
            )
          ]),
          512
          /* NEED_PATCH */
        ),
        (0, import_vue5.createVNode)(_component_f_tooltip, {
          "attach-to": _ctx.heading3,
          "screen-reader-text": "Sk\xE4rml\xE4sartext"
        }, {
          body: (0, import_vue5.withCtx)(() => _cache[5] || (_cache[5] = [
            (0, import_vue5.createTextVNode)(" Lorem ipsum dolor sit amet. ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["attach-to"]),
        (0, import_vue5.createElementVNode)(
          "div",
          _hoisted_4,
          _cache[6] || (_cache[6] = [
            (0, import_vue5.createElementVNode)(
              "h4",
              null,
              "Heading level 4",
              -1
              /* HOISTED */
            )
          ]),
          512
          /* NEED_PATCH */
        ),
        (0, import_vue5.createVNode)(_component_f_tooltip, {
          "attach-to": _ctx.heading4,
          "screen-reader-text": "Sk\xE4rml\xE4sartext"
        }, {
          body: (0, import_vue5.withCtx)(() => _cache[7] || (_cache[7] = [
            (0, import_vue5.createTextVNode)(" Lorem ipsum dolor sit amet. ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["attach-to"]),
        (0, import_vue5.createElementVNode)(
          "div",
          _hoisted_5,
          _cache[8] || (_cache[8] = [
            (0, import_vue5.createElementVNode)(
              "h5",
              null,
              "Heading level 5",
              -1
              /* HOISTED */
            )
          ]),
          512
          /* NEED_PATCH */
        ),
        (0, import_vue5.createVNode)(_component_f_tooltip, {
          "attach-to": _ctx.heading5,
          "screen-reader-text": "Sk\xE4rml\xE4sartext"
        }, {
          body: (0, import_vue5.withCtx)(() => _cache[9] || (_cache[9] = [
            (0, import_vue5.createTextVNode)(" Lorem ipsum dolor sit amet. ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["attach-to"]),
        (0, import_vue5.createElementVNode)(
          "div",
          _hoisted_6,
          _cache[10] || (_cache[10] = [
            (0, import_vue5.createElementVNode)(
              "h6",
              null,
              "Heading level 6",
              -1
              /* HOISTED */
            )
          ]),
          512
          /* NEED_PATCH */
        ),
        (0, import_vue5.createVNode)(_component_f_tooltip, {
          "attach-to": _ctx.heading6,
          "screen-reader-text": "Sk\xE4rml\xE4sartext"
        }, {
          body: (0, import_vue5.withCtx)(() => _cache[11] || (_cache[11] = [
            (0, import_vue5.createTextVNode)(" Lorem ipsum dolor sit amet. ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["attach-to"]),
        _cache[13] || (_cache[13] = (0, import_vue5.createElementVNode)(
          "h2",
          null,
          "Unattached",
          -1
          /* HOISTED */
        )),
        (0, import_vue5.createVNode)(_component_f_tooltip, { "screen-reader-text": "Sk\xE4rml\xE4sartext" }, {
          body: (0, import_vue5.withCtx)(() => _cache[12] || (_cache[12] = [
            (0, import_vue5.createTextVNode)(" Lorem ipsum dolor sit amet. ")
          ])),
          _: 1
          /* STABLE */
        })
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FTooltipHeadingExample"
  });
})();
