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

// virtual-entry:virtual:packages/vue/src/components/FTable/examples/FTableExample.vue:FTableExample-5264ef.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { FTextField, FIcon, FTable, FTableCell, FTableEditCell, FTableSelectCell } from "@fkui/vue";
import { createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, resolveDirective as _resolveDirective, withDirectives as _withDirectives, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const rows = ref([
      {
        id: "1",
        level: "F\xF6r\xE4ldrapenning",
        start: "2022-04-11",
        end: "2022-04-20",
        antal: "10000",
        expandableRows: [
          {
            id: "1a",
            level: "Sjukpenningsniv\xE5",
            start: "2022-04-18",
            end: "2022-04-20",
            antal: "30000"
          },
          {
            id: "1b",
            level: "L\xE4gstaniv\xE5",
            start: "2022-04-16",
            end: "2022-04-17",
            antal: "20000"
          },
          {
            id: "1c",
            level: "Sjukpenningsniv\xE5",
            start: "2022-04-11",
            end: "2022-04-15",
            antal: "50000"
          }
        ],
        expandableContent: [
          {
            id: "1a",
            content: "Anledning: Tar hand om barnet"
          }
        ]
      },
      {
        id: "2",
        level: "Tillf\xE4llig f\xF6r\xE4ldrapenning",
        start: "2022-05-02",
        end: "2022-05-04",
        antal: "30000",
        expandableRows: [
          {
            id: "2a",
            level: "Heldag",
            start: "2022-05-02",
            end: "2022-05-04",
            antal: "30000"
          }
        ],
        expandableContent: [
          {
            id: "2a",
            content: "Anledning: Tar hand om barnet"
          }
        ]
      },
      {
        id: "3",
        level: "F\xF6r\xE4ldrapenning",
        start: "2022-05-16",
        end: "2022-05-27",
        antal: "11000",
        expandableRows: [
          {
            id: "3a",
            level: "Sjukpenningsniv\xE5",
            start: "2022-05-23",
            end: "2022-05-27",
            antal: "40000"
          },
          {
            id: "3b",
            level: "L\xE4gstaniv\xE5",
            start: "2022-05-21",
            end: "2022-05-22",
            antal: "20000"
          },
          {
            id: "3c",
            level: "Sjukpenningsniv\xE5",
            start: "2022-05-16",
            end: "2022-05-20",
            antal: "50000"
          }
        ],
        expandableContent: [
          {
            id: "3a",
            content: "Anledning: Tar hand om barnet"
          }
        ]
      }
    ]);
    function onButtonClick(value) {
      alert(`Du klickade p\xE5 ${value}`);
    }
    const __returned__ = { rows, onButtonClick, get FTextField() {
      return FTextField;
    }, get FIcon() {
      return FIcon;
    }, get FTable() {
      return FTable;
    }, get FTableCell() {
      return FTableCell;
    }, get FTableEditCell() {
      return FTableEditCell;
    }, get FTableSelectCell() {
      return FTableSelectCell;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_format = _resolveDirective("format");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createBlock($setup["FTable"], {
    rows: $setup.rows,
    "key-attribute": "id",
    striped: ""
  }, {
    default: _withCtx(({ row }) => [
      _createVNode($setup["FTableCell"], { title: "Kryssruta" }, {
        default: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createElementVNode(
            "input",
            {
              type: "checkbox",
              "aria-label": "Kryssruta"
            },
            null,
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }),
      _createVNode($setup["FTableSelectCell"], { title: "Dropplista" }),
      _createVNode(
        $setup["FTableCell"],
        { title: "Text" },
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
      _withDirectives(_createVNode(
        $setup["FTableCell"],
        { title: "Formatterad text" },
        null,
        512
        /* NEED_PATCH */
      ), [
        [_directive_format, row.antal, "number"]
      ]),
      _createVNode(
        $setup["FTableCell"],
        { title: "Knapp" },
        {
          default: _withCtx(() => [
            _createElementVNode("button", {
              class: "icon-button",
              type: "button",
              onClick: () => $setup.onButtonClick(row.id)
            }, [
              _createVNode($setup["FIcon"], { name: "trashcan" }),
              _cache[1] || (_cache[1] = _createElementVNode(
                "span",
                { class: "sr-only" },
                "Knapptext",
                -1
                /* CACHED */
              ))
            ], 8, _hoisted_1)
          ]),
          _: 2
          /* DYNAMIC */
        },
        1024
        /* DYNAMIC_SLOTS */
      ),
      _createVNode($setup["FTableCell"], { title: "L\xE4nk" }, {
        default: _withCtx(() => [..._cache[2] || (_cache[2] = [
          _createElementVNode(
            "a",
            {
              class: "anchor anchor--block",
              href: "#"
            },
            "L\xE4nktext",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }),
      _createVNode(
        $setup["FTableEditCell"],
        { title: "Redigerbar text" },
        {
          default: _withCtx(() => [
            _withDirectives(_createVNode($setup["FTextField"], {
              modelValue: row.level,
              "onUpdate:modelValue": ($event) => row.level = $event,
              class: "table-input",
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
  }, 8, ["rows"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-5264ef"
});
export {
  render
};
