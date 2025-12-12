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

// virtual-entry:virtual:packages/vue/src/design-component-tests/Pagination/examples/PaginationExample.vue:PaginationExample-30ba4d.js
import { defineComponent } from "vue";
import {
  FCheckboxField,
  FFieldset,
  FList,
  FNumericTextField,
  FPaginateDataset,
  FPaginator,
  FSelectField,
  FTableColumn
} from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";

// packages/vue/src/design-component-tests/Pagination/examples/pagination-data.ts
var persons = [
  {
    id: 1,
    name: "Maria Olofsson"
  },
  {
    id: 2,
    name: "Anders Berg"
  },
  {
    id: 3,
    name: "Ida Holm"
  },
  {
    id: 4,
    name: "Per Svensson"
  },
  {
    id: 5,
    name: "Elin Eriksson"
  },
  {
    id: 6,
    name: "Karl Sandberg"
  },
  {
    id: 7,
    name: "Elin Lundberg"
  },
  {
    id: 8,
    name: "Sara Olofsson"
  },
  {
    id: 9,
    name: "Karin Gustafsson"
  },
  {
    id: 10,
    name: "Lars Larsson"
  },
  {
    id: 11,
    name: "Elin Gustafsson"
  },
  {
    id: 12,
    name: "Johan Gustafsson"
  },
  {
    id: 13,
    name: "Sara Lindberg"
  },
  {
    id: 14,
    name: "Erik Lindberg"
  },
  {
    id: 15,
    name: "Erik Lundgren"
  },
  {
    id: 16,
    name: "Lars Berg"
  },
  {
    id: 17,
    name: "Karl Holm"
  },
  {
    id: 18,
    name: "Karin Sandberg"
  },
  {
    id: 19,
    name: "Eva Lundberg"
  },
  {
    id: 20,
    name: "Erik Lundberg"
  },
  {
    id: 21,
    name: "Eva Lindstr\xF6m"
  },
  {
    id: 22,
    name: "Ingrid Eriksson"
  },
  {
    id: 23,
    name: "Johan Lindstr\xF6m"
  },
  {
    id: 24,
    name: "Gustav Berg"
  },
  {
    id: 25,
    name: "Johan Eriksson"
  },
  {
    id: 26,
    name: "Sara Andersson"
  },
  {
    id: 27,
    name: "Gustav Eriksson"
  },
  {
    id: 28,
    name: "Nils Sandberg"
  },
  {
    id: 29,
    name: "Ingrid Persson"
  },
  {
    id: 30,
    name: "Anna Svensson"
  },
  {
    id: 31,
    name: "Karl Karlsson"
  },
  {
    id: 32,
    name: "Gustav Lundberg"
  },
  {
    id: 33,
    name: "Lars Olofsson"
  },
  {
    id: 34,
    name: "Nils Bj\xF6rk"
  },
  {
    id: 35,
    name: "Gustav Sandberg"
  },
  {
    id: 36,
    name: "Oskar Lindberg"
  },
  {
    id: 37,
    name: "Erik Olofsson"
  },
  {
    id: 38,
    name: "Oskar Berg"
  },
  {
    id: 39,
    name: "Fredrik Axelsson"
  },
  {
    id: 40,
    name: "Eva Bj\xF6rk"
  },
  {
    id: 41,
    name: "Sara Olsson"
  },
  {
    id: 42,
    name: "Johan Nilsson"
  },
  {
    id: 43,
    name: "Per Gustafsson"
  },
  {
    id: 44,
    name: "Ingrid Holm"
  },
  {
    id: 45,
    name: "Per Larsson"
  },
  {
    id: 46,
    name: "Ingrid Andersson"
  },
  {
    id: 47,
    name: "Karl Berg"
  },
  {
    id: 48,
    name: "Fredrik Nilsson"
  },
  {
    id: 49,
    name: "Gustav Axelsson"
  },
  {
    id: 50,
    name: "Eva Eriksson"
  },
  {
    id: 51,
    name: "Anna Gustafsson"
  },
  {
    id: 52,
    name: "Anders Olofsson"
  },
  {
    id: 53,
    name: "Gustav Johansson"
  },
  {
    id: 54,
    name: "Maja Berg"
  },
  {
    id: 55,
    name: "Fredrik Larsson"
  },
  {
    id: 56,
    name: "Maria Bj\xF6rk"
  },
  {
    id: 57,
    name: "Per Karlsson"
  },
  {
    id: 58,
    name: "Karl Eriksson"
  },
  {
    id: 59,
    name: "Karl Johansson"
  },
  {
    id: 60,
    name: "Nils Lindstr\xF6m"
  },
  {
    id: 61,
    name: "Maria Sandberg"
  },
  {
    id: 62,
    name: "Karl Olsson"
  },
  {
    id: 63,
    name: "Fredrik Berg"
  },
  {
    id: 64,
    name: "Karl Larsson"
  },
  {
    id: 65,
    name: "Eva Berg"
  },
  {
    id: 66,
    name: "Fredrik Karlsson"
  },
  {
    id: 67,
    name: "Nils Nilsson"
  },
  {
    id: 68,
    name: "Eva Karlsson"
  },
  {
    id: 69,
    name: "Erik Svensson"
  },
  {
    id: 70,
    name: "Maria Berg"
  },
  {
    id: 71,
    name: "Anders Lindberg"
  },
  {
    id: 72,
    name: "Karin Karlsson"
  },
  {
    id: 73,
    name: "Erik Sandberg"
  },
  {
    id: 74,
    name: "Erik Karlsson"
  },
  {
    id: 75,
    name: "Nils Andersson"
  },
  {
    id: 76,
    name: "Karl Bj\xF6rk"
  },
  {
    id: 77,
    name: "Oskar Lundgren"
  },
  {
    id: 78,
    name: "Maja Persson"
  },
  {
    id: 79,
    name: "Karin Johansson"
  },
  {
    id: 80,
    name: "Lars Nilsson"
  },
  {
    id: 81,
    name: "Gustav Lindstr\xF6m"
  },
  {
    id: 82,
    name: "Karin Lindstr\xF6m"
  },
  {
    id: 83,
    name: "Sara Lundgren"
  },
  {
    id: 84,
    name: "Ingrid Axelsson"
  },
  {
    id: 85,
    name: "Lars Lundgren"
  },
  {
    id: 86,
    name: "Maja Andersson"
  },
  {
    id: 87,
    name: "Ida Lundberg"
  },
  {
    id: 88,
    name: "Ida Svensson"
  },
  {
    id: 89,
    name: "Eva Lindberg"
  },
  {
    id: 90,
    name: "Johan Andersson"
  },
  {
    id: 91,
    name: "Per Sandberg"
  },
  {
    id: 92,
    name: "Eva Sandberg"
  },
  {
    id: 93,
    name: "Eva Holm"
  },
  {
    id: 94,
    name: "Sofia Berg"
  },
  {
    id: 95,
    name: "Johan Svensson"
  },
  {
    id: 96,
    name: "Nils Lundberg"
  },
  {
    id: 97,
    name: "Elin Olofsson"
  },
  {
    id: 98,
    name: "Fredrik Svensson"
  },
  {
    id: 99,
    name: "Fredrik Olofsson"
  },
  {
    id: 100,
    name: "Nils Johansson"
  }
];

// virtual-entry:virtual:packages/vue/src/design-component-tests/Pagination/examples/PaginationExample.vue:PaginationExample-30ba4d.js
import { createTextVNode as _createTextVNode, normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, toDisplayString as _toDisplayString, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "PaginationExample",
  components: {
    FCheckboxField,
    FFieldset,
    FNumericTextField,
    FSelectField,
    LiveExample
  },
  data() {
    return {
      componentType: "dataTable",
      fetchDataDynamically: false,
      numberOfItemsPerPage: 10,
      numberOfPagesOptions: [5, 6, 7, 8, 9],
      numberOfPagesToShowAtMost: null,
      showInteractiveListWithCheckboxes: false,
      showPaginator: true,
      showPaginatorInHeader: false,
      showPaginatorInFooter: true
    };
  },
  computed: {
    components() {
      return {
        FCheckboxField,
        FFieldset,
        FList,
        FNumericTextField,
        FPaginateDataset,
        FPaginator,
        FSelectField,
        FTableColumn
      };
    },
    livedata() {
      return {
        rows: persons,
        selectedRows: []
      };
    },
    livemethods() {
      return {
        async fetchData(first, last) {
          await new Promise((resolve) => setTimeout(resolve, 3e3));
          return persons.slice(first, last);
        }
      };
    },
    footerPaginator() {
      return this.showPaginatorInFooter ? this.paginator : ``;
    },
    headerPaginator() {
      return this.showPaginatorInHeader ? this.paginator : ``;
    },
    items() {
      return this.fetchDataDynamically ? `:items-length="rows.length" :fetch-data` : `:items="rows"`;
    },
    itemsPerPage() {
      return `:itemsPerPage="${this.numberOfItemsPerPage.toString()}"`;
    },
    numberOfPagesToShow() {
      return (
        /* HTML */
        this.numberOfPagesToShowAtMost ? `:number-of-pages-to-show="${this.numberOfPagesToShowAtMost.toString()}"` : ``
      );
    },
    paginator() {
      return (
        /* HTML */
        `<f-paginator
                ${this.numberOfPagesToShow}
                navigator-label="Navigate between persons"
            />`
      );
    },
    screenreaderTemplate() {
      return this.showInteractiveListWithCheckboxes ? `<template #screenreader="{ item }">
                      Person {{ item.name }} ({{item.id}})
                  </template>` : ``;
    },
    selectable() {
      return this.showInteractiveListWithCheckboxes ? `selectable` : ``;
    },
    vModel() {
      return this.showInteractiveListWithCheckboxes ? `v-model="selectedRows"` : ``;
    },
    template() {
      return (
        /* HTML */
        `
                <f-paginate-dataset ${this.items} ${this.itemsPerPage}>
                    <template #default="{ items: currentPageItems }">
                        ${this.headerPaginator}
                        <f-list
                            ${this.vModel}
                            :items="currentPageItems"
                            key-attribute="id"
                            ${this.selectable}
                        >
                            <template #default="{ item }">
                                <h6>{{ item.name }} ({{item.id}})</h6>
                            </template>
                            ${this.screenreaderTemplate}
                        </f-list>
                        ${this.footerPaginator}
                    </template>
                </f-paginate-dataset>
            `
      );
    }
  }
});
var _hoisted_1 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_numeric_text_field = _resolveComponent("f-numeric-text-field");
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livedata: _ctx.livedata,
    livemethods: _ctx.livemethods
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_numeric_text_field, {
        modelValue: _ctx.numberOfItemsPerPage,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.numberOfItemsPerPage = $event)
      }, {
        default: _withCtx(() => [..._cache[6] || (_cache[6] = [
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
        name: "alternatives",
        "show-details": "when-selected"
      }, {
        label: _withCtx(() => [..._cache[7] || (_cache[7] = [
          _createTextVNode(
            "Alternativ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.showInteractiveListWithCheckboxes,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.showInteractiveListWithCheckboxes = $event),
            value: true
          }, {
            details: _withCtx(() => [..._cache[8] || (_cache[8] = [
              _createTextVNode(
                " St\xF6der paginering med ",
                -1
                /* CACHED */
              ),
              _createElementVNode(
                "kbd",
                null,
                "Page Up",
                -1
                /* CACHED */
              ),
              _createTextVNode(
                " och ",
                -1
                /* CACHED */
              ),
              _createElementVNode(
                "kbd",
                null,
                "Page Down",
                -1
                /* CACHED */
              ),
              _createTextVNode(
                ". ",
                -1
                /* CACHED */
              )
            ])]),
            default: _withCtx(() => [
              _cache[9] || (_cache[9] = _createTextVNode(
                " Visa interaktiv lista med kryssrutor ",
                -1
                /* CACHED */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.fetchDataDynamically,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.fetchDataDynamically = $event),
            value: true
          }, {
            details: _withCtx(() => [..._cache[10] || (_cache[10] = [
              _createTextVNode(
                "Sker med f\xF6rdr\xF6jning om 3 sekunder.",
                -1
                /* CACHED */
              )
            ])]),
            default: _withCtx(() => [
              _cache[11] || (_cache[11] = _createTextVNode(
                " H\xE4mta data dynamiskt ",
                -1
                /* CACHED */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.showPaginatorInHeader,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.showPaginatorInHeader = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[12] || (_cache[12] = [
              _createTextVNode(
                " Visa paginator i sidhuvud ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.showPaginatorInFooter,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.showPaginatorInFooter = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[13] || (_cache[13] = [
              _createTextVNode(
                " Visa paginator i sidfot ",
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
      _createVNode(_component_f_select_field, {
        id: "numberOfPages",
        modelValue: _ctx.numberOfPagesToShowAtMost,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.numberOfPagesToShowAtMost = $event)
      }, {
        label: _withCtx(() => [..._cache[14] || (_cache[14] = [
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
          _cache[15] || (_cache[15] = _createElementVNode(
            "option",
            { value: null },
            "Standardv\xE4rde",
            -1
            /* CACHED */
          )),
          (_openBlock(true), _createElementBlock(
            _Fragment,
            null,
            _renderList(_ctx.numberOfPagesOptions, (option) => {
              return _openBlock(), _createElementBlock("option", {
                key: option,
                value: option
              }, _toDisplayString(option), 9, _hoisted_1);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["components", "template", "livedata", "livemethods"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-30ba4d"
});
export {
  render
};
