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

// virtual-entry:virtual:packages/vue/src/components/FInteractiveTable/examples/FInteractiveTableInputExample.vue:FInteractiveTableInputExample-d972d7.js
import { defineComponent } from "vue";
import { FDatepickerField, FInteractiveTable, FTableColumn, FNumericTextField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, toDisplayString as _toDisplayString, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, resolveDirective as _resolveDirective, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives } from "vue";
var exampleComponent = defineComponent({
  name: "FInteractiveTableInputExample",
  components: {
    FInteractiveTable,
    FTableColumn,
    FDatepickerField,
    FNumericTextField
  },
  data() {
    return {
      betalningar: [
        {
          id: "1",
          date: "2024-05-25",
          belopp: "",
          beskrivning: "F\xF6rsta utbetalning"
        },
        {
          id: "2",
          date: "2024-06-25",
          belopp: "",
          beskrivning: "Andra utbetalning"
        },
        {
          id: "3",
          date: "2024-07-24",
          belopp: "",
          beskrivning: "Tredje utbetalning"
        }
      ]
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_table_column = _resolveComponent("f-table-column");
  const _component_f_datepicker_field = _resolveComponent("f-datepicker-field");
  const _component_f_numeric_text_field = _resolveComponent("f-numeric-text-field");
  const _component_f_interactive_table = _resolveComponent("f-interactive-table");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createBlock(_component_f_interactive_table, {
    rows: _ctx.betalningar,
    "key-attribute": "id"
  }, {
    caption: _withCtx(() => [..._cache[0] || (_cache[0] = [
      _createTextVNode(
        " Justera betalningar ",
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(({ row }) => [
      _createVNode(
        _component_f_table_column,
        {
          title: "Beskrivning",
          type: "text",
          shrink: ""
        },
        {
          default: _withCtx(() => [
            _createTextVNode(
              _toDisplayString(row.beskrivning),
              1
              /* TEXT */
            )
          ]),
          _: 2
          /* DYNAMIC */
        },
        1024
        /* DYNAMIC_SLOTS */
      ),
      _createVNode(
        _component_f_table_column,
        {
          title: "Utbetalningsdatum",
          type: "text",
          shrink: ""
        },
        {
          default: _withCtx(() => [
            _withDirectives((_openBlock(), _createBlock(_component_f_datepicker_field, {
              modelValue: row.date,
              "onUpdate:modelValue": ($event) => row.date = $event
            }, {
              default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                _createTextVNode(
                  " Utbetalningsdatum ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["modelValue", "onUpdate:modelValue"])), [
              [
                _directive_validation,
                void 0,
                void 0,
                { required: true }
              ]
            ])
          ]),
          _: 2
          /* DYNAMIC */
        },
        1024
        /* DYNAMIC_SLOTS */
      ),
      _createVNode(
        _component_f_table_column,
        {
          title: "Utbetalat belopp",
          type: "text",
          shrink: ""
        },
        {
          default: _withCtx(() => [
            _withDirectives((_openBlock(), _createBlock(_component_f_numeric_text_field, {
              modelValue: row.belopp,
              "onUpdate:modelValue": ($event) => row.belopp = $event
            }, {
              default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                _createTextVNode(
                  " Utbetalt belopp ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["modelValue", "onUpdate:modelValue"])), [
              [
                _directive_validation,
                void 0,
                void 0,
                { required: true }
              ]
            ])
          ]),
          _: 2
          /* DYNAMIC */
        },
        1024
        /* DYNAMIC_SLOTS */
      )
    ]),
    _: 1
    /* STABLE */
  }, 8, ["rows"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-d972d7"
});
export {
  render
};
