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

// virtual-entry:virtual:packages/vue/src/internal-components/IAnimateExpand/examples/IAnimateExpandRadioGroup.vue:IAnimateExpandRadioGroup-ed40f0.js
import { defineComponent } from "vue";
import { IAnimateExpand, FFieldset, FRadioField, FTextField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, resolveDirective as _resolveDirective, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives } from "vue";
var exampleComponent = defineComponent({
  namne: "IAnimateExpandRadioGroup",
  components: { IAnimateExpand, FFieldset, FRadioField, FTextField },
  data() {
    return {
      moreQuestions: "",
      areYouSure: ""
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_radio_field = _resolveComponent("f-radio-field");
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_i_animate_expand = _resolveComponent("i-animate-expand");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createBlock(_component_f_fieldset, { name: "more-questions" }, {
    label: _withCtx(() => [..._cache[4] || (_cache[4] = [
      _createTextVNode(
        " Vill du svar p\xE5 mer fr\xE5gor? ",
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(() => [
      _createVNode(_component_f_radio_field, {
        modelValue: _ctx.moreQuestions,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.moreQuestions = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[5] || (_cache[5] = [
          _createTextVNode(
            " Ja tack ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_i_animate_expand, { expanded: _ctx.moreQuestions }, {
        default: _withCtx(() => [
          _createVNode(_component_f_fieldset, {
            class: "indent",
            name: "are-you-sure"
          }, {
            label: _withCtx(() => [..._cache[6] || (_cache[6] = [
              _createTextVNode(
                " \xC4r du s\xE4ker? ",
                -1
                /* CACHED */
              )
            ])]),
            default: _withCtx(() => [
              _createVNode(_component_f_radio_field, {
                modelValue: _ctx.areYouSure,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.areYouSure = $event),
                value: true
              }, {
                default: _withCtx(() => [..._cache[7] || (_cache[7] = [
                  _createTextVNode(
                    " Ja, visa mer ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"]),
              _createVNode(_component_i_animate_expand, { expanded: _ctx.areYouSure }, {
                default: _withCtx(() => [
                  _withDirectives((_openBlock(), _createBlock(_component_f_text_field, { class: "indent" }, {
                    default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                      _createTextVNode(
                        " Vad tyckte du? ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  })), [
                    [
                      _directive_validation,
                      void 0,
                      void 0,
                      { maxLength: true }
                    ]
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["expanded"]),
              _createVNode(_component_f_radio_field, {
                modelValue: _ctx.areYouSure,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.areYouSure = $event),
                value: false
              }, {
                default: _withCtx(() => [..._cache[9] || (_cache[9] = [
                  _createTextVNode(
                    " Nej tack ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["expanded"]),
      _createVNode(_component_f_radio_field, {
        modelValue: _ctx.moreQuestions,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.moreQuestions = $event),
        value: false
      }, {
        default: _withCtx(() => [..._cache[10] || (_cache[10] = [
          _createTextVNode(
            " Nej tack ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-ed40f0"
});
export {
  render
};
