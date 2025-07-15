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

// virtual-entry:virtual:packages/vue/src/components/FDefinitionList/examples/FDefinitionListLiveExample.vue:FDefinitionListLiveExample-36351a.js
import { defineComponent } from "vue";
import { FCheckboxField, FDefinitionList } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FDefinitionListLiveExample",
  components: { FCheckboxField, LiveExample },
  data() {
    return {
      useAlignedLayout: false
    };
  },
  computed: {
    livedata() {
      return {
        exampleDefinitions: [
          { term: "Skulle ha jobbat", description: "8 timmar" },
          { term: "Vabbade", description: "8 timmar" },
          { term: "Omfattning", description: "100 procent" }
        ]
      };
    },
    components() {
      return {
        FDefinitionList
      };
    },
    aligned() {
      return this.useAlignedLayout ? "aligned" : "";
    },
    template() {
      return (
        /* HTML */
        `
                <f-definition-list :definitions="exampleDefinitions" ${this.aligned} />
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
        modelValue: _ctx.useAlignedLayout,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.useAlignedLayout = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[1] || (_cache[1] = [
          _createTextVNode(" Anv\xE4nd justerad layout ")
        ])),
        _: 1,
        __: [1]
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["components", "template", "livedata"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-36351a"
});
export {
  render
};
