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

  // virtual-entry:./packages/vue/src/components/FMessageBox/examples/FMessageBoxLiveExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "MessageBoxLiveExample",
    components: { FCheckboxField: import_vue4.FCheckboxField, FFieldset: import_vue4.FFieldset, FRadioField: import_vue4.FRadioField, LiveExample: import_docs_live_example.LiveExample },
    data() {
      return {
        messageType: "info",
        shortLayout: false
      };
    },
    computed: {
      components() {
        return { FMessageBox: import_vue4.FMessageBox };
      },
      template() {
        if (this.shortLayout) {
          return (
            /* HTML */
            `
                    <f-message-box type="${this.messageType}" layout="short">
                        Kort meddelande
                    </f-message-box>
                `
          );
        } else {
          return (
            /* HTML */
            `
                    <f-message-box type="${this.messageType}">
                        <template #default="{ headingSlotClass }">
                            <h3 :class="headingSlotClass">Rubrik</h3>
                            <p>Br\xF6dtext</p>
                        </template>
                    </f-message-box>
                `
          );
        }
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
      template: _ctx.template
    }, {
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_fieldset, { name: "radio-message-type" }, {
          label: (0, import_vue5.withCtx)(() => _cache[5] || (_cache[5] = [
            (0, import_vue5.createTextVNode)(" Typ ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.messageType,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.messageType = $event),
              value: "info"
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[6] || (_cache[6] = [
                (0, import_vue5.createTextVNode)(" Information ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.messageType,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.messageType = $event),
              value: "warning"
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[7] || (_cache[7] = [
                (0, import_vue5.createTextVNode)(" Varning ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.messageType,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.messageType = $event),
              value: "error"
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[8] || (_cache[8] = [
                (0, import_vue5.createTextVNode)(" Fel ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.messageType,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.messageType = $event),
              value: "success"
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[9] || (_cache[9] = [
                (0, import_vue5.createTextVNode)(" Positiv \xE5terkoppling ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.shortLayout,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.shortLayout = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[10] || (_cache[10] = [
            (0, import_vue5.createTextVNode)(" Kort meddelande ")
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
    selector: "#FMessageBoxLiveExample"
  });
})();
