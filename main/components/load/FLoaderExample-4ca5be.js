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

// virtual-entry:virtual:packages/vue/src/components/FLoader/examples/FLoaderExample.vue:FLoaderExample-4ca5be.js
import { defineComponent } from "vue";
import { FLoader } from "@fkui/vue";
import { createTextVNode as _createTextVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, resolveDirective as _resolveDirective, withDirectives as _withDirectives, vModelText as _vModelText } from "vue";
var defaultTimer = 10;
var exampleComponent = defineComponent({
  name: "FLoaderExample",
  components: {
    FLoader
  },
  data() {
    return {
      show: true,
      overlay: false,
      delay: true,
      customText: false,
      time: defaultTimer
    };
  },
  methods: {
    toggleLoader() {
      if (this.overlay) {
        if (this.show) {
          clearInterval(this.interval);
        } else {
          this.interval = setInterval(this.countdown, 1e3);
        }
      }
      this.show = !this.show;
    },
    toggleOverlay() {
      this.overlay = !this.overlay;
    },
    toggleDelay() {
      this.delay = this.delay ? false : true;
    },
    toggleCloseText() {
      this.customText = !this.customText;
    },
    countdown() {
      this.time = parseInt(this.time, 10) - 1;
      if (this.time === 0) {
        this.toggleLoader();
        this.time = defaultTimer;
      }
    }
  }
});
var _hoisted_1 = { style: { "position": "relative", "z-index": "1000000" } };
var _hoisted_2 = ["disabled"];
var _hoisted_3 = { key: 0 };
var _hoisted_4 = { key: 0 };
var _hoisted_5 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_loader = _resolveComponent("f-loader");
  const _directive_test = _resolveDirective("test");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock("div", null, [
    _createElementVNode("div", null, [
      _createVNode(_component_f_loader, {
        show: _ctx.show,
        overlay: _ctx.overlay,
        delay: _ctx.delay
      }, {
        default: _withCtx(() => [
          _ctx.customText ? (_openBlock(), _createElementBlock(
            _Fragment,
            { key: 0 },
            [
              _createTextVNode(" Loading (App specific)... ")
            ],
            64
            /* STABLE_FRAGMENT */
          )) : _createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show", "overlay", "delay"])
    ]),
    _createElementVNode("div", _hoisted_1, [
      _withDirectives((_openBlock(), _createElementBlock("button", {
        type: "button",
        class: "button button--discrete",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.toggleLoader())
      }, _cache[5] || (_cache[5] = [
        _createTextVNode(" Toggla loader ")
      ]))), [
        [_directive_test, "loader-toggle"]
      ]),
      _withDirectives((_openBlock(), _createElementBlock("button", {
        type: "button",
        class: "button button--discrete",
        disabled: Boolean(_ctx.show),
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.toggleOverlay())
      }, _cache[6] || (_cache[6] = [
        _createTextVNode(" Toggla overlay ")
      ]), 8, _hoisted_2)), [
        [_directive_test, "loader-toggle-overlay"]
      ]),
      _withDirectives((_openBlock(), _createElementBlock("button", {
        type: "button",
        class: "button button--discrete",
        onClick: _cache[2] || (_cache[2] = ($event) => _ctx.toggleDelay())
      }, _cache[7] || (_cache[7] = [
        _createTextVNode(" Toggla delay ")
      ]))), [
        [_directive_test, "loader-toggle-delay"]
      ]),
      _withDirectives((_openBlock(), _createElementBlock("button", {
        type: "button",
        class: "button button--discrete",
        onClick: _cache[3] || (_cache[3] = ($event) => _ctx.toggleCloseText())
      }, _cache[8] || (_cache[8] = [
        _createTextVNode(" Toggla text ")
      ]))), [
        [_directive_test, "loader-toggle-text"]
      ]),
      _ctx.delay ? (_openBlock(), _createElementBlock("div", _hoisted_3, _cache[9] || (_cache[9] = [
        _createElementVNode(
          "label",
          null,
          " Delay \xE4r p\xE5slagen ",
          -1
          /* HOISTED */
        )
      ]))) : _createCommentVNode("v-if", true)
    ]),
    _ctx.overlay ? (_openBlock(), _createElementBlock("div", _hoisted_4, [
      _createElementVNode("label", null, [
        _cache[10] || (_cache[10] = _createTextVNode(" Forcera avst\xE4ngning efter antal sekunder: ")),
        _withDirectives(_createElementVNode("input", {
          id: "loader-timer",
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.time = $event),
          type: "text",
          disabled: Boolean(_ctx.show)
        }, null, 8, _hoisted_5), [
          [_vModelText, _ctx.time],
          [_directive_test, "loader-timer"],
          [
            _directive_validation,
            { maxLength: { length: 10 } },
            void 0,
            { maxLength: true }
          ]
        ])
      ])
    ])) : _createCommentVNode("v-if", true)
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-4ca5be"
});
export {
  render
};
