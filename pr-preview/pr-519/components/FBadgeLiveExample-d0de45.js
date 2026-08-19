// docs/src/setup.ts
import { createApp, h } from "vue";
import {
  ErrorPlugin,
  FErrorHandlingApp,
  FormatPlugin,
  TestPlugin,
  TranslationPlugin,
  ValidationPlugin,
  setRunningContext
} from "@fkui/vue";
function setup(options) {
  const { rootComponent, selector } = options;
  const app = createApp({
    render() {
      return h(FErrorHandlingApp, { defaultComponent: rootComponent });
    }
  });
  setRunningContext(app);
  app.use(ErrorPlugin, {
    captureWarnings: true,
    logToConsole: true
  });
  app.use(ValidationPlugin);
  app.use(TestPlugin);
  app.use(TranslationPlugin);
  app.use(FormatPlugin);
  app.mount(selector);
}

// virtual-entry:virtual:packages/vue/src/components/FBadge/examples/FBadgeLiveExample.vue:FBadgeLiveExample-d0de45.js
import { defineComponent } from "vue";
import { FCheckboxField, FBadge, FSelectField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FBadgeLiveExample",
  components: { LiveExample, FCheckboxField, FSelectField },
  data() {
    return {
      isInverted: false,
      badgeType: "standard"
    };
  },
  computed: {
    components() {
      return { FBadge };
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_select_field, {
        modelValue: _ctx.badgeType,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.badgeType = $event)
      }, {
        label: _withCtx(() => _cache[2] || (_cache[2] = [
          _createTextVNode(" Typ ")
        ])),
        default: _withCtx(() => [
          _cache[3] || (_cache[3] = _createElementVNode(
            "option",
            { value: "standard" },
            "Standard",
            -1
            /* HOISTED */
          )),
          _cache[4] || (_cache[4] = _createElementVNode(
            "option",
            { value: "warning" },
            "Varning",
            -1
            /* HOISTED */
          )),
          _cache[5] || (_cache[5] = _createElementVNode(
            "option",
            { value: "error" },
            "Fel",
            -1
            /* HOISTED */
          )),
          _cache[6] || (_cache[6] = _createElementVNode(
            "option",
            { value: "success" },
            "Framg\xE5ng",
            -1
            /* HOISTED */
          )),
          _cache[7] || (_cache[7] = _createElementVNode(
            "option",
            { value: "info" },
            "Info",
            -1
            /* HOISTED */
          ))
        ]),
        _: 1,
        __: [3, 4, 5, 6, 7]
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isInverted,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.isInverted = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[8] || (_cache[8] = [
          _createTextVNode(" Inverterad ")
        ])),
        _: 1,
        __: [8]
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["components", "template"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-d0de45"
});
export {
  render
};
