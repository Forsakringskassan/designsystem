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

// virtual-entry:virtual:packages/vue/src/components/FTable/examples/FTableExpandableLiveExample.vue:FTableExpandableLiveExample-5a8ab7.js
import { defineComponent as _defineComponent } from "vue";
import { computed, ref } from "vue";
import { FCheckboxField, FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";
import { LiveExample, createElement } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableExpandableLiveExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const data = [
      {
        namn: "Apelsin",
        land: "Spanien"
      },
      {
        namn: "Banan",
        land: "Columbia"
      },
      {
        namn: "\xC4pple",
        land: "",
        nested: [
          {
            namn: "Aroma",
            land: "Sverige"
          },
          {
            namn: "Ingrid Marie",
            land: "Sverige"
          },
          {
            namn: "Pink Lady",
            land: "Italien"
          }
        ]
      }
    ];
    const columns = defineTableColumns([
      {
        type: "text",
        header: "Namn",
        key: "namn"
      },
      {
        type: "text",
        header: "Land",
        key: "land"
      }
    ]);
    const rows = useDatasetRef(data, "nested");
    const useCustom = ref(false);
    const components = {
      FTable
    };
    const livedata = {
      rows,
      columns
    };
    const customSlot = computed(() => {
      if (!useCustom.value) {
        return [];
      }
      return [
        createElement("template", { "#expandable": "{ row }" }, [
          "\n",
          createElement("pre", ["{{ row }}"]),
          "\n"
        ])
      ];
    });
    const template = computed(() => {
      return createElement("f-table", { ":rows": true, ":columns": true }, customSlot.value);
    });
    const __returned__ = { data, columns, rows, useCustom, components, livedata, customSlot, template, get FCheckboxField() {
      return FCheckboxField;
    }, get LiveExample() {
      return LiveExample;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["LiveExample"], {
    components: $setup.components,
    template: $setup.template,
    livedata: $setup.livedata
  }, {
    default: _withCtx(() => [
      _createVNode($setup["FCheckboxField"], {
        modelValue: $setup.useCustom,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.useCustom = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[1] || (_cache[1] = [
          _createTextVNode(
            " Valfritt inneh\xE5ll ",
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
  }, 8, ["template"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-5a8ab7"
});
export {
  render
};
