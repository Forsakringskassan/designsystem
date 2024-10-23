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

  // virtual-entry:./packages/vue/src/plugins/error/examples/ErrorPluginExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "ErrorPluginExample",
    data() {
      return {
        instance: (0, import_vue3.getCurrentInstance)()
      };
    },
    methods: {
      generateError() {
        throw new Error("It's game over man!");
      },
      generateWarning() {
        const error = new Error();
        const warnHandler = this.instance.appContext.config.warnHandler;
        warnHandler("It's game over man!", null, error.stack);
      }
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _directive_test = (0, import_vue4.resolveDirective)("test");
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("div", null, [
      (0, import_vue4.withDirectives)(((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("button", {
        class: "button button--secondary",
        type: "button",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.generateError())
      }, _cache[2] || (_cache[2] = [
        (0, import_vue4.createTextVNode)(" Fel ")
      ]))), [
        [_directive_test, "generate-error"]
      ]),
      (0, import_vue4.withDirectives)(((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("button", {
        class: "button button--secondary",
        type: "button",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.generateWarning())
      }, _cache[3] || (_cache[3] = [
        (0, import_vue4.createTextVNode)(" Varning ")
      ]))), [
        [_directive_test, "generate-warning"]
      ])
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#ErrorPluginExample"
  });
})();
