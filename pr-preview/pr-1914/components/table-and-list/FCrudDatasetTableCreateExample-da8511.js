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

// virtual-entry:virtual:packages/vue/src/components/FCrudDataset/examples/FCrudDatasetTableCreateExample.vue:FCrudDatasetTableCreateExample-da8511.js
import { defineComponent as _defineComponent2 } from "vue";
import { ref as ref2 } from "vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FCrudDataset/examples/FruitFormModal.vue?type=script
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { FFormModal, FTextField, FTextareaField } from "@fkui/vue";
var FruitFormModal_default = /* @__PURE__ */ _defineComponent({
  __name: "FruitFormModal",
  props: {
    heading: { type: String, required: true },
    confirmText: { type: String, required: true },
    fruit: { type: Object, required: true }
  },
  emits: ["close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const value = ref({ ...props.fruit });
    const buttons = [
      { label: props.confirmText, event: "submit", type: "primary", submitButton: true },
      { label: "Avbryt", event: "dismiss", type: "secondary" }
    ];
    const __returned__ = { props, emit, value, buttons, get FFormModal() {
      return FFormModal;
    }, get FTextField() {
      return FTextField;
    }, get FTextareaField() {
      return FTextareaField;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FCrudDataset/examples/FruitFormModal.vue?type=template
import { toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives } from "vue";
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createBlock($setup["FFormModal"], {
    value: $setup.value,
    buttons: $setup.buttons,
    "use-error-list": false,
    onClose: _cache[3] || (_cache[3] = (event) => $setup.emit("close", event))
  }, {
    header: _withCtx(() => [
      _createTextVNode(
        _toDisplayString($props.heading),
        1
        /* TEXT */
      )
    ]),
    "input-text-fields": _withCtx(() => [
      _withDirectives((_openBlock(), _createBlock($setup["FTextField"], {
        modelValue: $setup.value.name,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value.name = $event),
        type: "text"
      }, {
        default: _withCtx(() => [..._cache[4] || (_cache[4] = [
          _createTextVNode(
            " Namn ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])), [
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
        modelValue: $setup.value.origin,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.value.origin = $event),
        type: "text"
      }, {
        default: _withCtx(() => [..._cache[5] || (_cache[5] = [
          _createTextVNode(
            " Land ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])), [
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
        modelValue: $setup.value.description,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.value.description = $event)
      }, {
        default: _withCtx(() => [..._cache[6] || (_cache[6] = [
          _createTextVNode(
            " Beskrivning ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])), [
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
  }, 8, ["value"]);
}

// packages/vue/src/components/FCrudDataset/examples/FruitFormModal.vue
FruitFormModal_default.render = render;
FruitFormModal_default.__file = "packages/vue/src/components/FCrudDataset/examples/FruitFormModal.vue";
var FruitFormModal_default2 = FruitFormModal_default;

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

// virtual-entry:virtual:packages/vue/src/components/FCrudDataset/examples/FCrudDatasetTableCreateExample.vue:FCrudDatasetTableCreateExample-da8511.js
import {
  FCrudDataset,
  FTable,
  defineTableColumns,
  useModal
} from "@fkui/vue";
import { createElementVNode as _createElementVNode, withCtx as _withCtx2, createVNode as _createVNode, openBlock as _openBlock2, createBlock as _createBlock2 } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent2({
  __name: "FCrudDatasetTableCreateExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const rows = ref2(fruits);
    const { formModal } = useModal();
    const columns = defineTableColumns([
      { type: "text", header: "Namn", key: "name", size: "shrink" },
      { type: "text", header: "Land", key: "origin", size: "shrink" },
      { type: "text", header: "Beskrivning", key: "description" }
    ]);
    async function onCreate(commit) {
      try {
        const fruit = await formModal(FruitFormModal_default2, {
          props: {
            heading: "L\xE4gg till frukt",
            confirmText: "L\xE4gg till",
            fruit: { id: String(rows.value.length + 1), name: "", origin: "", description: "" }
          }
        });
        console.log("Post model to backend", fruit);
        commit(fruit, `Frukten ${fruit.name} har lagts till`);
      } catch {
      }
    }
    const __returned__ = { rows, formModal, columns, onCreate, get FCrudDataset() {
      return FCrudDataset;
    }, get FTable() {
      return FTable;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock2(), _createBlock2($setup["FCrudDataset"], {
    modelValue: $setup.rows,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.rows = $event),
    "on-create": $setup.onCreate
  }, {
    default: _withCtx2(() => [
      _createVNode($setup["FTable"], {
        rows: $setup.rows,
        columns: $setup.columns
      }, {
        caption: _withCtx2(() => [..._cache[1] || (_cache[1] = [
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
    _: 1
    /* STABLE */
  }, 8, ["modelValue"]);
}
exampleComponent.render = render2;
setup({
  rootComponent: exampleComponent,
  selector: "#example-da8511"
});
export {
  render2 as render
};
