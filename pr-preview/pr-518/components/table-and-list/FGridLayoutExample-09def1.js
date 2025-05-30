// docs/src/setup.ts
import { createApp, h } from "vue";
import {
  ErrorPlugin,
  FErrorHandlingApp,
  FormatPlugin,
  TestPlugin,
  TranslationPlugin,
  ValidationPlugin,
  FocusPlugin,
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
  app.use(FocusPlugin);
  app.mount(selector);
}

// virtual-entry:virtual:packages/vue/src/components/FGrid/examples/FGridLayoutExample.vue:FGridLayoutExample-09def1.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import {
  FGrid,
  FGridCell,
  FGridTextField,
  useDetailsPanel,
  FIcon,
  FPageLayout,
  FDetailsPanel,
  FResizePane
} from "@fkui/vue";
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, withCtx as _withCtx, createVNode as _createVNode, resolveDirective as _resolveDirective, withDirectives as _withDirectives, createTextVNode as _createTextVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var name = "awesome-panel";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FGridLayoutExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const ExamplePanel = FDetailsPanel;
    const rows = ref([
      {
        id: 1,
        foo: "Kalle",
        bar: "2025-05-26",
        baz: [
          { id: 2, foo: "Gul", bar: "2024-12-31" },
          { id: 3, foo: "Gr\xF6nt", bar: "1999-05-06" }
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
    const expandableRows = ref([
      {
        id: 1,
        foo: "Kalle",
        bar: "Anka",
        baz: [
          { id: 2, foo: "Gul", bar: "Banan" },
          { id: 3, foo: "Gr\xF6nt", bar: "\xC4pple" }
        ]
      },
      {
        id: 4,
        foo: "Musse",
        bar: "Pigg",
        baz: [
          { id: 5, foo: "Gr\xF6n", bar: "Melon" },
          { id: 6, foo: "Gul", bar: "Citron" }
        ]
      }
    ]);
    const panel = useDetailsPanel(name);
    function openPanel() {
      panel.open({
        name: "Kalle Anka"
      });
    }
    const __returned__ = { name, ExamplePanel, rows, expandableRows, panel, openPanel, get FGrid() {
      return FGrid;
    }, get FGridCell() {
      return FGridCell;
    }, get FGridTextField() {
      return FGridTextField;
    }, get FIcon() {
      return FIcon;
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
var _hoisted_5 = {
  type: "checkbox",
  "aria-label": "shortcut",
  class: "checkbox__input"
};
var _hoisted_6 = { class: "checkbox__label" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_focus = _resolveDirective("focus");
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
          _cache[1] || (_cache[1] = _createElementVNode(
            "h2",
            null,
            "Tabell",
            -1
            /* HOISTED */
          )),
          _createVNode($setup["FGrid"], { rows: $setup.rows }, {
            default: _withCtx(({ row }) => [
              _createVNode(
                $setup["FGridCell"],
                {
                  focusable: false,
                  class: "checkbox"
                },
                {
                  default: _withCtx(({ active }) => [
                    _withDirectives(_createElementVNode(
                      "input",
                      _hoisted_5,
                      null,
                      512
                      /* NEED_PATCH */
                    ), [
                      [_directive_focus, active]
                    ]),
                    _createElementVNode(
                      "label",
                      _hoisted_6,
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
                $setup["FGridCell"],
                null,
                {
                  default: _withCtx(() => [
                    _createTextVNode(
                      _toDisplayString(row.id),
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
              _createVNode($setup["FGridTextField"], {
                modelValue: row.foo,
                "onUpdate:modelValue": ($event) => row.foo = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              _createVNode($setup["FGridTextField"], {
                modelValue: row.bar,
                "onUpdate:modelValue": ($event) => row.bar = $event,
                type: "date"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              _createVNode($setup["FGridCell"], { focusable: false }, {
                default: _withCtx(({ active }) => [
                  _withDirectives((_openBlock(), _createElementBlock("button", {
                    "aria-label": "shortcut",
                    type: "button",
                    class: "shortcut",
                    onClick: _cache[0] || (_cache[0] = ($event) => $setup.openPanel())
                  }, [
                    _createVNode($setup["FIcon"], {
                      class: "button__icon",
                      name: "pen"
                    })
                  ])), [
                    [_directive_focus, active]
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["rows"]),
          _cache[2] || (_cache[2] = _createElementVNode(
            "h2",
            null,
            "Expanderbar tabell",
            -1
            /* HOISTED */
          )),
          _createVNode($setup["FGrid"], {
            rows: $setup.expandableRows,
            "expandable-attribute": "baz"
          }, {
            default: _withCtx(({ row }) => [
              _createVNode(
                $setup["FGridCell"],
                null,
                {
                  default: _withCtx(() => [
                    _createTextVNode(
                      _toDisplayString(row.id),
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
              _createVNode($setup["FGridTextField"], {
                modelValue: row.foo,
                "onUpdate:modelValue": ($event) => row.foo = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              _createVNode(
                $setup["FGridCell"],
                null,
                {
                  default: _withCtx(() => [
                    _createTextVNode(
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
  selector: "#example-09def1"
});
export {
  render
};
