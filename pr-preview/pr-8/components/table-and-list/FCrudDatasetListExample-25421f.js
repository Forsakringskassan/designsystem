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

  // virtual-entry:./packages/vue/src/components/FCrudDataset/examples/FCrudDatasetListExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");

  // packages/vue/src/components/FCrudDataset/examples/fruit-data.ts
  var fruits = [
    {
      id: "1",
      name: "\xC4pple",
      origin: "Sverige",
      description: "Rund, ofta r\xF6d eller gr\xF6n frukt med s\xF6t eller syrlig smak."
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

  // virtual-entry:./packages/vue/src/components/FCrudDataset/examples/FCrudDatasetListExample.vue
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    components: {
      FCrudDataset: import_vue4.FCrudDataset,
      FCrudButton: import_vue4.FCrudButton,
      FList: import_vue4.FList,
      FStaticField: import_vue4.FStaticField,
      FTextField: import_vue4.FTextField,
      FTextareaField: import_vue4.FTextareaField
    },
    data() {
      return {
        fruits
      };
    },
    methods: {
      // Förpopulera ett objekt med värden
      beforeCreate() {
        const fruit = {
          id: String(this.getMaxId() + 1),
          name: "",
          origin: "",
          description: ""
        };
        return fruit;
      },
      getMaxId() {
        return this.fruits.reduce((max, item) => {
          return Math.max(max, parseInt(item.id, 10));
        }, 0);
      },
      saveModel(row) {
        console.log("Post model to backend", row);
      }
    }
  });
  var _hoisted_1 = { class: "row" };
  var _hoisted_2 = { class: "col col--md-7" };
  var _hoisted_3 = { class: "col col--md-5" };
  var _hoisted_4 = { class: "button-list" };
  function render(_ctx, _cache) {
    const _component_f_crud_button = (0, import_vue5.resolveComponent)("f-crud-button");
    const _component_f_list = (0, import_vue5.resolveComponent)("f-list");
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _component_f_textarea_field = (0, import_vue5.resolveComponent)("f-textarea-field");
    const _component_f_static_field = (0, import_vue5.resolveComponent)("f-static-field");
    const _component_f_crud_dataset = (0, import_vue5.resolveComponent)("f-crud-dataset");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_crud_dataset, {
      modelValue: _ctx.fruits,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.fruits = $event),
      "data-test": "f-crud-dataset-list-example",
      "before-create": _ctx.beforeCreate,
      onCreated: _ctx.saveModel,
      onUpdated: _ctx.saveModel,
      onDeleted: _ctx.saveModel
    }, {
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_list, {
          items: _ctx.fruits,
          "element-id": "example",
          "key-attribute": "id",
          selectable: ""
        }, {
          default: (0, import_vue5.withCtx)(({ item }) => [
            (0, import_vue5.createElementVNode)(
              "h3",
              null,
              (0, import_vue5.toDisplayString)(item.name),
              1
              /* TEXT */
            ),
            _cache[9] || (_cache[9] = (0, import_vue5.createTextVNode)()),
            (0, import_vue5.createElementVNode)("div", _hoisted_1, [
              (0, import_vue5.createElementVNode)("div", _hoisted_2, [
                (0, import_vue5.createElementVNode)("p", null, [
                  _cache[1] || (_cache[1] = (0, import_vue5.createTextVNode)("\n                                Land:\n                                ")),
                  (0, import_vue5.createElementVNode)(
                    "em",
                    null,
                    (0, import_vue5.toDisplayString)(item.origin),
                    1
                    /* TEXT */
                  ),
                  _cache[2] || (_cache[2] = (0, import_vue5.createTextVNode)()),
                  _cache[3] || (_cache[3] = (0, import_vue5.createElementVNode)(
                    "br",
                    null,
                    null,
                    -1
                    /* HOISTED */
                  )),
                  _cache[4] || (_cache[4] = (0, import_vue5.createTextVNode)("\n                                Beskrivning:\n                                ")),
                  (0, import_vue5.createElementVNode)(
                    "em",
                    null,
                    (0, import_vue5.toDisplayString)(item.description),
                    1
                    /* TEXT */
                  ),
                  _cache[5] || (_cache[5] = (0, import_vue5.createTextVNode)()),
                  _cache[6] || (_cache[6] = (0, import_vue5.createElementVNode)(
                    "br",
                    null,
                    null,
                    -1
                    /* HOISTED */
                  ))
                ])
              ]),
              _cache[8] || (_cache[8] = (0, import_vue5.createTextVNode)()),
              (0, import_vue5.createElementVNode)("div", _hoisted_3, [
                (0, import_vue5.createElementVNode)("ul", _hoisted_4, [
                  (0, import_vue5.createElementVNode)("li", null, [
                    (0, import_vue5.createVNode)(_component_f_crud_button, {
                      action: "modify",
                      item,
                      icon: "",
                      label: ""
                    }, null, 8, ["item"])
                  ]),
                  _cache[7] || (_cache[7] = (0, import_vue5.createTextVNode)()),
                  (0, import_vue5.createElementVNode)("li", null, [
                    (0, import_vue5.createVNode)(_component_f_crud_button, {
                      action: "delete",
                      item,
                      icon: "",
                      label: ""
                    }, null, 8, ["item"])
                  ])
                ])
              ])
            ])
          ]),
          screenreader: (0, import_vue5.withCtx)(({ item }) => [
            (0, import_vue5.createTextVNode)(
              " Frukt ID " + (0, import_vue5.toDisplayString)(item.id),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["items"])
      ]),
      add: (0, import_vue5.withCtx)(({ item }) => [
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
          modelValue: item.name,
          "onUpdate:modelValue": ($event) => item.name = $event,
          type: "text"
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[11] || (_cache[11] = [
            (0, import_vue5.createTextVNode)("\n                Namn\n            ")
          ])),
          _: 2
          /* DYNAMIC */
        }, 1032, ["modelValue", "onUpdate:modelValue"])), [
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
        _cache[14] || (_cache[14] = (0, import_vue5.createTextVNode)()),
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
          modelValue: item.origin,
          "onUpdate:modelValue": ($event) => item.origin = $event,
          type: "text"
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[12] || (_cache[12] = [
            (0, import_vue5.createTextVNode)("\n                Land\n            ")
          ])),
          _: 2
          /* DYNAMIC */
        }, 1032, ["modelValue", "onUpdate:modelValue"])), [
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
        _cache[15] || (_cache[15] = (0, import_vue5.createTextVNode)()),
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_textarea_field, {
          modelValue: item.description,
          "onUpdate:modelValue": ($event) => item.description = $event
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[13] || (_cache[13] = [
            (0, import_vue5.createTextVNode)("\n                Beskrivning\n            ")
          ])),
          _: 2
          /* DYNAMIC */
        }, 1032, ["modelValue", "onUpdate:modelValue"])), [
          [
            _directive_validation,
            void 0,
            void 0,
            { required: true }
          ]
        ])
      ]),
      modify: (0, import_vue5.withCtx)(({ item }) => [
        (0, import_vue5.createVNode)(_component_f_static_field, {
          modelValue: item.name,
          "onUpdate:modelValue": ($event) => item.name = $event,
          type: "text"
        }, {
          label: (0, import_vue5.withCtx)(() => _cache[16] || (_cache[16] = [
            (0, import_vue5.createTextVNode)(" Namn ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(
              (0, import_vue5.toDisplayString)(item.name),
              1
              /* TEXT */
            )
          ]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["modelValue", "onUpdate:modelValue"]),
        _cache[19] || (_cache[19] = (0, import_vue5.createTextVNode)()),
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_textarea_field, {
          modelValue: item.origin,
          "onUpdate:modelValue": ($event) => item.origin = $event,
          type: "text"
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[18] || (_cache[18] = [
            (0, import_vue5.createTextVNode)("\n                Land\n            ")
          ])),
          _: 2
          /* DYNAMIC */
        }, 1032, ["modelValue", "onUpdate:modelValue"])), [
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
      delete: (0, import_vue5.withCtx)(({ item }) => [
        (0, import_vue5.createTextVNode)(
          '\n            Vill du verkligen radera frukten "' + (0, import_vue5.toDisplayString)(item.name) + '" med ID ' + (0, import_vue5.toDisplayString)(item.id),
          1
          /* TEXT */
        )
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "before-create", "onCreated", "onUpdated", "onDeleted"]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FCrudDatasetListExample"
  });
})();