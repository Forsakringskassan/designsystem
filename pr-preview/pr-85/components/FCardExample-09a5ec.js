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

  // virtual-entry:./packages/vue/src/components/FCard/examples/FCardExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FCardExample",
    components: { FCard: import_vue4.FCard, FIcon: import_vue4.FIcon }
  });
  var _hoisted_1 = { class: "button-group" };
  var _hoisted_2 = {
    class: "button button-group__item button--tertiary button--medium button--align-text",
    type: "button"
  };
  var _hoisted_3 = {
    class: "button button-group__item button--tertiary button--medium button--align-text",
    type: "button"
  };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue5.resolveComponent)("f-icon");
    const _component_f_card = (0, import_vue5.resolveComponent)("f-card");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_card, null, {
      header: (0, import_vue5.withCtx)(({ headingSlotClass }) => [
        (0, import_vue5.createElementVNode)(
          "h3",
          {
            class: (0, import_vue5.normalizeClass)(headingSlotClass)
          },
          "Arbete",
          2
          /* CLASS */
        )
      ]),
      default: (0, import_vue5.withCtx)(() => _cache[0] || (_cache[0] = [
        (0, import_vue5.createElementVNode)(
          "p",
          null,
          "Arbetsgivare",
          -1
          /* HOISTED */
        ),
        (0, import_vue5.createElementVNode)(
          "p",
          null,
          [
            (0, import_vue5.createTextVNode)(" Gatan 1 "),
            (0, import_vue5.createElementVNode)("br"),
            (0, import_vue5.createTextVNode)(" 123 45 Staden "),
            (0, import_vue5.createElementVNode)("br"),
            (0, import_vue5.createTextVNode)(" Sverige ")
          ],
          -1
          /* HOISTED */
        ),
        (0, import_vue5.createElementVNode)(
          "p",
          null,
          [
            (0, import_vue5.createElementVNode)("label", { class: "label" }, " Telefonnummer "),
            (0, import_vue5.createElementVNode)("span", null, " 0109999999 ")
          ],
          -1
          /* HOISTED */
        )
      ])),
      footer: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createElementVNode)("div", _hoisted_1, [
          (0, import_vue5.createElementVNode)("button", _hoisted_2, [
            (0, import_vue5.createVNode)(_component_f_icon, { name: "trashcan" }),
            _cache[1] || (_cache[1] = (0, import_vue5.createElementVNode)(
              "span",
              null,
              " Ta bort ",
              -1
              /* HOISTED */
            ))
          ]),
          (0, import_vue5.createElementVNode)("button", _hoisted_3, [
            (0, import_vue5.createVNode)(_component_f_icon, { name: "pen" }),
            _cache[2] || (_cache[2] = (0, import_vue5.createElementVNode)(
              "span",
              null,
              " \xC4ndra ",
              -1
              /* HOISTED */
            ))
          ])
        ])
      ]),
      _: 1
      /* STABLE */
    });
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FCardExample"
  });
})();
