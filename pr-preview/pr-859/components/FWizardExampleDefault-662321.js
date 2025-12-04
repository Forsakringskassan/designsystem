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

  // virtual-entry:./packages/vue/src/components/FWizard/examples/FWizardExampleDefault.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "WizardExampleDefault",
    components: { FWizard: import_vue4.FWizard, FWizardStep: import_vue4.FWizardStep, FTextField: import_vue4.FTextField, FDatepickerField: import_vue4.FDatepickerField, FSelectField: import_vue4.FSelectField },
    data() {
      return {
        current: null,
        visible: true,
        done: false,
        date: "",
        options: ""
      };
    },
    methods: {
      onCompleted() {
        this.done = true;
      }
    }
  });
  var _hoisted_1 = { key: 0 };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _component_f_wizard_step = (0, import_vue5.resolveComponent)("f-wizard-step");
    const _component_f_datepicker_field = (0, import_vue5.resolveComponent)("f-datepicker-field");
    const _component_f_select_field = (0, import_vue5.resolveComponent)("f-select-field");
    const _component_f_wizard = (0, import_vue5.resolveComponent)("f-wizard");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createVNode)(_component_f_wizard, {
        modelValue: _ctx.current,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.current = $event),
        "header-tag": "h2",
        onCompleted: _ctx.onCompleted
      }, {
        default: (0, import_vue5.withCtx)(() => [
          (0, import_vue5.createVNode)(_component_f_wizard_step, {
            key: "foo",
            "use-error-list": false,
            title: "Stegrubrik 1"
          }, {
            default: (0, import_vue5.withCtx)(() => [
              (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, null, {
                default: (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
                  (0, import_vue5.createTextVNode)(" Etikett-rubrik ")
                ])),
                _: 1
                /* STABLE */
              })), [
                [
                  _directive_validation,
                  { maxLength: { length: 100 } },
                  void 0,
                  {
                    required: true,
                    maxLength: true
                  }
                ]
              ]),
              (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, null, {
                default: (0, import_vue5.withCtx)(() => _cache[4] || (_cache[4] = [
                  (0, import_vue5.createTextVNode)(" Etikett-rubrik (frivillig) ")
                ])),
                _: 1
                /* STABLE */
              })), [
                [
                  _directive_validation,
                  { maxLength: { length: 100 } },
                  void 0,
                  { maxLength: true }
                ]
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue5.createVNode)(_component_f_wizard_step, {
            key: "bar",
            "use-error-list": false,
            title: "Stegrubrik 2"
          }, {
            default: (0, import_vue5.withCtx)(() => [
              (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_datepicker_field, {
                modelValue: _ctx.date,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.date = $event)
              }, {
                default: (0, import_vue5.withCtx)(() => _cache[5] || (_cache[5] = [
                  (0, import_vue5.createTextVNode)(" Etikett-rubrik ")
                ])),
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
              (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_select_field, {
                modelValue: _ctx.options,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.options = $event)
              }, {
                label: (0, import_vue5.withCtx)(() => _cache[6] || (_cache[6] = [
                  (0, import_vue5.createTextVNode)(" Etikett-rubrik ")
                ])),
                default: (0, import_vue5.withCtx)(() => [
                  _cache[7] || (_cache[7] = (0, import_vue5.createElementVNode)(
                    "option",
                    {
                      disabled: true,
                      value: ""
                    },
                    "V\xE4lj",
                    -1
                    /* HOISTED */
                  )),
                  _cache[8] || (_cache[8] = (0, import_vue5.createElementVNode)(
                    "option",
                    { value: "ALTERNATIV1" },
                    "Alternativ 1",
                    -1
                    /* HOISTED */
                  )),
                  _cache[9] || (_cache[9] = (0, import_vue5.createElementVNode)(
                    "option",
                    { value: "ALTERNATIV2" },
                    "Alternativ 2",
                    -1
                    /* HOISTED */
                  ))
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
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          (0, import_vue5.createVNode)(_component_f_wizard_step, {
            key: "baz",
            "use-error-list": false,
            title: "Stegrubrik 3"
          }, {
            "next-button-text": (0, import_vue5.withCtx)(() => _cache[10] || (_cache[10] = [
              (0, import_vue5.createTextVNode)(" Klar ")
            ])),
            default: (0, import_vue5.withCtx)(() => [
              _cache[11] || (_cache[11] = (0, import_vue5.createTextVNode)(" En informationstext "))
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "onCompleted"]),
      _ctx.done ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("p", _hoisted_1, "Allt \xE4r ifyllt")) : (0, import_vue5.createCommentVNode)("v-if", true)
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FWizardExampleDefault"
  });
})();
