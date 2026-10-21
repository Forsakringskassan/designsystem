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

// virtual-entry:virtual:docs/styles/examples/CompareDensity.vue:CompareDensity-bd5881.js
import { defineComponent as _defineComponent } from "vue";
import { computed, ref } from "vue";
import {
  FBadge,
  FButton,
  FCard,
  FCheckboxField,
  FDatepickerField,
  FExpandablePanel,
  FExpandableParagraph,
  FFieldset,
  FList,
  FMessageBox,
  FRadioField,
  FSelectField,
  FStaticField,
  FTable,
  FTextField,
  FTextareaField,
  FTooltip,
  defineTableColumns,
  useDatasetRef
} from "@fkui/vue";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, resolveDirective as _resolveDirective, createBlock as _createBlock, withDirectives as _withDirectives, normalizeClass as _normalizeClass } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "CompareDensity",
  setup(__props, { expose: __expose }) {
    __expose();
    const rows = useDatasetRef(["1", "2", "3"].map((id) => ({ id })));
    const columns = defineTableColumns([
      { type: "text", header: "Kolumnrubrik", value: () => "Text" },
      { type: "text", header: "Kolumnrubrik", value: () => "Text" },
      { type: "text", header: "Kolumnrubrik", value: () => "Text" }
    ]);
    const densityLeft = ref("density-default");
    const densityRight = ref("density-dense");
    const textField = ref("Text");
    const textAreaField = ref([1, 2, 3, 4].map((it) => `Rad ${it}`).join("\n"));
    const selectField = ref("Text");
    const datepickerField = ref("2024-01-01");
    const checkboxField = ref([]);
    const radioField = ref("");
    const listItems = ["1", "2", "3"].map((id) => ({ id }));
    const listSelectedItems = ref([]);
    const densities = computed(() => {
      return [densityLeft.value, densityRight.value].map((it) => ({ class: it }));
    });
    const __returned__ = { rows, columns, densityLeft, densityRight, textField, textAreaField, selectField, datepickerField, checkboxField, radioField, listItems, listSelectedItems, densities, get FBadge() {
      return FBadge;
    }, get FButton() {
      return FButton;
    }, get FCard() {
      return FCard;
    }, get FCheckboxField() {
      return FCheckboxField;
    }, get FDatepickerField() {
      return FDatepickerField;
    }, get FExpandablePanel() {
      return FExpandablePanel;
    }, get FExpandableParagraph() {
      return FExpandableParagraph;
    }, get FFieldset() {
      return FFieldset;
    }, get FList() {
      return FList;
    }, get FMessageBox() {
      return FMessageBox;
    }, get FRadioField() {
      return FRadioField;
    }, get FSelectField() {
      return FSelectField;
    }, get FStaticField() {
      return FStaticField;
    }, get FTable() {
      return FTable;
    }, get FTextField() {
      return FTextField;
    }, get FTextareaField() {
      return FTextareaField;
    }, get FTooltip() {
      return FTooltip;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { class: "container-fluid" };
var _hoisted_2 = { class: "row" };
var _hoisted_3 = { class: "col col--sm-6" };
var _hoisted_4 = { class: "col col--sm-6" };
var _hoisted_5 = { class: "row" };
var _hoisted_6 = { class: "button-group" };
var _hoisted_7 = { class: "button-group" };
var _hoisted_8 = { class: "button-group" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _createVNode($setup["FFieldset"], {
          name: "density-left",
          chip: "",
          horizontal: ""
        }, {
          label: _withCtx(() => [..._cache[19] || (_cache[19] = [
            _createTextVNode(
              " V\xE4nster ",
              -1
              /* CACHED */
            )
          ])]),
          default: _withCtx(() => [
            _createVNode($setup["FRadioField"], {
              modelValue: $setup.densityLeft,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.densityLeft = $event),
              value: "density-default"
            }, {
              default: _withCtx(() => [..._cache[20] || (_cache[20] = [
                _createTextVNode(
                  " Standard ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            _createVNode($setup["FRadioField"], {
              modelValue: $setup.densityLeft,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.densityLeft = $event),
              value: "density-dense"
            }, {
              default: _withCtx(() => [..._cache[21] || (_cache[21] = [
                _createTextVNode(
                  " Kompakt ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            _createVNode($setup["FRadioField"], {
              modelValue: $setup.densityLeft,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.densityLeft = $event),
              value: "density-densest"
            }, {
              default: _withCtx(() => [..._cache[22] || (_cache[22] = [
                _createTextVNode(
                  " Extra kompakt ",
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
        })
      ]),
      _createElementVNode("div", _hoisted_4, [
        _createVNode($setup["FFieldset"], {
          name: "density-right",
          chip: "",
          horizontal: ""
        }, {
          label: _withCtx(() => [..._cache[23] || (_cache[23] = [
            _createTextVNode(
              " H\xF6ger ",
              -1
              /* CACHED */
            )
          ])]),
          default: _withCtx(() => [
            _createVNode($setup["FRadioField"], {
              modelValue: $setup.densityRight,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.densityRight = $event),
              value: "density-default"
            }, {
              default: _withCtx(() => [..._cache[24] || (_cache[24] = [
                _createTextVNode(
                  " Standard ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            _createVNode($setup["FRadioField"], {
              modelValue: $setup.densityRight,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.densityRight = $event),
              value: "density-dense"
            }, {
              default: _withCtx(() => [..._cache[25] || (_cache[25] = [
                _createTextVNode(
                  " Kompakt ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            _createVNode($setup["FRadioField"], {
              modelValue: $setup.densityRight,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.densityRight = $event),
              value: "density-densest"
            }, {
              default: _withCtx(() => [..._cache[26] || (_cache[26] = [
                _createTextVNode(
                  " Extra kompakt ",
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
        })
      ])
    ]),
    _createElementVNode("div", _hoisted_5, [
      (_openBlock(true), _createElementBlock(
        _Fragment,
        null,
        _renderList($setup.densities, (density) => {
          return _openBlock(), _createElementBlock(
            "div",
            {
              key: density.class,
              class: _normalizeClass(["col col--sm-6", density.class])
            },
            [
              _withDirectives((_openBlock(), _createBlock($setup["FTextField"], {
                modelValue: $setup.textField,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.textField = $event),
                maxlength: "100"
              }, {
                default: _withCtx(() => [..._cache[27] || (_cache[27] = [
                  _createTextVNode(
                    " Inmatningsf\xE4lt ",
                    -1
                    /* CACHED */
                  )
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
              _createVNode($setup["FStaticField"], null, {
                label: _withCtx(() => [..._cache[28] || (_cache[28] = [
                  _createTextVNode(
                    " Presentationsf\xE4lt - statiskt ",
                    -1
                    /* CACHED */
                  )
                ])]),
                tooltip: _withCtx(() => [
                  _createVNode($setup["FTooltip"], {
                    "screen-reader-text": "Sk\xE4rml\xE4sartext",
                    "header-tag": "h2"
                  }, {
                    header: _withCtx(() => [..._cache[29] || (_cache[29] = [
                      _createTextVNode(
                        " Rubrik ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    body: _withCtx(() => [..._cache[30] || (_cache[30] = [
                      _createTextVNode(
                        " Br\xF6dtext ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                default: _withCtx(() => [..._cache[31] || (_cache[31] = [
                  _createTextVNode(
                    " Text ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _cache[66] || (_cache[66] = _createElementVNode(
                "div",
                { class: "tooltip-before" },
                [
                  _createElementVNode("label", { class: "label tooltip-before__label" }, " Tooltip ")
                ],
                -1
                /* CACHED */
              )),
              _withDirectives((_openBlock(), _createBlock($setup["FTextareaField"], {
                modelValue: $setup.textAreaField,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.textAreaField = $event),
                maxlength: 100
              }, {
                default: _withCtx(() => [..._cache[32] || (_cache[32] = [
                  _createTextVNode(
                    " Flerradigt inmatningsf\xE4lt ",
                    -1
                    /* CACHED */
                  )
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
              _createVNode($setup["FSelectField"], {
                modelValue: $setup.selectField,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.selectField = $event)
              }, {
                label: _withCtx(() => [..._cache[33] || (_cache[33] = [
                  _createTextVNode(
                    " Dropplista ",
                    -1
                    /* CACHED */
                  )
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
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              _withDirectives((_openBlock(), _createBlock($setup["FDatepickerField"], {
                modelValue: $setup.datepickerField,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.datepickerField = $event),
                maxlength: "100"
              }, {
                default: _withCtx(() => [..._cache[37] || (_cache[37] = [
                  _createTextVNode(
                    " Datumv\xE4ljare ",
                    -1
                    /* CACHED */
                  )
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
              _withDirectives((_openBlock(), _createBlock($setup["FFieldset"], null, {
                label: _withCtx(() => [..._cache[38] || (_cache[38] = [
                  _createTextVNode(
                    " Kryssrutegrupp ",
                    -1
                    /* CACHED */
                  )
                ])]),
                default: _withCtx(() => [
                  _createVNode($setup["FCheckboxField"], {
                    modelValue: $setup.checkboxField,
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.checkboxField = $event),
                    value: "Kryssruta1"
                  }, {
                    default: _withCtx(() => [..._cache[39] || (_cache[39] = [
                      _createTextVNode(
                        " Kryssruta ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"]),
                  _createVNode($setup["FCheckboxField"], {
                    modelValue: $setup.checkboxField,
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.checkboxField = $event),
                    value: "Kryssruta2"
                  }, {
                    default: _withCtx(() => [..._cache[40] || (_cache[40] = [
                      _createTextVNode(
                        " Kryssruta ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"]),
                  _createVNode($setup["FCheckboxField"], {
                    modelValue: $setup.checkboxField,
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.checkboxField = $event),
                    value: "Kryssruta3"
                  }, {
                    default: _withCtx(() => [..._cache[41] || (_cache[41] = [
                      _createTextVNode(
                        " Kryssruta ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"]),
                  _createVNode($setup["FCheckboxField"], {
                    modelValue: $setup.checkboxField,
                    "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.checkboxField = $event),
                    value: "Kryssruta4"
                  }, {
                    default: _withCtx(() => [..._cache[42] || (_cache[42] = [
                      _createTextVNode(
                        " Kryssruta ",
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
              })), [
                [
                  _directive_validation,
                  void 0,
                  void 0,
                  { required: true }
                ]
              ]),
              _withDirectives((_openBlock(), _createBlock($setup["FFieldset"], {
                name: `radio-${density.class}`
              }, {
                label: _withCtx(() => [..._cache[43] || (_cache[43] = [
                  _createTextVNode(
                    " Radioknappsgrupp ",
                    -1
                    /* CACHED */
                  )
                ])]),
                default: _withCtx(() => [
                  _createVNode($setup["FRadioField"], {
                    modelValue: $setup.radioField,
                    "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.radioField = $event),
                    value: "Radio1"
                  }, {
                    default: _withCtx(() => [..._cache[44] || (_cache[44] = [
                      _createTextVNode(
                        " Text ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"]),
                  _createVNode($setup["FRadioField"], {
                    modelValue: $setup.radioField,
                    "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $setup.radioField = $event),
                    value: "Radio2"
                  }, {
                    default: _withCtx(() => [..._cache[45] || (_cache[45] = [
                      _createTextVNode(
                        " Text ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"]),
                  _createVNode($setup["FRadioField"], {
                    modelValue: $setup.radioField,
                    "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $setup.radioField = $event),
                    value: "Radio3"
                  }, {
                    default: _withCtx(() => [..._cache[46] || (_cache[46] = [
                      _createTextVNode(
                        " Text ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"]),
                  _createVNode($setup["FRadioField"], {
                    modelValue: $setup.radioField,
                    "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $setup.radioField = $event),
                    value: "Radio4"
                  }, {
                    default: _withCtx(() => [..._cache[47] || (_cache[47] = [
                      _createTextVNode(
                        " Text ",
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
              }, 8, ["name"])), [
                [
                  _directive_validation,
                  void 0,
                  void 0,
                  { required: true }
                ]
              ]),
              _createVNode($setup["FTable"], {
                rows: $setup.rows,
                columns: $setup.columns,
                striped: ""
              }, {
                caption: _withCtx(() => [..._cache[48] || (_cache[48] = [
                  _createTextVNode(
                    " Tabell ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["rows", "columns"]),
              _createVNode($setup["FList"], {
                modelValue: $setup.listSelectedItems,
                "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => $setup.listSelectedItems = $event),
                "key-attribute": "id",
                items: $setup.listItems
              }, {
                default: _withCtx(() => [..._cache[49] || (_cache[49] = [
                  _createTextVNode(
                    " Lista ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue", "items"]),
              _createVNode($setup["FCard"], null, {
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
                default: _withCtx(() => [..._cache[50] || (_cache[50] = [
                  _createTextVNode(
                    " Inneh\xE5ll ",
                    -1
                    /* CACHED */
                  )
                ])]),
                footer: _withCtx(() => [
                  _createElementVNode("div", _hoisted_6, [
                    _createVNode($setup["FButton"], {
                      class: "button-group__item",
                      "align-text": "",
                      "icon-left": "pen",
                      size: "medium",
                      variant: "tertiary"
                    }, {
                      default: _withCtx(() => [..._cache[51] || (_cache[51] = [
                        _createElementVNode(
                          "span",
                          null,
                          " \xC4ndra ",
                          -1
                          /* CACHED */
                        )
                      ])]),
                      _: 1
                      /* STABLE */
                    }),
                    _createVNode($setup["FButton"], {
                      class: "button-group__item",
                      "align-text": "",
                      "icon-left": "trashcan",
                      size: "medium",
                      variant: "tertiary"
                    }, {
                      default: _withCtx(() => [..._cache[52] || (_cache[52] = [
                        _createElementVNode(
                          "span",
                          null,
                          " Ta bort ",
                          -1
                          /* CACHED */
                        )
                      ])]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              _createElementVNode("div", _hoisted_7, [
                _createVNode($setup["FButton"], {
                  class: "button-group__item",
                  size: "medium",
                  variant: "primary"
                }, {
                  default: _withCtx(() => [..._cache[53] || (_cache[53] = [
                    _createTextVNode(
                      " Medium ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode($setup["FButton"], {
                  class: "button-group__item",
                  size: "medium",
                  variant: "secondary"
                }, {
                  default: _withCtx(() => [..._cache[54] || (_cache[54] = [
                    _createTextVNode(
                      " Medium ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode($setup["FButton"], {
                  class: "button-group__item",
                  "align-text": "",
                  "icon-left": "paper-clip",
                  size: "medium",
                  variant: "tertiary"
                }, {
                  default: _withCtx(() => [..._cache[55] || (_cache[55] = [
                    _createTextVNode(
                      " Medium ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _createElementVNode("div", _hoisted_8, [
                _createVNode($setup["FButton"], {
                  class: "button-group__item",
                  size: "large",
                  variant: "primary"
                }, {
                  default: _withCtx(() => [..._cache[56] || (_cache[56] = [
                    _createTextVNode(
                      " Large ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode($setup["FButton"], {
                  class: "button-group__item",
                  size: "large",
                  variant: "secondary"
                }, {
                  default: _withCtx(() => [..._cache[57] || (_cache[57] = [
                    _createTextVNode(
                      " Large ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode($setup["FButton"], {
                  class: "button-group__item",
                  "align-text": "",
                  "icon-left": "paper-clip",
                  size: "large",
                  variant: "tertiary"
                }, {
                  default: _withCtx(() => [..._cache[58] || (_cache[58] = [
                    _createTextVNode(
                      " Large ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _createVNode($setup["FBadge"], null, {
                default: _withCtx(() => [..._cache[59] || (_cache[59] = [
                  _createTextVNode(
                    " Bricka ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode($setup["FBadge"], { status: "info" }, {
                default: _withCtx(() => [..._cache[60] || (_cache[60] = [
                  _createTextVNode(
                    " Bricka ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode($setup["FExpandableParagraph"], { expanded: true }, {
                title: _withCtx(() => [..._cache[61] || (_cache[61] = [
                  _createTextVNode(
                    " Expanderbart stycke ",
                    -1
                    /* CACHED */
                  )
                ])]),
                default: _withCtx(() => [..._cache[62] || (_cache[62] = [
                  _createTextVNode(
                    " Inneh\xE5ll ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode($setup["FExpandablePanel"], { expanded: true }, {
                title: _withCtx(() => [..._cache[63] || (_cache[63] = [
                  _createTextVNode(
                    " Expanderbar panel ",
                    -1
                    /* CACHED */
                  )
                ])]),
                default: _withCtx(() => [..._cache[64] || (_cache[64] = [
                  _createTextVNode(
                    " Inneh\xE5ll ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode($setup["FMessageBox"], { type: "info" }, {
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
                  _cache[65] || (_cache[65] = _createElementVNode(
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
  selector: "#example-bd5881"
});
export {
  render
};
