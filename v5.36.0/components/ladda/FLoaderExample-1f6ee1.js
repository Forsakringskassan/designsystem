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

  // virtual-entry:./packages/vue/src/components/FLoader/examples/FLoaderExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var defaultTimer = 10;
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FLoaderExample",
    components: {
      FLoader: import_vue4.FLoader
    },
    data() {
      return {
        show: true,
        overlay: false,
        delay: true,
        customText: false,
        time: defaultTimer
      };
    },
    methods: {
      toggleLoader() {
        if (this.overlay) {
          if (this.show) {
            clearInterval(this.interval);
          } else {
            this.interval = setInterval(this.countdown, 1e3);
          }
        }
        this.show = !this.show;
      },
      toggleOverlay() {
        this.overlay = !this.overlay;
      },
      toggleDelay() {
        this.delay = this.delay ? false : true;
      },
      toggleCloseText() {
        this.customText = !this.customText;
      },
      countdown() {
        this.time = parseInt(this.time, 10) - 1;
        if (this.time === 0) {
          this.toggleLoader();
          this.time = defaultTimer;
        }
      }
    }
  });
  var _hoisted_1 = { style: { "position": "relative", "z-index": "1000000" } };
  var _hoisted_2 = ["disabled"];
  var _hoisted_3 = { key: 0 };
  var _hoisted_4 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "label",
    null,
    " Delay \xE4r p\xE5slagen ",
    -1
    /* HOISTED */
  );
  var _hoisted_5 = [
    _hoisted_4
  ];
  var _hoisted_6 = { key: 0 };
  var _hoisted_7 = ["disabled"];
  function render(_ctx, _cache) {
    const _component_f_loader = (0, import_vue5.resolveComponent)("f-loader");
    const _directive_test = (0, import_vue5.resolveDirective)("test");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createElementVNode)("div", null, [
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_loader, {
          show: _ctx.show,
          overlay: _ctx.overlay,
          delay: _ctx.delay
        }, {
          default: (0, import_vue5.withCtx)(() => [
            _ctx.customText ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
              import_vue5.Fragment,
              { key: 0 },
              [
                (0, import_vue5.createTextVNode)(" Loading (App specific)... ")
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (0, import_vue5.createCommentVNode)("v-if", true)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["show", "overlay", "delay"])), [
          [_directive_test, "loaderExample"]
        ])
      ]),
      (0, import_vue5.createTextVNode)(),
      (0, import_vue5.createElementVNode)("div", _hoisted_1, [
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("button", {
          type: "button",
          class: "button button--discrete",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.toggleLoader())
        }, [
          (0, import_vue5.createTextVNode)("\n                Toggla loader\n            ")
        ])), [
          [_directive_test, "loader-toggle"]
        ]),
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("button", {
          type: "button",
          class: "button button--discrete",
          disabled: Boolean(_ctx.show),
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.toggleOverlay())
        }, [
          (0, import_vue5.createTextVNode)("\n                Toggla overlay\n            ")
        ], 8, _hoisted_2)), [
          [_directive_test, "loader-toggle-overlay"]
        ]),
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("button", {
          type: "button",
          class: "button button--discrete",
          onClick: _cache[2] || (_cache[2] = ($event) => _ctx.toggleDelay())
        }, [
          (0, import_vue5.createTextVNode)("\n                Toggla delay\n            ")
        ])), [
          [_directive_test, "loader-toggle-delay"]
        ]),
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("button", {
          type: "button",
          class: "button button--discrete",
          onClick: _cache[3] || (_cache[3] = ($event) => _ctx.toggleCloseText())
        }, [
          (0, import_vue5.createTextVNode)("\n                Toggla text\n            ")
        ])), [
          [_directive_test, "loader-toggle-text"]
        ]),
        (0, import_vue5.createTextVNode)(),
        _ctx.delay ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", _hoisted_3, [..._hoisted_5])) : (0, import_vue5.createCommentVNode)("v-if", true)
      ]),
      (0, import_vue5.createTextVNode)(),
      _ctx.overlay ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", _hoisted_6, [
        (0, import_vue5.createElementVNode)("label", null, [
          (0, import_vue5.createTextVNode)("\n                Forcera avst\xE4ngning efter antal sekunder:\n                "),
          (0, import_vue5.withDirectives)((0, import_vue5.createElementVNode)("input", {
            id: "loader-timer",
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.time = $event),
            type: "text",
            disabled: Boolean(_ctx.show)
          }, null, 8, _hoisted_7), [
            [import_vue5.vModelText, _ctx.time],
            [_directive_test, "loader-timer"],
            [
              _directive_validation,
              { maxLength: { length: 10 } },
              void 0,
              { maxLength: true }
            ]
          ])
        ])
      ])) : (0, import_vue5.createCommentVNode)("v-if", true)
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FLoaderExample"
  });
})();