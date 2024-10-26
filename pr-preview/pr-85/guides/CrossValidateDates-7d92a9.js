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

  // virtual-entry:./docs/guides/validation/examples/CrossValidateDates.vue
  var import_vue3 = __require("vue");
  var import_date = __require("@fkui/date");
  var import_logic = __require("@fkui/logic");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var MIN_DATE = import_date.FDate.now().addMonths(-1).toString();
  var MAX_DATE = import_date.FDate.now().addMonths(1).toString();
  var exampleComponent = (0, import_vue3.defineComponent)({
    components: { FDatepickerField: import_vue4.FDatepickerField, FFieldset: import_vue4.FFieldset },
    data() {
      return {
        fromDate: "",
        toDate: "",
        toMinLimit: MIN_DATE,
        Weekday: import_date.Weekday,
        MIN_DATE,
        MAX_DATE
      };
    },
    methods: {
      getMinToDate(validFromDate) {
        if ((0, import_logic.isEmpty)(this.fromDate) || !validFromDate) {
          return MIN_DATE;
        }
        return this.fromDate;
      },
      onValidityFromDate({ detail: { isValid } }) {
        this.toMinLimit = this.getMinToDate(isValid);
      }
    }
  });
  function render(_ctx, _cache) {
    const _component_f_datepicker_field = (0, import_vue5.resolveComponent)("f-datepicker-field");
    const _component_f_fieldset = (0, import_vue5.resolveComponent)("f-fieldset");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_fieldset, null, {
      label: (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
        (0, import_vue5.createTextVNode)(" Anst\xE4llningsperiod ")
      ])),
      default: (0, import_vue5.withCtx)(() => [
        _cache[5] || (_cache[5] = (0, import_vue5.createTextVNode)()),
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_datepicker_field, {
          ref: "fromDate",
          modelValue: _ctx.fromDate,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.fromDate = $event),
          onComponentValidity: _ctx.onValidityFromDate
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
            (0, import_vue5.createTextVNode)("\n            Fr\xE5n och med\n        ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "onComponentValidity"])), [
          [
            _directive_validation,
            {
              invalidWeekdays: { days: [_ctx.Weekday.SATURDAY, _ctx.Weekday.SUNDAY] },
              minDate: {
                limit: _ctx.MIN_DATE
              },
              maxDate: {
                limit: _ctx.MAX_DATE
              }
            },
            void 0,
            {
              required: true,
              invalidWeekdays: true,
              minDate: true,
              maxDate: true
            }
          ]
        ]),
        _cache[6] || (_cache[6] = (0, import_vue5.createTextVNode)()),
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_datepicker_field, {
          modelValue: _ctx.toDate,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.toDate = $event)
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[4] || (_cache[4] = [
            (0, import_vue5.createTextVNode)("\n            Till och med\n        ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])), [
          [
            _directive_validation,
            {
              invalidWeekdays: { days: [_ctx.Weekday.SATURDAY, _ctx.Weekday.SUNDAY] },
              minDate: {
                limit: _ctx.toMinLimit
              },
              maxDate: {
                limit: _ctx.MAX_DATE
              }
            },
            void 0,
            {
              required: true,
              invalidWeekdays: true,
              minDate: true,
              maxDate: true
            }
          ]
        ])
      ]),
      _: 1
      /* STABLE */
    });
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#CrossValidateDates"
  });
})();