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

  // virtual-entry:./packages/vue/src/internal-components/calendar/examples/ICalendarMonthDefault.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_date = __require("@fkui/date");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "ICalendarMonthDefaultExample",
    components: { ICalendarMonth: import_vue4.ICalendarMonth },
    data() {
      return {
        month: (0, import_vue3.shallowRef)(import_date.FDate.fromIso("2022-10-01")),
        minDate: (0, import_vue3.shallowRef)(import_date.FDate.fromIso("2020-01-01")),
        maxDate: (0, import_vue3.shallowRef)(import_date.FDate.fromIso("2029-01-30"))
      };
    },
    methods: {
      onClick(date) {
        alert(`Du klickade p\xE5 dag ${date.day}`);
      }
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_i_calendar_month = (0, import_vue5.resolveComponent)("i-calendar-month");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_i_calendar_month, {
      modelValue: _ctx.month,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.month = $event),
      "min-date": _ctx.minDate,
      "max-date": _ctx.maxDate,
      onClick: _ctx.onClick
    }, {
      default: (0, import_vue5.withCtx)(({ date }) => [
        (0, import_vue5.createTextVNode)(
          (0, import_vue5.toDisplayString)(date.day),
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
    selector: "#ICalendarMonthDefault"
  });
})();
