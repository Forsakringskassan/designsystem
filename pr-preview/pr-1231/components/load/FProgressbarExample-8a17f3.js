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

// virtual-entry:virtual:packages/vue/src/components/FProgressbar/examples/FProgressbarExample.vue:FProgressbarExample-8a17f3.js
import { defineComponent } from "vue";
import { FButton, FProgressbar } from "@fkui/vue";
import { resolveComponent as _resolveComponent, createVNode as _createVNode, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, withCtx as _withCtx, vModelText as _vModelText, withDirectives as _withDirectives, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FProgressbarExample",
  components: { FButton, FProgressbar },
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
var _hoisted_2 = { class: "button-group" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_progressbar = _resolveComponent("f-progressbar");
  const _component_f_button = _resolveComponent("f-button");
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
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_f_button, {
        class: "button-group__item",
        "data-test": "increase",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.increase())
      }, {
        default: _withCtx(() => [..._cache[4] || (_cache[4] = [
          _createTextVNode(
            " Increase ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }),
      _createVNode(_component_f_button, {
        class: "button-group__item",
        "data-test": "decrease",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.decrease())
      }, {
        default: _withCtx(() => [..._cache[5] || (_cache[5] = [
          _createTextVNode(
            " Decrease ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }),
      _createElementVNode("label", null, [
        _cache[6] || (_cache[6] = _createTextVNode(
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
    ])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-8a17f3"
});
export {
  render
};
