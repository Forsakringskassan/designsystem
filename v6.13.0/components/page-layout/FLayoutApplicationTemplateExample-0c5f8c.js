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

// virtual-entry:virtual:docs/components/page-layout/examples/FLayoutApplicationTemplateExample.vue:FLayoutApplicationTemplateExample-0c5f8c.js
import { defineComponent } from "vue";
import {
  FLayoutApplicationTemplate,
  FLayoutLeftPanel,
  FLayoutRightPanel,
  FLayoutRightPanelService
} from "@fkui/vue";
import { createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, toDisplayString as _toDisplayString, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FullNavigationExampleApp",
  components: { FLayoutApplicationTemplate, FLayoutLeftPanel, FLayoutRightPanel },
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
      FLayoutRightPanelService.open();
    },
    closePanel() {
      FLayoutRightPanelService.close();
    }
  }
});
var _hoisted_1 = { class: "container-fluid" };
var _hoisted_2 = ["id", "onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_layout_right_panel = _resolveComponent("f-layout-right-panel");
  const _component_f_layout_left_panel = _resolveComponent("f-layout-left-panel");
  const _component_f_layout_application_template = _resolveComponent("f-layout-application-template");
  return _openBlock(), _createBlock(_component_f_layout_application_template, null, {
    header: _withCtx(() => _cache[1] || (_cache[1] = [
      _createElementVNode(
        "div",
        { style: { "background-color": "green", "color": "white" } },
        [
          _createElementVNode("a", { href: "#" }, "[sidhuvud]")
        ],
        -1
        /* CACHED */
      )
    ])),
    "top-navigation": _withCtx(() => _cache[2] || (_cache[2] = [
      _createElementVNode(
        "div",
        { style: { "background-color": "lightgray" } },
        [
          _createElementVNode("a", { href: "#" }, "[toppnavigering]")
        ],
        -1
        /* CACHED */
      )
    ])),
    footer: _withCtx(() => _cache[7] || (_cache[7] = [
      _createElementVNode(
        "div",
        { style: { "background-color": "green", "color": "white", "text-align": "center" } },
        [
          _createElementVNode("a", { href: "#" }, "[sidfot]")
        ],
        -1
        /* CACHED */
      )
    ])),
    default: _withCtx(() => [
      _createVNode(_component_f_layout_left_panel, null, {
        heading: _withCtx(() => _cache[3] || (_cache[3] = [
          _createElementVNode(
            "h3",
            null,
            "Navigationstitel",
            -1
            /* CACHED */
          )
        ])),
        content: _withCtx(() => _cache[4] || (_cache[4] = [
          _createTextVNode(" [content] ")
        ])),
        default: _withCtx(() => [
          _createVNode(_component_f_layout_right_panel, null, {
            heading: _withCtx(() => [
              _createElementVNode(
                "h3",
                null,
                _toDisplayString(_ctx.selectedTitle),
                1
                /* TEXT */
              )
            ]),
            content: _withCtx(() => [
              _createElementVNode(
                "p",
                null,
                _toDisplayString(_ctx.selectedText),
                1
                /* TEXT */
              ),
              _createElementVNode("button", {
                class: "button button--primary",
                type: "button",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.closePanel())
              }, " St\xE4ng ")
            ]),
            default: _withCtx(() => [
              _createElementVNode("div", _hoisted_1, [
                _cache[5] || (_cache[5] = _createElementVNode(
                  "h1",
                  null,
                  "Prim\xE4ryta",
                  -1
                  /* CACHED */
                )),
                _cache[6] || (_cache[6] = _createElementVNode(
                  "p",
                  null,
                  "Klicka nedan f\xF6r att se mer i sekund\xE4rpanelen.",
                  -1
                  /* CACHED */
                )),
                _createElementVNode("ul", null, [
                  (_openBlock(true), _createElementBlock(
                    _Fragment,
                    null,
                    _renderList(_ctx.items, (item) => {
                      return _openBlock(), _createElementBlock("li", {
                        key: item.title
                      }, [
                        _createElementVNode("a", {
                          id: item.title,
                          href: "javascript:void(0)",
                          class: "anchor",
                          onClick: ($event) => _ctx.openPanel(item)
                        }, _toDisplayString(item.title), 9, _hoisted_2)
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
      })
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-0c5f8c"
});
export {
  render
};
