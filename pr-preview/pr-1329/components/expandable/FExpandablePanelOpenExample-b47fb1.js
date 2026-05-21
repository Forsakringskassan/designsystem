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

// virtual-entry:virtual:packages/vue/src/components/FExpandablePanel/examples/FExpandablePanelOpenExample.vue:FExpandablePanelOpenExample-b47fb1.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import {
  FExpandablePanel,
  FLayoutApplicationTemplate,
  FLayoutRightPanel,
  FTextareaField
} from "@fkui/vue";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FExpandablePanelOpenExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const expanded = ref(true);
    const about = ref("");
    const isReady = ref(false);
    function togglePanelOne() {
      expanded.value = !expanded.value;
    }
    const __returned__ = { expanded, about, isReady, togglePanelOne, get FExpandablePanel() {
      return FExpandablePanel;
    }, get FLayoutApplicationTemplate() {
      return FLayoutApplicationTemplate;
    }, get FLayoutRightPanel() {
      return FLayoutRightPanel;
    }, get FTextareaField() {
      return FTextareaField;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { class: "container-fluid" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FLayoutApplicationTemplate"], null, {
    default: _withCtx(() => [
      _createVNode($setup["FLayoutRightPanel"], null, {
        default: _withCtx(() => [
          _createElementVNode("div", _hoisted_1, [
            _createVNode($setup["FExpandablePanel"], {
              expanded: $setup.expanded,
              onToggle: $setup.togglePanelOne
            }, {
              title: _withCtx(() => [..._cache[1] || (_cache[1] = [
                _createTextVNode(
                  " Ber\xE4tta om dig sj\xE4lv ",
                  -1
                  /* CACHED */
                )
              ])]),
              default: _withCtx(() => [
                _createVNode($setup["FTextareaField"], {
                  modelValue: $setup.about,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.about = $event),
                  maxlength: 100,
                  "soft-limit": 20
                }, {
                  description: _withCtx(({ formatDescriptionClass }) => [
                    _cache[2] || (_cache[2] = _createElementVNode(
                      "label",
                      null,
                      "Test",
                      -1
                      /* CACHED */
                    )),
                    _createElementVNode(
                      "span",
                      {
                        class: _normalizeClass(formatDescriptionClass)
                      },
                      " (max 100 tecken) ",
                      2
                      /* CLASS */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["expanded"])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-b47fb1"
});
export {
  render
};
