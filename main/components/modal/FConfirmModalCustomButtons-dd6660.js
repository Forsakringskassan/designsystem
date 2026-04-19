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

// virtual-entry:virtual:packages/vue/src/components/FModal/examples/FConfirmModalCustomButtons.vue:FConfirmModalCustomButtons-dd6660.js
import { defineComponent } from "vue";
import { FButton, FConfirmModal, openModal } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FConfirmModalCustomButtons",
  components: { FButton },
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
  const _component_f_button = _resolveComponent("f-button");
  return _openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_f_button, {
      variant: "secondary",
      onClick: _ctx.onClick
    }, {
      default: _withCtx(() => [..._cache[0] || (_cache[0] = [
        _createTextVNode(
          "Tre knappar",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    }, 8, ["onClick"]),
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
  selector: "#example-dd6660"
});
export {
  render
};
