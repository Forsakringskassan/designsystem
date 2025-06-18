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

// virtual-entry:virtual:packages/vue/src/internal-components/IAnimateExpand/examples/IAnimateExpandRecommended.vue:IAnimateExpandRecommended-74b011.js
import { defineComponent } from "vue";
import { IAnimateExpand } from "@fkui/vue";
import { createElementVNode as _createElementVNode, vModelCheckbox as _vModelCheckbox, withDirectives as _withDirectives, createTextVNode as _createTextVNode, vModelSelect as _vModelSelect, toDisplayString as _toDisplayString, normalizeStyle as _normalizeStyle, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  namne: "IAnimateExpandRecommended",
  components: { IAnimateExpand },
  data() {
    return {
      isExpanded: false,
      isAnimated: true,
      useVShow: false,
      hasOpacity: true,
      style: "height: 200px; background: hotpink",
      callbackInfo: "",
      contentDivInDOM: false
    };
  },
  methods: {
    beforeAnimationCallback() {
      console.log("Before animation callback");
      this.callbackInfo = "Before animation callback";
    },
    afterAnimationCallback() {
      console.log("After animation callback");
      this.callbackInfo = "After animation callback";
      setTimeout(() => {
        this.contentDivInDOM = this.$el.contains(this.$refs["content-div"]);
      });
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_i_animate_expand = _resolveComponent("i-animate-expand");
  return _openBlock(), _createElementBlock("div", null, [
    _createElementVNode("button", {
      type: "button",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.isExpanded = !_ctx.isExpanded)
    }, "\xD6ppna/st\xE4ng animering"),
    _createElementVNode("label", null, [
      _withDirectives(_createElementVNode(
        "input",
        {
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.isAnimated = $event),
          type: "checkbox"
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [_vModelCheckbox, _ctx.isAnimated]
      ]),
      _cache[5] || (_cache[5] = _createTextVNode(" Animera"))
    ]),
    _createElementVNode("label", null, [
      _withDirectives(_createElementVNode(
        "input",
        {
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.hasOpacity = $event),
          type: "checkbox"
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [_vModelCheckbox, _ctx.hasOpacity]
      ]),
      _cache[6] || (_cache[6] = _createTextVNode(" Opacitet"))
    ]),
    _createElementVNode("label", null, [
      _withDirectives(_createElementVNode(
        "input",
        {
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.useVShow = $event),
          type: "checkbox"
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [_vModelCheckbox, _ctx.useVShow]
      ]),
      _cache[7] || (_cache[7] = _createTextVNode(" Use v-show instead of v-if"))
    ]),
    _withDirectives(_createElementVNode(
      "select",
      {
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.style = $event),
        "aria-label": "H\xF6jd"
      },
      _cache[8] || (_cache[8] = [
        _createElementVNode(
          "option",
          { value: "height: 200px; background: hotpink" },
          "200px h\xF6jd",
          -1
          /* HOISTED */
        ),
        _createElementVNode(
          "option",
          { value: "height: 600px; background: cyan" },
          "600px h\xF6jd",
          -1
          /* HOISTED */
        ),
        _createElementVNode(
          "option",
          { value: "height: 1200px; background: yellow" },
          "1200px h\xF6jd",
          -1
          /* HOISTED */
        )
      ]),
      512
      /* NEED_PATCH */
    ), [
      [_vModelSelect, _ctx.style]
    ]),
    _createElementVNode(
      "pre",
      null,
      "Callback: " + _toDisplayString(_ctx.callbackInfo),
      1
      /* TEXT */
    ),
    _createElementVNode(
      "pre",
      null,
      "Finns inneh\xE5lls-div i DOM: " + _toDisplayString(_ctx.contentDivInDOM),
      1
      /* TEXT */
    ),
    _createVNode(_component_i_animate_expand, {
      expanded: _ctx.isExpanded,
      opacity: _ctx.hasOpacity,
      animate: _ctx.isAnimated,
      "use-v-show": _ctx.useVShow,
      "before-animation": _ctx.beforeAnimationCallback,
      "after-animation": _ctx.afterAnimationCallback
    }, {
      default: _withCtx(() => [
        _createElementVNode(
          "div",
          {
            ref: "content-div",
            style: _normalizeStyle(_ctx.style)
          },
          "Ett animerat inneh\xE5ll kan visas h\xE4r.",
          4
          /* STYLE */
        )
      ]),
      _: 1
      /* STABLE */
    }, 8, ["expanded", "opacity", "animate", "use-v-show", "before-animation", "after-animation"])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-74b011"
});
export {
  render
};
