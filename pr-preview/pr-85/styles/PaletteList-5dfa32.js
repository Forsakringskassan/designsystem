"use strict";
(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });

  // docs/src/setup.ts
  var import_vue = __require("vue");
  var import_vue2 = __require("@fkui/vue");
  function setup(options) {
    const { rootComponent, selector } = options;
    const app = (0, import_vue.createApp)({
      render() {
        return (0, import_vue.h)(import_vue2.FErrorHandlingApp, { defaultComponent: rootComponent });
      }
    });
    (0, import_vue2.setRunningContext)(app);
    app.use(import_vue2.ErrorPlugin, {
      captureWarnings: true,
      logToConsole: true
    });
    app.use(import_vue2.ValidationPlugin);
    app.use(import_vue2.TestPlugin);
    app.use(import_vue2.TranslationPlugin);
    app.mount(selector);
  }

  // virtual-entry:./docs/styles/examples/PaletteList.vue
  var import_vue6 = __require("vue");

  // packages/css-variables/dist/palette.json
  var palette_default = [
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
      name: "Yellow",
      variables: [
        {
          name: "yellow-120",
          value: "#cc980d",
          group: "Yellow",
          comment: ""
        },
        {
          name: "yellow-100",
          value: "#ffbe10",
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
          name: "yellow-50",
          value: "#ffdf87",
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
          name: "red-120",
          value: "#a21111",
          group: "Red",
          comment: ""
        },
        {
          name: "red-100",
          value: "#ca1515",
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
          name: "red-50",
          value: "#e48a8a",
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
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var ColorTable_default = (0, import_vue3.defineComponent)({
    components: { FDataTable: import_vue4.FDataTable, FTableColumn: import_vue4.FTableColumn },
    props: {
      colors: {
        type: Array,
        required: true
      }
    },
    computed: {
      typeWorkaround() {
        return this.colors;
      }
    }
  });

  // sfc-template:/home/runner/work/designsystem/designsystem/docs/styles/examples/ColorTable.vue?type=template
  var import_vue5 = __require("vue");
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_table_column = (0, import_vue5.resolveComponent)("f-table-column");
    const _component_f_data_table = (0, import_vue5.resolveComponent)("f-data-table");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_data_table, {
      rows: _ctx.typeWorkaround,
      "key-attribute": "name"
    }, {
      caption: (0, import_vue5.withCtx)(() => _cache[0] || (_cache[0] = [
        (0, import_vue5.createElementVNode)(
          "span",
          { class: "sr-only" },
          " F\xE4rgpaletten ",
          -1
          /* HOISTED */
        )
      ])),
      default: (0, import_vue5.withCtx)(({ row }) => [
        (0, import_vue5.createVNode)(
          _component_f_table_column,
          {
            name: "name",
            title: "Namn",
            type: "text",
            shrink: ""
          },
          {
            default: (0, import_vue5.withCtx)(() => [
              (0, import_vue5.createTextVNode)(
                (0, import_vue5.toDisplayString)(row.name),
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
        (0, import_vue5.createVNode)(
          _component_f_table_column,
          {
            name: "color",
            title: "Exempel",
            type: "text",
            shrink: ""
          },
          {
            default: (0, import_vue5.withCtx)(() => [
              (0, import_vue5.createCommentVNode)(" [html-validate-disable-next no-inline-style] "),
              (0, import_vue5.createElementVNode)(
                "span",
                {
                  class: "color-table__color",
                  style: (0, import_vue5.normalizeStyle)({ "background-color": row.value })
                },
                null,
                4
                /* STYLE */
              )
            ]),
            _: 2
            /* DYNAMIC */
          },
          1024
          /* DYNAMIC_SLOTS */
        ),
        (0, import_vue5.createVNode)(
          _component_f_table_column,
          {
            name: "value",
            title: "F\xE4rgkod",
            type: "text",
            shrink: ""
          },
          {
            default: (0, import_vue5.withCtx)(() => [
              (0, import_vue5.createElementVNode)(
                "code",
                null,
                (0, import_vue5.toDisplayString)(row.value),
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

  // virtual-entry:./docs/styles/examples/PaletteList.vue
  var import_vue7 = __require("vue");
  var exampleComponent = (0, import_vue6.defineComponent)({
    components: { ColorTable: ColorTable_default2 },
    data() {
      return {
        palette: palette_default
      };
    }
  });
  function render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_color_table = (0, import_vue7.resolveComponent)("color-table");
    return (0, import_vue7.openBlock)(), (0, import_vue7.createElementBlock)("div", null, [
      ((0, import_vue7.openBlock)(true), (0, import_vue7.createElementBlock)(
        import_vue7.Fragment,
        null,
        (0, import_vue7.renderList)(_ctx.palette, (p) => {
          return (0, import_vue7.openBlock)(), (0, import_vue7.createElementBlock)(
            import_vue7.Fragment,
            {
              key: p.name
            },
            [
              (0, import_vue7.createElementVNode)(
                "h3",
                null,
                (0, import_vue7.toDisplayString)(p.name),
                1
                /* TEXT */
              ),
              (0, import_vue7.createVNode)(_component_color_table, {
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
    selector: "#PaletteList"
  });
})();
