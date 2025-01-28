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

  // virtual-entry:./packages/vue/src/components/FRadioField/examples/FRadioFieldLiveExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_date = __require("@fkui/date");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");
  var import_vue5 = __require("vue");
  var todaysDate = import_date.FDate.now().toString(import_date.DateFormat.ISO8601);
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FRadioFieldLiveExample",
    components: { LiveExample: import_docs_live_example.LiveExample, FCheckboxField: import_vue4.FCheckboxField, FFieldset: import_vue4.FFieldset, FRadioField: import_vue4.FRadioField, FSelectField: import_vue4.FSelectField },
    data() {
      return {
        isHorizontal: false,
        isBorder: false,
        isPreselected: false,
        isDisabled: false,
        isRequired: false,
        tooltipVisible: false,
        descriptionVisible: false,
        showDetails: "never"
      };
    },
    computed: {
      livedata() {
        return {
          modelValue: this.isPreselected || void 0
        };
      },
      components() {
        return {
          FFieldset: import_vue4.FFieldset,
          FRadioField: import_vue4.FRadioField,
          FTooltip: import_vue4.FTooltip
        };
      },
      tooltip() {
        const template = (
          /* HTML */
          `
                <template #tooltip>
                    <f-tooltip
                        screen-reader-text="L\xE4s mer om Bor det barn som har fyllt 18 \xE5r i bostaden?"
                    >
                        <template #header> Bor det barn som har fyllt 18 \xE5r i bostaden? </template>
                        <template #body>
                            H\xE4r svarar du p\xE5 om du har ett eller flera barn som fyllt 18 i din
                            bostad. Alla personer som fyllt 18 idag (${todaysDate}) eller tidigare
                            p\xE5 \xE5ret ber\xE4knas med i denna grupp.
                        </template>
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
                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass">
                        H\xE4r svarar du p\xE5 om du har ett eller flera barn som fyllt 18 i din bostad.
                    </span>
                </template>
            `
        );
        return this.descriptionVisible ? template : "";
      },
      showDetailsAttr() {
        if (this.showDetails === "never") {
          return "";
        } else {
          return `show-details="${this.showDetails}"`;
        }
      },
      details() {
        const template = (
          /* HTML */
          `
                <template #details>
                    H\xE4r svarar du p\xE5 om du har ett eller flera barn som fyllt 18 i din bostad.
                </template>
            `
        );
        return this.showDetails !== "never" ? template : "";
      },
      radioFields() {
        return (
          /* HTML */
          `
                <f-radio-field v-model="modelValue" :value="true">
                    Ja, det bor barn \xF6ver 18 \xE5r d\xE4r ${this.details}
                </f-radio-field>
                <f-radio-field v-model="modelValue" :value="false" ${this.disabled}>
                    Nej, inga barn \xF6ver 18 \xE5r bor d\xE4r ${this.details}
                </f-radio-field>
            `
        );
      },
      horizontal() {
        return this.isHorizontal ? "horizontal" : "";
      },
      border() {
        return this.isBorder ? "border" : "";
      },
      disabled() {
        return this.isDisabled ? "disabled" : "";
      },
      required() {
        return this.isRequired ? "v-validation.required" : "";
      },
      template() {
        return (
          /* HTML */
          `
                <f-fieldset
                    name="barn-over-18"
                    ${this.horizontal}
                    ${this.required}
                    ${this.border}
                    ${this.showDetailsAttr}
                >
                    <template #label> Bor det barn som har fyllt 18 \xE5r i bostaden? </template>
                    ${this.tooltip} ${this.description}
                    <template #default> ${this.radioFields} </template>
                </f-fieldset>
            `
        );
      }
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_radio_field = (0, import_vue5.resolveComponent)("f-radio-field");
    const _component_f_fieldset = (0, import_vue5.resolveComponent)("f-fieldset");
    const _component_f_checkbox_field = (0, import_vue5.resolveComponent)("f-checkbox-field");
    const _component_f_select_field = (0, import_vue5.resolveComponent)("f-select-field");
    const _component_live_example = (0, import_vue5.resolveComponent)("live-example");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_live_example, {
      components: _ctx.components,
      template: _ctx.template,
      livedata: _ctx.livedata
    }, {
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_fieldset, { name: "radio-orientation" }, {
          label: (0, import_vue5.withCtx)(() => _cache[9] || (_cache[9] = [
            (0, import_vue5.createTextVNode)(" Placering ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.isHorizontal,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.isHorizontal = $event),
              value: false
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[10] || (_cache[10] = [
                (0, import_vue5.createTextVNode)(" Vertikalt (standard)")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.isHorizontal,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.isHorizontal = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[11] || (_cache[11] = [
                (0, import_vue5.createTextVNode)(" Horisontellt ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isBorder,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.isBorder = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[12] || (_cache[12] = [
            (0, import_vue5.createTextVNode)(" Ram ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isPreselected,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.isPreselected = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[13] || (_cache[13] = [
            (0, import_vue5.createTextVNode)(" F\xF6rvald radioknapp ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isDisabled,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.isDisabled = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[14] || (_cache[14] = [
            (0, import_vue5.createTextVNode)(" Inaktiverad radioknapp ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isRequired,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.isRequired = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[15] || (_cache[15] = [
            (0, import_vue5.createTextVNode)(" Obligatoriskt val ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_fieldset, { name: "radio-label" }, {
          label: (0, import_vue5.withCtx)(() => _cache[16] || (_cache[16] = [
            (0, import_vue5.createTextVNode)(" Etiketten ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.tooltipVisible,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.tooltipVisible = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[17] || (_cache[17] = [
                (0, import_vue5.createTextVNode)(" Tooltip ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.descriptionVisible,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.descriptionVisible = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[18] || (_cache[18] = [
                (0, import_vue5.createTextVNode)(" Hj\xE4lptext ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_select_field, {
              modelValue: _ctx.showDetails,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.showDetails = $event)
            }, {
              label: (0, import_vue5.withCtx)(() => _cache[19] || (_cache[19] = [
                (0, import_vue5.createTextVNode)(" Ut\xF6kad etikett ")
              ])),
              default: (0, import_vue5.withCtx)(() => [
                _cache[20] || (_cache[20] = (0, import_vue5.createElementVNode)(
                  "option",
                  { value: "never" },
                  "Nej",
                  -1
                  /* HOISTED */
                )),
                _cache[21] || (_cache[21] = (0, import_vue5.createElementVNode)(
                  "option",
                  { value: "always" },
                  "Utvidgad text",
                  -1
                  /* HOISTED */
                )),
                _cache[22] || (_cache[22] = (0, import_vue5.createElementVNode)(
                  "option",
                  { value: "when-selected" },
                  "Expanderbar text",
                  -1
                  /* HOISTED */
                ))
              ]),
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
    selector: "#FRadioFieldLiveExample"
  });
})();
