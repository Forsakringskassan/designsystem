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

// virtual-entry:virtual:packages/vue/src/design-component-tests/Pagination/examples/PaginationExample.vue:PaginationExample-186ecc.js
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
  { id: 1, firstName: "Anabel", lastName: "Kolakovic" },
  { id: 2, firstName: "Karlotte", lastName: "Faich" },
  { id: 3, firstName: "John", lastName: "Rattery" },
  { id: 4, firstName: "Lexie", lastName: "Sudy" },
  { id: 5, firstName: "Alisha", lastName: "Djekic" },
  { id: 6, firstName: "Carmita", lastName: "Skurray" },
  { id: 7, firstName: "Analiese", lastName: "Cairney" },
  { id: 8, firstName: "Adriane", lastName: "McPhate" },
  { id: 9, firstName: "Sigrid", lastName: "Ottewell" },
  { id: 10, firstName: "Dolf", lastName: "Buttrey" },
  { id: 11, firstName: "Giulietta", lastName: "Wiltshire" },
  { id: 12, firstName: "Briant", lastName: "Zuker" },
  { id: 13, firstName: "Christye", lastName: "Leadley" },
  { id: 14, firstName: "Haley", lastName: "Finlay" },
  { id: 15, firstName: "Joly", lastName: "Sidworth" },
  { id: 16, firstName: "Eugenia", lastName: "Altofts" },
  { id: 17, firstName: "Tandie", lastName: "Goldingay" },
  { id: 18, firstName: "Julianna", lastName: "Iacovini" },
  { id: 19, firstName: "Cariotta", lastName: "Tames" },
  { id: 20, firstName: "Hildegarde", lastName: "Smickle" },
  { id: 21, firstName: "Sherlocke", lastName: "Bowller" },
  { id: 22, firstName: "Cletis", lastName: "Brandassi" },
  { id: 23, firstName: "Coreen", lastName: "Dealey" },
  { id: 24, firstName: "Sunshine", lastName: "Scotsbrook" },
  { id: 25, firstName: "Brigitta", lastName: "Foynes" },
  { id: 26, firstName: "Packston", lastName: "Thrustle" },
  { id: 27, firstName: "Sidnee", lastName: "Kerwick" },
  { id: 28, firstName: "Genevra", lastName: "Dank" },
  { id: 29, firstName: "Angelo", lastName: "Byforth" },
  { id: 30, firstName: "Maria", lastName: "Covotti" },
  { id: 31, firstName: "Julieta", lastName: "Ashworth" },
  { id: 32, firstName: "Pauli", lastName: "Anster" },
  { id: 33, firstName: "Gregor", lastName: "Skoof" },
  { id: 34, firstName: "Joete", lastName: "Tupper" },
  { id: 35, firstName: "Rene", lastName: "Dmitrienko" },
  { id: 36, firstName: "Elysha", lastName: "Jervis" },
  { id: 37, firstName: "Maisie", lastName: "Hethron" },
  { id: 38, firstName: "Garrek", lastName: "Fenning" },
  { id: 39, firstName: "Tyler", lastName: "Lidstone" },
  { id: 40, firstName: "Lisha", lastName: "Sillars" },
  { id: 41, firstName: "Tamarah", lastName: "Blase" },
  { id: 42, firstName: "Charin", lastName: "Wheowall" },
  { id: 43, firstName: "Nadya", lastName: "Applin" },
  { id: 44, firstName: "Myron", lastName: "Lamping" },
  { id: 45, firstName: "Betty", lastName: "Mullins" },
  { id: 46, firstName: "Calv", lastName: "Renahan" },
  { id: 47, firstName: "Butch", lastName: "O'Donovan" },
  { id: 48, firstName: "Germaine", lastName: "Anney" },
  { id: 49, firstName: "Corbett", lastName: "Olczyk" },
  { id: 50, firstName: "Lauretta", lastName: "Lere" },
  { id: 51, firstName: "Jacquenetta", lastName: "Vasse" },
  { id: 52, firstName: "Lily", lastName: "Startin" },
  { id: 53, firstName: "Piotr", lastName: "Dodshun" },
  { id: 54, firstName: "Peri", lastName: "Burchfield" },
  { id: 55, firstName: "Codi", lastName: "Sans" },
  { id: 56, firstName: "Dell", lastName: "Guion" },
  { id: 57, firstName: "Junia", lastName: "Cowe" },
  { id: 58, firstName: "Abie", lastName: "Decroix" },
  { id: 59, firstName: "Tomaso", lastName: "Muspratt" },
  { id: 60, firstName: "Parke", lastName: "Jeffry" },
  { id: 61, firstName: "Christy", lastName: "Mulhall" },
  { id: 62, firstName: "Yanaton", lastName: "Derx" },
  { id: 63, firstName: "Jackelyn", lastName: "Newbigging" },
  { id: 64, firstName: "Claire", lastName: "Birtchnell" },
  { id: 65, firstName: "Meaghan", lastName: "Kevane" },
  { id: 66, firstName: "Rozelle", lastName: "Broun" },
  { id: 67, firstName: "Franky", lastName: "Peppard" },
  { id: 68, firstName: "Micheline", lastName: "Swiffin" },
  { id: 69, firstName: "Norby", lastName: "Carbry" },
  { id: 70, firstName: "Derrik", lastName: "Dalla" },
  { id: 71, firstName: "Mikey", lastName: "Knee" },
  { id: 72, firstName: "Carlie", lastName: "Linham" },
  { id: 73, firstName: "Teddi", lastName: "Wilsee" },
  { id: 74, firstName: "Othella", lastName: "Abramzon" },
  { id: 75, firstName: "Merline", lastName: "Patmore" },
  { id: 76, firstName: "Amitie", lastName: "Herety" },
  { id: 77, firstName: "Yuri", lastName: "Siemandl" },
  { id: 78, firstName: "Margo", lastName: "Buston" },
  { id: 79, firstName: "Linoel", lastName: "Smelley" },
  { id: 80, firstName: "Cyril", lastName: "Meek" },
  { id: 81, firstName: "Leupold", lastName: "Nolot" },
  { id: 82, firstName: "Tades", lastName: "Chedgey" },
  { id: 83, firstName: "Winnah", lastName: "Freeborn" },
  { id: 84, firstName: "Jacklyn", lastName: "Kingham" },
  { id: 85, firstName: "Amandy", lastName: "Filipowicz" },
  { id: 86, firstName: "Adela", lastName: "Dukelow" },
  { id: 87, firstName: "Phip", lastName: "Dorling" },
  { id: 88, firstName: "Marris", lastName: "Mathouse" },
  { id: 89, firstName: "Kaylee", lastName: "Squibbs" },
  { id: 90, firstName: "Pierette", lastName: "Mugg" },
  { id: 91, firstName: "Raymund", lastName: "Desorts" },
  { id: 92, firstName: "Cymbre", lastName: "Wilsey" },
  { id: 93, firstName: "Hughie", lastName: "Dolley" },
  { id: 94, firstName: "Flory", lastName: "Shreeve" },
  { id: 95, firstName: "Norrie", lastName: "Antonio" },
  { id: 96, firstName: "Eustace", lastName: "Marunchak" },
  { id: 97, firstName: "Andie", lastName: "Hadfield" },
  { id: 98, firstName: "Doretta", lastName: "Fryett" },
  { id: 99, firstName: "Harlan", lastName: "Longfellow" },
  { id: 100, firstName: "Jeni", lastName: "Gummie" }
];

// virtual-entry:virtual:packages/vue/src/design-component-tests/Pagination/examples/PaginationExample.vue:PaginationExample-186ecc.js
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
                      Person {{ item.firstName }} {{ item.lastName }} ({{item.id}})
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
                                <h6>{{ item.firstName }} {{ item.lastName }} ({{item.id}})</h6>
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
  selector: "#example-186ecc"
});
export {
  render
};
