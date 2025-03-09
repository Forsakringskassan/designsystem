// docs/src/setup.ts
import { createApp, h } from "vue";
import {
  ErrorPlugin,
  FErrorHandlingApp,
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
  app.mount(selector);
}

// virtual-entry:./docs/components/table-and-list/table.md
import { defineComponent as _defineComponent } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "table",
  setup(__props, { expose: __expose }) {
    __expose();
    const rows = ref([
      { name: "Banan", type: "Frukt" },
      { name: "\xC4pple", type: "Frukt" },
      { name: "Vitk\xE5l", type: "Gr\xF6nsak" },
      { name: "Spenat", type: "Gr\xF6nsak" }
    ]);
    const selectedRows = ref(rows.value.filter((row) => row.type === "Frukt"));
    const __returned__ = { rows, selectedRows };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
setup({
  rootComponent: exampleComponent,
  selector: "#table"
});
