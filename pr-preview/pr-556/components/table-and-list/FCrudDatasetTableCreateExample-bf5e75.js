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

// virtual-entry:virtual:packages/vue/src/components/FCrudDataset/examples/FCrudDatasetTableCreateExample.vue:FCrudDatasetTableCreateExample-bf5e75.js
import { defineComponent } from "vue";
import { FCrudDataset, FDataTable, FTableColumn, FTextField, FTextareaField } from "@fkui/vue";

// packages/vue/src/components/FCrudDataset/examples/fruit-data.ts
var fruits = [
  {
    id: "1",
    name: "\xC4pple",
    origin: "Sverige",
    description: "Rund, ofta r\xF6d eller gr\xF6n frukt med s\xF6t eller syrlig smak."
  },
  {
    id: "2",
    name: "Banan",
    origin: "Colombia",
    description: "L\xE5ng, gul frukt med mjukt och s\xF6tt fruktk\xF6tt."
  },
  {
    id: "3",
    name: "Vattenmelon",
    origin: "Spanien",
    description: "Stor, rund frukt med gr\xF6nt skal och saftigt, r\xF6tt fruktk\xF6tt."
  },
  {
    id: "4",
    name: "Grapefrukt",
    origin: "Turkiet",
    description: "Stor, rund citrusfrukt med tjockt skal och saftig, syrlig smak."
  }
];

// virtual-entry:virtual:packages/vue/src/components/FCrudDataset/examples/FCrudDatasetTableCreateExample.vue:FCrudDatasetTableCreateExample-bf5e75.js
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, resolveDirective as _resolveDirective, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives } from "vue";
var exampleComponent = defineComponent({
  components: {
    FCrudDataset,
    FDataTable,
    FTableColumn,
    FTextField,
    FTextareaField
  },
  data() {
    return {
      fruits
    };
  },
  methods: {
    saveModel(row) {
      console.log("Post model to backend", row);
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_table_column = _resolveComponent("f-table-column");
  const _component_f_data_table = _resolveComponent("f-data-table");
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_f_textarea_field = _resolveComponent("f-textarea-field");
  const _component_f_crud_dataset = _resolveComponent("f-crud-dataset");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createBlock(_component_f_crud_dataset, {
    modelValue: _ctx.fruits,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.fruits = $event),
    onCreated: _ctx.saveModel,
    onUpdated: _ctx.saveModel,
    onDeleted: _ctx.saveModel
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_data_table, {
        rows: _ctx.fruits,
        "key-attribute": "id"
      }, {
        caption: _withCtx(() => _cache[1] || (_cache[1] = [
          _createElementVNode(
            "b",
            null,
            "R\xE4ttigheter",
            -1
            /* CACHED */
          )
        ])),
        default: _withCtx(({ row }) => [
          _createVNode(
            _component_f_table_column,
            {
              title: "Namn",
              type: "text",
              shrink: ""
            },
            {
              default: _withCtx(() => [
                _createTextVNode(
                  _toDisplayString(row.name),
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
              title: "Land",
              type: "text",
              shrink: ""
            },
            {
              default: _withCtx(() => [
                _createTextVNode(
                  _toDisplayString(row.origin),
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
              title: "Beskrivning",
              type: "text",
              expand: ""
            },
            {
              default: _withCtx(() => [
                _createTextVNode(
                  _toDisplayString(row.description),
                  1
                  /* TEXT */
                )
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
      }, 8, ["rows"])
    ]),
    add: _withCtx(({ item }) => [
      _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
        modelValue: item.id,
        "onUpdate:modelValue": ($event) => item.id = $event,
        type: "text"
      }, {
        default: _withCtx(() => _cache[2] || (_cache[2] = [
          _createTextVNode(" ID ")
        ])),
        _: 2,
        __: [2]
      }, 1032, ["modelValue", "onUpdate:modelValue"])), [
        [
          _directive_validation,
          { maxLength: { length: 4 } },
          void 0,
          {
            required: true,
            maxLength: true
          }
        ]
      ]),
      _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
        modelValue: item.name,
        "onUpdate:modelValue": ($event) => item.name = $event,
        type: "text"
      }, {
        default: _withCtx(() => _cache[3] || (_cache[3] = [
          _createTextVNode(" Namn ")
        ])),
        _: 2,
        __: [3]
      }, 1032, ["modelValue", "onUpdate:modelValue"])), [
        [
          _directive_validation,
          { maxLength: { length: 32 } },
          void 0,
          {
            required: true,
            maxLength: true
          }
        ]
      ]),
      _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
        modelValue: item.origin,
        "onUpdate:modelValue": ($event) => item.origin = $event,
        type: "text"
      }, {
        default: _withCtx(() => _cache[4] || (_cache[4] = [
          _createTextVNode(" Land ")
        ])),
        _: 2,
        __: [4]
      }, 1032, ["modelValue", "onUpdate:modelValue"])), [
        [
          _directive_validation,
          { maxLength: { length: 32 } },
          void 0,
          {
            required: true,
            maxLength: true
          }
        ]
      ]),
      _withDirectives((_openBlock(), _createBlock(_component_f_textarea_field, {
        modelValue: item.description,
        "onUpdate:modelValue": ($event) => item.description = $event
      }, {
        default: _withCtx(() => _cache[5] || (_cache[5] = [
          _createTextVNode(" Beskrivning ")
        ])),
        _: 2,
        __: [5]
      }, 1032, ["modelValue", "onUpdate:modelValue"])), [
        [
          _directive_validation,
          void 0,
          void 0,
          { required: true }
        ]
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue", "onCreated", "onUpdated", "onDeleted"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-bf5e75"
});
export {
  render
};
