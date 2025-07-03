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

// virtual-entry:virtual:packages/vue/src/components/FTooltip/examples/FTooltipLiveExample.vue:FTooltipLiveExample-7cbd36.js
import { defineComponent } from "vue";
import { FLabel, FTooltip, FCheckboxField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FTooltipLiveExample",
  components: { LiveExample, FCheckboxField },
  data() {
    return {
      hasHeader: false,
      longText: false
    };
  },
  computed: {
    components() {
      return {
        FLabel,
        FTooltip
      };
    },
    header() {
      return this.hasHeader ? "<template #header> L\xE4r dig mer om [..] </template>" : "";
    },
    headerTag() {
      return this.hasHeader ? 'header-tag="h2"' : "";
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
                        <f-tooltip
                            screen-reader-text="Denna text syns bara f\xF6r sk\xE4rml\xE4sare"
                            ${this.headerTag}
                        >
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
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.hasHeader,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.hasHeader = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[2] || (_cache[2] = [
          _createTextVNode(" Rubrik i tooltip ")
        ])),
        _: 1,
        __: [2]
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.longText,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.longText = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[3] || (_cache[3] = [
          _createTextVNode(" L\xE5ng text ")
        ])),
        _: 1,
        __: [3]
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["components", "template"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-7cbd36"
});
export {
  render
};
