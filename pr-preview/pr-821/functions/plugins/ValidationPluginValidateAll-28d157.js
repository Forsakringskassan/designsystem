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

// virtual-entry:virtual:packages/vue/src/plugins/validation/examples/ValidationPluginValidateAll.vue:ValidationPluginValidateAll-28d157.js
import { defineComponent } from "vue";
import { ValidationService } from "@fkui/logic";
import { openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "ValidationPluginValidateAll",
  methods: {
    validateAllFieldsOnPage() {
      const selector = "input, textarea, select";
      const elements = Array.from(document.querySelectorAll(selector));
      for (const element of elements.filter((element2) => element2.id)) {
        ValidationService.setError(element, `Server fel p\xE5 f\xE4lt med id ${element.id} `);
      }
      ValidationService.validateAllElements("rsg-root");
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("button", {
    class: "button button--primary",
    type: "button",
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.validateAllFieldsOnPage())
  }, " Validera alla f\xE4lt p\xE5 sidan ");
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-28d157"
});
export {
  render
};
