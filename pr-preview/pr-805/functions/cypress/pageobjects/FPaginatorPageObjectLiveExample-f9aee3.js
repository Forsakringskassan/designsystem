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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FPaginatorPageObject/FPaginatorPageObjectLiveExample.vue:FPaginatorPageObjectLiveExample-f9aee3.js
import { defineComponent as _defineComponent } from "vue";
import { FList, FPaginateDataset, FPaginator } from "@fkui/vue";
import { FPaginatorPageobject } from "@fkui/vue/pageobjects";
import { createVNode as _createVNode, withCtx as _withCtx, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FPaginatorPageObjectLiveExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const pageobject = new FPaginatorPageobject();
    const methods = Object.getOwnPropertyNames(FPaginatorPageobject.prototype).filter(
      (name) => name !== "constructor"
    );
    const parameters = {
      pageButton: [3]
    };
    const items = methods.map((method) => {
      const params = parameters[method] ?? [];
      const fn = pageobject[method];
      const selector = typeof fn === "function" ? fn.apply(pageobject, params) : fn;
      return {
        method,
        params,
        selector
      };
    });
    const rows = Array(20).fill(void 0);
    function getSelectorFromElement(element) {
      if (element instanceof HTMLElement) {
        return element.dataset.selector ?? null;
      } else {
        return null;
      }
    }
    function onMouseEnter(event) {
      const { target } = event;
      const selector = getSelectorFromElement(target);
      if (!selector) {
        return;
      }
      for (const element of document.querySelectorAll(selector)) {
        element.style.setProperty("outline", "3px dashed #f0a");
      }
    }
    function onMouseLeave(event) {
      const { target } = event;
      const selector = getSelectorFromElement(target);
      if (!selector) {
        return;
      }
      for (const element of document.querySelectorAll(selector)) {
        element.style.removeProperty("outline");
      }
    }
    const __returned__ = { pageobject, methods, parameters, items, rows, getSelectorFromElement, onMouseEnter, onMouseLeave, get FList() {
      return FList;
    }, get FPaginateDataset() {
      return FPaginateDataset;
    }, get FPaginator() {
      return FPaginator;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { class: "row" };
var _hoisted_2 = { class: "col col--md-9" };
var _hoisted_3 = { class: "col col--md-3" };
var _hoisted_4 = ["data-selector"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode($setup["FPaginateDataset"], {
        items: $setup.rows,
        "items-per-page": 1
      }, {
        default: _withCtx(({ currentPage, numberOfPages }) => [
          _createVNode($setup["FPaginator"], {
            "current-page": currentPage,
            "number-of-pages": numberOfPages
          }, null, 8, ["current-page", "number-of-pages"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["items"])
    ]),
    _createElementVNode("div", _hoisted_3, [
      _createVNode($setup["FList"], {
        items: $setup.items,
        class: "density-densest"
      }, {
        default: _withCtx(({ item }) => [
          _createElementVNode("div", {
            class: "selector",
            "data-selector": item.selector,
            onMouseenter: $setup.onMouseEnter,
            onMouseleave: $setup.onMouseLeave
          }, _toDisplayString(item.method) + "(" + _toDisplayString(item.params.join(", ")) + ") ", 41, _hoisted_4)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["items"])
    ])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-f9aee3"
});
export {
  render
};
