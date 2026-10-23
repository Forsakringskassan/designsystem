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

// virtual-entry:virtual:docs/styles/examples/PaletteList.vue:PaletteList-c0725f.js
import { defineComponent } from "vue";

// packages/theme-default/dist/palette.json
var palette_default = [
  {
    name: "Neutral",
    variables: [
      {
        name: "neutral-900",
        value: "#1b1e23",
        group: "Neutral",
        comment: ""
      },
      {
        name: "neutral-800",
        value: "#292d34",
        group: "Neutral",
        comment: ""
      },
      {
        name: "neutral-700",
        value: "#494f5b",
        group: "Neutral",
        comment: ""
      },
      {
        name: "neutral-600",
        value: "#606876",
        group: "Neutral",
        comment: ""
      },
      {
        name: "neutral-500",
        value: "#777f8d",
        group: "Neutral",
        comment: ""
      },
      {
        name: "neutral-400",
        value: "#8e949f",
        group: "Neutral",
        comment: ""
      },
      {
        name: "neutral-300",
        value: "#afb3bb",
        group: "Neutral",
        comment: ""
      },
      {
        name: "neutral-200",
        value: "#d6d8dc",
        group: "Neutral",
        comment: ""
      },
      {
        name: "neutral-100",
        value: "#ecedef",
        group: "Neutral",
        comment: ""
      },
      {
        name: "neutral-50",
        value: "#f7f7f8",
        group: "Neutral",
        comment: ""
      },
      {
        name: "neutral-0",
        value: "#ffffff",
        group: "Neutral",
        comment: ""
      }
    ]
  },
  {
    name: "Blue",
    variables: [
      {
        name: "blue-900",
        value: "#0e1623",
        group: "Blue",
        comment: ""
      },
      {
        name: "blue-800",
        value: "#162f5d",
        group: "Blue",
        comment: ""
      },
      {
        name: "blue-700",
        value: "#1b478d",
        group: "Blue",
        comment: ""
      },
      {
        name: "blue-600",
        value: "#2358af",
        group: "Blue",
        comment: ""
      },
      {
        name: "blue-500",
        value: "#3472d5",
        group: "Blue",
        comment: ""
      },
      {
        name: "blue-400",
        value: "#578edb",
        group: "Blue",
        comment: ""
      },
      {
        name: "blue-300",
        value: "#76a6e0",
        group: "Blue",
        comment: ""
      },
      {
        name: "blue-200",
        value: "#97bbe7",
        group: "Blue",
        comment: ""
      },
      {
        name: "blue-100",
        value: "#dee9f7",
        group: "Blue",
        comment: ""
      },
      {
        name: "blue-50",
        value: "#f3f7fc",
        group: "Blue",
        comment: ""
      }
    ]
  },
  {
    name: "Green",
    variables: [
      {
        name: "green-900",
        value: "#0f1f19",
        group: "Green",
        comment: ""
      },
      {
        name: "green-800",
        value: "#14432a",
        group: "Green",
        comment: ""
      },
      {
        name: "green-700",
        value: "#116a3e",
        group: "Green",
        comment: ""
      },
      {
        name: "green-600",
        value: "#1b7e4d",
        group: "Green",
        comment: ""
      },
      {
        name: "green-500",
        value: "#248f59",
        group: "Green",
        comment: ""
      },
      {
        name: "green-400",
        value: "#41aa75",
        group: "Green",
        comment: ""
      },
      {
        name: "green-300",
        value: "#70bd96",
        group: "Green",
        comment: ""
      },
      {
        name: "green-200",
        value: "#96cfb2",
        group: "Green",
        comment: ""
      },
      {
        name: "green-100",
        value: "#d9ede3",
        group: "Green",
        comment: ""
      },
      {
        name: "green-50",
        value: "#f5faf7",
        group: "Green",
        comment: ""
      }
    ]
  },
  {
    name: "Yellow",
    variables: [
      {
        name: "yellow-900",
        value: "#201d10",
        group: "Yellow",
        comment: ""
      },
      {
        name: "yellow-800",
        value: "#625019",
        group: "Yellow",
        comment: ""
      },
      {
        name: "yellow-700",
        value: "#b18502",
        group: "Yellow",
        comment: ""
      },
      {
        name: "yellow-600",
        value: "#d6a103",
        group: "Yellow",
        comment: ""
      },
      {
        name: "yellow-500",
        value: "#f1b604",
        group: "Yellow",
        comment: ""
      },
      {
        name: "yellow-400",
        value: "#f2cc4d",
        group: "Yellow",
        comment: ""
      },
      {
        name: "yellow-300",
        value: "#f6db80",
        group: "Yellow",
        comment: ""
      },
      {
        name: "yellow-200",
        value: "#f9e49f",
        group: "Yellow",
        comment: ""
      },
      {
        name: "yellow-100",
        value: "#fef4cd",
        group: "Yellow",
        comment: ""
      },
      {
        name: "yellow-50",
        value: "#fffbf0",
        group: "Yellow",
        comment: ""
      }
    ]
  },
  {
    name: "Red",
    variables: [
      {
        name: "red-900",
        value: "#211011",
        group: "Red",
        comment: ""
      },
      {
        name: "red-800",
        value: "#5e1b1b",
        group: "Red",
        comment: ""
      },
      {
        name: "red-700",
        value: "#9f2024",
        group: "Red",
        comment: ""
      },
      {
        name: "red-600",
        value: "#bf272b",
        group: "Red",
        comment: ""
      },
      {
        name: "red-500",
        value: "#df3035",
        group: "Red",
        comment: ""
      },
      {
        name: "red-400",
        value: "#e85b60",
        group: "Red",
        comment: ""
      },
      {
        name: "red-300",
        value: "#ef8a8e",
        group: "Red",
        comment: ""
      },
      {
        name: "red-200",
        value: "#f4afb2",
        group: "Red",
        comment: ""
      },
      {
        name: "red-100",
        value: "#f9dcdc",
        group: "Red",
        comment: ""
      },
      {
        name: "red-50",
        value: "#fdf3f3",
        group: "Red",
        comment: ""
      }
    ]
  }
];

// sfc-script:/home/runner/work/designsystem/designsystem/docs/styles/examples/ColorTable.vue?type=script
import { defineComponent as _defineComponent } from "vue";
import { h as h2 } from "vue";
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";
var ColorTable_default = /* @__PURE__ */ _defineComponent({
  __name: "ColorTable",
  props: {
    colors: { type: Array, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const columns = defineTableColumns([
      { type: "text", header: "Namn", key: "name", size: "shrink" },
      {
        header: "F\xE4rg",
        size: "grow",
        render(row) {
          return h2("td", { class: "table-ng__cell table-ng__cell--static" }, [
            h2("div", [
              h2("span", {
                class: "color-table__color",
                style: { "--value": row.value }
              }),
              h2("code", { class: "color-table__term" }, row.value)
            ])
          ]);
        }
      }
    ]);
    const rows = useDatasetRef(props.colors);
    const __returned__ = { props, columns, rows, get FTable() {
      return FTable;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/docs/styles/examples/ColorTable.vue?type=template
import { createElementVNode as _createElementVNode, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FTable"], {
    rows: $setup.rows,
    columns: $setup.columns,
    class: "density-densest"
  }, {
    caption: _withCtx(() => [..._cache[0] || (_cache[0] = [
      _createElementVNode(
        "span",
        { class: "sr-only" },
        " F\xE4rgpaletten ",
        -1
        /* CACHED */
      )
    ])]),
    _: 1
    /* STABLE */
  }, 8, ["rows", "columns"]);
}

// docs/styles/examples/ColorTable.vue
ColorTable_default.render = render;
ColorTable_default.__file = "docs/styles/examples/ColorTable.vue";
var ColorTable_default2 = ColorTable_default;

// virtual-entry:virtual:docs/styles/examples/PaletteList.vue:PaletteList-c0725f.js
import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock2, createElementBlock as _createElementBlock, toDisplayString as _toDisplayString, createElementVNode as _createElementVNode2, resolveComponent as _resolveComponent, createVNode as _createVNode } from "vue";
var exampleComponent = defineComponent({
  components: { ColorTable: ColorTable_default2 },
  data() {
    return {
      palette: palette_default
    };
  }
});
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_color_table = _resolveComponent("color-table");
  return _openBlock2(), _createElementBlock("div", null, [
    (_openBlock2(true), _createElementBlock(
      _Fragment,
      null,
      _renderList(_ctx.palette, (p) => {
        return _openBlock2(), _createElementBlock(
          _Fragment,
          {
            key: p.name
          },
          [
            _createElementVNode2(
              "h3",
              null,
              _toDisplayString(p.name),
              1
              /* TEXT */
            ),
            _createVNode(_component_color_table, {
              colors: p.variables
            }, null, 8, ["colors"])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      }),
      128
      /* KEYED_FRAGMENT */
    ))
  ]);
}
exampleComponent.render = render2;
setup({
  rootComponent: exampleComponent,
  selector: "#example-c0725f"
});
export {
  render2 as render
};
