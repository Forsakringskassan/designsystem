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

  // virtual-entry:./packages/vue/src/components/FFieldset/examples/FFieldsetCheckbox.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FFieldsetChecbox",
    components: {
      FFieldset: import_vue4.FFieldset,
      FCheckboxField: import_vue4.FCheckboxField
    },
    data() {
      return {
        dagar: []
      };
    }
  });
  function render(_ctx, _cache) {
    const _component_f_checkbox_field = (0, import_vue5.resolveComponent)("f-checkbox-field");
    const _component_f_fieldset = (0, import_vue5.resolveComponent)("f-fieldset");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_fieldset, { name: "group-name-checkbox" }, {
      label: (0, import_vue5.withCtx)(() => _cache[5] || (_cache[5] = [
        (0, import_vue5.createTextVNode)(" Vilka dagar i veckan vill du bli kontaktad? ")
      ])),
      default: (0, import_vue5.withCtx)(() => [
        _cache[11] || (_cache[11] = (0, import_vue5.createTextVNode)()),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          id: "dagar-mandag",
          modelValue: _ctx.dagar,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.dagar = $event),
          value: "mandag"
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[6] || (_cache[6] = [
            (0, import_vue5.createTextVNode)("\n            M\xE5ndag\n        ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        _cache[12] || (_cache[12] = (0, import_vue5.createTextVNode)()),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          id: "dagar-tisdag",
          modelValue: _ctx.dagar,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.dagar = $event),
          value: "tisdag"
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[7] || (_cache[7] = [
            (0, import_vue5.createTextVNode)("\n            Tisdag\n        ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        _cache[13] || (_cache[13] = (0, import_vue5.createTextVNode)()),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          id: "dagar-onsdag",
          modelValue: _ctx.dagar,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.dagar = $event),
          value: "onsdag"
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[8] || (_cache[8] = [
            (0, import_vue5.createTextVNode)("\n            Onsdag\n        ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        _cache[14] || (_cache[14] = (0, import_vue5.createTextVNode)()),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          id: "dagar-torsdag",
          modelValue: _ctx.dagar,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.dagar = $event),
          value: "torsdag"
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[9] || (_cache[9] = [
            (0, import_vue5.createTextVNode)("\n            Torsdag\n        ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        _cache[15] || (_cache[15] = (0, import_vue5.createTextVNode)()),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          id: "dagar-fredag",
          modelValue: _ctx.dagar,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.dagar = $event),
          value: "fredag"
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[10] || (_cache[10] = [
            (0, import_vue5.createTextVNode)("\n            Fredag\n        ")
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
    selector: "#FFieldsetCheckbox"
  });
})();