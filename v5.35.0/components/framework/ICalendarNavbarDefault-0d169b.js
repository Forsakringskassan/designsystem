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
    app.use(import_vue2.ErrorPlugin);
    app.use(import_vue2.ValidationPlugin);
    app.use(import_vue2.TestPlugin);
    app.use(import_vue2.TranslationPlugin);
    app.mount(selector);
    app.config.warnHandler = (msg, vm, trace) => {
      console.warn(`Warning:`, msg, trace);
      throw new Error(msg);
    };
  }

  // virtual-entry:./packages/vue/src/internal-components/calendar/examples/ICalendarNavbarDefault.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_date = __require("@fkui/date");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "ICalendarMonthDefaultExample",
    components: { ICalendarNavbar: import_vue4.ICalendarNavbar },
    data() {
      return {
        month: (0, import_vue3.shallowRef)(import_date.FDate.fromIso("2022-10-01")),
        minDate: (0, import_vue3.shallowRef)(import_date.FDate.fromIso("2020-01-01")),
        maxDate: (0, import_vue3.shallowRef)(import_date.FDate.fromIso("2029-01-30"))
      };
    }
  });
  function render(_ctx, _cache) {
    const _component_i_calendar_navbar = (0, import_vue5.resolveComponent)("i-calendar-navbar");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_i_calendar_navbar, {
      modelValue: _ctx.month,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.month = $event),
      "min-date": _ctx.minDate,
      "max-date": _ctx.maxDate
    }, null, 8, ["modelValue", "min-date", "max-date"]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#ICalendarNavbarDefault"
  });
})();