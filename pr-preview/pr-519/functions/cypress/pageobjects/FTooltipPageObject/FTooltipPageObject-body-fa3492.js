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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FTooltipPageObject/FTooltipPageObject-body.vue:FTooltipPageObject-body-fa3492.js
import { openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = {};
function render(_ctx, _cache) {
  return _openBlock(), _createElementBlock("div", null, "lorem ipsum");
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-fa3492"
});
export {
  render
};
