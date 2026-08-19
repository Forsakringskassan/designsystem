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

// virtual-entry:virtual:packages/vue/src/components/FErrorList/examples/FErrorListNoLinks.vue:FErrorListNoLinks-32d8e4.js
import { defineComponent } from "vue";
import { FErrorList } from "@fkui/vue";
import { resolveComponent as _resolveComponent, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FErrorListNoLinks",
  components: { FErrorList },
  data() {
    return { items: [{ title: "F\xF6rnamn" }, { title: "Efternamn" }] };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_error_list = _resolveComponent("f-error-list");
  return _openBlock(), _createBlock(_component_f_error_list, {
    items: _ctx.items,
    bullets: true
  }, null, 8, ["items"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-32d8e4"
});
export {
  render
};
