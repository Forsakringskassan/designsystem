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

  // virtual-entry:./packages/vue/src/utils/mount-component/examples/MountOptionsExample.vue
  var import_vue5 = __require("vue");
  var import_vue6 = __require("@fkui/vue");

  // sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/utils/mount-component/examples/MyAwesomeComponent.vue?type=script
  var import_vue3 = __require("vue");
  var MyAwesomeComponent_default = (0, import_vue3.defineComponent)({
    name: "MyAwesomeComponent",
    props: {
      name: {
        type: String,
        required: true
      }
    },
    emits: ["reply"],
    methods: {
      onClick() {
        this.$emit("reply");
      }
    }
  });

  // sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/utils/mount-component/examples/MyAwesomeComponent.vue?type=template
  var import_vue4 = __require("vue");
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("div", null, [
      (0, import_vue4.createElementVNode)(
        "p",
        null,
        "Hej " + (0, import_vue4.toDisplayString)(_ctx.name) + "!",
        1
        /* TEXT */
      ),
      (0, import_vue4.createElementVNode)("button", {
        type: "button",
        class: "button button--primary button--small",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
      }, " Svara ")
    ]);
  }

  // packages/vue/src/utils/mount-component/examples/MyAwesomeComponent.vue
  MyAwesomeComponent_default.render = render;
  MyAwesomeComponent_default.__file = "packages/vue/src/utils/mount-component/examples/MyAwesomeComponent.vue";
  var MyAwesomeComponent_default2 = MyAwesomeComponent_default;

  // virtual-entry:./packages/vue/src/utils/mount-component/examples/MountOptionsExample.vue
  var import_vue7 = __require("vue");
  var exampleComponent = (0, import_vue5.defineComponent)({
    name: "MountOptionsExample",
    mounted() {
      (0, import_vue6.mountComponent)(this, MyAwesomeComponent_default2, {
        attachTo: this.$el,
        name: "V\xE4rlden",
        onReply() {
          alert("Fick ett svar!");
        }
      });
    }
  });
  function render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue7.openBlock)(), (0, import_vue7.createElementBlock)("div");
  }
  exampleComponent.render = render2;
  setup({
    rootComponent: exampleComponent,
    selector: "#MountOptionsExample"
  });
})();
