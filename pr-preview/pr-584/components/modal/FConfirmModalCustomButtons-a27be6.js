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

// virtual-entry:virtual:packages/vue/src/components/FModal/examples/FConfirmModalCustomButtons.vue:FConfirmModalCustomButtons-a27be6.js
import { defineComponent } from "vue";
import { openModal, FConfirmModal } from "@fkui/vue";
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FConfirmModalCustomButtons",
  data() {
    return {
      action: void 0,
      isOpen: false,
      threeButtons: [
        {
          label: "Ja, ta bort",
          type: "primary",
          screenreader: "telefonnumret",
          event: "confirm"
        },
        { label: "Nej, uppdatera telefonnumret", event: "update" },
        { label: "Nej, ta inte bort", screenreader: "telefonnumret", event: "dismiss" }
      ]
    };
  },
  methods: {
    async onClick() {
      this.action = await openModal(this, FConfirmModal, {
        props: {
          heading: "Ta bort telefonnummer",
          content: "Vill du ta bort ditt telefonnummer?",
          buttons: this.threeButtons,
          size: "large"
        }
      });
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", null, [
    _createElementVNode("button", {
      type: "button",
      class: "button button--secondary",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
    }, "Tre knappar"),
    _createElementVNode(
      "pre",
      null,
      " Modalen st\xE4ngdes med resultatet: " + _toDisplayString(_ctx.action) + " ",
      1
      /* TEXT */
    )
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-a27be6"
});
export {
  render
};
