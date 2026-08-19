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

// virtual-entry:virtual:docs/guides/validation/examples/CrossValidateDates.vue:CrossValidateDates-206291.js
import { defineComponent } from "vue";
import { FDate, Weekday } from "@fkui/date";
import { isEmpty } from "@fkui/logic";
import { FDatepickerField, FFieldset } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives } from "vue";
var MIN_DATE = FDate.now().addMonths(-1).toString();
var MAX_DATE = FDate.now().addMonths(1).toString();
var exampleComponent = defineComponent({
  components: { FDatepickerField, FFieldset },
  data() {
    return {
      fromDate: "",
      toDate: "",
      toMinLimit: MIN_DATE,
      Weekday,
      MIN_DATE,
      MAX_DATE
    };
  },
  methods: {
    getMinToDate(validFromDate) {
      if (isEmpty(this.fromDate) || !validFromDate) {
        return MIN_DATE;
      }
      return this.fromDate;
    },
    onValidityFromDate({ detail: { isValid } }) {
      this.toMinLimit = this.getMinToDate(isValid);
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_datepicker_field = _resolveComponent("f-datepicker-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createBlock(_component_f_fieldset, null, {
    label: _withCtx(() => [..._cache[2] || (_cache[2] = [
      _createTextVNode(
        " Anst\xE4llningsperiod ",
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(() => [
      _withDirectives((_openBlock(), _createBlock(_component_f_datepicker_field, {
        ref: "fromDate",
        modelValue: _ctx.fromDate,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.fromDate = $event),
        onComponentValidity: _ctx.onValidityFromDate
      }, {
        default: _withCtx(() => [..._cache[3] || (_cache[3] = [
          _createTextVNode(
            " Fr\xE5n och med ",
            -1
            /* CACHED */
          )
        ])]),
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
      _withDirectives((_openBlock(), _createBlock(_component_f_datepicker_field, {
        modelValue: _ctx.toDate,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.toDate = $event)
      }, {
        default: _withCtx(() => [..._cache[4] || (_cache[4] = [
          _createTextVNode(
            " Till och med ",
            -1
            /* CACHED */
          )
        ])]),
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
  selector: "#example-206291"
});
export {
  render
};
