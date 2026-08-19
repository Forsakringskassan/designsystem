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
    app.use(import_vue2.ErrorPlugin);
    app.use(import_vue2.ValidationPlugin);
    app.use(import_vue2.TestPlugin);
    app.use(import_vue2.TranslationPlugin);
    app.mount(selector);
    (0, import_vue2.setRunningContext)(app);
  }

  // virtual-entry:./src/components/XSearchBar/examples/XSearchBarExample.vue
  var import_vue5 = __require("@fkui/vue");

  // dist/esm/index.esm.js
  var import_logic = __require("@fkui/logic");
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var HOURS_MINUTES_REGEXP = /^(?<hours>[0-9]+)?(:(?<minutes>[0-5][0-9]))?$/;
  var HOURS_MINUTES_WITHOUT_COLON_REGEXP = /^(?<hours>[0-9]{2})(?<minutes>[0-5][0-9])$/;
  function findMatch(regexps, value) {
    for (const regexp of regexps) {
      const match = value.match(regexp);
      if (match) {
        return match;
      }
    }
    return null;
  }
  function padInitialZeros(value, maxLength = 2) {
    var _value;
    value = (_value = value) !== null && _value !== void 0 ? _value : "";
    return value.padStart(maxLength, "0");
  }
  function hoursMinutesStringToMinutes(valueString, extraForgiving = false) {
    if ((0, import_logic.isEmpty)(valueString.trim())) {
      return void 0;
    }
    const [hours, minutes] = splitHoursMinutes(valueString, extraForgiving).map((value) => parseInt(value, 10));
    const totalMinutes = hours * 60 + minutes;
    return !isNaN(totalMinutes) ? totalMinutes : void 0;
  }
  function minutesToHoursMinutesString(value) {
    let valueString = "";
    const safeValue = value !== null && value !== void 0 ? value : NaN;
    if (!isNaN(safeValue)) {
      const {
        hours,
        minutes
      } = minutesToObject(safeValue);
      valueString = [hours, minutes].map((value2) => String(value2).padStart(2, "0")).join(":");
    }
    return (0, import_logic.stripWhitespace)(valueString);
  }
  function splitHoursMinutes(valueString, extraForgiving = false) {
    var _a, _b;
    const regexps = extraForgiving ? [HOURS_MINUTES_WITHOUT_COLON_REGEXP, HOURS_MINUTES_REGEXP] : [HOURS_MINUTES_REGEXP];
    const match = findMatch(regexps, (0, import_logic.stripWhitespace)(valueString));
    if (!match) {
      return ["", ""];
    }
    const hours = padInitialZeros((_a = match == null ? void 0 : match.groups) == null ? void 0 : _a.hours);
    const minutes = padInitialZeros((_b = match == null ? void 0 : match.groups) == null ? void 0 : _b.minutes);
    return [hours, minutes];
  }
  function minutesToObject(...values) {
    const minutes = values.filter((value) => (0, import_logic.isSet)(value) && !isNaN(value)).reduce((sum, value) => sum + value, 0);
    return {
      hours: Math.floor(minutes / 60),
      minutes: minutes % 60
    };
  }
  function formatNumberToTime(value) {
    if (typeof value !== "number" || isNaN(value)) {
      return void 0;
    }
    return minutesToHoursMinutesString(value);
  }
  function parseTimeToNumberUsingConfig(value, extraForgiving) {
    var _hoursMinutesStringTo;
    if (typeof value !== "string") {
      return void 0;
    }
    const parsedValue = (_hoursMinutesStringTo = hoursMinutesStringToMinutes(value, extraForgiving)) !== null && _hoursMinutesStringTo !== void 0 ? _hoursMinutesStringTo : NaN;
    return !isNaN(parsedValue) ? parsedValue : void 0;
  }
  function parseTimeToNumber(value) {
    return parseTimeToNumberUsingConfig(value, false);
  }
  var HoursMinutesValidatorUtils = class _HoursMinutesValidatorUtils {
    static validate(value, config, name, compare) {
      if (value === "") {
        return true;
      }
      const limit = config[name];
      if (!(0, import_logic.isSet)(limit)) {
        return false;
      }
      const parseFunction = _HoursMinutesValidatorUtils.getParserFromConfig(config);
      const limitAsNumber = parseFunction(String(config[name]));
      if (!(0, import_logic.isSet)(limitAsNumber)) {
        throw new Error(`config.${name} must be a number`);
      }
      const valueAsNumber = parseFunction(value);
      if (!(0, import_logic.isSet)(valueAsNumber)) {
        return false;
      }
      return compare(valueAsNumber, limitAsNumber);
    }
    static getParserFromConfig(config) {
      var _a;
      if (!(0, import_logic.isSet)(config) || !Array.isArray(config.parser) || !(0, import_logic.isSet)((_a = config.parser) == null ? void 0 : _a[0]) || typeof config.parser[0] !== "function") {
        return parseTimeToNumber;
      }
      return config.parser[0];
    }
  };
  var hoursMinutesValidator = {
    name: "hoursMinutes",
    validation(value, _element, config) {
      return (0, import_logic.isEmpty)(value) || (0, import_logic.isSet)(HoursMinutesValidatorUtils.getParserFromConfig(config)(value));
    }
  };
  var greaterThanTimeValidator = {
    name: "greaterThanTime",
    validation(value, _element, config) {
      return HoursMinutesValidatorUtils.validate(value, config, "limit", (value2, limit) => {
        return value2 > limit;
      });
    }
  };
  var lessThanTimeValidator = {
    name: "lessThanTime",
    validation(value, _element, config) {
      return HoursMinutesValidatorUtils.validate(value, config, "limit", (value2, limit) => {
        return value2 < limit;
      });
    }
  };
  var maxTimeValidator = {
    name: "maxTime",
    validation(value, _element, config) {
      return HoursMinutesValidatorUtils.validate(value, config, this.name, (value2, limit) => {
        return value2 <= limit;
      });
    }
  };
  var minTimeValidator = {
    name: "minTime",
    validation(value, _element, config) {
      return HoursMinutesValidatorUtils.validate(value, config, this.name, (value2, limit) => {
        return value2 >= limit;
      });
    }
  };
  var validators = [hoursMinutesValidator, greaterThanTimeValidator, lessThanTimeValidator, maxTimeValidator, minTimeValidator];
  for (const validator of validators) {
    import_logic.ValidationService.registerValidator(validator);
  }
  var _sfc_main$1 = (0, import_vue3.defineComponent)({
    name: "XTimeTextField",
    extends: import_vue4.FTextField,
    mixins: [import_vue4.TranslationMixin],
    props: {
      formatter: {
        type: Function,
        required: false,
        default: formatNumberToTime
      },
      parser: {
        type: Function,
        required: false,
        default: parseTimeToNumber
      }
    },
    setup(props) {
      return (0, import_vue4.useTextFieldSetup)(props);
    },
    mounted() {
      const inputElement = this.$el.querySelector("input");
      if (!(0, import_logic.isSet)(inputElement)) {
        throw new Error(`Could not find input element in XTimeTextField with id ${this.$el.id}`);
      }
      import_logic.ValidationService.addValidatorsToElement(inputElement, {
        maxLength: {
          length: 10
        },
        hoursMinutes: {}
      }, true);
      inputElement.setAttribute("inputmode", "numeric");
      import_logic.ValidationService.validateElement(inputElement);
    }
  });
  var _sfc_main = (0, import_vue3.defineComponent)({
    name: "XSearchBar",
    components: {
      FIcon: import_vue4.FIcon,
      FSearchTextField: import_vue4.FSearchTextField
    },
    props: {
      modelValue: {
        type: String,
        required: true
      },
      maxLength: {
        type: Number,
        default: 20
      }
    },
    emits: ["update:modelValue", "changedValue"],
    computed: {
      value: {
        get() {
          return this.modelValue;
        },
        set(value) {
          if (this.value !== value) {
            this.$emit("changedValue", [this.value, value]);
          }
          this.$emit("update:modelValue", value);
        }
      }
    }
  });
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  var _hoisted_1 = {
    class: "button button--primary search-bar-button",
    type: "submit",
    "data-test": "search-bar-submit"
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_icon = (0, import_vue3.resolveComponent)("f-icon");
    const _component_f_search_text_field = (0, import_vue3.resolveComponent)("f-search-text-field");
    return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_f_search_text_field, {
      modelValue: _ctx.value,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
      class: "x-search-bar",
      maxlength: _ctx.maxLength
    }, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.renderSlot)(_ctx.$slots, "default")]),
      tooltip: (0, import_vue3.withCtx)(() => [(0, import_vue3.renderSlot)(_ctx.$slots, "tooltip")]),
      "input-right": (0, import_vue3.withCtx)(() => [(0, import_vue3.createElementVNode)("button", _hoisted_1, [(0, import_vue3.createVNode)(_component_f_icon, {
        name: "search",
        library: "f"
      }), _cache[2] || (_cache[2] = (0, import_vue3.createTextVNode)()), (0, import_vue3.createElementVNode)("span", null, [(0, import_vue3.renderSlot)(_ctx.$slots, "button-text", {}, () => [_cache[1] || (_cache[1] = (0, import_vue3.createTextVNode)(" S\xF6k "))])])])]),
      _: 3
    }, 8, ["modelValue", "maxlength"]);
  }
  var XSearchBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

  // virtual-entry:./src/components/XSearchBar/examples/XSearchBarExample.vue
  var import_vue6 = __require("vue");
  var import_vue7 = __require("vue");
  var exampleComponent = (0, import_vue6.defineComponent)({
    name: "XSearchBarExample",
    components: {
      XSearchBar,
      FValidationForm: import_vue5.FValidationForm
    },
    data() {
      return {
        value: ""
      };
    },
    methods: {
      submit() {
        alert(`Submit ${this.value}`);
      }
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_x_search_bar = (0, import_vue7.resolveComponent)("x-search-bar");
    const _component_f_validation_form = (0, import_vue7.resolveComponent)("f-validation-form");
    return (0, import_vue7.openBlock)(), (0, import_vue7.createElementBlock)("div", null, [
      (0, import_vue7.createVNode)(_component_f_validation_form, { onSubmit: _ctx.submit }, {
        default: (0, import_vue7.withCtx)(() => [
          (0, import_vue7.createVNode)(_component_x_search_bar, {
            modelValue: _ctx.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event)
          }, {
            default: (0, import_vue7.withCtx)(() => _cache[1] || (_cache[1] = [
              (0, import_vue7.createTextVNode)(" S\xF6kf\xE4lt ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onSubmit"])
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#XSearchBarExample"
  });
})();
