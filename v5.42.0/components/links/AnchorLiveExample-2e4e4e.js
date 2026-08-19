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

  // virtual-entry:./packages/vue/src/design-component-tests/Anchor/examples/AnchorLiveExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "AnchorLiveExample",
    components: { LiveExample: import_docs_live_example.LiveExample, FCheckboxField: import_vue4.FCheckboxField, FFieldset: import_vue4.FFieldset, FRadioField: import_vue4.FRadioField, FSelectField: import_vue4.FSelectField },
    data() {
      return {
        linkType: "standard",
        isDiscrete: false,
        fileType: "pdf"
      };
    },
    computed: {
      isDocument() {
        return this.linkType === `document`;
      },
      components() {
        return { FIcon: import_vue4.FIcon };
      },
      content() {
        const text = "L\xE4nktext";
        const icon = this.fileType;
        switch (this.linkType) {
          case "standard":
            return [text];
          case "document":
            return [`<f-icon name="${icon}"></f-icon>`, text];
          case "external":
            return [
              text,
              `<f-icon name="new-window"></f-icon>`,
              `<span class="sr-only">\xF6ppnas i ny flik</span>`
            ];
          default:
            return [text];
        }
      },
      template() {
        const { isDiscrete } = this;
        const isExternal = this.linkType === "external";
        return (0, import_docs_live_example.createElement)(
          "a",
          {
            class: ["anchor", "anchor--block", isDiscrete ? "anchor--discrete" : void 0],
            href: isExternal ? "https://example.net/" : "#",
            target: isExternal ? "_blank" : void 0
          },
          this.content
        );
      }
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_radio_field = (0, import_vue5.resolveComponent)("f-radio-field");
    const _component_f_fieldset = (0, import_vue5.resolveComponent)("f-fieldset");
    const _component_f_select_field = (0, import_vue5.resolveComponent)("f-select-field");
    const _component_f_checkbox_field = (0, import_vue5.resolveComponent)("f-checkbox-field");
    const _component_live_example = (0, import_vue5.resolveComponent)("live-example");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_live_example, {
      components: _ctx.components,
      template: _ctx.template
    }, {
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_fieldset, { name: "radio-link-type" }, {
          label: (0, import_vue5.withCtx)(() => _cache[5] || (_cache[5] = [
            (0, import_vue5.createTextVNode)(" Typ av l\xE4nk ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.linkType,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.linkType = $event),
              value: "standard"
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[6] || (_cache[6] = [
                (0, import_vue5.createTextVNode)(" Standard ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.linkType,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.linkType = $event),
              value: "document"
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[7] || (_cache[7] = [
                (0, import_vue5.createTextVNode)(" Dokument ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.linkType,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.linkType = $event),
              value: "external"
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[8] || (_cache[8] = [
                (0, import_vue5.createTextVNode)(" Ny flik ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }),
        _ctx.isDocument ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_select_field, {
          key: 0,
          modelValue: _ctx.fileType,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.fileType = $event)
        }, {
          label: (0, import_vue5.withCtx)(() => _cache[9] || (_cache[9] = [
            (0, import_vue5.createTextVNode)(" Filtyp ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            _cache[10] || (_cache[10] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "pdf" },
              "PDF",
              -1
              /* HOISTED */
            )),
            _cache[11] || (_cache[11] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "doc" },
              "Doc",
              -1
              /* HOISTED */
            )),
            _cache[12] || (_cache[12] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "pic" },
              "Bild",
              -1
              /* HOISTED */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])) : (0, import_vue5.createCommentVNode)("v-if", true),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isDiscrete,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.isDiscrete = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[13] || (_cache[13] = [
            (0, import_vue5.createTextVNode)(" Diskret l\xE4nk ")
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
    selector: "#AnchorLiveExample"
  });
})();
