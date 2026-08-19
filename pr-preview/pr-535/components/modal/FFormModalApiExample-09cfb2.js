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

// virtual-entry:virtual:packages/vue/src/components/FModal/examples/FFormModalApiExample.vue:FFormModalApiExample-09cfb2.js
import { defineComponent as defineComponent2 } from "vue";
import { formModal } from "@fkui/vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FModal/examples/ExampleModal.vue?type=script
import { defineComponent } from "vue";
import { FFormModal, FTextField } from "@fkui/vue";
var ExampleModal_default = defineComponent({
  name: "ExampleModal",
  components: { FFormModal, FTextField },
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
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives } from "vue";
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_f_form_modal = _resolveComponent("f-form-modal");
  const _directive_test = _resolveDirective("test");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createBlock(_component_f_form_modal, {
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
    header: _withCtx(() => _cache[2] || (_cache[2] = [
      _createTextVNode(" Fruktsallad ")
    ])),
    "error-message": _withCtx(() => _cache[3] || (_cache[3] = [
      _createTextVNode(" Oj, du har gl\xF6mt fylla i n\xE5got. G\xE5 till: ")
    ])),
    "input-text-fields": _withCtx(() => [
      _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
        modelValue: _ctx.value.field1,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value.field1 = $event)
      }, {
        default: _withCtx(() => _cache[4] || (_cache[4] = [
          _createTextVNode(" Favoritfrukt ")
        ])),
        _: 1,
        __: [4]
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
      _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
        modelValue: _ctx.value.field2,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.value.field2 = $event)
      }, {
        default: _withCtx(() => _cache[5] || (_cache[5] = [
          _createTextVNode(" Smak ")
        ])),
        _: 1,
        __: [5]
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
    default: _withCtx(() => [
      _cache[6] || (_cache[6] = _createElementVNode(
        "p",
        null,
        " Fruktsallad \xE4r en dessert best\xE5ende av minst tre sorters blandade frukter som \xE4r t\xE4rnade eller skivade och ofta skalade och urk\xE4rnade. En tallrik med fruktsallad best\xE5ende av p\xE4ron, satsuma, kiwi, passionsfrukt, granat\xE4ppelk\xE4rnor, samt grekisk yoghurt blandat med flytande honung, kardemumma och vaniljsocker. ",
        -1
        /* HOISTED */
      ))
    ]),
    _: 1,
    __: [6]
  }, 8, ["size", "data-test", "is-open", "value", "before-submit", "buttons", "onSubmit", "onCancel", "onClose"]);
}

// packages/vue/src/components/FModal/examples/ExampleModal.vue
ExampleModal_default.render = render;
ExampleModal_default.__file = "packages/vue/src/components/FModal/examples/ExampleModal.vue";
var ExampleModal_default2 = ExampleModal_default;

// virtual-entry:virtual:packages/vue/src/components/FModal/examples/FFormModalApiExample.vue:FFormModalApiExample-09cfb2.js
import { createElementVNode as _createElementVNode2, toDisplayString as _toDisplayString, openBlock as _openBlock2, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode } from "vue";
var exampleComponent = defineComponent2({
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
        this.result = await formModal(this, ExampleModal_default2, {
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
  return _openBlock2(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode2("button", {
      "data-test": "form-modal-api-example-button",
      type: "button",
      class: "button button--secondary",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
    }, " \xD6ppna Modal "),
    _ctx.result ? (_openBlock2(), _createElementBlock("div", _hoisted_2, [
      _cache[1] || (_cache[1] = _createElementVNode2(
        "pre",
        null,
        "Modalen st\xE4ngdes med resultatet:",
        -1
        /* HOISTED */
      )),
      _createElementVNode2(
        "pre",
        _hoisted_3,
        _toDisplayString(_ctx.result),
        1
        /* TEXT */
      )
    ])) : _createCommentVNode("v-if", true)
  ]);
}
exampleComponent.render = render2;
setup({
  rootComponent: exampleComponent,
  selector: "#example-09cfb2"
});
export {
  render2 as render
};
