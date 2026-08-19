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

  // virtual-entry:./packages/vue/src/internal-components/IAnimateExpand/examples/IAnimateExpandRecommended.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    namne: "IAnimateExpandRecommended",
    components: { IAnimateExpand: import_vue4.IAnimateExpand },
    data() {
      return {
        isExpanded: false,
        isAnimated: true,
        useVShow: false,
        hasOpacity: true,
        style: "height: 200px; background: hotpink",
        callbackInfo: "",
        contentDivInDOM: false
      };
    },
    methods: {
      beforeAnimationCallback() {
        console.log("Before animation callback");
        this.callbackInfo = "Before animation callback";
      },
      afterAnimationCallback() {
        console.log("After animation callback");
        this.callbackInfo = "After animation callback";
        setTimeout(() => {
          this.contentDivInDOM = this.$el.contains(this.$refs["content-div"]);
        });
      }
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_i_animate_expand = (0, import_vue5.resolveComponent)("i-animate-expand");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createElementVNode)("button", {
        type: "button",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.isExpanded = !_ctx.isExpanded)
      }, "\xD6ppna/st\xE4ng animering"),
      (0, import_vue5.withDirectives)((0, import_vue5.createElementVNode)(
        "input",
        {
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.isAnimated = $event),
          type: "checkbox"
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [import_vue5.vModelCheckbox, _ctx.isAnimated]
      ]),
      _cache[6] || (_cache[6] = (0, import_vue5.createTextVNode)(" Animera ")),
      (0, import_vue5.withDirectives)((0, import_vue5.createElementVNode)(
        "input",
        {
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.hasOpacity = $event),
          type: "checkbox"
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [import_vue5.vModelCheckbox, _ctx.hasOpacity]
      ]),
      _cache[7] || (_cache[7] = (0, import_vue5.createTextVNode)(" Opacitet ")),
      (0, import_vue5.withDirectives)((0, import_vue5.createElementVNode)(
        "input",
        {
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.useVShow = $event),
          type: "checkbox"
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [import_vue5.vModelCheckbox, _ctx.useVShow]
      ]),
      _cache[8] || (_cache[8] = (0, import_vue5.createTextVNode)(" Use v-show instead of v-if ")),
      (0, import_vue5.withDirectives)((0, import_vue5.createElementVNode)(
        "select",
        {
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.style = $event)
        },
        _cache[5] || (_cache[5] = [
          (0, import_vue5.createElementVNode)(
            "option",
            { value: "height: 200px; background: hotpink" },
            "200px h\xF6jd",
            -1
            /* HOISTED */
          ),
          (0, import_vue5.createElementVNode)(
            "option",
            { value: "height: 600px; background: cyan" },
            "600px h\xF6jd",
            -1
            /* HOISTED */
          ),
          (0, import_vue5.createElementVNode)(
            "option",
            { value: "height: 1200px; background: yellow" },
            "1200px h\xF6jd",
            -1
            /* HOISTED */
          )
        ]),
        512
        /* NEED_PATCH */
      ), [
        [import_vue5.vModelSelect, _ctx.style]
      ]),
      (0, import_vue5.createElementVNode)(
        "pre",
        null,
        "Callback: " + (0, import_vue5.toDisplayString)(_ctx.callbackInfo),
        1
        /* TEXT */
      ),
      (0, import_vue5.createElementVNode)(
        "pre",
        null,
        "Finns inneh\xE5lls-div i DOM: " + (0, import_vue5.toDisplayString)(_ctx.contentDivInDOM),
        1
        /* TEXT */
      ),
      (0, import_vue5.createVNode)(_component_i_animate_expand, {
        expanded: _ctx.isExpanded,
        opacity: _ctx.hasOpacity,
        animate: _ctx.isAnimated,
        "use-v-show": _ctx.useVShow,
        "before-animation": _ctx.beforeAnimationCallback,
        "after-animation": _ctx.afterAnimationCallback
      }, {
        default: (0, import_vue5.withCtx)(() => [
          (0, import_vue5.createElementVNode)(
            "div",
            {
              ref: "content-div",
              style: (0, import_vue5.normalizeStyle)(_ctx.style)
            },
            "Ett animerat inneh\xE5ll kan visas h\xE4r.",
            4
            /* STYLE */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["expanded", "opacity", "animate", "use-v-show", "before-animation", "after-animation"])
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#IAnimateExpandRecommended"
  });
})();
