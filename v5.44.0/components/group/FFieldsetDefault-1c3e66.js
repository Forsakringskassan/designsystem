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

  // virtual-entry:./packages/vue/src/components/FFieldset/examples/FFieldsetDefault.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FFieldsetDefault",
    components: { FFieldset: import_vue4.FFieldset, FRadioField: import_vue4.FRadioField, FTooltip: import_vue4.FTooltip },
    data() {
      return {
        deltid: void 0
      };
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_tooltip = (0, import_vue5.resolveComponent)("f-tooltip");
    const _component_f_radio_field = (0, import_vue5.resolveComponent)("f-radio-field");
    const _component_f_fieldset = (0, import_vue5.resolveComponent)("f-fieldset");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_fieldset, { name: "group-name-default" }, {
      label: (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
        (0, import_vue5.createTextVNode)(" Arbetar du deltid? ")
      ])),
      description: (0, import_vue5.withCtx)(({ descriptionClass }) => [
        (0, import_vue5.createElementVNode)(
          "span",
          {
            class: (0, import_vue5.normalizeClass)(descriptionClass)
          },
          " Vi beh\xF6ver veta om du jobbar 100% eller ej ",
          2
          /* CLASS */
        )
      ]),
      tooltip: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_tooltip, { "screen-reader-text": "L\xE4s mer om Bor det barn som har fyllt 18 \xE5r i bostaden?" }, {
          header: (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
            (0, import_vue5.createTextVNode)(" Lite allm\xE4n information ")
          ])),
          body: (0, import_vue5.withCtx)(() => _cache[4] || (_cache[4] = [
            (0, import_vue5.createTextVNode)(" H\xE4r kan man skriva lite extra information om man nu \xF6nskar det! ")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_radio_field, {
          id: "deltid-ja",
          modelValue: _ctx.deltid,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.deltid = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[5] || (_cache[5] = [
            (0, import_vue5.createTextVNode)(" Ja ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createVNode)(_component_f_radio_field, {
          id: "deltid-nej",
          modelValue: _ctx.deltid,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.deltid = $event),
          value: false
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[6] || (_cache[6] = [
            (0, import_vue5.createTextVNode)(" Nej ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])
      ]),
      _: 1
      /* STABLE */
    });
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FFieldsetDefault"
  });
})();
