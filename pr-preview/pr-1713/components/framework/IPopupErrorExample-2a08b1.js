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

// virtual-entry:virtual:packages/vue/src/internal-components/IPopupError/examples/IPopupErrorExample.vue:IPopupErrorExample-2a08b1.js
import { defineComponent } from "vue";
import { FButton, FTable, FValidationForm, defineTableColumns, useDatasetRef } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var rows = useDatasetRef([
  { id: "1", email: "", postnr: "" },
  { id: "2", email: "", postnr: "" },
  { id: "3", email: "", postnr: "" }
]);
var columns = defineTableColumns([
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
var exampleComponent = defineComponent({
  name: "TestApp",
  components: {
    FButton,
    FTable,
    FValidationForm
  },
  setup() {
    return { rows, columns };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_table = _resolveComponent("f-table");
  const _component_f_button = _resolveComponent("f-button");
  const _component_f_validation_form = _resolveComponent("f-validation-form");
  return _openBlock(), _createBlock(_component_f_validation_form, { "use-error-list": false }, {
    default: _withCtx(() => [
      _createVNode(_component_f_table, {
        rows: _ctx.rows,
        columns: _ctx.columns
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
      _createVNode(_component_f_button, {
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
  selector: "#example-2a08b1"
});
export {
  render
};
