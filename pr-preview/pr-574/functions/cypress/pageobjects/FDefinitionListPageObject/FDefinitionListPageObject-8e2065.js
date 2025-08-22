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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FDefinitionListPageObject/FDefinitionListPageObject.vue:FDefinitionListPageObject-8e2065.js
import { defineComponent as _defineComponent } from "vue";
import { FDefinitionList } from "@fkui/vue";
import { resolveDirective as _resolveDirective, withDirectives as _withDirectives, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FDefinitionListPageObject",
  setup(__props, { expose: __expose }) {
    __expose();
    const definitions = [
      { term: "Skulle ha jobbat", description: "8 timmar" },
      { term: "Vabbade", description: "8 timmar" },
      { term: "Omfattning", description: "100 procent" }
    ];
    const __returned__ = { definitions, get FDefinitionList() {
      return FDefinitionList;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_test = _resolveDirective("test");
  return _withDirectives((_openBlock(), _createBlock(
    $setup["FDefinitionList"],
    { definitions: $setup.definitions },
    null,
    512
    /* NEED_PATCH */
  )), [
    [_directive_test, "my-definition-list"]
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-8e2065"
});
export {
  render
};
