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

  // virtual-entry:./packages/vue/src/internal-components/IAnimateExpand/examples/IAnimateExpandRadioGroup.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    namne: "IAnimateExpandRadioGroup",
    components: { IAnimateExpand: import_vue4.IAnimateExpand, FFieldset: import_vue4.FFieldset, FRadioField: import_vue4.FRadioField, FTextField: import_vue4.FTextField },
    data() {
      return {
        moreQuestions: "",
        areYouSure: ""
      };
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_radio_field = (0, import_vue5.resolveComponent)("f-radio-field");
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _component_i_animate_expand = (0, import_vue5.resolveComponent)("i-animate-expand");
    const _component_f_fieldset = (0, import_vue5.resolveComponent)("f-fieldset");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_fieldset, { name: "more-questions" }, {
      label: (0, import_vue5.withCtx)(() => _cache[4] || (_cache[4] = [
        (0, import_vue5.createTextVNode)(" Vill du svar p\xE5 mer fr\xE5gor? ")
      ])),
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_radio_field, {
          modelValue: _ctx.moreQuestions,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.moreQuestions = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[5] || (_cache[5] = [
            (0, import_vue5.createTextVNode)(" Ja tack ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_i_animate_expand, { expanded: _ctx.moreQuestions }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createVNode)(_component_f_fieldset, {
              class: "indent",
              name: "are-you-sure"
            }, {
              label: (0, import_vue5.withCtx)(() => _cache[6] || (_cache[6] = [
                (0, import_vue5.createTextVNode)(" \xC4r du s\xE4ker? ")
              ])),
              default: (0, import_vue5.withCtx)(() => [
                (0, import_vue5.createVNode)(_component_f_radio_field, {
                  modelValue: _ctx.areYouSure,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.areYouSure = $event),
                  value: true
                }, {
                  default: (0, import_vue5.withCtx)(() => _cache[7] || (_cache[7] = [
                    (0, import_vue5.createTextVNode)(" Ja, visa mer ")
                  ])),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"]),
                (0, import_vue5.createVNode)(_component_i_animate_expand, { expanded: _ctx.areYouSure }, {
                  default: (0, import_vue5.withCtx)(() => [
                    (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, { class: "indent" }, {
                      default: (0, import_vue5.withCtx)(() => _cache[8] || (_cache[8] = [
                        (0, import_vue5.createTextVNode)(" Vad tyckte du? ")
                      ])),
                      _: 1
                      /* STABLE */
                    })), [
                      [
                        _directive_validation,
                        void 0,
                        void 0,
                        { maxLength: true }
                      ]
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["expanded"]),
                (0, import_vue5.createVNode)(_component_f_radio_field, {
                  modelValue: _ctx.areYouSure,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.areYouSure = $event),
                  value: false
                }, {
                  default: (0, import_vue5.withCtx)(() => _cache[9] || (_cache[9] = [
                    (0, import_vue5.createTextVNode)(" Nej tack ")
                  ])),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["expanded"]),
        (0, import_vue5.createVNode)(_component_f_radio_field, {
          modelValue: _ctx.moreQuestions,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.moreQuestions = $event),
          value: false
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[10] || (_cache[10] = [
            (0, import_vue5.createTextVNode)(" Nej tack ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])
      ]),
      _: 1
      /* STABLE */
    });
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#IAnimateExpandRadioGroup"
  });
})();
