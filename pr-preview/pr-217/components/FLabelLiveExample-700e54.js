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

  // virtual-entry:./packages/vue/src/components/FLabel/examples/FLabelLiveExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FTextFieldLiveExample",
    components: { LiveExample: import_docs_live_example.LiveExample, FFieldset: import_vue4.FFieldset, FCheckboxField: import_vue4.FCheckboxField },
    data() {
      return {
        tooltipVisible: false,
        descriptionVisible: false,
        discreteDescriptionVisible: false,
        errorMessageVisible: false
      };
    },
    computed: {
      livedata() {
        return { model: "" };
      },
      components() {
        return {
          FLabel: import_vue4.FLabel,
          FTooltip: import_vue4.FTooltip
        };
      },
      description() {
        const description = this.descriptionVisible ? `<span :class="descriptionClass">Hj\xE4lptext</span>` : "";
        const discreteDescription = this.discreteDescriptionVisible ? `<span :class="discreteDescriptionClass">Formatbeskrivning</span>` : "";
        const template = (
          /* HTML */
          `
                <template #description="{ descriptionClass, discreteDescriptionClass }">
                    ${description} ${discreteDescription}
                </template>
            `
        );
        return this.descriptionVisible || this.discreteDescriptionVisible ? template : "";
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
      errorMessage() {
        const template = (
          /* HTML */
          ` <template #error-message> Felmeddelande </template> `
        );
        return this.errorMessageVisible ? template : "";
      },
      template() {
        return (
          /* HTML */
          `
                <f-label for="input-field">
                    Etikett ${this.description} ${this.tooltip} ${this.errorMessage}
                </f-label>
                <input id="input-field" type="text" class="text-field__input" />
            `
        );
      }
    },
    methods: {}
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_checkbox_field = (0, import_vue5.resolveComponent)("f-checkbox-field");
    const _component_f_fieldset = (0, import_vue5.resolveComponent)("f-fieldset");
    const _component_live_example = (0, import_vue5.resolveComponent)("live-example");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_live_example, {
      components: _ctx.components,
      template: _ctx.template,
      livedata: _ctx.livedata
    }, {
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_fieldset, { name: "etikett" }, {
          label: (0, import_vue5.withCtx)(() => _cache[4] || (_cache[4] = [
            (0, import_vue5.createTextVNode)(" Egenskaper ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.descriptionVisible,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.descriptionVisible = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[5] || (_cache[5] = [
                (0, import_vue5.createTextVNode)(" Hj\xE4lptext ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.discreteDescriptionVisible,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.discreteDescriptionVisible = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[6] || (_cache[6] = [
                (0, import_vue5.createTextVNode)(" Formatbeskrivning ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.tooltipVisible,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.tooltipVisible = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[7] || (_cache[7] = [
                (0, import_vue5.createTextVNode)(" Tooltip ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.errorMessageVisible,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.errorMessageVisible = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[8] || (_cache[8] = [
                (0, import_vue5.createTextVNode)(" Felmeddelande ")
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
    selector: "#FLabelLiveExample"
  });
})();
