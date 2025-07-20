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

// virtual-entry:virtual:packages/vue/src/components/FDataTable/examples/FDataTableErrorExample.vue:FDataTableErrorExample-c66dd0.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { FDataTable, FTableColumn, FMessageBox } from "@fkui/vue";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FDataTableErrorExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const showError = ref(true);
    const __returned__ = { showError, get FDataTable() {
      return FDataTable;
    }, get FTableColumn() {
      return FTableColumn;
    }, get FMessageBox() {
      return FMessageBox;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FDataTable"], { rows: [] }, {
    caption: _withCtx(() => _cache[0] || (_cache[0] = [
      _createTextVNode(" Exempel med felmeddelande ")
    ])),
    default: _withCtx(() => [
      _createVNode($setup["FTableColumn"], {
        title: "Kolumnrubrik 1",
        type: "text"
      }, {
        default: _withCtx(() => _cache[1] || (_cache[1] = [
          _createTextVNode(" dummy text ")
        ])),
        _: 1,
        __: [1]
      }),
      _createVNode($setup["FTableColumn"], {
        title: "Kolumnrubrik 2",
        type: "text"
      }, {
        default: _withCtx(() => _cache[2] || (_cache[2] = [
          _createTextVNode(" dummy text ")
        ])),
        _: 1,
        __: [2]
      }),
      _createVNode($setup["FTableColumn"], {
        title: "Kolumnrubrik 3",
        type: "text"
      }, {
        default: _withCtx(() => _cache[3] || (_cache[3] = [
          _createTextVNode(" dummy text ")
        ])),
        _: 1,
        __: [3]
      })
    ]),
    empty: _withCtx(() => [
      $setup.showError ? (_openBlock(), _createBlock($setup["FMessageBox"], {
        key: 0,
        type: "error",
        layout: "short"
      }, {
        default: _withCtx(() => _cache[4] || (_cache[4] = [
          _createTextVNode(" N\xE5got gick fel. Testa att ladda om sidan. ")
        ])),
        _: 1,
        __: [4]
      })) : _createCommentVNode("v-if", true)
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-c66dd0"
});
export {
  render
};
