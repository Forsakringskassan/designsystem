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

  // virtual-entry:./packages/vue/src/components/FTooltip/examples/FTooltipLiveExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FTooltipLiveExample",
    components: { LiveExample: import_docs_live_example.LiveExample, FCheckboxField: import_vue4.FCheckboxField },
    data() {
      return {
        hasHeader: false,
        longText: false
      };
    },
    computed: {
      components() {
        return {
          FLabel: import_vue4.FLabel,
          FTooltip: import_vue4.FTooltip
        };
      },
      header() {
        return this.hasHeader ? "<template #header> L\xE4r dig mer om [..] </template>" : "";
      },
      template() {
        const { longText } = this;
        const text = longText ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit in elit nunc, iaculis sit amet consequat vel, placerat et purus" : "Etikett";
        return (
          /* HTML */
          `
                <f-label>
                    <template #default> ${text} </template>
                    <template #tooltip>
                        <f-tooltip screen-reader-text="Denna text syns bara f\xF6r sk\xE4rml\xE4sare">
                            ${this.header}
                            <template #body> Lorem ipsum dolor sit amet. </template>
                        </f-tooltip>
                    </template>
                </f-label>
            `
        );
      }
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_checkbox_field = (0, import_vue5.resolveComponent)("f-checkbox-field");
    const _component_live_example = (0, import_vue5.resolveComponent)("live-example");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_live_example, {
      components: _ctx.components,
      template: _ctx.template
    }, {
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.hasHeader,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.hasHeader = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
            (0, import_vue5.createTextVNode)(" Rubrik i tooltip ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.longText,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.longText = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
            (0, import_vue5.createTextVNode)(" L\xE5ng text ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["components", "template"]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FTooltipLiveExample"
  });
})();
