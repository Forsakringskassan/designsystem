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

// virtual-entry:virtual:docs/components/table-and-list/table.md:table-add203.js
import { defineComponent as _defineComponent } from "vue";
import { defineComponent, provide } from "vue";
import { FInteractiveTable, FTableColumn, FIcon, FCrudButton } from "@fkui/vue";
import { createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, toDisplayString as _toDisplayString, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "table",
  setup(__props, { expose: __expose }) {
    __expose();
    const rows = [
      { name: "Banan", type: "Frukt" },
      { name: "\xC4pple", type: "Frukt" },
      { name: "Vitk\xE5l", type: "Gr\xF6nsak" },
      { name: "Spenat", type: "Gr\xF6nsak" }
    ];
    const FulHack = defineComponent({
      setup() {
        provide("modify", () => {
        });
        provide("delete", () => {
        });
      },
      template: "<slot></slot>"
    });
    const __returned__ = { rows, FulHack, get FInteractiveTable() {
      return FInteractiveTable;
    }, get FTableColumn() {
      return FTableColumn;
    }, get FIcon() {
      return FIcon;
    }, get FCrudButton() {
      return FCrudButton;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = {
  "aria-label": "Redigera",
  class: "button button--tertiary button--small",
  type: "button"
};
var _hoisted_2 = {
  "aria-label": "Redigera",
  class: "button button--discrete button--small",
  type: "button"
};
var _hoisted_3 = {
  "aria-label": "Redigera",
  class: "button button--tertiary button--small",
  type: "button"
};
var _hoisted_4 = {
  "aria-label": "Redigera",
  class: "button button--discrete button--small",
  type: "button"
};
var _hoisted_5 = {
  class: "button button--tertiary button--small",
  type: "button"
};
var _hoisted_6 = {
  class: "button button--discrete button--small",
  type: "button"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FulHack"], null, {
    default: _withCtx(() => [
      _cache[12] || (_cache[12] = _createElementVNode(
        "p",
        null,
        " Inventering av \xE5tg\xE4rdsknappar som existerar i dokumentation, exempel och kod: ",
        -1
        /* HOISTED */
      )),
      _cache[13] || (_cache[13] = _createElementVNode(
        "ul",
        null,
        [
          _createElementVNode("li", null, "L\xE4nk (`a.anchor`)"),
          _createElementVNode("li", null, "FCrudButton"),
          _createElementVNode("li", null, "Terti\xE4r knapp (`button.button--tertiary`)"),
          _createElementVNode("li", null, "Diskret knapp (`button.button--discrete`)")
        ],
        -1
        /* HOISTED */
      )),
      _createVNode($setup["FInteractiveTable"], { rows: $setup.rows }, {
        caption: _withCtx(() => _cache[0] || (_cache[0] = [
          _createTextVNode(" Enligt dokumentation ")
        ])),
        default: _withCtx(({ row }) => [
          _createVNode(
            $setup["FTableColumn"],
            {
              title: "A",
              type: "text",
              expand: ""
            },
            {
              default: _withCtx(() => [
                _createTextVNode(
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
          _createVNode($setup["FTableColumn"], {
            title: "B",
            type: "text",
            expand: ""
          }, {
            default: _withCtx(() => _cache[1] || (_cache[1] = [
              _createTextVNode(" Lorem ipsum dolor sit amet ")
            ])),
            _: 1
            /* STABLE */
          }),
          _createVNode(
            $setup["FTableColumn"],
            {
              title: "\xC5tg\xE4rder",
              type: "action",
              shrink: ""
            },
            {
              default: _withCtx(() => [
                _cache[2] || (_cache[2] = _createElementVNode(
                  "a",
                  { class: "anchor" },
                  "L\xE4nk",
                  -1
                  /* HOISTED */
                )),
                _createVNode($setup["FCrudButton"], {
                  action: "modify",
                  item: row,
                  icon: ""
                }, null, 8, ["item"]),
                _createElementVNode("button", _hoisted_1, [
                  _createVNode($setup["FIcon"], { name: "pen" })
                ]),
                _createElementVNode("button", _hoisted_2, [
                  _createVNode($setup["FIcon"], { name: "pen" })
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
      }),
      _createVNode($setup["FInteractiveTable"], { rows: $setup.rows }, {
        caption: _withCtx(() => _cache[3] || (_cache[3] = [
          _createTextVNode(" Korrigerat med korrekt kod ")
        ])),
        default: _withCtx(({ row }) => [
          _createVNode(
            $setup["FTableColumn"],
            {
              title: "A",
              type: "text",
              expand: ""
            },
            {
              default: _withCtx(() => [
                _createTextVNode(
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
          _createVNode($setup["FTableColumn"], {
            title: "B",
            type: "text",
            expand: ""
          }, {
            default: _withCtx(() => _cache[4] || (_cache[4] = [
              _createTextVNode(" Lorem ipsum dolor sit amet ")
            ])),
            _: 1
            /* STABLE */
          }),
          _createVNode(
            $setup["FTableColumn"],
            {
              title: "\xC5tg\xE4rder",
              type: "action",
              shrink: ""
            },
            {
              default: _withCtx(() => [
                _cache[5] || (_cache[5] = _createElementVNode(
                  "a",
                  { class: "anchor" },
                  "L\xE4nk",
                  -1
                  /* HOISTED */
                )),
                _createVNode($setup["FCrudButton"], {
                  action: "modify",
                  item: row,
                  icon: ""
                }, null, 8, ["item"]),
                _createElementVNode("button", _hoisted_3, [
                  _createVNode($setup["FIcon"], {
                    class: "button__icon",
                    name: "pen"
                  })
                ]),
                _createElementVNode("button", _hoisted_4, [
                  _createVNode($setup["FIcon"], {
                    class: "button__icon",
                    name: "pen"
                  })
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
      }),
      _createVNode($setup["FInteractiveTable"], { rows: $setup.rows }, {
        caption: _withCtx(() => _cache[6] || (_cache[6] = [
          _createTextVNode(" Med synlig etikett ")
        ])),
        default: _withCtx(({ row }) => [
          _createVNode(
            $setup["FTableColumn"],
            {
              title: "A",
              type: "text",
              expand: ""
            },
            {
              default: _withCtx(() => [
                _createTextVNode(
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
          _createVNode($setup["FTableColumn"], {
            title: "B",
            type: "text",
            expand: ""
          }, {
            default: _withCtx(() => _cache[7] || (_cache[7] = [
              _createTextVNode(" Lorem ipsum dolor sit amet ")
            ])),
            _: 1
            /* STABLE */
          }),
          _createVNode(
            $setup["FTableColumn"],
            {
              title: "\xC5tg\xE4rder",
              type: "action",
              shrink: ""
            },
            {
              default: _withCtx(() => [
                _cache[11] || (_cache[11] = _createElementVNode(
                  "a",
                  { class: "anchor" },
                  "L\xE4nk",
                  -1
                  /* HOISTED */
                )),
                _createVNode($setup["FCrudButton"], {
                  action: "modify",
                  item: row,
                  icon: "",
                  label: ""
                }, {
                  default: _withCtx(() => _cache[8] || (_cache[8] = [
                    _createTextVNode(" Etikett ")
                  ])),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["item"]),
                _createElementVNode("button", _hoisted_5, [
                  _createVNode($setup["FIcon"], { name: "pen" }),
                  _cache[9] || (_cache[9] = _createTextVNode(" Etikett "))
                ]),
                _createElementVNode("button", _hoisted_6, [
                  _createVNode($setup["FIcon"], { name: "pen" }),
                  _cache[10] || (_cache[10] = _createTextVNode(" Etikett "))
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
      })
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-add203"
});
export {
  render
};
