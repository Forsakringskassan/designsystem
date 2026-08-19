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

  // virtual-entry:./docs/components/sidlayout/examples/FLayoutApplicationTemplateExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FullNavigationExampleApp",
    components: { FLayoutLeftPanel: import_vue4.FLayoutLeftPanel, FLayoutRightPanel: import_vue4.FLayoutRightPanel },
    data() {
      return {
        selectedText: "",
        selectedTitle: "",
        items: [
          {
            title: "Tr\xE4utensilier",
            text: "Tr\xE4utensilierna i ett tryckeri \xE4ro ingalunda en oviktig faktor, f\xF6r trevnadens, ordningens och ekonomiens uppr\xE4tth\xE5llande, och dock \xE4r det icke s\xE4llan som sorgliga erfarenheter g\xF6ras p\xE5 grund af det of\xF6rst\xE5nd med hvilket kaster, formbr\xE4den och regaler tillverkas och f\xF6rs\xE4ljas Kaster som \xE4ro d\xE5ligt hopkomna och af otillr\xE4ckligt"
          },
          {
            title: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        ]
      };
    },
    methods: {
      openPanel(item) {
        this.selectedTitle = item.title;
        this.selectedText = item.text;
        import_vue4.FLayoutRightPanelService.open();
      },
      closePanel() {
        import_vue4.FLayoutRightPanelService.close();
      }
    }
  });
  var _hoisted_1 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "div",
    { style: { "background-color": "green", "color": "white" } },
    [
      /* @__PURE__ */ (0, import_vue5.createElementVNode)("a", { href: "#" }, "[sidhuvud]")
    ],
    -1
    /* HOISTED */
  );
  var _hoisted_2 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "div",
    { style: { "background-color": "lightgray" } },
    [
      /* @__PURE__ */ (0, import_vue5.createElementVNode)("a", { href: "#" }, "[toppnavigering]")
    ],
    -1
    /* HOISTED */
  );
  var _hoisted_3 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "h3",
    null,
    "Navigationstitel",
    -1
    /* HOISTED */
  );
  var _hoisted_4 = { class: "container-fluid" };
  var _hoisted_5 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "h1",
    null,
    "Prim\xE4ryta",
    -1
    /* HOISTED */
  );
  var _hoisted_6 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "p",
    null,
    "Klicka nedan f\xF6r att se mer i sekund\xE4rpanelen.",
    -1
    /* HOISTED */
  );
  var _hoisted_7 = ["id", "onClick"];
  var _hoisted_8 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "div",
    { style: { "background-color": "green", "color": "white", "text-align": "center" } },
    [
      /* @__PURE__ */ (0, import_vue5.createElementVNode)("a", { href: "#" }, "[sidfot]")
    ],
    -1
    /* HOISTED */
  );
  function render(_ctx, _cache) {
    const _component_f_layout_right_panel = (0, import_vue5.resolveComponent)("f-layout-right-panel");
    const _component_f_layout_left_panel = (0, import_vue5.resolveComponent)("f-layout-left-panel");
    const _component_f_layout_application_template = (0, import_vue5.resolveComponent)("f-layout-application-template");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_layout_application_template, null, {
      header: (0, import_vue5.withCtx)(() => [
        _hoisted_1
      ]),
      "top-navigation": (0, import_vue5.withCtx)(() => [
        _hoisted_2
      ]),
      footer: (0, import_vue5.withCtx)(() => [
        _hoisted_8
      ]),
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.createVNode)(_component_f_layout_left_panel, null, {
          heading: (0, import_vue5.withCtx)(() => [
            _hoisted_3
          ]),
          content: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(" [content] ")
          ]),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createVNode)(_component_f_layout_right_panel, null, {
              heading: (0, import_vue5.withCtx)(() => [
                (0, import_vue5.createElementVNode)(
                  "h3",
                  null,
                  (0, import_vue5.toDisplayString)(_ctx.selectedTitle),
                  1
                  /* TEXT */
                )
              ]),
              content: (0, import_vue5.withCtx)(() => [
                (0, import_vue5.createElementVNode)(
                  "p",
                  null,
                  (0, import_vue5.toDisplayString)(_ctx.selectedText),
                  1
                  /* TEXT */
                ),
                (0, import_vue5.createTextVNode)(),
                (0, import_vue5.createElementVNode)("button", {
                  class: "button button--primary",
                  type: "button",
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.closePanel())
                }, "\n                            St\xE4ng\n                        ")
              ]),
              default: (0, import_vue5.withCtx)(() => [
                (0, import_vue5.createElementVNode)("div", _hoisted_4, [
                  _hoisted_5,
                  (0, import_vue5.createTextVNode)(),
                  _hoisted_6,
                  (0, import_vue5.createTextVNode)(),
                  (0, import_vue5.createElementVNode)("ul", null, [
                    ((0, import_vue5.openBlock)(true), (0, import_vue5.createElementBlock)(
                      import_vue5.Fragment,
                      null,
                      (0, import_vue5.renderList)(_ctx.items, (item) => {
                        return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("li", {
                          key: item.title
                        }, [
                          (0, import_vue5.createElementVNode)("a", {
                            id: item.title,
                            href: "javascript:void(0)",
                            class: "anchor",
                            onClick: ($event) => _ctx.openPanel(item)
                          }, (0, import_vue5.toDisplayString)(item.title), 9, _hoisted_7)
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createTextVNode)()
      ]),
      _: 1
      /* STABLE */
    });
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FLayoutApplicationTemplateExample"
  });
})();
