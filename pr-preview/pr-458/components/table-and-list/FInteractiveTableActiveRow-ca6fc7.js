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

// virtual-entry:virtual:packages/vue/src/components/FInteractiveTable/examples/FInteractiveTableActiveRow.vue:FInteractiveTableActiveRow-ca6fc7.js
import { defineComponent } from "vue";
import { FInteractiveTable, FTableColumn, FCheckboxField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FInteractiveTableStyling",
  components: { LiveExample, FCheckboxField },
  data() {
    return {
      showActiveRow: true
    };
  },
  computed: {
    livedata() {
      return {
        items: [
          {
            id: "1",
            level: "F\xF6r\xE4ldrapenning",
            start: "2022-04-11",
            end: "2022-04-20",
            antal: "10"
          },
          {
            id: "2",
            level: "Tillf\xE4llig f\xF6r\xE4ldrapenning",
            start: "2022-05-02",
            end: "2022-05-04",
            antal: "3"
          },
          {
            id: "3",
            level: "F\xF6r\xE4ldrapenning",
            start: "2022-05-16",
            end: "2022-05-27",
            antal: "11"
          }
        ]
      };
    },
    components() {
      return { FInteractiveTable, FTableColumn };
    },
    showActive() {
      return this.showActiveRow ? "" : `:showActive="false"`;
    },
    template() {
      return (
        /* HTML */
        `
                <f-interactive-table :rows="items" ${this.showActive} key-attribute="id">
                    <template #default="{ row }">
                        <f-table-column name="level" title="Niv\xE5" type="text">
                            {{ row.level }}
                        </f-table-column>
                        <f-table-column name="start" title="Fr\xE5n och med" type="text" expand>
                            {{ row.start }}
                        </f-table-column>
                        <f-table-column name="end" title="Till och med" type="text">
                            {{ row.end }}
                        </f-table-column>
                        <f-table-column name="antal" title="Antal dagar" type="numeric">
                            {{ row.antal }}
                        </f-table-column>
                    </template>
                </f-interactive-table>
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
        modelValue: _ctx.showActiveRow,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.showActiveRow = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[1] || (_cache[1] = [
          _createTextVNode("Visa aktiv rad")
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
  selector: "#example-ca6fc7"
});
export {
  render
};
