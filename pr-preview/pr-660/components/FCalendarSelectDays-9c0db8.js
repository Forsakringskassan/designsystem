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

// virtual-entry:virtual:packages/vue/src/components/FCalendar/examples/FCalendarSelectDays.vue:FCalendarSelectDays-9c0db8.js
import { defineComponent } from "vue";
import { FDate } from "@fkui/date";
import { FCalendar, FCalendarDay } from "@fkui/vue";
import { resolveComponent as _resolveComponent, createVNode as _createVNode, withCtx as _withCtx, toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FCalendarDefault",
  components: {
    FCalendar,
    FCalendarDay
  },
  data() {
    return {
      month: FDate.fromIso("2022-10-01"),
      min: FDate.fromIso("2020-10-01"),
      max: FDate.fromIso("2029-12-31"),
      selected: []
    };
  },
  methods: {
    onSelectDay(date) {
      const dateString = date.toString();
      if (this.selected.includes(dateString)) {
        this.selected.splice(this.selected.indexOf(dateString), 1);
      } else {
        this.selected.push(dateString);
      }
    },
    isSelected(date) {
      return this.selected.find((it) => date.equals(it)) !== void 0;
    }
  }
});
var _hoisted_1 = { "data-test": "days-array" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_calendar_day = _resolveComponent("f-calendar-day");
  const _component_f_calendar = _resolveComponent("f-calendar");
  return _openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_f_calendar, {
      modelValue: _ctx.month,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.month = $event),
      "min-date": _ctx.min,
      "max-date": _ctx.max,
      onClick: _ctx.onSelectDay
    }, {
      default: _withCtx(({ date, isFocused }) => [
        _createVNode(_component_f_calendar_day, {
          "data-test": "multiple-days",
          day: date,
          focused: isFocused,
          selected: _ctx.isSelected(date)
        }, null, 8, ["day", "focused", "selected"])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "min-date", "max-date", "onClick"]),
    _createElementVNode(
      "span",
      _hoisted_1,
      " Valda dagar: " + _toDisplayString(_ctx.selected),
      1
      /* TEXT */
    )
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-9c0db8"
});
export {
  render
};
