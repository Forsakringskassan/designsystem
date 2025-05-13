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

// virtual-entry:virtual:packages/vue/src/components/FErrorList/examples/FErrorListBeforeNavigate.vue:FErrorListBeforeNavigate-a711e1.js
import { defineComponent } from "vue";
import { FErrorList, FExpandablePanel, FTextField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FErrorListBeforeNavigate",
  components: { FErrorList, FExpandablePanel, FTextField },
  data() {
    return {
      items: [
        { title: "Favoritfrukt", id: "favorit-frukt", focusElementId: "favorit-frukt" },
        { title: "Favoritgodis", id: "favorit-godis", focusElementId: "favorit-godis" }
      ],
      expanded: false
    };
  },
  methods: {
    beforeNavigate() {
      this.expanded = true;
      return this.$nextTick();
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_error_list = _resolveComponent("f-error-list");
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_f_expandable_panel = _resolveComponent("f-expandable-panel");
  return _openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_f_error_list, {
      items: _ctx.items,
      "before-navigate": _ctx.beforeNavigate
    }, {
      title: _withCtx(() => _cache[1] || (_cache[1] = [
        _createTextVNode(" Kolla p\xE5 felen nedan ")
      ])),
      _: 1
      /* STABLE */
    }, 8, ["items", "before-navigate"]),
    _createVNode(_component_f_expandable_panel, {
      expanded: _ctx.expanded,
      onToggle: _cache[0] || (_cache[0] = ($event) => _ctx.expanded = !_ctx.expanded)
    }, {
      title: _withCtx(() => _cache[2] || (_cache[2] = [
        _createTextVNode(" Favoriter ")
      ])),
      default: _withCtx(() => [
        _createVNode(_component_f_text_field, {
          id: "favorit-frukt",
          maxlength: "100"
        }, {
          default: _withCtx(() => _cache[3] || (_cache[3] = [
            _createTextVNode(" Favoritfrukt \u{1F34E} ")
          ])),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_f_text_field, {
          id: "favorit-godis",
          maxlength: "100"
        }, {
          default: _withCtx(() => _cache[4] || (_cache[4] = [
            _createTextVNode(" Favoritgodis \u{1F36C} ")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }, 8, ["expanded"])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-a711e1"
});
export {
  render
};
