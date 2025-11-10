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

// virtual-entry:virtual:docs/styles/examples/SemanticVariables.vue:SemanticVariables-65be3b.js
import { defineComponent as _defineComponent } from "vue";

// packages/theme-default/dist/metadata.mjs
var metadata_default = {
  "tokens": [
    {
      "name": "--fkds-color-action-text-disabled",
      "value": "#8d8e91",
      "palette": "fk-black-50",
      "comment": null
    },
    {
      "name": "--fkds-color-action-background-disabled",
      "value": "#f4f4f4",
      "palette": "fk-black-5",
      "comment": null
    },
    {
      "name": "--fkds-color-action-border-disabled",
      "value": "#8d8e91",
      "palette": "fk-black-50",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-action-content-primary-disabled",
      "value": "#8d8e91",
      "palette": "fk-black-50",
      "comment": null
    },
    {
      "name": "--fkds-color-action-background-select-hover",
      "value": "#dbe9e2",
      "palette": "green-a-15",
      "comment": null
    },
    {
      "name": "--fkds-color-action-background-select-default",
      "value": "#35805b",
      "palette": "green-a-85",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-action-content-primary-default",
      "value": "#4a52b6",
      "palette": "bluebell-100",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-action-content-primary-hover",
      "value": "#3b4292",
      "palette": "bluebell-120",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-action-content-primary-active",
      "value": "#3b4292",
      "palette": "bluebell-120",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-action-content-primary-focus",
      "value": "#3b4292",
      "palette": "bluebell-120",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-action-content-secondary-default",
      "value": "#1b1e23",
      "palette": "fk-black-100",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-action-content-secondary-hover",
      "value": "#3b4292",
      "palette": "bluebell-120",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-action-content-secondary-active",
      "value": "#3b4292",
      "palette": "bluebell-120",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-action-content-secondary-focus",
      "value": "#3b4292",
      "palette": "bluebell-120",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-action-content-weak-default",
      "value": "#5f6165",
      "palette": "fk-black-70",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-action-content-inverted-default",
      "value": "#fff",
      "palette": null,
      "comment": null
    },
    {
      "name": "--fkds-icon-color-action-content-inverted-hover",
      "value": "#fff",
      "palette": null,
      "comment": null
    },
    {
      "name": "--fkds-icon-color-action-content-inverted-active",
      "value": "#fff",
      "palette": null,
      "comment": null
    },
    {
      "name": "--fkds-icon-color-action-content-inverted-focus",
      "value": "#fff",
      "palette": null,
      "comment": null
    },
    {
      "name": "--fkds-icon-color-feedback-content-info",
      "value": "#1b1e23",
      "palette": "fk-black-100",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-feedback-content-positive",
      "value": "#1b1e23",
      "palette": "fk-black-100",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-feedback-content-warning",
      "value": "#1b1e23",
      "palette": "fk-black-100",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-feedback-content-negative",
      "value": "#1b1e23",
      "palette": "fk-black-100",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-feedback-background-info",
      "value": "#f5f6fa",
      "palette": "bluebell-5",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-feedback-background-positive",
      "value": "#f3f8f5",
      "palette": "green-a-5",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-feedback-background-warning",
      "value": "#fffcf3",
      "palette": "yellow-5",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-feedback-background-negative",
      "value": "#fcf3f3",
      "palette": "red-5",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-feedback-border-info",
      "value": "#4a52b6",
      "palette": "bluebell-100",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-feedback-border-positive",
      "value": "#35805b",
      "palette": "green-a-85",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-feedback-border-warning",
      "value": "#ffbe10",
      "palette": "yellow-100",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-feedback-border-negative",
      "value": "#ca1515",
      "palette": "red-100",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-content-primary",
      "value": "#1b1e23",
      "palette": "fk-black-100",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-background-primary",
      "value": "#fff",
      "palette": null,
      "comment": null
    },
    {
      "name": "--fkds-icon-color-border-primary",
      "value": "#1b1e23",
      "palette": "fk-black-100",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-content-disabled",
      "value": "#8d8e91",
      "palette": "fk-black-50",
      "comment": null
    },
    {
      "name": "--fkds-icon-color-content-inverted",
      "value": "#fff",
      "palette": null,
      "comment": null
    }
  ]
};

// virtual-entry:virtual:docs/styles/examples/SemanticVariables.vue:SemanticVariables-65be3b.js
import { FDataTable, FSortFilterDataset, FTableColumn } from "@fkui/vue";
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, withCtx as _withCtx, createVNode as _createVNode, normalizeStyle as _normalizeStyle, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "SemanticVariables",
  setup(__props, { expose: __expose }) {
    __expose();
    const rows = metadata_default.tokens;
    const __returned__ = { rows, get FDataTable() {
      return FDataTable;
    }, get FSortFilterDataset() {
      return FSortFilterDataset;
    }, get FTableColumn() {
      return FTableColumn;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FSortFilterDataset"], {
    data: $setup.rows,
    "show-sort": false,
    "sortable-attributes": {
      name: "Semantisk variabel",
      palette: "Palettf\xE4rg",
      value: "F\xE4rgkod"
    }
  }, {
    header: _withCtx(() => [..._cache[0] || (_cache[0] = [
      _createElementVNode(
        "h2",
        { id: "semantiska_farger" },
        "Semantiska f\xE4rger",
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(({ sortFilterResult }) => [
      _createVNode($setup["FDataTable"], {
        rows: sortFilterResult,
        "key-attribute": "name",
        striped: "",
        class: "density-densest",
        "aria-labelledby": "semantiska_farger"
      }, {
        default: _withCtx(({ row }) => [
          _createVNode(
            $setup["FTableColumn"],
            {
              name: "name",
              title: "Semantisk variabel",
              shrink: ""
            },
            {
              default: _withCtx(() => [
                _createElementVNode(
                  "code",
                  null,
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
            $setup["FTableColumn"],
            {
              name: "palette",
              title: "Palettf\xE4rg",
              expand: ""
            },
            {
              default: _withCtx(() => [
                _createElementVNode(
                  "code",
                  null,
                  _toDisplayString(row.palette),
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
            $setup["FTableColumn"],
            {
              name: "value",
              title: "F\xE4rgkod",
              shrink: ""
            },
            {
              default: _withCtx(() => [
                _createElementVNode(
                  "span",
                  {
                    class: "color",
                    style: _normalizeStyle(`--value: ${row.value}`)
                  },
                  null,
                  4
                  /* STYLE */
                ),
                _createElementVNode(
                  "code",
                  null,
                  _toDisplayString(row.value),
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
    _: 1
    /* STABLE */
  }, 8, ["data"]);
}
exampleComponent.render = render;
exampleComponent.__scopeId = "data-v-65be3b";
setup({
  rootComponent: exampleComponent,
  selector: "#example-65be3b"
});
export {
  render
};
