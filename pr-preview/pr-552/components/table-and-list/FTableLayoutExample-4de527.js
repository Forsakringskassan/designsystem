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

// virtual-entry:virtual:packages/vue/src/components/FTable/examples/FTableLayoutExample.vue:FTableLayoutExample-4de527.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import {
  FTable,
  FTableCell,
  FTableEditCell,
  useDetailsPanel,
  FIcon,
  FTextField,
  FPageLayout,
  FDetailsPanel,
  FResizePane
} from "@fkui/vue";
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, withCtx as _withCtx, createVNode as _createVNode, resolveDirective as _resolveDirective, withDirectives as _withDirectives, createTextVNode as _createTextVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var name = "awesome-panel";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableLayoutExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const ExamplePanel = FDetailsPanel;
    const rows = ref([
      {
        id: 1,
        foo: "Kalle",
        bar: "2025-05-26"
      },
      {
        id: 4,
        foo: "Musse",
        bar: "2025-01-02"
      }
    ]);
    const expandableRows = ref([
      {
        id: 1,
        foo: "Kalle",
        bar: "2025-05-26",
        baz: [
          { id: 2, foo: "Bl\xE5", bar: "2024-12-31" },
          {
            id: 3,
            foo: "Orange",
            bar: "1999-05-06",
            baz: [{ id: 7, foo: "R\xF6d", bar: "2025-06-26" }]
          }
        ]
      },
      {
        id: 4,
        foo: "Musse",
        bar: "2025-01-02",
        baz: [
          { id: 5, foo: "Gr\xF6n", bar: "1980-08-08" },
          { id: 6, foo: "Gul", bar: "1912-12-12" }
        ]
      }
    ]);
    const panel = useDetailsPanel(name);
    function openPanel() {
      panel.open({
        name: "Kalle Anka"
      });
    }
    const __returned__ = { name, ExamplePanel, rows, expandableRows, panel, openPanel, get FTable() {
      return FTable;
    }, get FTableCell() {
      return FTableCell;
    }, get FTableEditCell() {
      return FTableEditCell;
    }, get FIcon() {
      return FIcon;
    }, get FTextField() {
      return FTextField;
    }, get FPageLayout() {
      return FPageLayout;
    }, get FResizePane() {
      return FResizePane;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { class: "layout-container" };
var _hoisted_2 = ["slot"];
var _hoisted_3 = ["slot"];
var _hoisted_4 = ["slot"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode($setup["FPageLayout"], { layout: "three-column" }, {
      default: _withCtx((layoutScope) => [
        _createVNode($setup["FResizePane"], {
          slot: layoutScope.right,
          min: "200px",
          max: "50%"
        }, {
          default: _withCtx(() => [
            _createVNode($setup["ExamplePanel"], { name: $setup.name }, {
              default: _withCtx((panelScope) => [
                _createElementVNode("h2", {
                  slot: panelScope.header
                }, "Detaljpanel", 8, _hoisted_2),
                _createElementVNode("p", {
                  slot: panelScope.content
                }, _toDisplayString(panelScope.item.name), 9, _hoisted_3)
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["slot"]),
        _createElementVNode("div", {
          slot: layoutScope.content
        }, [
          _cache[0] || (_cache[0] = _createElementVNode(
            "h2",
            null,
            "Tabell",
            -1
            /* CACHED */
          )),
          _createVNode($setup["FTable"], {
            rows: $setup.rows,
            "key-attribute": "id"
          }, {
            default: _withCtx(({ row }) => [
              _createVNode(
                $setup["FTableEditCell"],
                { title: "input" },
                {
                  default: _withCtx(() => [
                    _withDirectives(_createVNode($setup["FTextField"], {
                      modelValue: row.foo,
                      "onUpdate:modelValue": ($event) => row.foo = $event,
                      maxlength: "40"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                      [
                        _directive_validation,
                        void 0,
                        void 0,
                        { required: true }
                      ]
                    ])
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              ),
              _createVNode($setup["FTableCell"], { title: "action" }, {
                default: _withCtx(() => [
                  _createElementVNode("button", {
                    "aria-label": "open panel",
                    type: "button",
                    class: "shortcut",
                    tabindex: "-1",
                    onClick: $setup.openPanel
                  }, [
                    _createVNode($setup["FIcon"], {
                      class: "button__icon",
                      name: "pen"
                    })
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["rows"]),
          _cache[1] || (_cache[1] = _createElementVNode(
            "h2",
            null,
            "Expanderbar tabell",
            -1
            /* CACHED */
          )),
          _createVNode($setup["FTable"], {
            rows: $setup.expandableRows,
            "key-attribute": "id",
            "expandable-attribute": "baz"
          }, {
            default: _withCtx(({ row }) => [
              _createVNode(
                $setup["FTableCell"],
                { title: "static" },
                {
                  default: _withCtx(() => [
                    _createTextVNode(
                      _toDisplayString(row.foo),
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
                $setup["FTableCell"],
                { title: "action" },
                {
                  default: _withCtx(() => [
                    _createElementVNode(
                      "button",
                      {
                        type: "button",
                        tabindex: "-1",
                        onClick: $setup.openPanel
                      },
                      _toDisplayString(row.bar),
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
                $setup["FTableEditCell"],
                { title: "input" },
                {
                  default: _withCtx(() => [
                    _withDirectives(_createVNode($setup["FTextField"], {
                      modelValue: row.foo,
                      "onUpdate:modelValue": ($event) => row.foo = $event,
                      maxlength: "40"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                      [
                        _directive_validation,
                        void 0,
                        void 0,
                        { required: true }
                      ]
                    ])
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
        ], 8, _hoisted_4)
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-4de527"
});
export {
  render
};
