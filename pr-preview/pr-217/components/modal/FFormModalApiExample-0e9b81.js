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

  // virtual-entry:./packages/vue/src/components/FModal/examples/FFormModalApiExample.vue
  var import_vue6 = __require("vue");
  var import_vue7 = __require("@fkui/vue");

  // sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FModal/examples/ExampleModal.vue?type=script
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var ExampleModal_default = (0, import_vue3.defineComponent)({
    name: "ExampleModal",
    components: { FFormModal: import_vue4.FFormModal, FTextField: import_vue4.FTextField },
    props: {
      isOpen: {
        type: Boolean,
        default: false,
        required: false
      },
      size: {
        default: "",
        type: String
      },
      testId: {
        type: String,
        default: "",
        required: false
      },
      beforeSubmit: {
        type: Function,
        required: false,
        default: void 0
      },
      frukt: {
        type: String,
        required: false,
        default: ""
      },
      buttons: {
        type: Array,
        required: false,
        default() {
        }
      }
    },
    emits: ["cancel", "close", "submit"],
    data() {
      return {
        value: {
          field1: this.frukt,
          field2: ""
        }
      };
    },
    methods: {
      onSubmit(event) {
        this.$emit("submit", event);
      },
      onCancel(event) {
        this.$emit("cancel", event);
      },
      onClose(event) {
        this.$emit("close", event);
      }
    }
  });

  // sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FModal/examples/ExampleModal.vue?type=template
  var import_vue5 = __require("vue");
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _component_f_form_modal = (0, import_vue5.resolveComponent)("f-form-modal");
    const _directive_test = (0, import_vue5.resolveDirective)("test");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_form_modal, {
      size: _ctx.size,
      "data-test": _ctx.testId,
      "use-error-list": false,
      "is-open": _ctx.isOpen,
      value: _ctx.value,
      "before-submit": _ctx.beforeSubmit,
      buttons: _ctx.buttons ? _ctx.buttons : void 0,
      onSubmit: _ctx.onSubmit,
      onCancel: _ctx.onCancel,
      onClose: _ctx.onClose
    }, {
      header: (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
        (0, import_vue5.createTextVNode)(" Fruktsallad ")
      ])),
      "error-message": (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
        (0, import_vue5.createTextVNode)(" Oj, du har gl\xF6mt fylla i n\xE5got. G\xE5 till: ")
      ])),
      "input-text-fields": (0, import_vue5.withCtx)(() => [
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
          modelValue: _ctx.value.field1,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value.field1 = $event)
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[4] || (_cache[4] = [
            (0, import_vue5.createTextVNode)(" Favoritfrukt ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])), [
          [_directive_test, "field1"],
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
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
          modelValue: _ctx.value.field2,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.value.field2 = $event)
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[5] || (_cache[5] = [
            (0, import_vue5.createTextVNode)(" Smak ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])), [
          [_directive_test, "field2"],
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
      default: (0, import_vue5.withCtx)(() => [
        _cache[6] || (_cache[6] = (0, import_vue5.createElementVNode)(
          "p",
          null,
          " Fruktsallad \xE4r en dessert best\xE5ende av minst tre sorters blandade frukter som \xE4r t\xE4rnade eller skivade och ofta skalade och urk\xE4rnade. En tallrik med fruktsallad best\xE5ende av p\xE4ron, satsuma, kiwi, passionsfrukt, granat\xE4ppelk\xE4rnor, samt grekisk yoghurt blandat med flytande honung, kardemumma och vaniljsocker. ",
          -1
          /* HOISTED */
        ))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["size", "data-test", "is-open", "value", "before-submit", "buttons", "onSubmit", "onCancel", "onClose"]);
  }

  // packages/vue/src/components/FModal/examples/ExampleModal.vue
  ExampleModal_default.render = render;
  ExampleModal_default.__file = "packages/vue/src/components/FModal/examples/ExampleModal.vue";
  var ExampleModal_default2 = ExampleModal_default;

  // virtual-entry:./packages/vue/src/components/FModal/examples/FFormModalApiExample.vue
  var import_vue8 = __require("vue");
  var exampleComponent = (0, import_vue6.defineComponent)({
    name: "FFormModalApiExample",
    data() {
      return {
        result: ""
      };
    },
    methods: {
      async onClick() {
        this.result = "";
        try {
          this.result = await (0, import_vue7.formModal)(this, ExampleModal_default2, {
            props: {
              dataTest: "form-modal-api-example",
              firstName: "Anton"
            }
          });
        } catch {
          console.log("anv\xE4ndaren avbr\xF6t");
        }
      }
    }
  });
  var _hoisted_1 = { class: "f-form-modal-example" };
  var _hoisted_2 = { key: 0 };
  var _hoisted_3 = { id: "api-result" };
  function render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue8.openBlock)(), (0, import_vue8.createElementBlock)("div", _hoisted_1, [
      (0, import_vue8.createElementVNode)("button", {
        "data-test": "form-modal-api-example-button",
        type: "button",
        class: "button button--secondary",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
      }, " \xD6ppna Modal "),
      _ctx.result ? ((0, import_vue8.openBlock)(), (0, import_vue8.createElementBlock)("div", _hoisted_2, [
        _cache[1] || (_cache[1] = (0, import_vue8.createElementVNode)(
          "pre",
          null,
          "Modalen st\xE4ngdes med resultatet:",
          -1
          /* HOISTED */
        )),
        (0, import_vue8.createElementVNode)(
          "pre",
          _hoisted_3,
          (0, import_vue8.toDisplayString)(_ctx.result),
          1
          /* TEXT */
        )
      ])) : (0, import_vue8.createCommentVNode)("v-if", true)
    ]);
  }
  exampleComponent.render = render2;
  setup({
    rootComponent: exampleComponent,
    selector: "#FFormModalApiExample"
  });
})();
