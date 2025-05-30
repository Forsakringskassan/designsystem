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

// virtual-entry:virtual:packages/vue/src/components/FCrudDataset/examples/FCrudDatasetTableUpdateExample.vue:FCrudDatasetTableUpdateExample-fe96fb.js
import { defineComponent } from "vue";
import { FCrudDataset, FTextField, FInteractiveTable, FTableButton, FTableColumn } from "@fkui/vue";

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

// virtual-entry:virtual:packages/vue/src/components/FCrudDataset/examples/FCrudDatasetTableUpdateExample.vue:FCrudDatasetTableUpdateExample-fe96fb.js
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, resolveDirective as _resolveDirective, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives } from "vue";
var exampleComponent = defineComponent({
  name: "ExampleApp",
  components: {
    FCrudDataset,
    FTextField,
    FInteractiveTable,
    FTableButton,
    FTableColumn
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
var _hoisted_1 = { class: "sr-only" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_table_column = _resolveComponent("f-table-column");
  const _component_f_table_button = _resolveComponent("f-table-button");
  const _component_f_interactive_table = _resolveComponent("f-interactive-table");
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_f_crud_dataset = _resolveComponent("f-crud-dataset");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createBlock(_component_f_crud_dataset, {
    modelValue: _ctx.fruits,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.fruits = $event),
    onCreated: _ctx.saveModel,
    onUpdated: _ctx.saveModel,
    onDeleted: _ctx.saveModel
  }, {
    default: _withCtx(({ updateItem }) => [
      _createVNode(_component_f_interactive_table, {
        rows: _ctx.fruits,
        "key-attribute": "id"
      }, {
        caption: _withCtx(() => _cache[1] || (_cache[1] = [
          _createElementVNode(
            "b",
            null,
            "Frukter",
            -1
            /* HOISTED */
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
          ),
          _createVNode(
            _component_f_table_column,
            {
              title: "\xC5tg\xE4rd",
              shrink: "",
              type: "action"
            },
            {
              default: _withCtx(() => [
                _createVNode(_component_f_table_button, {
                  icon: "pen",
                  label: "",
                  onClick: ($event) => updateItem(row)
                }, {
                  default: _withCtx(() => [
                    _cache[2] || (_cache[2] = _createTextVNode(" \xC4ndra ")),
                    _createElementVNode(
                      "span",
                      _hoisted_1,
                      _toDisplayString(row.name),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2,
                  __: [2]
                }, 1032, ["onClick"])
              ]),
              _: 2
              /* DYNAMIC */
            },
            1024
            /* DYNAMIC_SLOTS */
          )
        ]),
        _: 2
        /* DYNAMIC */
      }, 1032, ["rows"])
    ]),
    modify: _withCtx(({ item }) => [
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
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue", "onCreated", "onUpdated", "onDeleted"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-fe96fb"
});
export {
  render
};
