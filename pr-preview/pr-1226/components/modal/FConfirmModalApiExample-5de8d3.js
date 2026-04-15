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

// virtual-entry:virtual:packages/vue/src/components/FModal/examples/FConfirmModalApiExample.vue:FConfirmModalApiExample-5de8d3.js
import { defineComponent } from "vue";
import { FButton, confirmModal } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FConfirmModalApiExample",
  components: { FButton },
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
  const _component_f_button = _resolveComponent("f-button");
  return _openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_f_button, {
      variant: "secondary",
      onClick: _ctx.onClick
    }, {
      default: _withCtx(() => [..._cache[0] || (_cache[0] = [
        _createTextVNode(
          "Ta bort",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    }, 8, ["onClick"])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-5de8d3"
});
export {
  render
};
