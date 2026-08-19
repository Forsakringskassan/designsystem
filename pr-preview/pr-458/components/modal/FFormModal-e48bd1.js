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

// virtual-entry:virtual:docs/components/modal/FFormModal.md:FFormModal-e48bd1.js
import { defineComponent } from "vue";
import { FFormModal, FTextField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  components: { FFormModal, FTextField },
  props: {
    value: {
      type: Object,
      required: true
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_f_form_modal = _resolveComponent("f-form-modal", true);
  return _openBlock(), _createBlock(_component_f_form_modal, { value: _ctx.value }, {
    header: _withCtx(() => _cache[2] || (_cache[2] = [
      _createTextVNode(" Awesome Modal ")
    ])),
    "input-text-fields": _withCtx(() => [
      _createVNode(_component_f_text_field, {
        modelValue: _ctx.value.name,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value.name = $event)
      }, {
        default: _withCtx(() => _cache[3] || (_cache[3] = [
          _createTextVNode(" Namn ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_text_field, {
        modelValue: _ctx.value.age,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.value.age = $event)
      }, {
        default: _withCtx(() => _cache[4] || (_cache[4] = [
          _createTextVNode(" \xC5lder ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["value"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-e48bd1"
});
export {
  render
};
