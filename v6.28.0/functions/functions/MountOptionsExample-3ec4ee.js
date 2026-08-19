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

// virtual-entry:virtual:packages/vue/src/utils/mount-component/examples/MountOptionsExample.vue:MountOptionsExample-3ec4ee.js
import { defineComponent as defineComponent2 } from "vue";
import { mountComponent } from "@fkui/vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/utils/mount-component/examples/MyAwesomeComponent.vue?type=script
import { defineComponent } from "vue";
var MyAwesomeComponent_default = defineComponent({
  name: "MyAwesomeComponent",
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
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", null, [
    _createElementVNode(
      "p",
      null,
      "Hej " + _toDisplayString(_ctx.name) + "!",
      1
      /* TEXT */
    ),
    _createElementVNode("button", {
      type: "button",
      class: "button button--primary button--small",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
    }, " Svara ")
  ]);
}

// packages/vue/src/utils/mount-component/examples/MyAwesomeComponent.vue
MyAwesomeComponent_default.render = render;
MyAwesomeComponent_default.__file = "packages/vue/src/utils/mount-component/examples/MyAwesomeComponent.vue";
var MyAwesomeComponent_default2 = MyAwesomeComponent_default;

// virtual-entry:virtual:packages/vue/src/utils/mount-component/examples/MountOptionsExample.vue:MountOptionsExample-3ec4ee.js
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
  selector: "#example-3ec4ee"
});
export {
  render2 as render
};
