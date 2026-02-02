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

// virtual-entry:virtual:src/components/FTable/examples/FTableColumnLiveExample.vue:FTableColumnLiveExample-9b4249.js
import { defineComponent } from "vue";
import { FDate } from "@fkui/date";
import {
  FCheckboxField,
  FFieldset,
  FRadioField,
  FSelectField,
  getHTMLElementFromVueRef
} from "@fkui/vue";
import {
  FTable,
  defineTableColumns as defineTableColumnsFunc
} from "@fkui/vue-labs";
import { LiveExample } from "@forsakringskassan/docs-live-example";

// src/components/FTable/columns/helpers/default-tnum-value.ts
function defaultTnumValue(type) {
  const tnumTypes = [
    "text:bankAccountNumber",
    "text:bankgiro",
    "text:clearingNumber",
    "text:currency",
    "text:number",
    "text:organisationsnummer",
    "text:percent",
    "text:personnummer",
    "text:phoneNumber",
    "text:plusgiro",
    "text:postalCode"
  ];
  return tnumTypes.includes(type);
}

// src/components/FTable/is-text-column.ts
function isTextColumn(column) {
  if (!column.type) {
    return false;
  }
  return column.type.startsWith("text");
}

// src/components/FTable/is-editable-column.ts
function isEditableColumn(column) {
  if (!column.type) {
    return false;
  }
  return column.type === "checkbox" || isTextColumn(column) || column.type === "select";
}

// src/components/FTable/is-enable-column.ts
function isEnableColumn(column) {
  if (!column.type) {
    return false;
  }
  return column.type === "anchor" || column.type === "button";
}

// src/components/FTable/examples/stringify-object.ts
function stringifyValue(value) {
  if (Array.isArray(value)) {
    const joinedValues = value.map((it) => {
      if (typeof it === "object") {
        return stringifyObject(it);
      }
      return `'${String(it)}'`;
    }).join(", ");
    return `[${joinedValues}]`;
  }
  if (typeof value === "function") {
    return value.toString().split(`"`).join("'");
  }
  if (typeof value === "string") {
    return `'${value}'`;
  }
  return String(value);
}
function stringifyObject(obj) {
  const props = Object.keys(obj).map(
    (key) => `${key}: ${stringifyValue(obj[key])}`
  );
  return `{ ${props.join(", ")} }`;
}

// virtual-entry:virtual:src/components/FTable/examples/FTableColumnLiveExample.vue:FTableColumnLiveExample-9b4249.js
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, toDisplayString as _toDisplayString } from "vue";
var columnData = {
  checkbox: {
    type: "checkbox",
    header: "Kryssruta",
    key: "value"
  },
  radio: {
    type: "radio",
    header: "Radioknapp",
    key: "value"
  },
  "text:currency": {
    type: "text:currency",
    header: "Valuta",
    key: "value"
  },
  "text:number": {
    type: "text:number",
    decimals: 3,
    header: "Numeriskt, tre decimaler",
    key: "value"
  },
  "text:percent": {
    type: "text:percent",
    decimals: 2,
    header: "Procent, tv\xE5 decimaler",
    key: "value"
  },
  text: {
    type: "text",
    header: "Fritext",
    key: "value"
  },
  "text:bankAccountNumber": {
    type: "text:bankAccountNumber",
    header: "Kontonummer",
    key: "value"
  },
  "text:bankgiro": {
    type: "text:bankgiro",
    header: "Bankgiro",
    key: "value"
  },
  "text:clearingNumber": {
    type: "text:clearingNumber",
    header: "Clearingnummer",
    key: "value"
  },
  "text:email": {
    type: "text:email",
    header: "Mejladress",
    key: "value"
  },
  "text:organisationsnummer": {
    type: "text:organisationsnummer",
    header: "Organisationsnummer",
    key: "value"
  },
  "text:personnummer": {
    type: "text:personnummer",
    header: "Personnummer",
    key: "value"
  },
  "text:phoneNumber": {
    type: "text:phoneNumber",
    header: "Telefonnummer",
    key: "value"
  },
  "text:plusgiro": {
    type: "text:plusgiro",
    header: "Plusgiro",
    key: "value"
  },
  "text:postalCode": {
    type: "text:postalCode",
    header: "Postnummer",
    key: "value"
  },
  rowheader: {
    type: "rowheader",
    header: "Radrubrik",
    key: "value"
  },
  anchor: {
    type: "anchor",
    header: "L\xE4nk",
    text: () => "value",
    href: "#"
  },
  button: {
    type: "button",
    header: "Knapp",
    text: () => "value",
    icon: "bell"
  },
  select: {
    type: "select",
    header: "Dropplista",
    key: "value",
    options: ["Foo", "Bar", "Baz"]
  },
  "text:date": {
    type: "text:date",
    header: "Datum",
    key: "value"
  },
  menu: {
    type: "menu",
    header: "\xC5tg\xE4rd",
    text: (row) => {
      return `Visa \xE5tg\xE4rder f\xF6r rad "${row.id ?? -1}"`;
    },
    actions: [
      {
        label: "Visa",
        icon: "search",
        onClick: (row) => {
          console.log(`Visa detaljer f\xF6r rad "${row.id ?? -1}"`);
        }
      },
      {
        label: "Redigera",
        icon: "pen",
        onClick: (row) => {
          console.log(`Redigera rad "${row.id ?? -1}"`);
        }
      },
      {
        label: "Ta bort",
        icon: "trashcan",
        onClick: (row) => {
          console.log(`Ta bort rad "${row.id ?? -1}"`);
        }
      }
    ]
  }
};
var rowData = {
  checkbox: [true, false],
  radio: [true, false],
  "text:currency": [3453455, 1e4],
  "text:number": [5.4, 10.5],
  "text:percent": [9.987, 51],
  text: ["Six seven", "Skibidi"],
  "text:bankAccountNumber": ["12345678", "1234567890123456"],
  "text:bankgiro": ["999-9996", "9999-9997"],
  "text:clearingNumber": ["5678", "5678-1"],
  "text:email": ["sixseven@example.net", "skibidi@example.net"],
  "text:organisationsnummer": ["9999999999", "9999999999"],
  "text:personnummer": ["19120211-9150", "19970131-2390"],
  "text:phoneNumber": ["12345678901234567", "123456789012345678"],
  "text:plusgiro": ["11111119", "9999996"],
  "text:postalCode": ["37324", "93222"],
  "text:date": [FDate.now().toString(), FDate.now().addDays(1).toString()],
  rowheader: ["Six seven", "Skibidi"],
  anchor: ["Six seven", "Skibidi"],
  button: ["Six seven", "Skibidi"],
  select: ["Foo"],
  menu: ["Foo", "Bar", "Baz"]
};
function getColumn(options) {
  const { columnType, description, tnum, align, enabled, editable } = options;
  const column = { ...columnData[columnType] };
  if (description) {
    column.description = "Formatbeskrivning";
  }
  if (tnum !== void 0 && isTextColumn(column)) {
    column.tnum = tnum;
  }
  if (align !== void 0 && isTextColumn(column)) {
    column.align = align;
  }
  if (editable !== void 0 && isEditableColumn(column)) {
    column.editable = editable;
  }
  if (enabled !== void 0 && isEnableColumn(column)) {
    column.enabled = enabled;
  }
  return column;
}
function getRows(options) {
  const { columnType } = options;
  return rowData[columnType].map((it, index) => ({ id: index + 1, value: it }));
}
var exampleComponent = defineComponent({
  name: "FTableColumnLiveExample",
  components: { LiveExample, FSelectField, FFieldset, FCheckboxField, FRadioField },
  data() {
    return {
      columnType: "text",
      textType: "text",
      descriptionChecked: false,
      tnum: false,
      align: "left",
      editableChecked: true,
      enabledChecked: true
    };
  },
  computed: {
    livemethods() {
      return {
        defineTableColumns: defineTableColumnsFunc
      };
    },
    components() {
      return { FTable };
    },
    tnumSupport() {
      return this.columnType === "text";
    },
    alignSupport() {
      return this.columnType === "text";
    },
    defaultTNUM() {
      return defaultTnumValue(this.textType);
    },
    defaultAlign() {
      if (this.columnType === "text") {
        return ["text:currency", "text:number", "text:percent"].includes(this.textType) ? "right" : "left";
      }
      return "left";
    },
    alignLeftText() {
      return this.defaultAlign === "left" ? "V\xE4nster (default)" : "V\xE4nster";
    },
    alignRightText() {
      return this.defaultAlign === "right" ? "H\xF6ger (default)" : "H\xF6ger";
    },
    tnumOffText() {
      return !this.defaultTNUM ? "Av (default)" : "Av";
    },
    tnumOnText() {
      return this.defaultTNUM ? "P\xE5 (default)" : "P\xE5";
    },
    enabledSupport() {
      return ["anchor", "button"].includes(this.columnType);
    },
    editableSupport() {
      return ["checkbox", "select", "text"].includes(this.columnType);
    },
    normalizedKey() {
      return this.columnType === "text" ? this.textType : this.columnType;
    },
    columns() {
      const column = getColumn({
        columnType: this.normalizedKey,
        description: this.descriptionChecked,
        tnum: this.tnumSupport && this.tnum !== this.defaultTNUM ? this.tnum : void 0,
        align: this.alignSupport && this.align !== this.defaultAlign ? this.align : void 0,
        editable: this.editableSupport ? this.editableChecked : void 0,
        enabled: this.enabledSupport ? this.enabledChecked : void 0
      });
      return `defineTableColumns([${stringifyObject(column)}])`;
    },
    rows() {
      const rows = getRows({ columnType: this.normalizedKey });
      const stringified = rows.map((it) => stringifyObject(it)).join(", ");
      return `[${stringified}]`;
    },
    template() {
      return `<f-table :columns="${this.columns}" :rows="${this.rows}"></f-table>`;
    }
  },
  mounted() {
    this.limitTableWidth();
  },
  updated() {
    this.limitTableWidth();
  },
  methods: {
    limitTableWidth() {
      const root = getHTMLElementFromVueRef(this.$el);
      const table = root.querySelector("table");
      if (table) {
        table.style.width = "300px";
      }
    },
    onTextTypeChange() {
      this.align = this.defaultAlign;
      this.tnum = this.defaultTNUM;
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_f_radio_field = _resolveComponent("f-radio-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livemethods: _ctx.livemethods
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_select_field, {
        modelValue: _ctx.columnType,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.columnType = $event)
      }, {
        label: _withCtx(() => [..._cache[9] || (_cache[9] = [
          _createTextVNode(
            " Kolumntyp ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[10] || (_cache[10] = _createElementVNode(
            "option",
            { value: "text" },
            "Text",
            -1
            /* CACHED */
          )),
          _cache[11] || (_cache[11] = _createElementVNode(
            "option",
            { value: "checkbox" },
            "Kryssruta",
            -1
            /* CACHED */
          )),
          _cache[12] || (_cache[12] = _createElementVNode(
            "option",
            { value: "radio" },
            "Radioknapp",
            -1
            /* CACHED */
          )),
          _cache[13] || (_cache[13] = _createElementVNode(
            "option",
            { value: "rowheader" },
            "Radrubrik",
            -1
            /* CACHED */
          )),
          _cache[14] || (_cache[14] = _createElementVNode(
            "option",
            { value: "anchor" },
            "L\xE4nk",
            -1
            /* CACHED */
          )),
          _cache[15] || (_cache[15] = _createElementVNode(
            "option",
            { value: "button" },
            "Knapp",
            -1
            /* CACHED */
          )),
          _cache[16] || (_cache[16] = _createElementVNode(
            "option",
            { value: "select" },
            "Dropplista",
            -1
            /* CACHED */
          )),
          _cache[17] || (_cache[17] = _createElementVNode(
            "option",
            { value: "menu" },
            "Meny",
            -1
            /* CACHED */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _ctx.columnType === "text" ? (_openBlock(), _createBlock(_component_f_select_field, {
        key: 0,
        modelValue: _ctx.textType,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.textType = $event),
        onChange: _ctx.onTextTypeChange
      }, {
        label: _withCtx(() => [..._cache[18] || (_cache[18] = [
          _createTextVNode(
            " Texttyp ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[19] || (_cache[19] = _createElementVNode(
            "option",
            { value: "text" },
            "Fritext",
            -1
            /* CACHED */
          )),
          _cache[20] || (_cache[20] = _createElementVNode(
            "option",
            { value: "text:bankgiro" },
            "Bankgiro",
            -1
            /* CACHED */
          )),
          _cache[21] || (_cache[21] = _createElementVNode(
            "option",
            { value: "text:clearingNumber" },
            "Clearingnummer",
            -1
            /* CACHED */
          )),
          _cache[22] || (_cache[22] = _createElementVNode(
            "option",
            { value: "text:bankAccountNumber" },
            "Kontonummer",
            -1
            /* CACHED */
          )),
          _cache[23] || (_cache[23] = _createElementVNode(
            "option",
            { value: "text:email" },
            "Mejladress",
            -1
            /* CACHED */
          )),
          _cache[24] || (_cache[24] = _createElementVNode(
            "option",
            { value: "text:number" },
            "Numeriskt",
            -1
            /* CACHED */
          )),
          _cache[25] || (_cache[25] = _createElementVNode(
            "option",
            { value: "text:organisationsnummer" },
            "Organisationsnummer",
            -1
            /* CACHED */
          )),
          _cache[26] || (_cache[26] = _createElementVNode(
            "option",
            { value: "text:personnummer" },
            "Personnummer",
            -1
            /* CACHED */
          )),
          _cache[27] || (_cache[27] = _createElementVNode(
            "option",
            { value: "text:plusgiro" },
            "Plusgiro",
            -1
            /* CACHED */
          )),
          _cache[28] || (_cache[28] = _createElementVNode(
            "option",
            { value: "text:postalCode" },
            "Postnummer",
            -1
            /* CACHED */
          )),
          _cache[29] || (_cache[29] = _createElementVNode(
            "option",
            { value: "text:percent" },
            "Procent",
            -1
            /* CACHED */
          )),
          _cache[30] || (_cache[30] = _createElementVNode(
            "option",
            { value: "text:phoneNumber" },
            "Telefonnummer",
            -1
            /* CACHED */
          )),
          _cache[31] || (_cache[31] = _createElementVNode(
            "option",
            { value: "text:currency" },
            "Valuta",
            -1
            /* CACHED */
          )),
          _cache[32] || (_cache[32] = _createElementVNode(
            "option",
            { value: "text:date" },
            "Datum",
            -1
            /* CACHED */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "onChange"])) : _createCommentVNode("v-if", true),
      _ctx.editableSupport ? (_openBlock(), _createBlock(_component_f_checkbox_field, {
        key: 1,
        modelValue: _ctx.editableChecked,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.editableChecked = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[33] || (_cache[33] = [
          _createTextVNode(
            "Redigerbar",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])) : _createCommentVNode("v-if", true),
      _ctx.enabledSupport ? (_openBlock(), _createBlock(_component_f_checkbox_field, {
        key: 2,
        modelValue: _ctx.enabledChecked,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.enabledChecked = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[34] || (_cache[34] = [
          _createTextVNode(
            "Enabled",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])) : _createCommentVNode("v-if", true),
      _ctx.alignSupport ? (_openBlock(), _createBlock(_component_f_fieldset, {
        key: 3,
        name: "align"
      }, {
        label: _withCtx(() => [..._cache[35] || (_cache[35] = [
          _createTextVNode(
            " Justering ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.align,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.align = $event),
            value: "left"
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString(_ctx.alignLeftText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.align,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.align = $event),
            value: "right"
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString(_ctx.alignRightText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      })) : _createCommentVNode("v-if", true),
      _ctx.tnumSupport ? (_openBlock(), _createBlock(_component_f_fieldset, {
        key: 4,
        name: "tnum"
      }, {
        label: _withCtx(() => [..._cache[36] || (_cache[36] = [
          _createTextVNode(
            " TNUM ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.tnum,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.tnum = $event),
            value: false
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString(_ctx.tnumOffText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.tnum,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.tnum = $event),
            value: true
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString(_ctx.tnumOnText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      })) : _createCommentVNode("v-if", true),
      _createVNode(_component_f_fieldset, { name: "rubrik" }, {
        label: _withCtx(() => [..._cache[37] || (_cache[37] = [
          _createTextVNode(
            " Rubriken ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.descriptionChecked,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.descriptionChecked = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[38] || (_cache[38] = [
              _createTextVNode(
                " Formatbeskrivning ",
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
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["components", "template", "livemethods"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-9b4249"
});
export {
  render
};
