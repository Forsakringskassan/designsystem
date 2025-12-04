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
  var _hoisted_6 = { class: "button-group" };
  var _hoisted_7 = {
    class: "button button-group__item button--tertiary button--medium button--align-text",
    type: "button"
  };
  var _hoisted_8 = {
    class: "button button-group__item button--tertiary button--medium button--align-text",
    type: "button"
  };
  var _hoisted_9 = { class: "button-group" };
  var _hoisted_10 = {
    class: "button button--tertiary button--medium button-group__item",
    type: "button"
  };
  var _hoisted_11 = { class: "button-group" };
  var _hoisted_12 = {
    class: "button button--tertiary button--large button-group__item",
    type: "button"
  };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
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
            label: (0, import_vue5.withCtx)(() => _cache[19] || (_cache[19] = [
              (0, import_vue5.createTextVNode)(" V\xE4nster ")
            ])),
            default: (0, import_vue5.withCtx)(() => [
              (0, import_vue5.createVNode)(_component_f_radio_field, {
                modelValue: _ctx.densityLeft,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.densityLeft = $event),
                value: "density-default"
              }, {
                default: (0, import_vue5.withCtx)(() => _cache[20] || (_cache[20] = [
                  (0, import_vue5.createTextVNode)(" Standard ")
                ])),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              (0, import_vue5.createVNode)(_component_f_radio_field, {
                modelValue: _ctx.densityLeft,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.densityLeft = $event),
                value: "density-dense"
              }, {
                default: (0, import_vue5.withCtx)(() => _cache[21] || (_cache[21] = [
                  (0, import_vue5.createTextVNode)(" Kompakt ")
                ])),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              (0, import_vue5.createVNode)(_component_f_radio_field, {
                modelValue: _ctx.densityLeft,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.densityLeft = $event),
                value: "density-densest"
              }, {
                default: (0, import_vue5.withCtx)(() => _cache[22] || (_cache[22] = [
                  (0, import_vue5.createTextVNode)(" Extra kompakt ")
                ])),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        (0, import_vue5.createElementVNode)("div", _hoisted_4, [
          (0, import_vue5.createVNode)(_component_f_fieldset, {
            name: "density-right",
            chip: "",
            horizontal: ""
          }, {
            label: (0, import_vue5.withCtx)(() => _cache[23] || (_cache[23] = [
              (0, import_vue5.createTextVNode)(" H\xF6ger ")
            ])),
            default: (0, import_vue5.withCtx)(() => [
              (0, import_vue5.createVNode)(_component_f_radio_field, {
                modelValue: _ctx.densityRight,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.densityRight = $event),
                value: "density-default"
              }, {
                default: (0, import_vue5.withCtx)(() => _cache[24] || (_cache[24] = [
                  (0, import_vue5.createTextVNode)(" Standard ")
                ])),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              (0, import_vue5.createVNode)(_component_f_radio_field, {
                modelValue: _ctx.densityRight,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.densityRight = $event),
                value: "density-dense"
              }, {
                default: (0, import_vue5.withCtx)(() => _cache[25] || (_cache[25] = [
                  (0, import_vue5.createTextVNode)(" Kompakt ")
                ])),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              (0, import_vue5.createVNode)(_component_f_radio_field, {
                modelValue: _ctx.densityRight,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.densityRight = $event),
                value: "density-densest"
              }, {
                default: (0, import_vue5.withCtx)(() => _cache[26] || (_cache[26] = [
                  (0, import_vue5.createTextVNode)(" Extra kompakt ")
                ])),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]),
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
                  default: (0, import_vue5.withCtx)(() => [..._cache[27] || (_cache[27] = [
                    (0, import_vue5.createTextVNode)(" Inmatningsf\xE4lt ")
                  ])]),
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
                (0, import_vue5.createVNode)(_component_f_static_field, null, {
                  label: (0, import_vue5.withCtx)(() => [..._cache[28] || (_cache[28] = [
                    (0, import_vue5.createTextVNode)(" Presentationsf\xE4lt - statiskt ")
                  ])]),
                  tooltip: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createVNode)(_component_f_tooltip, { "screen-reader-text": "Sk\xE4rml\xE4sartext" }, {
                      header: (0, import_vue5.withCtx)(() => [..._cache[29] || (_cache[29] = [
                        (0, import_vue5.createTextVNode)(" Rubrik ")
                      ])]),
                      body: (0, import_vue5.withCtx)(() => [..._cache[30] || (_cache[30] = [
                        (0, import_vue5.createTextVNode)(" Br\xF6dtext ")
                      ])]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  default: (0, import_vue5.withCtx)(() => [..._cache[31] || (_cache[31] = [
                    (0, import_vue5.createTextVNode)(" Text ")
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _cache[67] || (_cache[67] = (0, import_vue5.createElementVNode)(
                  "div",
                  { class: "tooltip-before" },
                  [
                    (0, import_vue5.createElementVNode)("label", { class: "label tooltip-before__label" }, " Tooltip ")
                  ],
                  -1
                  /* HOISTED */
                )),
                (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_textarea_field, {
                  modelValue: _ctx.textAreaField,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.textAreaField = $event),
                  maxlength: 100
                }, {
                  default: (0, import_vue5.withCtx)(() => [..._cache[32] || (_cache[32] = [
                    (0, import_vue5.createTextVNode)(" Flerradigt inmatningsf\xE4lt ")
                  ])]),
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
                (0, import_vue5.createVNode)(_component_f_select_field, {
                  modelValue: _ctx.selectField,
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.selectField = $event)
                }, {
                  label: (0, import_vue5.withCtx)(() => [..._cache[33] || (_cache[33] = [
                    (0, import_vue5.createTextVNode)(" Dropplista ")
                  ])]),
                  default: (0, import_vue5.withCtx)(() => [
                    _cache[34] || (_cache[34] = (0, import_vue5.createElementVNode)(
                      "option",
                      { value: "Text" },
                      "Text",
                      -1
                      /* HOISTED */
                    )),
                    _cache[35] || (_cache[35] = (0, import_vue5.createElementVNode)(
                      "option",
                      { value: "Text2" },
                      "Text 2",
                      -1
                      /* HOISTED */
                    )),
                    _cache[36] || (_cache[36] = (0, import_vue5.createElementVNode)(
                      "option",
                      { value: "Text3" },
                      "Text 3",
                      -1
                      /* HOISTED */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"]),
                (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_datepicker_field, {
                  modelValue: _ctx.datepickerField,
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.datepickerField = $event),
                  maxlength: "100"
                }, {
                  default: (0, import_vue5.withCtx)(() => [..._cache[37] || (_cache[37] = [
                    (0, import_vue5.createTextVNode)(" Datumv\xE4ljare ")
                  ])]),
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
                (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_fieldset, null, {
                  label: (0, import_vue5.withCtx)(() => [..._cache[38] || (_cache[38] = [
                    (0, import_vue5.createTextVNode)(" Kryssrutegrupp ")
                  ])]),
                  default: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createVNode)(_component_f_checkbox_field, {
                      modelValue: _ctx.checkboxField,
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => _ctx.checkboxField = $event),
                      value: "Kryssruta1"
                    }, {
                      default: (0, import_vue5.withCtx)(() => [..._cache[39] || (_cache[39] = [
                        (0, import_vue5.createTextVNode)(" Kryssruta ")
                      ])]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"]),
                    (0, import_vue5.createVNode)(_component_f_checkbox_field, {
                      modelValue: _ctx.checkboxField,
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => _ctx.checkboxField = $event),
                      value: "Kryssruta2"
                    }, {
                      default: (0, import_vue5.withCtx)(() => [..._cache[40] || (_cache[40] = [
                        (0, import_vue5.createTextVNode)(" Kryssruta ")
                      ])]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"]),
                    (0, import_vue5.createVNode)(_component_f_checkbox_field, {
                      modelValue: _ctx.checkboxField,
                      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => _ctx.checkboxField = $event),
                      value: "Kryssruta3"
                    }, {
                      default: (0, import_vue5.withCtx)(() => [..._cache[41] || (_cache[41] = [
                        (0, import_vue5.createTextVNode)(" Kryssruta ")
                      ])]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"]),
                    (0, import_vue5.createVNode)(_component_f_checkbox_field, {
                      modelValue: _ctx.checkboxField,
                      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => _ctx.checkboxField = $event),
                      value: "Kryssruta4"
                    }, {
                      default: (0, import_vue5.withCtx)(() => [..._cache[42] || (_cache[42] = [
                        (0, import_vue5.createTextVNode)(" Kryssruta ")
                      ])]),
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
                (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_fieldset, {
                  name: `radio-${density.class}`
                }, {
                  label: (0, import_vue5.withCtx)(() => [..._cache[43] || (_cache[43] = [
                    (0, import_vue5.createTextVNode)(" Radioknappsgrupp ")
                  ])]),
                  default: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createVNode)(_component_f_radio_field, {
                      modelValue: _ctx.radioField,
                      "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => _ctx.radioField = $event),
                      value: "Radio1"
                    }, {
                      default: (0, import_vue5.withCtx)(() => [..._cache[44] || (_cache[44] = [
                        (0, import_vue5.createTextVNode)(" Text ")
                      ])]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"]),
                    (0, import_vue5.createVNode)(_component_f_radio_field, {
                      modelValue: _ctx.radioField,
                      "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => _ctx.radioField = $event),
                      value: "Radio2"
                    }, {
                      default: (0, import_vue5.withCtx)(() => [..._cache[45] || (_cache[45] = [
                        (0, import_vue5.createTextVNode)(" Text ")
                      ])]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"]),
                    (0, import_vue5.createVNode)(_component_f_radio_field, {
                      modelValue: _ctx.radioField,
                      "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => _ctx.radioField = $event),
                      value: "Radio3"
                    }, {
                      default: (0, import_vue5.withCtx)(() => [..._cache[46] || (_cache[46] = [
                        (0, import_vue5.createTextVNode)(" Text ")
                      ])]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"]),
                    (0, import_vue5.createVNode)(_component_f_radio_field, {
                      modelValue: _ctx.radioField,
                      "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => _ctx.radioField = $event),
                      value: "Radio4"
                    }, {
                      default: (0, import_vue5.withCtx)(() => [..._cache[47] || (_cache[47] = [
                        (0, import_vue5.createTextVNode)(" Text ")
                      ])]),
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
                (0, import_vue5.createVNode)(_component_f_data_table, {
                  rows: _ctx.dataTableRows,
                  striped: "",
                  "key-attribute": "id"
                }, {
                  caption: (0, import_vue5.withCtx)(() => [..._cache[48] || (_cache[48] = [
                    (0, import_vue5.createTextVNode)(" Tabell ")
                  ])]),
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
                          default: (0, import_vue5.withCtx)(() => [..._cache[49] || (_cache[49] = [
                            (0, import_vue5.createTextVNode)(" Text ")
                          ])]),
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
                (0, import_vue5.createVNode)(_component_f_list, {
                  modelValue: _ctx.listSelectedItems,
                  "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => _ctx.listSelectedItems = $event),
                  "key-attribute": "id",
                  items: _ctx.listItems
                }, {
                  default: (0, import_vue5.withCtx)(() => [..._cache[50] || (_cache[50] = [
                    (0, import_vue5.createTextVNode)(" Lista ")
                  ])]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue", "items"]),
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
                  default: (0, import_vue5.withCtx)(() => [..._cache[51] || (_cache[51] = [
                    (0, import_vue5.createTextVNode)(" Inneh\xE5ll ")
                  ])]),
                  footer: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.createElementVNode)("div", _hoisted_6, [
                      (0, import_vue5.createElementVNode)("button", _hoisted_7, [
                        (0, import_vue5.createVNode)(_component_f_icon, { name: "pen" }),
                        _cache[52] || (_cache[52] = (0, import_vue5.createElementVNode)(
                          "span",
                          null,
                          " \xC4ndra ",
                          -1
                          /* HOISTED */
                        ))
                      ]),
                      (0, import_vue5.createElementVNode)("button", _hoisted_8, [
                        (0, import_vue5.createVNode)(_component_f_icon, { name: "trashcan" }),
                        _cache[53] || (_cache[53] = (0, import_vue5.createElementVNode)(
                          "span",
                          null,
                          " Ta bort ",
                          -1
                          /* HOISTED */
                        ))
                      ])
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue5.createElementVNode)("div", _hoisted_9, [
                  _cache[55] || (_cache[55] = (0, import_vue5.createElementVNode)(
                    "button",
                    {
                      class: "button button--primary button--medium button-group__item",
                      type: "button"
                    },
                    " Medium ",
                    -1
                    /* HOISTED */
                  )),
                  _cache[56] || (_cache[56] = (0, import_vue5.createElementVNode)(
                    "button",
                    {
                      class: "button button--secondary button--medium button-group__item",
                      type: "button"
                    },
                    " Medium ",
                    -1
                    /* HOISTED */
                  )),
                  (0, import_vue5.createElementVNode)("button", _hoisted_10, [
                    (0, import_vue5.createVNode)(_component_f_icon, {
                      name: "paper-clip",
                      class: "button__icon"
                    }),
                    _cache[54] || (_cache[54] = (0, import_vue5.createTextVNode)(" Medium "))
                  ])
                ]),
                (0, import_vue5.createElementVNode)("div", _hoisted_11, [
                  _cache[58] || (_cache[58] = (0, import_vue5.createElementVNode)(
                    "button",
                    {
                      class: "button button--primary button--large button-group__item",
                      type: "button"
                    },
                    " Large ",
                    -1
                    /* HOISTED */
                  )),
                  _cache[59] || (_cache[59] = (0, import_vue5.createElementVNode)(
                    "button",
                    {
                      class: "button button--secondary button--large button-group__item",
                      type: "button"
                    },
                    " Large ",
                    -1
                    /* HOISTED */
                  )),
                  (0, import_vue5.createElementVNode)("button", _hoisted_12, [
                    (0, import_vue5.createVNode)(_component_f_icon, {
                      name: "paper-clip",
                      class: "button__icon"
                    }),
                    _cache[57] || (_cache[57] = (0, import_vue5.createTextVNode)(" Large "))
                  ])
                ]),
                (0, import_vue5.createVNode)(_component_f_badge, null, {
                  default: (0, import_vue5.withCtx)(() => [..._cache[60] || (_cache[60] = [
                    (0, import_vue5.createTextVNode)(" Bricka ")
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue5.createVNode)(_component_f_badge, { status: "info" }, {
                  default: (0, import_vue5.withCtx)(() => [..._cache[61] || (_cache[61] = [
                    (0, import_vue5.createTextVNode)(" Bricka ")
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue5.createVNode)(_component_f_expandable_paragraph, { expanded: true }, {
                  title: (0, import_vue5.withCtx)(() => [..._cache[62] || (_cache[62] = [
                    (0, import_vue5.createTextVNode)(" Expanderbart stycke ")
                  ])]),
                  default: (0, import_vue5.withCtx)(() => [..._cache[63] || (_cache[63] = [
                    (0, import_vue5.createTextVNode)(" Inneh\xE5ll ")
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                (0, import_vue5.createVNode)(_component_f_expandable_panel, { expanded: true }, {
                  title: (0, import_vue5.withCtx)(() => [..._cache[64] || (_cache[64] = [
                    (0, import_vue5.createTextVNode)(" Expanderbar panel ")
                  ])]),
                  default: (0, import_vue5.withCtx)(() => [..._cache[65] || (_cache[65] = [
                    (0, import_vue5.createTextVNode)(" Inneh\xE5ll ")
                  ])]),
                  _: 1
                  /* STABLE */
                }),
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
                    _cache[66] || (_cache[66] = (0, import_vue5.createElementVNode)(
                      "p",
                      null,
                      "Br\xF6dtext",
                      -1
                      /* HOISTED */
                    ))
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
