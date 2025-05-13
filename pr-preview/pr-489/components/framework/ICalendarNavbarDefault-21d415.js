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

// virtual-entry:virtual:packages/vue/src/internal-components/calendar/examples/ICalendarNavbarDefault.vue:ICalendarNavbarDefault-21d415.js
import { defineComponent, shallowRef } from "vue";
import { ICalendarNavbar } from "@fkui/vue";
import { FDate } from "@fkui/date";
import { resolveComponent as _resolveComponent, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "ICalendarMonthDefaultExample",
  components: { ICalendarNavbar },
  data() {
    return {
      month: shallowRef(FDate.fromIso("2022-10-01")),
      minDate: shallowRef(FDate.fromIso("2020-01-01")),
      maxDate: shallowRef(FDate.fromIso("2029-01-30"))
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_i_calendar_navbar = _resolveComponent("i-calendar-navbar");
  return _openBlock(), _createBlock(_component_i_calendar_navbar, {
    modelValue: _ctx.month,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.month = $event),
    "min-date": _ctx.minDate,
    "max-date": _ctx.maxDate
  }, null, 8, ["modelValue", "min-date", "max-date"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-21d415"
});
export {
  render
};
