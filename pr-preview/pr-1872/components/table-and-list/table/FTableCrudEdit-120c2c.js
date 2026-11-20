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

// virtual-entry:virtual:packages/vue/src/components/FTable/docs/FTableCrudEdit.vue:FTableCrudEdit-120c2c.js
import { defineComponent as _defineComponent2 } from "vue";
import { ref as ref2, useTemplateRef } from "vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FTable/docs/FTableCrudEditModal.vue?type=script
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { FCurrencyTextField, FFormModal, FSelectField } from "@fkui/vue";
var FTableCrudEditModal_default = /* @__PURE__ */ _defineComponent({
  __name: "FTableCrudEditModal",
  props: {
    isOpen: { type: Boolean, required: true },
    row: { type: Object, required: true }
  },
  emits: ["close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const lander = [
      "",
      "Colombia",
      "Costa Rica",
      "Dominikanska republiken",
      "Ecuador",
      "Frankrike",
      "Italien",
      "Spanien",
      "Sverige",
      "Sydafrika"
    ];
    const value = ref({ ...props.row });
    const __returned__ = { props, emit, lander, value, get FCurrencyTextField() {
      return FCurrencyTextField;
    }, get FFormModal() {
      return FFormModal;
    }, get FSelectField() {
      return FSelectField;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FTable/docs/FTableCrudEditModal.vue?type=template
import { toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, withCtx as _withCtx, createVNode as _createVNode, createBlock as _createBlock } from "vue";
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FFormModal"], {
    "is-open": $props.isOpen,
    value: $setup.value,
    "use-error-list": false,
    onClose: _cache[2] || (_cache[2] = (event) => $setup.emit("close", event))
  }, {
    header: _withCtx(() => [
      _createTextVNode(
        " \xC4ndra " + _toDisplayString($props.row.namn),
        1
        /* TEXT */
      )
    ]),
    "input-text-fields": _withCtx(() => [
      _createVNode($setup["FSelectField"], {
        modelValue: $setup.value.land,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value.land = $event)
      }, {
        label: _withCtx(() => [..._cache[3] || (_cache[3] = [
          _createTextVNode(
            "Land",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[4] || (_cache[4] = _createElementVNode(
            "option",
            {
              disabled: "",
              hidden: "",
              value: ""
            },
            "V\xE4lj..",
            -1
            /* CACHED */
          )),
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList($setup.lander, (land) => {
              return _createElementVNode(
                "option",
                { key: land },
                _toDisplayString(land),
                1
                /* TEXT */
              );
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode($setup["FCurrencyTextField"], {
        modelValue: $setup.value.pris,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.value.pris = $event)
      }, {
        default: _withCtx(() => [..._cache[5] || (_cache[5] = [
          _createTextVNode(
            " Pris ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["is-open", "value"]);
}

// packages/vue/src/components/FTable/docs/FTableCrudEditModal.vue
FTableCrudEditModal_default.render = render;
FTableCrudEditModal_default.__file = "packages/vue/src/components/FTable/docs/FTableCrudEditModal.vue";
var FTableCrudEditModal_default2 = FTableCrudEditModal_default;

// virtual-entry:virtual:packages/vue/src/components/FTable/docs/FTableCrudEdit.vue:FTableCrudEdit-120c2c.js
import {
  FCrudDataset,
  FTable,
  defineTableColumns,
  useModal
} from "@fkui/vue";
import { createElementVNode as _createElementVNode2, withCtx as _withCtx2, createVNode as _createVNode2, openBlock as _openBlock2, createBlock as _createBlock2 } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent2({
  __name: "FTableCrudEdit",
  setup(__props, { expose: __expose }) {
    __expose();
    const crud = useTemplateRef("crud");
    const { formModal, confirmModal } = useModal();
    const columns = defineTableColumns([
      {
        type: "text",
        header: "Frukt",
        key: "namn"
      },
      {
        type: "text",
        header: "Land",
        key: "land"
      },
      {
        type: "text:currency",
        header: "Pris per kilo",
        key: "pris"
      },
      {
        type: "menu",
        header: "\xC5tg\xE4rder",
        screenreaderText(row) {
          return `Visa \xE5tg\xE4rder f\xF6r ${row.namn}`;
        },
        actions: [
          {
            label: "\xC4ndra",
            icon: "pen",
            onClick(row) {
              crud.value?.updateItem(row);
            }
          },
          {
            label: "Ta bort",
            icon: "trashcan",
            onClick(row) {
              crud.value?.deleteItem(row);
            }
          }
        ]
      }
    ]);
    const rows = ref2([
      {
        namn: "Apelsin",
        land: "Spanien",
        pris: 30
      },
      {
        namn: "Banan",
        land: "Ecuador",
        pris: 15
      },
      {
        namn: "\xC4pple",
        land: "Sverige",
        pris: 22
      }
    ]);
    async function onEdit(row, commit) {
      try {
        commit(await formModal(FTableCrudEditModal_default2, { props: { row } }));
      } catch {
      }
    }
    async function onRemove(row, commit) {
      const confirmed = await confirmModal({
        heading: "Ta bort frukt",
        content: `Vill du verkligen ta bort "${row.namn}"?`,
        confirm: "Ja, ta bort",
        dismiss: "Nej, avbryt"
      });
      if (confirmed) {
        commit();
      }
    }
    const __returned__ = { crud, formModal, confirmModal, columns, rows, onEdit, onRemove, get FCrudDataset() {
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
    ref: "crud",
    modelValue: $setup.rows,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.rows = $event),
    "on-edit": $setup.onEdit,
    "on-remove": $setup.onRemove
  }, {
    default: _withCtx2(() => [
      _createVNode2($setup["FTable"], {
        ref: "table",
        rows: $setup.rows,
        columns: $setup.columns,
        striped: ""
      }, {
        caption: _withCtx2(() => [..._cache[1] || (_cache[1] = [
          _createElementVNode2(
            "span",
            { class: "sr-only" },
            "Redigera inneh\xE5ll-exempel",
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
  selector: "#example-120c2c"
});
export {
  render2 as render
};
