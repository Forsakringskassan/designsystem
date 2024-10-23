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

  // virtual-entry:./packages/vue/src/components/FCheckboxField/examples/FCheckboxFieldLiveExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FCheckboxFieldLiveExample",
    components: { LiveExample: import_docs_live_example.LiveExample, FFieldset: import_vue4.FFieldset, FCheckboxField: import_vue4.FCheckboxField, FSelectField: import_vue4.FSelectField },
    data() {
      return {
        tooltipVisible: false,
        descriptionVisible: false,
        isDisabled: false,
        isRequired: false,
        isBorder: false,
        showDetails: "never"
      };
    },
    computed: {
      components() {
        return {
          FFieldset: import_vue4.FFieldset,
          FCheckboxField: import_vue4.FCheckboxField,
          FTooltip: import_vue4.FTooltip
        };
      },
      livedata() {
        return {
          brochures: []
        };
      },
      tooltip() {
        const template = (
          /* HTML */
          `
                <template #tooltip>
                    <f-tooltip screen-reader-text="L\xE4s mer om Broschyrer">
                        <template #header> Broschyrer </template>
                        <template #body>
                            H\xE4r v\xE4ljer du om du vill ha broschyrer eller faktablad och vilka omr\xE5den
                            du \xE4r intresserad av. Broschyrer inneh\xE5ller \xF6vergripande information och
                            faktablad inneh\xE5ller mer detaljerad information.
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
                        H\xE4r v\xE4ljer du om du vill ha broschyrer eller faktablad
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
      checkboxes() {
        return (
          /* HTML */
          `
                <f-checkbox-field
                    v-model="brochures"
                    value="Till alla som v\xE4ntar eller just f\xE5tt barn"
                >
                    Till alla som v\xE4ntar eller just f\xE5tt barn ${this.details}
                </f-checkbox-field>

                <f-checkbox-field v-model="brochures" value="Till alla barnfamiljer">
                    Till alla barnfamiljer ${this.details}
                </f-checkbox-field>

                <f-checkbox-field
                    v-model="brochures"
                    value="R\xE4tt beslut och r\xE4tt ers\xE4ttning"
                    ${this.disabled}
                >
                    R\xE4tt beslut och r\xE4tt ers\xE4ttning ${this.details}
                </f-checkbox-field>
            `
        );
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
                    id="broschyrer-tooltip"
                    name="broschyrer-tooltip"
                    ${this.required}
                    ${this.border}
                    ${this.showDetailsAttr}
                >
                    <template #label> Broschyrer </template>
                    ${this.tooltip} ${this.description}
                    <template #default> ${this.checkboxes} </template>
                </f-fieldset>
            `
        );
      }
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_checkbox_field = (0, import_vue5.resolveComponent)("f-checkbox-field");
    const _component_f_select_field = (0, import_vue5.resolveComponent)("f-select-field");
    const _component_f_fieldset = (0, import_vue5.resolveComponent)("f-fieldset");
    const _component_live_example = (0, import_vue5.resolveComponent)("live-example");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_live_example, {
      components: _ctx.components,
      template: _ctx.template,
      livedata: _ctx.livedata
    }, {
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isDisabled,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.isDisabled = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[6] || (_cache[6] = [
            (0, import_vue5.createTextVNode)(" Inaktiverad ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isRequired,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.isRequired = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[7] || (_cache[7] = [
            (0, import_vue5.createTextVNode)(" Obligatorisk ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isBorder,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.isBorder = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[8] || (_cache[8] = [
            (0, import_vue5.createTextVNode)(" Ram ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_fieldset, { name: "checkbox-label" }, {
          label: (0, import_vue5.withCtx)(() => _cache[9] || (_cache[9] = [
            (0, import_vue5.createTextVNode)(" Etiketten ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.tooltipVisible,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.tooltipVisible = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[10] || (_cache[10] = [
                (0, import_vue5.createTextVNode)(" Tooltip ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.descriptionVisible,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.descriptionVisible = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[11] || (_cache[11] = [
                (0, import_vue5.createTextVNode)(" Hj\xE4lptext ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_select_field, {
              modelValue: _ctx.showDetails,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.showDetails = $event)
            }, {
              label: (0, import_vue5.withCtx)(() => _cache[12] || (_cache[12] = [
                (0, import_vue5.createTextVNode)(" Ut\xF6kad etikett ")
              ])),
              default: (0, import_vue5.withCtx)(() => [
                _cache[13] || (_cache[13] = (0, import_vue5.createElementVNode)(
                  "option",
                  { value: "never" },
                  "Nej",
                  -1
                  /* HOISTED */
                )),
                _cache[14] || (_cache[14] = (0, import_vue5.createElementVNode)(
                  "option",
                  { value: "always" },
                  "Utvidgad text",
                  -1
                  /* HOISTED */
                )),
                _cache[15] || (_cache[15] = (0, import_vue5.createElementVNode)(
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
    selector: "#FCheckboxFieldLiveExample"
  });
})();
