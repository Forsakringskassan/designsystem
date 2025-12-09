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

// virtual-entry:virtual:packages/vue/src/design-component-tests/Pagination/examples/PaginationPageButtonExample.vue:PaginationPageButtonExample-1e0ea4.js
import { defineComponent } from "vue";
import {
  FFieldset,
  FNumericTextField,
  FPaginateDataset,
  FPaginator,
  FRadioField
} from "@fkui/vue";
import { resolveComponent as _resolveComponent, createVNode as _createVNode, withCtx as _withCtx, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, normalizeClass as _normalizeClass, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, toDisplayString as _toDisplayString, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  components: {
    FFieldset,
    FNumericTextField,
    FPaginateDataset,
    FPaginator,
    FRadioField
  },
  data() {
    return {
      numberOfItemsPerPage: 15,
      numberOfPagesToShowAtMost: 9,
      rows: Array.from({ length: 100 })
    };
  },
  computed: {
    numberOfPagesOptions() {
      return [5, 6, 7, 8, 9];
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_paginator = _resolveComponent("f-paginator");
  const _component_f_paginate_dataset = _resolveComponent("f-paginate-dataset");
  const _component_f_numeric_text_field = _resolveComponent("f-numeric-text-field");
  const _component_f_radio_field = _resolveComponent("f-radio-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createVNode(_component_f_paginate_dataset, {
        items: _ctx.rows,
        "items-per-page": _ctx.numberOfItemsPerPage
      }, {
        default: _withCtx(() => [
          _createVNode(_component_f_paginator, { "number-of-pages-to-show": _ctx.numberOfPagesToShowAtMost }, null, 8, ["number-of-pages-to-show"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["items", "items-per-page"]),
      _cache[4] || (_cache[4] = _createElementVNode(
        "hr",
        null,
        null,
        -1
        /* CACHED */
      )),
      _createVNode(_component_f_numeric_text_field, {
        modelValue: _ctx.numberOfItemsPerPage,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.numberOfItemsPerPage = $event)
      }, {
        default: _withCtx(() => [..._cache[2] || (_cache[2] = [
          _createTextVNode(
            "Antal objekt per sida",
            -1
            /* CACHED */
          )
        ])]),
        description: _withCtx(({ descriptionClass }) => [
          _createElementVNode(
            "span",
            {
              class: _normalizeClass(descriptionClass)
            },
            "Maximalt antal objekt per sida",
            2
            /* CLASS */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_fieldset, {
        name: "numberOfPagesToShowAtMost",
        horizontal: ""
      }, {
        label: _withCtx(() => [..._cache[3] || (_cache[3] = [
          _createTextVNode(
            "Antal sidor att visa",
            -1
            /* CACHED */
          )
        ])]),
        description: _withCtx(({ descriptionClass }) => [
          _createElementVNode(
            "span",
            {
              class: _normalizeClass(descriptionClass)
            },
            " Det maximala antalet sidor som kan visas samtidigt. ",
            2
            /* CLASS */
          )
        ]),
        default: _withCtx(() => [
          (_openBlock(true), _createElementBlock(
            _Fragment,
            null,
            _renderList(_ctx.numberOfPagesOptions, (option) => {
              return _openBlock(), _createBlock(_component_f_radio_field, {
                key: option,
                modelValue: _ctx.numberOfPagesToShowAtMost,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.numberOfPagesToShowAtMost = $event),
                value: option
              }, {
                default: _withCtx(() => [
                  _createTextVNode(
                    _toDisplayString(option),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["modelValue", "value"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      })
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-1e0ea4"
});
export {
  render
};
