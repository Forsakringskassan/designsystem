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

// virtual-entry:virtual:packages/vue/src/components/FValidationForm/examples/WithErrorListAndCbFunction.vue:WithErrorListAndCbFunction-c52c91.js
import { defineComponent } from "vue";
import { FTextField, FValidationForm, FExpandablePanel } from "@fkui/vue";
import { createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createVNode as _createVNode } from "vue";
var exampleComponent = defineComponent({
  name: "ErrorListWithOptionsExample",
  components: { FTextField, FValidationForm, FExpandablePanel },
  data() {
    return {
      field1: "",
      field2: "",
      expand: false
    };
  },
  methods: {
    onSubmit() {
      alert("Spara");
    },
    onCancel() {
      this.expand = false;
    },
    onToggle() {
      this.expand = !this.expand;
    },
    expandPanel() {
      this.expand = true;
    }
  }
});
var _hoisted_1 = { class: "button-group" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_f_expandable_panel = _resolveComponent("f-expandable-panel");
  const _component_f_validation_form = _resolveComponent("f-validation-form");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createBlock(_component_f_validation_form, {
    "error-list-before-navigate": _ctx.expandPanel,
    onSubmit: _ctx.onSubmit
  }, {
    "error-message": _withCtx(() => _cache[3] || (_cache[3] = [
      _createElementVNode(
        "span",
        null,
        " Custom message ",
        -1
        /* CACHED */
      )
    ])),
    default: _withCtx(() => [
      _createVNode(_component_f_expandable_panel, {
        expanded: _ctx.expand,
        onToggle: _ctx.onToggle
      }, {
        title: _withCtx(() => _cache[4] || (_cache[4] = [
          _createTextVNode("Panel to be expanded")
        ])),
        default: _withCtx(() => [
          _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
            id: "field1",
            modelValue: _ctx.field1,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.field1 = $event)
          }, {
            default: _withCtx(() => _cache[5] || (_cache[5] = [
              _createTextVNode(" Field1 ")
            ])),
            _: 1,
            __: [5]
          }, 8, ["modelValue"])), [
            [
              _directive_validation,
              { maxLength: { length: 32 } },
              void 0,
              {
                required: true,
                maxLength: true
              }
            ]
          ]),
          _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
            id: "field2",
            modelValue: _ctx.field2,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.field2 = $event)
          }, {
            default: _withCtx(() => _cache[6] || (_cache[6] = [
              _createTextVNode(" Field2 ")
            ])),
            _: 1,
            __: [6]
          }, 8, ["modelValue"])), [
            [
              _directive_validation,
              { maxLength: { length: 32 } },
              void 0,
              {
                required: true,
                maxLength: true
              }
            ]
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["expanded", "onToggle"]),
      _createElementVNode("div", _hoisted_1, [
        _cache[7] || (_cache[7] = _createElementVNode(
          "button",
          {
            type: "submit",
            "data-test": "submit-button",
            class: "button button-group__item button--primary button--large"
          },
          " Spara ",
          -1
          /* CACHED */
        )),
        _createElementVNode("button", {
          type: "button",
          "data-test": "cancel-button",
          class: "button button-group__item button--secondary button--large",
          onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onCancel && _ctx.onCancel(...args))
        }, " Avbryt ")
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["error-list-before-navigate", "onSubmit"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-c52c91"
});
export {
  render
};
