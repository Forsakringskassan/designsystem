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

// virtual-entry:virtual:packages/vue/src/components/FModal/examples/FConfirmModalApiExample.vue:FConfirmModalApiExample-a6cd7f.js
import { defineComponent } from "vue";
import { confirmModal } from "@fkui/vue";
import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FConfirmModalApiExample",
  data() {
    return {
      frukt: {
        namn: "Mango"
      }
    };
  },
  methods: {
    confirmRemove(frukt) {
      return confirmModal(this, {
        heading: "Ta bort frukt",
        content: `\xC4r du s\xE4ker att du vill ta bort "${frukt.namn}"?`,
        confirm: "Ja, ta bort",
        dismiss: "Nej, beh\xE5ll"
      });
    },
    async onClick() {
      if (await this.confirmRemove(this.frukt)) {
        alert("Bekr\xE4ftade");
      }
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", null, [
    _createElementVNode("button", {
      type: "button",
      class: "button button--secondary",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
    }, "Ta bort")
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-a6cd7f"
});
export {
  render
};
