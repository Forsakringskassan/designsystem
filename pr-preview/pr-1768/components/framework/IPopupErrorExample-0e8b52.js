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

// virtual-entry:virtual:packages/vue/src/internal-components/IPopupError/examples/IPopupErrorExample.vue:IPopupErrorExample-0e8b52.js
import { defineComponent as _defineComponent } from "vue";
import { FButton, FTable, FValidationForm, defineTableColumns, useDatasetRef } from "@fkui/vue";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "IPopupErrorExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const rows = useDatasetRef([
      { id: "1", email: "", postnr: "" },
      { id: "2", email: "", postnr: "" },
      { id: "3", email: "", postnr: "" }
    ]);
    const columns = defineTableColumns([
      {
        type: "text:email",
        header: "Epost",
        key: "email",
        editable: true,
        label: () => "Epost",
        validation: { required: {} }
      },
      {
        type: "text:postalCode",
        header: "Postnummer",
        key: "postnr",
        editable: true,
        label: () => "Postnummer",
        validation: { required: {} }
      }
    ]);
    const __returned__ = { rows, columns, get FButton() {
      return FButton;
    }, get FTable() {
      return FTable;
    }, get FValidationForm() {
      return FValidationForm;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FValidationForm"], { "use-error-list": false }, {
    default: _withCtx(() => [
      _createVNode($setup["FTable"], {
        rows: $setup.rows,
        columns: $setup.columns
      }, {
        caption: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createTextVNode(
            " PopupError example ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["rows", "columns"]),
      _createVNode($setup["FButton"], {
        size: "large",
        variant: "primary",
        type: "submit"
      }, {
        default: _withCtx(() => [..._cache[1] || (_cache[1] = [
          _createTextVNode(
            "Submit",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-0e8b52"
});
export {
  render
};
