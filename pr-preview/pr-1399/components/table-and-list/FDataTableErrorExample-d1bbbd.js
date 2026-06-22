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

// virtual-entry:virtual:packages/vue/src/components/FDataTable/examples/FDataTableErrorExample.vue:FDataTableErrorExample-d1bbbd.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { FDataTable, FMessageBox, FTableColumn } from "@fkui/vue";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FDataTableErrorExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const showError = ref(true);
    const __returned__ = { showError, get FDataTable() {
      return FDataTable;
    }, get FMessageBox() {
      return FMessageBox;
    }, get FTableColumn() {
      return FTableColumn;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FDataTable"], { rows: [] }, {
    caption: _withCtx(() => [..._cache[0] || (_cache[0] = [
      _createTextVNode(
        " Exempel med felmeddelande ",
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(() => [
      _createVNode($setup["FTableColumn"], {
        title: "Kolumnrubrik 1",
        type: "text"
      }, {
        default: _withCtx(() => [..._cache[1] || (_cache[1] = [
          _createTextVNode(
            " dummy text ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }),
      _createVNode($setup["FTableColumn"], {
        title: "Kolumnrubrik 2",
        type: "text"
      }, {
        default: _withCtx(() => [..._cache[2] || (_cache[2] = [
          _createTextVNode(
            " dummy text ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }),
      _createVNode($setup["FTableColumn"], {
        title: "Kolumnrubrik 3",
        type: "text"
      }, {
        default: _withCtx(() => [..._cache[3] || (_cache[3] = [
          _createTextVNode(
            " dummy text ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      })
    ]),
    empty: _withCtx(() => [
      $setup.showError ? (_openBlock(), _createBlock($setup["FMessageBox"], {
        key: 0,
        type: "error",
        layout: "short"
      }, {
        default: _withCtx(() => [..._cache[4] || (_cache[4] = [
          _createTextVNode(
            " N\xE5got gick fel. Testa att ladda om sidan. ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      })) : _createCommentVNode("v-if", true)
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-d1bbbd"
});
export {
  render
};
