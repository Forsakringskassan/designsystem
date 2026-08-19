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

// virtual-entry:virtual:docs/styles/examples/CompareDensity.vue:CompareDensity-40e9fe.js
import { defineComponent } from "vue";
import {
  FTextField,
  FTextareaField,
  FSelectField,
  FDatepickerField,
  FFieldset,
  FCheckboxField,
  FRadioField,
  FDataTable,
  FTableColumn,
  FList,
  FCard,
  FBadge,
  FExpandableParagraph,
  FExpandablePanel,
  FMessageBox,
  FTooltip,
  FIcon,
  FStaticField
} from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, resolveDirective as _resolveDirective, createBlock as _createBlock, withDirectives as _withDirectives, normalizeClass as _normalizeClass } from "vue";
var exampleComponent = defineComponent({
  components: {
    FTextField,
    FTextareaField,
    FSelectField,
    FDatepickerField,
    FFieldset,
    FCheckboxField,
    FRadioField,
    FDataTable,
    FTableColumn,
    FList,
    FCard,
    FBadge,
    FExpandableParagraph,
    FExpandablePanel,
    FMessageBox,
    FTooltip,
    FIcon,
    FStaticField
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
  const _component_f_radio_field = _resolveComponent("f-radio-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_f_tooltip = _resolveComponent("f-tooltip");
  const _component_f_static_field = _resolveComponent("f-static-field");
  const _component_f_textarea_field = _resolveComponent("f-textarea-field");
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _component_f_datepicker_field = _resolveComponent("f-datepicker-field");
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_f_table_column = _resolveComponent("f-table-column");
  const _component_f_data_table = _resolveComponent("f-data-table");
  const _component_f_list = _resolveComponent("f-list");
  const _component_f_icon = _resolveComponent("f-icon");
  const _component_f_card = _resolveComponent("f-card");
  const _component_f_badge = _resolveComponent("f-badge");
  const _component_f_expandable_paragraph = _resolveComponent("f-expandable-paragraph");
  const _component_f_expandable_panel = _resolveComponent("f-expandable-panel");
  const _component_f_message_box = _resolveComponent("f-message-box");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _createVNode(_component_f_fieldset, {
          name: "density-left",
          chip: "",
          horizontal: ""
        }, {
          label: _withCtx(() => _cache[19] || (_cache[19] = [
            _createTextVNode(" V\xE4nster ")
          ])),
          default: _withCtx(() => [
            _createVNode(_component_f_radio_field, {
              modelValue: _ctx.densityLeft,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.densityLeft = $event),
              value: "density-default"
            }, {
              default: _withCtx(() => _cache[20] || (_cache[20] = [
                _createTextVNode(" Standard ")
              ])),
              _: 1,
              __: [20]
            }, 8, ["modelValue"]),
            _createVNode(_component_f_radio_field, {
              modelValue: _ctx.densityLeft,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.densityLeft = $event),
              value: "density-dense"
            }, {
              default: _withCtx(() => _cache[21] || (_cache[21] = [
                _createTextVNode(" Kompakt ")
              ])),
              _: 1,
              __: [21]
            }, 8, ["modelValue"]),
            _createVNode(_component_f_radio_field, {
              modelValue: _ctx.densityLeft,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.densityLeft = $event),
              value: "density-densest"
            }, {
              default: _withCtx(() => _cache[22] || (_cache[22] = [
                _createTextVNode(" Extra kompakt ")
              ])),
              _: 1,
              __: [22]
            }, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _createElementVNode("div", _hoisted_4, [
        _createVNode(_component_f_fieldset, {
          name: "density-right",
          chip: "",
          horizontal: ""
        }, {
          label: _withCtx(() => _cache[23] || (_cache[23] = [
            _createTextVNode(" H\xF6ger ")
          ])),
          default: _withCtx(() => [
            _createVNode(_component_f_radio_field, {
              modelValue: _ctx.densityRight,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.densityRight = $event),
              value: "density-default"
            }, {
              default: _withCtx(() => _cache[24] || (_cache[24] = [
                _createTextVNode(" Standard ")
              ])),
              _: 1,
              __: [24]
            }, 8, ["modelValue"]),
            _createVNode(_component_f_radio_field, {
              modelValue: _ctx.densityRight,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.densityRight = $event),
              value: "density-dense"
            }, {
              default: _withCtx(() => _cache[25] || (_cache[25] = [
                _createTextVNode(" Kompakt ")
              ])),
              _: 1,
              __: [25]
            }, 8, ["modelValue"]),
            _createVNode(_component_f_radio_field, {
              modelValue: _ctx.densityRight,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.densityRight = $event),
              value: "density-densest"
            }, {
              default: _withCtx(() => _cache[26] || (_cache[26] = [
                _createTextVNode(" Extra kompakt ")
              ])),
              _: 1,
              __: [26]
            }, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _createElementVNode("div", _hoisted_5, [
      (_openBlock(true), _createElementBlock(
        _Fragment,
        null,
        _renderList(_ctx.densities, (density) => {
          return _openBlock(), _createElementBlock(
            "div",
            {
              key: density.class,
              class: _normalizeClass(["col col--sm-6", density.class])
            },
            [
              _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
                modelValue: _ctx.textField,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.textField = $event),
                maxlength: "100"
              }, {
                default: _withCtx(() => [..._cache[27] || (_cache[27] = [
                  _createTextVNode(" Inmatningsf\xE4lt ")
                ])]),
                _: 1,
                __: [27]
              }, 8, ["modelValue"])), [
                [
                  _directive_validation,
                  void 0,
                  void 0,
                  { required: true }
                ]
              ]),
              _createVNode(_component_f_static_field, null, {
                label: _withCtx(() => [..._cache[28] || (_cache[28] = [
                  _createTextVNode(" Presentationsf\xE4lt - statiskt ")
                ])]),
                tooltip: _withCtx(() => [
                  _createVNode(_component_f_tooltip, {
                    "screen-reader-text": "Sk\xE4rml\xE4sartext",
                    "header-tag": "h2"
                  }, {
                    header: _withCtx(() => [..._cache[29] || (_cache[29] = [
                      _createTextVNode(" Rubrik ")
                    ])]),
                    body: _withCtx(() => [..._cache[30] || (_cache[30] = [
                      _createTextVNode(" Br\xF6dtext ")
                    ])]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                default: _withCtx(() => [..._cache[31] || (_cache[31] = [
                  _createTextVNode(" Text ")
                ])]),
                _: 1
                /* STABLE */
              }),
              _cache[67] || (_cache[67] = _createElementVNode(
                "div",
                { class: "tooltip-before" },
                [
                  _createElementVNode("label", { class: "label tooltip-before__label" }, " Tooltip ")
                ],
                -1
                /* CACHED */
              )),
              _withDirectives((_openBlock(), _createBlock(_component_f_textarea_field, {
                modelValue: _ctx.textAreaField,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.textAreaField = $event),
                maxlength: 100
              }, {
                default: _withCtx(() => [..._cache[32] || (_cache[32] = [
                  _createTextVNode(" Flerradigt inmatningsf\xE4lt ")
                ])]),
                _: 1,
                __: [32]
              }, 8, ["modelValue"])), [
                [
                  _directive_validation,
                  void 0,
                  void 0,
                  { required: true }
                ]
              ]),
              _createVNode(_component_f_select_field, {
                modelValue: _ctx.selectField,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.selectField = $event)
              }, {
                label: _withCtx(() => [..._cache[33] || (_cache[33] = [
                  _createTextVNode(" Dropplista ")
                ])]),
                default: _withCtx(() => [
                  _cache[34] || (_cache[34] = _createElementVNode(
                    "option",
                    { value: "Text" },
                    "Text",
                    -1
                    /* CACHED */
                  )),
                  _cache[35] || (_cache[35] = _createElementVNode(
                    "option",
                    { value: "Text2" },
                    "Text 2",
                    -1
                    /* CACHED */
                  )),
                  _cache[36] || (_cache[36] = _createElementVNode(
                    "option",
                    { value: "Text3" },
                    "Text 3",
                    -1
                    /* CACHED */
                  ))
                ]),
                _: 1,
                __: [34, 35, 36]
              }, 8, ["modelValue"]),
              _withDirectives((_openBlock(), _createBlock(_component_f_datepicker_field, {
                modelValue: _ctx.datepickerField,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.datepickerField = $event),
                maxlength: "100"
              }, {
                default: _withCtx(() => [..._cache[37] || (_cache[37] = [
                  _createTextVNode(" Datumv\xE4ljare ")
                ])]),
                _: 1,
                __: [37]
              }, 8, ["modelValue"])), [
                [
                  _directive_validation,
                  void 0,
                  void 0,
                  { required: true }
                ]
              ]),
              _withDirectives((_openBlock(), _createBlock(_component_f_fieldset, null, {
                label: _withCtx(() => [..._cache[38] || (_cache[38] = [
                  _createTextVNode(" Kryssrutegrupp ")
                ])]),
                default: _withCtx(() => [
                  _createVNode(_component_f_checkbox_field, {
                    modelValue: _ctx.checkboxField,
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => _ctx.checkboxField = $event),
                    value: "Kryssruta1"
                  }, {
                    default: _withCtx(() => [..._cache[39] || (_cache[39] = [
                      _createTextVNode(" Kryssruta ")
                    ])]),
                    _: 1,
                    __: [39]
                  }, 8, ["modelValue"]),
                  _createVNode(_component_f_checkbox_field, {
                    modelValue: _ctx.checkboxField,
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => _ctx.checkboxField = $event),
                    value: "Kryssruta2"
                  }, {
                    default: _withCtx(() => [..._cache[40] || (_cache[40] = [
                      _createTextVNode(" Kryssruta ")
                    ])]),
                    _: 1,
                    __: [40]
                  }, 8, ["modelValue"]),
                  _createVNode(_component_f_checkbox_field, {
                    modelValue: _ctx.checkboxField,
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => _ctx.checkboxField = $event),
                    value: "Kryssruta3"
                  }, {
                    default: _withCtx(() => [..._cache[41] || (_cache[41] = [
                      _createTextVNode(" Kryssruta ")
                    ])]),
                    _: 1,
                    __: [41]
                  }, 8, ["modelValue"]),
                  _createVNode(_component_f_checkbox_field, {
                    modelValue: _ctx.checkboxField,
                    "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => _ctx.checkboxField = $event),
                    value: "Kryssruta4"
                  }, {
                    default: _withCtx(() => [..._cache[42] || (_cache[42] = [
                      _createTextVNode(" Kryssruta ")
                    ])]),
                    _: 1,
                    __: [42]
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
              _withDirectives((_openBlock(), _createBlock(_component_f_fieldset, {
                name: `radio-${density.class}`
              }, {
                label: _withCtx(() => [..._cache[43] || (_cache[43] = [
                  _createTextVNode(" Radioknappsgrupp ")
                ])]),
                default: _withCtx(() => [
                  _createVNode(_component_f_radio_field, {
                    modelValue: _ctx.radioField,
                    "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => _ctx.radioField = $event),
                    value: "Radio1"
                  }, {
                    default: _withCtx(() => [..._cache[44] || (_cache[44] = [
                      _createTextVNode(" Text ")
                    ])]),
                    _: 1,
                    __: [44]
                  }, 8, ["modelValue"]),
                  _createVNode(_component_f_radio_field, {
                    modelValue: _ctx.radioField,
                    "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => _ctx.radioField = $event),
                    value: "Radio2"
                  }, {
                    default: _withCtx(() => [..._cache[45] || (_cache[45] = [
                      _createTextVNode(" Text ")
                    ])]),
                    _: 1,
                    __: [45]
                  }, 8, ["modelValue"]),
                  _createVNode(_component_f_radio_field, {
                    modelValue: _ctx.radioField,
                    "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => _ctx.radioField = $event),
                    value: "Radio3"
                  }, {
                    default: _withCtx(() => [..._cache[46] || (_cache[46] = [
                      _createTextVNode(" Text ")
                    ])]),
                    _: 1,
                    __: [46]
                  }, 8, ["modelValue"]),
                  _createVNode(_component_f_radio_field, {
                    modelValue: _ctx.radioField,
                    "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => _ctx.radioField = $event),
                    value: "Radio4"
                  }, {
                    default: _withCtx(() => [..._cache[47] || (_cache[47] = [
                      _createTextVNode(" Text ")
                    ])]),
                    _: 1,
                    __: [47]
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
              _createVNode(_component_f_data_table, {
                rows: _ctx.dataTableRows,
                striped: "",
                "key-attribute": "id"
              }, {
                caption: _withCtx(() => [..._cache[48] || (_cache[48] = [
                  _createTextVNode(" Tabell ")
                ])]),
                default: _withCtx(() => [
                  (_openBlock(true), _createElementBlock(
                    _Fragment,
                    null,
                    _renderList(_ctx.dataTableColumns, (column) => {
                      return _openBlock(), _createBlock(
                        _component_f_table_column,
                        {
                          key: column.id,
                          title: "Kolumnrubrik",
                          type: "text"
                        },
                        {
                          default: _withCtx(() => [..._cache[49] || (_cache[49] = [
                            _createTextVNode(" Text ")
                          ])]),
                          _: 2,
                          __: [49]
                        },
                        1024
                        /* DYNAMIC_SLOTS */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["rows"]),
              _createVNode(_component_f_list, {
                modelValue: _ctx.listSelectedItems,
                "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => _ctx.listSelectedItems = $event),
                "key-attribute": "id",
                items: _ctx.listItems
              }, {
                default: _withCtx(() => [..._cache[50] || (_cache[50] = [
                  _createTextVNode(" Lista ")
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue", "items"]),
              _createVNode(_component_f_card, null, {
                header: _withCtx(({ headingSlotClass }) => [
                  _createElementVNode(
                    "h3",
                    {
                      class: _normalizeClass(headingSlotClass)
                    },
                    "Kort",
                    2
                    /* CLASS */
                  )
                ]),
                default: _withCtx(() => [..._cache[51] || (_cache[51] = [
                  _createTextVNode(" Inneh\xE5ll ")
                ])]),
                footer: _withCtx(() => [
                  _createElementVNode("div", _hoisted_6, [
                    _createElementVNode("button", _hoisted_7, [
                      _createVNode(_component_f_icon, { name: "pen" }),
                      _cache[52] || (_cache[52] = _createElementVNode(
                        "span",
                        null,
                        " \xC4ndra ",
                        -1
                        /* CACHED */
                      ))
                    ]),
                    _createElementVNode("button", _hoisted_8, [
                      _createVNode(_component_f_icon, { name: "trashcan" }),
                      _cache[53] || (_cache[53] = _createElementVNode(
                        "span",
                        null,
                        " Ta bort ",
                        -1
                        /* CACHED */
                      ))
                    ])
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              _createElementVNode("div", _hoisted_9, [
                _cache[55] || (_cache[55] = _createElementVNode(
                  "button",
                  {
                    class: "button button--primary button--medium button-group__item",
                    type: "button"
                  },
                  " Medium ",
                  -1
                  /* CACHED */
                )),
                _cache[56] || (_cache[56] = _createElementVNode(
                  "button",
                  {
                    class: "button button--secondary button--medium button-group__item",
                    type: "button"
                  },
                  " Medium ",
                  -1
                  /* CACHED */
                )),
                _createElementVNode("button", _hoisted_10, [
                  _createVNode(_component_f_icon, {
                    name: "paper-clip",
                    class: "button__icon"
                  }),
                  _cache[54] || (_cache[54] = _createTextVNode(" Medium "))
                ])
              ]),
              _createElementVNode("div", _hoisted_11, [
                _cache[58] || (_cache[58] = _createElementVNode(
                  "button",
                  {
                    class: "button button--primary button--large button-group__item",
                    type: "button"
                  },
                  " Large ",
                  -1
                  /* CACHED */
                )),
                _cache[59] || (_cache[59] = _createElementVNode(
                  "button",
                  {
                    class: "button button--secondary button--large button-group__item",
                    type: "button"
                  },
                  " Large ",
                  -1
                  /* CACHED */
                )),
                _createElementVNode("button", _hoisted_12, [
                  _createVNode(_component_f_icon, {
                    name: "paper-clip",
                    class: "button__icon"
                  }),
                  _cache[57] || (_cache[57] = _createTextVNode(" Large "))
                ])
              ]),
              _createVNode(_component_f_badge, null, {
                default: _withCtx(() => [..._cache[60] || (_cache[60] = [
                  _createTextVNode(" Bricka ")
                ])]),
                _: 1,
                __: [60]
              }),
              _createVNode(_component_f_badge, { status: "info" }, {
                default: _withCtx(() => [..._cache[61] || (_cache[61] = [
                  _createTextVNode(" Bricka ")
                ])]),
                _: 1,
                __: [61]
              }),
              _createVNode(_component_f_expandable_paragraph, { expanded: true }, {
                title: _withCtx(() => [..._cache[62] || (_cache[62] = [
                  _createTextVNode(" Expanderbart stycke ")
                ])]),
                default: _withCtx(() => [..._cache[63] || (_cache[63] = [
                  _createTextVNode(" Inneh\xE5ll ")
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_f_expandable_panel, { expanded: true }, {
                title: _withCtx(() => [..._cache[64] || (_cache[64] = [
                  _createTextVNode(" Expanderbar panel ")
                ])]),
                default: _withCtx(() => [..._cache[65] || (_cache[65] = [
                  _createTextVNode(" Inneh\xE5ll ")
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_f_message_box, { type: "info" }, {
                default: _withCtx(({ headingSlotClass }) => [
                  _createElementVNode(
                    "h2",
                    {
                      class: _normalizeClass(headingSlotClass)
                    },
                    "Meddelanderuta",
                    2
                    /* CLASS */
                  ),
                  _cache[66] || (_cache[66] = _createElementVNode(
                    "p",
                    null,
                    "Br\xF6dtext",
                    -1
                    /* CACHED */
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
  selector: "#example-40e9fe"
});
export {
  render
};
