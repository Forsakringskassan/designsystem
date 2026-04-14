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

// virtual-entry:virtual:docs/styles/examples/PaletteList.vue:PaletteList-36945c.js
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
        value: "#9197a1",
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
        value: "#9fc1e9",
        group: "Blue",
        comment: ""
      },
      {
        name: "blue-100",
        value: "#d5e4f6",
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
        value: "#3da973",
        group: "Green",
        comment: ""
      },
      {
        name: "green-300",
        value: "#5eba8c",
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
        value: "#fae8ad",
        group: "Yellow",
        comment: ""
      },
      {
        name: "yellow-100",
        value: "#f9e49f",
        group: "Yellow",
        comment: ""
      },
      {
        name: "yellow-50",
        value: "#fffbf0",
        group: "Yellow",
        comment: ""
      },
      {
        name: "yellow-120",
        value: "#cc980d",
        group: "Yellow",
        comment: ""
      },
      {
        name: "yellow-85",
        value: "#ffc834",
        group: "Yellow",
        comment: ""
      },
      {
        name: "yellow-15",
        value: "#fff5db",
        group: "Yellow",
        comment: ""
      },
      {
        name: "yellow-5",
        value: "#fffcf3",
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
      },
      {
        name: "red-120",
        value: "#a21111",
        group: "Red",
        comment: ""
      },
      {
        name: "red-85",
        value: "#d23838",
        group: "Red",
        comment: ""
      },
      {
        name: "red-15",
        value: "#f7dcdc",
        group: "Red",
        comment: ""
      },
      {
        name: "red-5",
        value: "#fcf3f3",
        group: "Red",
        comment: ""
      }
    ]
  },
  {
    name: "FK-Black",
    variables: [
      {
        name: "fk-black-100",
        value: "#1b1e23",
        group: "FK-Black",
        comment: ""
      },
      {
        name: "fk-black-70",
        value: "#5f6165",
        group: "FK-Black",
        comment: ""
      },
      {
        name: "fk-black-50",
        value: "#8d8e91",
        group: "FK-Black",
        comment: ""
      },
      {
        name: "fk-black-30",
        value: "#bbbbbd",
        group: "FK-Black",
        comment: ""
      },
      {
        name: "fk-black-15",
        value: "#ddddde",
        group: "FK-Black",
        comment: ""
      },
      {
        name: "fk-black-5",
        value: "#f4f4f4",
        group: "FK-Black",
        comment: ""
      },
      {
        name: "white-100",
        value: "#ffffff",
        group: "FK-Black",
        comment: ""
      }
    ]
  },
  {
    name: "Bluebell",
    variables: [
      {
        name: "bluebell-120",
        value: "#3b4292",
        group: "Bluebell",
        comment: ""
      },
      {
        name: "bluebell-100",
        value: "#4a52b6",
        group: "Bluebell",
        comment: ""
      },
      {
        name: "bluebell-85",
        value: "#656cc1",
        group: "Bluebell",
        comment: ""
      },
      {
        name: "bluebell-50",
        value: "#a4a8db",
        group: "Bluebell",
        comment: ""
      },
      {
        name: "bluebell-15",
        value: "#e5e5f5",
        group: "Bluebell",
        comment: ""
      },
      {
        name: "bluebell-5",
        value: "#f5f6fa",
        group: "Bluebell",
        comment: ""
      }
    ]
  },
  {
    name: "Green A",
    variables: [
      {
        name: "green-a-120",
        value: "#0e5532",
        group: "Green A",
        comment: ""
      },
      {
        name: "green-a-100",
        value: "#116a3e",
        group: "Green A",
        comment: ""
      },
      {
        name: "green-a-85",
        value: "#35805b",
        group: "Green A",
        comment: ""
      },
      {
        name: "green-a-50",
        value: "#88b49f",
        group: "Green A",
        comment: ""
      },
      {
        name: "green-a-15",
        value: "#dbe9e2",
        group: "Green A",
        comment: ""
      },
      {
        name: "green-a-5",
        value: "#f3f8f5",
        group: "Green A",
        comment: ""
      }
    ]
  },
  {
    name: "Green B",
    variables: [
      {
        name: "green-b-120",
        value: "#4c7e56",
        group: "Green B",
        comment: ""
      },
      {
        name: "green-b-100",
        value: "#5f9e6c",
        group: "Green B",
        comment: ""
      },
      {
        name: "green-b-85",
        value: "#77ad82",
        group: "Green B",
        comment: ""
      },
      {
        name: "green-b-50",
        value: "#afcfb5",
        group: "Green B",
        comment: ""
      },
      {
        name: "green-b-15",
        value: "#e7f0e9",
        group: "Green B",
        comment: ""
      },
      {
        name: "green-b-5",
        value: "#f7faf8",
        group: "Green B",
        comment: ""
      }
    ]
  },
  {
    name: "Orange",
    variables: [
      {
        name: "orange-120",
        value: "#c2700d",
        group: "Orange",
        comment: ""
      },
      {
        name: "orange-100",
        value: "#f38c10",
        group: "Orange",
        comment: ""
      },
      {
        name: "orange-85",
        value: "#f59d34",
        group: "Orange",
        comment: ""
      },
      {
        name: "orange-50",
        value: "#f9c587",
        group: "Orange",
        comment: ""
      },
      {
        name: "orange-15",
        value: "#ffefdc",
        group: "Orange",
        comment: ""
      },
      {
        name: "orange-5",
        value: "#fef9f3",
        group: "Orange",
        comment: ""
      }
    ]
  },
  {
    name: "Tegel",
    variables: [
      {
        name: "tegel-100",
        value: "#d34503",
        group: "Tegel",
        comment: ""
      },
      {
        name: "tegel-15",
        value: "#f8e3d9",
        group: "Tegel",
        comment: ""
      }
    ]
  },
  {
    name: "Plommon",
    variables: [
      {
        name: "plommon-100",
        value: "#a73a64",
        group: "Plommon",
        comment: ""
      },
      {
        name: "plommon-15",
        value: "#f2e1e8",
        group: "Plommon",
        comment: ""
      }
    ]
  },
  {
    name: "Senap",
    variables: [
      {
        name: "senap-100",
        value: "#ba7918",
        group: "Senap",
        comment: ""
      },
      {
        name: "senap-15",
        value: "#f5ebdc",
        group: "Senap",
        comment: ""
      }
    ]
  },
  {
    name: "Hav",
    variables: [
      {
        name: "hav-100",
        value: "#4c669f",
        group: "Hav",
        comment: ""
      },
      {
        name: "hav-15",
        value: "#e4e8f1",
        group: "Hav",
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

// virtual-entry:virtual:docs/styles/examples/PaletteList.vue:PaletteList-36945c.js
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
  selector: "#example-36945c"
});
export {
  render2 as render
};
