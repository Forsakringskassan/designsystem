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

  // virtual-entry:./packages/vue/src/components/FList/examples/FListLiveExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FListLiveExample",
    components: { LiveExample: import_docs_live_example.LiveExample, FCheckboxField: import_vue4.FCheckboxField, FFieldset: import_vue4.FFieldset, FRadioField: import_vue4.FRadioField, FSelectField: import_vue4.FSelectField },
    data() {
      return {
        isEmpty: false,
        hasCustomEmptyText: false,
        listOption: "static" /* STATIC */
      };
    },
    computed: {
      livedata() {
        return {
          selectedItems: [],
          items: [
            { id: 1, frukt: "Banan" },
            { id: 2, frukt: "\xC4pple" },
            { id: 3, frukt: "Apelsin" }
          ]
        };
      },
      components() {
        return {
          FList: import_vue4.FList
        };
      },
      isSelectable() {
        return this.listOption === "checkbox" /* CHECKBOX */ || this.listOption === "link" /* LINK */;
      },
      model() {
        return this.isSelectable ? `v-model="selectedItems"` : "";
      },
      items() {
        return this.isEmpty ? `:items="[]"` : `:items="items"`;
      },
      selectable() {
        return this.isSelectable ? "selectable" : "";
      },
      checkbox() {
        return this.listOption === "link" /* LINK */ ? `:checkbox="false"` : "";
      },
      empty() {
        const template = (
          /* HTML */
          `
                <template #empty>
                    <em>Det finns inga frukter.</em>
                </template>
            `
        );
        return this.isEmpty && this.hasCustomEmptyText ? template : "";
      },
      screenreader() {
        const template = (
          /* HTML */
          `<template #screenreader="{ item }">
                Frukt {{ item.frukt }}
            </template>`
        );
        return this.listOption === "checkbox" /* CHECKBOX */ ? template : "";
      },
      template() {
        return (
          /* HTML */
          `
                <f-list
                    ${this.model}
                    key-attribute="id"
                    ${this.items}
                    ${this.selectable}
                    ${this.checkbox}
                >
                    <template #default="{ item }">
                        <h3>{{ item.frukt }}</h3>
                    </template>
                    ${this.empty} ${this.screenreader}
                </f-list>
            `
        );
      }
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_select_field = (0, import_vue5.resolveComponent)("f-select-field");
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
        (0, import_vue5.createVNode)(_component_f_select_field, {
          modelValue: _ctx.listOption,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.listOption = $event)
        }, {
          label: (0, import_vue5.withCtx)(() => _cache[4] || (_cache[4] = [
            (0, import_vue5.createTextVNode)(" Interaktivitet ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            _cache[5] || (_cache[5] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "static" },
              "Statisk",
              -1
              /* HOISTED */
            )),
            _cache[6] || (_cache[6] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "checkbox" },
              "Interaktiv med kryssruta",
              -1
              /* HOISTED */
            )),
            _cache[7] || (_cache[7] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "link" },
              "Interaktiv med l\xE4nk",
              -1
              /* HOISTED */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isEmpty,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.isEmpty = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[8] || (_cache[8] = [
            (0, import_vue5.createTextVNode)(" Tom lista ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        _ctx.isEmpty ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_fieldset, {
          key: 0,
          name: "radio-empty-text"
        }, {
          label: (0, import_vue5.withCtx)(() => _cache[9] || (_cache[9] = [
            (0, import_vue5.createTextVNode)(" Meddelande f\xF6r tom lista ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.hasCustomEmptyText,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.hasCustomEmptyText = $event),
              value: false
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[10] || (_cache[10] = [
                (0, import_vue5.createTextVNode)(" Standardmeddelande ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.hasCustomEmptyText,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.hasCustomEmptyText = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[11] || (_cache[11] = [
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
    selector: "#FListLiveExample"
  });
})();
