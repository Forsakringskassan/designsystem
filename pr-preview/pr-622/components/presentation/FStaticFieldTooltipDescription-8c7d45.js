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

// virtual-entry:virtual:packages/vue/src/components/FStaticField/examples/FStaticFieldTooltipDescription.vue:FStaticFieldTooltipDescription-8c7d45.js
import { defineComponent } from "vue";
import { FStaticField, FTooltip } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FStaticFieldTooltipDescription",
  components: { FStaticField, FTooltip }
});
var _hoisted_1 = { "data-test": "output-field" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_tooltip = _resolveComponent("f-tooltip");
  const _component_f_static_field = _resolveComponent("f-static-field");
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_f_static_field, null, {
      label: _withCtx(() => [..._cache[0] || (_cache[0] = [
        _createTextVNode(
          " Etikett ",
          -1
          /* CACHED */
        )
      ])]),
      tooltip: _withCtx(() => [
        _createVNode(_component_f_tooltip, {
          "screen-reader-text": "L\xE4s mer om avancerat f\xE4lt",
          "header-tag": "h2"
        }, {
          header: _withCtx(() => [..._cache[1] || (_cache[1] = [
            _createTextVNode(
              " Mer om avancerat f\xE4lt ",
              -1
              /* CACHED */
            )
          ])]),
          body: _withCtx(() => [..._cache[2] || (_cache[2] = [
            _createTextVNode(
              " Detta f\xE4ltet kr\xE4ver lite n\xE4rmare f\xF6rklaring. ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        })
      ]),
      description: _withCtx(({ descriptionClass, formatDescriptionClass }) => [
        _createElementVNode(
          "span",
          {
            class: _normalizeClass(descriptionClass)
          },
          " Beskrivning av etikett ",
          2
          /* CLASS */
        ),
        _createElementVNode(
          "span",
          {
            class: _normalizeClass(formatDescriptionClass)
          },
          " (format) ",
          2
          /* CLASS */
        )
      ]),
      default: _withCtx(() => [..._cache[3] || (_cache[3] = [
        _createTextVNode(
          " En liten statisk text. ",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    })
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-8c7d45"
});
export {
  render
};
