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

// virtual-entry:virtual:packages/vue/src/components/FWizard/examples/FWizardExampleDefault.vue:FWizardExampleDefault-318fb9.js
import { defineComponent } from "vue";
import { FDatepickerField, FSelectField, FTextField, FWizard, FWizardStep } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createVNode as _createVNode, createElementVNode as _createElementVNode, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode } from "vue";
var exampleComponent = defineComponent({
  name: "WizardExampleDefault",
  components: { FWizard, FWizardStep, FTextField, FDatepickerField, FSelectField },
  data() {
    return {
      current: void 0,
      visible: true,
      done: false,
      date: "",
      options: ""
    };
  },
  methods: {
    onCompleted() {
      this.done = true;
    }
  }
});
var _hoisted_1 = { key: 0 };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_f_wizard_step = _resolveComponent("f-wizard-step");
  const _component_f_datepicker_field = _resolveComponent("f-datepicker-field");
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _component_f_wizard = _resolveComponent("f-wizard");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_f_wizard, {
      modelValue: _ctx.current,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.current = $event),
      "header-tag": "h2",
      onCompleted: _ctx.onCompleted
    }, {
      default: _withCtx(() => [
        _createVNode(_component_f_wizard_step, {
          key: "foo",
          "use-error-list": false,
          title: "Stegrubrik 1"
        }, {
          default: _withCtx(() => [
            _withDirectives((_openBlock(), _createBlock(_component_f_text_field, null, {
              default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                _createTextVNode(
                  " Etikett-rubrik ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })), [
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
            _withDirectives((_openBlock(), _createBlock(_component_f_text_field, null, {
              default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                _createTextVNode(
                  " Etikett-rubrik (frivillig) ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })), [
              [
                _directive_validation,
                { maxLength: { length: 100 } },
                void 0,
                { maxLength: true }
              ]
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_f_wizard_step, {
          key: "bar",
          "use-error-list": false,
          title: "Stegrubrik 2"
        }, {
          default: _withCtx(() => [
            _withDirectives((_openBlock(), _createBlock(_component_f_datepicker_field, {
              modelValue: _ctx.date,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.date = $event)
            }, {
              default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                _createTextVNode(
                  " Etikett-rubrik ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])), [
              [
                _directive_validation,
                void 0,
                void 0,
                { required: true }
              ]
            ]),
            _withDirectives((_openBlock(), _createBlock(_component_f_select_field, {
              modelValue: _ctx.options,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.options = $event)
            }, {
              label: _withCtx(() => [..._cache[6] || (_cache[6] = [
                _createTextVNode(
                  " Etikett-rubrik ",
                  -1
                  /* CACHED */
                )
              ])]),
              default: _withCtx(() => [
                _cache[7] || (_cache[7] = _createElementVNode(
                  "option",
                  {
                    disabled: true,
                    value: ""
                  },
                  "V\xE4lj",
                  -1
                  /* CACHED */
                )),
                _cache[8] || (_cache[8] = _createElementVNode(
                  "option",
                  { value: "ALTERNATIV1" },
                  "Alternativ 1",
                  -1
                  /* CACHED */
                )),
                _cache[9] || (_cache[9] = _createElementVNode(
                  "option",
                  { value: "ALTERNATIV2" },
                  "Alternativ 2",
                  -1
                  /* CACHED */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])), [
              [
                _directive_validation,
                void 0,
                void 0,
                { required: true }
              ]
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_f_wizard_step, {
          key: "baz",
          "use-error-list": false,
          title: "Stegrubrik 3"
        }, {
          "next-button-text": _withCtx(() => [..._cache[10] || (_cache[10] = [
            _createTextVNode(
              " Klar ",
              -1
              /* CACHED */
            )
          ])]),
          default: _withCtx(() => [
            _cache[11] || (_cache[11] = _createTextVNode(
              " En informationstext ",
              -1
              /* CACHED */
            ))
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "onCompleted"]),
    _ctx.done ? (_openBlock(), _createElementBlock("p", _hoisted_1, "Allt \xE4r ifyllt")) : _createCommentVNode("v-if", true)
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-318fb9"
});
export {
  render
};
