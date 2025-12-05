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

  // virtual-entry:./packages/vue/src/components/FFieldset/examples/FFieldsetChipLiveExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FFieldsetLiveExample",
    components: { LiveExample: import_docs_live_example.LiveExample, FRadioField: import_vue4.FRadioField, FFieldset: import_vue4.FFieldset, FCheckboxField: import_vue4.FCheckboxField },
    data() {
      return {
        type: "radio",
        isHorizontal: false,
        tooltipVisible: false,
        descriptionVisible: false,
        isDisabled: false,
        isRequired: false
      };
    },
    computed: {
      components() {
        return {
          FTooltip: import_vue4.FTooltip,
          FFieldset: import_vue4.FFieldset,
          FCheckboxField: import_vue4.FCheckboxField,
          FRadioField: import_vue4.FRadioField
        };
      },
      livedata() {
        return {
          choices: []
        };
      },
      tooltip() {
        const template = (
          /* HTML */
          `
                <template #tooltip>
                    <f-tooltip screen-reader-text="L\xE4s mer om Broschyrer">
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
                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass"> Hj\xE4lptext </span>
                </template>
            `
        );
        return this.descriptionVisible ? template : "";
      },
      componentType() {
        return `f-${this.type}-field`;
      },
      choices() {
        return (
          /* HTML */
          `
                <${this.componentType}
                    v-model="choices"
                    value="Ett alternativ"
                >
                    Ett alternativ
                </${this.componentType}>

                <${this.componentType}
                    v-model="choices"
                    value="Alternativ 2"
                >
                    Alternativ 2
                </${this.componentType}>

                <${this.componentType}
                    v-model="choices"
                    value="Ytterligare alternativ"
                >
                    Ytterligare alternativ
                </${this.componentType}>
                
                <${this.componentType}
                    v-model="choices"
                    value="Sista"
                    ${this.disabled}
                >
                    Sista
                </${this.componentType}>
            `
        );
      },
      disabled() {
        return this.isDisabled ? "disabled" : "";
      },
      required() {
        return this.isRequired ? "v-validation.required" : "";
      },
      horizontal() {
        return this.isHorizontal ? "horizontal" : "";
      },
      template() {
        return (
          /* HTML */
          `
                <f-fieldset name="chips" chip ${this.required} ${this.horizontal}>
                    <template #label> Etikett-rubrik </template>
                    ${this.tooltip} ${this.description} ${this.choices}
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
    const _component_live_example = (0, import_vue5.resolveComponent)("live-example");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_live_example, {
      components: _ctx.components,
      template: _ctx.template,
      livedata: _ctx.livedata
    }, {
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_fieldset, { name: "type" }, {
          label: (0, import_vue5.withCtx)(() => _cache[7] || (_cache[7] = [
            (0, import_vue5.createTextVNode)(" Typ ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.type,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.type = $event),
              value: "radio"
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[8] || (_cache[8] = [
                (0, import_vue5.createTextVNode)(" Enkelval (radioknappar)")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.type,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.type = $event),
              value: "checkbox"
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[9] || (_cache[9] = [
                (0, import_vue5.createTextVNode)(" Flerval (kryssrutor)")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isHorizontal,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.isHorizontal = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[10] || (_cache[10] = [
            (0, import_vue5.createTextVNode)(" Horisontell layout ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isDisabled,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.isDisabled = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[11] || (_cache[11] = [
            (0, import_vue5.createTextVNode)(" Inaktiverad ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isRequired,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.isRequired = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[12] || (_cache[12] = [
            (0, import_vue5.createTextVNode)(" Obligatorisk ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_fieldset, { name: "checkbox-label" }, {
          label: (0, import_vue5.withCtx)(() => _cache[13] || (_cache[13] = [
            (0, import_vue5.createTextVNode)(" Etiketten ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.tooltipVisible,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.tooltipVisible = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[14] || (_cache[14] = [
                (0, import_vue5.createTextVNode)(" Tooltip ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.descriptionVisible,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.descriptionVisible = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[15] || (_cache[15] = [
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
    selector: "#FFieldsetChipLiveExample"
  });
})();
