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

// virtual-entry:virtual:packages/vue/src/components/FNavigationMenu/examples/FNavigationMenuLiveExample.vue:FNavigationMenuLiveExample-6eeaab.js
import { defineComponent } from "vue";
import { FCheckboxField, FNavigationMenu } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FNavigationMenuLiveExample",
  components: { LiveExample, FCheckboxField },
  data() {
    return {
      isVertical: false
    };
  },
  computed: {
    livedata() {
      return {
        routes: [
          { label: "label1", route: "ROUTE_1" },
          { label: "label2", route: "ROUTE_2" },
          { label: "label3", route: "ROUTE_3" },
          { label: "label4", route: "ROUTE_4" },
          { label: "label5", route: "ROUTE_5" }
        ]
      };
    },
    components() {
      return { FNavigationMenu };
    },
    vertical() {
      return this.isVertical ? "vertical" : "";
    },
    template() {
      return (
        /* HTML */
        `
                <f-navigation-menu
                    aria-label="Example navigation"
                    :routes="routes"
                    ${this.vertical}
                ></f-navigation-menu>
            `
      );
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livedata: _ctx.livedata
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isVertical,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.isVertical = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[1] || (_cache[1] = [
          _createTextVNode(
            " Vertikal ",
            -1
            /* CACHED */
          )
        ])]),
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
  selector: "#example-6eeaab"
});
export {
  render
};
