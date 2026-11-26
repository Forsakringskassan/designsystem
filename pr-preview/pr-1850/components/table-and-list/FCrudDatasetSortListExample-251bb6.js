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

// virtual-entry:virtual:packages/vue/src/components/FCrudDataset/examples/FCrudDatasetSortListExample.vue:FCrudDatasetSortListExample-251bb6.js
import { defineComponent as _defineComponent2 } from "vue";
import { ref as ref2 } from "vue";

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

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FCrudDataset/examples/FruitFormModal.vue?type=script
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { FFormModal, FTextField, FTextareaField } from "@fkui/vue";
var FruitFormModal_default = /* @__PURE__ */ _defineComponent({
  __name: "FruitFormModal",
  props: {
    isOpen: { type: Boolean, required: true },
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
    "is-open": $props.isOpen,
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
  }, 8, ["is-open", "value"]);
}

// packages/vue/src/components/FCrudDataset/examples/FruitFormModal.vue
FruitFormModal_default.render = render;
FruitFormModal_default.__file = "packages/vue/src/components/FCrudDataset/examples/FruitFormModal.vue";
var FruitFormModal_default2 = FruitFormModal_default;

// packages/vue/src/components/FCrudDataset/examples/use-fruit-crud.ts
import {
  useModal
} from "@fkui/vue";
function useFruitCrud(fruits2) {
  const { formModal, confirmModal } = useModal();
  function nextId() {
    const max = Math.max(
      0,
      ...fruits2.value.map((it) => Math.trunc(Number(it.id)))
    );
    return String(max + 1);
  }
  return {
    async onCreate(commit) {
      try {
        const fruit = await formModal(FruitFormModal_default2, {
          props: {
            heading: "L\xE4gg till frukt",
            confirmText: "L\xE4gg till",
            fruit: {
              id: nextId(),
              name: "",
              origin: "",
              description: ""
            }
          }
        });
        commit(fruit, `Frukten ${fruit.name} har lagts till`);
      } catch {
      }
    },
    async onUpdate(fruit, commit) {
      try {
        const modified = await formModal(FruitFormModal_default2, {
          props: {
            heading: "\xC4ndra frukt",
            confirmText: "Spara",
            fruit
          }
        });
        commit(modified, `Frukten ${modified.name} har \xE4ndrats`);
      } catch {
      }
    },
    async onDelete(fruit, commit) {
      const confirmed = await confirmModal({
        heading: "Ta bort frukt",
        content: `Vill du verkligen ta bort frukten "${fruit.name}" med ID ${fruit.id}?`,
        confirm: "Ja, ta bort",
        dismiss: "Nej, avbryt"
      });
      if (confirmed) {
        commit(`Frukten ${fruit.name} har tagits bort`);
      }
    }
  };
}

// virtual-entry:virtual:packages/vue/src/components/FCrudDataset/examples/FCrudDatasetSortListExample.vue:FCrudDatasetSortListExample-251bb6.js
import { FButton, FCrudDataset, FList, FSortFilterDataset } from "@fkui/vue";
import { toDisplayString as _toDisplayString2, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode2, withCtx as _withCtx2, createVNode as _createVNode, openBlock as _openBlock2, createBlock as _createBlock2 } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent2({
  __name: "FCrudDatasetSortListExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const fruits2 = ref2(fruits);
    const { onCreate, onUpdate, onDelete } = useFruitCrud(fruits2);
    const __returned__ = { fruits: fruits2, onCreate, onUpdate, onDelete, get FButton() {
      return FButton;
    }, get FCrudDataset() {
      return FCrudDataset;
    }, get FList() {
      return FList;
    }, get FSortFilterDataset() {
      return FSortFilterDataset;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { class: "button-group" };
var _hoisted_2 = { class: "sr-only" };
var _hoisted_3 = { class: "sr-only" };
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock2(), _createBlock2($setup["FCrudDataset"], {
    modelValue: $setup.fruits,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.fruits = $event),
    "on-create": $setup.onCreate,
    "on-update": $setup.onUpdate,
    "on-delete": $setup.onDelete
  }, {
    default: _withCtx2(({ updateItem, deleteItem }) => [
      _createVNode($setup["FSortFilterDataset"], {
        data: $setup.fruits,
        "show-sort": "",
        "show-filter": "",
        "sortable-attributes": {
          name: "Namn",
          origin: "Land"
        }
      }, {
        default: _withCtx2(({ sortFilterResult }) => [
          _createVNode($setup["FList"], {
            items: sortFilterResult,
            "key-attribute": "id"
          }, {
            default: _withCtx2(({ item }) => [
              _createElementVNode(
                "h3",
                null,
                _toDisplayString2(item.name),
                1
                /* TEXT */
              ),
              _createElementVNode("p", null, [
                _cache[1] || (_cache[1] = _createTextVNode2(
                  " Land: ",
                  -1
                  /* CACHED */
                )),
                _createElementVNode(
                  "em",
                  null,
                  _toDisplayString2(item.origin),
                  1
                  /* TEXT */
                ),
                _cache[2] || (_cache[2] = _createElementVNode(
                  "br",
                  null,
                  null,
                  -1
                  /* CACHED */
                )),
                _cache[3] || (_cache[3] = _createTextVNode2(
                  " Beskrivning: ",
                  -1
                  /* CACHED */
                )),
                _createElementVNode(
                  "em",
                  null,
                  _toDisplayString2(item.description),
                  1
                  /* TEXT */
                )
              ]),
              _createElementVNode("div", _hoisted_1, [
                _createVNode($setup["FButton"], {
                  "align-text": "",
                  "icon-left": "pen",
                  size: "medium",
                  variant: "tertiary",
                  class: "button-group__item",
                  onClick: ($event) => updateItem(item)
                }, {
                  default: _withCtx2(() => [
                    _cache[4] || (_cache[4] = _createTextVNode2(
                      " \xC4ndra ",
                      -1
                      /* CACHED */
                    )),
                    _createElementVNode(
                      "span",
                      _hoisted_2,
                      _toDisplayString2(item.name),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["onClick"]),
                _createVNode($setup["FButton"], {
                  "align-text": "",
                  "icon-left": "trashcan",
                  size: "medium",
                  variant: "tertiary",
                  class: "button-group__item",
                  onClick: ($event) => deleteItem(item)
                }, {
                  default: _withCtx2(() => [
                    _cache[5] || (_cache[5] = _createTextVNode2(
                      " Ta bort ",
                      -1
                      /* CACHED */
                    )),
                    _createElementVNode(
                      "span",
                      _hoisted_3,
                      _toDisplayString2(item.name),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["onClick"])
              ])
            ]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["items"])
        ]),
        _: 2
        /* DYNAMIC */
      }, 1032, ["data"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue", "on-create", "on-update", "on-delete"]);
}
exampleComponent.render = render2;
setup({
  rootComponent: exampleComponent,
  selector: "#example-251bb6"
});
export {
  render2 as render
};
