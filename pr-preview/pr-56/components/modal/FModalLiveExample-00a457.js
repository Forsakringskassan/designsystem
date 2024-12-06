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

  // virtual-entry:./packages/vue/src/components/FModal/examples/FModalLiveExample.vue
  var import_vue3 = __require("vue");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FModalLiveExample",
    components: {
      LiveExample: import_docs_live_example.LiveExample,
      FSelectField: import_vue4.FSelectField,
      FCheckboxField: import_vue4.FCheckboxField
    },
    data() {
      return {
        modalType: "",
        modalSize: "small",
        modalFullscreen: false
      };
    },
    computed: {
      components() {
        return { FModal: import_vue4.FModal };
      },
      livedata() {
        return {
          isOpen: false
        };
      },
      type() {
        return this.modalType ? `type="${this.modalType}"` : "";
      },
      size() {
        return `size="${this.modalSize}"`;
      },
      fullscreen() {
        return this.modalFullscreen ? "fullscreen" : "";
      },
      button() {
        return (
          /* HTML */
          `
                <button type="button" class="button button--secondary" @click="isOpen = !isOpen">
                    \xD6ppna modal
                </button>
            `
        );
      },
      footer() {
        return (
          /* HTML */
          `
                <template #footer>
                    <div class="button-group">
                        <button
                            type="button"
                            class="button button--primary button-group__item button--large"
                            @click="isOpen = false"
                        >
                            St\xE4ng
                        </button>
                    </div>
                </template>
            `
        );
      },
      template() {
        return (
          /* HTML */
          `
                ${this.button}
                <f-modal
                    :is-open="isOpen"
                    ${this.type}
                    ${this.size}
                    ${this.fullscreen}
                    @close="isOpen = false"
                >
                    <template #header> Rubrik </template>
                    <template #content> Inneh\xE5ll </template>
                    ${this.footer}
                </f-modal>
            `
        );
      }
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_select_field = (0, import_vue5.resolveComponent)("f-select-field");
    const _component_f_checkbox_field = (0, import_vue5.resolveComponent)("f-checkbox-field");
    const _component_live_example = (0, import_vue5.resolveComponent)("live-example");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_live_example, {
      components: _ctx.components,
      template: _ctx.template,
      livedata: _ctx.livedata
    }, {
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_select_field, {
          modelValue: _ctx.modalType,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.modalType = $event)
        }, {
          label: (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
            (0, import_vue5.createTextVNode)(" Typ ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            _cache[4] || (_cache[4] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "" },
              "Standard",
              -1
              /* HOISTED */
            )),
            _cache[5] || (_cache[5] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "information" },
              "Informationsmodal",
              -1
              /* HOISTED */
            )),
            _cache[6] || (_cache[6] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "warning" },
              "Varningsmodal",
              -1
              /* HOISTED */
            )),
            _cache[7] || (_cache[7] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "error" },
              "Felmodal",
              -1
              /* HOISTED */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_select_field, {
          modelValue: _ctx.modalSize,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.modalSize = $event)
        }, {
          label: (0, import_vue5.withCtx)(() => _cache[8] || (_cache[8] = [
            (0, import_vue5.createTextVNode)(" Storlek ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            _cache[9] || (_cache[9] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "small" },
              "Liten",
              -1
              /* HOISTED */
            )),
            _cache[10] || (_cache[10] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "medium" },
              "Medium",
              -1
              /* HOISTED */
            )),
            _cache[11] || (_cache[11] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "large" },
              "Stor",
              -1
              /* HOISTED */
            )),
            _cache[12] || (_cache[12] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "fullwidth" },
              "Fullbredd",
              -1
              /* HOISTED */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.modalFullscreen,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.modalFullscreen = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[13] || (_cache[13] = [
            (0, import_vue5.createTextVNode)(" Fullsk\xE4rm i mobill\xE4ge ")
          ])),
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
    selector: "#FModalLiveExample"
  });
})();
