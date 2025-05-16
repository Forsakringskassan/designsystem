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

// virtual-entry:virtual:packages/vue/src/components/FTooltip/examples/FTooltipHeadingExample.vue:FTooltipHeadingExample-54e9b9.js
import { defineComponent, useTemplateRef } from "vue";
import { FTooltip } from "@fkui/vue";
import { createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  components: { FTooltip },
  setup() {
    const heading1 = useTemplateRef("heading1");
    const heading2 = useTemplateRef("heading2");
    const heading3 = useTemplateRef("heading3");
    const heading4 = useTemplateRef("heading4");
    const heading5 = useTemplateRef("heading5");
    const heading6 = useTemplateRef("heading6");
    return { heading1, heading2, heading3, heading4, heading5, heading6 };
  }
});
var _hoisted_1 = { ref: "heading1" };
var _hoisted_2 = { ref: "heading2" };
var _hoisted_3 = { ref: "heading3" };
var _hoisted_4 = { ref: "heading4" };
var _hoisted_5 = { ref: "heading5" };
var _hoisted_6 = { ref: "heading6" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_tooltip = _resolveComponent("f-tooltip");
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createElementVNode(
        "div",
        _hoisted_1,
        _cache[0] || (_cache[0] = [
          _createElementVNode(
            "h1",
            null,
            "Heading level 1",
            -1
            /* HOISTED */
          )
        ]),
        512
        /* NEED_PATCH */
      ),
      _createVNode(_component_f_tooltip, {
        "attach-to": _ctx.heading1,
        "screen-reader-text": "Sk\xE4rml\xE4sartext"
      }, {
        body: _withCtx(() => _cache[1] || (_cache[1] = [
          _createTextVNode(" Lorem ipsum dolor sit amet. ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["attach-to"]),
      _createElementVNode(
        "div",
        _hoisted_2,
        _cache[2] || (_cache[2] = [
          _createElementVNode(
            "h2",
            null,
            "Heading level 2",
            -1
            /* HOISTED */
          )
        ]),
        512
        /* NEED_PATCH */
      ),
      _createVNode(_component_f_tooltip, {
        "attach-to": _ctx.heading2,
        "screen-reader-text": "Sk\xE4rml\xE4sartext"
      }, {
        body: _withCtx(() => _cache[3] || (_cache[3] = [
          _createTextVNode(" Lorem ipsum dolor sit amet. ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["attach-to"]),
      _createElementVNode(
        "div",
        _hoisted_3,
        _cache[4] || (_cache[4] = [
          _createElementVNode(
            "h3",
            null,
            "Heading level 3",
            -1
            /* HOISTED */
          )
        ]),
        512
        /* NEED_PATCH */
      ),
      _createVNode(_component_f_tooltip, {
        "attach-to": _ctx.heading3,
        "screen-reader-text": "Sk\xE4rml\xE4sartext"
      }, {
        body: _withCtx(() => _cache[5] || (_cache[5] = [
          _createTextVNode(" Lorem ipsum dolor sit amet. ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["attach-to"]),
      _createElementVNode(
        "div",
        _hoisted_4,
        _cache[6] || (_cache[6] = [
          _createElementVNode(
            "h4",
            null,
            "Heading level 4",
            -1
            /* HOISTED */
          )
        ]),
        512
        /* NEED_PATCH */
      ),
      _createVNode(_component_f_tooltip, {
        "attach-to": _ctx.heading4,
        "screen-reader-text": "Sk\xE4rml\xE4sartext"
      }, {
        body: _withCtx(() => _cache[7] || (_cache[7] = [
          _createTextVNode(" Lorem ipsum dolor sit amet. ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["attach-to"]),
      _createElementVNode(
        "div",
        _hoisted_5,
        _cache[8] || (_cache[8] = [
          _createElementVNode(
            "h5",
            null,
            "Heading level 5",
            -1
            /* HOISTED */
          )
        ]),
        512
        /* NEED_PATCH */
      ),
      _createVNode(_component_f_tooltip, {
        "attach-to": _ctx.heading5,
        "screen-reader-text": "Sk\xE4rml\xE4sartext"
      }, {
        body: _withCtx(() => _cache[9] || (_cache[9] = [
          _createTextVNode(" Lorem ipsum dolor sit amet. ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["attach-to"]),
      _createElementVNode(
        "div",
        _hoisted_6,
        _cache[10] || (_cache[10] = [
          _createElementVNode(
            "h6",
            null,
            "Heading level 6",
            -1
            /* HOISTED */
          )
        ]),
        512
        /* NEED_PATCH */
      ),
      _createVNode(_component_f_tooltip, {
        "attach-to": _ctx.heading6,
        "screen-reader-text": "Sk\xE4rml\xE4sartext"
      }, {
        body: _withCtx(() => _cache[11] || (_cache[11] = [
          _createTextVNode(" Lorem ipsum dolor sit amet. ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["attach-to"]),
      _cache[13] || (_cache[13] = _createElementVNode(
        "h2",
        null,
        "Unattached",
        -1
        /* HOISTED */
      )),
      _createVNode(_component_f_tooltip, { "screen-reader-text": "Sk\xE4rml\xE4sartext" }, {
        body: _withCtx(() => _cache[12] || (_cache[12] = [
          _createTextVNode(" Lorem ipsum dolor sit amet. ")
        ])),
        _: 1
        /* STABLE */
      })
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-54e9b9"
});
export {
  render
};
