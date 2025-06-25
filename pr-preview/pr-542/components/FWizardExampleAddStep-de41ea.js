// docs/src/setup.ts
import { createApp, h } from "vue";
import {
  ErrorPlugin,
  FErrorHandlingApp,
  FormatPlugin,
  TestPlugin,
  TranslationPlugin,
  ValidationPlugin,
  setRunningContext
} from "@fkui/vue";
function setup(options) {
  const { rootComponent, selector } = options;
  const app = createApp({
    render() {
      return h(FErrorHandlingApp, { defaultComponent: rootComponent });
    }
  });
  setRunningContext(app);
  app.use(ErrorPlugin, {
    captureWarnings: true,
    logToConsole: true
  });
  app.use(ValidationPlugin);
  app.use(TestPlugin);
  app.use(TranslationPlugin);
  app.use(FormatPlugin);
  app.mount(selector);
}

// virtual-entry:virtual:packages/vue/src/components/FWizard/examples/FWizardExampleAddStep.vue:FWizardExampleAddStep-de41ea.js
import { defineComponent } from "vue";
import { FWizard, FWizardStep, FTextField, FIcon, FFieldset, FCheckboxField } from "@fkui/vue";
import { createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, createVNode as _createVNode, createTextVNode as _createTextVNode, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, renderList as _renderList, Fragment as _Fragment, createElementBlock as _createElementBlock, toDisplayString as _toDisplayString } from "vue";
var exampleComponent = defineComponent({
  name: "WizardExample",
  components: { FWizard, FWizardStep, FTextField, FIcon, FFieldset, FCheckboxField },
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
  const _component_f_icon = _resolveComponent("f-icon");
  const _component_f_wizard_step = _resolveComponent("f-wizard-step");
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_f_wizard = _resolveComponent("f-wizard");
  const _directive_test = _resolveDirective("test");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_f_wizard, {
      modelValue: _ctx.current,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.current = $event),
      "header-tag": "h2",
      "disable-initial-focus": "",
      onCompleted: _ctx.onCompleted,
      onCancel: _ctx.onCancel
    }, {
      default: _withCtx(() => [
        _withDirectives((_openBlock(), _createBlock(_component_f_wizard_step, {
          key: "fruktkorg-antal",
          title: "Min best\xE4llning"
        }, {
          default: _withCtx(() => [
            _cache[4] || (_cache[4] = _createElementVNode(
              "h3",
              null,
              "Fruktkorg",
              -1
              /* CACHED */
            )),
            _createElementVNode("button", {
              type: "button",
              class: "button button--tertiary",
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.addBasket && _ctx.addBasket(...args))
            }, [
              _createVNode(_component_f_icon, {
                class: "button__icon",
                name: "plus"
              }),
              _cache[3] || (_cache[3] = _createTextVNode(" L\xE4gg till fruktkorg "))
            ])
          ]),
          _: 1,
          __: [4]
        })), [
          [_directive_test, "myOrderStep"]
        ]),
        (_openBlock(true), _createElementBlock(
          _Fragment,
          null,
          _renderList(_ctx.fruktkorgar, (item) => {
            return _openBlock(), _createBlock(_component_f_wizard_step, {
              key: "fruktkorg-" + item.id,
              title: "Frukt korg " + item.id,
              "data-test": "fruitBasketStep-" + item.id
            }, {
              default: _withCtx(() => [
                _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
                  modelValue: item.namn,
                  "onUpdate:modelValue": ($event) => item.namn = $event
                }, {
                  default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                    _createTextVNode(" Namn p\xE5 presentkort ")
                  ])]),
                  _: 2,
                  __: [5]
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
                _withDirectives((_openBlock(), _createBlock(
                  _component_f_fieldset,
                  { id: "frukt-checkbox-group" },
                  {
                    label: _withCtx(() => [..._cache[6] || (_cache[6] = [
                      _createTextVNode(" Vad ska ing\xE5 i din fruktkorg? ")
                    ])]),
                    default: _withCtx(() => [
                      (_openBlock(true), _createElementBlock(
                        _Fragment,
                        null,
                        _renderList(_ctx.frukter, (frukt) => {
                          return _openBlock(), _createBlock(_component_f_checkbox_field, {
                            key: frukt.value,
                            modelValue: item.valdaFrukter,
                            "onUpdate:modelValue": ($event) => item.valdaFrukter = $event,
                            value: frukt.value
                          }, {
                            default: _withCtx(() => [
                              _createTextVNode(
                                _toDisplayString(frukt.text),
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
                _createElementVNode("button", {
                  type: "button",
                  class: "button button--tertiary",
                  onClick: ($event) => _ctx.removeBasket(item)
                }, [
                  _createVNode(_component_f_icon, { name: "trashcan" }),
                  _cache[7] || (_cache[7] = _createTextVNode(" Ta bort fruktkorg "))
                ], 8, _hoisted_1)
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["title", "data-test"]);
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        _withDirectives((_openBlock(), _createBlock(_component_f_wizard_step, {
          key: "baz",
          title: "Mina uppgifter",
          onBeforeNext: _ctx.onBeforeNext
        }, {
          default: _withCtx(() => _cache[8] || (_cache[8] = [
            _createElementVNode(
              "p",
              null,
              "Min adress",
              -1
              /* CACHED */
            )
          ])),
          _: 1,
          __: [8]
        }, 8, ["onBeforeNext"])), [
          [_directive_test, "myInfoStep"]
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "onCompleted", "onCancel"]),
    _createElementVNode("p", _hoisted_2, [
      _cache[9] || (_cache[9] = _createTextVNode(" Ett steg kan \xF6ppnas programatiskt, t.ex. man klickar '\xE4ndra' i ett granska-steg. ")),
      _createElementVNode("button", {
        type: "button",
        onClick: _cache[2] || (_cache[2] = ($event) => _ctx.current = "baz")
      }, "\xD6ppna sista steget")
    ]),
    _createElementVNode(
      "pre",
      null,
      "v-model: " + _toDisplayString(_ctx.current),
      1
      /* TEXT */
    )
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-de41ea"
});
export {
  render
};
