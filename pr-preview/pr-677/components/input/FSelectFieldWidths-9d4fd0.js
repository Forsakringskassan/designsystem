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

// virtual-entry:virtual:packages/vue/src/components/FSelectField/examples/FSelectFieldWidths.vue:FSelectFieldWidths-9d4fd0.js
import { defineComponent } from "vue";
import { FSelectField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives } from "vue";
var exampleComponent = defineComponent({
  name: "FSelectFieldWidths",
  components: { FSelectField },
  data() {
    return { foo: "" };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _directive_validation = _resolveDirective("validation");
  return _withDirectives((_openBlock(), _createBlock(_component_f_select_field, {
    modelValue: _ctx.foo,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.foo = $event),
    "label-width": "md-9",
    "select-width": "md-6"
  }, {
    label: _withCtx(() => [..._cache[1] || (_cache[1] = [
      _createTextVNode(
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque lacus sed mi mollis pulvinar. ",
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(() => [
      _cache[2] || (_cache[2] = _createElementVNode(
        "option",
        {
          disabled: "",
          hidden: "",
          value: ""
        },
        "V\xE4lj\u2026",
        -1
        /* CACHED */
      )),
      _cache[3] || (_cache[3] = _createElementVNode(
        "option",
        { value: "FOO" },
        "Foo",
        -1
        /* CACHED */
      )),
      _cache[4] || (_cache[4] = _createElementVNode(
        "option",
        { value: "BAR" },
        "Bar",
        -1
        /* CACHED */
      )),
      _cache[5] || (_cache[5] = _createElementVNode(
        "option",
        { value: "BAZ" },
        "Baz",
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
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-9d4fd0"
});
export {
  render
};
