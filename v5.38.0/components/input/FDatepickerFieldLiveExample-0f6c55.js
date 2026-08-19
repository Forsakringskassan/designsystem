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

  // virtual-entry:./packages/vue/src/components/FDatepickerField/examples/FDatepickerFieldLiveExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");
  var import_date = __require("@fkui/date");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FDatepickerFieldLiveExample",
    components: { LiveExample: import_docs_live_example.LiveExample, FFieldset: import_vue4.FFieldset, FCheckboxField: import_vue4.FCheckboxField, FSelectField: import_vue4.FSelectField },
    data() {
      return {
        DateFormat: import_date.DateFormat,
        FDate: import_date.FDate,
        monthToShow: "",
        minDateLimit: "",
        maxDateLimit: "",
        invalidDates: [],
        invalidWeekdays: false,
        highlightTodayEnabled: true,
        isRequired: false,
        isDisabled: false,
        alwaysInlineEnabled: false,
        tooltipVisible: false,
        descriptionVisible: false
      };
    },
    computed: {
      livedata() {
        return { model: "", FDate: import_date.FDate, Weekday: import_date.Weekday };
      },
      components() {
        return {
          FDatepickerField: import_vue4.FDatepickerField,
          FDate: import_date.FDate,
          Weekday: import_date.Weekday,
          FTooltip: import_vue4.FTooltip
        };
      },
      alwaysInline() {
        return this.alwaysInlineEnabled ? "always-inline" : "";
      },
      initialMonth() {
        return this.monthToShow ? `:initial-month='FDate.fromIso("${this.monthToShow}")'` : "";
      },
      validation() {
        let validators = "";
        const settings = [];
        if (this.isRequired) {
          validators += ".required";
        }
        if (this.minDateLimit) {
          validators += ".minDate";
          settings.push(` minDate: { limit: '${this.minDateLimit}' }`);
        }
        if (this.maxDateLimit) {
          validators += ".maxDate";
          settings.push(` maxDate: { limit: '${this.maxDateLimit}' }`);
        }
        if (this.invalidWeekdays) {
          validators += ".invalidWeekdays";
          settings.push(` invalidWeekdays: { days: [Weekday.SATURDAY, Weekday.SUNDAY] }`);
        }
        if (this.invalidDates.length > 0) {
          validators += ".invalidDates";
          const dates = this.getInvalidDates();
          settings.push(` invalidDates: { dates: ['${dates.join("', '")}'] }`);
        }
        if (settings.length > 0) {
          return validators ? `v-validation${validators}="{${settings.join(", ")}}"` : "";
        } else {
          return validators ? `v-validation${validators}` : "";
        }
      },
      highlightToday() {
        return this.highlightTodayEnabled ? "" : `:highlight-today="false"`;
      },
      disabled() {
        return this.isDisabled ? "disabled" : "";
      },
      description() {
        const template = (
          /* HTML */
          `
                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass"> Hj\xE4lptext </span>
                </template>
            `
        );
        return this.descriptionVisible ? template : "";
      },
      tooltip() {
        const template = (
          /* HTML */
          `
                <template #tooltip>
                    <f-tooltip screen-reader-text="L\xE4s mer h\xE4r">
                        <template #header> Header </template>
                        <template #body> Body </template>
                    </f-tooltip>
                </template>
            `
        );
        return this.tooltipVisible ? template : "";
      },
      template() {
        return (
          /* HTML */
          `
                <f-datepicker-field
                    v-model="model"
                    ${this.initialMonth}
                    ${this.alwaysInline}
                    ${this.highlightToday}
                    ${this.validation}
                    ${this.disabled}
                >
                    <template #default> Etikett </template>
                    ${this.tooltip} ${this.description}
                </f-datepicker-field>
            `
        );
      }
    },
    methods: {
      getDateWithOffset(months) {
        return import_date.FDate.now().addMonths(months).toString();
      },
      getMonthYearString(date) {
        const fdate = import_date.FDate.fromIso(date);
        return `${fdate.monthName} ${fdate.year}`;
      },
      getInvalidDates() {
        return [import_date.FDate.now().addDays(-7).toString(), import_date.FDate.now().addDays(-3).toString()];
      }
    }
  });
  var _hoisted_1 = ["value"];
  var _hoisted_2 = ["value"];
  var _hoisted_3 = ["value"];
  var _hoisted_4 = ["value"];
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_select_field = (0, import_vue5.resolveComponent)("f-select-field");
    const _component_f_checkbox_field = (0, import_vue5.resolveComponent)("f-checkbox-field");
    const _component_f_fieldset = (0, import_vue5.resolveComponent)("f-fieldset");
    const _component_live_example = (0, import_vue5.resolveComponent)("live-example");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_live_example, {
      components: _ctx.components,
      template: _ctx.template,
      livedata: _ctx.livedata
    }, {
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_select_field, {
          modelValue: _ctx.monthToShow,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.monthToShow = $event)
        }, {
          label: (0, import_vue5.withCtx)(() => _cache[11] || (_cache[11] = [
            (0, import_vue5.createTextVNode)(" Visa m\xE5nad ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            _cache[12] || (_cache[12] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "" },
              "Nuvarande m\xE5nad (standard)",
              -1
              /* HOISTED */
            )),
            (0, import_vue5.createElementVNode)("option", {
              value: _ctx.getDateWithOffset(-6)
            }, " Exempel: " + (0, import_vue5.toDisplayString)(_ctx.getMonthYearString(_ctx.getDateWithOffset(-6))), 9, _hoisted_1)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_select_field, {
          modelValue: _ctx.minDateLimit,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.minDateLimit = $event)
        }, {
          label: (0, import_vue5.withCtx)(() => _cache[13] || (_cache[13] = [
            (0, import_vue5.createTextVNode)(" Tidigaste valbara datum ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            _cache[14] || (_cache[14] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "" },
              "10 \xE5r tillbaka (standard)",
              -1
              /* HOISTED */
            )),
            (0, import_vue5.createElementVNode)("option", {
              value: _ctx.getDateWithOffset(-3)
            }, "Exempel: " + (0, import_vue5.toDisplayString)(_ctx.getDateWithOffset(-3)), 9, _hoisted_2)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_select_field, {
          modelValue: _ctx.maxDateLimit,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.maxDateLimit = $event)
        }, {
          label: (0, import_vue5.withCtx)(() => _cache[15] || (_cache[15] = [
            (0, import_vue5.createTextVNode)(" Senaste valbara datum ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            _cache[16] || (_cache[16] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "" },
              "10 \xE5r fram\xE5t (standard)",
              -1
              /* HOISTED */
            )),
            (0, import_vue5.createElementVNode)("option", {
              value: _ctx.getDateWithOffset(3)
            }, "Exempel: " + (0, import_vue5.toDisplayString)(_ctx.getDateWithOffset(3)), 9, _hoisted_3)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_select_field, {
          modelValue: _ctx.invalidWeekdays,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.invalidWeekdays = $event)
        }, {
          label: (0, import_vue5.withCtx)(() => _cache[17] || (_cache[17] = [
            (0, import_vue5.createTextVNode)(" Ej valbara veckodagar ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            _cache[18] || (_cache[18] = (0, import_vue5.createElementVNode)(
              "option",
              { value: false },
              "Inga (standard)",
              -1
              /* HOISTED */
            )),
            _cache[19] || (_cache[19] = (0, import_vue5.createElementVNode)(
              "option",
              { value: true },
              "Exempel: L\xF6rdag och s\xF6ndag",
              -1
              /* HOISTED */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_select_field, {
          modelValue: _ctx.invalidDates,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.invalidDates = $event)
        }, {
          label: (0, import_vue5.withCtx)(() => _cache[20] || (_cache[20] = [
            (0, import_vue5.createTextVNode)(" Ej valbara datum ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            _cache[21] || (_cache[21] = (0, import_vue5.createElementVNode)(
              "option",
              { value: [] },
              "Inga (standard)",
              -1
              /* HOISTED */
            )),
            (0, import_vue5.createElementVNode)("option", {
              value: _ctx.getInvalidDates()
            }, "Exempel: " + (0, import_vue5.toDisplayString)(_ctx.getInvalidDates().join(", ")), 9, _hoisted_4)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.highlightTodayEnabled,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.highlightTodayEnabled = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[22] || (_cache[22] = [
            (0, import_vue5.createTextVNode)(" Markera dagens datum i kalendern ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isRequired,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.isRequired = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[23] || (_cache[23] = [
            (0, import_vue5.createTextVNode)(" Obligatorisk f\xE4lt ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isDisabled,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.isDisabled = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[24] || (_cache[24] = [
            (0, import_vue5.createTextVNode)(" Inaktivt f\xE4lt ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.alwaysInlineEnabled,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.alwaysInlineEnabled = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[25] || (_cache[25] = [
            (0, import_vue5.createTextVNode)(" Kalendern visas alltid inline ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_fieldset, { name: "etikett" }, {
          label: (0, import_vue5.withCtx)(() => _cache[26] || (_cache[26] = [
            (0, import_vue5.createTextVNode)(" Etiketten ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.tooltipVisible,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.tooltipVisible = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[27] || (_cache[27] = [
                (0, import_vue5.createTextVNode)(" Tooltip ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.descriptionVisible,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => _ctx.descriptionVisible = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[28] || (_cache[28] = [
                (0, import_vue5.createTextVNode)(" Hj\xE4lptext ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }, 8, ["components", "template", "livedata"]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FDatepickerFieldLiveExample"
  });
})();
