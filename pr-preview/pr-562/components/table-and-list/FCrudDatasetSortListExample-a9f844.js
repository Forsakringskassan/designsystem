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

// virtual-entry:virtual:packages/vue/src/components/FCrudDataset/examples/FCrudDatasetSortListExample.vue:FCrudDatasetSortListExample-a9f844.js
import { defineComponent } from "vue";
import {
  FCrudDataset,
  FIcon,
  FList,
  FSortFilterDataset,
  FStaticField,
  FTextField,
  FTextareaField
} from "@fkui/vue";

// packages/vue/src/components/FCrudDataset/examples/fruit-data.ts
var fruits = [
  {
    id: "1",
    name: "\xC4pple",
    origin: "Sverige",
    description: "Rund, ofta r\xF6d eller gr\xF6n frukt med s\xF6t eller syrlig smak.",
    variant: [
      {
        id: "1a",
        name: "Discovery",
        origin: "Sverige",
        description: "R\xF6tt och gulgr\xF6nt \xE4pple. Krispig och smakrik."
      },
      {
        id: "1b",
        name: "Ingrid Marie",
        origin: "Sverige",
        description: "M\xF6rkr\xF6tt \xE4pple. Saftig och s\xF6tsyrlig."
      }
    ]
  },
  {
    id: "2",
    name: "Banan",
    origin: "Colombia",
    description: "L\xE5ng, gul frukt med mjukt och s\xF6tt fruktk\xF6tt."
  },
  {
    id: "3",
    name: "Vattenmelon",
    origin: "Spanien",
    description: "Stor, rund frukt med gr\xF6nt skal och saftigt, r\xF6tt fruktk\xF6tt."
  },
  {
    id: "4",
    name: "Grapefrukt",
    origin: "Turkiet",
    description: "Stor, rund citrusfrukt med tjockt skal och saftig, syrlig smak."
  }
];

// virtual-entry:virtual:packages/vue/src/components/FCrudDataset/examples/FCrudDatasetSortListExample.vue:FCrudDatasetSortListExample-a9f844.js
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, resolveDirective as _resolveDirective, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives } from "vue";
var exampleComponent = defineComponent({
  components: {
    FCrudDataset,
    FIcon,
    FList,
    FSortFilterDataset,
    FStaticField,
    FTextField,
    FTextareaField
  },
  data() {
    return {
      fruits
    };
  },
  methods: {
    // Förpopulera ett objekt med värden
    beforeCreate() {
      return {
        id: String(this.getMaxId() + 1),
        name: "",
        origin: "",
        description: ""
      };
    },
    getMaxId() {
      return this.fruits.reduce((max, item) => {
        return Math.max(max, parseInt(item.id, 10));
      }, 0);
    }
  }
});
var _hoisted_1 = { class: "row" };
var _hoisted_2 = { class: "col col--lg-10" };
var _hoisted_3 = { class: "col col--sm-1" };
var _hoisted_4 = ["onClick"];
var _hoisted_5 = { class: "col col--sm-1" };
var _hoisted_6 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = _resolveComponent("f-icon");
  const _component_f_list = _resolveComponent("f-list");
  const _component_f_sort_filter_dataset = _resolveComponent("f-sort-filter-dataset");
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_f_textarea_field = _resolveComponent("f-textarea-field");
  const _component_f_static_field = _resolveComponent("f-static-field");
  const _component_f_crud_dataset = _resolveComponent("f-crud-dataset");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createBlock(_component_f_crud_dataset, {
    modelValue: _ctx.fruits,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.fruits = $event),
    "before-create": _ctx.beforeCreate
  }, {
    default: _withCtx(({ updateItem, deleteItem }) => [
      _createVNode(_component_f_sort_filter_dataset, {
        data: _ctx.fruits,
        "sortable-attributes": {
          name: "Namn",
          origin: "Land"
        }
      }, {
        default: _withCtx(({ sortFilterResult }) => [
          _createVNode(_component_f_list, {
            items: sortFilterResult,
            "key-attribute": "id"
          }, {
            default: _withCtx(({ item }) => [
              _createElementVNode(
                "h3",
                null,
                _toDisplayString(item.name),
                1
                /* TEXT */
              ),
              _createElementVNode("div", _hoisted_1, [
                _createElementVNode("div", _hoisted_2, [
                  _cache[1] || (_cache[1] = _createTextVNode(
                    " Land: ",
                    -1
                    /* CACHED */
                  )),
                  _createElementVNode(
                    "em",
                    null,
                    _toDisplayString(item.origin),
                    1
                    /* TEXT */
                  ),
                  _cache[2] || (_cache[2] = _createElementVNode(
                    "br",
                    null,
                    null,
                    -1
                    /* CACHED */
                  )),
                  _cache[3] || (_cache[3] = _createTextVNode(
                    " Beskrivning: ",
                    -1
                    /* CACHED */
                  )),
                  _createElementVNode(
                    "em",
                    null,
                    _toDisplayString(item.description),
                    1
                    /* TEXT */
                  ),
                  _cache[4] || (_cache[4] = _createElementVNode(
                    "br",
                    null,
                    null,
                    -1
                    /* CACHED */
                  ))
                ]),
                _createElementVNode("div", _hoisted_3, [
                  _createElementVNode("button", {
                    type: "button",
                    class: "button button--small button--tertiary",
                    onClick: ($event) => updateItem(item)
                  }, [
                    _createVNode(
                      _component_f_icon,
                      {
                        class: "button__icon",
                        name: "pen"
                      },
                      {
                        default: _withCtx(() => [
                          _createElementVNode(
                            "title",
                            null,
                            "\xC4ndra " + _toDisplayString(item.name),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    )
                  ], 8, _hoisted_4)
                ]),
                _createElementVNode("div", _hoisted_5, [
                  _createElementVNode("button", {
                    type: "button",
                    class: "button button--small button--tertiary",
                    onClick: ($event) => deleteItem(item)
                  }, [
                    _createVNode(
                      _component_f_icon,
                      {
                        class: "button__icon",
                        name: "trashcan"
                      },
                      {
                        default: _withCtx(() => [
                          _createElementVNode(
                            "title",
                            null,
                            "Ta bort " + _toDisplayString(item.name),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    )
                  ], 8, _hoisted_6)
                ])
              ])
            ]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["items"])
        ]),
        _: 2
        /* DYNAMIC */
      }, 1032, ["data"])
    ]),
    add: _withCtx(({ item }) => [
      _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
        modelValue: item.name,
        "onUpdate:modelValue": ($event) => item.name = $event,
        type: "text"
      }, {
        default: _withCtx(() => [..._cache[5] || (_cache[5] = [
          _createTextVNode(
            " Namn ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "onUpdate:modelValue"])), [
        [
          _directive_validation,
          { maxLength: { length: 32 } },
          void 0,
          {
            required: true,
            maxLength: true
          }
        ]
      ]),
      _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
        modelValue: item.origin,
        "onUpdate:modelValue": ($event) => item.origin = $event,
        type: "text"
      }, {
        default: _withCtx(() => [..._cache[6] || (_cache[6] = [
          _createTextVNode(
            " Land ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "onUpdate:modelValue"])), [
        [
          _directive_validation,
          { maxLength: { length: 32 } },
          void 0,
          {
            required: true,
            maxLength: true
          }
        ]
      ]),
      _withDirectives((_openBlock(), _createBlock(_component_f_textarea_field, {
        modelValue: item.description,
        "onUpdate:modelValue": ($event) => item.description = $event
      }, {
        default: _withCtx(() => [..._cache[7] || (_cache[7] = [
          _createTextVNode(
            " Beskrivning ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "onUpdate:modelValue"])), [
        [
          _directive_validation,
          void 0,
          void 0,
          { required: true }
        ]
      ])
    ]),
    modify: _withCtx(({ item }) => [
      _createVNode(_component_f_static_field, {
        modelValue: item.name,
        "onUpdate:modelValue": ($event) => item.name = $event,
        type: "text"
      }, {
        label: _withCtx(() => [..._cache[8] || (_cache[8] = [
          _createTextVNode(
            " Namn ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createTextVNode(
            _toDisplayString(item.name),
            1
            /* TEXT */
          )
        ]),
        _: 2
        /* DYNAMIC */
      }, 1032, ["modelValue", "onUpdate:modelValue"]),
      _withDirectives((_openBlock(), _createBlock(_component_f_textarea_field, {
        modelValue: item.origin,
        "onUpdate:modelValue": ($event) => item.origin = $event,
        type: "text"
      }, {
        default: _withCtx(() => [..._cache[9] || (_cache[9] = [
          _createTextVNode(
            " Land ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "onUpdate:modelValue"])), [
        [
          _directive_validation,
          { maxLength: { length: 32 } },
          void 0,
          {
            required: true,
            maxLength: true
          }
        ]
      ])
    ]),
    delete: _withCtx(({ item }) => [
      _createTextVNode(
        ' Vill du verkligen ta bort frukten "' + _toDisplayString(item.name) + '" med ID ' + _toDisplayString(item.id),
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue", "before-create"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-a9f844"
});
export {
  render
};
