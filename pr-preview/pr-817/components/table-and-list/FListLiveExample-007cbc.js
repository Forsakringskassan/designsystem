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

// virtual-entry:virtual:packages/vue/src/components/FList/examples/FListLiveExample.vue:FListLiveExample-007cbc.js
import { defineComponent } from "vue";
import { FCheckboxField, FFieldset, FList, FRadioField, FSelectField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "vue";
var exampleComponent = defineComponent({
  name: "FListLiveExample",
  components: { LiveExample, FCheckboxField, FFieldset, FRadioField, FSelectField },
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
        FList
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
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_f_radio_field = _resolveComponent("f-radio-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livedata: _ctx.livedata
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_select_field, {
        modelValue: _ctx.listOption,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.listOption = $event)
      }, {
        label: _withCtx(() => [..._cache[4] || (_cache[4] = [
          _createTextVNode(
            " Interaktivitet ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[5] || (_cache[5] = _createElementVNode(
            "option",
            { value: "static" },
            "Statisk",
            -1
            /* CACHED */
          )),
          _cache[6] || (_cache[6] = _createElementVNode(
            "option",
            { value: "checkbox" },
            "Interaktiv med kryssruta",
            -1
            /* CACHED */
          )),
          _cache[7] || (_cache[7] = _createElementVNode(
            "option",
            { value: "link" },
            "Interaktiv med l\xE4nk",
            -1
            /* CACHED */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isEmpty,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.isEmpty = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[8] || (_cache[8] = [
          _createTextVNode(
            " Tom lista ",
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
        label: _withCtx(() => [..._cache[9] || (_cache[9] = [
          _createTextVNode(
            " Meddelande f\xF6r tom lista ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.hasCustomEmptyText,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.hasCustomEmptyText = $event),
            value: false
          }, {
            default: _withCtx(() => [..._cache[10] || (_cache[10] = [
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
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.hasCustomEmptyText = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[11] || (_cache[11] = [
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
  }, 8, ["components", "template", "livedata"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-007cbc"
});
export {
  render
};
