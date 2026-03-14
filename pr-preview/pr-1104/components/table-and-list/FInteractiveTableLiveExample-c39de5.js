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

// virtual-entry:virtual:packages/vue/src/components/FInteractiveTable/examples/FInteractiveTableLiveExample.vue:FInteractiveTableLiveExample-c39de5.js
import { defineComponent } from "vue";
import {
  FCheckboxField,
  FFieldset,
  FInteractiveTable,
  FRadioField,
  FSelectField,
  FTableButton,
  FTableColumn
} from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "vue";
var exampleComponent = defineComponent({
  name: "FInteractiveTableLiveExample",
  components: { LiveExample, FCheckboxField, FRadioField, FFieldset, FSelectField },
  data() {
    return {
      isEmpty: false,
      isStriped: false,
      hasRowDescription: false,
      hasCustomEmptyText: false,
      hasHiddenCaption: false,
      hasActions: false,
      hasRowHeader: false,
      isSelectable: "",
      isMultiSelect: true,
      isExpandable: false,
      hasCustomExpandContent: false,
      hasHover: false,
      emptyItems: [],
      showActiveRow: false
    };
  },
  computed: {
    livedata() {
      return {
        selectedItems: [],
        items: [
          {
            id: "1",
            level: "F\xF6r\xE4ldrapenning",
            start: "2022-04-11",
            end: "2022-04-20",
            antal: "10",
            expandableRows: [
              {
                id: "1a",
                level: "Sjukpenningsniv\xE5",
                start: "2022-04-18",
                end: "2022-04-20",
                antal: "3"
              },
              {
                id: "1b",
                level: "L\xE4gstaniv\xE5",
                start: "2022-04-16",
                end: "2022-04-17",
                antal: "2"
              },
              {
                id: "1c",
                level: "Sjukpenningsniv\xE5",
                start: "2022-04-11",
                end: "2022-04-15",
                antal: "5"
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
            antal: "3",
            expandableRows: [
              {
                id: "2a",
                level: "Heldag",
                start: "2022-05-02",
                end: "2022-05-04",
                antal: "3"
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
            antal: "11",
            expandableRows: [
              {
                id: "3a",
                level: "Sjukpenningsniv\xE5",
                start: "2022-05-23",
                end: "2022-05-27",
                antal: "4"
              },
              {
                id: "3b",
                level: "L\xE4gstaniv\xE5",
                start: "2022-05-21",
                end: "2022-05-22",
                antal: "2"
              },
              {
                id: "3c",
                level: "Sjukpenningsniv\xE5",
                start: "2022-05-16",
                end: "2022-05-20",
                antal: "5"
              }
            ],
            expandableContent: [
              {
                id: "3a",
                content: "Anledning: Tar hand om barnet"
              }
            ]
          }
        ]
      };
    },
    components() {
      return { FInteractiveTable, FTableButton, FTableColumn };
    },
    items() {
      return this.isEmpty ? `:rows="[]"` : `:rows="items"`;
    },
    striped() {
      return this.isStriped ? "striped" : "";
    },
    rowHeader() {
      return this.hasRowHeader ? `:row-header="true"` : "";
    },
    rowDescription() {
      return this.hasRowDescription ? `description="(\xE5\xE5\xE5\xE5-mm-dd)"` : "";
    },
    hover() {
      return this.hasHover ? "hover" : "";
    },
    caption() {
      return this.hasHiddenCaption ? `<span class="sr-only">Utbetalningar</span>` : "Utbetalningar";
    },
    selectable() {
      if (!this.isSelectable) {
        return "";
      }
      return `selectable="${this.isSelectable}"`;
    },
    expandable() {
      const expandableType = this.hasCustomExpandContent ? "expandableContent" : "expandableRows";
      return this.isExpandable ? `expandable-attribute="${expandableType}"` : "";
    },
    expandableSlot() {
      const template = (
        /* HTML */
        `
                <template #expandable="{ expandableRow }"> {{ expandableRow.content }} </template>
            `
      );
      return this.isExpandable && this.hasCustomExpandContent ? template : "";
    },
    empty() {
      const template = (
        /* HTML */
        `<template #empty>
                Det finns inga aktuella utbetalningar.
            </template>`
      );
      return this.isEmpty && this.hasCustomEmptyText ? template : "";
    },
    actions() {
      const actions = (
        /* HTML */
        `
                <f-table-column title="\xC5tg\xE4rd" type="action" shrink>
                    <f-table-button icon="pen"> Redigera </f-table-button>
                    <f-table-button icon="trashcan"> Ta bort </f-table-button>
                </f-table-column>
            `
      );
      return this.hasActions ? actions : "";
    },
    template() {
      return (
        /* HTML */
        `
                <f-interactive-table
                    ${this.items}
                    ${this.striped}
                    ${this.hover}
                    ${this.selectable}
                    ${this.expandable}
                    ${this.showActive}
                    key-attribute="id"
                >
                    <template #caption> ${this.caption} </template>
                    <template #default="{ row }">
                        <f-table-column title="Niv\xE5" ${this.rowHeader} type="text">
                            {{ row.level }}
                        </f-table-column>
                        <f-table-column
                            title="Fr\xE5n och med"
                            ${this.rowDescription}
                            type="text"
                            expand
                        >
                            <span v-format:date="row.start"></span>
                        </f-table-column>
                        <f-table-column title="Till och med" ${this.rowDescription} type="text">
                            <span v-format:date="row.end"></span>
                        </f-table-column>
                        <f-table-column title="Antal dagar" type="numeric">
                            {{ row.antal }}
                        </f-table-column>
                        ${this.actions}
                    </template>
                    ${this.expandableSlot}
                    <template #selectable-description> V\xE4lj denna rad </template>
                    ${this.empty}
                </f-interactive-table>
            `
      );
    },
    showActive() {
      return this.showActiveRow ? "" : `:showActive="false"`;
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
        label: _withCtx(() => [..._cache[13] || (_cache[13] = [
          _createTextVNode(
            " Styling ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.hasHover,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.hasHover = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[14] || (_cache[14] = [
              _createTextVNode(
                " Hover ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.isStriped,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.isStriped = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[15] || (_cache[15] = [
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
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.hasRowHeader = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[16] || (_cache[16] = [
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
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.hasHiddenCaption = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[17] || (_cache[17] = [
              _createTextVNode(
                " Dold caption ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.showActiveRow,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.showActiveRow = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[18] || (_cache[18] = [
              _createTextVNode(
                " Visa aktiv rad ",
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
        label: _withCtx(() => [..._cache[19] || (_cache[19] = [
          _createTextVNode(
            " Interaktion ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_select_field, {
            modelValue: _ctx.isSelectable,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.isSelectable = $event)
          }, {
            label: _withCtx(() => [..._cache[20] || (_cache[20] = [
              _createTextVNode(
                " Valbara rader ",
                -1
                /* CACHED */
              )
            ])]),
            default: _withCtx(() => [
              _cache[21] || (_cache[21] = _createElementVNode(
                "option",
                { value: "" },
                "Nej",
                -1
                /* CACHED */
              )),
              _cache[22] || (_cache[22] = _createElementVNode(
                "option",
                { value: "multi" },
                "Ja, flerval",
                -1
                /* CACHED */
              )),
              _cache[23] || (_cache[23] = _createElementVNode(
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
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.isExpandable = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[24] || (_cache[24] = [
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
            label: _withCtx(() => [..._cache[25] || (_cache[25] = [
              _createTextVNode(
                " Typ av expanderat inneh\xE5ll ",
                -1
                /* CACHED */
              )
            ])]),
            default: _withCtx(() => [
              _createVNode(_component_f_radio_field, {
                modelValue: _ctx.hasCustomExpandContent,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.hasCustomExpandContent = $event),
                value: false
              }, {
                default: _withCtx(() => [..._cache[26] || (_cache[26] = [
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
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.hasCustomExpandContent = $event),
                value: true
              }, {
                default: _withCtx(() => [..._cache[27] || (_cache[27] = [
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
            modelValue: _ctx.hasActions,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.hasActions = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[28] || (_cache[28] = [
              _createTextVNode(
                " \xC5tg\xE4rdsknappar ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.isEmpty,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => _ctx.isEmpty = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[29] || (_cache[29] = [
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
            label: _withCtx(() => [..._cache[30] || (_cache[30] = [
              _createTextVNode(
                " Meddelande f\xF6r tom tabell ",
                -1
                /* CACHED */
              )
            ])]),
            default: _withCtx(() => [
              _createVNode(_component_f_radio_field, {
                modelValue: _ctx.hasCustomEmptyText,
                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => _ctx.hasCustomEmptyText = $event),
                value: false
              }, {
                default: _withCtx(() => [..._cache[31] || (_cache[31] = [
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
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => _ctx.hasCustomEmptyText = $event),
                value: true
              }, {
                default: _withCtx(() => [..._cache[32] || (_cache[32] = [
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
  selector: "#example-c39de5"
});
export {
  render
};
