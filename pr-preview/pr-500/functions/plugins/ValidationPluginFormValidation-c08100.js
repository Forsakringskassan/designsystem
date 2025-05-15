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

// virtual-entry:virtual:packages/vue/src/plugins/validation/examples/ValidationPluginFormValidation.vue:ValidationPluginFormValidation-c08100.js
import { defineComponent } from "vue";
import { FValidationForm, FTextField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createElementBlock as _createElementBlock, createElementVNode as _createElementVNode } from "vue";
var exampleComponent = defineComponent({
  name: "ValidationPluginFormValidation",
  components: { FValidationForm, FTextField }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_f_validation_form = _resolveComponent("f-validation-form");
  const _directive_validation_prefix = _resolveDirective("validation-prefix");
  const _directive_validation = _resolveDirective("validation");
  const _directive_test = _resolveDirective("test");
  return _withDirectives((_openBlock(), _createBlock(_component_f_validation_form, null, {
    "error-message": _withCtx(() => _cache[0] || (_cache[0] = [
      _createTextVNode(" Fel i f\xF6ljande f\xE4lt... ")
    ])),
    default: _withCtx(() => [
      _withDirectives((_openBlock(), _createElementBlock("div", null, [
        _withDirectives((_openBlock(), _createBlock(_component_f_text_field, { maxlength: 100 }, {
          default: _withCtx(() => _cache[1] || (_cache[1] = [
            _createTextVNode(" Okreativ etikett ")
          ])),
          _: 1
          /* STABLE */
        })), [
          [
            _directive_validation_prefix,
            "1 ",
            void 0,
            { maxLength: true }
          ],
          [
            _directive_validation,
            void 0,
            void 0,
            { required: true }
          ]
        ]),
        _withDirectives((_openBlock(), _createBlock(_component_f_text_field, { maxlength: 100 }, {
          default: _withCtx(() => _cache[2] || (_cache[2] = [
            _createTextVNode(" Okreativ etikett ")
          ])),
          _: 1
          /* STABLE */
        })), [
          [
            _directive_validation_prefix,
            "2 ",
            void 0,
            { maxLength: true }
          ],
          [
            _directive_validation,
            void 0,
            void 0,
            { required: true }
          ]
        ]),
        _withDirectives((_openBlock(), _createBlock(_component_f_text_field, { maxlength: 100 }, {
          default: _withCtx(() => _cache[3] || (_cache[3] = [
            _createTextVNode(" Okreativ etikett ")
          ])),
          _: 1
          /* STABLE */
        })), [
          [
            _directive_validation_prefix,
            "3 ",
            void 0,
            { maxLength: true }
          ],
          [
            _directive_validation,
            void 0,
            void 0,
            { required: true }
          ]
        ])
      ])), [
        [_directive_validation_prefix, "PREFIX "]
      ]),
      _cache[4] || (_cache[4] = _createElementVNode(
        "button",
        { type: "submit" },
        "Trigga fel",
        -1
        /* HOISTED */
      ))
    ]),
    _: 1
    /* STABLE */
  })), [
    [_directive_test, "form-validation-prefix"]
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-c08100"
});
export {
  render
};
