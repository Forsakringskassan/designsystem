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

  // virtual-entry:./packages/vue/src/components/FBadge/examples/FBadgeLiveExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FBadgeLiveExample",
    components: { LiveExample: import_docs_live_example.LiveExample, FCheckboxField: import_vue4.FCheckboxField, FSelectField: import_vue4.FSelectField },
    data() {
      return {
        isInverted: false,
        badgeType: "standard"
      };
    },
    computed: {
      components() {
        return { FBadge: import_vue4.FBadge };
      },
      inverted() {
        const template = (
          /* HTML */
          ` inverted`
        );
        return this.isInverted ? template : "";
      },
      status() {
        const BadgeType = this.badgeType;
        if (this.badgeType === "standard") {
          const template = (
            /* HTML */
            ``
          );
          return this.badgeType ? template : "";
        } else {
          const template = (
            /* HTML */
            ` status="${BadgeType}" `
          );
          return this.badgeType ? template : "";
        }
      },
      template() {
        return (
          /* HTML */
          ` <f-badge ${this.status} ${this.inverted}> Text </f-badge> `
        );
      }
    }
  });
  var _hoisted_1 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "standard" },
    "Standard",
    -1
    /* HOISTED */
  );
  var _hoisted_2 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "warning" },
    "Varning",
    -1
    /* HOISTED */
  );
  var _hoisted_3 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "error" },
    "Fel",
    -1
    /* HOISTED */
  );
  var _hoisted_4 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "success" },
    "Framg\xE5ng",
    -1
    /* HOISTED */
  );
  var _hoisted_5 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "info" },
    "Info",
    -1
    /* HOISTED */
  );
  function render(_ctx, _cache) {
    const _component_f_select_field = (0, import_vue5.resolveComponent)("f-select-field");
    const _component_f_checkbox_field = (0, import_vue5.resolveComponent)("f-checkbox-field");
    const _component_live_example = (0, import_vue5.resolveComponent)("live-example");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_live_example, {
      components: _ctx.components,
      template: _ctx.template
    }, {
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_select_field, {
          modelValue: _ctx.badgeType,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.badgeType = $event)
        }, {
          label: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(" Typ ")
          ]),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(),
            _hoisted_1,
            (0, import_vue5.createTextVNode)(),
            _hoisted_2,
            (0, import_vue5.createTextVNode)(),
            _hoisted_3,
            (0, import_vue5.createTextVNode)(),
            _hoisted_4,
            (0, import_vue5.createTextVNode)(),
            _hoisted_5
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isInverted,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.isInverted = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(" Inverterad ")
          ]),
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
    selector: "#FBadgeLiveExample"
  });
})();
