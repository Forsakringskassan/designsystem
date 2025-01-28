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

  // virtual-entry:./packages/vue/src/components/FCalendar/examples/FCalendarSelectDays.vue
  var import_vue3 = __require("vue");
  var import_date = __require("@fkui/date");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FCalendarDefault",
    components: {
      FCalendar: import_vue4.FCalendar,
      FCalendarDay: import_vue4.FCalendarDay
    },
    data() {
      return {
        month: import_date.FDate.fromIso("2022-10-01"),
        min: import_date.FDate.fromIso("2020-10-01"),
        max: import_date.FDate.fromIso("2029-12-31"),
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
    const _component_f_calendar_day = (0, import_vue5.resolveComponent)("f-calendar-day");
    const _component_f_calendar = (0, import_vue5.resolveComponent)("f-calendar");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createVNode)(_component_f_calendar, {
        modelValue: _ctx.month,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.month = $event),
        "min-date": _ctx.min,
        "max-date": _ctx.max,
        onClick: _ctx.onSelectDay
      }, {
        default: (0, import_vue5.withCtx)(({ date, isFocused }) => [
          (0, import_vue5.createVNode)(_component_f_calendar_day, {
            "data-test": "multiple-days",
            day: date,
            focused: isFocused,
            selected: _ctx.isSelected(date)
          }, null, 8, ["day", "focused", "selected"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "min-date", "max-date", "onClick"]),
      (0, import_vue5.createElementVNode)(
        "span",
        _hoisted_1,
        " Valda dagar: " + (0, import_vue5.toDisplayString)(_ctx.selected),
        1
        /* TEXT */
      )
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FCalendarSelectDays"
  });
})();
