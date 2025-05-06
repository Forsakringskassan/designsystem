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

// virtual-entry:virtual:packages/vue/src/components/FDialogueTree/examples/ExampleFDialogueTree.vue:ExampleFDialogueTree-1ef8c2.js
import { defineComponent } from "vue";
import {
  FDialogueTree,
  FTextField
} from "@fkui/vue";
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, Fragment as _Fragment, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, createVNode as _createVNode } from "vue";
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
var exampleComponent = defineComponent({
  name: "FDialogueTreeExample",
  components: { FDialogueTree, FTextField },
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
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_f_dialogue_tree = _resolveComponent("f-dialogue-tree");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock("div", null, [
    _createElementVNode(
      "h1",
      null,
      _toDisplayString(_ctx.current.label),
      1
      /* TEXT */
    ),
    _createVNode(_component_f_dialogue_tree, {
      modelValue: _ctx.current,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.current = $event),
      "dialogue-tree": _ctx.tree
    }, {
      default: _withCtx(({ userData }) => [
        userData.type === "formA" ? (_openBlock(), _createElementBlock(
          _Fragment,
          { key: 0 },
          [
            _cache[2] || (_cache[2] = _createTextVNode(" formA ")),
            _withDirectives((_openBlock(), _createBlock(_component_f_text_field, null, {
              default: _withCtx(() => _cache[1] || (_cache[1] = [
                _createTextVNode(" Field 1 ")
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
        )) : _createCommentVNode("v-if", true),
        userData.type === "formB" ? (_openBlock(), _createElementBlock(
          _Fragment,
          { key: 1 },
          [
            _cache[4] || (_cache[4] = _createTextVNode(" formB ")),
            _withDirectives((_openBlock(), _createBlock(_component_f_text_field, null, {
              default: _withCtx(() => _cache[3] || (_cache[3] = [
                _createTextVNode(" Field 1 ")
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
        )) : _createCommentVNode("v-if", true)
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "dialogue-tree"])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-1ef8c2"
});
export {
  render
};
