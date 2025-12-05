"use strict";
(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });

  // docs/src/setup.ts
  var import_vue = __require("vue");
  var import_vue2 = __require("@fkui/vue");
  function setup(options) {
    const { rootComponent, selector } = options;
    const app = (0, import_vue.createApp)({
      render() {
        return (0, import_vue.h)(import_vue2.FErrorHandlingApp, { defaultComponent: rootComponent });
      }
    });
    (0, import_vue2.setRunningContext)(app);
    app.use(import_vue2.ErrorPlugin, {
      captureWarnings: true,
      logToConsole: true
    });
    app.use(import_vue2.ValidationPlugin);
    app.use(import_vue2.TestPlugin);
    app.use(import_vue2.TranslationPlugin);
    app.mount(selector);
  }

  // virtual-entry:./packages/vue/src/components/FInteractiveTable/examples/FInteractiveTableLiveExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FDataTableLiveExample",
    components: { LiveExample: import_docs_live_example.LiveExample, FCheckboxField: import_vue4.FCheckboxField, FRadioField: import_vue4.FRadioField, FFieldset: import_vue4.FFieldset },
    data() {
      return {
        isEmpty: false,
        isStriped: false,
        hasRowDescription: false,
        hasCustomEmptyText: false,
        hasHiddenCaption: false,
        hasActions: false,
        hasRowHeader: false,
        isSelectable: true,
        isExpandable: false,
        hasCustomExpandContent: false,
        hasHover: false,
        emptyItems: []
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
        return { FInteractiveTable: import_vue4.FInteractiveTable, FTableColumn: import_vue4.FTableColumn };
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
        return this.isSelectable ? "selectable" : "";
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
                <f-table-column name="actions" title="\xC5tg\xE4rd" type="action" shrink>
                    <button
                        aria-label="Redigera"
                        class="button button--tertiary button--small"
                        type="button"
                    >
                        <svg
                            aria-hidden="true"
                            class="icon button__icon button__pen"
                            focusable="false"
                        >
                            <use xlink:href="#f-icon-pen" />
                        </svg>
                    </button>
                    <button
                        aria-label="Ta bort"
                        class="button button--tertiary button--small"
                        type="button"
                    >
                        <svg
                            aria-hidden="true"
                            class="icon button__icon button__trashcan"
                            focusable="false"
                        >
                            <use xlink:href="#f-icon-trashcan" />
                        </svg>
                    </button>
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
                    key-attribute="id"
                >
                    <template #caption> ${this.caption} </template>
                    <template #default="{ row }">
                        <f-table-column name="level" title="Niv\xE5" ${this.rowHeader} type="text">
                            {{ row.level }}
                        </f-table-column>
                        <f-table-column
                            name="start"
                            title="Fr\xE5n och med"
                            ${this.rowDescription}
                            type="text"
                            expand
                        >
                            {{ row.start }}
                        </f-table-column>
                        <f-table-column
                            name="end"
                            title="Till och med"
                            ${this.rowDescription}
                            type="text"
                        >
                            {{ row.end }}
                        </f-table-column>
                        <f-table-column name="antal" title="Antal dagar" type="numeric">
                            {{ row.antal }}
                        </f-table-column>
                        ${this.actions}
                    </template>
                    ${this.expandableSlot}
                    <template #checkbox-description> V\xE4lj denna rad </template>
                    ${this.empty}
                </f-interactive-table>
            `
        );
      }
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_checkbox_field = (0, import_vue5.resolveComponent)("f-checkbox-field");
    const _component_f_radio_field = (0, import_vue5.resolveComponent)("f-radio-field");
    const _component_f_fieldset = (0, import_vue5.resolveComponent)("f-fieldset");
    const _component_live_example = (0, import_vue5.resolveComponent)("live-example");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_live_example, {
      components: _ctx.components,
      template: _ctx.template,
      livedata: _ctx.livedata
    }, {
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isSelectable,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.isSelectable = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[12] || (_cache[12] = [
            (0, import_vue5.createTextVNode)(" Valbara rader ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isExpandable,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.isExpandable = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[13] || (_cache[13] = [
            (0, import_vue5.createTextVNode)(" Expanderbara rader ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        _ctx.isExpandable ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_fieldset, {
          key: 0,
          name: "radio-expandable-type"
        }, {
          label: (0, import_vue5.withCtx)(() => _cache[14] || (_cache[14] = [
            (0, import_vue5.createTextVNode)(" Typ av expanderat inneh\xE5ll ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.hasCustomExpandContent,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.hasCustomExpandContent = $event),
              value: false
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[15] || (_cache[15] = [
                (0, import_vue5.createTextVNode)(" Tabellrad ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.hasCustomExpandContent,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.hasCustomExpandContent = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[16] || (_cache[16] = [
                (0, import_vue5.createTextVNode)(" Valfritt inneh\xE5ll ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })) : (0, import_vue5.createCommentVNode)("v-if", true),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.hasHover,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.hasHover = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[17] || (_cache[17] = [
            (0, import_vue5.createTextVNode)(" Hover ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isStriped,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.isStriped = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[18] || (_cache[18] = [
            (0, import_vue5.createTextVNode)(" Zebrarandig ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.hasActions,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.hasActions = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[19] || (_cache[19] = [
            (0, import_vue5.createTextVNode)(" \xC5tg\xE4rdsknappar ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.hasRowHeader,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.hasRowHeader = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[20] || (_cache[20] = [
            (0, import_vue5.createTextVNode)(" Radrubriker ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.hasHiddenCaption,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.hasHiddenCaption = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[21] || (_cache[21] = [
            (0, import_vue5.createTextVNode)(" Dold caption ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isEmpty,
          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.isEmpty = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[22] || (_cache[22] = [
            (0, import_vue5.createTextVNode)(" Tom tabell ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        _ctx.isEmpty ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_fieldset, {
          key: 1,
          name: "radio-empty-text"
        }, {
          label: (0, import_vue5.withCtx)(() => _cache[23] || (_cache[23] = [
            (0, import_vue5.createTextVNode)(" Meddelande f\xF6r tom tabell ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.hasCustomEmptyText,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => _ctx.hasCustomEmptyText = $event),
              value: false
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[24] || (_cache[24] = [
                (0, import_vue5.createTextVNode)(" Standardmeddelande ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.hasCustomEmptyText,
              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => _ctx.hasCustomEmptyText = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[25] || (_cache[25] = [
                (0, import_vue5.createTextVNode)(" Eget meddelande ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })) : (0, import_vue5.createCommentVNode)("v-if", true)
      ]),
      _: 1
      /* STABLE */
    }, 8, ["components", "template", "livedata"]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FInteractiveTableLiveExample"
  });
})();
