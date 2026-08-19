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

  // virtual-entry:./packages/vue/src/components/FModal/examples/FFormModalExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FFormModalExample",
    components: { FFormModal: import_vue4.FFormModal, FTextField: import_vue4.FTextField },
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      closeModal() {
        this.isOpen = false;
      }
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _component_f_form_modal = (0, import_vue5.resolveComponent)("f-form-modal");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
      import_vue5.Fragment,
      null,
      [
        (0, import_vue5.createVNode)(_component_f_form_modal, {
          "is-open": _ctx.isOpen,
          onCancel: _cache[0] || (_cache[0] = ($event) => _ctx.closeModal()),
          onClose: _cache[1] || (_cache[1] = ($event) => _ctx.closeModal()),
          onSubmit: _cache[2] || (_cache[2] = ($event) => _ctx.closeModal())
        }, {
          header: (0, import_vue5.withCtx)(() => _cache[4] || (_cache[4] = [
            (0, import_vue5.createTextVNode)(" Rubrik ")
          ])),
          default: (0, import_vue5.withCtx)(() => _cache[5] || (_cache[5] = [
            (0, import_vue5.createElementVNode)(
              "p",
              null,
              "Ingress",
              -1
              /* HOISTED */
            )
          ])),
          "input-text-fields": (0, import_vue5.withCtx)(() => [
            (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, null, {
              default: (0, import_vue5.withCtx)(() => _cache[6] || (_cache[6] = [
                (0, import_vue5.createTextVNode)(" Etikett ")
              ])),
              _: 1
              /* STABLE */
            })), [
              [
                _directive_validation,
                {
                  maxLength: { length: 32 }
                },
                void 0,
                {
                  required: true,
                  maxLength: true
                }
              ]
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["is-open"]),
        (0, import_vue5.createElementVNode)("button", {
          type: "button",
          class: "button button--secondary",
          onClick: _cache[3] || (_cache[3] = ($event) => _ctx.isOpen = true)
        }, " \xD6ppna modal ")
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FFormModalExample"
  });
})();
