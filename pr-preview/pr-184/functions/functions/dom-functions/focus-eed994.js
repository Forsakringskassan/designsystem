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

  // virtual-entry:./docs/functions/functions/dom-functions/focus.md
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var MyButton = (0, import_vue3.defineComponent)({
    template: (
      /* HTML */
      `
        <p>I have a button</p>
        <button ref="foo" type="button">My button</button>
    `
    ),
    computed: {
      focusTarget() {
        return this.$refs.foo;
      }
    }
  });
  var exampleComponent = (0, import_vue3.defineComponent)({
    components: { MyButton },
    computed: {
      focusTarget() {
        return this.$refs.myButton;
      }
    },
    mounted() {
      (0, import_vue4.focus)(this);
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_my_button = (0, import_vue5.resolveComponent)("my-button");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
      import_vue5.Fragment,
      null,
      [
        _cache[0] || (_cache[0] = (0, import_vue5.createElementVNode)(
          "h1",
          null,
          "Important Section",
          -1
          /* HOISTED */
        )),
        _cache[1] || (_cache[1] = (0, import_vue5.createElementVNode)(
          "p",
          null,
          "Some interesting content.",
          -1
          /* HOISTED */
        )),
        (0, import_vue5.createVNode)(
          _component_my_button,
          { ref: "myButton" },
          null,
          512
          /* NEED_PATCH */
        )
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#focus"
  });
})();
