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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FDefinitionListPageObject/FDefinitionListPageObject-number-of-definitions.vue:FDefinitionListPageObject-number-of-definitions-89edd1.js
import { defineComponent as _defineComponent } from "vue";
import { FDefinitionList } from "@fkui/vue";
import { resolveDirective as _resolveDirective, createVNode as _createVNode, withDirectives as _withDirectives, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FDefinitionListPageObject-number-of-definitions",
  setup(__props, { expose: __expose }) {
    __expose();
    const zeroDefinitions = [];
    const threeDefinitions = [
      { term: "Skulle ha jobbat", description: "8 timmar" },
      { term: "Vabbade", description: "8 timmar" },
      { term: "Omfattning", description: "100 procent" }
    ];
    const __returned__ = { zeroDefinitions, threeDefinitions, get FDefinitionList() {
      return FDefinitionList;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_test = _resolveDirective("test");
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _withDirectives(_createVNode(
        $setup["FDefinitionList"],
        { definitions: $setup.zeroDefinitions },
        null,
        512
        /* NEED_PATCH */
      ), [
        [_directive_test, "my-definition-list-zero-definitions"]
      ]),
      _withDirectives(_createVNode(
        $setup["FDefinitionList"],
        { definitions: $setup.threeDefinitions },
        null,
        512
        /* NEED_PATCH */
      ), [
        [_directive_test, "my-definition-list-three-definitions"]
      ])
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-89edd1"
});
export {
  render
};
