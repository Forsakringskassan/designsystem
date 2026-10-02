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

// virtual-entry:virtual:packages/vue/src/vite-dev/Demo.vue:Demo-d8ce23.js
import { defineComponent as _defineComponent4 } from "vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/vite-dev/DatasetTableDual.vue?type=script
import { useModel as _useModel, mergeModels as _mergeModels, defineComponent as _defineComponent } from "vue";
import {
  FPaginateDataset,
  FPaginator,
  FSortFilterDataset,
  FTable
} from "@fkui/vue";
var DatasetTableDual_default = /* @__PURE__ */ _defineComponent({
  __name: "DatasetTableDual",
  props: /* @__PURE__ */ _mergeModels({
    columns: { type: Array, required: true }
  }, {
    "modelValue": { type: [Array, Object], ...{ required: true } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const products = _useModel(__props, "modelValue");
    const sortableAttributes = { name: "Namn", category: "Kategori" };
    const __returned__ = { products, sortableAttributes, get FPaginateDataset() {
      return FPaginateDataset;
    }, get FPaginator() {
      return FPaginator;
    }, get FSortFilterDataset() {
      return FSortFilterDataset;
    }, get FTable() {
      return FTable;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/vite-dev/DatasetTableDual.vue?type=template
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createVNode($setup["FSortFilterDataset"], {
        data: $setup.products,
        "sortable-attributes": $setup.sortableAttributes,
        "default-sort-attribute": "name"
      }, {
        default: _withCtx(({ sortFilterResult }) => [
          _createVNode($setup["FPaginateDataset"], {
            items: sortFilterResult,
            "items-per-page": 2
          }, {
            default: _withCtx(({ items }) => [
              _createVNode($setup["FTable"], {
                rows: items,
                columns: $props.columns,
                "expandable-attribute": "expandableRows"
              }, {
                caption: _withCtx(() => [..._cache[0] || (_cache[0] = [
                  _createTextVNode(
                    "Produkter, tabell 1",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["rows", "columns"]),
              _createVNode($setup["FPaginator"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["items"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["data"]),
      _createVNode($setup["FSortFilterDataset"], {
        data: $setup.products,
        "sortable-attributes": $setup.sortableAttributes,
        "default-sort-attribute": "category"
      }, {
        default: _withCtx(({ sortFilterResult }) => [
          _createVNode($setup["FPaginateDataset"], {
            items: sortFilterResult,
            "items-per-page": 2
          }, {
            default: _withCtx(({ items }) => [
              _createVNode($setup["FTable"], {
                rows: items,
                columns: $props.columns,
                "expandable-attribute": "expandableRows"
              }, {
                caption: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    "Produkter, tabell 2",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["rows", "columns"]),
              _createVNode($setup["FPaginator"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["items"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["data"])
    ],
    64
    /* STABLE_FRAGMENT */
  );
}

// packages/vue/src/vite-dev/DatasetTableDual.vue
DatasetTableDual_default.render = render;
DatasetTableDual_default.__file = "packages/vue/src/vite-dev/DatasetTableDual.vue";
var DatasetTableDual_default2 = DatasetTableDual_default;

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/vite-dev/DatasetTableSingle.vue?type=script
import { useModel as _useModel2, mergeModels as _mergeModels2, defineComponent as _defineComponent2 } from "vue";
import {
  FPaginateDataset as FPaginateDataset2,
  FPaginator as FPaginator2,
  FSortFilterDataset as FSortFilterDataset2,
  FTable as FTable2
} from "@fkui/vue";
var DatasetTableSingle_default = /* @__PURE__ */ _defineComponent2({
  __name: "DatasetTableSingle",
  props: /* @__PURE__ */ _mergeModels2({
    columns: { type: Array, required: true }
  }, {
    "modelValue": { type: [Array, Object], ...{ required: true } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const products = _useModel2(__props, "modelValue");
    const sortableAttributes = { name: "Namn", category: "Kategori" };
    const __returned__ = { products, sortableAttributes, get FPaginateDataset() {
      return FPaginateDataset2;
    }, get FPaginator() {
      return FPaginator2;
    }, get FSortFilterDataset() {
      return FSortFilterDataset2;
    }, get FTable() {
      return FTable2;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/vite-dev/DatasetTableSingle.vue?type=template
import { createTextVNode as _createTextVNode2, withCtx as _withCtx2, createVNode as _createVNode2, openBlock as _openBlock2, createBlock as _createBlock } from "vue";
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock2(), _createBlock($setup["FSortFilterDataset"], {
    data: $setup.products,
    "sortable-attributes": $setup.sortableAttributes,
    "default-sort-attribute": "name"
  }, {
    default: _withCtx2(({ sortFilterResult }) => [
      _createVNode2($setup["FPaginateDataset"], {
        items: sortFilterResult,
        "items-per-page": 2
      }, {
        default: _withCtx2(({ items }) => [
          _createVNode2($setup["FTable"], {
            rows: items,
            columns: $props.columns,
            "expandable-attribute": "expandableRows"
          }, {
            caption: _withCtx2(() => [..._cache[0] || (_cache[0] = [
              _createTextVNode2(
                "Alla produkter",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["rows", "columns"]),
          _createVNode2($setup["FPaginator"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["items"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["data"]);
}

// packages/vue/src/vite-dev/DatasetTableSingle.vue
DatasetTableSingle_default.render = render2;
DatasetTableSingle_default.__file = "packages/vue/src/vite-dev/DatasetTableSingle.vue";
var DatasetTableSingle_default2 = DatasetTableSingle_default;

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/vite-dev/DatasetTableSubsets.vue?type=script
import { useModel as _useModel3, mergeModels as _mergeModels3, defineComponent as _defineComponent3 } from "vue";
import {
  FPaginateDataset as FPaginateDataset3,
  FPaginator as FPaginator3,
  FSortFilterDataset as FSortFilterDataset3,
  FTable as FTable3,
  useDatasetRef
} from "@fkui/vue";
var DatasetTableSubsets_default = /* @__PURE__ */ _defineComponent3({
  __name: "DatasetTableSubsets",
  props: /* @__PURE__ */ _mergeModels3({
    columns: { type: Array, required: true }
  }, {
    "modelValue": { type: [Array, Object], ...{ required: true } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const products = _useModel3(__props, "modelValue");
    const ekologiska = useDatasetRef(
      products.value.filter((row) => row.tags.includes("ekologisk")),
      "expandableRows"
    );
    const lokala = useDatasetRef(
      products.value.filter((row) => row.tags.includes("lokal")),
      "expandableRows"
    );
    const sortableAttributes = { name: "Namn", category: "Kategori" };
    const __returned__ = { products, ekologiska, lokala, sortableAttributes, get FPaginateDataset() {
      return FPaginateDataset3;
    }, get FPaginator() {
      return FPaginator3;
    }, get FSortFilterDataset() {
      return FSortFilterDataset3;
    }, get FTable() {
      return FTable3;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/vite-dev/DatasetTableSubsets.vue?type=template
import { createTextVNode as _createTextVNode3, withCtx as _withCtx3, createVNode as _createVNode3, Fragment as _Fragment2, openBlock as _openBlock3, createElementBlock as _createElementBlock2 } from "vue";
function render3(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock3(), _createElementBlock2(
    _Fragment2,
    null,
    [
      _createVNode3($setup["FSortFilterDataset"], {
        data: $setup.ekologiska,
        "sortable-attributes": $setup.sortableAttributes,
        "default-sort-attribute": "name"
      }, {
        default: _withCtx3(({ sortFilterResult }) => [
          _createVNode3($setup["FPaginateDataset"], {
            items: sortFilterResult,
            "items-per-page": 2
          }, {
            default: _withCtx3(({ items }) => [
              _createVNode3($setup["FTable"], {
                rows: items,
                columns: $props.columns,
                "expandable-attribute": "expandableRows"
              }, {
                caption: _withCtx3(() => [..._cache[0] || (_cache[0] = [
                  _createTextVNode3(
                    "Ekologiska produkter",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["rows", "columns"]),
              _createVNode3($setup["FPaginator"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["items"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["data"]),
      _createVNode3($setup["FSortFilterDataset"], {
        data: $setup.lokala,
        "sortable-attributes": $setup.sortableAttributes,
        "default-sort-attribute": "name"
      }, {
        default: _withCtx3(({ sortFilterResult }) => [
          _createVNode3($setup["FPaginateDataset"], {
            items: sortFilterResult,
            "items-per-page": 2
          }, {
            default: _withCtx3(({ items }) => [
              _createVNode3($setup["FTable"], {
                rows: items,
                columns: $props.columns,
                "expandable-attribute": "expandableRows"
              }, {
                caption: _withCtx3(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode3(
                    "Lokala produkter",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["rows", "columns"]),
              _createVNode3($setup["FPaginator"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["items"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["data"])
    ],
    64
    /* STABLE_FRAGMENT */
  );
}

// packages/vue/src/vite-dev/DatasetTableSubsets.vue
DatasetTableSubsets_default.render = render3;
DatasetTableSubsets_default.__file = "packages/vue/src/vite-dev/DatasetTableSubsets.vue";
var DatasetTableSubsets_default2 = DatasetTableSubsets_default;

// virtual-entry:virtual:packages/vue/src/vite-dev/Demo.vue:Demo-d8ce23.js
import { defineTableColumns as defineTableColumns4, useDatasetRef as useDatasetRef2, FTable as FTable4 } from "@fkui/vue";

// packages/vue/src/vite-dev/format-dataset-cell.ts
import { getDatasetMetadata } from "@fkui/vue";
function formatDatasetCell(row) {
  const meta = getDatasetMetadata(row);
  return `ariaRowIndex=${meta.rowIndex}, ariaPosInSet=${meta.ariaPosInSet}, ariaSetSize=${meta.ariaSetSize},  ariaLevel=${meta.ariaLevel}`;
}

// virtual-entry:virtual:packages/vue/src/vite-dev/Demo.vue:Demo-d8ce23.js
import { createElementVNode as _createElementVNode, createTextVNode as _createTextVNode4, withCtx as _withCtx4, createVNode as _createVNode4, Fragment as _Fragment3, openBlock as _openBlock4, createElementBlock as _createElementBlock3 } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent4({
  __name: "Demo",
  setup(__props, { expose: __expose }) {
    __expose();
    const products = useDatasetRef2(
      [
        {
          name: "\xC4pple",
          category: "Frukt",
          tags: ["ekologisk"],
          comment: "",
          expandableRows: [
            { name: "A", category: "Frukt", tags: ["ekologisk"], comment: "" },
            { name: "B", category: "Frukt", tags: ["lokal"], comment: "" },
            { name: "C", category: "Gr\xF6nsak", tags: ["ekologisk"], comment: "" }
          ]
        },
        {
          name: "Banan",
          category: "Frukt",
          tags: ["importerad"],
          comment: "",
          expandableRows: [
            { name: "A", category: "Frukt", tags: ["ekologisk"], comment: "" },
            { name: "B", category: "Frukt", tags: ["lokal"], comment: "" },
            { name: "C", category: "Gr\xF6nsak", tags: ["ekologisk"], comment: "" }
          ]
        },
        {
          name: "Morot",
          category: "Gr\xF6nsak",
          tags: ["ekologisk", "lokal"],
          comment: "",
          expandableRows: [
            { name: "A", category: "Frukt", tags: ["ekologisk"], comment: "" },
            { name: "B", category: "Frukt", tags: ["lokal"], comment: "" },
            { name: "C", category: "Gr\xF6nsak", tags: ["ekologisk"], comment: "" }
          ]
        },
        {
          name: "Potatis",
          category: "Gr\xF6nsak",
          tags: ["lokal"],
          comment: "",
          expandableRows: [
            { name: "A", category: "Frukt", tags: ["ekologisk"], comment: "" },
            { name: "B", category: "Frukt", tags: ["lokal"], comment: "" },
            { name: "C", category: "Gr\xF6nsak", tags: ["ekologisk"], comment: "" }
          ]
        },
        {
          name: "Apelsin",
          category: "Frukt",
          tags: ["ekologisk", "importerad"],
          comment: "",
          expandableRows: [
            { name: "A", category: "Frukt", tags: ["ekologisk"], comment: "" },
            { name: "B", category: "Frukt", tags: ["lokal"], comment: "" },
            { name: "C", category: "Gr\xF6nsak", tags: ["ekologisk"], comment: "" }
          ]
        }
      ],
      "expandableRows"
    );
    const columns = defineTableColumns4([
      {
        type: "text",
        header: "Namn",
        key: "name"
      },
      {
        type: "text",
        header: "Kategori",
        key: "category"
      },
      {
        type: "text",
        header: "Typ",
        value: (row) => {
          return row.tags.join(" ");
        }
      },
      {
        type: "text",
        header: "Kommentar",
        key: "comment",
        editable: true
      },
      {
        type: "text",
        header: "Metadata",
        value: (row) => formatDatasetCell(row)
      }
    ]);
    const __returned__ = { products, columns, DatasetTableDual: DatasetTableDual_default2, DatasetTableSingle: DatasetTableSingle_default2, DatasetTableSubsets: DatasetTableSubsets_default2, get FTable() {
      return FTable4;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render4(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock4(), _createElementBlock3(
    _Fragment3,
    null,
    [
      _cache[4] || (_cache[4] = _createElementVNode(
        "h2",
        null,
        "A. Originaldata",
        -1
        /* CACHED */
      )),
      _createVNode4($setup["FTable"], {
        rows: $setup.products,
        columns: $setup.columns,
        "expandable-attribute": "expandableRows"
      }, {
        caption: _withCtx4(() => [..._cache[3] || (_cache[3] = [
          _createTextVNode4(
            "Alla produkter",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["rows", "columns"]),
      _cache[5] || (_cache[5] = _createElementVNode(
        "h2",
        null,
        "B. Originaldata, filtrer/sorterbar",
        -1
        /* CACHED */
      )),
      _createVNode4($setup["DatasetTableSingle"], {
        modelValue: $setup.products,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.products = $event),
        columns: $setup.columns
      }, null, 8, ["modelValue", "columns"]),
      _cache[6] || (_cache[6] = _createElementVNode(
        "h2",
        null,
        "C. Tv\xE5 tabeller, samma k\xE4lla",
        -1
        /* CACHED */
      )),
      _createVNode4($setup["DatasetTableDual"], {
        modelValue: $setup.products,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.products = $event),
        columns: $setup.columns
      }, null, 8, ["modelValue", "columns"]),
      _cache[7] || (_cache[7] = _createElementVNode(
        "h2",
        null,
        "D. Tv\xE5 tabeller, \xF6verlappande delm\xE4ngder",
        -1
        /* CACHED */
      )),
      _createVNode4($setup["DatasetTableSubsets"], {
        modelValue: $setup.products,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.products = $event),
        columns: $setup.columns
      }, null, 8, ["modelValue", "columns"])
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render4;
setup({
  rootComponent: exampleComponent,
  selector: "#example-d8ce23"
});
export {
  render4 as render
};
