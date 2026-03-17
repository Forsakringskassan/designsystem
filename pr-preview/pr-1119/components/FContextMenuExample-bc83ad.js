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

// virtual-entry:virtual:packages/vue/src/components/FContextMenu/examples/FContextMenuExample.vue:FContextMenuExample-bc83ad.js
import { defineComponent } from "vue";
import { FButton, FContextMenu, getHTMLElementFromVueRef } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleItems = [
  { label: "P\xE5minnelse", key: "MENU_2", icon: "bell" },
  { label: "\xC4ndra", key: "MENU_3", icon: "pen" },
  { separator: true },
  { label: "Ta bort", key: "MENU_4", icon: "trashcan" },
  { label: "Utan ikon", key: "MENU_5" }
];
var exampleComponent = defineComponent({
  name: "FContextMenuExample",
  components: { FButton, FContextMenu },
  data() {
    return {
      items: exampleItems,
      selected: "",
      isOpen: false
    };
  },
  methods: {
    getAnchor() {
      return getHTMLElementFromVueRef(this.$refs.popupAnchor);
    },
    onClose() {
      this.isOpen = false;
    },
    onClick() {
      this.isOpen = !this.isOpen;
    },
    onSelect(value) {
      this.selected = value;
    }
  }
});
var _hoisted_1 = { "data-testid": "fcontextmenu-exempel1" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_button = _resolveComponent("f-button");
  const _component_f_context_menu = _resolveComponent("f-context-menu");
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_f_button, {
      ref: "popupAnchor",
      "data-test": "open-example-contextmenu-button",
      "aria-haspopup": "menu",
      onClick: _ctx.onClick
    }, {
      default: _withCtx(() => [..._cache[0] || (_cache[0] = [
        _createTextVNode(
          " \xD6ppna ",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    }, 8, ["onClick"]),
    _createElementVNode(
      "pre",
      null,
      "Selected: " + _toDisplayString(_ctx.selected),
      1
      /* TEXT */
    ),
    _createVNode(_component_f_context_menu, {
      "data-test": "contextmenu-open",
      "is-open": _ctx.isOpen,
      items: _ctx.items,
      anchor: _ctx.getAnchor(),
      onClose: _ctx.onClose,
      onSelect: _ctx.onSelect
    }, null, 8, ["is-open", "items", "anchor", "onClose", "onSelect"])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-bc83ad"
});
export {
  render
};
