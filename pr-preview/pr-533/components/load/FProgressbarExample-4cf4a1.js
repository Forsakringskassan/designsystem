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

// virtual-entry:virtual:packages/vue/src/components/FProgressbar/examples/FProgressbarExample.vue:FProgressbarExample-4cf4a1.js
import { defineComponent } from "vue";
import { FProgressbar } from "@fkui/vue";
import { resolveComponent as _resolveComponent, createVNode as _createVNode, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, vModelText as _vModelText, withDirectives as _withDirectives, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FProgressbarExample",
  components: { FProgressbar },
  data() {
    return {
      currentProgress: 40
    };
  },
  methods: {
    decrease() {
      this.currentProgress = Math.max(this.currentProgress - 20, 0);
    },
    increase() {
      this.currentProgress = Math.min(this.currentProgress + 20, 100);
    }
  }
});
var _hoisted_1 = { class: "debug-data" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_progressbar = _resolveComponent("f-progressbar");
  return _openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_f_progressbar, {
      value: _ctx.currentProgress,
      "aria-label": "Progressbar",
      label: "Progressbar",
      "value-text": "You have uploaded %VALUE% %."
    }, null, 8, ["value"]),
    _createElementVNode("pre", _hoisted_1, [
      _cache[3] || (_cache[3] = _createElementVNode(
        "span",
        { class: "sr-only" },
        "Debug-data: ",
        -1
        /* CACHED */
      )),
      _createTextVNode(
        "value: " + _toDisplayString(_ctx.currentProgress),
        1
        /* TEXT */
      )
    ]),
    _createElementVNode("button", {
      "data-test": "increase",
      type: "button",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.increase())
    }, "Increase"),
    _createElementVNode("button", {
      "data-test": "decrease",
      type: "button",
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.decrease())
    }, "Decrease"),
    _createElementVNode("label", null, [
      _cache[4] || (_cache[4] = _createTextVNode(
        " Progress: ",
        -1
        /* CACHED */
      )),
      _withDirectives(_createElementVNode(
        "input",
        {
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.currentProgress = $event),
          type: "number"
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [
          _vModelText,
          _ctx.currentProgress,
          void 0,
          { number: true }
        ]
      ])
    ])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-4cf4a1"
});
export {
  render
};
