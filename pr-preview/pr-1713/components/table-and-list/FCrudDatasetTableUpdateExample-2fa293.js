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

// virtual-entry:virtual:packages/vue/src/components/FCrudDataset/examples/FCrudDatasetTableUpdateExample.vue:FCrudDatasetTableUpdateExample-2fa293.js
import { defineComponent } from "vue";

// packages/vue/src/components/FCrudDataset/examples/fruit-data.ts
var fruits = [
  {
    id: "1",
    name: "\xC4pple",
    origin: "Sverige",
    description: "Rund, ofta r\xF6d eller gr\xF6n frukt med s\xF6t eller syrlig smak.",
    variant: [
      {
        id: "1a",
        name: "Discovery",
        origin: "Sverige",
        description: "R\xF6tt och gulgr\xF6nt \xE4pple. Krispig och smakrik."
      },
      {
        id: "1b",
        name: "Ingrid Marie",
        origin: "Sverige",
        description: "M\xF6rkr\xF6tt \xE4pple. Saftig och s\xF6tsyrlig."
      }
    ]
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

// virtual-entry:virtual:packages/vue/src/components/FCrudDataset/examples/FCrudDatasetTableUpdateExample.vue:FCrudDatasetTableUpdateExample-2fa293.js
import { FCrudDataset, FTable, FTextField, defineTableColumns, useDatasetRef } from "@fkui/vue";
import { createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, createTextVNode as _createTextVNode, resolveDirective as _resolveDirective, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives } from "vue";
var rows = useDatasetRef(fruits);
var updateRow = (_row) => void 0;
var columns = defineTableColumns([
  { type: "text", header: "Namn", key: "name", size: "shrink" },
  { type: "text", header: "Land", key: "origin", size: "shrink" },
  { type: "text", header: "Beskrivning", key: "description" },
  {
    type: "button",
    header: "\xC5tg\xE4rd",
    text: (row) => `\xC4ndra ${row.name}`,
    icon: "pen",
    onClick: (row) => {
      updateRow(row);
    }
  }
]);
var exampleComponent = defineComponent({
  name: "ExampleApp",
  components: {
    FCrudDataset,
    FTextField,
    FTable
  },
  setup() {
    return {
      rows,
      columns,
      getColumns(updateItem) {
        updateRow = updateItem;
        return columns;
      }
    };
  },
  methods: {
    saveModel(row) {
      console.log("Post model to backend", row);
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_table = _resolveComponent("f-table");
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_f_crud_dataset = _resolveComponent("f-crud-dataset");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createBlock(_component_f_crud_dataset, {
    modelValue: _ctx.rows,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.rows = $event),
    onCreated: _ctx.saveModel,
    onUpdated: _ctx.saveModel,
    onDeleted: _ctx.saveModel
  }, {
    default: _withCtx(({ updateItem }) => [
      _createVNode(_component_f_table, {
        rows: _ctx.rows,
        columns: _ctx.getColumns(updateItem)
      }, {
        caption: _withCtx(() => [..._cache[1] || (_cache[1] = [
          _createElementVNode(
            "b",
            null,
            "Frukter",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["rows", "columns"])
    ]),
    modify: _withCtx(({ item }) => [
      _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
        modelValue: item.name,
        "onUpdate:modelValue": ($event) => item.name = $event,
        type: "text"
      }, {
        default: _withCtx(() => [..._cache[2] || (_cache[2] = [
          _createTextVNode(
            " Namn ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "onUpdate:modelValue"])), [
        [
          _directive_validation,
          { maxLength: { length: 32 } },
          void 0,
          {
            required: true,
            maxLength: true
          }
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
  selector: "#example-2fa293"
});
export {
  render
};
