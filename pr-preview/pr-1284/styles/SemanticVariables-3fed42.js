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

// virtual-entry:virtual:docs/styles/examples/SemanticVariables.vue:SemanticVariables-3fed42.js
import { defineComponent as _defineComponent } from "vue";

// packages/theme-default/dist/metadata.mjs
var metadata_default = {
  "themes": [
    "light",
    "dark"
  ],
  "tokens": [
    {
      "name": "--fkds-color-action-background-primary-active",
      "comment": null,
      "values": {
        "light": {
          "value": "#14336c",
          "palette": "blue-800"
        },
        "dark": {
          "value": "#97bbe7",
          "palette": "blue-200"
        }
      }
    },
    {
      "name": "--fkds-color-action-background-primary-default",
      "comment": null,
      "values": {
        "light": {
          "value": "#2358af",
          "palette": "blue-600"
        },
        "dark": {
          "value": "#76a6e0",
          "palette": "blue-300"
        }
      }
    },
    {
      "name": "--fkds-color-action-background-primary-focus",
      "comment": null,
      "values": {
        "light": {
          "value": "#2358af",
          "palette": "blue-600"
        },
        "dark": {
          "value": "#76a6e0",
          "palette": "blue-300"
        }
      }
    },
    {
      "name": "--fkds-color-action-background-primary-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b478d",
          "palette": "blue-700"
        },
        "dark": {
          "value": "#97bbe7",
          "palette": "blue-200"
        }
      }
    },
    {
      "name": "--fkds-color-action-background-secondary-active",
      "comment": null,
      "values": {
        "light": {
          "value": "#97bbe7",
          "palette": "blue-200"
        },
        "dark": {
          "value": "#2d3139",
          "palette": "neutral-800"
        }
      }
    },
    {
      "name": "--fkds-color-action-background-secondary-default",
      "comment": null,
      "values": {
        "light": {
          "value": "#fff",
          "palette": null
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "fk-black-100"
        }
      }
    },
    {
      "name": "--fkds-color-action-background-secondary-focus",
      "comment": null,
      "values": {
        "light": {
          "value": "#fff",
          "palette": null
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "fk-black-100"
        }
      }
    },
    {
      "name": "--fkds-color-action-background-secondary-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#dee9f7",
          "palette": "blue-100"
        },
        "dark": {
          "value": "#2d3139",
          "palette": "neutral-800"
        }
      }
    },
    {
      "name": "--fkds-color-action-border-primary-active",
      "comment": null,
      "values": {
        "light": {
          "value": "#14336c",
          "palette": "blue-800"
        },
        "dark": {
          "value": "#97bbe7",
          "palette": "blue-200"
        }
      }
    },
    {
      "name": "--fkds-color-action-border-primary-default",
      "comment": null,
      "values": {
        "light": {
          "value": "#2358af",
          "palette": "blue-600"
        },
        "dark": {
          "value": "#76a6e0",
          "palette": "blue-300"
        }
      }
    },
    {
      "name": "--fkds-color-action-border-primary-focus",
      "comment": null,
      "values": {
        "light": {
          "value": "#2358af",
          "palette": "blue-600"
        },
        "dark": {
          "value": "#76a6e0",
          "palette": "blue-300"
        }
      }
    },
    {
      "name": "--fkds-color-action-border-primary-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b478d",
          "palette": "blue-700"
        },
        "dark": {
          "value": "#97bbe7",
          "palette": "blue-200"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-inverted-active",
      "comment": null,
      "values": {
        "light": {
          "value": "#fff",
          "palette": null
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "fk-black-100"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-inverted-default",
      "comment": null,
      "values": {
        "light": {
          "value": "#fff",
          "palette": null
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "fk-black-100"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-inverted-focus",
      "comment": null,
      "values": {
        "light": {
          "value": "#fff",
          "palette": null
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "fk-black-100"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-inverted-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#fff",
          "palette": null
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "fk-black-100"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-primary-active",
      "comment": null,
      "values": {
        "light": {
          "value": "#14336c",
          "palette": "blue-800"
        },
        "dark": {
          "value": "#97bbe7",
          "palette": "blue-200"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-primary-default",
      "comment": null,
      "values": {
        "light": {
          "value": "#2358af",
          "palette": "blue-600"
        },
        "dark": {
          "value": "#76a6e0",
          "palette": "blue-300"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-primary-focus",
      "comment": null,
      "values": {
        "light": {
          "value": "#2358af",
          "palette": "blue-600"
        },
        "dark": {
          "value": "#76a6e0",
          "palette": "blue-300"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-primary-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b478d",
          "palette": "blue-700"
        },
        "dark": {
          "value": "#97bbe7",
          "palette": "blue-200"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-secondary-active",
      "comment": null,
      "values": {
        "light": {
          "value": "#14336c",
          "palette": "blue-800"
        },
        "dark": {
          "value": "#d6d8dc",
          "palette": "neutral-200"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-secondary-default",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b1e23",
          "palette": "fk-black-100"
        },
        "dark": {
          "value": "#ecedef",
          "palette": "neutral-100"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-secondary-focus",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b1e23",
          "palette": "fk-black-100"
        },
        "dark": {
          "value": "#ecedef",
          "palette": "neutral-100"
        }
      }
    },
    {
      "name": "--fkds-color-action-text-secondary-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b478d",
          "palette": "blue-700"
        },
        "dark": {
          "value": "#d6d8dc",
          "palette": "neutral-200"
        }
      }
    },
    {
      "name": "--fkds-color-background-disabled",
      "comment": null,
      "values": {
        "light": {
          "value": "#ecedef",
          "palette": "neutral-100"
        },
        "dark": {
          "value": "#2d3139",
          "palette": "neutral-800"
        }
      }
    },
    {
      "name": "--fkds-color-background-primary",
      "comment": null,
      "values": {
        "light": {
          "value": "#fff",
          "palette": null
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "fk-black-100"
        }
      }
    },
    {
      "name": "--fkds-color-background-secondary",
      "comment": null,
      "values": {
        "light": {
          "value": "#f7f7f8",
          "palette": "neutral-50"
        },
        "dark": {
          "value": "#2d3139",
          "palette": "neutral-800"
        }
      }
    },
    {
      "name": "--fkds-color-background-tertiary",
      "comment": null,
      "values": {
        "light": {
          "value": "#ecedef",
          "palette": "neutral-100"
        },
        "dark": {
          "value": "#494f5b",
          "palette": "neutral-700"
        }
      }
    },
    {
      "name": "--fkds-color-border-disabled",
      "comment": null,
      "values": {
        "light": {
          "value": "#8e949f",
          "palette": "neutral-400"
        },
        "dark": {
          "value": "#777f8d",
          "palette": "neutral-500"
        }
      }
    },
    {
      "name": "--fkds-color-border-inverted",
      "comment": null,
      "values": {
        "light": {
          "value": "#fff",
          "palette": null
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "fk-black-100"
        }
      }
    },
    {
      "name": "--fkds-color-border-primary",
      "comment": null,
      "values": {
        "light": {
          "value": "#777f8d",
          "palette": "neutral-500"
        },
        "dark": {
          "value": "#8e949f",
          "palette": "neutral-400"
        }
      }
    },
    {
      "name": "--fkds-color-border-strong",
      "comment": null,
      "values": {
        "light": {
          "value": "#494f5b",
          "palette": "neutral-700"
        },
        "dark": {
          "value": "#d6d8dc",
          "palette": "neutral-200"
        }
      }
    },
    {
      "name": "--fkds-color-border-weak",
      "comment": null,
      "values": {
        "light": {
          "value": "#d6d8dc",
          "palette": "neutral-200"
        },
        "dark": {
          "value": "#606876",
          "palette": "neutral-600"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-background-info",
      "comment": null,
      "values": {
        "light": {
          "value": "#f3f7fc",
          "palette": "blue-50"
        },
        "dark": {
          "value": "#061023",
          "palette": "blue-900"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-background-info-strong",
      "comment": null,
      "values": {
        "light": {
          "value": "#3472d5",
          "palette": "blue-500"
        },
        "dark": {
          "value": "#578edb",
          "palette": "blue-400"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-background-negative",
      "comment": null,
      "values": {
        "light": {
          "value": "#fdf3f3",
          "palette": "red-50"
        },
        "dark": {
          "value": "#220506",
          "palette": "red-900"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-background-negative-strong",
      "comment": null,
      "values": {
        "light": {
          "value": "#df3035",
          "palette": "red-500"
        },
        "dark": {
          "value": "#e85b60",
          "palette": "red-400"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-background-neutral",
      "comment": null,
      "values": {
        "light": {
          "value": "#fff",
          "palette": null
        },
        "dark": {
          "value": "#2d3139",
          "palette": "neutral-800"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-background-neutral-strong",
      "comment": null,
      "values": {
        "light": {
          "value": "#d6d8dc",
          "palette": "neutral-200"
        },
        "dark": {
          "value": "#606876",
          "palette": "neutral-600"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-background-positive",
      "comment": null,
      "values": {
        "light": {
          "value": "#f5faf7",
          "palette": "green-50"
        },
        "dark": {
          "value": "#041f12",
          "palette": "green-900"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-background-positive-strong",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b7e4d",
          "palette": "green-600"
        },
        "dark": {
          "value": "#3eac75",
          "palette": "green-400"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-background-warning",
      "comment": null,
      "values": {
        "light": {
          "value": "#fffbf0",
          "palette": "yellow-50"
        },
        "dark": {
          "value": "#231c00",
          "palette": "yellow-900"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-background-warning-strong",
      "comment": null,
      "values": {
        "light": {
          "value": "#f1b604",
          "palette": "yellow-500"
        },
        "dark": {
          "value": "#f2cc4d",
          "palette": "yellow-400"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-border-info",
      "comment": null,
      "values": {
        "light": {
          "value": "#3472d5",
          "palette": "blue-500"
        },
        "dark": {
          "value": "#578edb",
          "palette": "blue-400"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-border-negative",
      "comment": null,
      "values": {
        "light": {
          "value": "#df3035",
          "palette": "red-500"
        },
        "dark": {
          "value": "#e85b60",
          "palette": "red-400"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-border-neutral",
      "comment": null,
      "values": {
        "light": {
          "value": "#777f8d",
          "palette": "neutral-500"
        },
        "dark": {
          "value": "#8e949f",
          "palette": "neutral-400"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-border-positive",
      "comment": null,
      "values": {
        "light": {
          "value": "#248f59",
          "palette": "green-500"
        },
        "dark": {
          "value": "#3eac75",
          "palette": "green-400"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-border-warning",
      "comment": null,
      "values": {
        "light": {
          "value": "#f1b604",
          "palette": "yellow-500"
        },
        "dark": {
          "value": "#f2cc4d",
          "palette": "yellow-400"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-text-negative",
      "comment": null,
      "values": {
        "light": {
          "value": "#df3035",
          "palette": "red-500"
        },
        "dark": {
          "value": "#e85b60",
          "palette": "red-400"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-text-on-warning",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b1e23",
          "palette": "fk-black-100"
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "fk-black-100"
        }
      }
    },
    {
      "name": "--fkds-color-feedback-text-positive",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b7e4d",
          "palette": "green-600"
        },
        "dark": {
          "value": "#3eac75",
          "palette": "green-400"
        }
      }
    },
    {
      "name": "--fkds-color-header-background-primary",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b7e4d",
          "palette": "green-600"
        },
        "dark": {
          "value": "#3eac75",
          "palette": "green-400"
        }
      }
    },
    {
      "name": "--fkds-color-header-text-primary",
      "comment": null,
      "values": {
        "light": {
          "value": "#fff",
          "palette": null
        },
        "dark": {
          "value": "#fff",
          "palette": null
        }
      }
    },
    {
      "name": "--fkds-color-interactive-surface-background-primary-active",
      "comment": null,
      "values": {
        "light": {
          "value": "#ecedef",
          "palette": "neutral-100"
        },
        "dark": {
          "value": "#494f5b",
          "palette": "neutral-700"
        }
      }
    },
    {
      "name": "--fkds-color-interactive-surface-background-primary-default",
      "comment": null,
      "values": {
        "light": {
          "value": "#f7f7f8",
          "palette": "neutral-50"
        },
        "dark": {
          "value": "#2d3139",
          "palette": "neutral-800"
        }
      }
    },
    {
      "name": "--fkds-color-interactive-surface-background-primary-focus",
      "comment": null,
      "values": {
        "light": {
          "value": "#ecedef",
          "palette": "neutral-100"
        },
        "dark": {
          "value": "#494f5b",
          "palette": "neutral-700"
        }
      }
    },
    {
      "name": "--fkds-color-interactive-surface-background-primary-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#ecedef",
          "palette": "neutral-100"
        },
        "dark": {
          "value": "#494f5b",
          "palette": "neutral-700"
        }
      }
    },
    {
      "name": "--fkds-color-navigation-background-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#96cfb2",
          "palette": "green-200"
        },
        "dark": {
          "value": "#96cfb2",
          "palette": "green-200"
        }
      }
    },
    {
      "name": "--fkds-color-navigation-background-selected",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b7e4d",
          "palette": "green-600"
        },
        "dark": {
          "value": "#248f59",
          "palette": "green-500"
        }
      }
    },
    {
      "name": "--fkds-color-navigation-border-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#96cfb2",
          "palette": "green-200"
        },
        "dark": {
          "value": "#96cfb2",
          "palette": "green-200"
        }
      }
    },
    {
      "name": "--fkds-color-navigation-border-selected",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b7e4d",
          "palette": "green-600"
        },
        "dark": {
          "value": "#248f59",
          "palette": "green-500"
        }
      }
    },
    {
      "name": "--fkds-color-select-background-primary-active",
      "comment": null,
      "values": {
        "light": {
          "value": "#97bbe7",
          "palette": "blue-200"
        },
        "dark": {
          "value": "#2d3139",
          "palette": "neutral-800"
        }
      }
    },
    {
      "name": "--fkds-color-select-background-primary-default",
      "comment": null,
      "values": {
        "light": {
          "value": "#2358af",
          "palette": "blue-600"
        },
        "dark": {
          "value": "#76a6e0",
          "palette": "blue-300"
        }
      }
    },
    {
      "name": "--fkds-color-select-background-primary-focus",
      "comment": null,
      "values": {
        "light": {
          "value": "#dee9f7",
          "palette": "blue-100"
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "fk-black-100"
        }
      }
    },
    {
      "name": "--fkds-color-select-background-primary-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#dee9f7",
          "palette": "blue-100"
        },
        "dark": {
          "value": "#494f5b",
          "palette": "neutral-700"
        }
      }
    },
    {
      "name": "--fkds-color-select-background-secondary-active",
      "comment": null,
      "values": {
        "light": {
          "value": "#96cfb2",
          "palette": "green-200"
        },
        "dark": {
          "value": "#2d3139",
          "palette": "neutral-800"
        }
      }
    },
    {
      "name": "--fkds-color-select-background-secondary-default",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b7e4d",
          "palette": "green-600"
        },
        "dark": {
          "value": "#5eba8c",
          "palette": "green-300"
        }
      }
    },
    {
      "name": "--fkds-color-select-background-secondary-focus",
      "comment": null,
      "values": {
        "light": {
          "value": "#d9ede3",
          "palette": "green-100"
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "fk-black-100"
        }
      }
    },
    {
      "name": "--fkds-color-select-background-secondary-hover",
      "comment": null,
      "values": {
        "light": {
          "value": "#d9ede3",
          "palette": "green-100"
        },
        "dark": {
          "value": "#494f5b",
          "palette": "neutral-700"
        }
      }
    },
    {
      "name": "--fkds-color-text-disabled",
      "comment": null,
      "values": {
        "light": {
          "value": "#606876",
          "palette": "neutral-600"
        },
        "dark": {
          "value": "#afb3bb",
          "palette": "neutral-300"
        }
      }
    },
    {
      "name": "--fkds-color-text-inverted",
      "comment": null,
      "values": {
        "light": {
          "value": "#fff",
          "palette": null
        },
        "dark": {
          "value": "#1b1e23",
          "palette": "fk-black-100"
        }
      }
    },
    {
      "name": "--fkds-color-text-primary",
      "comment": null,
      "values": {
        "light": {
          "value": "#1b1e23",
          "palette": "fk-black-100"
        },
        "dark": {
          "value": "#ecedef",
          "palette": "neutral-100"
        }
      }
    },
    {
      "name": "--fkds-color-text-secondary",
      "comment": null,
      "values": {
        "light": {
          "value": "#606876",
          "palette": "neutral-600"
        },
        "dark": {
          "value": "#afb3bb",
          "palette": "neutral-300"
        }
      }
    }
  ]
};

// virtual-entry:virtual:docs/styles/examples/SemanticVariables.vue:SemanticVariables-3fed42.js
import { FDataTable, FSortFilterDataset, FTableColumn } from "@fkui/vue";
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, normalizeStyle as _normalizeStyle, createBlock as _createBlock, createTextVNode as _createTextVNode } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "SemanticVariables",
  setup(__props, { expose: __expose }) {
    __expose();
    const rows = metadata_default.tokens;
    const themes = metadata_default.themes;
    const __returned__ = { rows, themes, get FDataTable() {
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
var _hoisted_1 = { class: "color-table__term" };
var _hoisted_2 = { class: "color-table__term" };
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
    default: _withCtx(({ sortFilterResult }) => [
      _createVNode($setup["FDataTable"], {
        rows: sortFilterResult,
        "key-attribute": "name",
        striped: "",
        class: "density-densest",
        "aria-labelledby": "semantiska_farger"
      }, {
        default: _withCtx(({ row: token }) => [
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
                  _hoisted_1,
                  _toDisplayString(token.name),
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
          (_openBlock(true), _createElementBlock(
            _Fragment,
            null,
            _renderList($setup.themes, (name) => {
              return _openBlock(), _createBlock($setup["FTableColumn"], {
                key: name,
                name,
                title: name,
                shrink: ""
              }, {
                default: _withCtx(() => [
                  _createElementVNode(
                    "span",
                    {
                      class: "color-table__color",
                      style: _normalizeStyle(`--value: ${token.values?.[name].value}`)
                    },
                    null,
                    4
                    /* STYLE */
                  ),
                  _createElementVNode(
                    "code",
                    _hoisted_2,
                    _toDisplayString(token.values?.[name].palette ?? token.values?.[name].value),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["name", "title"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          _createVNode($setup["FTableColumn"], {
            name: "description",
            title: "Beskrivning",
            expand: ""
          }, {
            default: _withCtx(() => [..._cache[0] || (_cache[0] = [
              _createTextVNode(
                " - ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })
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
exampleComponent.__scopeId = "data-v-3fed42";
setup({
  rootComponent: exampleComponent,
  selector: "#example-3fed42"
});
export {
  render
};
