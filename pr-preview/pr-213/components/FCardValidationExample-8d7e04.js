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

  // virtual-entry:./packages/vue/src/components/FCard/examples/FCardValidationExample.vue
  var import_vue3 = __require("vue");
  var import_logic = __require("@fkui/logic");
  var import_vue4 = __require("vue");
  var import_vue5 = __require("@fkui/vue");
  var import_vue6 = __require("vue");
  var exampleComponent = /* @__PURE__ */ (0, import_vue3.defineComponent)({
    __name: "FCardValidationExample",
    setup(__props, { expose: __expose }) {
      __expose();
      const cardRef = (0, import_vue4.useTemplateRef)("card");
      const focusRef = (0, import_vue4.useTemplateRef)("focus");
      function setInvalid() {
        import_logic.ValidationService.setError((0, import_vue5.getElementFromVueRef)(cardRef.value), "Uppgifter saknas");
        import_logic.ValidationService.validateElement((0, import_vue5.getElementFromVueRef)(cardRef.value));
      }
      function setValid() {
        import_logic.ValidationService.resetState((0, import_vue5.getElementFromVueRef)(cardRef.value));
        import_logic.ValidationService.validateElement((0, import_vue5.getElementFromVueRef)(cardRef.value));
      }
      const __returned__ = { cardRef, focusRef, setInvalid, setValid, get FCard() {
        return import_vue5.FCard;
      }, get FIcon() {
        return import_vue5.FIcon;
      }, get FValidationForm() {
        return import_vue5.FValidationForm;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  var _hoisted_1 = { class: "button-group" };
  var _hoisted_2 = {
    class: "button button-group__item button--tertiary button--medium button--align-text",
    type: "button"
  };
  var _hoisted_3 = {
    id: "focus",
    ref: "focus",
    class: "button button-group__item button--tertiary button--medium button--align-text",
    type: "button"
  };
  var _hoisted_4 = {
    key: 0,
    class: "sr-only"
  };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _directive_validation = (0, import_vue6.resolveDirective)("validation");
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
      import_vue6.Fragment,
      null,
      [
        (0, import_vue6.createVNode)($setup["FValidationForm"], { "use-error-list": false }, {
          default: (0, import_vue6.withCtx)(() => [
            (0, import_vue6.withDirectives)(((0, import_vue6.openBlock)(), (0, import_vue6.createBlock)($setup["FCard"], {
              ref: "card",
              "focus-ref": $setup.focusRef
            }, {
              header: (0, import_vue6.withCtx)(({ headingSlotClass }) => [
                (0, import_vue6.createElementVNode)(
                  "h3",
                  {
                    class: (0, import_vue6.normalizeClass)(headingSlotClass)
                  },
                  "Arbete",
                  2
                  /* CLASS */
                )
              ]),
              default: (0, import_vue6.withCtx)(() => _cache[0] || (_cache[0] = [
                (0, import_vue6.createElementVNode)(
                  "p",
                  null,
                  "Arbetsgivare",
                  -1
                  /* HOISTED */
                ),
                (0, import_vue6.createElementVNode)(
                  "p",
                  null,
                  [
                    (0, import_vue6.createTextVNode)(" Gatan 1 "),
                    (0, import_vue6.createElementVNode)("br"),
                    (0, import_vue6.createTextVNode)(" 123 45 Staden "),
                    (0, import_vue6.createElementVNode)("br"),
                    (0, import_vue6.createTextVNode)(" Sverige ")
                  ],
                  -1
                  /* HOISTED */
                ),
                (0, import_vue6.createElementVNode)(
                  "p",
                  null,
                  [
                    (0, import_vue6.createElementVNode)("label", { class: "label" }, " Telefonnummer "),
                    (0, import_vue6.createElementVNode)("span", null, " 0109999999 ")
                  ],
                  -1
                  /* HOISTED */
                )
              ])),
              footer: (0, import_vue6.withCtx)(({ hasError }) => [
                (0, import_vue6.createElementVNode)("div", _hoisted_1, [
                  (0, import_vue6.createElementVNode)("button", _hoisted_2, [
                    (0, import_vue6.createVNode)($setup["FIcon"], { name: "trashcan" }),
                    _cache[1] || (_cache[1] = (0, import_vue6.createElementVNode)(
                      "span",
                      null,
                      " Ta bort ",
                      -1
                      /* HOISTED */
                    ))
                  ]),
                  (0, import_vue6.createElementVNode)(
                    "button",
                    _hoisted_3,
                    [
                      (0, import_vue6.createVNode)($setup["FIcon"], { name: "pen" }),
                      (0, import_vue6.createElementVNode)("span", null, [
                        _cache[2] || (_cache[2] = (0, import_vue6.createTextVNode)(" \xC4ndra ")),
                        hasError ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("span", _hoisted_4, " p\xE5 kortet, det inneh\xE5ller fel ")) : (0, import_vue6.createCommentVNode)("v-if", true)
                      ])
                    ],
                    512
                    /* NEED_PATCH */
                  )
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["focus-ref"])), [
              [_directive_validation]
            ]),
            _cache[3] || (_cache[3] = (0, import_vue6.createElementVNode)(
              "button",
              {
                type: "submit",
                class: "button button--primary"
              },
              "Simulera inskick av formul\xE4r",
              -1
              /* HOISTED */
            ))
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue6.createElementVNode)("button", {
          type: "button",
          class: "button button-group__item button--tertiary button--large",
          onClick: $setup.setInvalid
        }, " Markera kort som felaktigt "),
        (0, import_vue6.createElementVNode)("button", {
          type: "button",
          class: "button button-group__item button--tertiary button--large",
          onClick: $setup.setValid
        }, " Markera kort som giltigt ")
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FCardValidationExample"
  });
})();
