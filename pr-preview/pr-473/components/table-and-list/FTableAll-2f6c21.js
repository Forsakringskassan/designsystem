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

// virtual-entry:virtual:packages/vue/src/components/FInteractiveTable/draft/FTableAll.vue:FTableAll-2f6c21.js
import { FInteractiveTable, FTableColumn, FDatepickerField, FNumericTextField } from "@fkui/vue";

// packages/vue/src/components/FInteractiveTable/examples/expandable-rows-data.ts
var rows = [
  {
    id: "1",
    name: "Utbetalning",
    date: "2023-09-27",
    sum: 1200,
    beskrivning: "F\xF6rsta utbetalning",
    myExpandableRow: [
      {
        id: "1a",
        name: "Barnbidrag",
        date: "2023-09-25",
        sum: 200
      },
      {
        id: "1b",
        name: "\xD6vrig ers\xE4ttning",
        date: "2023-09-27",
        sum: 1e3
      }
    ]
  },
  {
    id: "2",
    name: "Utbetalning",
    date: "2023-12-25",
    sum: 1e3,
    beskrivning: "Andra utbetalning",
    myExpandableRow: [
      {
        id: "2a",
        name: "Barnbidrag",
        date: "2023-12-25",
        sum: 1e3
      }
    ]
  },
  {
    id: "3",
    name: "\xC5terb\xE4ring",
    date: "2025-05-06",
    sum: 123456789,
    beskrivning: "Tredje utbetalning",
    myExpandableRow: [
      {
        id: "3a",
        name: "Skatten",
        date: "2025-05-01",
        sum: -1e4
      }
    ]
  }
];
var expandable_rows_data_default = rows;

// virtual-entry:virtual:packages/vue/src/components/FInteractiveTable/draft/FTableAll.vue:FTableAll-2f6c21.js
import { createTextVNode as _createTextVNode, toDisplayString as _toDisplayString, withCtx as _withCtx, createVNode as _createVNode, resolveDirective as _resolveDirective, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createElementVNode as _createElementVNode } from "vue";
var exampleComponent = {
  __name: "FTableAll",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get FInteractiveTable() {
      return FInteractiveTable;
    }, get FTableColumn() {
      return FTableColumn;
    }, get FDatepickerField() {
      return FDatepickerField;
    }, get FNumericTextField() {
      return FNumericTextField;
    }, get rows() {
      return expandable_rows_data_default;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createBlock($setup["FInteractiveTable"], {
    rows: $setup.rows,
    "key-attribute": "id",
    "expandable-attribute": "myExpandableRow",
    selectable: ""
  }, {
    caption: _withCtx(() => _cache[0] || (_cache[0] = [
      _createTextVNode(" Expanderbara rader ")
    ])),
    default: _withCtx(({ row }) => [
      _createVNode(
        $setup["FTableColumn"],
        { title: "Ers\xE4ttning" },
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
      _createVNode(
        $setup["FTableColumn"],
        {
          title: "Id",
          shrink: ""
        },
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
      _createVNode(
        $setup["FTableColumn"],
        {
          title: "Datum",
          type: "text"
        },
        {
          default: _withCtx(() => [
            _withDirectives((_openBlock(), _createBlock($setup["FDatepickerField"], {
              modelValue: row.date,
              "onUpdate:modelValue": ($event) => row.date = $event
            }, {
              default: _withCtx(() => _cache[1] || (_cache[1] = [
                _createTextVNode(" Utbetalningsdatum ")
              ])),
              _: 2
              /* DYNAMIC */
            }, 1032, ["modelValue", "onUpdate:modelValue"])), [
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
      _createVNode(
        $setup["FTableColumn"],
        {
          title: "Summa",
          type: "text"
        },
        {
          default: _withCtx(() => [
            _withDirectives((_openBlock(), _createBlock($setup["FNumericTextField"], {
              modelValue: row.sum,
              "onUpdate:modelValue": ($event) => row.sum = $event
            }, {
              default: _withCtx(() => _cache[2] || (_cache[2] = [
                _createTextVNode(" Utbetalt belopp ")
              ])),
              _: 2
              /* DYNAMIC */
            }, 1032, ["modelValue", "onUpdate:modelValue"])), [
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
      _createVNode($setup["FTableColumn"], {
        title: "Knapp",
        type: "action",
        shrink: ""
      }, {
        default: _withCtx(() => _cache[3] || (_cache[3] = [
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
        default: _withCtx(() => _cache[4] || (_cache[4] = [
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
  }, 8, ["rows"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-2f6c21"
});
export {
  render
};
