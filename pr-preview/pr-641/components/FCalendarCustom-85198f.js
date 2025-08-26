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

// virtual-entry:virtual:packages/vue/src/components/FCalendar/examples/FCalendarCustom.vue:FCalendarCustom-85198f.js
import { defineComponent } from "vue";
import { FDate } from "@fkui/date";
import { FCalendar } from "@fkui/vue";
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, resolveComponent as _resolveComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var holidays = [
  {
    date: "12-24",
    text: "Julafton"
  },
  {
    date: "12-25",
    text: "Juldagen"
  },
  {
    date: "12-26",
    text: "Annandag jul"
  }
];
var events = [
  "Standup",
  "Tillg\xE4nglighetsm\xF6te",
  "M\xF6tesfri dag",
  "",
  "Fikadags",
  "F\xF6rfining",
  "L\xE5nglunch",
  "Gymdag",
  "Tandl\xE4kare",
  "PR Review",
  "M\xF6te med FKUI",
  "Bidra till FKUI",
  "F\xF6delsedag",
  "Designm\xF6te"
];
var randomEvents = [];
for (let i = 0; i < 31; i++) {
  const randomIndex = Math.floor(Math.random() * events.length);
  const randomEvent = events[randomIndex];
  randomEvents.push(randomEvent);
}
var exampleComponent = defineComponent({
  name: "FCalendarCustom",
  components: {
    FCalendar
  },
  data() {
    return {
      month: FDate.fromIso("2022-12-24"),
      min: FDate.fromIso("2020-01-01"),
      max: FDate.fromIso("2029-01-30"),
      tabDay: FDate.fromIso("2022-12-24"),
      selectedDay: void 0
    };
  },
  methods: {
    getEvents(date) {
      const dayOfYear = `${date.month}-${date.day}`;
      const match = holidays.find((it) => it.date === dayOfYear);
      if (match) {
        return match.text;
      }
      const eventIndex = date.day - 1;
      return randomEvents[eventIndex];
    },
    eventClasses(date) {
      const classes = ["event"];
      const dayOfYear = `${date.month}-${date.day}`;
      const match = holidays.find((it) => it.date === dayOfYear);
      if (match) {
        classes.push("holiday");
      }
      return classes;
    },
    dayClasses(date) {
      const classes = ["my-custom-day"];
      if (this.selectedDay && date.equals(this.selectedDay)) {
        classes.push("selected");
      }
      return classes;
    },
    onSelectDay(date) {
      this.selectedDay = date;
    }
  }
});
var _hoisted_1 = { class: "date" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_calendar = _resolveComponent("f-calendar");
  return _openBlock(), _createBlock(_component_f_calendar, {
    modelValue: _ctx.month,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.month = $event),
    "min-date": _ctx.min,
    "max-date": _ctx.max,
    "tab-date": _ctx.tabDay,
    onClick: _ctx.onSelectDay
  }, {
    default: _withCtx(({ date }) => [
      _createElementVNode(
        "span",
        {
          class: _normalizeClass(_ctx.dayClasses(date))
        },
        [
          _createElementVNode(
            "span",
            _hoisted_1,
            _toDisplayString(date.day),
            1
            /* TEXT */
          ),
          _createElementVNode(
            "span",
            {
              class: _normalizeClass(_ctx.eventClasses(date))
            },
            _toDisplayString(_ctx.getEvents(date)),
            3
            /* TEXT, CLASS */
          )
        ],
        2
        /* CLASS */
      )
    ]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue", "min-date", "max-date", "tab-date", "onClick"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-85198f"
});
export {
  render
};
