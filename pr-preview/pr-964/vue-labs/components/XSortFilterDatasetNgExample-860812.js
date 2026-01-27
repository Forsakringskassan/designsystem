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

// virtual-entry:virtual:src/components/XSortFilterDatasetNg/examples/XSortFilterDatasetNgExample.vue:XSortFilterDatasetNgExample-860812.js
import { defineComponent as _defineComponent } from "vue";
import { computed, ref, useTemplateRef } from "vue";
import {
  FCheckboxField,
  FFieldset,
  FSelectField,
  FTextField,
  findHTMLElementFromVueRef
} from "@fkui/vue";
import { XSortFilterDatasetNg, matchPropertyValue, uniqueValues } from "@fkui/vue-labs";

// src/components/XSortFilterDatasetNg/examples/fruit-data.ts
var fruits = [
  {
    id: "1",
    name: "\xC4pple",
    origin: "Sverige",
    description: "Rund, ofta r\xF6d eller gr\xF6n frukt med s\xF6t eller syrlig smak."
  },
  {
    id: "2",
    name: "Jordgubbe",
    origin: "Sverige",
    description: "En liten, r\xF6d b\xE4rfrukt med s\xF6t smak och sm\xE5 fr\xF6n p\xE5 ytan."
  },
  {
    id: "3",
    name: "Banan",
    origin: "Colombia",
    description: "L\xE5ng, gul frukt med mjukt och s\xF6tt fruktk\xF6tt."
  },
  {
    id: "4",
    name: "Vattenmelon",
    origin: "Spanien",
    description: "Stor, rund frukt med gr\xF6nt skal och saftigt, r\xF6tt fruktk\xF6tt."
  },
  {
    id: "5",
    name: "Grapefrukt",
    origin: "Turkiet",
    description: "Stor, rund citrusfrukt med tjockt skal och saftig, syrlig smak."
  }
];

// virtual-entry:virtual:src/components/XSortFilterDatasetNg/examples/XSortFilterDatasetNgExample.vue:XSortFilterDatasetNgExample-860812.js
import { createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, toDisplayString as _toDisplayString } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "XSortFilterDatasetNgExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const searchRef = useTemplateRef("search");
    const actualElement = computed(() => {
      const searchEl = findHTMLElementFromVueRef(searchRef);
      return searchEl ? searchEl.querySelector("input") : null;
    });
    const flag = ref(true);
    const country = ref(null);
    const availableCountries = uniqueValues(fruits, "origin");
    const matchCountry = matchPropertyValue("origin");
    function filter(value) {
      const searchTerm = actualElement.value?.value.toLowerCase();
      return value.filter((it) => {
        if (flag.value && it.name === "Banan") {
          return false;
        }
        if (!matchCountry(it, country.value)) {
          return false;
        }
        if (searchTerm) {
          const name = it.name.toLowerCase();
          const description = it.description.toLowerCase();
          return name.includes(searchTerm) || description.includes(searchTerm);
        }
        return true;
      });
    }
    const __returned__ = { searchRef, actualElement, flag, country, availableCountries, matchCountry, filter, get FCheckboxField() {
      return FCheckboxField;
    }, get FFieldset() {
      return FFieldset;
    }, get FSelectField() {
      return FSelectField;
    }, get FTextField() {
      return FTextField;
    }, get XSortFilterDatasetNg() {
      return XSortFilterDatasetNg;
    }, get fruits() {
      return fruits;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { class: "filters" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _cache[7] || (_cache[7] = _createElementVNode(
        "h2",
        { id: "frukter" },
        "Frukter",
        -1
        /* CACHED */
      )),
      _createVNode($setup["XSortFilterDatasetNg"], {
        data: $setup.fruits,
        filter: $setup.filter
      }, {
        filter: _withCtx(({ update }) => [
          _createElementVNode("div", _hoisted_1, [
            _createVNode(
              $setup["FFieldset"],
              null,
              {
                label: _withCtx(() => [..._cache[2] || (_cache[2] = [
                  _createTextVNode(
                    " Inst\xE4llningar ",
                    -1
                    /* CACHED */
                  )
                ])]),
                default: _withCtx(() => [
                  _createVNode($setup["FCheckboxField"], {
                    modelValue: $setup.flag,
                    "onUpdate:modelValue": [
                      _cache[0] || (_cache[0] = ($event) => $setup.flag = $event),
                      ($event) => update()
                    ],
                    value: true
                  }, {
                    default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                      _createTextVNode(
                        "Bara goda frukter",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 2
                /* DYNAMIC */
              },
              1024
              /* DYNAMIC_SLOTS */
            ),
            _createVNode($setup["FSelectField"], {
              modelValue: $setup.country,
              "onUpdate:modelValue": [
                _cache[1] || (_cache[1] = ($event) => $setup.country = $event),
                ($event) => update()
              ]
            }, {
              label: _withCtx(() => [..._cache[4] || (_cache[4] = [
                _createTextVNode(
                  "Land",
                  -1
                  /* CACHED */
                )
              ])]),
              default: _withCtx(() => [
                _cache[5] || (_cache[5] = _createElementVNode(
                  "option",
                  { value: null },
                  "-",
                  -1
                  /* CACHED */
                )),
                (_openBlock(true), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList($setup.availableCountries, (value) => {
                    return _openBlock(), _createElementBlock(
                      "option",
                      { key: value },
                      _toDisplayString(value),
                      1
                      /* TEXT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "onUpdate:modelValue"]),
            _createVNode($setup["FTextField"], {
              ref: "search",
              maxlength: "40",
              onInput: update
            }, {
              default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                _createTextVNode(
                  " S\xF6k ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["onInput"])
          ])
        ]),
        default: _withCtx(({ result }) => [
          _createElementVNode(
            "pre",
            null,
            _toDisplayString(result),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["data"])
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-860812"
});
export {
  render
};
