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

// virtual-entry:virtual:packages/vue/src/internal-components/IPopupMenu/examples/IPopupMenuExample.vue:IPopupMenuExample-8bf924.js
import { defineComponent } from "vue";
import { FButton, IPopupMenu } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleItems = [
  { label: "L\xE4nk 1", key: "MENU_1" },
  { label: "L\xE4nk 2", key: "MENU_2" },
  { label: "L\xE4nk 3", key: "MENU_3" },
  { label: "L\xE4nk 4 (med href)", key: "MENU_HREF", href: "/" },
  {
    label: "L\xE4nk 5 (med href + target)",
    key: "MENU_EXTERN",
    href: "https://github.com/Forsakringskassan/designsystem",
    target: "_blank"
  }
];
var upKeys = ["Up", "ArrowUp"];
var downKeys = ["Down", "ArrowDown"];
var verticalKeys = [...upKeys, ...downKeys];
var preventKeys = ["Tab", ...verticalKeys];
var exampleComponent = defineComponent({
  name: "IPopupMenuExample",
  components: { FButton, IPopupMenu },
  data() {
    return {
      items: exampleItems,
      selectedItem: "",
      focusedItem: "",
      popupOpen: false
    };
  },
  methods: {
    getAnchor() {
      return this.$refs["popup-anchor"];
    },
    onClose() {
      this.popupOpen = false;
    },
    onClick() {
      this.popupOpen = !this.popupOpen;
    },
    onKeyUp(event) {
      if (!this.popupOpen) {
        return;
      }
      if (preventKeys.includes(event.key)) {
        event.preventDefault();
      }
    },
    onKeyDown(event) {
      if (!this.popupOpen) {
        return;
      }
      if (!preventKeys.includes(event.key)) {
        return;
      }
      const tabNext = event.key === "Tab" && !event.shiftKey;
      const focusPopup = tabNext || verticalKeys.includes(event.key);
      if (focusPopup) {
        event.preventDefault();
        const index = upKeys.includes(event.key) ? this.items.length - 1 : 0;
        this.focusedItem = this.items[index].key;
        return;
      }
      this.popupOpen = false;
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_button = _resolveComponent("f-button");
  const _component_i_popup_menu = _resolveComponent("i-popup-menu");
  return _openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_f_button, {
      id: "popup-menu-open-button",
      ref: "popup-anchor",
      variant: "secondary",
      onClick: _ctx.onClick,
      onKeyup: _ctx.onKeyUp,
      onKeydown: _ctx.onKeyDown
    }, {
      default: _withCtx(() => [..._cache[2] || (_cache[2] = [
        _createTextVNode(
          " \xD6ppna popupmeny ",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    }, 8, ["onClick", "onKeyup", "onKeydown"]),
    _createVNode(_component_i_popup_menu, {
      id: "popup-menu",
      modelValue: _ctx.selectedItem,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.selectedItem = $event),
      "focused-item": _ctx.focusedItem,
      "onUpdate:focusedItem": _cache[1] || (_cache[1] = ($event) => _ctx.focusedItem = $event),
      items: _ctx.items,
      "is-open": _ctx.popupOpen,
      anchor: _ctx.getAnchor(),
      "enable-keyboard-navigation": "",
      onClose: _ctx.onClose
    }, null, 8, ["modelValue", "focused-item", "items", "is-open", "anchor", "onClose"]),
    _createElementVNode(
      "pre",
      null,
      "Selected item: " + _toDisplayString(_ctx.selectedItem),
      1
      /* TEXT */
    )
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-8bf924"
});
export {
  render
};
