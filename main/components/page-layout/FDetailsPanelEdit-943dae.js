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

// virtual-entry:virtual:packages/vue/src/components/FDetailsPanel/examples/FDetailsPanelEdit.vue:FDetailsPanelEdit-943dae.js
import { defineComponent as _defineComponent } from "vue";
import { reactive } from "vue";
import {
  FDetailsPanel,
  FInteractiveTable,
  FPageLayout,
  FResizePane,
  FTableColumn,
  FTextField,
  useDetailsPanel
} from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createElementVNode as _createElementVNode, createVNode as _createVNode, toDisplayString as _toDisplayString, createElementBlock as _createElementBlock } from "vue";
var name = "edit-panel";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FDetailsPanelEdit",
  setup(__props, { expose: __expose }) {
    __expose();
    const panel = useDetailsPanel(name);
    const ExamplePanel = FDetailsPanel;
    const rows = reactive([
      { id: 1, column1: "Text11", column2: "Text12", column3: "Text13", column4: "Text14" },
      { id: 2, column1: "Text21", column2: "Text22", column3: "Text23", column4: "Text24" },
      { id: 3, column1: "Text31", column2: "Text33", column3: "Text33", column4: "Text34" },
      { id: 4, column1: "Text41", column2: "Text44", column3: "Text43", column4: "Text44" },
      { id: 5, column1: "Text51", column2: "Text52", column3: "Text53", column4: "Text54" },
      { id: 6, column1: "Text61", column2: "Text62", column3: "Text63", column4: "Text64" },
      { id: 7, column1: "Text71", column2: "Text72", column3: "Text73", column4: "Text74" },
      { id: 8, column1: "Text81", column2: "Text82", column3: "Text83", column4: "Text84" },
      { id: 9, column1: "Text91", column2: "Text92", column3: "Text93", column4: "Text94" }
    ]);
    function openPanel(row) {
      const copy = { ...row };
      panel.open(copy, {
        onClose({ reason }) {
          if (reason === "save") {
            Object.assign(row, copy);
          }
        }
      });
    }
    const __returned__ = { name, panel, ExamplePanel, rows, openPanel, get FInteractiveTable() {
      return FInteractiveTable;
    }, get FPageLayout() {
      return FPageLayout;
    }, get FResizePane() {
      return FResizePane;
    }, get FTableColumn() {
      return FTableColumn;
    }, get FTextField() {
      return FTextField;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { class: "layout-container" };
var _hoisted_2 = ["slot"];
var _hoisted_3 = { class: "button-group" };
var _hoisted_4 = ["onClick"];
var _hoisted_5 = ["onClick"];
var _hoisted_6 = ["slot"];
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
              default: _withCtx((exampleScope) => [
                _createElementVNode("div", {
                  slot: exampleScope.content
                }, [
                  _withDirectives((_openBlock(), _createBlock($setup["FTextField"], {
                    modelValue: exampleScope.item.column1,
                    "onUpdate:modelValue": ($event) => exampleScope.item.column1 = $event
                  }, {
                    default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                      _createTextVNode(
                        " Etikett-rubrik 1 ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue", "onUpdate:modelValue"])), [
                    [
                      _directive_validation,
                      { maxLength: { length: 10 } },
                      void 0,
                      {
                        required: true,
                        maxLength: true
                      }
                    ]
                  ]),
                  _withDirectives((_openBlock(), _createBlock($setup["FTextField"], {
                    modelValue: exampleScope.item.column2,
                    "onUpdate:modelValue": ($event) => exampleScope.item.column2 = $event
                  }, {
                    default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                      _createTextVNode(
                        " Etikett-rubrik 2 ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue", "onUpdate:modelValue"])), [
                    [
                      _directive_validation,
                      { maxLength: { length: 10 } },
                      void 0,
                      {
                        required: true,
                        maxLength: true
                      }
                    ]
                  ]),
                  _withDirectives((_openBlock(), _createBlock($setup["FTextField"], {
                    modelValue: exampleScope.item.column3,
                    "onUpdate:modelValue": ($event) => exampleScope.item.column3 = $event
                  }, {
                    default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                      _createTextVNode(
                        " Etikett-rubrik 3 ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue", "onUpdate:modelValue"])), [
                    [
                      _directive_validation,
                      { maxLength: { length: 10 } },
                      void 0,
                      {
                        required: true,
                        maxLength: true
                      }
                    ]
                  ]),
                  _withDirectives((_openBlock(), _createBlock($setup["FTextField"], {
                    modelValue: exampleScope.item.column4,
                    "onUpdate:modelValue": ($event) => exampleScope.item.column4 = $event
                  }, {
                    default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                      _createTextVNode(
                        " Etikett-rubrik 4 ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue", "onUpdate:modelValue"])), [
                    [
                      _directive_validation,
                      { maxLength: { length: 10 } },
                      void 0,
                      {
                        required: true,
                        maxLength: true
                      }
                    ]
                  ]),
                  _createElementVNode("div", _hoisted_3, [
                    _createElementVNode("button", {
                      class: "button button-group__item button--primary button--small",
                      type: "button",
                      onClick: ($event) => exampleScope.close("save")
                    }, " Spara ", 8, _hoisted_4),
                    _createElementVNode("button", {
                      class: "button button-group__item button--secondary button--small",
                      type: "button",
                      onClick: ($event) => exampleScope.close()
                    }, " Avbryt ", 8, _hoisted_5)
                  ])
                ], 8, _hoisted_2)
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["slot"]),
        _createElementVNode("div", {
          slot: layoutScope.content
        }, [
          _createVNode($setup["FInteractiveTable"], {
            rows: $setup.rows,
            "key-attribute": "id",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.openPanel($event))
          }, {
            caption: _withCtx(() => [..._cache[5] || (_cache[5] = [
              _createTextVNode(
                "Tabell",
                -1
                /* CACHED */
              )
            ])]),
            default: _withCtx(({ row }) => [
              _createVNode(
                $setup["FTableColumn"],
                {
                  name: "column1",
                  title: "Kolumnrubrik"
                },
                {
                  default: _withCtx(() => [
                    _createTextVNode(
                      _toDisplayString(row.column1),
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
                  name: "column2",
                  title: "Kolumnrubrik"
                },
                {
                  default: _withCtx(() => [
                    _createTextVNode(
                      _toDisplayString(row.column2),
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
                  name: "column3",
                  title: "Kolumnrubrik"
                },
                {
                  default: _withCtx(() => [
                    _createTextVNode(
                      _toDisplayString(row.column3),
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
                  name: "column4",
                  title: "Kolumnrubrik"
                },
                {
                  default: _withCtx(() => [
                    _createTextVNode(
                      _toDisplayString(row.column4),
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
        ], 8, _hoisted_6)
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
exampleComponent.render = render;
exampleComponent.__scopeId = "data-v-943dae";
setup({
  rootComponent: exampleComponent,
  selector: "#example-943dae"
});
export {
  render
};
