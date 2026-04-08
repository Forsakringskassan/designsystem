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

// virtual-entry:virtual:packages/vue/src/utils/mount-component/examples/MountOptionsExample.vue:MountOptionsExample-efb33d.js
import { defineComponent as defineComponent2 } from "vue";
import { mountComponent } from "@fkui/vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/utils/mount-component/examples/MyAwesomeComponent.vue?type=script
import { defineComponent } from "vue";
import { FButton } from "@fkui/vue";
var MyAwesomeComponent_default = defineComponent({
  name: "MyAwesomeComponent",
  components: { FButton },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  emits: ["reply"],
  methods: {
    onClick() {
      this.$emit("reply");
    }
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/utils/mount-component/examples/MyAwesomeComponent.vue?type=template
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_button = _resolveComponent("f-button");
  return _openBlock(), _createElementBlock("div", null, [
    _createElementVNode(
      "p",
      null,
      "Hej " + _toDisplayString(_ctx.name) + "!",
      1
      /* TEXT */
    ),
    _createVNode(_component_f_button, {
      size: "small",
      onClick: _ctx.onClick
    }, {
      default: _withCtx(() => [..._cache[0] || (_cache[0] = [
        _createTextVNode(
          " Svara ",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    }, 8, ["onClick"])
  ]);
}

// packages/vue/src/utils/mount-component/examples/MyAwesomeComponent.vue
MyAwesomeComponent_default.render = render;
MyAwesomeComponent_default.__file = "packages/vue/src/utils/mount-component/examples/MyAwesomeComponent.vue";
var MyAwesomeComponent_default2 = MyAwesomeComponent_default;

// virtual-entry:virtual:packages/vue/src/utils/mount-component/examples/MountOptionsExample.vue:MountOptionsExample-efb33d.js
import { openBlock as _openBlock2, createElementBlock as _createElementBlock2 } from "vue";
var exampleComponent = defineComponent2({
  name: "MountOptionsExample",
  mounted() {
    mountComponent(this, MyAwesomeComponent_default2, {
      attachTo: this.$el,
      name: "V\xE4rlden",
      onReply() {
        alert("Fick ett svar!");
      }
    });
  }
});
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock2(), _createElementBlock2("div");
}
exampleComponent.render = render2;
setup({
  rootComponent: exampleComponent,
  selector: "#example-efb33d"
});
export {
  render2 as render
};
