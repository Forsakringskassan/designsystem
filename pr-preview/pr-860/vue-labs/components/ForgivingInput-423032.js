// docs/src/setup.ts
import { createApp, h } from "vue";
import {
  ErrorPlugin,
  FErrorHandlingApp,
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
  app.use(ErrorPlugin);
  app.use(ValidationPlugin);
  app.use(TestPlugin);
  app.use(TranslationPlugin);
  app.mount(selector);
  setRunningContext(app);
}

// virtual-entry:virtual:src/components/XTimeTextField/examples/ForgivingInput.vue:ForgivingInput-423032.js
import { defineComponent } from "vue";
import {
  XTimeTextField,
  forgivingParseTimeToNumber,
  minutesToHoursFloat,
  minutesToObject,
  minutesToUserFriendlyString
} from "@fkui/vue-labs";
import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, toDisplayString as _toDisplayString, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "XTimeComponentExample",
  components: {
    XTimeTextField
  },
  data() {
    return {
      time: void 0,
      parser: (value) => forgivingParseTimeToNumber(value)
    };
  },
  computed: {
    userFriendlyValue() {
      return minutesToUserFriendlyString(this.time);
    },
    timeInHours() {
      return minutesToHoursFloat(this.time);
    },
    timeAsObject() {
      return JSON.stringify(minutesToObject(this.time));
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_x_time_text_field = _resolveComponent("x-time-text-field");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock("div", null, [
    _withDirectives((_openBlock(), _createBlock(_component_x_time_text_field, {
      modelValue: _ctx.time,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.time = $event),
      parser: _ctx.parser
    }, {
      description: _withCtx(({ formatDescriptionClass }) => [
        _createElementVNode(
          "span",
          {
            class: _normalizeClass(formatDescriptionClass)
          },
          "(tt:mm)",
          2
          /* CLASS */
        )
      ]),
      default: _withCtx(() => [
        _cache[1] || (_cache[1] = _createTextVNode(
          " Ange arbetstid ",
          -1
          /* CACHED */
        ))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "parser"])), [
      [
        _directive_validation,
        {
          hoursMinutes: {
            errorMessage: "Du har skrivit in ett felaktigt tidformat.",
            parser: [_ctx.parser]
          },
          maxTime: {
            maxTime: "24:00",
            errorMessage: "Du kan inte fylla i en tid \xF6verstigande 24 timmar.",
            parser: [_ctx.parser]
          }
        },
        void 0,
        {
          required: true,
          hoursMinutes: true,
          maxTime: true
        }
      ]
    ]),
    _createElementVNode("p", null, [
      _createTextVNode(
        " V\xE4rde: " + _toDisplayString(_ctx.time) + ".",
        1
        /* TEXT */
      ),
      _cache[2] || (_cache[2] = _createElementVNode(
        "br",
        null,
        null,
        -1
        /* CACHED */
      )),
      _createTextVNode(
        " Renskrivet v\xE4rde: " + _toDisplayString(_ctx.userFriendlyValue) + ".",
        1
        /* TEXT */
      ),
      _cache[3] || (_cache[3] = _createElementVNode(
        "br",
        null,
        null,
        -1
        /* CACHED */
      )),
      _createTextVNode(
        " V\xE4rde i timmar: " + _toDisplayString(_ctx.timeInHours) + ".",
        1
        /* TEXT */
      ),
      _cache[4] || (_cache[4] = _createElementVNode(
        "br",
        null,
        null,
        -1
        /* CACHED */
      )),
      _createTextVNode(
        " V\xE4rde i objektnotation: " + _toDisplayString(_ctx.timeAsObject) + ". ",
        1
        /* TEXT */
      )
    ])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-423032"
});
export {
  render
};
