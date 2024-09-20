"use strict";
(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });

  // docs/src/setup.ts
  var import_vue = __require("vue");
  var import_vue2 = __require("@fkui/vue");
  function setup(options) {
    const { rootComponent, selector } = options;
    const app = (0, import_vue.createApp)({
      render() {
        return (0, import_vue.h)(import_vue2.FErrorHandlingApp, { defaultComponent: rootComponent });
      }
    });
    (0, import_vue2.setRunningContext)(app);
    app.use(import_vue2.ErrorPlugin);
    app.use(import_vue2.ValidationPlugin);
    app.use(import_vue2.TestPlugin);
    app.use(import_vue2.TranslationPlugin);
    app.mount(selector);
    app.config.warnHandler = (msg, vm, trace) => {
      console.warn(`Warning:`, msg, trace);
      throw new Error(msg);
    };
  }

  // virtual-entry:./packages/vue/src/components/FExpandableParagraph/examples/FExpandableParagraphMultipleExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FExpandableParagraphMultipleExample",
    components: { FExpandableParagraph: import_vue4.FExpandableParagraph },
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
  var _hoisted_1 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "span",
    null,
    " Inneh\xE5ll ",
    -1
    /* HOISTED */
  );
  var _hoisted_2 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "span",
    null,
    " Inneh\xE5ll ",
    -1
    /* HOISTED */
  );
  var _hoisted_3 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "span",
    null,
    " Inneh\xE5ll ",
    -1
    /* HOISTED */
  );
  function render(_ctx, _cache) {
    const _component_f_expandable_paragraph = (0, import_vue5.resolveComponent)("f-expandable-paragraph");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createVNode)(_component_f_expandable_paragraph, {
        expanded: _ctx.expanded1,
        "header-tag": "h2",
        onToggle: _ctx.onToggle1
      }, {
        title: (0, import_vue5.withCtx)(() => [
          (0, import_vue5.createTextVNode)(" Titel (h2) ")
        ]),
        default: (0, import_vue5.withCtx)(() => [
          _hoisted_1
        ]),
        _: 1
        /* STABLE */
      }, 8, ["expanded", "onToggle"]),
      (0, import_vue5.createTextVNode)(),
      (0, import_vue5.createVNode)(_component_f_expandable_paragraph, {
        expanded: _ctx.expanded2,
        "header-tag": "h3",
        onToggle: _ctx.onToggle2
      }, {
        title: (0, import_vue5.withCtx)(() => [
          (0, import_vue5.createTextVNode)(" Titel (h3) ")
        ]),
        default: (0, import_vue5.withCtx)(() => [
          _hoisted_2
        ]),
        _: 1
        /* STABLE */
      }, 8, ["expanded", "onToggle"]),
      (0, import_vue5.createTextVNode)(),
      (0, import_vue5.createVNode)(_component_f_expandable_paragraph, {
        expanded: _ctx.expanded3,
        "header-tag": "h4",
        onToggle: _ctx.onToggle3
      }, {
        title: (0, import_vue5.withCtx)(() => [
          (0, import_vue5.createTextVNode)(" Titel (h4) ")
        ]),
        related: (0, import_vue5.withCtx)(() => [
          (0, import_vue5.createTextVNode)(" 2020-06-25 ")
        ]),
        default: (0, import_vue5.withCtx)(() => [
          _hoisted_3
        ]),
        _: 1
        /* STABLE */
      }, 8, ["expanded", "onToggle"])
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FExpandableParagraphMultipleExample"
  });
})();
