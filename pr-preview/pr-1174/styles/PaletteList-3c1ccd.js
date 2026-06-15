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

// virtual-entry:virtual:docs/styles/examples/PaletteList.vue:PaletteList-3c1ccd.js
import { defineComponent as defineComponent2 } from "vue";

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
        value: "#2d3139",
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
        value: "#061023",
        group: "Blue",
        comment: ""
      },
      {
        name: "blue-800",
        value: "#14336c",
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
        value: "#041f12",
        group: "Green",
        comment: ""
      },
      {
        name: "green-800",
        value: "#0b4c2b",
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
        value: "#231c00",
        group: "Yellow",
        comment: ""
      },
      {
        name: "yellow-800",
        value: "#795b01",
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
        value: "#220506",
        group: "Red",
        comment: ""
      },
      {
        name: "red-800",
        value: "#6e1517",
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
import { defineComponent } from "vue";
import { FDataTable, FTableColumn } from "@fkui/vue";
var ColorTable_default = defineComponent({
  components: { FDataTable, FTableColumn },
  props: {
    colors: {
      type: Array,
      required: true
    }
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/docs/styles/examples/ColorTable.vue?type=template
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, createCommentVNode as _createCommentVNode, normalizeStyle as _normalizeStyle, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var _hoisted_1 = { class: "color-table__term" };
var _hoisted_2 = { class: "color-table__term" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_table_column = _resolveComponent("f-table-column");
  const _component_f_data_table = _resolveComponent("f-data-table");
  return _openBlock(), _createBlock(_component_f_data_table, {
    rows: _ctx.colors,
    "key-attribute": "name",
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
            _createElementVNode(
              "code",
              _hoisted_1,
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
          title: "F\xE4rg",
          type: "text",
          expand: ""
        },
        {
          default: _withCtx(() => [
            _createCommentVNode(" [html-validate-disable-next no-inline-style] "),
            _createElementVNode(
              "span",
              {
                class: "color-table__color",
                style: _normalizeStyle(`--value: ${row.value}`)
              },
              null,
              4
              /* STYLE */
            ),
            _createElementVNode(
              "code",
              _hoisted_2,
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
  }, 8, ["rows"]);
}

// docs/styles/examples/ColorTable.vue
ColorTable_default.render = render;
ColorTable_default.__file = "docs/styles/examples/ColorTable.vue";
var ColorTable_default2 = ColorTable_default;

// virtual-entry:virtual:docs/styles/examples/PaletteList.vue:PaletteList-3c1ccd.js
import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock2, createElementBlock as _createElementBlock, toDisplayString as _toDisplayString2, createElementVNode as _createElementVNode2, resolveComponent as _resolveComponent2, createVNode as _createVNode2 } from "vue";
var exampleComponent = defineComponent2({
  components: { ColorTable: ColorTable_default2 },
  data() {
    return {
      palette: palette_default
    };
  }
});
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_color_table = _resolveComponent2("color-table");
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
              _toDisplayString2(p.name),
              1
              /* TEXT */
            ),
            _createVNode2(_component_color_table, {
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
  selector: "#example-3c1ccd"
});
export {
  render2 as render
};
