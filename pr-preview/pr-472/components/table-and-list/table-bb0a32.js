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

// virtual-entry:virtual:docs/components/table-and-list/table.md:table-bb0a32.js
import { defineComponent as _defineComponent } from "vue";
import { FInteractiveTable, FTableColumn, FIcon } from "@fkui/vue";
import { createTextVNode as _createTextVNode, toDisplayString as _toDisplayString, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
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
    const __returned__ = { rows, get FInteractiveTable() {
      return FInteractiveTable;
    }, get FTableColumn() {
      return FTableColumn;
    }, get FIcon() {
      return FIcon;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = {
  "aria-label": "Redigera",
  class: "button table__button",
  type: "button"
};
var _hoisted_2 = {
  "aria-label": "Redigera",
  class: "button table__button",
  type: "button"
};
var _hoisted_3 = {
  class: "button table__button",
  type: "button"
};
var _hoisted_4 = {
  class: "button table__button",
  type: "button"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FInteractiveTable"], { rows: $setup.rows }, {
    caption: _withCtx(() => _cache[0] || (_cache[0] = [
      _createTextVNode(" Ny fr\xE4n ensad kod ")
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
      _createVNode($setup["FTableColumn"], {
        title: "\xC5tg\xE4rder",
        type: "action",
        shrink: ""
      }, {
        default: _withCtx(() => [
          _cache[4] || (_cache[4] = _createElementVNode(
            "a",
            { class: "anchor table__anchor" },
            "L\xE4nk",
            -1
            /* HOISTED */
          )),
          _createElementVNode("button", _hoisted_1, [
            _createVNode($setup["FIcon"], {
              class: "button__icon",
              name: "pen"
            })
          ]),
          _createElementVNode("button", _hoisted_2, [
            _createVNode($setup["FIcon"], {
              class: "button__icon",
              name: "pen"
            })
          ]),
          _createElementVNode("button", _hoisted_3, [
            _createVNode($setup["FIcon"], {
              class: "button__icon",
              name: "pen"
            }),
            _cache[2] || (_cache[2] = _createTextVNode(" Etikett "))
          ]),
          _createElementVNode("button", _hoisted_4, [
            _createVNode($setup["FIcon"], {
              class: "button__icon",
              name: "pen"
            }),
            _cache[3] || (_cache[3] = _createTextVNode(" Etikett "))
          ])
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
  selector: "#example-bb0a32"
});
export {
  render
};
