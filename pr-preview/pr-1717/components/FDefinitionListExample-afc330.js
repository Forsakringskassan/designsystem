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

// virtual-entry:virtual:packages/vue/src/components/FDefinitionList/examples/FDefinitionListExample.vue:FDefinitionListExample-afc330.js
import { defineComponent as _defineComponent } from "vue";
import { FDefinitionList } from "@fkui/vue";
import { openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FDefinitionListExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const definitions = [
      { term: "Skulle ha jobbat", definition: "8 timmar" },
      { term: "Vabbade", definition: "8 timmar" },
      { term: "Omfattning", definition: "100 procent" }
    ];
    const __returned__ = { definitions, get FDefinitionList() {
      return FDefinitionList;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FDefinitionList"], { definitions: $setup.definitions });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-afc330"
});
export {
  render
};
