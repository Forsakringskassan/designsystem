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

// virtual-entry:virtual:packages/vue/src/components/FDefinitionList/examples/FDefinitionListExample.vue:FDefinitionListExample-498617.js
import { defineComponent as _defineComponent2 } from "vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FDefinitionList/FDefinitionList.vue?type=script
import { defineComponent as _defineComponent } from "vue";
var FDefinitionList_default = /* @__PURE__ */ _defineComponent({
  __name: "FDefinitionList",
  props: {
    definitions: { type: Array, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FDefinitionList/FDefinitionList.vue?type=template
import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, toDisplayString as _toDisplayString, createElementVNode as _createElementVNode } from "vue";
var _hoisted_1 = { class: "definition-list" };
var _hoisted_2 = { class: "definition-list__term" };
var _hoisted_3 = { class: "definition-list__description" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("dl", _hoisted_1, [
    (_openBlock(true), _createElementBlock(
      _Fragment,
      null,
      _renderList($props.definitions, (definition) => {
        return _openBlock(), _createElementBlock(
          _Fragment,
          {
            key: definition.term
          },
          [
            _createElementVNode(
              "dt",
              _hoisted_2,
              _toDisplayString(definition.term),
              1
              /* TEXT */
            ),
            _createElementVNode(
              "dd",
              _hoisted_3,
              _toDisplayString(definition.description),
              1
              /* TEXT */
            )
          ],
          64
          /* STABLE_FRAGMENT */
        );
      }),
      128
      /* KEYED_FRAGMENT */
    ))
  ]);
}

// packages/vue/src/components/FDefinitionList/FDefinitionList.vue
FDefinitionList_default.render = render;
FDefinitionList_default.__file = "packages/vue/src/components/FDefinitionList/FDefinitionList.vue";
var FDefinitionList_default2 = FDefinitionList_default;

// virtual-entry:virtual:packages/vue/src/components/FDefinitionList/examples/FDefinitionListExample.vue:FDefinitionListExample-498617.js
import { openBlock as _openBlock2, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent2({
  __name: "FDefinitionListExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const exampleDefinitions = [
      { term: "Skulle ha jobbat", description: "8 timmar" },
      { term: "Vabbade", description: "8 timmar" },
      { term: "Omfattning", description: "100 procent" }
    ];
    const __returned__ = { exampleDefinitions, get FDefinitionList() {
      return FDefinitionList_default2;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock2(), _createBlock($setup["FDefinitionList"], { definitions: $setup.exampleDefinitions });
}
exampleComponent.render = render2;
setup({
  rootComponent: exampleComponent,
  selector: "#example-498617"
});
export {
  render2 as render
};
