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

// virtual-entry:virtual:packages/vue/src/components/FDialogueTree/examples/FlerstegsModalExample.vue:FlerstegsModalExample-704d37.js
import { defineComponent } from "vue";
import { formModal } from "@fkui/vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FDialogueTree/examples/FlerstegsModal.vue?type=script
import { defineComponent as _defineComponent } from "vue";
import { reactive, ref } from "vue";
import {
  FDialogueTree,
  FFormModal,
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
var FlerstegsModal_default = /* @__PURE__ */ _defineComponent({
  __name: "FlerstegsModal",
  props: {
    isOpen: { type: Boolean, required: false }
  },
  emits: ["cancel", "close", "submit"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const DIALOGUE_TREE_DATA = exampleDialogTree();
    const current = ref({
      label: "",
      lastStep: true,
      steps: []
    });
    const treeData = ref(DIALOGUE_TREE_DATA);
    const value = reactive({ organisationNumber: "" });
    const createInitialButtons = () => [
      {
        label: "Avbryt",
        type: "secondary",
        screenreader: "formul\xE4ret",
        event: "dismiss"
      }
    ];
    const buttons = ref(createInitialButtons());
    function onCancel() {
      emit("cancel");
    }
    function onClose(payload) {
      buttons.value = createInitialButtons();
      emit("close", payload);
    }
    function onSubmit(payload) {
      emit("submit", payload);
    }
    function onChange(event) {
      if (event.lastStep) {
        const hasSubmit = buttons.value.some((b) => b.submitButton);
        if (!hasSubmit) {
          buttons.value.push({
            label: "L\xE4gg till",
            type: "primary",
            screenreader: "l\xE4gg till knapp",
            event: "submit",
            submitButton: true
          });
        }
      } else {
        buttons.value = buttons.value.filter((b) => !b.submitButton);
      }
    }
    const __returned__ = { props, emit, DIALOGUE_TREE_DATA, current, treeData, value, createInitialButtons, buttons, onCancel, onClose, onSubmit, onChange, get FDialogueTree() {
      return FDialogueTree;
    }, get FFormModal() {
      return FFormModal;
    }, get FOrganisationsnummerTextField() {
      return FOrganisationsnummerTextField;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FDialogueTree/examples/FlerstegsModal.vue?type=template
import { toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, resolveDirective as _resolveDirective, withDirectives as _withDirectives, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, withCtx as _withCtx, createVNode as _createVNode } from "vue";
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_validation = _resolveDirective("validation");
  const _directive_test = _resolveDirective("test");
  return _openBlock(), _createBlock($setup["FFormModal"], {
    "is-open": $props.isOpen,
    value: $setup.value,
    buttons: $setup.buttons,
    onSubmit: $setup.onSubmit,
    onCancel: $setup.onCancel,
    onClose: $setup.onClose
  }, {
    header: _withCtx(() => [
      _createTextVNode(
        _toDisplayString($setup.current.label),
        1
        /* TEXT */
      )
    ]),
    "error-message": _withCtx(() => [..._cache[2] || (_cache[2] = [
      _createTextVNode(
        "Oj, du har gl\xF6mt fylla i n\xE5got. G\xE5 till:",
        -1
        /* CACHED */
      )
    ])]),
    "input-text-fields": _withCtx(() => [
      _createVNode($setup["FDialogueTree"], {
        modelValue: $setup.current,
        "onUpdate:modelValue": [
          _cache[1] || (_cache[1] = ($event) => $setup.current = $event),
          $setup.onChange
        ],
        "dialogue-tree": $setup.treeData
      }, {
        default: _withCtx(({ userData }) => [
          userData.label ? _withDirectives((_openBlock(), _createBlock($setup["FOrganisationsnummerTextField"], {
            key: 0,
            modelValue: $setup.value.organisationNumber,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.value.organisationNumber = $event)
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
      }, 8, ["modelValue", "dialogue-tree"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["is-open", "value", "buttons"]);
}

// packages/vue/src/components/FDialogueTree/examples/FlerstegsModal.vue
FlerstegsModal_default.render = render;
FlerstegsModal_default.__file = "packages/vue/src/components/FDialogueTree/examples/FlerstegsModal.vue";
var FlerstegsModal_default2 = FlerstegsModal_default;

// virtual-entry:virtual:packages/vue/src/components/FDialogueTree/examples/FlerstegsModalExample.vue:FlerstegsModalExample-704d37.js
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString2, openBlock as _openBlock2, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode2 } from "vue";
var exampleComponent = defineComponent({
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
        /* CACHED */
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
  selector: "#example-704d37"
});
export {
  render2 as render
};
