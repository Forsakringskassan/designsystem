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

// virtual-entry:virtual:packages/vue/src/components/FDialogueTree/examples/FlerstegsModalExample.vue:FlerstegsModalExample-c172d1.js
import { defineComponent as defineComponent2 } from "vue";
import { formModal } from "@fkui/vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FDialogueTree/examples/FlerstegsModal.vue?type=script
import { defineComponent } from "vue";
import {
  FFormModal,
  FDialogueTree,
  FOrganisationsnummerTextField
} from "@fkui/vue";

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
var FlerstegsModal_default = defineComponent({
  name: "ExampleFlerstegsModal",
  components: { FFormModal, FDialogueTree, FOrganisationsnummerTextField },
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
import { toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withDirectives as _withDirectives, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, withCtx as _withCtx, createVNode as _createVNode } from "vue";
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_organisationsnummer_text_field = _resolveComponent("f-organisationsnummer-text-field");
  const _component_f_dialogue_tree = _resolveComponent("f-dialogue-tree");
  const _component_f_form_modal = _resolveComponent("f-form-modal");
  const _directive_validation = _resolveDirective("validation");
  const _directive_test = _resolveDirective("test");
  return _openBlock(), _createBlock(_component_f_form_modal, {
    "is-open": _ctx.isOpen,
    value: _ctx.value,
    buttons: _ctx.buttons,
    onSubmit: _ctx.onSubmit,
    onCancel: _ctx.onCancel,
    onClose: _ctx.onClose
  }, {
    header: _withCtx(() => [
      _createTextVNode(
        _toDisplayString(_ctx.current.label),
        1
        /* TEXT */
      )
    ]),
    "error-message": _withCtx(() => _cache[2] || (_cache[2] = [
      _createTextVNode("Oj, du har gl\xF6mt fylla i n\xE5got. G\xE5 till:")
    ])),
    "input-text-fields": _withCtx(() => [
      _createVNode(_component_f_dialogue_tree, {
        modelValue: _ctx.current,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.current = $event),
        "dialogue-tree": _ctx.treeData,
        onChange: _ctx.onChange
      }, {
        default: _withCtx(({ userData }) => [
          userData.label ? _withDirectives((_openBlock(), _createBlock(_component_f_organisationsnummer_text_field, {
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
          ]) : _createCommentVNode("v-if", true)
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

// virtual-entry:virtual:packages/vue/src/components/FDialogueTree/examples/FlerstegsModalExample.vue:FlerstegsModalExample-c172d1.js
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString2, openBlock as _openBlock2, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode2 } from "vue";
var exampleComponent = defineComponent2({
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
        this.result = await formModal(this, FlerstegsModal_default2);
      } catch {
        console.log("Anv\xE4ndaren avbr\xF6t");
      }
    }
  }
});
var _hoisted_1 = { key: 0 };
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock2(), _createElementBlock("div", null, [
    _createElementVNode("button", {
      type: "button",
      class: "button button--secondary",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
    }, "\xD6ppna Modal"),
    _ctx.result ? (_openBlock2(), _createElementBlock("div", _hoisted_1, [
      _cache[1] || (_cache[1] = _createElementVNode(
        "pre",
        null,
        "Modalen st\xE4ngdes med resultatet:",
        -1
        /* HOISTED */
      )),
      _createElementVNode(
        "pre",
        null,
        _toDisplayString2(_ctx.result),
        1
        /* TEXT */
      )
    ])) : _createCommentVNode2("v-if", true)
  ]);
}
exampleComponent.render = render2;
setup({
  rootComponent: exampleComponent,
  selector: "#example-c172d1"
});
export {
  render2 as render
};
