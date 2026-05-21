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

// virtual-entry:virtual:packages/vue/src/components/FExpandablePanel/examples/FExpandablePanelOpenExample.vue:FExpandablePanelOpenExample-c93f4d.js
import { defineComponent } from "vue";
import {
  FExpandablePanel,
  FLayoutApplicationTemplate,
  FLayoutRightPanel,
  FTextareaField
} from "@fkui/vue";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FExpandablePanelExample",
  components: { FExpandablePanel, FLayoutApplicationTemplate, FLayoutRightPanel, FTextareaField },
  data() {
    return {
      expanded: true,
      type: Boolean,
      about: ""
    };
  },
  methods: {
    togglePanelOne() {
      this.expanded = !this.expanded;
    }
  }
});
var _hoisted_1 = { class: "container-fluid" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_textarea_field = _resolveComponent("f-textarea-field");
  const _component_f_expandable_panel = _resolveComponent("f-expandable-panel");
  const _component_f_layout_right_panel = _resolveComponent("f-layout-right-panel");
  const _component_f_layout_application_template = _resolveComponent("f-layout-application-template");
  return _openBlock(), _createBlock(_component_f_layout_application_template, null, {
    default: _withCtx(() => [
      _createVNode(_component_f_layout_right_panel, null, {
        default: _withCtx(() => [
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_f_expandable_panel, {
              expanded: _ctx.expanded,
              onToggle: _ctx.togglePanelOne
            }, {
              title: _withCtx(() => [..._cache[1] || (_cache[1] = [
                _createTextVNode(
                  " Ber\xE4tta om dig sj\xE4lv ",
                  -1
                  /* CACHED */
                )
              ])]),
              default: _withCtx(() => [
                _createVNode(_component_f_textarea_field, {
                  modelValue: _ctx.about,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.about = $event),
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
            }, 8, ["expanded", "onToggle"])
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
  selector: "#example-c93f4d"
});
export {
  render
};
