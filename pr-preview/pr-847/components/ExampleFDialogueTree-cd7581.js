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

  // virtual-entry:./packages/vue/src/components/FDialogueTree/examples/ExampleFDialogueTree.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  function generateOption(label) {
    return {
      label: `Option (${label})`,
      question: {
        label: `Fourth question (${label})`,
        options: [
          {
            label: `Option (${label}.1)`,
            question: {
              label: `Answer (${label})`,
              userData: {
                type: "formA",
                foo: "bar"
              }
            }
          },
          {
            label: `Option (${label}.2)`,
            question: {
              label: `Answer (${label})`,
              userData: {
                type: "formB",
                bar: "foo"
              }
            }
          }
        ]
      }
    };
  }
  var DIALOGUE_TREE_DATA = {
    label: "First question",
    options: [
      {
        label: "Option 1",
        question: {
          label: "Second question 1",
          options: [generateOption("1.1"), generateOption("1.2")]
        }
      },
      {
        label: "Option 2",
        question: {
          label: "Second question 2",
          options: [generateOption("2.1"), generateOption("2.2")]
        }
      }
    ]
  };
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FDialogueTreeExample",
    components: { FDialogueTree: import_vue4.FDialogueTree, FTextField: import_vue4.FTextField },
    data() {
      return {
        tree: DIALOGUE_TREE_DATA,
        current: {
          label: "",
          lastStep: true,
          steps: []
        }
      };
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _component_f_dialogue_tree = (0, import_vue5.resolveComponent)("f-dialogue-tree");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createElementVNode)(
        "h1",
        null,
        (0, import_vue5.toDisplayString)(_ctx.current.label),
        1
        /* TEXT */
      ),
      (0, import_vue5.createVNode)(_component_f_dialogue_tree, {
        modelValue: _ctx.current,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.current = $event),
        "dialogue-tree": _ctx.tree
      }, {
        default: (0, import_vue5.withCtx)(({ userData }) => [
          userData.type === "formA" ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
            import_vue5.Fragment,
            { key: 0 },
            [
              _cache[2] || (_cache[2] = (0, import_vue5.createTextVNode)(" formA ")),
              (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, null, {
                default: (0, import_vue5.withCtx)(() => _cache[1] || (_cache[1] = [
                  (0, import_vue5.createTextVNode)(" Field 1 ")
                ])),
                _: 1
                /* STABLE */
              })), [
                [
                  _directive_validation,
                  { maxLength: { length: 32 } },
                  void 0,
                  {
                    required: true,
                    maxLength: true
                  }
                ]
              ])
            ],
            64
            /* STABLE_FRAGMENT */
          )) : (0, import_vue5.createCommentVNode)("v-if", true),
          userData.type === "formB" ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
            import_vue5.Fragment,
            { key: 1 },
            [
              _cache[4] || (_cache[4] = (0, import_vue5.createTextVNode)(" formB ")),
              (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, null, {
                default: (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
                  (0, import_vue5.createTextVNode)(" Field 1 ")
                ])),
                _: 1
                /* STABLE */
              })), [
                [
                  _directive_validation,
                  { maxLength: { length: 32 } },
                  void 0,
                  {
                    required: true,
                    maxLength: true
                  }
                ]
              ])
            ],
            64
            /* STABLE_FRAGMENT */
          )) : (0, import_vue5.createCommentVNode)("v-if", true)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "dialogue-tree"])
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#ExampleFDialogueTree"
  });
})();
