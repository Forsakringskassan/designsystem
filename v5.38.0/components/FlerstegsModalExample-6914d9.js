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

  // virtual-entry:./packages/vue/src/components/FDialogueTree/examples/FlerstegsModalExample.vue
  var import_vue6 = __require("vue");
  var import_vue7 = __require("@fkui/vue");

  // sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FDialogueTree/examples/FlerstegsModal.vue?type=script
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");

  // packages/vue/src/components/FDialogueTree/examples/example-dialog-tree.ts
  function generateOption(label) {
    return {
      label,
      question: {
        label: "\xC4r du anst\xE4lld p\xE5 ett konsult eller bemanningsf\xF6retag?",
        options: [
          {
            label: "Ja, det \xE4r jag",
            question: {
              label: `Om din anst\xE4llning`,
              userData: {
                label: "formA"
              }
            }
          },
          {
            label: "Nej",
            question: {
              label: "Om din anst\xE4llning",
              userData: {
                label: "formB"
              }
            }
          }
        ]
      }
    };
  }
  function generateQuestion() {
    return {
      label: "Var \xE4r du anst\xE4lld?",
      options: [
        generateOption("I Sverige"),
        generateOption("Utanf\xF6r Sverige")
      ]
    };
  }
  function exampleDialogTree() {
    return {
      label: "Vad vill du l\xE4gga till?",
      options: [
        {
          label: "Anst\xE4llning",
          question: generateQuestion()
        },
        {
          label: "Enskild firma eller handelsbolag",
          question: generateQuestion()
        },
        {
          label: "Aktiebolag",
          question: generateQuestion()
        }
      ]
    };
  }

  // sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FDialogueTree/examples/FlerstegsModal.vue?type=script
  var DIALOGUE_TREE_DATA = exampleDialogTree();
  var FlerstegsModal_default = (0, import_vue3.defineComponent)({
    name: "ExampleFlerstegsModal",
    components: { FFormModal: import_vue4.FFormModal, FDialogueTree: import_vue4.FDialogueTree, FOrganisationsnummerTextField: import_vue4.FOrganisationsnummerTextField },
    props: {
      isOpen: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    emits: ["close", "cancel", "submit"],
    data() {
      return {
        current: {
          label: "",
          lastStep: true,
          steps: []
        },
        treeData: DIALOGUE_TREE_DATA,
        value: {
          organisationNumber: ""
        },
        buttons: [
          {
            label: "Avbryt",
            type: "secondary",
            screenreader: "formul\xE4ret",
            event: "dismiss"
          }
        ]
      };
    },
    methods: {
      onClose(event) {
        this.buttons = [
          {
            label: "Avbryt",
            type: "secondary",
            screenreader: "formul\xE4ret",
            event: "dismiss"
          }
        ];
        this.$emit("close", event);
      },
      onCancel(event) {
        this.$emit("cancel", event);
      },
      onSubmit(event) {
        this.$emit("submit", event);
      },
      onChange(event) {
        if (event.lastStep) {
          this.buttons.push({
            label: "L\xE4gg till",
            type: "primary",
            screenreader: "l\xE4gg till knapp",
            event: "submit",
            submitButton: true
          });
        }
      }
    }
  });

  // sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FDialogueTree/examples/FlerstegsModal.vue?type=template
  var import_vue5 = __require("vue");
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_organisationsnummer_text_field = (0, import_vue5.resolveComponent)("f-organisationsnummer-text-field");
    const _component_f_dialogue_tree = (0, import_vue5.resolveComponent)("f-dialogue-tree");
    const _component_f_form_modal = (0, import_vue5.resolveComponent)("f-form-modal");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    const _directive_test = (0, import_vue5.resolveDirective)("test");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_form_modal, {
      "is-open": _ctx.isOpen,
      value: _ctx.value,
      buttons: _ctx.buttons,
      onSubmit: _ctx.onSubmit,
      onCancel: _ctx.onCancel,
      onClose: _ctx.onClose
    }, {
      header: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createTextVNode)(
          (0, import_vue5.toDisplayString)(_ctx.current.label),
          1
          /* TEXT */
        )
      ]),
      "error-message": (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
        (0, import_vue5.createTextVNode)("Oj, du har gl\xF6mt fylla i n\xE5got. G\xE5 till:")
      ])),
      "input-text-fields": (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_dialogue_tree, {
          modelValue: _ctx.current,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.current = $event),
          "dialogue-tree": _ctx.treeData,
          onChange: _ctx.onChange
        }, {
          default: (0, import_vue5.withCtx)(({ userData }) => [
            userData.label ? (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_organisationsnummer_text_field, {
              key: 0,
              modelValue: _ctx.value.organisationNumber,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value.organisationNumber = $event)
            }, null, 8, ["modelValue"])), [
              [
                _directive_validation,
                void 0,
                void 0,
                { required: true }
              ],
              [_directive_test, "organisationsnummer"]
            ]) : (0, import_vue5.createCommentVNode)("v-if", true)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "dialogue-tree", "onChange"])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["is-open", "value", "buttons", "onSubmit", "onCancel", "onClose"]);
  }

  // packages/vue/src/components/FDialogueTree/examples/FlerstegsModal.vue
  FlerstegsModal_default.render = render;
  FlerstegsModal_default.__file = "packages/vue/src/components/FDialogueTree/examples/FlerstegsModal.vue";
  var FlerstegsModal_default2 = FlerstegsModal_default;

  // virtual-entry:./packages/vue/src/components/FDialogueTree/examples/FlerstegsModalExample.vue
  var import_vue8 = __require("vue");
  var exampleComponent = (0, import_vue6.defineComponent)({
    name: "FlerstegsModalApiExample",
    data() {
      return {
        result: ""
      };
    },
    methods: {
      async onClick() {
        this.result = "";
        try {
          this.result = await (0, import_vue7.formModal)(this, FlerstegsModal_default2);
        } catch {
          console.log("Anv\xE4ndaren avbr\xF6t");
        }
      }
    }
  });
  var _hoisted_1 = { key: 0 };
  function render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue8.openBlock)(), (0, import_vue8.createElementBlock)("div", null, [
      (0, import_vue8.createElementVNode)("button", {
        type: "button",
        class: "button button--secondary",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
      }, "\xD6ppna Modal"),
      _ctx.result ? ((0, import_vue8.openBlock)(), (0, import_vue8.createElementBlock)("div", _hoisted_1, [
        _cache[1] || (_cache[1] = (0, import_vue8.createElementVNode)(
          "pre",
          null,
          "Modalen st\xE4ngdes med resultatet:",
          -1
          /* HOISTED */
        )),
        (0, import_vue8.createElementVNode)(
          "pre",
          null,
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
    selector: "#FlerstegsModalExample"
  });
})();
