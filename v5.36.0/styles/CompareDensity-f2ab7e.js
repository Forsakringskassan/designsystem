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
    app.use(import_vue2.ErrorPlugin);
    app.use(import_vue2.ValidationPlugin);
    app.use(import_vue2.TestPlugin);
    app.use(import_vue2.TranslationPlugin);
    app.mount(selector);
    app.config.warnHandler = (msg, vm, trace) => {
      console.warn(`Warning:`, msg, trace);
      throw new Error(msg);
    };
  }

  // virtual-entry:./docs/styles/examples/CompareDensity.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    components: {
      FTextField: import_vue4.FTextField,
      FTextareaField: import_vue4.FTextareaField,
      FSelectField: import_vue4.FSelectField,
      FDatepickerField: import_vue4.FDatepickerField,
      FFieldset: import_vue4.FFieldset,
      FCheckboxField: import_vue4.FCheckboxField,
      FRadioField: import_vue4.FRadioField,
      FDataTable: import_vue4.FDataTable,
      FTableColumn: import_vue4.FTableColumn,
      FList: import_vue4.FList,
      FCard: import_vue4.FCard,
      FBadge: import_vue4.FBadge,
      FExpandableParagraph: import_vue4.FExpandableParagraph,
      FExpandablePanel: import_vue4.FExpandablePanel,
      FMessageBox: import_vue4.FMessageBox,
      FTooltip: import_vue4.FTooltip,
      FIcon: import_vue4.FIcon,
      FStaticField: import_vue4.FStaticField
    },
    data() {
      return {
        components: [],
        densityLeft: "density-default",
        densityRight: "density-dense",
        textField: "Text",
        textAreaField: [1, 2, 3, 4].map((it) => `Rad ${it}`).join("\n"),
        selectField: "Text",
        datepickerField: "2024-01-01",
        checkboxField: [],
        radioField: "",
        dataTableRows: ["1", "2", "3"].map((id) => ({ id })),
        dataTableColumns: ["1", "2", "3"].map((id) => ({ id })),
        listItems: ["1", "2", "3"].map((id) => ({ id })),
        listSelectedItems: []
      };
    },
    computed: {
      densities() {
        return [this.densityLeft, this.densityRight].map((it) => ({ class: it }));
      }
    }
  });
  var _hoisted_1 = { class: "container-fluid" };
  var _hoisted_2 = { class: "row" };
  var _hoisted_3 = { class: "col col--sm-6" };
  var _hoisted_4 = { class: "col col--sm-6" };
  var _hoisted_5 = { class: "row" };
  var _hoisted_6 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "div",
    { class: "tooltip-before" },
    [
      /* @__PURE__ */ (0, import_vue5.createElementVNode)("label", { class: "label tooltip-before__label" }, " Tooltip ")
    ],
    -1
    /* HOISTED */
  );
  var _hoisted_7 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "Text" },
    "Text",
    -1
    /* HOISTED */
  );
  var _hoisted_8 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "Text2" },
    "Text 2",
    -1
    /* HOISTED */
  );
  var _hoisted_9 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "Text3" },
    "Text 3",
    -1
    /* HOISTED */
  );
  var _hoisted_10 = { class: "button-group" };
  var _hoisted_11 = {
    class: "button button-group__item button--tertiary button--medium button--align-text",
    type: "button"
  };
  var _hoisted_12 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "span",
    null,
    " \xC4ndra ",
    -1
    /* HOISTED */
  );
  var _hoisted_13 = {
    class: "button button-group__item button--tertiary button--medium button--align-text",
    type: "button"
  };
  var _hoisted_14 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "span",
    null,
    " Ta bort ",
    -1
    /* HOISTED */
  );
  var _hoisted_15 = { class: "button-group" };
  var _hoisted_16 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "button",
    {
      class: "button button--primary button--medium button-group__item",
      type: "button"
    },
    "\n                        Medium\n                    ",
    -1
    /* HOISTED */
  );
  var _hoisted_17 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "button",
    {
      class: "button button--secondary button--medium button-group__item",
      type: "button"
    },
    "\n                        Medium\n                    ",
    -1
    /* HOISTED */
  );
  var _hoisted_18 = {
    class: "button button--tertiary button--medium button-group__item",
    type: "button"
  };
  var _hoisted_19 = { class: "button-group" };
  var _hoisted_20 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "button",
    {
      class: "button button--primary button--large button-group__item",
      type: "button"
    },
    "\n                        Large\n                    ",
    -1
    /* HOISTED */
  );
  var _hoisted_21 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "button",
    {
      class: "button button--secondary button--large button-group__item",
      type: "button"
    },
    "\n                        Large\n                    ",
    -1
    /* HOISTED */
  );
  var _hoisted_22 = {
    class: "button button--tertiary button--large button-group__item",
    type: "button"
  };
  var _hoisted_23 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "p",
    null,
    "Br\xF6dtext",
    -1
    /* HOISTED */
  );
  function render(_ctx, _cache) {
    const _component_f_radio_field = (0, import_vue5.resolveComponent)("f-radio-field");
    const _component_f_fieldset = (0, import_vue5.resolveComponent)("f-fieldset");
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _component_f_tooltip = (0, import_vue5.resolveComponent)("f-tooltip");
    const _component_f_static_field = (0, import_vue5.resolveComponent)("f-static-field");
    const _component_f_textarea_field = (0, import_vue5.resolveComponent)("f-textarea-field");
    const _component_f_select_field = (0, import_vue5.resolveComponent)("f-select-field");
    const _component_f_datepicker_field = (0, import_vue5.resolveComponent)("f-datepicker-field");
    const _component_f_checkbox_field = (0, import_vue5.resolveComponent)("f-checkbox-field");
    const _component_f_table_column = (0, import_vue5.resolveComponent)("f-table-column");
    const _component_f_data_table = (0, import_vue5.resolveComponent)("f-data-table");
    const _component_f_list = (0, import_vue5.resolveComponent)("f-list");
    const _component_f_icon = (0, import_vue5.resolveComponent)("f-icon");
    const _component_f_card = (0, import_vue5.resolveComponent)("f-card");
    const _component_f_badge = (0, import_vue5.resolveComponent)("f-badge");
    const _component_f_expandable_paragraph = (0, import_vue5.resolveComponent)("f-expandable-paragraph");
    const _component_f_expandable_panel = (0, import_vue5.resolveComponent)("f-expandable-panel");
    const _component_f_message_box = (0, import_vue5.resolveComponent)("f-message-box");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", _hoisted_1, [
      (0, import_vue5.createElementVNode)("div", _hoisted_2, [
        (0, import_vue5.createElementVNode)("div", _hoisted_3, [
          (0, import_vue5.createVNode)(_component_f_fieldset, {
            name: "density-left",
            chip: "",
            horizontal: ""
          }, {
            label: (0, import_vue5.withCtx)(() => [
              (0, import_vue5.createTextVNode)(" V\xE4nster ")
            ]),
            default: (0, import_vue5.withCtx)(() => [
              (0, import_vue5.createTextVNode)(),
              (0, import_vue5.createVNode)(_component_f_radio_field, {
                modelValue: _ctx.densityLeft,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.densityLeft = $event),
                value: "density-default"
              }, {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createTextVNode)("\n                        Standard\n                    ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              (0, import_vue5.createTextVNode)(),
              (0, import_vue5.createVNode)(_component_f_radio_field, {
                modelValue: _ctx.densityLeft,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.densityLeft = $event),
                value: "density-dense"
              }, {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createTextVNode)("\n                        Kompakt\n                    ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              (0, import_vue5.createTextVNode)(),
              (0, import_vue5.createVNode)(_component_f_radio_field, {
                modelValue: _ctx.densityLeft,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.densityLeft = $event),
                value: "density-densest"
              }, {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createTextVNode)("\n                        Extra kompakt\n                    ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.createElementVNode)("div", _hoisted_4, [
          (0, import_vue5.createVNode)(_component_f_fieldset, {
            name: "density-right",
            chip: "",
            horizontal: ""
          }, {
            label: (0, import_vue5.withCtx)(() => [
              (0, import_vue5.createTextVNode)(" H\xF6ger ")
            ]),
            default: (0, import_vue5.withCtx)(() => [
              (0, import_vue5.createTextVNode)(),
              (0, import_vue5.createVNode)(_component_f_radio_field, {
                modelValue: _ctx.densityRight,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.densityRight = $event),
                value: "density-default"
              }, {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createTextVNode)("\n                        Standard\n                    ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              (0, import_vue5.createTextVNode)(),
              (0, import_vue5.createVNode)(_component_f_radio_field, {
                modelValue: _ctx.densityRight,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.densityRight = $event),
                value: "density-dense"
              }, {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createTextVNode)("\n                        Kompakt\n                    ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              (0, import_vue5.createTextVNode)(),
              (0, import_vue5.createVNode)(_component_f_radio_field, {
                modelValue: _ctx.densityRight,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.densityRight = $event),
                value: "density-densest"
              }, {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createTextVNode)("\n                        Extra kompakt\n                    ")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]),
      (0, import_vue5.createTextVNode)(),
      (0, import_vue5.createElementVNode)("div", _hoisted_5, [
        ((0, import_vue5.openBlock)(true), (0, import_vue5.createElementBlock)(
          import_vue5.Fragment,
          null,
          (0, import_vue5.renderList)(_ctx.densities, (density) => {
            return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
              "div",
              {
                key: density.class,
                class: (0, import_vue5.normalizeClass)(["col col--sm-6", density.class])
              },
              [
                (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
                  modelValue: _ctx.textField,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.textField = $event),
                  maxlength: "100"
                }, {
                  default: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createTextVNode)("\n                    Inmatningsf\xE4lt\n                ")
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])), [
                  [
                    _directive_validation,
                    void 0,
                    void 0,
                    { required: true }
                  ]
                ]),
                (0, import_vue5.createTextVNode)(),
                (0, import_vue5.createVNode)(_component_f_static_field, null, {
                  label: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createTextVNode)(" Presentationsf\xE4lt - statiskt ")
                  ]),
                  tooltip: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createVNode)(_component_f_tooltip, { "screen-reader-text": "Sk\xE4rml\xE4sartext" }, {
                      header: (0, import_vue5.withCtx)(() => [
                        (0, import_vue5.createTextVNode)(" Rubrik ")
                      ]),
                      body: (0, import_vue5.withCtx)(() => [
                        (0, import_vue5.createTextVNode)(" Br\xF6dtext ")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  default: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createTextVNode)(" Text ")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue5.createTextVNode)(),
                _hoisted_6,
                (0, import_vue5.createTextVNode)(),
                (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_textarea_field, {
                  modelValue: _ctx.textAreaField,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.textAreaField = $event),
                  maxlength: 100
                }, {
                  default: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createTextVNode)("\n                    Flerradigt inmatningsf\xE4lt\n                ")
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])), [
                  [
                    _directive_validation,
                    void 0,
                    void 0,
                    { required: true }
                  ]
                ]),
                (0, import_vue5.createTextVNode)(),
                (0, import_vue5.createVNode)(_component_f_select_field, {
                  modelValue: _ctx.selectField,
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.selectField = $event)
                }, {
                  label: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createTextVNode)(" Dropplista ")
                  ]),
                  default: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createTextVNode)(),
                    _hoisted_7,
                    (0, import_vue5.createTextVNode)(),
                    _hoisted_8,
                    (0, import_vue5.createTextVNode)(),
                    _hoisted_9
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"]),
                (0, import_vue5.createTextVNode)(),
                (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_datepicker_field, {
                  modelValue: _ctx.datepickerField,
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.datepickerField = $event),
                  maxlength: "100"
                }, {
                  default: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createTextVNode)("\n                    Datumv\xE4ljare\n                ")
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])), [
                  [
                    _directive_validation,
                    void 0,
                    void 0,
                    { required: true }
                  ]
                ]),
                (0, import_vue5.createTextVNode)(),
                (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_fieldset, null, {
                  label: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createTextVNode)(" Kryssrutegrupp ")
                  ]),
                  default: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createTextVNode)(),
                    (0, import_vue5.createVNode)(_component_f_checkbox_field, {
                      modelValue: _ctx.checkboxField,
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => _ctx.checkboxField = $event),
                      value: "Kryssruta1"
                    }, {
                      default: (0, import_vue5.withCtx)(() => [
                        (0, import_vue5.createTextVNode)("\n                        Kryssruta\n                    ")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"]),
                    (0, import_vue5.createTextVNode)(),
                    (0, import_vue5.createVNode)(_component_f_checkbox_field, {
                      modelValue: _ctx.checkboxField,
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => _ctx.checkboxField = $event),
                      value: "Kryssruta2"
                    }, {
                      default: (0, import_vue5.withCtx)(() => [
                        (0, import_vue5.createTextVNode)("\n                        Kryssruta\n                    ")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"]),
                    (0, import_vue5.createTextVNode)(),
                    (0, import_vue5.createVNode)(_component_f_checkbox_field, {
                      modelValue: _ctx.checkboxField,
                      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => _ctx.checkboxField = $event),
                      value: "Kryssruta3"
                    }, {
                      default: (0, import_vue5.withCtx)(() => [
                        (0, import_vue5.createTextVNode)("\n                        Kryssruta\n                    ")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"]),
                    (0, import_vue5.createTextVNode)(),
                    (0, import_vue5.createVNode)(_component_f_checkbox_field, {
                      modelValue: _ctx.checkboxField,
                      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => _ctx.checkboxField = $event),
                      value: "Kryssruta4"
                    }, {
                      default: (0, import_vue5.withCtx)(() => [
                        (0, import_vue5.createTextVNode)("\n                        Kryssruta\n                    ")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                })), [
                  [
                    _directive_validation,
                    void 0,
                    void 0,
                    { required: true }
                  ]
                ]),
                (0, import_vue5.createTextVNode)(),
                (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_fieldset, {
                  name: `radio-${density.class}`
                }, {
                  label: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createTextVNode)(" Radioknappsgrupp ")
                  ]),
                  default: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createTextVNode)(),
                    (0, import_vue5.createVNode)(_component_f_radio_field, {
                      modelValue: _ctx.radioField,
                      "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => _ctx.radioField = $event),
                      value: "Radio1"
                    }, {
                      default: (0, import_vue5.withCtx)(() => [
                        (0, import_vue5.createTextVNode)(" Text ")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"]),
                    (0, import_vue5.createTextVNode)(),
                    (0, import_vue5.createVNode)(_component_f_radio_field, {
                      modelValue: _ctx.radioField,
                      "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => _ctx.radioField = $event),
                      value: "Radio2"
                    }, {
                      default: (0, import_vue5.withCtx)(() => [
                        (0, import_vue5.createTextVNode)(" Text ")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"]),
                    (0, import_vue5.createTextVNode)(),
                    (0, import_vue5.createVNode)(_component_f_radio_field, {
                      modelValue: _ctx.radioField,
                      "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => _ctx.radioField = $event),
                      value: "Radio3"
                    }, {
                      default: (0, import_vue5.withCtx)(() => [
                        (0, import_vue5.createTextVNode)(" Text ")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"]),
                    (0, import_vue5.createTextVNode)(),
                    (0, import_vue5.createVNode)(_component_f_radio_field, {
                      modelValue: _ctx.radioField,
                      "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => _ctx.radioField = $event),
                      value: "Radio4"
                    }, {
                      default: (0, import_vue5.withCtx)(() => [
                        (0, import_vue5.createTextVNode)(" Text ")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"])
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["name"])), [
                  [
                    _directive_validation,
                    void 0,
                    void 0,
                    { required: true }
                  ]
                ]),
                (0, import_vue5.createTextVNode)(),
                (0, import_vue5.createVNode)(_component_f_data_table, {
                  rows: _ctx.dataTableRows,
                  striped: "",
                  "key-attribute": "id"
                }, {
                  caption: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createTextVNode)(" Tabell ")
                  ]),
                  default: (0, import_vue5.withCtx)(() => [
                    ((0, import_vue5.openBlock)(true), (0, import_vue5.createElementBlock)(
                      import_vue5.Fragment,
                      null,
                      (0, import_vue5.renderList)(_ctx.dataTableColumns, (column) => {
                        return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_table_column, {
                          key: column.id,
                          name: column.id,
                          title: "Kolumnrubrik",
                          type: "text"
                        }, {
                          default: (0, import_vue5.withCtx)(() => [
                            (0, import_vue5.createTextVNode)("\n                            Text\n                        ")
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["name"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["rows"]),
                (0, import_vue5.createTextVNode)(),
                (0, import_vue5.createVNode)(_component_f_list, {
                  modelValue: _ctx.listSelectedItems,
                  "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => _ctx.listSelectedItems = $event),
                  "key-attribute": "id",
                  items: _ctx.listItems
                }, {
                  default: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createTextVNode)(" Lista ")
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue", "items"]),
                (0, import_vue5.createTextVNode)(),
                (0, import_vue5.createVNode)(_component_f_card, null, {
                  header: (0, import_vue5.withCtx)(({ headingSlotClass }) => [
                    (0, import_vue5.createElementVNode)(
                      "h3",
                      {
                        class: (0, import_vue5.normalizeClass)(headingSlotClass)
                      },
                      "Kort",
                      2
                      /* CLASS */
                    )
                  ]),
                  default: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createTextVNode)(" Inneh\xE5ll ")
                  ]),
                  footer: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createElementVNode)("div", _hoisted_10, [
                      (0, import_vue5.createElementVNode)("button", _hoisted_11, [
                        (0, import_vue5.createVNode)(_component_f_icon, { name: "pen" }),
                        (0, import_vue5.createTextVNode)(),
                        _hoisted_12
                      ]),
                      (0, import_vue5.createTextVNode)(),
                      (0, import_vue5.createElementVNode)("button", _hoisted_13, [
                        (0, import_vue5.createVNode)(_component_f_icon, { name: "trashcan" }),
                        (0, import_vue5.createTextVNode)(),
                        _hoisted_14
                      ])
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue5.createTextVNode)(),
                (0, import_vue5.createElementVNode)("div", _hoisted_15, [
                  _hoisted_16,
                  (0, import_vue5.createTextVNode)(),
                  _hoisted_17,
                  (0, import_vue5.createTextVNode)(),
                  (0, import_vue5.createElementVNode)("button", _hoisted_18, [
                    (0, import_vue5.createVNode)(_component_f_icon, {
                      name: "paper-clip",
                      class: "button__icon"
                    }),
                    (0, import_vue5.createTextVNode)(" Medium\n                    ")
                  ])
                ]),
                (0, import_vue5.createTextVNode)(),
                (0, import_vue5.createElementVNode)("div", _hoisted_19, [
                  _hoisted_20,
                  (0, import_vue5.createTextVNode)(),
                  _hoisted_21,
                  (0, import_vue5.createTextVNode)(),
                  (0, import_vue5.createElementVNode)("button", _hoisted_22, [
                    (0, import_vue5.createVNode)(_component_f_icon, {
                      name: "paper-clip",
                      class: "button__icon"
                    }),
                    (0, import_vue5.createTextVNode)(" Large\n                    ")
                  ])
                ]),
                (0, import_vue5.createTextVNode)(),
                (0, import_vue5.createVNode)(_component_f_badge, null, {
                  default: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createTextVNode)(" Bricka ")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue5.createTextVNode)(),
                (0, import_vue5.createVNode)(_component_f_badge, { status: "info" }, {
                  default: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createTextVNode)(" Bricka ")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue5.createTextVNode)(),
                (0, import_vue5.createVNode)(_component_f_expandable_paragraph, { expanded: true }, {
                  title: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createTextVNode)(" Expanderbart stycke ")
                  ]),
                  default: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createTextVNode)(" Inneh\xE5ll ")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue5.createTextVNode)(),
                (0, import_vue5.createVNode)(_component_f_expandable_panel, { expanded: true }, {
                  title: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createTextVNode)(" Expanderbar panel ")
                  ]),
                  default: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createTextVNode)(" Inneh\xE5ll ")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue5.createTextVNode)(),
                (0, import_vue5.createVNode)(_component_f_message_box, { type: "info" }, {
                  default: (0, import_vue5.withCtx)(({ headingSlotClass }) => [
                    (0, import_vue5.createElementVNode)(
                      "h2",
                      {
                        class: (0, import_vue5.normalizeClass)(headingSlotClass)
                      },
                      "Meddelanderuta",
                      2
                      /* CLASS */
                    ),
                    (0, import_vue5.createTextVNode)(),
                    _hoisted_23
                  ]),
                  _: 1
                  /* STABLE */
                })
              ],
              2
              /* CLASS */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#CompareDensity"
  });
})();
