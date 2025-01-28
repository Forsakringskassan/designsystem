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

  // virtual-entry:./packages/vue/src/components/FCalendar/examples/FCalendarCustom.vue
  var import_vue3 = __require("vue");
  var import_date = __require("@fkui/date");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
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
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FCalendarCustom",
    components: {
      FCalendar: import_vue4.FCalendar
    },
    data() {
      return {
        month: import_date.FDate.fromIso("2022-12-24"),
        min: import_date.FDate.fromIso("2020-01-01"),
        max: import_date.FDate.fromIso("2029-01-30"),
        tabDay: import_date.FDate.fromIso("2022-12-24"),
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
    const _component_f_calendar = (0, import_vue5.resolveComponent)("f-calendar");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_calendar, {
      modelValue: _ctx.month,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.month = $event),
      "min-date": _ctx.min,
      "max-date": _ctx.max,
      "tab-date": _ctx.tabDay,
      onClick: _ctx.onSelectDay
    }, {
      default: (0, import_vue5.withCtx)(({ date }) => [
        (0, import_vue5.createElementVNode)(
          "span",
          {
            class: (0, import_vue5.normalizeClass)(_ctx.dayClasses(date))
          },
          [
            (0, import_vue5.createElementVNode)(
              "span",
              _hoisted_1,
              (0, import_vue5.toDisplayString)(date.day),
              1
              /* TEXT */
            ),
            (0, import_vue5.createElementVNode)(
              "span",
              {
                class: (0, import_vue5.normalizeClass)(_ctx.eventClasses(date))
              },
              (0, import_vue5.toDisplayString)(_ctx.getEvents(date)),
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
    selector: "#FCalendarCustom"
  });
})();
