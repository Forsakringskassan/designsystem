// docs/src/setup.ts
import { createApp, h } from "vue";
import {
  ErrorPlugin,
  FErrorHandlingApp,
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
  app.use(ErrorPlugin);
  app.use(ValidationPlugin);
  app.use(TestPlugin);
  app.use(TranslationPlugin);
  app.mount(selector);
  setRunningContext(app);
}

// virtual-entry:virtual:src/components/FTable/examples/FTableLiveExample.vue:FTableLiveExample-331d12.js
import { defineComponent, h as h2 } from "vue";
import { formatNumber } from "@fkui/logic";
import { FCheckboxField, FFieldset, FRadioField, FSelectField } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";
import { LiveExample, createElement } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "vue";
var columnsBase = defineTableColumns([
  {
    type: "text",
    header: "Oformaterad text",
    value(row) {
      return String(row.antal);
    }
  },
  {
    type: "checkbox",
    header: "Kryssruta",
    key: "aktiv",
    label: (row) => `V\xE4lj rad ${row.id}`,
    editable: true
  },
  {
    type: "text",
    header: "Formatterad text",
    label: (row) => `Text f\xF6r rad ${row.id}`,
    value(row) {
      return formatNumber(row.antal) ?? "";
    },
    editable: false
  },
  {
    type: "text",
    header: "Redigerbar text",
    editable: true,
    key: "level",
    label: (row) => `Text f\xF6r rad ${row.id}`,
    value(row) {
      return row.level;
    },
    update(row, newValue) {
      row.level = newValue;
    },
    validation: {
      required: {},
      maxLength: { length: 5 }
    }
  },
  {
    type: "button",
    header: "Knapp",
    icon: "bell",
    value(row) {
      return `Exempeltext f\xF6r knapp med id ${row.id}`;
    },
    onClick: (row) => {
      alert(`Du klickade p\xE5 rad med id ${row.id}`);
    }
  },
  {
    header: "L\xE4nk",
    type: "anchor",
    href: "#",
    value() {
      return "L\xE4nktext";
    }
  },
  {
    header: "Dropplista",
    type: "select",
    key: "animal",
    label: (row) => `Djur f\xF6r rad ${row.id}`,
    options: ["Hund", "Katt", "Hamster", "Papegoja", "Spindel", "Guldfisk"],
    editable: true
  },
  {
    header: "Render function",
    render() {
      return h2("td", { id: "foo", class: "bar" }, ["\u{1F47B}"]);
    }
  }
]);
var columnsDefault = [
  ...defineTableColumns([
    {
      type: "text",
      header: "Oformaterad text",
      value(row) {
        return String(row.antal);
      }
    }
  ]),
  ...columnsBase
];
var columnsWithHeader = [
  ...defineTableColumns([
    {
      type: "rowheader",
      header: "Oformaterad text",
      value(row) {
        return String(row.antal);
      }
    }
  ]),
  ...columnsBase
];
var rows = [
  {
    id: "1",
    animal: "Katt",
    level: "F\xF6r\xE4ldrapenning",
    start: "2022-04-11",
    end: "2022-04-20",
    antal: "10000",
    aktiv: false,
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
    animal: "Spindel",
    level: "Tillf\xE4llig f\xF6r\xE4ldrapenning",
    start: "2022-05-02",
    end: "2022-05-04",
    antal: "30000",
    aktiv: false,
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
    animal: "Hamster",
    level: "F\xF6r\xE4ldrapenning",
    start: "2022-05-16",
    end: "2022-05-27",
    antal: "11000",
    aktiv: true,
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
];
var exampleComponent = defineComponent({
  name: "FTableLiveExample",
  components: { LiveExample, FCheckboxField, FFieldset, FRadioField, FSelectField },
  data() {
    return {
      isEmpty: false,
      striped: false,
      hasRowDescription: false,
      hasCustomEmptyText: false,
      hasHiddenCaption: false,
      hasRowHeader: false,
      selectable: "",
      isExpandable: false,
      hasCustomExpandContent: false,
      columnsWithHeader,
      columnsDefault,
      rows,
      selectedRows: []
    };
  },
  computed: {
    livedata() {
      return {
        columns: this.hasRowHeader ? this.columnsWithHeader : this.columnsDefault,
        rows: this.isEmpty ? [] : this.rows,
        selectedRows: this.selectedRows
      };
    },
    components() {
      return { FTable };
    },
    expandableAttribute() {
      if (!this.isExpandable) {
        return;
      }
      return this.hasCustomExpandContent ? "expandableContent" : "expandableRows";
    },
    expandableSlotTemplate() {
      if (!this.isExpandable || !this.hasCustomExpandContent) {
        return "";
      }
      return (
        /* HTML */
        ` <template #expandable="{ row }"> {{ row.content }} </template> `
      );
    },
    emptyTemplate() {
      if (!this.isEmpty || !this.hasCustomEmptyText) {
        return "";
      }
      return (
        /* HTML */
        `
                <template #empty> Det finns inga aktuella utbetalningar. </template>
            `
      );
    },
    template() {
      const { striped, selectable, expandableAttribute } = this;
      return createElement(
        "f-table",
        {
          ":columns": "columns",
          ":rows": "rows",
          "v-model:selected-rows": selectable ? "selectedRows" : void 0,
          "key-attribute": "id",
          striped,
          selectable,
          expandableAttribute
        },
        [this.expandableSlotTemplate, this.emptyTemplate]
      );
    }
  },
  watch: {
    selectable: {
      immediate: false,
      handler() {
        this.selectedRows = [];
      }
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _component_f_radio_field = _resolveComponent("f-radio-field");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livedata: _ctx.livedata
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_fieldset, { name: "styling" }, {
        label: _withCtx(() => [..._cache[10] || (_cache[10] = [
          _createTextVNode(
            " Visuellt ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.striped,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.striped = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[11] || (_cache[11] = [
              _createTextVNode(
                " Zebrarandig ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.hasRowHeader,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.hasRowHeader = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[12] || (_cache[12] = [
              _createTextVNode(
                " Radrubriker ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.hasHiddenCaption,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.hasHiddenCaption = $event),
            disabled: "",
            value: true
          }, {
            default: _withCtx(() => [..._cache[13] || (_cache[13] = [
              _createTextVNode(
                " Dold caption ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      _createVNode(_component_f_fieldset, { name: "interaktion" }, {
        label: _withCtx(() => [..._cache[14] || (_cache[14] = [
          _createTextVNode(
            " Interaktion ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_select_field, {
            modelValue: _ctx.selectable,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.selectable = $event)
          }, {
            label: _withCtx(() => [..._cache[15] || (_cache[15] = [
              _createTextVNode(
                " Valbara rader ",
                -1
                /* CACHED */
              )
            ])]),
            default: _withCtx(() => [
              _cache[16] || (_cache[16] = _createElementVNode(
                "option",
                { value: "" },
                "Nej",
                -1
                /* CACHED */
              )),
              _cache[17] || (_cache[17] = _createElementVNode(
                "option",
                { value: "multi" },
                "Ja, flerval",
                -1
                /* CACHED */
              )),
              _cache[18] || (_cache[18] = _createElementVNode(
                "option",
                { value: "single" },
                "Ja, enkelval",
                -1
                /* CACHED */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.isExpandable,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.isExpandable = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[19] || (_cache[19] = [
              _createTextVNode(
                " Expanderbara rader ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _ctx.isExpandable ? (_openBlock(), _createBlock(_component_f_fieldset, {
            key: 0,
            name: "radio-expandable-type"
          }, {
            label: _withCtx(() => [..._cache[20] || (_cache[20] = [
              _createTextVNode(
                " Typ av expanderat inneh\xE5ll ",
                -1
                /* CACHED */
              )
            ])]),
            default: _withCtx(() => [
              _createVNode(_component_f_radio_field, {
                modelValue: _ctx.hasCustomExpandContent,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.hasCustomExpandContent = $event),
                value: false
              }, {
                default: _withCtx(() => [..._cache[21] || (_cache[21] = [
                  _createTextVNode(
                    " Tabellrad ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              _createVNode(_component_f_radio_field, {
                modelValue: _ctx.hasCustomExpandContent,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.hasCustomExpandContent = $event),
                value: true
              }, {
                default: _withCtx(() => [..._cache[22] || (_cache[22] = [
                  _createTextVNode(
                    " Valfritt inneh\xE5ll ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          })) : _createCommentVNode("v-if", true),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.isEmpty,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.isEmpty = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[23] || (_cache[23] = [
              _createTextVNode(
                " Tom tabell ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _ctx.isEmpty ? (_openBlock(), _createBlock(_component_f_fieldset, {
            key: 1,
            name: "radio-empty-text"
          }, {
            label: _withCtx(() => [..._cache[24] || (_cache[24] = [
              _createTextVNode(
                " Meddelande f\xF6r tom tabell ",
                -1
                /* CACHED */
              )
            ])]),
            default: _withCtx(() => [
              _createVNode(_component_f_radio_field, {
                modelValue: _ctx.hasCustomEmptyText,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.hasCustomEmptyText = $event),
                value: false
              }, {
                default: _withCtx(() => [..._cache[25] || (_cache[25] = [
                  _createTextVNode(
                    " Standardmeddelande ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              _createVNode(_component_f_radio_field, {
                modelValue: _ctx.hasCustomEmptyText,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.hasCustomEmptyText = $event),
                value: true
              }, {
                default: _withCtx(() => [..._cache[26] || (_cache[26] = [
                  _createTextVNode(
                    " Eget meddelande ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          })) : _createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["components", "template", "livedata"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-331d12"
});
export {
  render
};
