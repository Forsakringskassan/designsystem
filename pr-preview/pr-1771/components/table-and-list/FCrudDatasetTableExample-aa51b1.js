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

// virtual-entry:virtual:packages/vue/src/components/FCrudDataset/examples/FCrudDatasetTableExample.vue:FCrudDatasetTableExample-aa51b1.js
import { defineComponent as _defineComponent } from "vue";
import { useTemplateRef } from "vue";

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

// virtual-entry:virtual:packages/vue/src/components/FCrudDataset/examples/FCrudDatasetTableExample.vue:FCrudDatasetTableExample-aa51b1.js
import {
  FCrudDataset,
  FTable,
  FTextField,
  FTextareaField,
  defineTableColumns,
  useDatasetRef
} from "@fkui/vue";
import { createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, createTextVNode as _createTextVNode, resolveDirective as _resolveDirective, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, toDisplayString as _toDisplayString } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FCrudDatasetTableExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const rows = useDatasetRef(fruits, "variant");
    const crud = useTemplateRef("crud");
    const columns = defineTableColumns([
      { type: "text", header: "Namn", key: "name", size: "shrink" },
      { type: "text", header: "Land", key: "origin", size: "shrink" },
      { type: "text", header: "Beskrivning", key: "description" },
      {
        type: "menu",
        header: "\xC5tg\xE4rd",
        text: (row) => `Visa \xE5tg\xE4rder f\xF6r ${row.name}`,
        actions: [
          {
            label: "\xC4ndra",
            icon: "pen",
            onClick: (row) => {
              crud.value?.updateItem(row);
            }
          },
          {
            label: "Ta bort",
            icon: "trashcan",
            onClick: (row) => {
              crud.value?.deleteItem(row);
            }
          }
        ]
      }
    ]);
    function saveModel(row) {
      console.log("Post model to backend", row);
    }
    const __returned__ = { rows, crud, columns, saveModel, get FCrudDataset() {
      return FCrudDataset;
    }, get FTable() {
      return FTable;
    }, get FTextField() {
      return FTextField;
    }, get FTextareaField() {
      return FTextareaField;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createBlock($setup["FCrudDataset"], {
    ref: "crud",
    modelValue: $setup.rows,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.rows = $event),
    onCreated: $setup.saveModel,
    onUpdated: $setup.saveModel,
    onDeleted: $setup.saveModel
  }, {
    default: _withCtx(() => [
      _createVNode($setup["FTable"], {
        rows: $setup.rows,
        columns: $setup.columns,
        striped: ""
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
      _withDirectives((_openBlock(), _createBlock($setup["FTextField"], {
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
      ]),
      _withDirectives((_openBlock(), _createBlock($setup["FTextField"], {
        modelValue: item.origin,
        "onUpdate:modelValue": ($event) => item.origin = $event,
        type: "text"
      }, {
        default: _withCtx(() => [..._cache[3] || (_cache[3] = [
          _createTextVNode(
            " Land ",
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
      ]),
      _withDirectives((_openBlock(), _createBlock($setup["FTextareaField"], {
        modelValue: item.description,
        "onUpdate:modelValue": ($event) => item.description = $event
      }, {
        default: _withCtx(() => [..._cache[4] || (_cache[4] = [
          _createTextVNode(
            " Beskrivning ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "onUpdate:modelValue"])), [
        [
          _directive_validation,
          void 0,
          void 0,
          { required: true }
        ]
      ]),
      _createTextVNode(
        " ID " + _toDisplayString(item.id),
        1
        /* TEXT */
      )
    ]),
    add: _withCtx(({ item }) => [
      _withDirectives((_openBlock(), _createBlock($setup["FTextField"], {
        modelValue: item.id,
        "onUpdate:modelValue": ($event) => item.id = $event,
        type: "text"
      }, {
        default: _withCtx(() => [..._cache[5] || (_cache[5] = [
          _createTextVNode(
            " ID ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "onUpdate:modelValue"])), [
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
      _withDirectives((_openBlock(), _createBlock($setup["FTextField"], {
        modelValue: item.name,
        "onUpdate:modelValue": ($event) => item.name = $event,
        type: "text"
      }, {
        default: _withCtx(() => [..._cache[6] || (_cache[6] = [
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
      ]),
      _withDirectives((_openBlock(), _createBlock($setup["FTextField"], {
        modelValue: item.origin,
        "onUpdate:modelValue": ($event) => item.origin = $event,
        type: "text"
      }, {
        default: _withCtx(() => [..._cache[7] || (_cache[7] = [
          _createTextVNode(
            " Land ",
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
      ]),
      _withDirectives((_openBlock(), _createBlock($setup["FTextareaField"], {
        modelValue: item.description,
        "onUpdate:modelValue": ($event) => item.description = $event
      }, {
        default: _withCtx(() => [..._cache[8] || (_cache[8] = [
          _createTextVNode(
            " Beskrivning ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "onUpdate:modelValue"])), [
        [
          _directive_validation,
          void 0,
          void 0,
          { required: true }
        ]
      ])
    ]),
    delete: _withCtx(({ item }) => [
      _createTextVNode(
        ' Vill du verkligen radera frukten "' + _toDisplayString(item.name) + '" med ID ' + _toDisplayString(item.id),
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-aa51b1"
});
export {
  render
};
