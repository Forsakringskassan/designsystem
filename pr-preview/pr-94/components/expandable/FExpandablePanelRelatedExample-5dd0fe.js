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
    app.use(import_vue2.ErrorPlugin, {
      captureWarnings: true,
      logToConsole: true
    });
    app.use(import_vue2.ValidationPlugin);
    app.use(import_vue2.TestPlugin);
    app.use(import_vue2.TranslationPlugin);
    app.mount(selector);
  }

  // virtual-entry:./packages/vue/src/components/FExpandablePanel/examples/FExpandablePanelRelatedExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FExpandablePanelExample",
    components: { FExpandablePanel: import_vue4.FExpandablePanel },
    data() {
      return {
        expanded: false,
        type: Boolean
      };
    },
    methods: {
      onToggle() {
        this.expanded = !this.expanded;
      }
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_expandable_panel = (0, import_vue5.resolveComponent)("f-expandable-panel");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_expandable_panel, {
      expanded: _ctx.expanded,
      onToggle: _ctx.onToggle
    }, {
      title: (0, import_vue5.withCtx)(() => _cache[0] || (_cache[0] = [
        (0, import_vue5.createTextVNode)(" Titel ")
      ])),
      default: (0, import_vue5.withCtx)(() => _cache[1] || (_cache[1] = [
        (0, import_vue5.createTextVNode)(" Inneh\xE5ll ")
      ])),
      outside: (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
        (0, import_vue5.createTextVNode)(" Relaterat inneh\xE5ll som visas n\xE4r panelen \xE4r expanderad men utanf\xF6r body ")
      ])),
      _: 1
      /* STABLE */
    }, 8, ["expanded", "onToggle"]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FExpandablePanelRelatedExample"
  });
})();
