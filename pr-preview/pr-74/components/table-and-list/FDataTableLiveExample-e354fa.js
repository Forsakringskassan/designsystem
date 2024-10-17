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

  // virtual-entry:./packages/vue/src/components/FDataTable/examples/FDataTableLiveExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FDataTableLiveExample",
    components: { LiveExample: import_docs_live_example.LiveExample, FCheckboxField: import_vue4.FCheckboxField, FRadioField: import_vue4.FRadioField, FSelectField: import_vue4.FSelectField, FFieldset: import_vue4.FFieldset },
    data() {
      return {
        isEmpty: false,
        isStriped: false,
        hasRowHeader: false,
        hasRowDescription: false,
        hasCustomEmptyText: false,
        hasHiddenCaption: false,
        emptyItems: [],
        scroll: "none"
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
        return { FDataTable: import_vue4.FDataTable, FTableColumn: import_vue4.FTableColumn };
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
        const scroll = this.scroll !== "none" ? `scroll="${this.scroll}"` : "";
        return (
          /* HTML */
          `
                <f-data-table ${this.items} ${this.striped} ${scroll} key-attribute="id">
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
                            <span class="nowrap">{{ row.start }}</span>
                        </f-table-column>
                        <f-table-column
                            name="end"
                            title="Till och med"
                            ${this.rowDescription}
                            type="text"
                        >
                            <span class="nowrap">{{ row.end }}</span>
                        </f-table-column>
                        <f-table-column name="antal" title="Antal dagar" type="numeric">
                            {{ row.antal }}
                        </f-table-column>
                        <f-table-column name="anteckning" title="Anteckning" type="text">
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
  var _hoisted_1 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "none" },
    "Inaktiv",
    -1
    /* HOISTED */
  );
  var _hoisted_2 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "horizontal" },
    "Horisontal",
    -1
    /* HOISTED */
  );
  var _hoisted_3 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "vertical" },
    "Vertikal",
    -1
    /* HOISTED */
  );
  var _hoisted_4 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "both" },
    "B\xE5da",
    -1
    /* HOISTED */
  );
  function render(_ctx, _cache) {
    const _component_f_checkbox_field = (0, import_vue5.resolveComponent)("f-checkbox-field");
    const _component_f_select_field = (0, import_vue5.resolveComponent)("f-select-field");
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
          modelValue: _ctx.isStriped,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.isStriped = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(" Zebrarandig ")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.hasRowHeader,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.hasRowHeader = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(" Radrubriker ")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.hasRowDescription,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.hasRowDescription = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)("\n            Kolumnbeskrivnig\n        ")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.hasHiddenCaption,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.hasHiddenCaption = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(" Dold caption ")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isEmpty,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.isEmpty = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(" Tom tabell ")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.createVNode)(_component_f_select_field, {
          modelValue: _ctx.scroll,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.scroll = $event)
        }, {
          label: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(" Skroll ")
          ]),
          default: (0, import_vue5.withCtx)(() => [
            _hoisted_1,
            (0, import_vue5.createTextVNode)(),
            _hoisted_2,
            (0, import_vue5.createTextVNode)(),
            _hoisted_3,
            (0, import_vue5.createTextVNode)(),
            _hoisted_4
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createTextVNode)(),
        _ctx.isEmpty ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_fieldset, {
          key: 0,
          name: "radio-empty-text"
        }, {
          label: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(" Meddelande f\xF6r tom tabell ")
          ]),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(),
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.hasCustomEmptyText,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.hasCustomEmptyText = $event),
              value: false
            }, {
              default: (0, import_vue5.withCtx)(() => [
                (0, import_vue5.createTextVNode)("\n                Standardmeddelande\n            ")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createTextVNode)(),
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.hasCustomEmptyText,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.hasCustomEmptyText = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => [
                (0, import_vue5.createTextVNode)("\n                Eget meddelande\n            ")
              ]),
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
    selector: "#FDataTableLiveExample"
  });
})();
