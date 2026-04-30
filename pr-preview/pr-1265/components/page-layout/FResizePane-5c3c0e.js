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

// virtual-entry:virtual:docs/components/page-layout/FResizePane.md:FResizePane-5c3c0e.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { useResize } from "@fkui/vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FResizePane",
  setup(__props, { expose: __expose }) {
    __expose();
    const enabled = ref(true);
    const visible = ref(true);
    useResize({
      enabled,
      visible
    });
    const __returned__ = { enabled, visible, ref, get useResize() {
      return useResize;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
setup({
  rootComponent: exampleComponent,
  selector: "#example-5c3c0e"
});
