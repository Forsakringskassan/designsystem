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

// virtual-entry:virtual:docs/guides/validation/examples/CustomValidatorExample.vue:CustomValidatorExample-9e431f.js
import { defineComponent } from "vue";
import {
  ValidationErrorMessageBuilder,
  ValidationService,
  isEmpty
} from "@fkui/logic";
import { FTextField } from "@fkui/vue";
import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createElementBlock as _createElementBlock } from "vue";
function startsWithPattern(input, pattern) {
  return input.startsWith(pattern);
}
var defaultConfig = {
  startString: "demo"
};
var startsWithValidator = {
  name: "startsWith",
  validation(value, element, userConfig) {
    if (isEmpty(value)) {
      return true;
    }
    const config = { ...defaultConfig, ...userConfig };
    return startsWithPattern(value, config.startString);
  }
};
ValidationService.registerValidator(startsWithValidator);
ValidationService.setErrorMessages(
  ValidationErrorMessageBuilder.create().map("startsWith", "F\xE4ltet b\xF6rjar med fel v\xE4rde.").build()
);
var exampleComponent = defineComponent({
  name: "CustomValidator",
  components: { FTextField },
  data() {
    return {
      modelFoo: "",
      modelBar: "",
      modelDemo: ""
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock("div", null, [
    _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
      modelValue: _ctx.modelFoo,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.modelFoo = $event)
    }, {
      description: _withCtx(({ descriptionClass }) => [
        _createElementVNode(
          "span",
          {
            class: _normalizeClass(descriptionClass)
          },
          " Anv\xE4nder globalt felmeddelande ",
          2
          /* CLASS */
        )
      ]),
      default: _withCtx(() => [
        _cache[3] || (_cache[3] = _createTextVNode(
          " Detta f\xE4lt accepterar bara str\xE4ngar som b\xF6rjar med 'foo' ",
          -1
          /* CACHED */
        ))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"])), [
      [
        _directive_validation,
        {
          startsWith: { startString: "foo" },
          maxLength: { length: 20 }
        },
        void 0,
        {
          startsWith: true,
          maxLength: true
        }
      ]
    ]),
    _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
      modelValue: _ctx.modelBar,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.modelBar = $event)
    }, {
      description: _withCtx(({ descriptionClass }) => [
        _createElementVNode(
          "span",
          {
            class: _normalizeClass(descriptionClass)
          },
          " Anv\xE4nder ett specifik felmeddelande ",
          2
          /* CLASS */
        )
      ]),
      default: _withCtx(() => [
        _cache[4] || (_cache[4] = _createTextVNode(
          " Detta f\xE4lt accepterar bara str\xE4ngar som b\xF6rjar med 'bar' ",
          -1
          /* CACHED */
        ))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"])), [
      [
        _directive_validation,
        {
          startsWith: {
            startString: "bar",
            errorMessage: "Texten m\xE5ste b\xF6rja med bar"
          },
          maxLength: { length: 20 }
        },
        void 0,
        {
          startsWith: true,
          maxLength: true
        }
      ]
    ]),
    _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
      modelValue: _ctx.modelDemo,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.modelDemo = $event)
    }, {
      description: _withCtx(({ descriptionClass }) => [
        _createElementVNode(
          "span",
          {
            class: _normalizeClass(descriptionClass)
          },
          " Saknar konfiguration f\xF6r `startsWith` ",
          2
          /* CLASS */
        )
      ]),
      default: _withCtx(() => [
        _cache[5] || (_cache[5] = _createTextVNode(
          " Detta f\xE4lt accepterar bara str\xE4ngar som b\xF6rjar med 'demo' ",
          -1
          /* CACHED */
        ))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"])), [
      [
        _directive_validation,
        {
          maxLength: { length: 20 }
        },
        void 0,
        {
          startsWith: true,
          maxLength: true
        }
      ]
    ])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-9e431f"
});
export {
  render,
  startsWithValidator
};
