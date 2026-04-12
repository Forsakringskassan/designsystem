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

// virtual-entry:virtual:packages/vue/src/components/FDatepickerField/examples/FDatepickerFieldLiveExample.vue:FDatepickerFieldLiveExample-945ed7.js
import { defineComponent } from "vue";
import { DateFormat, FDate, Weekday } from "@fkui/date";
import { FCheckboxField, FDatepickerField, FFieldset, FSelectField, FTooltip } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FDatepickerFieldLiveExample",
  components: { LiveExample, FFieldset, FCheckboxField, FSelectField },
  data() {
    return {
      DateFormat,
      FDate,
      monthToShow: "",
      minDateLimit: "",
      maxDateLimit: "",
      invalidDates: [],
      invalidWeekdays: false,
      highlightTodayEnabled: true,
      isRequired: false,
      isDisabled: false,
      alwaysInlineEnabled: false,
      enableYearSelector: false,
      tooltipVisible: false,
      descriptionVisible: false
    };
  },
  computed: {
    livedata() {
      return { model: "", FDate, Weekday };
    },
    components() {
      return {
        FDatepickerField,
        FDate,
        Weekday,
        FTooltip
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
    yearSelector() {
      return this.enableYearSelector ? "year-selector" : "";
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
                    <f-tooltip screen-reader-text="L\xE4s mer h\xE4r" header-tag="h2">
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
                    ${this.yearSelector}
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
      return FDate.now().addMonths(months).toString();
    },
    getMonthYearString(date) {
      const fdate = FDate.fromIso(date);
      return `${fdate.monthName} ${String(fdate.year)}`;
    },
    getInvalidDates() {
      return [FDate.now().addDays(-7).toString(), FDate.now().addDays(-3).toString()];
    }
  }
});
var _hoisted_1 = ["value"];
var _hoisted_2 = ["value"];
var _hoisted_3 = ["value"];
var _hoisted_4 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livedata: _ctx.livedata
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_select_field, {
        modelValue: _ctx.monthToShow,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.monthToShow = $event)
      }, {
        label: _withCtx(() => [..._cache[12] || (_cache[12] = [
          _createTextVNode(
            " Visa m\xE5nad ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[13] || (_cache[13] = _createElementVNode(
            "option",
            { value: "" },
            "Nuvarande m\xE5nad (standard)",
            -1
            /* CACHED */
          )),
          _createElementVNode("option", {
            value: _ctx.getDateWithOffset(-6)
          }, " Exempel: " + _toDisplayString(_ctx.getMonthYearString(_ctx.getDateWithOffset(-6))), 9, _hoisted_1)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_select_field, {
        modelValue: _ctx.minDateLimit,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.minDateLimit = $event)
      }, {
        label: _withCtx(() => [..._cache[14] || (_cache[14] = [
          _createTextVNode(
            " Tidigaste valbara datum ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[15] || (_cache[15] = _createElementVNode(
            "option",
            { value: "" },
            "10 \xE5r tillbaka (standard)",
            -1
            /* CACHED */
          )),
          _createElementVNode("option", {
            value: _ctx.getDateWithOffset(-3)
          }, "Exempel: " + _toDisplayString(_ctx.getDateWithOffset(-3)), 9, _hoisted_2)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_select_field, {
        modelValue: _ctx.maxDateLimit,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.maxDateLimit = $event)
      }, {
        label: _withCtx(() => [..._cache[16] || (_cache[16] = [
          _createTextVNode(
            " Senaste valbara datum ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[17] || (_cache[17] = _createElementVNode(
            "option",
            { value: "" },
            "10 \xE5r fram\xE5t (standard)",
            -1
            /* CACHED */
          )),
          _createElementVNode("option", {
            value: _ctx.getDateWithOffset(3)
          }, "Exempel: " + _toDisplayString(_ctx.getDateWithOffset(3)), 9, _hoisted_3)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_select_field, {
        modelValue: _ctx.invalidWeekdays,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.invalidWeekdays = $event)
      }, {
        label: _withCtx(() => [..._cache[18] || (_cache[18] = [
          _createTextVNode(
            " Ej valbara veckodagar ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[19] || (_cache[19] = _createElementVNode(
            "option",
            { value: false },
            "Inga (standard)",
            -1
            /* CACHED */
          )),
          _cache[20] || (_cache[20] = _createElementVNode(
            "option",
            { value: true },
            "Exempel: L\xF6rdag och s\xF6ndag",
            -1
            /* CACHED */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_select_field, {
        modelValue: _ctx.invalidDates,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.invalidDates = $event)
      }, {
        label: _withCtx(() => [..._cache[21] || (_cache[21] = [
          _createTextVNode(
            " Ej valbara datum ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[22] || (_cache[22] = _createElementVNode(
            "option",
            { value: [] },
            "Inga (standard)",
            -1
            /* CACHED */
          )),
          _createElementVNode("option", {
            value: _ctx.getInvalidDates()
          }, "Exempel: " + _toDisplayString(_ctx.getInvalidDates().join(", ")), 9, _hoisted_4)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.highlightTodayEnabled,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.highlightTodayEnabled = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[23] || (_cache[23] = [
          _createTextVNode(
            " Markera dagens datum i kalendern ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isRequired,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.isRequired = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[24] || (_cache[24] = [
          _createTextVNode(
            " Obligatorisk f\xE4lt ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isDisabled,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.isDisabled = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[25] || (_cache[25] = [
          _createTextVNode(
            " Inaktivt f\xE4lt ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.alwaysInlineEnabled,
        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.alwaysInlineEnabled = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[26] || (_cache[26] = [
          _createTextVNode(
            " Kalendern visas alltid inline ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.enableYearSelector,
        "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.enableYearSelector = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[27] || (_cache[27] = [
          _createTextVNode(
            " Visa \xE5rsv\xE4ljare ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_fieldset, { name: "etikett" }, {
        label: _withCtx(() => [..._cache[28] || (_cache[28] = [
          _createTextVNode(
            " Etiketten ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.tooltipVisible,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => _ctx.tooltipVisible = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[29] || (_cache[29] = [
              _createTextVNode(
                " Tooltip ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.descriptionVisible,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => _ctx.descriptionVisible = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[30] || (_cache[30] = [
              _createTextVNode(
                " Hj\xE4lptext ",
                -1
                /* CACHED */
              )
            ])]),
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
  selector: "#example-945ed7"
});
export {
  render
};
