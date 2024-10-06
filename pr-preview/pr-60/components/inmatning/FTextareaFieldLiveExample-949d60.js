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

  // virtual-entry:./packages/vue/src/components/FTextareaField/examples/FTextareaFieldLiveExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FListLiveExample",
    components: { LiveExample: import_docs_live_example.LiveExample, FCheckboxField: import_vue4.FCheckboxField, FFieldset: import_vue4.FFieldset, FSelectField: import_vue4.FSelectField },
    data() {
      return {
        isDisabled: false,
        isResizable: false,
        customWarning: false,
        tooltipVisible: false,
        descriptionVisible: true,
        rows: "4"
      };
    },
    computed: {
      components() {
        return {
          FTextareaField: import_vue4.FTextareaField,
          FTooltip: import_vue4.FTooltip
        };
      },
      livedata() {
        return {
          about: ""
        };
      },
      disabled() {
        return this.isDisabled ? "disabled" : "";
      },
      resizable() {
        return this.isResizable ? "resizable" : "";
      },
      customRows() {
        if (this.rows === "4") {
          return "";
        } else {
          return `rows="${this.rows}"`;
        }
      },
      customCharLeft() {
        return this.customWarning ? `characters-left-warning="Endast %charactersLeft% tecken kvar"` : "";
      },
      tooltip() {
        const template = (
          /* HTML */
          `
                <template #tooltip>
                    <f-tooltip screen-reader-text="Text f\xF6r sk\xE4rml\xE4sare">
                        <template #header> Header </template>
                        <template #body> Body </template>
                    </f-tooltip>
                </template>
            `
        );
        return this.tooltipVisible ? template : "";
      },
      description() {
        const template = (
          /* HTML */
          `
                <template #description="{ descriptionClass, discreteDescriptionClass }">
                    <span :class="descriptionClass"> En inte allt f\xF6r utf\xF6rlig ber\xE4ttelse </span>
                    <span :class="discreteDescriptionClass"> (max 100 tecken) </span>
                </template>
            `
        );
        return this.descriptionVisible ? template : "";
      },
      template() {
        return (
          /* HTML */
          `
                <f-textarea-field
                    v-model="about"
                    :maxlength="100"
                    :soft-limit="20"
                    ${this.customCharLeft}
                    ${this.customRows}
                    ${this.disabled}
                    ${this.resizable}
                >
                    <template #default> Ber\xE4tta om dig sj\xE4lv </template>
                    ${this.tooltip} ${this.description}
                </f-textarea-field>
            `
        );
      }
    }
  });
  var _hoisted_1 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "3" },
    "3",
    -1
    /* HOISTED */
  );
  var _hoisted_2 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "4" },
    "4 (standard)",
    -1
    /* HOISTED */
  );
  var _hoisted_3 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "5" },
    "5",
    -1
    /* HOISTED */
  );
  var _hoisted_4 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "6" },
    "6",
    -1
    /* HOISTED */
  );
  function render(_ctx, _cache) {
    const _component_f_checkbox_field = (0, import_vue5.resolveComponent)("f-checkbox-field");
    const _component_f_fieldset = (0, import_vue5.resolveComponent)("f-fieldset");
    const _component_f_select_field = (0, import_vue5.resolveComponent)("f-select-field");
    const _component_live_example = (0, import_vue5.resolveComponent)("live-example");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_live_example, {
      components: _ctx.components,
      template: _ctx.template,
      livedata: _ctx.livedata
    }, {
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_fieldset, { name: "checkbox-label" }, {
          label: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(" Etiketten ")
          ]),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(),
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.tooltipVisible,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.tooltipVisible = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => [
                (0, import_vue5.createTextVNode)(" Tooltip ")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createTextVNode)(),
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.descriptionVisible,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.descriptionVisible = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => [
                (0, import_vue5.createTextVNode)("\n                Hj\xE4lptext\n            ")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.createVNode)(_component_f_fieldset, { name: "settings" }, {
          label: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(" Inst\xE4llningar ")
          ]),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(),
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.isDisabled,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.isDisabled = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => [
                (0, import_vue5.createTextVNode)(" Inaktiv ")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createTextVNode)(),
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.isResizable,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.isResizable = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => [
                (0, import_vue5.createTextVNode)("\n                Justerbar storlek\n            ")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createTextVNode)(),
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.customWarning,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.customWarning = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => [
                (0, import_vue5.createTextVNode)("\n                Egen varningstext\n            ")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.createVNode)(_component_f_select_field, {
          modelValue: _ctx.rows,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.rows = $event)
        }, {
          label: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(" Antal rader ")
          ]),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(),
            _hoisted_1,
            (0, import_vue5.createTextVNode)(),
            _hoisted_2,
            (0, import_vue5.createTextVNode)(),
            _hoisted_3,
            (0, import_vue5.createTextVNode)(),
            _hoisted_4
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["components", "template", "livedata"]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FTextareaFieldLiveExample"
  });
})();
