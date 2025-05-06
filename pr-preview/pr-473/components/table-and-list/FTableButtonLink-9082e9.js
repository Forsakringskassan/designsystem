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

// virtual-entry:virtual:packages/vue/src/components/FInteractiveTable/draft/FTableButtonLink.vue:FTableButtonLink-9082e9.js
import { FInteractiveTable, FTableColumn } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveDirective as _resolveDirective, createVNode as _createVNode, withDirectives as _withDirectives, createElementVNode as _createElementVNode, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = {
  __name: "FTableButtonLink",
  setup(__props, { expose: __expose }) {
    __expose();
    const rows = [
      { name: "Kalle Anka", value: 42 },
      { name: "Kajsa Anka", value: 511 },
      { name: "Joakim von Anka", value: 4711 }
    ];
    const __returned__ = { rows, get FInteractiveTable() {
      return FInteractiveTable;
    }, get FTableColumn() {
      return FTableColumn;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_format = _resolveDirective("format");
  return _openBlock(), _createBlock($setup["FInteractiveTable"], {
    rows: $setup.rows,
    "show-active": false
  }, {
    caption: _withCtx(() => _cache[0] || (_cache[0] = [
      _createTextVNode(" Knapp och l\xE4nk ")
    ])),
    default: _withCtx(({ row }) => [
      _withDirectives(_createVNode(
        $setup["FTableColumn"],
        {
          title: "Namn",
          type: "text"
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [_directive_format, row.name, "text"]
      ]),
      _withDirectives(_createVNode(
        $setup["FTableColumn"],
        {
          title: "V\xE4rde",
          type: "numeric",
          shrink: ""
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [_directive_format, row.value, "number"]
      ]),
      _createVNode($setup["FTableColumn"], {
        title: "Knapp",
        type: "action",
        shrink: ""
      }, {
        default: _withCtx(() => _cache[1] || (_cache[1] = [
          _createElementVNode(
            "button",
            {
              type: "button",
              class: "button button--primary"
            },
            "Knapp",
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      }),
      _createVNode($setup["FTableColumn"], {
        title: "Knapp",
        type: "action",
        shrink: ""
      }, {
        default: _withCtx(() => _cache[2] || (_cache[2] = [
          _createElementVNode(
            "a",
            {
              href: "https://example.net",
              target: "_blank",
              class: "anchor"
            },
            "L\xE4nk",
            -1
            /* HOISTED */
          )
        ])),
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
  selector: "#example-9082e9"
});
export {
  render
};
