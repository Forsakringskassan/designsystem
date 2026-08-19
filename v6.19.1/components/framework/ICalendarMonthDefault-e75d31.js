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

// virtual-entry:virtual:packages/vue/src/internal-components/calendar/examples/ICalendarMonthDefault.vue:ICalendarMonthDefault-e75d31.js
import { defineComponent, shallowRef } from "vue";
import { ICalendarMonth } from "@fkui/vue";
import { FDate } from "@fkui/date";
import { toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "ICalendarMonthDefaultExample",
  components: { ICalendarMonth },
  data() {
    return {
      month: shallowRef(FDate.fromIso("2022-10-01")),
      minDate: shallowRef(FDate.fromIso("2020-01-01")),
      maxDate: shallowRef(FDate.fromIso("2029-01-30"))
    };
  },
  methods: {
    onClick(date) {
      alert(`Du klickade p\xE5 dag ${date.day}`);
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_i_calendar_month = _resolveComponent("i-calendar-month");
  return _openBlock(), _createBlock(_component_i_calendar_month, {
    modelValue: _ctx.month,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.month = $event),
    "min-date": _ctx.minDate,
    "max-date": _ctx.maxDate,
    onClick: _ctx.onClick
  }, {
    default: _withCtx(({ date }) => [
      _createTextVNode(
        _toDisplayString(date.day),
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue", "min-date", "max-date", "onClick"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-e75d31"
});
export {
  render
};
