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

  // virtual-entry:./packages/vue/src/components/FWizard/examples/FWizardExampleAddStep.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "WizardExample",
    components: { FWizard: import_vue4.FWizard, FWizardStep: import_vue4.FWizardStep, FTextField: import_vue4.FTextField, FIcon: import_vue4.FIcon, FFieldset: import_vue4.FFieldset, FCheckboxField: import_vue4.FCheckboxField },
    data() {
      return {
        current: null,
        visible: true,
        fruktkorgar: [],
        n: 1,
        frukter: [
          { value: "BANAN", text: "Banan \u{1F34C}" },
          { value: "\xC4PPLE", text: "\xC4pple \u{1F34F}" },
          { value: "MANDARIN", text: "Mandarin \u{1F34A}" },
          { value: "ANANAS", text: "Ananas \u{1F34D}" },
          { value: "VATTENMELON", text: "Vattenmelon \u{1F349}" },
          { value: "ANDRA_FRUKTER", text: "Andra frukter" }
        ]
      };
    },
    methods: {
      addBasket() {
        this.fruktkorgar.push({
          id: this.n++,
          valdaFrukter: []
        });
      },
      removeBasket(item) {
        const index = this.fruktkorgar.findIndex((it) => it.id === item.id);
        if (index >= 0) {
          this.fruktkorgar.splice(index, 1);
        }
      },
      onBeforeNext() {
        return new Promise((resolve) => {
          console.log("H\xE4r kanska man anropar backend f\xF6r att kontrollera n\xE5got?");
          setTimeout(resolve, 2e3);
        });
      },
      onCompleted() {
        alert("Tack f\xF6r din best\xE4llning! \u{1F64F} Applikationsspecifik logik tar det vidare.");
      },
      onCancel() {
        alert(
          "Avbryt anropat av anv\xE4ndaren. Applikationsspecifik logik tar hand om eventuell bekr\xE4ftelse."
        );
      }
    }
  });
  var _hoisted_1 = ["onClick"];
  var _hoisted_2 = { style: { "margin-top": "30px" } };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue5.resolveComponent)("f-icon");
    const _component_f_wizard_step = (0, import_vue5.resolveComponent)("f-wizard-step");
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _component_f_checkbox_field = (0, import_vue5.resolveComponent)("f-checkbox-field");
    const _component_f_fieldset = (0, import_vue5.resolveComponent)("f-fieldset");
    const _component_f_wizard = (0, import_vue5.resolveComponent)("f-wizard");
    const _directive_test = (0, import_vue5.resolveDirective)("test");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createVNode)(_component_f_wizard, {
        modelValue: _ctx.current,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.current = $event),
        "header-tag": "h2",
        "disable-initial-focus": "",
        onCompleted: _ctx.onCompleted,
        onCancel: _ctx.onCancel
      }, {
        default: (0, import_vue5.withCtx)(() => [
          (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_wizard_step, {
            key: "foo",
            title: "Min best\xE4llning"
          }, {
            default: (0, import_vue5.withCtx)(() => [
              _cache[4] || (_cache[4] = (0, import_vue5.createElementVNode)(
                "h3",
                null,
                "Fruktkorg",
                -1
                /* HOISTED */
              )),
              (0, import_vue5.createElementVNode)("button", {
                type: "button",
                class: "button button--discrete",
                onClick: _cache[0] || (_cache[0] = (...args) => _ctx.addBasket && _ctx.addBasket(...args))
              }, [
                (0, import_vue5.createVNode)(_component_f_icon, {
                  class: "button__icon",
                  name: "plus"
                }),
                _cache[3] || (_cache[3] = (0, import_vue5.createTextVNode)(" L\xE4gg till fruktkorg "))
              ])
            ]),
            _: 1
            /* STABLE */
          })), [
            [_directive_test, "myOrderStep"]
          ]),
          ((0, import_vue5.openBlock)(true), (0, import_vue5.createElementBlock)(
            import_vue5.Fragment,
            null,
            (0, import_vue5.renderList)(_ctx.fruktkorgar, (item) => {
              return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_wizard_step, {
                key: "fruktkorg-" + item.id,
                title: "Frukt korg " + item.id,
                "data-test": "fruitBasketStep-" + item.id
              }, {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
                    modelValue: item.namn,
                    "onUpdate:modelValue": ($event) => item.namn = $event
                  }, {
                    default: (0, import_vue5.withCtx)(() => [..._cache[5] || (_cache[5] = [
                      (0, import_vue5.createTextVNode)(" Namn p\xE5 presentkort ")
                    ])]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["modelValue", "onUpdate:modelValue"])), [
                    [
                      _directive_validation,
                      { maxLength: { length: 100 } },
                      void 0,
                      {
                        required: true,
                        maxLength: true
                      }
                    ]
                  ]),
                  (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(
                    _component_f_fieldset,
                    { id: "frukt-checkbox-group" },
                    {
                      label: (0, import_vue5.withCtx)(() => [..._cache[6] || (_cache[6] = [
                        (0, import_vue5.createTextVNode)(" Vad ska ing\xE5 i din fruktkorg? ")
                      ])]),
                      default: (0, import_vue5.withCtx)(() => [
                        ((0, import_vue5.openBlock)(true), (0, import_vue5.createElementBlock)(
                          import_vue5.Fragment,
                          null,
                          (0, import_vue5.renderList)(_ctx.frukter, (frukt) => {
                            return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_checkbox_field, {
                              key: frukt.value,
                              modelValue: item.valdaFrukter,
                              "onUpdate:modelValue": ($event) => item.valdaFrukter = $event,
                              value: frukt.value
                            }, {
                              default: (0, import_vue5.withCtx)(() => [
                                (0, import_vue5.createTextVNode)(
                                  (0, import_vue5.toDisplayString)(frukt.text),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["modelValue", "onUpdate:modelValue", "value"]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  )), [
                    [
                      _directive_validation,
                      void 0,
                      void 0,
                      { required: true }
                    ]
                  ]),
                  (0, import_vue5.createElementVNode)("button", {
                    type: "button",
                    class: "button button--discrete",
                    onClick: ($event) => _ctx.removeBasket(item)
                  }, [
                    (0, import_vue5.createVNode)(_component_f_icon, { name: "trashcan" }),
                    _cache[7] || (_cache[7] = (0, import_vue5.createTextVNode)(" Ta bort fruktkorg "))
                  ], 8, _hoisted_1)
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["title", "data-test"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_wizard_step, {
            key: "baz",
            title: "Mina uppgifter",
            onBeforeNext: _ctx.onBeforeNext
          }, {
            default: (0, import_vue5.withCtx)(() => _cache[8] || (_cache[8] = [
              (0, import_vue5.createElementVNode)(
                "p",
                null,
                "Min adress",
                -1
                /* HOISTED */
              )
            ])),
            _: 1
            /* STABLE */
          }, 8, ["onBeforeNext"])), [
            [_directive_test, "myInfoStep"]
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "onCompleted", "onCancel"]),
      (0, import_vue5.createElementVNode)("p", _hoisted_2, [
        _cache[9] || (_cache[9] = (0, import_vue5.createTextVNode)(" Ett steg kan \xF6ppnas programatiskt, t.ex. man klickar '\xE4ndra' i ett granska-steg. ")),
        (0, import_vue5.createElementVNode)("button", {
          type: "button",
          onClick: _cache[2] || (_cache[2] = ($event) => _ctx.current = "baz")
        }, "\xD6ppna sista steget")
      ]),
      (0, import_vue5.createElementVNode)(
        "pre",
        null,
        "v-model: " + (0, import_vue5.toDisplayString)(_ctx.current),
        1
        /* TEXT */
      )
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FWizardExampleAddStep"
  });
})();
