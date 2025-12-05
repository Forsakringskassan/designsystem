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

// virtual-entry:virtual:packages/vue/src/components/FDataTable/examples/FDataTableLiveExample.vue:FDataTableLiveExample-982ce0.js
import { defineComponent } from "vue";
import { FCheckboxField, FDataTable, FFieldset, FRadioField, FTableColumn } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "vue";
var exampleComponent = defineComponent({
  name: "FDataTableLiveExample",
  components: { LiveExample, FCheckboxField, FRadioField, FFieldset },
  data() {
    return {
      isEmpty: false,
      isStriped: false,
      hasRowHeader: false,
      hasRowDescription: false,
      hasCustomEmptyText: false,
      hasHiddenCaption: false,
      emptyItems: [],
      showHorizontalScroll: false
    };
  },
  computed: {
    livedata() {
      return {
        selectedItems: [],
        items: [
          {
            id: "1",
            start: "2022-04-10",
            end: "2022-04-25",
            level: "Sjukpenning",
            antal: "15",
            anteckning: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
            id: "2",
            start: "2022-05-06",
            end: "2022-05-10",
            level: "L\xE4gstaniv\xE5",
            antal: "4",
            anteckning: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
            id: "3",
            start: "2022-05-20",
            end: "2022-05-31",
            level: "Sjukpenning",
            antal: "11",
            anteckning: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
        ]
      };
    },
    components() {
      return { FDataTable, FTableColumn };
    },
    items() {
      return this.isEmpty ? `:rows="[]"` : `:rows="items"`;
    },
    striped() {
      return this.isStriped ? "striped" : "";
    },
    rowHeader() {
      return this.hasRowHeader ? `row-header` : "";
    },
    rowDescription() {
      return this.hasRowDescription ? `description="(\xE5\xE5\xE5\xE5-mm-dd)"` : "";
    },
    scroll() {
      return this.showHorizontalScroll ? `scroll="horizontal"` : "";
    },
    caption() {
      return this.hasHiddenCaption ? `<span class="sr-only">F\xF6r\xE4ldrapenning</span>` : "F\xF6r\xE4ldrapenning";
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
    template() {
      return (
        /* HTML */
        `
                <f-data-table ${this.items} ${this.striped} ${this.scroll} key-attribute="id">
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
                        <f-table-column title="Anteckning" type="text">
                            {{ row.anteckning }}
                        </f-table-column>
                    </template>
                    ${this.empty}
                </f-data-table>
            `
      );
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_f_radio_field = _resolveComponent("f-radio-field");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livedata: _ctx.livedata
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_fieldset, { name: "styling" }, {
        label: _withCtx(() => [..._cache[8] || (_cache[8] = [
          _createTextVNode(
            " Styling ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.isStriped,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.isStriped = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[9] || (_cache[9] = [
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
            default: _withCtx(() => [..._cache[10] || (_cache[10] = [
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
            modelValue: _ctx.hasRowDescription,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.hasRowDescription = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[11] || (_cache[11] = [
              _createTextVNode(
                " Kolumnbeskrivnig ",
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
            default: _withCtx(() => [..._cache[12] || (_cache[12] = [
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
            modelValue: _ctx.showHorizontalScroll,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.showHorizontalScroll = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[13] || (_cache[13] = [
              _createTextVNode(
                " Horisontal skroll ",
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
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.isEmpty,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.isEmpty = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[15] || (_cache[15] = [
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
            key: 0,
            name: "radio-empty-text"
          }, {
            label: _withCtx(() => [..._cache[16] || (_cache[16] = [
              _createTextVNode(
                " Meddelande f\xF6r tom tabell ",
                -1
                /* CACHED */
              )
            ])]),
            default: _withCtx(() => [
              _createVNode(_component_f_radio_field, {
                modelValue: _ctx.hasCustomEmptyText,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.hasCustomEmptyText = $event),
                value: false
              }, {
                default: _withCtx(() => [..._cache[17] || (_cache[17] = [
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
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.hasCustomEmptyText = $event),
                value: true
              }, {
                default: _withCtx(() => [..._cache[18] || (_cache[18] = [
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
  selector: "#example-982ce0"
});
export {
  render
};
