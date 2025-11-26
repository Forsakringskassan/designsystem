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

// virtual-entry:virtual:packages/vue/src/components/FExpandableParagraph/examples/FExpandableParagraphMultipleExample.vue:FExpandableParagraphMultipleExample-3626ae.js
import { defineComponent } from "vue";
import { FExpandableParagraph } from "@fkui/vue";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FExpandableParagraphMultipleExample",
  components: { FExpandableParagraph },
  data() {
    return {
      expanded1: false,
      expanded2: false,
      expanded3: false
    };
  },
  methods: {
    onToggle1() {
      this.expanded1 = !this.expanded1;
    },
    onToggle2() {
      this.expanded2 = !this.expanded2;
    },
    onToggle3() {
      this.expanded3 = !this.expanded3;
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_expandable_paragraph = _resolveComponent("f-expandable-paragraph");
  return _openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_f_expandable_paragraph, {
      expanded: _ctx.expanded1,
      "header-tag": "h2",
      onToggle: _ctx.onToggle1
    }, {
      title: _withCtx(() => [..._cache[0] || (_cache[0] = [
        _createTextVNode(
          " Titel (h2) ",
          -1
          /* CACHED */
        )
      ])]),
      default: _withCtx(() => [..._cache[1] || (_cache[1] = [
        _createElementVNode(
          "span",
          null,
          " Inneh\xE5ll ",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    }, 8, ["expanded", "onToggle"]),
    _createVNode(_component_f_expandable_paragraph, {
      expanded: _ctx.expanded2,
      "header-tag": "h3",
      onToggle: _ctx.onToggle2
    }, {
      title: _withCtx(() => [..._cache[2] || (_cache[2] = [
        _createTextVNode(
          " Titel (h3) ",
          -1
          /* CACHED */
        )
      ])]),
      default: _withCtx(() => [..._cache[3] || (_cache[3] = [
        _createElementVNode(
          "span",
          null,
          " Inneh\xE5ll ",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    }, 8, ["expanded", "onToggle"]),
    _createVNode(_component_f_expandable_paragraph, {
      expanded: _ctx.expanded3,
      "header-tag": "h4",
      onToggle: _ctx.onToggle3
    }, {
      title: _withCtx(() => [..._cache[4] || (_cache[4] = [
        _createTextVNode(
          " Titel (h4) ",
          -1
          /* CACHED */
        )
      ])]),
      related: _withCtx(() => [..._cache[5] || (_cache[5] = [
        _createTextVNode(
          " 2020-06-25 ",
          -1
          /* CACHED */
        )
      ])]),
      default: _withCtx(() => [..._cache[6] || (_cache[6] = [
        _createElementVNode(
          "span",
          null,
          " Inneh\xE5ll ",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    }, 8, ["expanded", "onToggle"])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-3626ae"
});
export {
  render
};
